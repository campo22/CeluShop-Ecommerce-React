import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

export const navbartLinks = [
    {
        id: 1,
        title: 'Inicio',
        path: '/',
    },
    {
        id: 2,
        title: 'Celulares',
        path: '/celulares',
    },
    {
        id: 3,
        title: 'Sobre nosotros',
        path: '/sobre-nosotros',
    },
]
export const socialLinks = [
    {
        id: 1,
        icon: <FaFacebookSquare />,
        path: '#',
    },
    {
        id: 2,
        icon: <FaInstagram />,
        path: '#',
    },
    {
        id: 3,
        icon: <FaSquareXTwitter />,
        path: '#',
    },

]