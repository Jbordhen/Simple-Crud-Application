import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div
      className='flex flex-col overflow-hidden m-2 bg-blue-400 shadow-lg rounded-lg max-w-sm'
      key={post.id}>
      <Link to={`posts/${post.id}`}>
        <div
          className='bg-no-repeat bg-center mx-auto w-full h-48 bg-cover shadow-inner opacity-80 hover:opacity-100 duration-200'
          style={{
            backgroundImage: `url(https://picsum.photos/id/200/300)`
          }}></div>
      </Link>
      <div className='p-4 pt-8'>
        <Link to={`posts/${post.id}`}>
          <div className='pb-4 text-2xl font-bold no-underline hover:text-gray-800'>
            {post.title}
          </div>
        </Link>
        <div className='my-auto pb-2'>{post.body}</div>
      </div>
    </div>
  )
}

export default Post
