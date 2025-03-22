import { Link } from "react-router-dom"

export const Logo = () => {
    return (
        <Link
            to="/"
            className={`text-2xl font-bold  tracking-tighter transition-all`}
        >
            <p className="hidden lg:block">
                Celu
                <span className="text-cyan-600">Shop</span>
            </p>
            <p className="flex text-4xl lg:hidden">
                <span className="text-2xl skew-x-6">Celu</span>
                <span className="text-2xl skew-x-6 text-cyan-600">shop</span>

            </p>

        </Link>
    )
}


