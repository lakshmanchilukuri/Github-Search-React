import React from 'react';

const Alert = ({alert}) => {
  if (alert===null)
  return null;
  
  return (
   
    <div className={`alert alert-${alert.type} mt-2`}>{alert.msg}</div>
      
  )
}

export default Alert
