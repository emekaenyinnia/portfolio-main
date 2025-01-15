import React, { useState } from 'react';
import Heading from '../Heading';
import { blogs } from '../../data/blog';
import { FaRegNewspaper } from 'react-icons/fa6';
import DOMPurify from 'dompurify';
import BlogSingle from './BlogSingle';

function Blog() {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <div>
      {activeBlog ? <BlogSingle blog={activeBlog} back={()=>{setActiveBlog(null)}}/> : <BlogList setActiveBlog={setActiveBlog} />}
    </div>
  );
}

const BlogList = ({ setActiveBlog }) => {
  return (
    <div>
      <Heading title={"Blog"} />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((item, index) => (
            <Card key={index} item={item} setActiveBlog={setActiveBlog} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ item, setActiveBlog }) => {
  const handleClick = () => {
    setActiveBlog(item); // Set the active blog when clicked
  };

  return (
    <section
      className="border border-line rounded-2xl flex flex-col items-start group cursor-pointer overflow-hidden"
      onClick={handleClick} // Trigger handleClick on card click
    >
      <div className="w-full h-52 rounded-t-2xl overflow-hidden relative">
        <img
          src={item?.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
        <span className="absolute top-0 left-0 rounded-t-r-full text-white bg-badge py-1 px-4 rounded-br-2xl flex flex-col items-center z-10">
          <span className='text-xl font-bold'>{item?.date}</span>
          <span className='font-light'>{item?.month}</span>
        </span>

        <div className="absolute bottom-0 w-full h-full bg-black text-white text-4xl flex flex-col items-center justify-center text-center p-8 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
          <FaRegNewspaper />
        </div>
      </div>
      <div className='p-4 md:p-8 bg-link'>
        <h4 className="text-base md:text-lg text-primaryLight font-bold line-clamp-2">{item?.title}</h4>
        <p className='line-clamp-2 text-sm mt-2'>
          <BlogDescription description={item?.excerpt} />
        </p>
      </div>
    </section>
  );
};

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

export default Blog;
