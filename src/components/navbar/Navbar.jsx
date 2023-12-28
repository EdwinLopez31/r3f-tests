import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='w-10 h-10 bg-white items-center justify-center flex font-bold shadow-md rounded-md'
      >
        <p className='blue-gradient_text'>EL</p>
      </NavLink>
    </header>
  );
};
