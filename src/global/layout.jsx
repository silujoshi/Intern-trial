import React from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import Card from '../components/card';



const Layout = (props) => {
    return (
      <div>
        <nav className="sticky top-0 z-[2] mx-[139px] ">
          <NavBar />
        </nav>
        <main className='flex mx-[139px] gap-[10px]'>
          <SideBar />
          {props.children}
        </main>
        <footer>
            <Card />
        </footer>
      </div>
    );
  };
  export default Layout;