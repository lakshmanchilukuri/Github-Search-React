import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({username, avatar}) => {
  return (
    // style={{width:"250px"}}
    <div className="card m-2  py-2 text-center"  >
       <img src={avatar}  alt=''
        className='rounded-circle'
        style={{ width: '60px' }} ></img> 
      <h3>{username}</h3>
      <Link to={`/user/${username}`} className="btn btn-dark" rel="noopener noreferrer" >More</Link>
       
    </div>
  )
}

export default UserCard
