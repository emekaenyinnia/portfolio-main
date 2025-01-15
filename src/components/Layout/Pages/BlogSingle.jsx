import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import DOMPurify from 'dompurify';
function BlogSingle({blog, back}) {
  return (
    <div className='relative'>
        <button 
        onClick={back}
        className='text-white bg-main  rounded-md p-1 text-xs flex flex-row items-center gap-1 cursor-pointer sticky top-20 md:top-1'><BsArrowLeft/> Return to Blog List </button>

        <main className='mt-8 flex flex-col items-center justify-center gap-4'>
            <div className='w-full h-56 md:h-96 rounded-md overflow-hidden'>
                <img src={blog?.image} alt="" className='w-full h-full object-cover' />
            </div>
            <h1 className='text-center text-xl md:text-3xl text-primaryLight font-bold'>{blog?.title} </h1>

            <span>
                {blog?.date} {blog?.month}
            </span>
                <article className='flex flex-col gap-y-4'>
                <BlogDescription description={blog?.excerpt} />
                </article>
        </main>
    </div>
  )
}

const BlogDescription = ({ description }) => {
    // Sanitize the HTML content
    const sanitizedDescription = DOMPurify.sanitize(description);
  
    return (
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    );
  };

export default BlogSingle