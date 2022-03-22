import { data } from 'autoprefixer'
import React from 'react'
import Card from './UI/Card'
import User from './User'
import styles from './Userlist.module.css'

const UserList = (prpos) => {
  return (
    <div className={styles.userList}>
        <Card>
           {prpos.users.map((user)=>{
               return(
              <User key={user.id} user={user}
              />
               )
           })}
        </Card>
    </div>
  )
}

export default UserList