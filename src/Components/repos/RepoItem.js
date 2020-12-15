import React from 'react'

const RepoItem = ({ repo }) => {
  return (
    // d-flex justify-content-between
    <div className="my-2 p-2 border-top border-dark row">
      <h3 className="col-sm-6"> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
      <div className="col-sm-6 ">
        <div className="row">
          <span className="badge badge-danger m-2 p-2 col-sm-3">Stars: {repo.stargazers_count}</span>
          <span className="badge badge-success m-2 p-2 col-sm-3">Watchers: {repo.watchers_count}</span>
          <span className="badge badge-info m-2 p-2 col-sm-3">Forks: {repo.forks_count}</span>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
