// import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
function Header({handleCloseToggler, closeToggler}) {

    // const [closeToggler, setCloseToggler] = useState(false);
    // // console.log(closeToggler);

    // const handleCloseToggler = (e) => {
    //     setCloseToggler(!closeToggler)
    // }

    return (
        <>
            <nav className='top-navbar'>
                <button className="navbar-toggler" onClick={handleCloseToggler}><img src={closeToggler ? ('images/close.png') : ('images/menu.png')} alt='toggler button'></img></button>
                <Link className={`logo ${closeToggler ? 'shift-logo' : ''}`} to='/'>News App</Link>
                <ul className={`navbar-menu-items ${closeToggler ? 'open' : ""}`}>
                    <li><NavLink to='/'>Home</NavLink> </li>
                    <li><NavLink to='/about'>About</NavLink> </li>
                    <li><NavLink to='contact'>Contact Us</NavLink> </li>
                    <li><NavLink to='/admin'>Admin</NavLink> </li>
                </ul>
            </nav>

        </>
    )
};
export default Header;