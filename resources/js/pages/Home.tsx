'use client';

import { Link, Head } from '@inertiajs/react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "@/components/app/Navbar/Navbar";
import {Button} from "@/components/ui/button";
import Footer from "@/components/app/Footer/Footer";

export default function Home() {

    return (
        <>
            <Head title="Accueil" />
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
                            <div id="scene" className="relative h-full w-full section bg-[#5BBB7D]">

                                <img src={'assets/images/DGP_Logo_Accueil.png'}
                                     className={'absolute top-[20%] left-[15%] w-[800px] z-50'}/>
                                <img src={'assets/images/Fleche_jaune.png'}
                                     className={'absolute top-[85%] left-[45%] h-24 w-24 z-50'}/>

                                <div id='sub-title' data-depth="0.10"
                                     className="z-10 absolute left-[50%] top-[60%] w-[800px] space-y-4">
                                    <p className={"text-4xl font-bold text-white p-4 rounded-lg"}>
                                        Un programme de recherche et de science participatives sur les usages et la
                                        dégradation des plastiques et bioplastiques
                                    </p>
                                </div>

                                <div id="first-layer" className="absolute h-screen w-full" data-depth="0.10"></div>
                                <div id="second-layer" className="absolute h-screen w-full" data-depth="0.20"></div>
                                <div id="third-layer" className="absolute h-screen w-full" data-depth="0.25"></div>
                            </div>

                            {/* Section 2 */}
                            <div className="section relative max-w-7xl bg-white mx-auto">
                                <div id={"title"}
                                     className="mt-24 text-7xl font-bold text-center text-black p-4 rounded-lg">
                                    Les objectifs du programme
                                </div>

                                <img src="assets/images/5_Objet.png" className={'absolute top-[10%] left-[0%] mx-auto h-24 w-24 rotate-[100deg]'}/>
                                <img src="assets/images/5_Objet.png"
                                    className={'absolute top-[22%] left-[5%] mx-auto h-12 w-12 rotate-[20deg]'}/>
                                <img src="assets/images/5_Objet.png"
                                    className={'absolute top-[25%] left-[0%] mx-auto h-12 w-12 rotate-[300deg]'}/>


                                <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 text-center"}>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-1"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>
                                            Étudier les enjeux de la pollution plastique
                                        </h1>
                                        <p className={""}>
                                            Cette recherche participative vise à étudier les enjeux de la pollution
                                            plastique tout en contribuant à sa réduction. Elle est axée sur les
                                            comportements de consommation et sur l’étude de nouveaux plastiques
                                            biosourcés et biodégradables qui pourraient constituer une solution durable
                                            et soutenable pour les plastiques indispensables.
                                        </p>
                                    </div>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-2"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>
                                            Étudier la dégradation de bioplastiques de nouvelle génération en milieux
                                            naturels
                                        </h1>
                                        <p className={""}>
                                            Fournir au laboratoire ABTE des indications sur la dégradation des matériaux
                                            biosourcés qu’ils étudient et produisent (PHA et PHA-lin) dans des
                                            environnements très variés qui permettront d’aiguiller, par la suite, les
                                            recherches à venir. Ces résultats fourniront des données “hors labo” pour de
                                            futures recherches à l’ABTE ou ailleurs car les données seront accessibles
                                            librement pour toute structure qui souhaiterait les utiliser.
                                        </p>
                                    </div>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-3"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>Cibler des usages pour les PHA</h1>
                                        <p className={""}>
                                            Identifier des objets plastiques indispensables à notre quotidien, à
                                            réaliser en priorité en plastique biosourcé et biodégradable en milieu
                                            naturel. Le PHA ayant déjà fait ses preuves, notamment dans le domaine
                                            médical ou dans celui des emballages, il semble intéressant de pouvoir
                                            fournir aux laboratoires de recherche mais également aux industriels, des
                                            usages à prioriser pour le développement de ces nouveaux.
                                        </p>
                                    </div>

                                </div>

                                <div className={"mt-8 w-full flex justify-center items-center"}>
                                    <Link href={'/program'} className={"rounded-none"}>
                                        <Button size={'lg'} className={"rounded-none mx-auto uppercase"}>En savoir plus +</Button>
                                    </Link>
                                </div>

                            </div>

                            <div className="section bg-[#F18BAF] relative flex justify-center">

                                <img src="assets/images/9_Objet.png"
                                     className={'absolute top-[65%] left-[12%] mx-auto h-36 w-36 rotate-[0deg] z-50'}/>

                                <img src="assets/images/3_Objet.png" className={'absolute top-[65%] left-[20%] mx-auto h-36 w-36 rotate-[-0deg] z-50'}/>

                                <div className={'mt-24 grid grid-cols-1 md:grid-cols-2 gap-4'}>
                                    <div className={'relative p-4 rounded-lg space-y-4'}>
                                        <div id={"title"} className="absolute text-left w-auto top-[40%] left-[50%] text-7xl font-bold text-black p-4 rounded-lg z-50">
                                            Pourquoi participer ?
                                        </div>
                                        <div
                                            className={'absolute top-[30%] left-[30%] h-96 w-96 bg-[#FAEF38] border-2 border-[#8D7C75] rounded-full'}/>
                                        <div
                                            className={'absolute top-[70%] left-[30%] h-48 w-48 bg-[#F6B500] border-2 border-[#8D7C75] rounded-full'}/>
                                    </div>
                                    <div
                                        className={'mt-36 h-auto w-full flex justify-center items-center flex-col p-12 space-y-8 max-w-2xl'}>
                                        <div className={'space-y-2'}>
                                            <h1 className={'text-4xl font-bold text-black'}>Contribuer
                                                collectivement</h1>
                                            <p className={''}>À faire avancer la recherche en produisant des données sur
                                                os consommations plastiques et des observations de dégradation
                                                d’échantillons dans des milieux naturels très différents.</p>
                                        </div>
                                        <div className={'space-y-2'}>
                                            <h1 className={'text-4xl font-bold text-black'}>Agir</h1>
                                            <p className={''}>Sur sa propre consommation de plastique, réfléchir à ses
                                                besoins, aux plastiques inutiles et à ceux qui nous sont
                                                nécessaires.</p>
                                        </div>
                                        <div className={'space-y-2'}>
                                            <h1 className={'text-4xl font-bold text-black'}>Partager et s’informer</h1>
                                            <p className={''}>Dans un espace participatif et stimulant, des trucs,
                                                astuces et pratiques plus vertueuses pour l’environnement ainsi que des
                                                informations complétant celles mises à disposition par l’équipe de
                                                médiation du Dôme.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={'mt-36 h-12 w-1/2 bg-white rounded-full mx-auto grid grid-cols-2'}>
                                    <div className={'w-full h-12 bg-[#5BBB7D] rounded-full'}/>
                                    <div
                                        className={'w-full h-12 bg-white rounded-full flex items-center justify-center'}>
                                        <h1 className={'text-xl font-bold text-center text-[#5BBB7D]'}>
                                            Aidez-nous à compléter le programme !
                                        </h1>
                                    </div>
                                </div>

                            </div>

                            <section className={"section relative bg-[#F7B501] h-screen w-screen grid-cols-2"}>

                                <img src="assets/images/4_Objet.png"
                                     className={'absolute top-[15%] left-[15%] mx-auto h-36 w-36 rotate-[0deg] z-50'}/>

                                <img src="assets/images/8_Objet.png"
                                     className={'absolute top-[15%] left-[25%] mx-auto h-36 w-36 rotate-[0deg] z-50'}/>


                                <div
                                    className={'h-96 w-96 rounded-full bg-[#FAEF38] absolute top-[10%] left-[30%] border-2 border-[#8D7C75]'}/>

                                <div className={'h-96 w-96 rounded-full bg-[#60FFA7] absolute top-[60%] left-[60%] border-2 border-[#8D7C75]'}/>

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
                            </section>


                            <section className={'section bg-white h-screen w-screen relative'}>

                                <div
                                    className={'h-52 w-52 rounded-full bg-[#60FFA7] absolute top-[15%] left-[0%] border-2 z-50 border-[#8D7C75]'}/>

                                <div
                                    className={'h-72 w-72 rounded-full bg-[#5BBB7D] absolute top-[0%] left-[5%] border-2 border-[#8D7C75]'}/>


                                <h1 id={'title'}
                                    className={'text-7xl font-bold mt-24 text-center text-black p-4 rounded-lg'}>
                                    Les plastiques
                                </h1>
                                <p className={'text-5xl text-center text-black rounded-lg'}>
                                    Observatoire et ressources
                                </p>

                                <div className={'mt-12 grid grid-cols-2 gap-8 max-w-6xl mx-auto'}>
                                    <div className={'flex justify-center items-top'}>
                                        <img
                                            src="assets/images/01_5_carte.png" className={'w-56 border-2 border-[#707070] rounded-lg'}/>
                                        <div className={'pl-4'}>
                                            <h1 className={'text-2xl font-bold text-black'}>
                                                Carte des participants
                                            </h1>
                                            <p className={'text-black text-sm'}>
                                                Une carte actualisée chaque semaine sur laquelle vous pourrez suivre
                                                l’évolution des participations, les territoires les plus impliqués… vous
                                                n’êtes pas seul·e à vous soucier des plastiques !
                                            </p>
                                        </div>
                                    </div>

                                    <div className={'flex justify-center items-center'}>

                                        <img src="assets/images/01_5_MSRP.png" className={'w-56 border-2 border-[#707070] rounded-lg'}/>

                                        <div className={'pl-4'}>
                                            <h1 className={'text-2xl font-bold text-black'}>
                                                Recherche et science participatives
                                            </h1>
                                            <p className={'text-black text-sm'}>
                                                En savoir plus sur les programmes de recherche participative et de
                                                science participative, découvrir d’autres programmes menés en France par
                                                des centres de sciences, des espaces de médiation scientifique, des
                                                universités, des associations… sur les plastiques bien sûr mais
                                                également sur des thématiques connexes liées à l’environnement, à la
                                                biodiversité, aux transitions…
                                            </p>
                                        </div>
                                    </div>

                                    <div className={'flex justify-center items-top'}>
                                        <img src="assets/images/01_5_livres.png" className={'w-56 border-2 border-[#707070] rounded-lg'}/>
                                        <div className={'pl-4'}>
                                            <h1 className={'text-2xl font-bold text-black'}>
                                                Ressources
                                            </h1>
                                            <p className={'text-black text-sm'}>
                                                Une page où vous trouverez des informations sur les plastiques, des
                                                définitions, des articles et livres de références, mais aussi des trucs
                                                et astuces pour modifier votre consommation plastique et approfondir vos
                                                connaissances sur les plastiques.
                                            </p>
                                        </div>
                                    </div>

                                    <div className={'flex justify-center items-top'}>
                                        <img src="assets/images/01_5_maison.png" className={'w-56 border-2 border-[#707070] rounded-lg'}/>
                                        <div className={'pl-4'}>
                                            <h1 className={'text-2xl font-bold text-black'}>
                                                La maison DGP
                                            </h1>
                                            <p className={'text-black text-sm'}>
                                                Prochainement sur ce site, une maison interactive où vous pourrez
                                                identifier, pièce par pièce, des objets plastiques à supprimer, à
                                                substituer, à diminuer… et où vous pourrez proposer des solutions et
                                                astuces pour y parvenir.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <Footer/>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
}
