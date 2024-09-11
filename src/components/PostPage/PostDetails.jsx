import React from 'react'
import moment from 'moment';
import { CgCalendarDates } from "react-icons/cg";
import { getContentFragment } from './../../utils/getContentFragment';
import Link from 'next/link';

const PostDetails = ({post}) => {

  if (!post || Object.keys(post).length === 0) {
    return <h1>Nothing to display</h1>;
  }
  
    const profileImage = post.author?.authorImage?.url ? post.author.authorImage.url : '/images/logoDefault.jpg';
    
 
  

  return (
   
    <div className='rounded-t-xl w-[95%]  flex flex-col items-center mt-20'>
      <div className='w-full bg-slate-100 rounded-xl'>
         <img src={post.featuredImage.url} alt='image' className='w-full  h-[70vh] bg-center rounded-t-xl'/>
          <div className='w-full px-4'>
              
                <div className='flex flex-row justify-between w-full my-4'>
                  <div className='flex flex-row space-x-2 items-center'>
                    <img src={profileImage} alt='author' className='w-[30px] h-[30px] border-2 border-primary rounded-full'/>
               
                    <h1 className='text-slate-600 font-montserrat font-medium tracking-[1px] text-[18px]'>{post.author.authorName}</h1>
                  </div>

                  <div className='flex justify-center items-baseline space-x-2'>
                    <h1 className='font-roboto text-slate-700'>Published: </h1>
                    <h1 className='font-roboto text-slate-600'>{moment(post.createdAt).format('MMM DD, YYYY')}</h1>
                  </div>
                </div>

                <h1 className='font-barlow font-semibold tracking-[1px] text-gray-800 uppercase text-[35px] w-full text-start mt-10'>{post.postTitle}</h1>

                <div className='my-8 text-[18px] font-montserrat text-justify leading-7'>
                    {post.postContent.raw.children.map((typeObj, index) => {
                      const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                      return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>

               
          </div>
        
      </div>

      
 
   
    
    </div>
  )
}

export default PostDetails
