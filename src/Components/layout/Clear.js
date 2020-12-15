import React, { Fragment } from 'react'

const Clear = ({clearUsers,length}) => {
  console.log(length);
  if(length<=0)
  return null;
  return (
   <Fragment>
     {/* <span>{length}</span> */}
     <span className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</span>
   </Fragment>
  )
}

export default Clear
