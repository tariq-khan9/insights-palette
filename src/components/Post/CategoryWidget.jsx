'use client'
import { getCategories } from './../../graphql/graphql';
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';

const CategoryWidget = () => {
  const slug = useParams();
  const [categories, setCategories]= useState([]);

  console.log("slug in cate ", slug)

  useEffect(()=>{
    getCategories().then(data=>setCategories(data))
   
  },[])

  return (
    <div className='bg-white text-black p-2 space-y-4 rounded-md w-[95%] pb-8 shadow-sky-700 shadow-inner'>
      <div className='flex w-full justify-center'>
      <h1 className='flex text-center font-barlow text-[24px] font-meduim text-sky-700 tracking-[1px]'>Categories</h1>
      </div>
          <ul className="list-disc pl-8 items-center">
              {categories.map((category) => (
                <li key={category.node.id} className="mb-2 text-[25px] text-sky-700"> {/* Each item is now a proper <li> */}
                  <div className="flex flex-col w-[70%]">
                    <Link href={`/category/${category.node.categorySlug}`} className={`text-[18px]  hover:tracking-[1px] transition-all duration-500  font-montserrat text-gray-700 hover:text-sky-500 hover:font-semibold  ${slug.slug===category.node.categorySlug? 'font-bold text-sky-800' : 'font-normal'}`}>
                      {category.node.categoryName}
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
    </div>
  )
}

export default CategoryWidget
