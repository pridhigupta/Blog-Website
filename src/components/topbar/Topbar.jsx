import { Link } from 'react-router-dom/cjs/react-router-dom';
import './topbar.css'

export default function TopBar() {
  const user = true; 
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className='link' to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link className='link' to="/settings">
            <img className='topImg'
              src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="" /></Link>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to="/login">LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }

        <i className="topSearchIcon fas fa-search"></i>
        
      </div>
      
    </div>
  )
}
