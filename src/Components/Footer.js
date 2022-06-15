import React from 'react'

function Footer() {
  return (
    <div className='flex-col' id='footer'>
      <div className='grid h-[44vh] place-conten-start justify-center'>
      <img src='./images/logo.png' alt='logo' width='150vh' height='150vh'/>
      </div>
        <div className='bg-green-400'>
          <p className='text-sm text-white p-2'>Copyright© 2022 Foodzo. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer