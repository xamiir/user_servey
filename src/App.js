
// import { data } from 'autoprefixer';
import { useState } from 'react';
import './App.css';
import AddPerson from './Components/AddPerson';
import Card from './Components/UI/Card';
import UserList from './Components/UserList';

const App=() => {
  const [userList, setUserList] =useState([]);

  const createPersonHandler=(data)=>{
    const id = Math.random()*1000;
    setUserList((prevPersons)=>{
      return[
        
        ...prevPersons,{
        
          id:id,
          ...data
        },
      ];
    });
  };
  const deleteUserHandler= (dataId) => {
    setUserList((prevPersons) => {
      const prevUpdate = prevPersons.filter((data) => data.id !== dataId);

      return prevUpdate;
    });
  };

  return (
    <section className='bg-blue-50 h-screen w-screen pt-16 font-nunito flex  flex-col'>
    
  <AddPerson onAddPerson={createPersonHandler}/>
  <UserList  users={userList}/>
  
  
    </section>
  );
}

export default App;
