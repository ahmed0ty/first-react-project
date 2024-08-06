import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='py-5 NAV flex flex-wrap justify-between items-center'>
       <h1 className='text-4xl font-bold ps-9 text-white'>
          <NavLink
            to="/Home"
          >
           Start Framework
          </NavLink>
        </h1>
      <ul className="flex flex-wrap md:flex-nowrap text-2xl text-white space-y-4 md:space-y-0 md:space-x-4 pe-4 md:pe-36">
        <li className='p-5 font-bold text-xl'>
          <NavLink
            to="/About"
            className={({ isActive }) => isActive ? 'bg-custom-green px-4 py-2 rounded text-white' : 'text-white'}
          >
            ABOUT
          </NavLink>
        </li>
        <li className='p-5 font-bold text-xl'>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) => isActive ? 'bg-custom-green px-4 py-2 rounded text-white' : 'text-white'}
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className='p-5 font-bold text-xl'>
          <NavLink
            to="/Contact"
            className={({ isActive }) => isActive ? 'bg-custom-green px-4 py-2 rounded text-white' : 'text-white'}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;



