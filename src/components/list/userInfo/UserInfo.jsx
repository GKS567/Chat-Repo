import React from 'react'

function UserInfo() {
  return (
      <div className='userInfo'>
          <div className='user'>
              <img src='avatar.png' alt='user'/>
              <h2>Cya kan</h2>
          </div>
          <div className='icons'>
              <img src='./more.png' alt=''/>
              <img src='./video.png' alt=''/>
              <img src='./edit.png' alt=''/>
          </div>
    </div>
  )
}

export default UserInfo