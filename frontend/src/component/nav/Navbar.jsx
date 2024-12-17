import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return ( 
		<nav className="bg-white border-gray-200"> 
			<section className="border">
				<div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 md:px-0 px-3">
					<a href="/">
						<span className="self-center text-2xl font-semibold whitespace-nowrap">VBlog</span>
					</a>
					<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<section className="flex items-center space-x-2">
              <span>
							  <IoSearch size={24}/>
              </span>
							<button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots">
								<CgProfile size={24} />
							</button>
							<div id="dropdownDots" className="bg-white border shadow-md md:w-[200px] rounded-lg hidden">
								<Link to="/login" className="flex items-center gap-3 py-3 px-4 hover:bg-gray-200">
									<span><FaUser /></span> Login
								</Link>
								<Link to="/register" className="flex items-center gap-3 py-3 px-4 hover:bg-gray-200">
									<span><FaUserPlus size={20} /> </span> Register
								</Link>
							</div>
							<button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden" aria-controls="navbar-cta" aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								<IoMenu size={24}/>
							</button>
						</section>
					</div>
					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
						<ul className="flex flex-col font-medium md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
							<li>
								<Link to="/" className="block py-2 px-3 md:p-0 rounded md:bg-transparent hover:text-gray-600">Home</Link>
							</li>
              <li>
								<Link to="/blog" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-gray-600 ">Blog</Link>
							</li>
							<li>
								<Link to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-gray-600 ">Contact</Link>
							</li>
							<li>
								<Link to="/about-us" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-gray-600">About Us</Link>
							</li>
							<li>
								<Link to="/login" className="md:hidden block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-gray-600">Login</Link>
							</li>
							<li>
								<Link to="/register" className="md:hidden block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-gray-600">Register</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</nav>
  );
};

export default Navbar;
