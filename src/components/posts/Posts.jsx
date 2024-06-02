import './posts.css'
import Post from '../post/Post' 
import Post1 from '../post/Post1'
import Post2 from '../post/Post2'
import Post3 from '../post/Post3'
import Post4 from '../post/Post4'
import Post5 from '../post/Post5'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Footer from '../footer/Footer'
  
export default function Posts() {
  return (
    <div className='posts'>
        <Link className='link' to='/post'><Post/></Link>
        <Link className='link' to='/post'><Post1/></Link>
        <Link className='link' to='/post'><Post2/></Link>
        <Link className='link' to='/post'><Post3/></Link>
        <Link className='link' to='/post'><Post4/></Link>
        <Link className='link' to='/post'><Post5/></Link>
    </div>
  )
}
