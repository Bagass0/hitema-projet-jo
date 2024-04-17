import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { validateAthlete } from '../form/formAthlete';

const FormAthlete = () => {
    const [name_athlete, setNameAthlete] = useState('');
    const [id_epreuve, setIdEpreuve] = useState('');
    const [epreuves, setEpreuves] = useState([]);
    const [pays, setPays] = useState('');
    const [medaille, setMedaille] = useState('');
    const [best_result, setBestResult] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (error === 'Opération réussie. Redirection...') {
            setTimeout(() => {
                window.location.href = '/admin/athletes';
            }, 1200);
        }
    }, [error]);

    useEffect(() => {
        const fetchEpreuves = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/epreuves');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des épreuves');
                }
                const data = await response.json();
                setEpreuves(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des épreuves : ', error);
            }
        };
        fetchEpreuves();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchAthleteDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/athlete/${id}`);
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des détails de l\'athlète');
                    }
                    const [data] = await response.json();
                    setNameAthlete(data.name_athlete);
                    setIdEpreuve(data.id_epreuve);
                    setPays(data.country);
                    setMedaille(data.medaille);
                    setBestResult(data.best_result);
                } catch (error) {
                    console.error('Erreur lors de la récupération des détails de l\'athlètes : ', error);
                }
            };
            fetchAthleteDetails();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error: validationError } = validateAthlete(name_athlete, pays, best_result);
        if (validationError) {
            setError(validationError.details[0].message);
            return;
        }

        setError('');

        try {
            let response;
            if (id) {
                response = await fetch(`http://localhost:3000/api/athletes/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id_epreuve, name_athlete, pays, medaille, best_result }),
                });
            } else {
                response = await fetch('http://localhost:3000/api/athletes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id_epreuve, name_athlete, pays, medaille, best_result }),
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
                            <label htmlFor="name_athlete" className="block mb-2 text-sm font-medium text-gray-900">Nom de l'athlète</label>
                            <input 
                                type="text"
                                name="name_athlete"
                                id="name_athlete"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Nom de l'athlète"
                                required=""
                                value={name_athlete}
                                onChange={(e) => setNameAthlete(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="id_epreuve" className="block mb-2 text-sm font-medium text-gray-900">Epreuve</label>
                            <select
                                name="id_epreuve"
                                id="id_epreuve"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={id_epreuve}
                                onChange={(e) => setIdEpreuve(e.target.value)}
                                required
                            >
                                <option value="">Sélectionnez une épreuve</option>
                                {epreuves.map(epreuve => (
                                    <option key={epreuve.id} value={epreuve.id}>{epreuve.name_epreuve}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name_athlete" className="block mb-2 text-sm font-medium text-gray-900">Matricule du pays (3 caractrères)</label>
                            <input 
                                type="text"
                                name="pays"
                                id="pays"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Matricule du pays"
                                required=""
                                value={pays}
                                onChange={(e) => setPays(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="medaille" className="block mb-2 text-sm font-medium text-gray-900">Medaille</label>
                                <select
                                    name="medaille"
                                    id="medaille"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={medaille}
                                    onChange={(e) => setMedaille(e.target.value)}
                                    required
                                >
                                <option value="">Sélectionnez une médaille</option>
                                <option value="Or">Or</option>
                                <option value="Argent">Argent</option>
                                <option value="Bronze">Bronze</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="best_result" className="block mb-2 text-sm font-medium text-gray-900">Meilleur résultat</label>
                            <input 
                                type="text"
                                name="best_result"
                                id="best_result"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Meilleur résultat"
                                required=""
                                value={best_result}
                                onChange={(e) => setBestResult(e.target.value)}
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
                        <Link to="/admin/athletes" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Retour</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormAthlete;
