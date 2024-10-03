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
            <Head title="Les ressources"/>
            <Navbar />
            <ReactFullpage
                //fullpage options
                licenseKey = {''}
                scrollingSpeed = {1000}
                credits = {{}}
                verticalCentered = {false}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>

                            {/* Section 1 */}
                            <div id="scene" className="relative h-full w-full section bg-[#F18BAF]">

                                <img src={'assets/images/Fleche_jaune.png'}
                                     className={'absolute top-[85%] left-[50%] h-24 w-24 z-50'}/>

                                <div id="title" className="text-8xl absolute left-[1%] top-[47%] space-y-4">
                                    Les ressources
                                </div>

                                <div id='sub-title' data-depth="0.10"
                                     className="z-10 absolute w-[1200px] top-[60%] space-y-4">
                                    <p className={"text-lg font-bold text-black p-4 rounded-lg"}>
                                        Vous trouverez ici des informations sur les plastiques, des définitions courtes
                                        et imagées (“En bref”), des liens vers des articles et livres de références pour
                                        approfondir vos connaissances sur les plastiques, des références de livres ou de
                                        films qui traitent de la question des transitions en général ou de la transition
                                        plastique en particulier, mais aussi des trucs et astuces pour remplacer
                                        certains objets plastiques, pour réfléchir à vos usages…
                                        Bienvenue, et bonne lecture !
                                    </p>
                                </div>

                                <div id="second-layer" className="absolute h-screen w-full" data-depth="0.20"></div>
                            </div>

                            <div className={'section'}>
                                <div className={'max-w-6xl mx-auto'}>

                                <div className={'grid grid-cols-6 mt-24 gap-8 text-center text-sm'}>
                                        <div
                                            className={`p-1 flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(1)}>
                                            En bref
                                        </div>
                                        <div
                                            className={`p-1 flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 2 ? 'bg-black text-white' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(2)}>
                                            Coups de coeur
                                        </div>
                                        <div
                                            className={`p-1 flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 3 ? 'bg-black text-white' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(3)}>
                                            Livres et films
                                        </div>
                                        <div
                                            className={`p-1 flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 4 ? 'bg-black text-white' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(4)}>
                                            Articles scientifiques et thèses

                                        </div>
                                        <div
                                            className={`p-1 flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 5 ? 'bg-black text-white' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(5)}>
                                            Dans la presse
                                        </div>
                                        <div
                                            className={`p-1 flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${current === 6 ? 'bg-black text-white' : 'bg-white text-black'}`}
                                            onClick={() => setCurrent(6)}>
                                            Trucs et astuces
                                        </div>
                                    </div>

                                    <div className={'w-full h-1 mt-4 rounded-md bg-black'}/>


                                    {current === 1 && (

                                        <div className={'flex flex-row flex-wrap mt-12 pb-12 justify-between'}>
                                            <div className={'space-y-4 w-1/3'}>
                                                <img
                                                    src="assets/images/EN_BREF-cest_quoi_le_plastique-1.png"
                                                    alt={'image'} className={'h-[150px] w-[250px]'}
                                                />
                                                <h1 className={'text-xl font-bold'}>C'est quoi du plastique ?</h1>
                                                <p className={'text-lg text-left'}>
                                                    Le plastique ou matière plastique est un polymère (une grosse
                                                    molécules formée d’unités plus petites et identiques) le plus
                                                    souvent mélangé à des additifs.
                                                </p>
                                                <a href={'#'} className={'underline font-bold'}>Lire la suite</a>
                                            </div>

                                            <div className={'space-y-4 w-1/3'}>
                                                <img
                                                    src="assets/images/En-bref-400-millions-en-carte.png"
                                                    alt={'image'} className={'h-[150px] w-[250px]'}
                                                />
                                                <h1 className={'text-xl font-bold'}>400 millions de tonnes de
                                                    plastique</h1>
                                                <p className={'text-lg text-left'}>
                                                    En 2022, la production de plastique brut (non recyclé) a atteint les
                                                    400,3 millions de tonnes.
                                                </p>
                                                <a href={'#'} className={'underline font-bold'}>Lire la suite</a>
                                            </div>

                                            <div className={'space-y-4 w-1/3'}>
                                                <img
                                                    src="assets/images/pollutionplastiques.png"
                                                    alt={'image'} className={'h-[150px] w-[250px]'}
                                                />
                                                <h1 className={'text-xl font-bold'}>C'est quoi la pollution plastique
                                                    ?</h1>
                                                <p className={'text-lg text-left'}>
                                                    Chaque année 375 millions de tonnes de déchets plastiques sont
                                                    produites dans le monde.
                                                </p>
                                                <a href={'#'} className={'underline font-bold'}>Lire la suite</a>
                                            </div>

                                            <div className={'space-y-4 w-1/3 mt-4'}>
                                                <img
                                                    src="assets/images/bioplastiques.png"
                                                    alt={'image'} className={'h-[150px] w-[250px]'}
                                                />
                                                <h1 className={'text-xl font-bold'}>C’est quoi un bioplastique ?</h1>
                                                <p className={'text-lg text-left'}>
                                                    Le terme bioplastique regroupe les plastiques biosourcés et/ou
                                                    biodégradables.
                                                </p>
                                                <a href={'#'} className={'underline font-bold'}>Lire la suite</a>
                                            </div>

                                            <div className={'space-y-4 w-1/3 mt-4'}>
                                                <img
                                                    src="assets/images/pha.png"
                                                    alt={'image'} className={'h-[150px] w-[250px]'}
                                                />
                                                <h1 className={'text-xl font-bold'}>PHA - du plastique dans des
                                                    bactéries</h1>
                                                <p className={'text-lg text-left'}>
                                                    Les PHA sont des plastiques produits par des bactéries au sein de
                                                    leur propre organisme, ils sont à la fois biosourcés et
                                                    biodégradables.
                                                </p>
                                                <a href={'#'} className={'underline font-bold'}>Lire la suite</a>
                                            </div>

                                            <div className={'space-y-4 w-1/3 mt-4'}>
                                                <img
                                                    src="assets/images/trad.png"
                                                    alt={'image'} className={'h-[150px] w-[250px]'}
                                                />
                                                <h1 className={'text-xl font-bold'}>Les plastiques traditionnels</h1>
                                                <p className={'text-lg text-left'}>
                                                    Les plastiques peuvent être regroupés en deux grandes catégories :
                                                    les thermoplastiques et les thermodurcissables. Ils sont, à plus de
                                                    98%, issus du pétrole.
                                                </p>
                                                <a href={'#'} className={'underline font-bold'}>Lire la suite</a>
                                            </div>

                                        </div>


                                    )}


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
