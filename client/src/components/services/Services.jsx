import { ServiceCard } from ".";
import { ComponentText as text } from "../../constants/text";

const Services = () => {
    const Text = text.services
    const cardArray = ['online', 'budgeting', 'onboarding', 'api']
    const cards = cardArray.map((item, index) => <ServiceCard key={item} variant={item} card={index} />)

    return ( 
        <div className="w-screen mobile:min-h-screen mobile:h-auto desktop:h-screen bg-lightgrayblue mobile:centered-col md:centered md:py-8">
            <div className="flex flex-col space-y-16 mobile:items-center mobile:w-full mobile:h-full md:items-start md:w-4/5 md:h-4/5 mobile:py-16 md:py-0">
                <section className="flex flex-col px-4 space-y-8 mobile:w-5/6 md:w-4/5 desktop:w-3/5 mobile:text-center md:text-left">
                    <h2 className="text-4xl text-darkblue">{Text.title}</h2>
                    <h4 className="text-xl text-grayblue">{Text.subtitle}</h4>
                </section>
                <section className="flex m-auto md:w-full mobile:flex-col desktop:flex desktop:flex-row mobile:space-y-8 md:space-y-0 mobile:w-5/6 md:grid md:grid-cols-2 md:justify-items-center md:gap-y-8">
                    {cards}
                </section>
                
            </div>
        </div>
     );
}
 
export default Services;