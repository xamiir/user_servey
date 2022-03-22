import React, { useState } from 'react'

import Button from './UI/Button'
import Card from './UI/Card'
import styles from "./Addperson.module.css"



const AddPerson=(props) =>{
  const [fullName,setFullName]=useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState("");

  const changeFullName=(e)=>{
    setFullName(e.target.value)
  };
  const changeUsername=(e)=>{
    setUsername(e.target.value)
  };
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  };
  const changeAge=(e)=>{
    setAge(e.target.value)
  };
  const submitFormHandler=(e)=>{
    e.preventDefault();
    if(fullName.trim().length==0){
      alert("FullName is empity")
    }
    if(username.trim().length==0)
    {
      alert("user is valid")
    }
    if(email.trim().length==0){
      alert("email is valid")
    }
    if(age==0){
      alert("please Enter Age")
    }
    if(age<=15){
      alert("waxaa user_servey oo aqbali karaa kaliye qof kii kii weyn 15")
    }
  const data={
    fullName,
    username,
    email,age
  }
  props.onAddPerson(data)

    
  }

  return (
    <div className={styles.addPerson}>
      
    <Card>
    <form onSubmit={submitFormHandler}>
    <div className={styles.input_group}>
      <label htmlFor='fullname' className={styles.label}>fullname:</label>
      <input type="text" id="fullname"
       name="fullname" 
       value={fullName}
       onChange={changeFullName}
      className={styles.input_control}  ></input>
    </div>
    <div className={styles.input_group}>
      <label htmlFor='username' username={styles.label}>UserName:</label>
      <input type="text" id="username" 
      name="username"
      value={username}
       onChange={changeUsername}
       className={styles.input_control}  ></input>
    </div >
    <div className={styles.input_group}>
      <label htmlFor='Email' className={styles.label}>Email:</label>
      <input type="Emaail" id="Email" name="Email"
      value={email}
      onChange={changeEmail}
      className={styles.input_control}  ></input>
    </div>
    <div className={styles.input_group}>
      <label htmlFor='age' className={styles.label}>Age:</label>
      <input type="number" id="age" name="age" 
      value={age}
      onChange={changeAge}
      className={styles.input_control} ></input>

    </div>
    <div className={styles.Button_control}>
     <Button/>
    </div>
    {/* <div className="flex gap-2">
    
     <span
    className="flex gap-1 text-red-500 hover:bg-red-600 hover:text-white px-2 cursor-pointer  hover:rounded-full"
   //onClick={isDeletTask}
     >
    <TrashIcon className="w-5 h-5 " /> Remove
      </span>
      </div> */}
    </form>


    </Card>
    

   </div>
  )
}

export default AddPerson