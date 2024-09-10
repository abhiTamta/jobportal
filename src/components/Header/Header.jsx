import { Button, Drawer } from 'antd'
import Logo from './Logo'
import NavbarD from './NavBar/NavbarD'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";


const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="bg-white py-4 px-5 h-16 shadow-md">
      <div className="container mx-auto flex justify-between gap-5">
        <Logo />
        <NavbarD />
        <div className="font-bold flex lg:hidden">
          <Button
            className="w-auto h-auto p-0 border-none"
            onClick={showDrawer}
          >
            <CiMenuFries size={25} />
          </Button>
        </div>

        <Drawer title="Menu" onClose={onClose} size={100} open={open}>
          mobile menu
        </Drawer>
      </div>
    </header>
  )
}

export default Header