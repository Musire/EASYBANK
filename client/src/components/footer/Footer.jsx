import { GrFacebook, GrTwitter, GrPinterest, GrInstagram, GrYoutube} from "react-icons/gr";
import { ComponentText as text } from "../../constants/text";

const Footer = () => {
    const socialmedia = "fill-white w-6 h-6"
    const Text = text.footer
    const linkArray = Object.values(Text.links)
    const links = linkArray.map(item => <li key={item} className="w-full">{item}</li>)
    return ( 
        <div className="w-screen p-8 mobile:min-h-48 mobile:h-auto md:h-48 bg-darkblue centered">
            <section className="md:h-24 mobile:flex mobile:flex-col mobile:items-center md:grid md:grid-cols-4 mobile:w-5/6 md:w-4/5 gap-x-8 mobile:space-y-8 md:space-y-0">
                <section className="flex flex-col justify-between h-24 mobile:items-center md:items-start">
                    <div className="w-40 h-10 bg-center bg-no-repeat bg-contain bg-logo-white"></div>
                    <ul className="h-8 mobile:w-full md:w-48 spaced stroke-white">
                        <GrFacebook className={socialmedia}/>
                        <GrYoutube className={socialmedia}/>
                        <GrTwitter className={socialmedia}/>
                        <GrPinterest className={socialmedia}/>
                        <GrInstagram className={socialmedia}/>
                    </ul>
                </section>
                <section className="list-none mobile:text-center md:text-left mobile:evenly-col md:grid mobile:h-56 md:h-24 md:grid-cols-2 md:ml-16 text-neutral-200 mobile:w-full md:w-96">
                    {links}
                </section>
                <section className="flex flex-col justify-between h-24 col-start-5 mobile:items-center md:items-end ">
                    <button className="navbar-button ">{Text.button}</button>
                    <p className="">{Text.copywrite}</p>
                </section>
            </section>
        </div>
     );
}
 
export default Footer;