import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { validateLogin } from './form/formConnexion';

const Connexion = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setAuthData } = useContext(AuthContext);

    useEffect(() => {
        if (error === 'Authentification réussie. Redirection...') {
            setTimeout(() => {
                window.location.href = '/';
            }, 1200);
        }
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Utilisez Joi pour valider les entrées
        const { error: validationError } = validateLogin(username, password);
        if (validationError) {
            setError(validationError.details[0].message);
            return; // Stop l'exécution si une erreur de validation est trouvée
        }

        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setAuthData(data);
                setError('Authentification réussie. Redirection...');
            } else {
                setError(data.message || 'Nom d’utilisateur ou mot de passe incorrect.');
            }
        } catch (error) {
            setError('Une erreur est survenue lors de la connexion.');
        }
    };

    const alertClass = error === 'Authentification réussie. Redirection...' ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500';

    return (
        <section className="mt-16">
            <div className="px-6 py-8 mx-auto sm:max-w-md">
                <div className="bg-white rounded-lg shadow md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Nom d'utilisateur</label>
                            <input 
                                type="text"
                                name="username"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Nom d'utilisateur"
                                required=""
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
                            <input 
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Se connecter</button>
                    </form>
                    {error && (
                        <div className={`${alertClass} mt-4 p-4 rounded-md border-l-4`} role="alert">
                            <p className="font-medium">{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Connexion;
