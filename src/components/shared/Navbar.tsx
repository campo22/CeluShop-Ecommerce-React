import { Link, NavLink } from "react-router-dom";
import { navbartLinks } from "../constants/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";
import { Logo } from './Logo';

export const Navbar = () => {
    return (
        // Contenedor principal de la barra de navegación
        <header className="flex items-center justify-between px-5 py-4 text-black bg-white border-b border-slate-200 lg:px-12">

            <Logo />


            <nav className="hidden space-x-5 md:flex">
                {/* Mapeo de enlaces de navegación */}
                {navbartLinks.map(link => (
                    <NavLink
                        key={link.id} // Clave única para cada enlace
                        to={link.path} // Ruta de navegación
                        className={({ isActive }) =>
                            `${isActive ? 'text-cyan-600 underline' : ''} 
                             transition-all duration-300 hover:text-cyan-600 hover:underline`
                        }
                    >
                        {link.title} {/* Texto del enlace */}
                    </NavLink>
                ))}
            </nav>

            {/* Contenedor de búsqueda y usuario */}
            <div className="flex items-center gap-5">
                {/* Botón de búsqueda con icono */}
                <button>
                    <HiOutlineSearch size={25} />
                </button>

                <div className="relative">
                    {/* Enlace al perfil del usuario */}
                    <Link
                        to="/account"
                        // Clase de estilo para el enlace del usuario
                        className="flex items-center justify-center text-lg font-bold border-2 rounded-full border-slate-700 w-9 h-9 place-items-center"
                    >
                        R {/* Representación del usuario, puede ser una inicial o un icono */}
                    </Link>
                </div>
                {/* Botón de carrito de compras con icono */}
                <button className="relative">
                    {/* Ícono de carrito de compras con contador de productos */}
                    <span className="absolute grid w-5 h-5 text-xs text-white bg-black rounded-full -bottom-2 -right-2 place-items-center">
                        0 {/* Cantidad de productos en el carrito de compras */}
                    </span>
                    <HiOutlineShoppingBag size={25} />
                </button>
            </div>
            <button className="m-0 md:hidden">
                <FaBarsStaggered size={25} />
            </button>
        </header>
    );
};
