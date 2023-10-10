import { Link } from 'react-router-dom'
import Paths from '../../core/constants/Path'

export default function ErrorPage(){
  return(
    <div className="flex w-full min-h-screen justify-center items-center flex-col">
      <h1 className="font-bold text-6xl mb-2">404</h1>
      <h1 className="font-bold text-4xl mb-4">Page not found</h1>
      <p className="italic text-1xl mb-4">You've landed on a page that doesn't exist!</p>

      <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to={Paths.home}>
        
        <button
            className={" rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
        >
            Back to home
        </button>
      </Link>
    </div>
  )
}