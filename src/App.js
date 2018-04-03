import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Header from './components/Header';
class App extends Component {
    onHandleChange = (e) => {
      let{dispatch} = this.props;
      dispatch({type: 'UPDATE_USERNAME', username:e .target.value})
    }
    
    onUserSearch = () => {
      let{dispatch} = this.props;
      let{username} = this.props;
      fetch(`https://api.github.com/users/${username}`)
        .then(res => {
          return res.json()
        })
        .then(res =>{
          dispatch({type: 'UPDATE_USERPROFILE', userprofile: res})
        })
    }
    onRepoFetch = () => {
      let {dispatch} = this.props;
      let {repos_url} = this.props.userprofile;
      fetch(repos_url)
        .then(res => {
          return res.json()
        })
        .then(res => {
          dispatch({type: 'UPDATE_REPOS', repos: res})
        })
    }
  render() {
    let {userprofile} = this.props;
    let repos = this.props.repos.map((repo, i) => {
      return <li key={i}>{repo.name}</li>
    })
    return (
      <div>
        <Header />
        <div id="allcontent">
        {/* <h1>{this.props.username}</h1> */}
        <input type="text"
               class="inputrepos"
               onChange={this.onHandleChange}
               value={this.props.user} />
        <button onClick={this.onUserSearch}>Search GitHub Username</button>
        <hr/>
        <h3>{userprofile.login}</h3>
        <img src={userprofile.avatar_url} alt=""/>
        <hr/>
        <button id="repofetchbtn" onClick={this.onRepoFetch}>Fetch Repos</button>
        {repos}
      </div></div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos
  }
}
export default connect(mapStateToProps)(App);
