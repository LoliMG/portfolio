import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sparkles from '../components/Sparkles/Sparkles';
import '../App.css';

const Layout = () => {
    return (
        <>
            <Sparkles />
            <Navbar />
            <main id="content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;