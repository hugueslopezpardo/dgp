'use client';

import {Head, Link} from '@inertiajs/react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "@/components/app/Navbar/Navbar";
import Footer from "@/components/app/Footer/Footer";
import React from "react";
import {Button} from "@/components/ui/button";

export default function About() {


    const [current, setCurrent] = React.useState(1);

    return (<>
            <Head title="Participer"/>
            <Navbar/>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000}
                credits={{}}
                verticalCentered={false}
                render={({state, fullpageApi}) => {
                    return (<ReactFullpage.Wrapper>
                        {/* Section 1 */}
                        <div id="scene" className="relative h-full w-full section bg-[#F7B501]">

                            <img src={'assets/images/fleche_rose.png'}
                                 className={'absolute top-[85%] left-[50%] h-24 w-24 z-50'}/>

                            <div id="title" className="text-8xl absolute left-[1%] top-[47%] space-y-4">
                                Participer
                            </div>

                            <div id='sub-title' data-depth="0.10"
                                 className="z-10 absolute w-[1200px] top-[60%] space-y-4">
                                <p className={"text-lg font-bold text-black p-4 rounded-lg"}>
                                    Bienvenue sur la page de participation, un espace sur lequel vous trouverez les
                                    réponses à la plupart des questions que vous vous posez sur la façon de vous
                                    inscrire, de commander (gratuitement) un Kit et d’accéder aux questionnaires.
                                    Vous y trouverez également un aperçu synthétique du protocole expérimental et
                                    des différents outils de participation ainsi que des éléments plus précis, tels
                                    que la notice qui accompagne le Kit, des tutos pour l’exposition des
                                    échantillons de plastiques en milieu naturel et quelques autres informations.
                                </p>
                            </div>

                            <div id="second-layer" className="absolute h-screen w-full" data-depth="0.20"></div>
                        </div>

                        <div className={'section max-w-7xl mx-auto'}>
                            <div className={'mt-32'}>
                                <h1 id={'title'} className={'text-5xl font-bold text-center'}>
                                    Un protocole co-construit par près de 300 personnes
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
                                        Près de trois cents personnes aux profils très divers (jeunes, moins jeunes,
                                        femmes, hommes, salarié·e·s, étudiant·e·s, personnes sans emploi,
                                        artisan·e·s, agriculteurs·trices…), ont déjà participé à ce programme, soit
                                        en prenant part à une conférence participative, à un atelier de
                                        co-conception ou de co-prototypage ou à l’occasion d’une visite de l’Espace
                                        découverte Des générations plastiques, d’un échange sur les pollutions
                                        plastiques, d’un atelier de caractérisation des déchets plastiques échoués
                                        sur les rives de l’Orne…
                                    </p>
                                    <p className={'text-lg text-justify'}>
                                        Le protocole que nous vous présentons plus en détail sur cette page est le
                                        fruit de ces premières participations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={'section mx-auto bg-[#F2EDE7]'}>
                            <div className={'grid max-w-7xl mx-auto grid-cols-1 pt-24 p-24 gap-8'}>
                                <div className={'space-y-4'}>
                                    <h1 id={'title'} className={'text-7xl font-bold text-center'}>
                                        Découvrez le protocole
                                    </h1>
                                    <p className={'text-lg text-center'}>
                                        Nous nous concentrons ici sur la participation au protocole de science
                                        participative mais d’autres façons de participer s’offriront à celles et
                                        ceux qui le souhaitent durant tout le programme.
                                    </p>
                                </div>

                                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-24 text-center"}>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-1"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>
                                            Un test de dégradation de PHA
                                        </h1>
                                        <p className={""}>
                                            Les plastiques dits "biodégradables" le sont-ils vraiment ?
                                            Aidez-nous à le découvrir !
                                        </p>
                                    </div>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-2"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>
                                            L’enquête sur nos consommations plastiques
                                        </h1>
                                        <p className={""}>
                                            Dès les premiers ateliers de co-problématisation, les publics ont
                                            souhaité placer la réduction de la production de plastiques au
                                            premier plan. Saurez-vous relever le défi ?
                                        </p>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className={'section relative'}>
                            <div className={'max-w-4xl mx-auto text-center'}>
                                <div id={'title'} className="text-6xl font-black mt-32 text-center">
                                    Une expérience de 4 mois pour regarder les plastiques sous un nouvel angle
                                </div>
                                <img src="assets/images/02_protocole_court.png" alt="" className={'w-[700px] mt-12 mx-auto rounded-md'}/>
                                <Button className={'mt-12 rounded-none'}>Participer au protocole</Button>
                            </div>
                        </div>


                        <div className={'section relative bg-[#5BBB7D]'}>
                            <div className={'max-w-4xl mx-auto text-center'}>
                                <div id={'title'} className="text-6xl font-black mt-32 text-center">
                                    L’exposition des PHA dans un milieu naturel
                                </div>
                                <h2 className={'text-2xl font-bold mt-12'}>
                                    Les plastiques dits “biodégradables” le sont-ils vraiment ?
                                </h2>
                                <p className={'mt-4'}>
                                    Cette question s’est imposée d’emblée à nos publics lorsque nous leur avons
                                    présenté les travaux de recherche du laboratoire ABTE sur les PHA
                                    (polyhydroxyalcanoate). Mais comment tester cette biodégradabilité dans des
                                    milieux naturels très variés ? Certes, des études scientifiques très sérieuses
                                    (voir la page ressources) montrent que les PHA sont biodégradables dans de très
                                    nombreuses conditions, mais cette biodégradabilité a-t-elle été testée dans une
                                    forêt de pin du centre de la France en plein été ? au fond d’un lac alpin à 3°C
                                    ? sur une pelouse à Evreux lors d’un hiver sec et rigoureux ? …
                                    Car les déchets plastiques sont partout, un plastique biodégradable doit donc
                                    pouvoir se dégrader dans n’importe quel milieu naturel.
                                </p>
                                <p className={'mt-4'}>
                                    C’est cette feuille de route que les participant·e·s des ateliers En Quête de
                                    Biodéchets ont donné à celles et ceux qui ont eu la lourde tâche de construire
                                    lors des cinq ateliers qui ont suivi, le protocole expérimental qui vous est
                                    soumis ici.
                                </p>
                                <p className={'font-bold mt-4'}>
                                    Une expérience de 4 mois qui a pour objectifs de tester la dégradabilité de
                                    bioplastiques dans des environnements variés. </p>
                            </div>
                        </div>


                        <div className={'section relative bg-white'}>
                            <div className={'max-w-4xl mx-auto text-center'}>
                                <div id={'title'} className="text-6xl font-black mt-32 text-center">
                                    En quoi consiste l'expérience ?
                                </div>
                                <h2 className={'text-2xl mt-12'}>
                                    <span className={'font-black'}>Étape 1: </span>Vous vous incrivez et vous
                                    choisissez de recevoir le kit
                                    par la poste ou de le retirer au Dôme
                                </h2>
                                <div className={'grid grid-cols-2 mt-12 gap-8'}>
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
                                        <h2 className={'text-2xl font-bold text-left'}>
                                            Le kit comprend:
                                        </h2>
                                        <ul className={'list-disc list-inside text-left'}>
                                            <li>
                                                Un cadre a exposer ou enfouir
                                            </li>
                                            <li>
                                                Une notice d’utilisation
                                            </li>
                                            <li>
                                                Quatre "clous" en PHA (pour exposition sur le sol, les clous sont
                                                réalisés
                                                à partir de morceaux de fil de PHA)
                                            </li>
                                            <li>
                                                Une ficelle de lin
                                            </li>
                                            <li>
                                                Une feuille de prise de photo avec repères et règle millimétrée
                                                adaptée à chaque cas (enfouissement dans la terre ou du compost,
                                                cloué sur le sol, accroché à la fenêtre)
                                            </li>
                                            <li>
                                                Une enveloppe craft avec adresse du Dôme pour envoyer le kit

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'section relative'}>
                            <div className={'max-w-4xl mx-auto text-center'}>
                                <h2 className={'text-2xl mt-32'}>
                                    <span className={'font-black'}>Étape 2: </span>
                                    Vous assemblez le cadre, en suivant notre pas-à-pas
                                </h2>
                                <img src="assets/images/02_protocole_court.png" alt=""
                                     className={'w-[700px] mt-12 mx-auto rounded-md'}/>
                                <p className={'mt-4'}>
                                    Les échantillons de bioplastiques prennent la forme de bandelettes, fixées sur
                                    un cadre qui sera enterré, chaque élément a été soigneusement pensé pour comparé
                                    plusieurs facteurs dans la dégradation du plastiques.
                                    <br/>
                                    <a href="#" className={'text-black underline font-bold'}>En savoir plus</a>
                                </p>
                            </div>
                        </div>


                        <div className="section relative max-w-7xl mx-auto">
                            <h2 className={'text-2xl text-center mt-32'}>
                                <span className={'font-black'}>Étape 3: </span>
                                L'exposition du cadre à l'environnement naturel : 3 options possibles
                            </h2>

                            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 text-center"}>

                                <div className={"p-4 rounded-lg space-y-4"}>
                                    <div id={"section-2-img-1"} className={"h-48 w-48 mx-auto"}/>
                                    <h1 className={"text-2xl font-bold"}>
                                        Enfoui dans son jardin ou sa jardinière
                                    </h1>
                                    <p className={""}>
                                        Dans une jardinière en plein air (qui sera arrosée par la pluie) ou dans
                                        votre jardin recouvert de terre et ou de compost.
                                    </p>
                                </div>

                                <div className={"p-4 rounded-lg space-y-4"}>
                                    <div id={"section-2-img-2"} className={"h-48 w-48 mx-auto"}/>
                                    <h1 className={"text-2xl font-bold"}>
                                        Déposé (et coulé) à la surface du sol
                                    </h1>
                                    <p className={""}>
                                        Une option idéale si vous n'avez pas de matériel ou si votre sol est trop dur,
                                        vous pouvez clouer votre cadre à la surface du sol.
                                    </p>
                                </div>

                                <div className={"p-4 rounded-lg space-y-4"}>
                                    <div id={"section-2-img-3"} className={"h-48 w-48 mx-auto"}/>
                                    <h1 className={"text-2xl font-bold"}>
                                        Si vous n'avez pas de jardin ou de balcon, suspendu à une fenêtre
                                        (exposé à la lumière du jour)
                                    </h1>
                                    <p className={""}>
                                        La lumière du soleil participe-t-elle à la dégradation des plastiques ?
                                    </p>
                                </div>

                            </div>

                            <div className={"mt-8 w-full text-center items-center"}>
                                <span className={'text-lg font-bold'}>
                                    À vous de choisir l'une de ces possibilités !
                                </span>
                                <p className={'text-lg font-medium'}>
                                    L'enfouissement est le plus riche en enseignement, mais toutes
                                    les options sont possibles. Avant de choisir, n'hésitez pas à prendre
                                    le temps de regarder <a href={'#'} className={'text-black underline'}>nos tutos</a>
                                </p>
                            </div>

                        </div>

                        <div className={'section relative bg-white'}>
                            <div className={'max-w-4xl mx-auto text-center'}>
                                <h2 className={'text-2xl mt-32'}>
                                    <span className={'font-black'}>Étape 4: </span>
                                    Déterrer ou relever vos cadre, et prendre une photo
                                </h2>
                                <div className={'grid grid-cols-2 mt-12 gap-8'}>
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
                                    <div className={'space-y-4 flex flex-col justify-start'}>
                                        <p className={'text-left'}>
                                            Avec quelques précautions à retrouver sur la notice, relevez le cadre,
                                            prenez le temps d'observer comment les plastiques se sont dégradés et prenez
                                            une photo en utilisant le gabarit fourni dans le kit.
                                        </p>
                                        <p className={'font-bold text-left'}>
                                            Le petit plus de la recherche : envoyez votre échantillon au Döme.
                                            Les scientifiques de l'ABTE pourront l'analyser afin d'affiner les
                                            conclusions de la recherche.
                                        </p>
                                        <Button>
                                            Participer au protocole
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'section relative bg-[#F7B501]'}>
                            <div className={'max-w-4xl mx-auto text-center'}>
                                <div id={'title'} className="text-6xl font-black mt-44 text-center">
                                    Enquête sur nos consommations plastiques
                                </div>
                                <h2 className={'text-2xl font-bold mt-12'}>
                                    Et si on réduisait le plastique dans nos habitudes ?
                                </h2>
                                <p className={'mt-4'}>
                                    Dès les premiers ateliers de co-problématisation, les publics ont souhaité placer la
                                    réduction de la production de plastiques au premier plan. Trouver des alternatives
                                    en PHA et PHA-lin pour certains objets plastiques et s'assurer que ces alternatives
                                    soient vraiment sologiques est motivant, mais la question de la masse de plastiques,
                                    tous plus ou moins utiles, a été au cœur de nombreuses discussions.
                                </p>
                                <p className={'mt-4'}>
                                    Le retour à la consigne ou l'interdiction de certains emballages par exemple sont
                                    des idées qui sont revenues très souvent dans la bouche des participant es lors de
                                    tous nos ateliers.
                                </p>
                                <p className={'mt-4'}>
                                    Ils et elles ont donc souhaité que le protocole expérimental comporte impérativement
                                    un volet "comportement de consommation" à mener parallèlement au volet
                                    "dégradabilité".
                                </p>
                            </div>
                        </div>

                        <div className={'section mx-auto bg-[#F2EDE7]'}>
                            <div className={'grid max-w-7xl mx-auto grid-cols-1 pt-24 p-24 gap-8'}>
                                <div className={'space-y-4'}>
                                    <h1 id={'title'} className={'text-7xl font-bold text-center'}>
                                        En quoi consiste l'enquête ?
                                    </h1>
                                    <p className={'text-lg text-center'}>
                                        Et voici comment les participant·e·s des ateliers plastiques du TURFU Festival
                                        2024 ont souhaité formule cette enquête. une série de trois questionnaires à
                                        renseigner après des temps de réflexion :
                                    </p>
                                </div>

                                <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-center"}>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-1"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>
                                            Le permier questionnaire
                                        </h1>
                                        <p className={""}>
                                            Permet de faire un bilan initial de la consommation plastique de chaque
                                            participant·e.
                                        </p>
                                    </div>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-2"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>
                                            Le second questionnaire
                                        </h1>
                                        <p className={""}>
                                            Après trois semaines de réflexion, de documentation, d'information...
                                            permettant de
                                            prendre un peu de recul sur les semaines qui viennent de s'écrouler et de
                                            préciser,
                                            pour chacun.e, les pistes d'action pour les trois mois à venir.
                                        </p>
                                    </div>

                                    <div className={"p-4 rounded-lg space-y-4"}>
                                        <div id={"section-2-img-2"} className={"h-48 w-48 mx-auto"}/>
                                        <h1 className={"text-2xl font-bold"}>
                                            Un troisième questionnaire et dernier questionnaire
                                        </h1>
                                        <p className={""}>
                                            Permet de faire le bilan de l'expérience et de remonter les principaux
                                            freins à la transition
                                            plastique qu'il reste à lever.
                                        </p>
                                    </div>

                                </div>

                                <p className={'mt-4'}>
                                    20 questions on été retenues pour le premier, 13 pour le deuxième et 18 pour le
                                    dernier questionnaire.
                                    Sur la forme, les plublics ont souhaité créer une questionnaire qui ne ressemble pas
                                    à un formulaire
                                    classique, qui soit coloré et qu'une ou deux transition permettant aux personne qui
                                    le remplissent de
                                    de respirer un peu, de voir la progression ...
                                </p>

                                <Button className={'w-96 text-center mx-auto rounded-none'}>
                                    Participer au protocole
                                </Button>

                            </div>
                        </div>

                        <div className={'section relative bg-[#F7B501]'}>
                            <div className={'max-w-4xl mx-auto text-center space-y-4'}>
                                <div id={'title'} className="text-6xl font-black mt-44 text-center">
                                    Inscrivez-vous !
                                </div>
                                <p className={'mt-4'}>
                                    À définir
                                </p>
                                <Button className={'w-96 text-center mx-auto rounded-none'}>
                                    Participer au protocole
                                </Button>
                            </div>
                        </div>


                        <Footer/>

                    </ReactFullpage.Wrapper>);
                }}
            />
    </>);
}
