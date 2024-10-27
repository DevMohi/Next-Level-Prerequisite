import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className=" text-black bg-yellow-200 p-6" onClick={() => setOpen(!open)}>
      <div className=" md:hidden text-2xl " >
        {open === true ? (
          <AiOutlineMenu/>
        ) : (
          <AiOutlineClose ></AiOutlineClose>
        )}
      </div>

      <ul className={`md:flex duration-1000 absolute md:static ${open? 'top-16': '-top-60'} bg-yellow-200 px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
