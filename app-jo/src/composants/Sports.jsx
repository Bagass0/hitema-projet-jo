import React, { useState, useEffect } from 'react';

function Sports() {
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSports = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/sports', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des sports');
                }
                const data = await response.json();
                setSports(data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des sports : ', error);
            }
        };

        fetchSports();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 text-center my-10">Liste des sports</h1>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {sports.map((sport) => (
                        <div key={sport.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                            <a href={`/sports/${sport.id}`}>
                                <img
                                    src={sport.img_sport}
                                    alt={sport.name_sport}
                                    className="rounded-t-lg object-cover h-48 w-full"
                                />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {sport.name_sport}
                                    </h5>
                                </div>
                            </a>
                        </div>
                    ))}
                    </div>
                </ul>
            )}
        </div>
    );
}

export default Sports;