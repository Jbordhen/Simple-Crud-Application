import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex bg-blue-800 shadow-lg w-full py-2 text-gray-300 justify-center items-center text-3xl font-bold mb-auto'>
      <Link to='/'>Made with Tailwind</Link>
    </div>
  )
}

export default Header
