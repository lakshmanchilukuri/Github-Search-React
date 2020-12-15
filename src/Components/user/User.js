import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Repos from "../repos/Repos"
import Spinner from "../layout/Spinner";


const User = ({ getUser, getRepos, user, repos, match ,loading}) => {
  useEffect(() => {
    getUser(match.params.username);
    getRepos(match.params.username);
  }, [])

  if(loading){
    return(
    <Fragment>
      <Spinner/>
    </Fragment>
    )
  }

  let {
    login,
    avatar_url,
    bio,
    name,
    location,
    hireable,
    html_url,
    blog,
    company,
    followers,
    following,
    public_repos,
    public_gists


  } = user;
  // bio=null;
  return (
    <div>
      <Link to="/" className="btn btn-secondary mt-2">Retun to Home</Link>
      <span className="ml-2">Hireable : {hireable?<i className='fas fa-check text-success' />:<i className='fas fa-times text-danger' />}</span>
      <div className="container card mt-2">

        <div className="row mt-2">
          <div className="col-sm-6 py-4 text-center">
            <img src={avatar_url} className="rounded-circle" style={{width:"200px"}}></img>
            <h2>{name}</h2>
            <h6>Location:{location}</h6>
          </div>
          <div className="col-sm-6 py-4 ">
            {bio&&<Fragment>
            <h3>Bio</h3>
            <span>{bio}</span>
            </Fragment>}
            <a href={html_url} className="btn btn-secondary m-4" target="_blank">Visit Github Profile</a>
            <div>Username : {login}</div>
            <div>Company : {company}</div>
            <div>Website : {blog}</div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
               <span className="badge badge-danger m-2 p-2">Followers : {followers}</span>
               <span className="badge badge-success m-2 p-2">Following : {following}</span>
               <span className="badge badge-warning m-2 p-2">Public_repos : {public_repos}</span>
               <span className="badge badge-info  m-2 p-2">public_gists : {public_gists}</span>
      </div>

      <Repos repos={repos}/>
    </div>
  )
}

export default User
