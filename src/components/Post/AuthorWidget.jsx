'use client'
import { getAuthors, getCategories } from './../../graphql/graphql';
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';

const AuthorWidget = () => {
  const slug = useParams();
  const [authors, setAuthors]= useState([]);

  console.log("slug in cate ", slug)

  useEffect(()=>{
    getAuthors().then(data=>setAuthors(data))
   
  },[])

  return (
    <div className='bg-white text-black p-2 space-y-4 rounded-md w-[95%] pb-8 shadow-sky-700 shadow-inner'>
      <div className='flex w-full justify-center'>
      <h1 className='flex text-center font-barlow text-[24px] font-meduim text-sky-700 tracking-[1px]'>Posts by Author</h1>
      </div>
          <ul className=" pl-8 items-center">
              {authors.map((author) => (
                <li key={author.node.id} className="mb-2 text-[25px] text-sky-700"> {/* Each item is now a proper <li> */}
                  <div className="flex flex-row border-b border-sky-600 py-1 w-[70%]">
                           <img src={author.node.authorImage.url} className='w-12 h-12 rounded-full' alt='author'/>
                            <Link href={`/author/${author.node.authorSlug}`} className={` mt-2 ml-4 text-[18px]  hover:tracking-[1px] transition-all duration-500  font-montserrat text-gray-700 hover:text-sky-500 hover:font-semibold  ${slug.slug===author.node.authorSlug? 'font-bold text-sky-800' : 'font-normal'}`}>
                            {author.node.authorName}
                            </Link>
                  </div>
                </li>
              ))}
          </ul>
    </div>
  )
}

export default AuthorWidget
