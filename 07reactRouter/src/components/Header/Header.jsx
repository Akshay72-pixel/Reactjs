import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 mr-3"
                            alt="Logo"
                        />
                    </Link>

                    {/* Menu */}
                    <ul className="hidden lg:flex space-x-8 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `duration-200 ${
                                        isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                    } hover:text-orange-700`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `duration-200 ${
                                        isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                    } hover:text-orange-700`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `duration-200 ${
                                        isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                    } hover:text-orange-700`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `duration-200 ${
                                        isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                    } hover:text-orange-700`
                                }
                            >
                                GitHub
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user"
                                className={({ isActive }) =>
                                    `duration-200 ${
                                        isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                    } hover:text-orange-700`
                                }
                            >
                                User
                            </NavLink>
                        </li>
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-2">
                        <Link
                            to="/login"
                            className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm"
                        >
                            Log in
                        </Link>

                        <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-lg text-sm"
                        >
                            Get started
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}
