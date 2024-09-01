import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const location=useLocation()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name:'My Posts',
      slug: "/myposts",
      active: authStatus
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header
  //   style={{
  //     // margin: '4vw',               // CamelCase properties and string values
  //     backgroundColor: 'rgb(173, 230, 185)', // Correct syntax for backgroundColor
  // }}
     className='py-5 shadow bg-white'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='160px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li className="flex items-center justify-center" key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className={`inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full 
                  ${location.pathname === item.slug ? 'hover:text-black bg-green-500 text-white' : ''}`}
                // className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}

            {/* to show logout on not */}
            {authStatus && (
              <li className="flex items-center justify-center">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header