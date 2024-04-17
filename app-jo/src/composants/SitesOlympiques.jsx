import React, { useState, useEffect, useRef } from 'react';

function SitesOlympiques() {
    const [sitesOlympiques, setSitesOlympiques] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSites, setFilteredSites] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1); // -1 signifie aucun sport recherché

    useEffect(() => {
        const fetchSitesOlympiques = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/sports/', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des sites olympiques');
                }
                const data = await response.json();
                setSitesOlympiques(data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des sites olympiques : ', error);
            }
        };

        fetchSitesOlympiques();
    }, []);

    useEffect(() => {
        const uniqueSites = Array.from(new Set(sitesOlympiques.map(site => site.site_olympique)))
            .map(site_olympique => {
                return {
                    site_olympique,
                    sports: sitesOlympiques.filter(site => site.site_olympique === site_olympique)
                };
            });
        setFilteredSites(uniqueSites);
    }, [sitesOlympiques]);

    const sportRefs = useRef({});

    const scrollToSport = (sportRef) => {
        if (sportRef && sportRef.current) {
            sportRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Filtrer les sports en fonction du terme de recherche
    const filteredSitesBySearchTerm = filteredSites.filter(site =>
        site.sports.some(sport =>
            sport.name_sport.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    useEffect(() => {
        if (searchTerm !== '') {
            filteredSitesBySearchTerm.forEach(site => {
                site.sports.forEach(sport => {
                    if (!sportRefs.current[sport.name_sport]) {
                        sportRefs.current[sport.name_sport] = React.createRef();
                    }
                });
            });
        }
    }, [filteredSitesBySearchTerm, searchTerm]);

    useEffect(() => {
        if (searchTerm !== '') {
            filteredSitesBySearchTerm.forEach(site => {
                site.sports.forEach(sport => {
                    if (sport.name_sport.toLowerCase().includes(searchTerm.toLowerCase())) {
                        scrollToSport(sportRefs.current[sport.name_sport]);
                        setHighlightedIndex(site.sports.indexOf(sport)); // Mettre à jour l'index du sport recherché
                    }
                });
            });
        } else {
            setHighlightedIndex(-1); // Réinitialiser l'index du sport recherché s'il n'y a pas de terme de recherche
        }
    }, [searchTerm, filteredSitesBySearchTerm]);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 mt-10 mb-10 font-sans font-bold border-yellow-400 dark:text-gray-500">Sites Olympiques</h1>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Rechercher un sport..."
                    className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {filteredSitesBySearchTerm.length === 0 ? (
                        <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-500">On n'a pas trouvé votre sport 😭</p>
                    ) : (
                        filteredSitesBySearchTerm.map((site, index) => (
                            <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
                                <iframe className="w-full h-40 mb-4 object-cover rounded-lg" src={site.site_olympique} title="Site Olympique"></iframe>
                                <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{ maxHeight: '200px' }}>
                                    {site.sports.map((sport, sportIndex) => (
                                        <div key={sportIndex} className={`flex items-center mb-2 ${highlightedIndex === sportIndex ? 'bg-gray-200' : ''}`} ref={sportRefs.current[sport.name_sport]}>
                                            <img src={sport.img_sport} alt={sport.name_sport} className="w-16 h-16 mr-4 rounded-full" />
                                            <span className="text-gray-800">{sport.name_sport}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );

}

export default SitesOlympiques;