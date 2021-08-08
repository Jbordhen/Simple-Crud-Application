import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Loader from '../components/Loader'
import StyledButton from '../components/StyledButton'
import StyledLink from '../components/StyledLink'
import { deletePost } from '../features/postsSlice'

const PostScreen = ({ match }) => {
  const { list: posts } = useSelector((state) => state.post)
  const [post, setPost] = useState(null)

  const dispatch = useDispatch()
  const history = useHistory()

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deletePost(post.id))
    console.log(post.id)
    history.replace('/')
  }
  useEffect(() => {
    const getPost = () => {
      return posts.filter((post) => post.id === Number(match.params.post))
    }
    const data = getPost()
    setPost(data[0])
  }, [match.params.post, posts])

  if (post) {
    return (
      <div className='py-4 place-content-center px-4 max-w-screen-xl mx-auto grid grid-cols-1'>
        <div className='grid grid-cols-2'>
          <StyledLink
            className='w-max ml-2 mb-2 py-2 px-6 duration-150 bg-blue-800 hover:bg-gray-200 hover:text-blue-700 rounded-md text-gray-100 font-bold'
            to='/'>
            Back
          </StyledLink>
          <StyledButton
            className='w-max ml-auto mr-2 place-self-end mb-2 py-2 px-6 duration-550 bg-blue-800 hover:bg-gray-200 hover:text-blue-700 rounded-md text-gray-100 font-bold'
            onClick={handleDelete}>
            <i className='fas fa-trash'></i>
          </StyledButton>
        </div>
        <div className='flex flex-col overflow-hidden m-2 bg-blue-400 shadow-lg rounded-lg max-w-sm'>
          <div
            className='bg-no-repeat bg-center mx-auto w-full h-48 bg-cover shadow-inner'
            style={{
              backgroundImage: `url(https://picsum.photos/id/200/300)`
            }}></div>
          <div className='p-4 pt-8'>
            <div className='pb-4 text-2xl font-bold no-underline black'>
              {post?.title}
            </div>
            <div className='my-auto pb-2'>{post?.body}</div>
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default PostScreen
