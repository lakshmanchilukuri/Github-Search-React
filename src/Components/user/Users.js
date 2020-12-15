import React from 'react'
import UserCard from './UserCard';

const Users = ({users}) => {
 if(users.length===0)
 return null;

  return (
    <div className="row">{
      
      users.map((user)=>(
        <UserCard key={user.login} username={user.login} avatar={user.avatar_url} />
      ))
     
    }
    </div>
  )
}

export default Users
