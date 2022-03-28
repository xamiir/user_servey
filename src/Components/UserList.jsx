import { data } from 'autoprefixer'
import React from 'react'
import Card from './UI/Card'
import User from './User'
import styles from './Userlist.module.css'

const UserList = (props) => {

  
  return (
    <div className={styles.userList}>
        <Card>
           {props.users.map((user)=>{
               return(
              <User key={user.id} user={user}
              deletePerson={props.onDelete}
              />
               )
           })}
        </Card>
    </div>
  )
}

export default UserList