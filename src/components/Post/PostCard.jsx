import React from 'react'
import moment from 'moment';
import { CgCalendarDates } from "react-icons/cg";
import Link from 'next/link';


const PostCard = ({post}) => {



  const profileImage = post?.node?.author?.authorImage ? post.node.author.authorImage.url : '/images/logoDefault.jpg';


  return (
    <div className='ml-[14px] border bg-slate-100 rounded-md border-gray-500 w-[700px] p-4 flex flex-col items-center '>
    
       <img src={post.node.featuredImage.url} alt='image' className='h-[400px] w-[700px] rounded-md'/>

       <h1 className='font-barlow tracking-[1px] font-normal text-black text-[24px] uppercase w-full text-center mt-3'>{post.node.postTitle}</h1>
       <h1 className='text-[18px]'>{post.node.category?.categoryName}</h1>

       <div className='flex flex-row w-full justify-between my-2'>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={profileImage} alt='author' className='w-[30px] h-[30px] border-2 border-primary rounded-full'/>
            <h1 className='text-slate-600 font-montserrat font-medium tracking-[2px]'>{post.node.author?.authorName}</h1>
          </div>

          <div className='flex items-center space-x-2'>
            <CgCalendarDates size={20} className='text-slate-700'/>
            <h1 className='text-[14px] text-slate-600'>{moment(post.node.createdAt).format('MMM DD, YYYY')}</h1>
          </div>
       </div>
 
       <h1 className=' font-barlow font-light tracking-[1px] text-[18px] text-black w-[90%] text-center mt-6'>{post.node.postExcerpt}</h1>

       <Link href={`/post/${post.node.postSlug}`} className='p-2 px-8 font-jakarta bg-sky-800 rounded-full text-white my-8 transition duration-500 transform hover:-translate-y-1 hover:translate-x-2 pb-[10px]'>Continue Reading</Link>
    
    </div>
  )
}

export default PostCard
