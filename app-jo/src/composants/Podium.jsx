import React, { useState, useEffect } from 'react';

const Podium = () => {
    const [allPodiumData, setAllPodiumData] = useState([]);

    useEffect(() => {
        const fetchAllPodiumData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/podium`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAllPodiumData(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données du podium :", error);
            }
        };

        fetchAllPodiumData();
    }, []);

    const podiumsByEpreuve = allPodiumData.reduce((acc, athlete) => {
        const epreuveKey = `${athlete.name_epreuve}-${athlete.name_sport}`;
        if (!acc[epreuveKey]) {
            acc[epreuveKey] = {
                epreuve: athlete.name_epreuve,
                sport: athlete.name_sport,
                img: athlete.img_sport,
                athletes: []
            };
        }
        acc[epreuveKey].athletes.push(athlete);
        return acc;
    }, {});

    if (!Object.keys(podiumsByEpreuve).length) {
        return <p>Chargement des podiums...</p>;
    }

    const getMedalColor = (medaille) => {
        switch (medaille) {
            case 'Or':
                return 'text-yellow-400';
            case 'Argent':
                return 'text-gray-300';
            case 'Bronze':
                return 'text-orange-400';
            default:
                return 'text-gray-700';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {Object.values(podiumsByEpreuve).map((podiumInfo, index) => (
                <div key={index} className="mt-10">
                    <h3 className="text-center text-2xl font-bold mb-4">{podiumInfo.epreuve} ({podiumInfo.sport})</h3>
                    <div className="flex items-end justify-center space-x-4">
                        {podiumInfo.athletes.map((athlete, athleteIndex) => (
                            <div key={athlete.athlete_id} className={`flex flex-col items-center ${getMedalColor(athlete.medaille)} space-y-1`}>
                                <img src={athlete.img_sport} alt="Sport" className="w-24 h-24 object-cover rounded-full mb-2"/>
                                <span className="text-xs font-semibold">{athlete.name_athlete}</span>
                                <span className={`badge ${getMedalColor(athlete.medaille)} text-xs`}>{athlete.medaille}</span>
                                <span className="text-xs">({athlete.best_result})</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Podium;
