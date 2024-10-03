'use client';

import { Link, Head } from '@inertiajs/react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "@/components/app/Navbar/Navbar";
import {Button} from "@/components/ui/button";
import Footer from "@/components/app/Footer/Footer";
import React from "react";

export default function Program() {


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
                            <div id="scene" className="relative h-full w-full section bg-[#60FFA7]">
                                <div id="title" className="text-8xl absolute right-[63%] top-[47%] space-y-4">
                                    Le programme
                                </div>

                                <div id='sub-title' data-depth="0.10"
                                     className="z-10 absolute w-[1200px] top-[60%] space-y-4">
                                    <p className={"text-lg font-bold text-black p-4 rounded-lg"}>
                                        Lancé à la rentrée 2023 par Le Dôme et le laboratoire Aliments, bioprocédés,
                                        toxicologie et environnements (ABTE), Des générations plastiques est un
                                        programme de recherche participative qui a pour objectif de développer, d’ici à
                                        2026, des alternatives susceptibles de réduire l’empreinte écologique de notre
                                        consommation de plastiques.
                                    </p>
                                </div>

                                <img src={'assets/images/fleche_rose.png'}
                                     className={'absolute top-[85%] left-[45%] h-24 w-24 z-50'}/>

                                <div id="second-layer" className="absolute h-screen w-full" data-depth="0.20"></div>
                            </div>

                            <div className={'section'}>
                                <div className={'mt-32'}>
                                <h1 id={'title'} className={'text-6xl font-bold text-center'}>
                                        Partout où on le cherche, on le trouve !
                                    </h1>
                                </div>
                                <div className={'grid grid-cols-2 p-24 gap-8'}>
                                    <div className={'relative flex justify-center'}>
                                        <div
                                            className={'absolute top-[-10%] left-[15%] h-[200px] w-[200px] rounded-full bg-[#FAEF38] border-2 border-[#A9A9A9]'}/>
                                        <div
                                            className={'h-[500px] w-[500px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                            style={{
                                                backgroundImage: 'url(assets/images/02_croissance_prod_plast.png)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}/>
                                    </div>
                                    <div className={'space-y-4 flex justify-center items-center flex-col max-w-lg'}>
                                        <p className={'text-lg text-left'}>
                                            Les scientifiques s’inquiètent de plus en plus de la présence du plastique,
                                            sous toutes ses formes et dans tous les milieux : mers et océans, sols, air,
                                            jusque dans les organes et tissus des organismes vivants.
                                        </p>
                                        <p className={'text-lg text-left'}>
                                            Les premières matières plastiques artificielles sont apparues au milieu du
                                            19ème siècle et c’est seulement au milieu du 20ème siècle que la production
                                            s’est intensifiée et a connu une croissance exponentielle passant de 2
                                            millions de tonnes en 1950 à plus de 450 millions de tonnes annuelles
                                            aujourd'hui.
                                        </p>
                                        <p className={'text-lg text-left'}>
                                            Le recherche avance tant sur la connaissance du problème que sur l’émergence
                                            de solutions mais les prévisions de croissance de la production de
                                            plastiques ne sont pas rassurantes : un rythme annuel qui poursuit son
                                            accélération, promettant une production multipliée par trois d’ici 30 ans,
                                            soit des prévisions bien au delà du milliard de tonnes de plastiques
                                            produites chaque année dès 2050.
                                        </p>
                                        <p className={'text-lg text-left'}>
                                            D’autre part, la très lente décomposition du plastique dans notre
                                            environnement n’a pas encore révélé tout son potentiel ! Que deviendront-ils
                                            dans cent ans, dans deux cents ans ?
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className={'section bg-[#F2EDE7]'}>
                                <div className={'grid grid-cols-2 pt-48 gap-8 max-w-7xl mx-auto'}>
                                    <div className={'space-y-4'}>
                                        <h1 id={'title'} className={'text-6xl mb-8 font-bold text-center'}>
                                            La genèse du programme
                                        </h1>
                                        <p className={'text-lg text-left'}>
                                            Dans ce contexte, un questionnement de fond s’impose : comment rendre plus
                                            soutenable notre rapport aux plastiques ?
                                        </p>
                                        <p className={'text-lg text-left'}>
                                            “Des générations plastiques”, le programme de recherche participative lancé
                                            par le laboratoire “Aliments, bioprocédés, toxicologie et environnements”
                                            (ABTE) et Le Dôme, s’empare de cette question et fait le pari que c’est avec
                                            une grande diversité de personnes, de points de vue, d’expériences qu’on
                                            trouvera des réponses adaptées et applicables.
                                        </p>
                                        <p className={'text-lg text-left'}>
                                            En effet, au sein d’un projet de recherche mixte de grande envergure visant
                                            à concevoir des matériaux plastiques et des matériaux composites à base de
                                            plastique et de fibres de lin 100% biosourcés et 100% biodégradables, le
                                            laboratoire ABTE a décidé de consacrer une place importante à la recherche
                                            participative; faire appel au “grand public” :
                                        </p>
                                        <ul className={'list-disc list-inside text-lg space-y-4 ml-4'}>
                                            <li>Pour réfléchir à la problématique de la pollution plastique, aux usages
                                                des plastiques et des matériaux composites, à la gestion de leur fin de
                                                vie, aux alternatives…
                                            </li>
                                            <li>Pour informer les citoyen·ne·s sur les travaux de recherche en cours à
                                                l’ABTE et leur proposer de devenir acteurs et actrices de la recherche
                                                scientifique en participant à l’élaboration d’une science participative
                                                permettant d’imaginer collectivement des d’alternatives soutenables.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={'relative flex justify-center'}>
                                        <div
                                            className={'absolute top-[-10%] right-[15%] h-[200px] w-[200px] rounded-full bg-[#F18BAF] border-2 border-[#A9A9A9]'}/>
                                        <div
                                            className={'h-[600px] w-[600px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                            style={{
                                                backgroundImage: 'url(assets/images/02__La_genese_du_projet.png)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}/>
                                    </div>
                                </div>
                            </div>


                            <div className={'section relative'}>
                                <div className={'max-w-4xl mx-auto'}>

                                    <img src="assets/images/5_Objet.png" className={'absolute top-[10%] left-[80%] mx-auto h-24 w-24 rotate-[300deg]'}/>

                                    <div id={'title'} className="text-6xl font-black mt-32 text-center">
                                        La co-construction du protocole
                                    </div>
                                    <p className={'text-lg text-justify mt-12'}>
                                        Près de trois cents personnes, venues de tout horizon, ont participé au
                                        processus de co-construction du protocole qui vous est proposé aujourd’hui.
                                    </p>
                                    <p className={'text-lg text-justify mt-4'}>
                                        Un processus structuré en quatre temps autours de séries d’ateliers ouverts à
                                        toutes et à tous, où les publics ont co-construit ce protocole, étape par étape,
                                        avec l’aide des médiateurs et médiatrices du Dôme et en présence d’un chercheur
                                        de l’ABTE.
                                    </p>
                                    <img
                                        src="assets/images/02_protocole_court.png"
                                        alt="" className={'w-[700px] mt-12 mx-auto rounded-md'}/>
                                </div>
                            </div>


                            <div className={'section relative'}>

                                <img
                                    src="assets/images/4_Objet.png"
                                    className={'absolute top-[30%] left-[10%] mx-auto h-24 w-24 rotate-[0deg]'}/>


                                <div className={'max-w-6xl mx-auto'}>

                                    <div className={'grid grid-cols-4 mt-32 gap-8'}>
                                        <div
                                            className={`p-2 text-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 1 ? 'bg-[#61FFA8] text-black' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(1)}>
                                            <h1 className={'text-lg'}>
                                                Etape 1
                                            </h1>
                                            <p className={`${current === 1 ? 'font-black' : ''}`}>Le lancement</p>
                                        </div>
                                        <div
                                            className={`p-2 text-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 2 ? 'bg-[#61FFA8] text-black' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(2)}>
                                            <h1 className={'text-lg'}>
                                                Etape 2
                                            </h1>
                                            <p className={`${current === 2 ? 'font-black' : ''}`}>Le commencement</p>
                                        </div>
                                        <div
                                            className={`p-2 text-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 3 ? 'bg-[#61FFA8] text-black' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(3)}>
                                            <h1 className={'text-lg'}>
                                                Etape 3
                                            </h1>
                                            <p className={`${current === 3 ? 'font-black' : ''}`}>La construction</p>
                                        </div>
                                        <div
                                            className={`p-2 text-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 4 ? 'bg-[#61FFA8] text-black' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(4)}>
                                            <h1 className={'text-lg'}>
                                                Etape 4
                                            </h1>
                                            <p className={`${current === 4 ? 'font-black' : ''}`}>La finalisation</p>
                                        </div>
                                    </div>

                                    <div className={'w-full h-1 mt-4 rounded-md bg-black'}/>


                                    {current === 1 && (
                                        <div className={'grid mt-24 grid-cols-2 gap-8'}>
                                            <div className={'space-y-4'}>
                                                <h1 id={'title'} className={'text-6xl font-bold text-center'}>
                                                    Le lancement
                                                </h1>
                                                <h2 className={'text-4xl font-bold text-center'}>
                                                    Octobre 2023
                                                </h2>
                                                <h3 className={'text-lg font-bold text-center'}>
                                                    Rencontre : Bio-plastique, bio-fantastique : le vrai, le faux, le
                                                    flou
                                                </h3>
                                                <p className={'text-lg text-justify'}>
                                                    Le programme Des générations plastiques a débuté le 17 octobre avec
                                                    une rencontre “le vrai, le faux, le flou” pour établir une
                                                    cartographie des controverses sur les plastiques. Tout au long de la
                                                    soirée, le public a questionné et échangé avec les invité·e·s sur
                                                    les bioplastiques, les matériaux biosourcés, leurs usages et les
                                                    avantages et inconvénients de ces alternatives aux plastiques
                                                    traditionnels.

                                                </p>
                                                <p className={'text-lg text-justify'}>
                                                    Le lancement s’est poursuivi le lendemain avec un atelier
                                                    participatif proposé par le CEDRE (Centre de documentation de
                                                    recherche et d’expérimentations sur les pollutions accidentelles des
                                                    eaux (CEDRE)) pour quantifier et analyser les types de déchets
                                                    retrouvés sur les rives de l’orne à Caen.
                                                </p>
                                                <div className={'flex justify-center items-center'}>
                                                    <Button size={'lg'} className={'rounded-none uppercase'}>En savoir
                                                        plus</Button>
                                                </div>
                                            </div>
                                            <div className={'relative flex justify-center'}>
                                                <div
                                                    className={'h-[400px] w-[400px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                                    style={{
                                                        backgroundImage: 'url(assets/images/02_VraiFauxFlou_ronde.png)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }}/>
                                            </div>
                                        </div>
                                    )}

                                    {current === 2 && (
                                        <div className={'grid mt-24 grid-cols-2 gap-8'}>
                                            <div className={'space-y-4'}>
                                                <h1 id={'title'} className={'text-6xl font-bold text-center'}>
                                                    Le commencement
                                                </h1>
                                                <h2 className={'text-4xl font-bold text-center'}>
                                                    Novembre à décembre 2023
                                                </h2>
                                                <h3 className={'text-lg font-bold text-center'}>
                                                    En quêtes de biodéchets - une série de 3 ateliers participatifs
                                                </h3>
                                                <p className={'text-lg text-justify'}>
                                                    La création du protocole de science participatives a commencé par
                                                    une série de trois ateliers de co-création. Les publics ont été
                                                    invité·e·s à réfléchir à des usages pour les plastiques biosourcés
                                                    et biodégradables étudiés par le laboratoire ABTE (les PHA). Quels
                                                    objets plastiques sont indispensables à notre quotidien ? Dans
                                                    quelles situations pouvons-nous utiliser les plastiques biosourcés ?
                                                    Sont-ils réellement la solution ? A la suite des échanges, les
                                                    personnes participantes ont imaginé des hypothèses à tester dans un
                                                    protocole de recherche scientifique pour faire avancer les
                                                    connaissances sur la pollution plastique.
                                                </p>
                                            </div>
                                            <div className={'relative flex justify-center'}>
                                                <div
                                                    className={'h-[400px] w-[400px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                                    style={{
                                                        backgroundImage: 'url(assets/images/02-construction.png)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }}/>
                                            </div>
                                        </div>
                                    )}

                                    {current === 3 && (
                                        <div className={'grid mt-24 grid-cols-2 gap-8'}>
                                            <div className={'space-y-4'}>
                                                <h1 id={'title'} className={'text-6xl font-bold text-center'}>
                                                    La construction
                                                </h1>
                                                <h2 className={'text-4xl font-bold text-center'}>
                                                    Avril 2024
                                                </h2>
                                                <h3 className={'text-lg font-bold text-center'}>
                                                    Prototypes en bioplastique
                                                </h3>
                                                <p className={'text-lg text-justify'}>
                                                    A l’occasion du TURFU festival, trois ateliers ont invité les
                                                    publics à écrire des protocoles de recherche pour tester les
                                                    hypothèses imaginées lors des précédents ateliers. Les réflexions se
                                                    sont portées sur des expériences pour mesurer la biodégradabilité
                                                    des bioplastiques PHA et sur un prototype du kit plastique à
                                                    enfouir. D’autres participant·e·s ont imaginé des questionnaires sur
                                                    nos comportements de consommation et notre rapport au plastique.
                                                </p>
                                            </div>
                                            <div className={'relative flex justify-center'}>
                                                <div
                                                    className={'h-[400px] w-[400px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                                    style={{
                                                        backgroundImage: 'url(assets/images/02_EQB.JPG)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }}/>
                                            </div>
                                        </div>
                                    )}

                                    {current === 4 && (
                                        <div className={'grid mt-24 grid-cols-2 gap-8'}>
                                            <div className={'space-y-4'}>
                                                <h1 id={'title'} className={'text-6xl font-bold text-center'}>
                                                    La finalisation
                                                </h1>
                                                <h2 className={'text-4xl font-bold text-center'}>
                                                    Mai à juillet 2024
                                                </h2>
                                                <h3 className={'text-lg font-bold text-center'}>
                                                    Bioplastiques : c’est quoi la consigne
                                                </h3>
                                                <p className={'text-lg text-justify'}>
                                                    A la suite du Turfu festival, deux ateliers ont donné la parole aux
                                                    participant·e·s pour faire évoluer les protocoles de recherche.
                                                    Comment enterrer le kit ? Quels outils utiliser ? Les publics ont
                                                    également testé le questionnaire sur les usages du plastique et fait
                                                    un retour sur le design de la plateforme.
                                                    Au final, après quelques ajustements techniques, ce processus
                                                    participatif a généré le protocole que nous vous proposons
                                                    aujourd’hui.
                                                </p>
                                                <p className={'text-lg text-justify'}>
                                                    Le lancement s’est poursuivi le lendemain avec un atelier
                                                    participatif proposé par le CEDRE (Centre de documentation de
                                                    recherche et d’expérimentations sur les pollutions accidentelles des
                                                    eaux (CEDRE)) pour quantifier et analyser les types de déchets
                                                    retrouvés sur les rives de l’orne à Caen.
                                                </p>
                                            </div>
                                            <div className={'relative flex justify-center'}>
                                                <div
                                                    className={'h-[400px] w-[400px] rounded-full border-2 border-[#A9A9A9] z-10'}
                                                    style={{
                                                        backgroundImage: 'url(assets/images/02_CQLC.png)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }}/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={"section relative bg-[#F7B501] h-screen w-screen grid-cols-2"}>

                                <img src="assets/images/4_Objet.png"
                                     className={'absolute top-[15%] left-[15%] mx-auto h-36 w-36 rotate-[0deg] z-50'}/>

                                <img src="assets/images/8_Objet.png"
                                     className={'absolute top-[15%] left-[25%] mx-auto h-36 w-36 rotate-[0deg] z-50'}/>


                                <div
                                    className={'h-96 w-96 rounded-full bg-[#FAEF38] absolute top-[10%] left-[30%] border-2 border-[#8D7C75]'}/>

                                <div
                                    className={'absolute top-[20%] left-[10%] bg-[#F2EDE7] h-[500px] w-[500px] border-2 border-[#707070] space-y-12 p-24 text-center'}>
                                    <div id="title" data-depth="0.05" className="right-[30%] top-[30%]">
                                        <div id="title-text"
                                             className="text-center bg-white text-black text-4xl font-black p-4 rounded-lg">Comment
                                        </div>
                                        <div id="title-subtext"
                                             className="text-center bg-[#FAEF38] text-black text-4xl font-black p-4 rounded-lg -rotate-6">
                                            Participer ?
                                        </div>
                                    </div>
                                    <p className={'text-2xl'}>
                                        Participez à un protocole de science participative{' '}<span
                                        className={'font-bold'}>individuellement</span> ou <span
                                        className={'font-bold'}>collectivement.</span>
                                    </p>
                                </div>

                                <div
                                    className={'absolute top-[40%] right-[28%] bg-[#F18BAF] h-[400px] w-[600px] border-2 border-[#707070] space-y-12 p-12'}>
                                    <h1 className={'text-4xl font-black text-white text-center'}>
                                        Démarrer l'aventure !
                                    </h1>

                                    <div className={'grid grid-cols-2 gap-4'}>
                                        <div className={'flex items-center justify-start w-full space-x-6'}>
                                            <h1 id={'title'} className={'text-4xl font-bold text-white'}>
                                                1
                                            </h1>
                                            <p className={'text-black font-bold'}>
                                                Créer un compte
                                            </p>
                                        </div>


                                        {/*ici */}

                                        <div className={'flex items-center justify-start w-full space-x-6'}>
                                            <h1 id={'title'} className={'text-4xl font-bold text-white'}>
                                                4
                                            </h1>
                                            <p className={'text-black font-bold'}>
                                                Exposer ou enfouir les échantillons
                                            </p>
                                        </div>

                                        <div className={'flex items-center justify-start w-full space-x-6'}>
                                            <h1 id={'title'} className={'text-4xl font-bold text-white'}>
                                                2
                                            </h1>
                                            <p className={'text-black font-bold'}>
                                                Commander le kit
                                            </p>
                                        </div>

                                        <div className={'flex items-center justify-start w-full space-x-6'}>
                                            <h1 id={'title'} className={'text-4xl font-bold text-white'}>
                                                5
                                            </h1>
                                            <p className={'text-black font-bold'}>
                                                Récupérer et envoyer une photo
                                            </p>
                                        </div>


                                        <div className={'flex items-center justify-start w-full space-x-6'}>
                                            <h1 id={'title'} className={'text-4xl font-bold text-white'}>
                                                3
                                            </h1>
                                            <p className={'text-black font-bold'}>
                                                Répondre aux 3 questionnaires
                                            </p>
                                        </div>


                                    </div>

                                    <div className={'flex p-4 justify-center items-center'}>
                                        <Button size={'lg'} className={'rounded-none uppercase'}>
                                            Participer
                                        </Button>
                                    </div>

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
