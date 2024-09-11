import React from 'react'

const Author = ({author}) => {
  if (!author) {
    return <h1>Nothing to display</h1>;
  }

  console.log(author)
  return (
    <div>

<div className=' bg-slate-500  bg-opacity-40 w-[95%] my-16 relative rounded-xl'>
       <div className=' text-white absolute -top-10 left-[45%] rounded-xl'>
          <img src={author?.authorImage?.url} className='w-[80px] h-[80px] rounded-full bg-slate-500  bg-opacity-70 p-2'/>
       </div>
       <div className='p-10 flex flex-col justify-center items-center space-y-2'>
         <h1 className='text-[28px] font-jakarta uppercase tracking-wider text-slate-50'>{author.authorName}</h1>
         <h1 className='text-[20px] text-slate-100 font-montserrat font-extralight'>{author.authorBio}</h1>
       
       </div>

      
    </div>

    </div>
  
  )
}

export default Author
