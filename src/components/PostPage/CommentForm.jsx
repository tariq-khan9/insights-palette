'use client'
import React, {useState, useEffect, useRef} from 'react'
import { submitComment } from '../../graphql/graphql';

const CommentForm = ({slug}) => {

  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const handleCommentSubmit = () => {
    const comment = commentRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    
    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { comment, name, email, slug };

    submitComment(commentObj).then(() => setSuccessMessage(true));
  };

  return (
    <div className='bg-slate-100 w-[95%] rounded-xl p-4 px-12 '>
      <h1 className='text-[24px] font-barlow text-slate-600 font-semibold my-2'>Leave a comment</h1>
      <div className='w-full flex flex-col justify-center items-center space-y-5 font-montserrat'>
        <textarea ref={commentRef} className='w-full bg-slate-200 rounded-xl p-4' placeholder='comment'  rows={2}/>
        <input ref={nameRef} className='w-full bg-slate-200 rounded-xl p-4' placeholder='name'/>
        <input ref={emailRef} className='w-full bg-slate-200 rounded-xl p-4' placeholder='email'/>
      
      </div>
      <div className='flex flex-row  items-center w-full'>
      <button onClick={()=>handleCommentSubmit()} className='p-3 px-8 bg-sky-800 font-barlow tracking-[1px] font-meduim text-slate-50 rounded-full mt-8 mb-6 hover:tracking-[2px] transition-all duration-500'>Post comment</button>
      {
        successMessage && <span className='text-green-980 font-montserrat ml-10 mt-2'>comment has been posted successfuly</span>
      }
      {
        error && <span className='text-green-980 font-montserrat ml-10 mt-2'>please fill all fields</span>
      }
      
      </div>
   
     
    </div>
  )
}

export default CommentForm
