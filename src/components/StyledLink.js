import { Link } from 'react-router-dom'

const StyledLink = ({ className: childClassName, children, ...rest }) => {
  return (
    <Link
      className={`w-max mb-2 py-2 px-6 duration-500 bg-blue-500 hover:bg-gray-300 hover:text-blue-500 rounded-md text-gray-100 font-bold ${childClassName}`}
      {...rest}>
      {children}
    </Link>
  )
}

export default StyledLink
