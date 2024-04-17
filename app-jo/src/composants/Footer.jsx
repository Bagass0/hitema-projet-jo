import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-5 shadow-lg mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="/logo.webp" alt="Logo" className="h-14 mr-2 rounded-full" />
                        <h3 className="text-xl font-bold ml-8">Restez Connecté</h3>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="https://www.facebook.com/Paris2024/?locale=fr_FR" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Facebook</Link>
                        <Link to="https://twitter.com/Paris2024?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Twitter</Link>
                        <Link to="https://www.instagram.com/paris2024/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;