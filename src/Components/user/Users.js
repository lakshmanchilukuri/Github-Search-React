import React from 'react'
import UserCard from './UserCard';

const Users = ({users}) => {
 if(users.length===0)
 return null;

  return (
    <div className="row">{
      
      
      users.map((user)=>(
        <div className="col-sm-3">
        <UserCard key={user.login} username={user.login} avatar={user.avatar_url} />
        </div>
      ))
     
    }
    </div>
  )
}

export default Users
