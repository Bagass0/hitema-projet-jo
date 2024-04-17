import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Single() {
    const { id } = useParams();
    const [sport, setSport] = useState([]);
    const [epreuves, setEpreuves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSports = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/sports/${id}`, {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du sport');
                }
                const [data] = await response.json();
                setSport(data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération du sport : ', error);
            }
        };

        const fetchEpreuves = async () => {
            try {
                const epreuvesResponse = await fetch(`http://localhost:3000/api/epreuves/${id}`, {
                    method: 'GET'
                });
                if (!epreuvesResponse.ok) {
                    throw new Error('Erreur lors de la récupération des épreuves');
                }
                const epreuvesData = await epreuvesResponse.json();
                setEpreuves(epreuvesData);
            } catch (error) {
                console.error('Erreur lors de la récupération des épreuves : ', error);
            }
        };
    
        fetchSports();
        fetchEpreuves();
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div className="container mx-auto px-4 py-8">
                    <div>
                        <div className="mb-8 relative">
                            <img src={sport.img_sport} alt={sport.name_sport} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                            <h2 className="absolute inset-0 flex items-center justify-center font-bold text-3xl text-white bg-black bg-opacity-40">{sport.name_sport}</h2>
                        </div>
                        <div className='flex mb-8'>
                            <div className="w-2/6">
                                <div className='border rounded-lg p-4 bg-white shadow-md'>
                                    <h3 className="text-center text-xl font-semibold mb-2">Emplacement</h3>
                                    <iframe className="w-full h-40 object-cover rounded-lg" src={sport.site_olympique} title="Site Olympique"></iframe>
                                </div>
                            </div>
                            <div className="w-4/6 p-4">
                                <h3 className="text-center text-xl font-semibold mb-2">Epreuves</h3>
                                <div className="flex flex-wrap -mx-4 justify-center">
                                    {epreuves.map((epreuve) => (
                                        <div key={epreuve.id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full">
                                                <div className="p-6 flex flex-col justify-between">
                                                    <h5 className="text-lg font-semibold mb-2">{epreuve.name_epreuve}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Single;
