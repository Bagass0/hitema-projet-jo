import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { validateSport } from '../form/formSport';

const FormSport = () => {
    const [name_sport, setNameSport] = useState('');
    const [site_olympique, setSiteOlympique] = useState('');
    const [img_sport, setImgSport] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (error === 'Opération réussie. Redirection...') {
            setTimeout(() => {
                window.location.href = '/admin/sports';
            }, 1200);
        }
    }, [error]);

    useEffect(() => {
        if (id) {
            const fetchSportDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/sports/${id}`);
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des détails du sport');
                    }
                    const [data] = await response.json();
                    setNameSport(data.name_sport);
                    setSiteOlympique(data.site_olympique);
                    setImgSport(data.img_sport);
                } catch (error) {
                    console.error('Erreur lors de la récupération des détails du sport : ', error);
                }
            };
            fetchSportDetails();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error: validationError } = validateSport(name_sport, site_olympique, img_sport);
        if (validationError) {
            setError(validationError.details[0].message);
            return;
        }

        setError('');

        try {
            let response;
            if (id) {
                response = await fetch(`http://localhost:3000/api/sports/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name_sport, site_olympique, img_sport }),
                });
            } else {
                response = await fetch('http://localhost:3000/api/sports', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name_sport, site_olympique, img_sport }),
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
                            <label htmlFor="name_sport" className="block mb-2 text-sm font-medium text-gray-900">Nom du sport</label>
                            <input
                                type="text"
                                name="name_sport"
                                id="name_sport"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Nom du sport"
                                required=""
                                value={name_sport}
                                onChange={(e) => setNameSport(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="site_olympique" className="block mb-2 text-sm font-medium text-gray-900">Site olympique</label>
                            <input
                                type="text"
                                name="site_olympique"
                                id="site_olympique"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Site Géographique"
                                required=""
                                value={site_olympique}
                                onChange={(e) => setSiteOlympique(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="img_sport" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                            <input
                                type="text"
                                name="img_sport"
                                id="img_sport"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="URL de l'image"
                                required=""
                                value={img_sport}
                                onChange={(e) => setImgSport(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{id ? 'Modifier' : 'Ajouter'}</button>
                    </form>
                    {error && (
                        <div className={`${alertClass} mt-4 p-4 rounded-md border-l-4`} role="alert">
                            <p className="font-medium">{error}</p>
                        </div>
                    )}
                    <div className='mt-6'>
                        <Link to="/admin/sports" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Retour</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSport;