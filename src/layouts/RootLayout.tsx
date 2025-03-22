import { Outlet } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"


export const RootLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            <main className="container flex-1 my-8">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
