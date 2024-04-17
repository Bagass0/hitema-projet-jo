import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Admin = () => {
    const sidebarWidth = '16rem';

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-10 text-2xl font-bold" style={{ marginLeft: sidebarWidth }}>
                <header className="mb-12">
                    <h1 className="text-4xl text-gray-800">Dashboard Admin</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/admin/sports" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Gérer les sports</h2>
                        <p className="font-normal text-gray-700">Accédez à la gestion des sports.</p>
                    </Link>
                    <Link to="/admin/epreuves" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Gérer les épreuves</h2>
                        <p className="font-normal text-gray-700">Organisez et modifiez les épreuves.</p>
                    </Link>
                    <Link to="/admin/athletes" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Gérer les athlètes</h2>
                        <p className="font-normal text-gray-700">Gérez les informations des athlètes.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Admin;
