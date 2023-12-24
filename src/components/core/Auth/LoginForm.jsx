import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex flex-col justify-center p-8 md:p-14 outline-1 outline-white outline-double rounded-tl-lg rounded-bl-lg'>
      <span className='mb-3 text-4xl font-bold'>Welcome Again!!</span>
      <span className='font-light text-gray-400 mb-8'>Please Enter Your details</span>
      <div className='py-4'>
        <span className='mb-2 text-md'>E-mail</span>
        <input type='email' className=' w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500' name='email' id="email" />
      </div>
      <div className=' py-4'>
        <span className='mb-2 text-md'>Password</span>
        <input type="password" nme="pass" id="pass" className=' w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500' />
      </div>
      <div className='flex justify-between w-full py-4'>
        <div className=" mr-24">
          <input type="checkbox" name="ch" id="ch" className='mr-2' />
          <span className=' text-md'>Remember for 30 days</span>
        </div>
        <span className=' font-bold text-md'>forgot password</span>
      </div>
      <button className=' w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300'>Sign in</button>
      <button className=' w-full border border-gray-300 text-base p-2 rounded-lg mb-6 hover:bg-black hover:text-white ' > Sign in with Google</button>
      <div className=' text-center text-pure-greys-400 '>
        Don't have an Account
        <span className='font-bold text-black ml-4'>Sign Up for Free</span>
      </div>
    </div>
  )
}

export default LoginForm