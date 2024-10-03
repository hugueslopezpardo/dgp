import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export default function Footer() {
    return (
        <>
            <footer className={'section relative'}>
                <div className={'bg-[#5BBB7D] h-1/2 w-full pt-32 pb-12 px-12'}>
                    <div className={'grid grid-cols-2'}>
                        <div className={'text-center'}>
                            <h2 className={'text-black text-5xl font-bold'}>Contactez-nous</h2>
                            <p className={'text-black mt-4'}>Vous avez une question ou une suggestion ? N'hésitez pas à
                                nous contacter !</p>

                            <div className={'flex justify-center space-x-4 mt-8'}>
                                <img
                                    src="assets/images/7_Objet.png"
                                    className={'w-24 h-24 rotate-[0deg] z-50'}/>

                                <img
                                    src="assets/images/1_Objet.png"
                                    className={'h-72 w-36 rotate-[0deg] z-50'}/>
                            </div>


                        </div>
                        <div className={'space-y-4'}>
                            <div className={'space-y-2'}>
                                <Label htmlFor={'first_name'}>Prénom</Label>
                                <Input type={'text'} id={'first_name'} name={'first_name'} className={'bg-white'}/>
                            </div>
                            <div className={'space-y-2'}>
                                <Label htmlFor={'last_name'}>Nom</Label>
                                <Input type={'text'} id={'last_name'} name={'last_name'} className={'bg-white'}/>
                            </div>
                            <div className={'space-y-2'}>
                                <Label htmlFor={'email'}>Email</Label>
                                <Input type={'email'} id={'email'} name={'email'} className={'bg-white'}/>
                            </div>
                            <div className={'space-y-2'}>
                                <Label htmlFor={'message'}>Message</Label>
                                <Textarea id={'message'} name={'message'} className={'bg-white'} />
                            </div>
                            <div className={'flex justify-center items-center'}>
                                <button className={'bg-[#F18BAF] text-white px-4 py-2 border border-black'}>Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'h-[200px] w-full bg-white flex justify-center items-center gap-16'}>
                    <img className={'w-64'} src="assets/images/logo_saps_v1-1024x445.png.webp" alt={'Logo'}/>
                    <img className={'w-64'} src="assets/images/logos-Marianne-UNICAEN-1200x396.jpg" alt={'Logo'}/>
                    <img className={'w-40'} src="assets/images/Logo-ABTE-2022.jpg" alt={'Logo'}/>
                    <img className={'w-40'} src="assets/images/logo-le-dome-530.jpg"  alt={'Logo'}/>
                    <img className={'w-40'} src="assets/images/logo_r.normandie-portrait-cmjn_0.jpg" alt={'Logo'}/>
                </div>

                <div className={'bg-[#F2EDE7] h-1/2 w-full pt-12 pb-12 px-12'}>
                    <div className={'flex justify-center items-center'}>
                        <img className={'w-24'} src="assets/images/logo-orange.png" alt={"Logo"}/>
                    </div>
                    <div className={'flex justify-center items-center gap-8 mt-8'}>
                        <a href={'#'}>Mentions légales</a>
                        <a href={'#'}>Politique de confidentialité</a>
                        <a href={'#'}>Cookies</a>
                    </div>
                </div>

            </footer>
        </>
    )
}
