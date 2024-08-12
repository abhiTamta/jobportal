import Logo from '../Header/Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-screen px-5 py-6 bg-white shadow-black'>
      <div className="w-full max-w-full mx-auto flex flex-col lg:max-w-7xl lg:flex-row lg: justify-between">
        <div className="">
          <Logo />
        </div>
        <div className="">
          <ul>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>About us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer