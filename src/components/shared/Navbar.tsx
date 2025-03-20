import { Link, NavLink } from "react-router-dom";
import { navbartLinks } from "../constants/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";

export const Navbar = () => {
    return (
        // Contenedor principal de la barra de navegación
        <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">

            <nav className="space-x-5 hidden md:flex">
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
            <div className="flex gap-5 items-center">
                {/* Botón de búsqueda con icono */}
                <button>
                    <HiOutlineSearch size={25} />
                </button>

                <div className="relative">
                    {/* Enlace al perfil del usuario */}
                    <Link
                        to="/account"
                        // Clase de estilo para el enlace del usuario
                        className="border-2 border-slate-700 w-9 h-9 rounded-full 
                                       place-items-center text-lg font-bold flex justify-center items-center"
                    >
                        R {/* Representación del usuario, puede ser una inicial o un icono */}
                    </Link>
                </div>
                {/* Botón de carrito de compras con icono */}
                <button className="relative">
                    {/* Ícono de carrito de compras con contador de productos */}
                    <span className="absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">
                        0 {/* Cantidad de productos en el carrito de compras */}
                    </span>
                    <HiOutlineShoppingBag size={25} />
                </button>
            </div>
            <button className="md:hidden">
                <FaBarsStaggered size={25} />
            </button>
        </header>
    );
};
