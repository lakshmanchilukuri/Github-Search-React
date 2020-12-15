import React from 'react'
import RepoItem from '../repos/RepoItem'

const Repos = ({repos}) => {
  return (
    <div className="m- border border-light p-4"> 
      {repos.map((repo)=>(
        <RepoItem key={repo.id} repo={repo}/>
      ))}
      
    </div>
  )
}

export default Repos



