import React from 'react'

function Footer() {
  return (
    <div className='flex-col' id='footer'>
      <div className='grid h-[44vh] place-conten-start justify-center'>
      <img src='./images/logo.png' alt='logo' width='165' height='165'/>
      </div>
        <div className='bg-green-400 h-[6vh]'>
          <p className='text-sm text-white p-4'>Copyright© 2022 Foodzo. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer