// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const navbarHeight = '4.2rem'; // Exemple : 4rem ou 64px

    return (
        <div style={{ top: navbarHeight }} className="z-10 h-full w-64 fixed bg-white shadow-md">
            <div className="text-gray-900 text-lg font-semibold p-4 border-b">
                Backoffice
            </div>
            <nav className="mt-5">
                <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                        isActive
                            ? "block p-2.5 mb-2 font-medium text-white bg-blue-500 rounded"
                            : "block p-2.5 mb-2 font-medium text-gray-700 rounded hover:bg-gray-100"
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/admin/sports"
                    className={({ isActive }) =>
                        isActive
                            ? "block p-2.5 mb-2 font-medium text-white bg-indigo-600 rounded"
                            : "block p-2.5 mb-2 font-medium text-gray-700 rounded hover:bg-gray-100"
                    }
                >
                    Gérer les sports
                </NavLink>
                <NavLink
                    to="/admin/epreuves"
                    className={({ isActive }) =>
                        isActive
                            ? "block p-2.5 mb-2 font-medium text-white bg-indigo-600 rounded"
                            : "block p-2.5 mb-2 font-medium text-gray-700 rounded hover:bg-gray-100"
                    }
                >
                    Gérer les épreuves
                </NavLink>
                <NavLink
                    to="/admin/athletes"
                    className={({ isActive }) =>
                        isActive
                            ? "block p-2.5 mb-2 font-medium text-white bg-indigo-600 rounded"
                            : "block p-2.5 mb-2 font-medium text-gray-700 rounded hover:bg-gray-100"
                    }
                >
                    Gérer les athlètes
                </NavLink>
                
            </nav>
        </div>
    );
};

export default Sidebar;
