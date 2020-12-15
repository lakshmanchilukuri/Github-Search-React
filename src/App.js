import './App.css';
import React,{Fragment, useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/Navbar"
import Search from "./Components/layout/Search"
import Alert from "./Components/layout/Alert"
import Users from "./Components/user/Users"
import User from "./Components/user/User"
import Clear from "./Components/layout/Clear"
import Spinner from './Components/layout/Spinner';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import Loader from 'react-loader-spinner'

function App() {
  const githubClientId='e8c05da744f7b8e5e661';
const githubClientSecret='67c376d361c7698c8d15baa098b22cedbb098440';
  

 const [alert, setAlert] = useState(null);
 const [users, setUsers] = useState([]);
 const [repos, setRepos] = useState([]);
 const [user, setUser] = useState({});
 const [loading, setLoading] = useState(false);

const searchUsers=async (text)=>{
  console.log(text);
  setLoading(true);
  let prom= await fetch(
    `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  
  let data=await prom.json();
  setLoading(false);
  setUsers(data.items);
}

const getUser=async (username)=>{
  console.log("gtuser");
  console.log(user);
  setLoading(true);
  console.log('loading set to '+loading);
  const response = await fetch(
    
    `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  
  let data=await response.json();
  setLoading(false);
  setUser(data);
  
}

const getRepos=async (username)=>{
  
  console.log(user);
  setLoading(true);
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  
  let data=await response.json();
  setLoading(false);
  setRepos(data);
}

const setAlertmsg=(msg,type)=>{
  console.log(msg+type);

  setAlert({msg:msg,type:type})
  
  setTimeout(()=>setAlert(null),2000);
}

const clearUsers=()=>{
  setUsers([]);
}


  return (
    <div className="App">
      <Router >
      <Navbar/>
      <div className="container">
      <Switch>
      <Route exact path="/"  render={props=>(
      <Fragment>
        <Alert  alert={alert} />
        <Search  searchUsers={searchUsers} setAlert={setAlertmsg}  />
        <Clear clearUsers={clearUsers} length={users.length}></Clear>
        <Users  users={users} />
        {/* {loading &&<Spinner/>} */}
        {loading&&<Loader className="spinner" type="TailSpin" color="black" height={80} width={80} />}

        
      </Fragment>
      )}/>    
        
 
        <Route exact path="/user/:username" render={props=>(
          <User {...props} getUser={getUser} getRepos={getRepos}   user={user} repos={repos} loading={loading}/>
        )}/>

        <Route exact path="/about" component={About}/>
        <Route component={NotFound} />
      </Switch>
       </div>  
      </Router> 
    </div>
  );
}

export default App;
