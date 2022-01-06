import { useState } from "react";
const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="ml-2 mt-4">
            {/** Medium breakpoint and up Menu Bar */}
            <div className="md:fixed flex items-center justify-between md:justify-start no-underline">
                <a href="#" className="hidden md:block text-2xl">Spacestagram</a>
                <a href="#" className="md:hidden text-xl">Spacestagram</a>
                <div className="md:hidden m-6">
                    <button onClick={() => setNavbarOpen(!navbarOpen)}>
                        <svg
                            className="stroke-current text-gray-900 w-6 h-6 align-bottom"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            {/** MOBILE MENU BAR */}
            <div
                className={
                    'text-sm  font-semibold justify md:hidden pl-2 ' +
                    (navbarOpen ? 'block' : 'hidden')
                }
                >
                   <a href="#home">Home</a> 
                   <a href="#about">About</a>
            </div>
        </nav>
    )
}
export default Navbar;