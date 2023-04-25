import phones from "../../assets/image-mockups.png"
import { ComponentText as text } from "../../constants/text"

const Hero = () => {
    const Text = text.hero
    return ( 
        <div className="bg-lightgray h-screen w-screen text-grayblue centered">
            <div className="w-1/2 h-full centered">
                <article className="w-full mx-36 flex flex-col text-left pl-4 space-y-12">
                    <h1 className="text-6xl text-darkblue">{ Text.title }</h1>
                    <h4 className=" text-lg mr-2 font-normal">{ Text.subtitle }</h4>
                    <button className="navbar-button w-48 h-12">{ Text.button }</button>
                </article>
            </div>
            <div className="w-1/2 h-full overflow-y-visible flex justify-end bg-no-repeat bg-hero-desktop bg-[length:65rem_50rem] bg-[left_-2.5rem_top_-4rem] relative z-[1]">
                <img src={phones} alt="" className="w-192 h-240 absolute -top-32 -right-28"/>
            </div>
        </div>
     );
}
 
export default Hero;