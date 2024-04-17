import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Epreuves() {
    const [epreuves, setEpreuves] = useState([]);
    const [loading, setLoading] = useState(true);
    const sidebarWidth = '16rem';

    useEffect(() => {
        const fetchEpreuves = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/epreuves', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des épreuves');
                }
                const data = await response.json();
                setEpreuves(data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des épreuves : ', error);
            }
        };

        fetchEpreuves();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette épreuve ?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:3000/api/epreuves/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la suppression de l\'épreuve');
            }
            setEpreuves(epreuves.filter(epreuve => epreuve.id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'épreuve : ', error);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1" style={{ paddingLeft: sidebarWidth }}>
                <div className="flex justify-center mt-10">
                    <Link to="/admin">
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Retour</button>
                    </Link>
                    <Link to="/admin/formepreuve">
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Ajouter une épreuve</button>
                    </Link>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 text-center my-10">Liste des épreuves</h1>
                {loading ? (
                    <p>Chargement en cours...</p>
                ) : (
                    <div className="grid gap-4 my-10">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id de l'épreuve</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du sport</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom de l'épreuve</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modifier</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supprimer</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {epreuves.map(epreuve => (
                                    <tr key={epreuve.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{epreuve.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{epreuve.name_sport}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{epreuve.name_epreuve}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Link to={`/admin/formepreuve/${epreuve.id}`} className="text-indigo-600 hover:text-indigo-900">Modifier</Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button onClick={() => handleDelete(epreuve.id)} className="text-red-600 hover:text-red-900">Supprimer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Epreuves;
