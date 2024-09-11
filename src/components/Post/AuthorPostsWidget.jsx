'use client'
import React from 'react'
import { getAuthorPosts, getAuthorPostsList } from './../../graphql/graphql';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const AuthorPostsWidget = (authorSlug) => {
  const params = useParams()
  const {slug} = params;
  const [posts, setPosts]= useState([]);

  //deconstructing authorid which is string from authorSlug object
  const author = authorSlug.authorId
  console.log("author post post slut" , author, slug)
  useEffect(() => {
    if (author) {
      getAuthorPostsList(author, slug)
        .then((data) => setPosts(data))  
    }
  }, [author]);

  return (
    <div className='bg-slate-100 p-2 pb-4 space-y-4 rounded-md w-full pr-6 shadow-sky-700 shadow-inner'>
    <div className='flex justify-center items-center w-full my-1 mb-4'>
    <h1 className='flex text-center text-sky-700 tracking-[1px] font-barlow text-[24px]'> Author's Posts</h1>
    </div>
  
    {
      posts.map((post)=>(
        <div className='flex flex-row'>
            <div className='flex flex-col w-[30%] items-center'>
              <img src={post.node.featuredImage.url} className='h-20 w-20 rounded-xl'/>
              <h1 className='text-[14px] font-barlow'>{moment(post.node.createdAt).format('MMM DD, YYYY')}</h1>
            </div>
            <div className='flex flex-col w-[70%]'>
                 <Link className='font-roboto uppercase text-black hover:tracking-[0.3px] transition-all duration-500 hover:text-sky-500 hover:font-semibold ' href={`/post/${post.node.postSlug}`}>{post.node.postTitle}</Link>
                 <h1 className='text-[13px] font-montserrat text-justify'> {post.node.postExcerpt.length > 90 
                    ? `${post.node.postExcerpt.substring(0, 90)}...` 
                    : post.node.postExcerpt}</h1>
            </div>

            </div>
      
    

        ))
      }


    
  </div>
  )
}

export default AuthorPostsWidget
