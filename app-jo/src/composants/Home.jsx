import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';

const Home = () => {
    return (<>
        <div className="container mx-auto px-4">
            <section className="text-center my-10">
                <h1 className="text-4xl font-bold text-gray-800">Bienvenue sur le site des Jeux Olympiques</h1>
                <p className="text-gray-600 mt-4">Découvrez les sports, les épreuves et les sites olympiques de Paris 2024.</p>
            </section>

            <Carousel />

            <div className="flex flex-wrap items-center mt-20 text-left text-center mb-10">

                <div className='w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 mb-5'>
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">Paris 2024</h3>
                    <p className="sm:text-lg mt-6">
                        plus de 10 500 athlètes de partout dans le monde se préparent à participer aux Jeux Olympiques, prêts à donner le meilleur d'eux-mêmes pour représenter leur pays et leur passion pour le sport.
                    </p>
                </div>

                <div className='w-full md:w-3/5 lg:w-1/2 px-4'>
                    <img src="https://badmania.fr/images/news2023/news_jo_2024.jpg" alt="Athlètes" className="w-full rounded-lg" />
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">

                <div className='w-full md:w-3/5 lg:w-1/2 px-4'>
                    <img src="https://www.francebleu.fr/s3/cruiser-production/2023/07/09c87117-4e24-4dd9-9415-1e16e913fc3b/1200x680_sc_f1yhtk6wcamaltg.jpg" alt="Athlètes" className="w-full rounded-lg" />
                </div>

                <div className='w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 mb-5'>
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">Les Jeux Olympiques d'été de 2024 : Du 26 juillet au 11 août, un Festival Mondial du Sport</h3>
                    <p className="sm:text-lg mt-6">
                        Les Jeux Olympiques d'été de 2024 s'annoncent comme un événement inoubliable, débutant le vendredi 26 juillet et se clôturant le dimanche 11 août. Pendant ces jours de compétition intense, le monde entier se réunira pour célébrer l'athlétisme, la compétition et l'esprit olympique dans toute sa splendeur.
                    </p>
                </div>
            </div>

        </div>
        <Footer />
    </>
    );
};

export default Home;