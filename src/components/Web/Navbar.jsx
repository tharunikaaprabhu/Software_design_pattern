import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    const LinksData = [
        {
        title:'Home',
        link:'/'
    },

        {
        title:'Login',
        link:'/login'
    },

        {
        title:'Register',
        link:'/register'
    },
    
    {
        title:'Event',
        link:'event'
    }
]
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-primary/5 border b-2 border-primary'>
    <div className='h-full w-1/4 flex flex-row justify-center items-center text-2xl font-bold text-primary'>
    Logo
    </div>
    <div className='h-full w-3/4 flex flex-row justify-end items-center text-xl font-bold gap-6'>
    {
     LinksData.map((data ,index ) => (
        <li key={index} className="list-none">
            <NavLink to={data.link}>
                {data.title}
            </NavLink>

        </li>

     ))
    }
    <ModeToggle/>
    </div>
    </div>
  )
}

export default Navbar;