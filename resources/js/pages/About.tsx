'use client';

import { Link, Head } from '@inertiajs/react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "@/components/app/Navbar/Navbar";
import Footer from "@/components/app/Footer/Footer";
import React from "react";

export default function About() {


    const [current, setCurrent] = React.useState(1);

    return (
        <>
            <Head title="Le programme" />
            <Navbar />
            <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000}
                credits = {{}}
                verticalCentered = {false}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            {/* Section 1 */}
                            <div id="scene" className="relative h-full w-full section bg-[#F7B501]">

                                <img src={'assets/images/fleche_rose.png'}
                                     className={'absolute top-[85%] left-[50%] h-24 w-24 z-50'}/>

                                <div id="title" className="text-8xl absolute left-[1%] top-[47%] space-y-4">
                                    Qui sommes-nous ?
                                </div>

                                <div id='sub-title' data-depth="0.10"
                                     className="z-10 absolute w-[1200px] top-[60%] space-y-4">
                                    <p className={"text-lg font-bold text-black p-4 rounded-lg"}>
                                        Des générations plastiques est un programme de recherche participative porté par
                                        le laboratoire ABTE de l’Université de Caen et par le Dôme, le centre de culture
                                        scientifique technique et industrielle de Caen Normandie.
                                        Il s’inscrit au sein de PROSPERITY, un programme plus vaste de recherche mixte
                                        sur les matériaux plastiques et composites 100% biosourcés et 100%
                                        biodégradables.
                                    </p>
                                </div>

                                <div id="second-layer" className="absolute h-screen w-full" data-depth="0.20"></div>
                            </div>

                            <div className={'section'}>
                                <div className={'mt-32'}>
                                <h1 id={'title'} className={'text-5xl font-bold text-center'}>
                                        Le laboratoire ABTE de l'université de Caen Normandie
                                    </h1>
                                </div>
                                <div className={'grid grid-cols-2 px-24 mt-12 gap-8'}>
                                    <div className={'relative flex justify-center'}>
                                        <div
                                            className={'absolute top-[35%] left-[15%] h-[200px] w-[200px] rounded-full bg-[#5BBB7D] border-2 border-[#A9A9A9]'}/>
                                        <div
                                            className={'h-[400px] w-[400px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                            style={{
                                                backgroundImage: 'url(https://abte.eu/wp-content/uploads/2023/07/AG-ABTE-07-2023.png)',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'left'
                                            }}/>
                                    </div>
                                    <div className={'space-y-4'}>
                                        <p className={'text-lg text-justify'}>
                                            L’unité de recherche ABTE a été créée en 2012 sous la double tutelle des
                                            universités de Caen et de Rouen. Son programme scientifique porte sur la
                                            qualité des aliments et des environnements et leurs impacts sur la santé
                                            humaine et se décline en 2 axes transversaux :
                                        </p>
                                        <p className={'text-lg text-justify font-bold'}>
                                            1. Ressources au service de l’aliment, de l’environnement et de la santé
                                        </p>
                                        <ul className={'list-disc list-inside text-lg space-y-4 ml-4'}>
                                            <li>
                                                Pour des aliments sains et durables : décrire les processus biologiques
                                                impliqués dans la construction des écosystèmes alimentaires, mesurer et
                                                comprendre le transfert des polluants anthropiques sur les ressources
                                                agricoles, identifier les leviers pour la production d’aliments de
                                                qualité durable.
                                            </li>
                                            <li>
                                                Pour un environnement sain et durable : valoriser les biomasses en
                                                combinant développement de bioprocédés et études toxicologiques
                                            </li>
                                            <li>
                                                Diversité biologique au service de l’aliment, de l’environnement et de
                                                la santé : valoriser les collections biologiques constituées lors des
                                                travaux au service de l’aliment : microorganismes d’intérêt
                                                technologiques et organoleptiques, bioprotection, bactériophages des
                                                aliments fermentés ; de l’environnement par le développement de méthodes
                                                de bioremédiation des sols pollués ; et de la santé humaine en oncologie
                                                (médecine intégrative) et en infectiologie.
                                            </li>
                                        </ul>
                                        <p className={'text-lg text-justify font-bold'}>
                                            2. Réponses biologiques aux multiexpositions et santé
                                        </p>

                                        <ul className={'list-disc list-inside text-lg space-y-4 ml-4'}>
                                            <li>
                                                Il s’agit ici d’investiguer les réponses biologiques aux
                                                multiexpositions environnementales (polluants aériens, changement
                                                globaux) et/ou liées à des facteurs individuels comme les traitements
                                                médicaux sur l’Homme ainsi que sur les végétaux et les microorganismes
                                                dans le but de développer des outils d’évaluation et de prévention des
                                                risques liés aux multiexpositions.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className={'section bg-[#F2EDE7]'}>
                                <div className={'grid grid-cols-2 pt-48 p-24 gap-8'}>
                                    <div className={'space-y-4'}>
                                        <h1 id={'title'} className={'text-7xl font-bold'}>
                                            Le Dôme
                                        </h1>
                                        <p className={'text-lg text-justify'}>
                                            <span className={'font-bold'}>Centre de sciences de Caen Normandie, </span> Le Dôme est un espace collaboratif
                                            d'innovation ouvert à tous les publics.
                                            Il propose des actions de culture scientifique et technique autour de
                                            projets réels de recherche et d’innovation.
                                        </p>
                                        <p className={'text-lg text-justify'}>
                                            Il est piloté par l’association Relais d’sciences qui déploie depuis plus de
                                            20 ans une programmation sciences et société sur l’ensemble du territoire
                                            normand.
                                        </p>
                                        <p className={'text-lg text-justify'}>
                                            Le Dôme a développé une expertise et met en œuvre des méthodes de Living Lab
                                            pour faire interagir des communautés professionnelles différentes
                                            (chercheurs, créateurs numériques, industriels, artistes, agents des
                                            services publics... ) entre elles et avec le public.
                                        </p>
                                        <p className={'text-lg text-justify'}>
                                            Ces dernières années, nous assistons à l’émergence de stratégies, de
                                            concepts, d’idées ou de formes d’organisation qui se proposent de renforcer
                                            le rôle des individus dans la réponse à la diversité de leurs besoins.

                                        </p>
                                        <p className={'text-lg text-justify'}>
                                            <span className={'font-bold'}>Premier tiers-lieu français dédié à la recherche et à l’innovation
                                            participatives,</span> Le Dôme mobilise tou·te·s celles et ceux qui souhaitent
                                            partager leurs savoirs, explorer et imaginer collectivement des solutions
                                            concrètes aux enjeux sociétaux d’aujourd’hui et de demain.
                                        </p>
                                        <p className={'text-lg text-justify'}>
                                            Il s’attache notamment à mobiliser les jeunes adultes et les publics les plus éloignés des pratiques culturelles ou des enjeux de sciences et de société. Il travaille également à reconnaître l’engagement, les savoirs, les pratiques et les apprentissages informels des personnes participantes.
                                        </p>
                                    </div>
                                    <div className={'relative flex justify-center'}>
                                        <div
                                            className={'absolute top-[-10%] right-[15%] h-[200px] w-[200px] rounded-full bg-[#61FFA8] border-2 border-[#A9A9A9]'}/>
                                        <div
                                            className={'h-[400px] w-[400px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                            style={{
                                                backgroundImage: 'url(assets/images/ledome_creditphoto_magali-siaudeau.png)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}/>
                                    </div>
                                </div>
                            </div>

                            <div className={'section bg-white max-w-7xl mx-auto'}>

                                <h1 id={'title'} className={'mt-48 text-5xl font-bold text-left'}>
                                    Un programme du label Science avec et pour la société (SAPS)
                                </h1>
                                <p className={'text-lg text-justify mt-8'}>
                                    Un label delivré par le ministère de l'enseignement supérieur et de la recherche.
                                </p>

                                <div
                                    className={'h-[200px] mt-12 w-full bg-white flex justify-start items-center gap-16'}>
                                    <img className={'w-40'} src="assets/images/Logo-ABTE-2022.jpg" alt={'Logo'}/>
                                    <img className={'w-64'} src="assets/images/logos-Marianne-UNICAEN-1200x396.jpg"
                                         alt={'Logo'}/>
                                    <img className={'w-40'} src="assets/images/logo-le-dome-530.jpg" alt={'Logo'}/>
                                    <img className={'w-64'} src="assets/images/logo_saps_v1-1024x445.png.webp"
                                         alt={'Logo'}/>
                                </div>


                                <p className={'text-lg text-justify mt-8'}>
                                Soutenu par :
                                </p>

                                <div
                                    className={'h-[200px] mt-12 w-full bg-white flex justify-start items-center gap-4'}>
                                    <img className={'w-44'} src="assets/images/europe.avif" alt={'Logo'}/>
                                    <img className={'w-96'} src="assets/images/france.jpeg" alt={'Logo'}/>
                                    <img className={'w-44'} src="assets/images/normandie.png" alt={'Logo'}/>
                                </div>

                            </div>

                            <Footer/>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
}
