import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post'
import StyledLink from '../components/StyledLink'
import { getPosts } from '../features/postsSlice'

const HomeScreen = () => {
  const { list: posts, status } = useSelector((state) => state.post)
  const dispatch = useDispatch()
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts())
    }
  }, [dispatch, posts.length])
  if (status === 'failed') {
    return (
      <div className='py-8 grid grid-cols-1 place-content-center place-items-center mx-auto w-full max-w-screen-lg text-red-600 bg-red-100'>
        Sorry, no data found!
      </div>
    )
  }
  if (status === 'success') {
    return (
      <div className='max-w-screen-xl grid grid-cols-1 mx-auto'>
        <StyledLink
          className='place-self-end mt-4 mr-6 py-4 px-6 duration-500 bg-blue-900 hover:text-blue-700 hover:bg-gray-200 hover:border-blue-700 rounded-md text-gray-100 font-bold'
          to='posts/create'>
          Create Post
        </StyledLink>
        <div
          style={{ gridAutoFlow: 'inherit' }}
          className='py-4 place-content-center px-4 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post, i) => (
            <Post post={post} key={i} />
          ))}
        </div>
      </div>
    )
  }
  return <div className='flex m-auto'>Loading..</div>
}

export default HomeScreen
