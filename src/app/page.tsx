"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {

  const [likes,setLikes] = useState(0)
  function handleClick(){
    setLikes(likes + 1)
  }
  return (
  
    <div className='h-[100vh] bg-slate-400 flex justify-center items-center flex-col'>
      <h1 className='text-6xl mb-5 text-blue-700'><i>Create a like Button </i> </h1>
      <div className=''>
      <Image src={"/riaz1.jpg"} height={100} width={300} alt='image'></Image>
      </div>
      
      <div className='text-2xl  p-2 px-2 mt-10 flex items-center justify-center rounded-md hover:scale-125 duration-75 bg-blue-300 text-gray-800'>

      <Image onClick={handleClick} src={"https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png"} height={50} width={50} alt='image' className='hover:cursor-pointer'></Image>
      <button className='' onClick={handleClick}>Like ({likes})</button>
      </div>
     
    </div>
  )
  
}

export default Page