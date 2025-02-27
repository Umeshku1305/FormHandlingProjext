import React from 'react'

const User = (props) => {
  return (
    <div className='w-60 h-60 bg-white text-red-400 m-4 rounded-md p-10 text-2xl absolute top-0 left-0 '>

        {props.elem.fullName}
    </div>
  )
}

export default User