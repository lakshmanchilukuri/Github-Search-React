import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({username, avatar}) => {
  return (
    <div className="card m-2  py-2 d-flex align-items-center" style={{width:"250px"}} >
       <img src={avatar}  alt=''
        className='rounded-circle'
        style={{ width: '60px' }} ></img> 
      <h3>{username}</h3>
      <Link to={`/user/${username}`} className="btn btn-dark" rel="noopener noreferrer" >More</Link>
       
    </div>
  )
}

export default UserCard
