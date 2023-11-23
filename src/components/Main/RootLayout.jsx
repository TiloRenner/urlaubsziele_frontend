import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {

    return (
        <div className="root-layout"  style={{width:'99vw'}}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}