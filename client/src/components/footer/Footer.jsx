import { GrFacebook, GrTwitter, GrPinterest, GrInstagram, GrYoutube} from "react-icons/gr";
import { ComponentText as text } from "../../constants/text";

const Footer = () => {
    const socialmedia = "fill-white w-6 h-6"
    const Text = text.footer
    const linkArray = Object.values(Text.links)
    const links = linkArray.map(item => <li key={item} className="w-full">{item}</li>)
    return ( 
        <div className="h-48 w-screen bg-darkblue p-8 centered">
            <section className="w-4/5 h-24 grid grid-cols-4 gap-x-8">
                <section className="flex flex-col justify-between h-24">
                    <div className="bg-logo-white w-40 h-10 bg-no-repeat bg-center bg-contain"></div>
                    <ul className="spaced stroke-white w-48 h-8">
                        <GrFacebook className={socialmedia}/>
                        <GrYoutube className={socialmedia}/>
                        <GrTwitter className={socialmedia}/>
                        <GrPinterest className={socialmedia}/>
                        <GrInstagram className={socialmedia}/>
                    </ul>
                </section>
                <section className="grid grid-cols-2 list-none text-neutral-200 h-24 w-96 ml-16">
                    {links}
                </section>
                <section className="flex flex-col justify-between col-start-5 items-end h-24 ">
                    <button className="navbar-button ">{Text.button}</button>
                    <p className="">{Text.copywrite}</p>
                </section>
            </section>
        </div>
     );
}
 
export default Footer;