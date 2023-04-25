import phones from "../../assets/image-mockups.png"
import { ComponentText as text } from "../../constants/text"

const Hero = () => {
    const Text = text.hero
    return ( 
        <div className="w-screen md:h-screen mobile:min-h-screen mobile:h-auto bg-lightgray text-grayblue mobile:centered-col md:centered">
            <div className="w-full bg-center bg-no-repeat bg-cover h-96 mobile:flex md:hidden bg-hero-mobile centered">
                <div className="w-5/6 h-full bg-bottom bg-no-repeat bg-cover bg-image-mockups"></div>
            </div>
            <div className="h-full mobile:w-5/6 md:w-1/2 mobile:centered-col md:centered">
                <article className="flex flex-col w-full space-y-12 mobile:pb-24 mobile:pt-8 md:pt-0 md:pb-0 md:pl-4 mobile:justify-center mobile:items-center md:justify-start mobile:text-center md:text-left md:mx-36">
                    <h1 className="mobile:text-5xl md:text-6xl text-darkblue">{ Text.title }</h1>
                    <h4 className="mr-2 text-lg font-normal ">{ Text.subtitle }</h4>
                    <button className="w-48 h-12 navbar-button">{ Text.button }</button>
                </article>
            </div>
            <div className="mobile:hidden md:block w-1/2 h-full overflow-y-visible flex justify-end bg-no-repeat bg-hero-desktop bg-[length:65rem_50rem] bg-[left_-2.5rem_top_-4rem] relative z-[1]">
                <img src={phones} alt="" className="w-[768px] h-[960px] absolute -top-32 -right-28"/>
            </div>
        </div>
     );
}
 
export default Hero;