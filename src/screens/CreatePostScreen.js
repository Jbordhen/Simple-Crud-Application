import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StyledLink from '../components/StyledLink'
import { createPost } from '../features/postsSlice'

const CreatePostScreen = () => {
  const userId = 1
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { status, error } = useSelector((state) => state.post)
  const [success, setSuccess] = useState(false)

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && body) {
      const formData = { userId, title, body }
      dispatch(createPost(formData))
      setSuccess(true)
    } else {
      alert('Post title and description can not be empty.')
    }
  }
  useEffect(() => {}, [success])

  return (
    <div className='grid grid-cols-1'>
      {success && status === 'success' && (
        <div className='mx-auto my-4 px-8 py-4 text-green-500 bg-green-100 border-2 border-green-500'>
          The post was created successfully.
        </div>
      )}
      {error && (
        <div className='mx-auto my-4 px-8 py-4 text-red-500 bg-red-100 border-2 border-red-500'>
          {error}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 w-11/12 mx-auto max-w-md bg-blue-800 py-8 px-12 rounded-md shadow-lg'>
        <StyledLink
          className='w-max mb-2 py-2 px-6 duration-500 bg-blue-500 hover:bg-gray-300 hover:text-blue-500 rounded-md text-gray-100 font-bold'
          to='/'>
          Back
        </StyledLink>
        <input name='user_id' type='hidden' value={userId} />
        <label className='my-4 font-bold text-gray-200'>Title </label>
        <input
          className='h-8'
          name='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='my-4 font-bold text-gray-200'>Description </label>
        <textarea
          className='h-24 mb-8'
          name='body'
          type='text'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type='submit'
          value='Submit'
          className='w-max font-bold py-2 px-4 place-self-center rounded-md cursor-pointer duration-500 bg-blue-500 hover:bg-gray-300 hover:text-blue-500 text-white'
        />
      </form>
    </div>
  )
}

export default CreatePostScreen
