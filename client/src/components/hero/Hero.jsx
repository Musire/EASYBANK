import phones from "../../assets/image-mockups.png"
import { ComponentText as text } from "../../constants/text"

const Hero = () => {
    const Text = text.hero
    return ( 
        <div className="w-screen min-h-[50vh] md:h-[55vh] lg:h-[75vh] desktop:h-[90vh] mobile:h-auto bg-lightgray text-grayblue mobile:centered-col md:flex-row md:items-start mobile:pb-20">
            <div className="w-full bg-center bg-no-repeat bg-cover h-96 mobile:flex md:hidden bg-hero-mobile centered">
                <div className="w-5/6 h-full bg-bottom bg-no-repeat bg-cover bg-image-mockups"></div>
            </div>
            <div className="flex self-center md:h-full mobile:w-5/6 md:w-1/2 mobile:centered-col md:flex-col md:items-end">
                <article className="flex flex-col w-4/5 space-y-12 ">
                    <h1 className="mobile:text-5xl md:text-4xl lg:text-5xl desktop:text-6xl text-darkblue">{ Text.title }</h1>
                    <h4 className="mr-2 font-normal desktop:text-lg ">{ Text.subtitle }</h4>
                    <button className="w-48 h-12 navbar-button">{ Text.button }</button>
                </article>
            </div>
            <div className="mobile:hidden md:block w-1/2 md:h-full overflow-y-visible flex justify-end bg-no-repeat bg-hero-desktop bg-[length:70rem_55rem] bg-[left_-2.5rem_top_-10rem] relative z-[1]">
                <img src={phones} alt="" className="md:w-[544px] md:h-[680px]  lg:w-[656px] lg:h-[820px] desktop:w-[768px] desktop:h-[960px] absolute md:-top-32 md:-right-16 lg:-top-20 lg:-right-20  desktop:-top-32 desktop:-right-28"/>
            </div>
        </div>
     );
}
 
export default Hero;