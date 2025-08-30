import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import AuthContext from './context/AuthContext';
import Theme from './context/Theme';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [user, setUser] = useState(null);
    const [isTheme, setIsTheme] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } 
            catch {
                sessionStorage.removeItem("user");
            }
        }
        setLoading(false);
    }, []);
    if (loading) return <div> ! </div>;

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Theme.Provider value={{ isTheme, setIsTheme }}>
                <div className={ isTheme?"dark":"light" }>
                    <Header />
                    <div className="pages">
                        <Outlet />
                    </div>
                    <Footer />
                    <ToastContainer theme={ isTheme?"dark":"light" } />
                </div>
            </Theme.Provider>
        </AuthContext.Provider>
    );

};

export default App;