import React,{useState} from 'react'

const Search = ({searchUsers,setAlert}) => {

 const [text,setText]=useState('');
 
  // {{searchUser}}=props;

  function onChange (e){
    setText(e.target.value)
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    if(text===''){
    console.log('alert logic');
    setAlert('please enter user','danger');
    }
    else{
    // props.searchUsers(text);
    searchUsers(text);
    setText('');
    }
  }

  return (
    <div className="pt-4">
      <form onSubmit={onSubmit}>
      <input type="text" className="w-100 rounded py-1" placeholder="Type Github user...."  value={text} onChange={onChange}></input>
      <button className="btn btn-block btn-primary my-2">Search</button>

      </form>
    </div>
  )
}

export default Search
