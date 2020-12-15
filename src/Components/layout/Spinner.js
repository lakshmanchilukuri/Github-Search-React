import React, { Fragment } from 'react'
import spinner from "../layout/spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} style={{width:"250px", margin:"auto" , display:"block"}}></img>
    </Fragment>
  )
}

export default Spinner
