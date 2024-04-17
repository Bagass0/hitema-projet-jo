import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { validateEpreuve } from '../form/formEpreuve';

const FormEpreuve = () => {
    const [name_epreuve, setNameEpreuve] = useState('');
    const [id_sport, setIdSport] = useState('');
    const [sports, setSports] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (error === 'Opération réussie. Redirection...') {
            setTimeout(() => {
                window.location.href = '/admin/epreuves';
            }, 1200);
        }
    }, [error]);

    useEffect(() => {
        const fetchSports = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/sports');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des sports');
                }
                const data = await response.json();
                setSports(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des sports : ', error);
            }
        };
        fetchSports();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchEpreuveDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/epreuve/${id}`);
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des détails de l\'épreuve');
                    }
                    const [data] = await response.json();
                    setNameEpreuve(data.name_epreuve);
                    setIdSport(data.id_sport);
                } catch (error) {
                    console.error('Erreur lors de la récupération des détails de l\'épreuve : ', error);
                }
            };
            fetchEpreuveDetails();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error: validationError } = validateEpreuve(name_epreuve);
        if (validationError) {
            setError(validationError.details[0].message);
            return;
        }

        setError('');

        try {
            let response;
            if (id) {
                response = await fetch(`http://localhost:3000/api/epreuves/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name_epreuve, id_sport }),
                });
            } else {
                response = await fetch('http://localhost:3000/api/epreuves', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name_epreuve, id_sport }),
                });
            }

            if (!response.ok) {
                throw new Error('Erreur lors de la soumission du formulaire');
            }

            setError('Opération réussie. Redirection...');
        } catch (error) {
            setError('Une erreur est survenue lors de la soumission du formulaire.');
        }
    };

    const alertClass = error === 'Opération réussie. Redirection...' ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500';

    return (
        <section className="mt-16">
            <div className="px-6 py-8 mx-auto sm:max-w-md">
                <div className="bg-white rounded-lg shadow md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name_epreuve" className="block mb-2 text-sm font-medium text-gray-900">Nom de l'épreuve</label>
                            <input 
                                type="text"
                                name="name_epreuve"
                                id="name_epreuve"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Nom de l'épreuve"
                                required=""
                                value={name_epreuve}
                                onChange={(e) => setNameEpreuve(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="id_sport" className="block mb-2 text-sm font-medium text-gray-900">Sport</label>
                            <select
                                name="id_sport"
                                id="id_sport"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={id_sport}
                                onChange={(e) => setIdSport(e.target.value)}
                                required
                            >
                                <option value="">Sélectionnez un sport</option>
                                {sports.map(sport => (
                                    <option key={sport.id} value={sport.id}>{sport.name_sport}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{id ? 'Modifier' : 'Ajouter'}</button>
                    </form>
                    {error && (
                        <div className={`${alertClass} mt-4 p-4 rounded-md border-l-4`} role="alert">
                            <p className="font-medium">{error}</p>
                        </div>
                    )}
                    <div className='mt-6'>
                        <Link to="/admin/epreuves" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Retour</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormEpreuve;
