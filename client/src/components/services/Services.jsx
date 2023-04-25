import { ServiceCard } from ".";
import { ComponentText as text } from "../../constants/text";

const Services = () => {
    const Text = text.services
    const cardArray = ['online', 'budgeting', 'onboarding', 'api']
    const cards = cardArray.map((item, index) => <ServiceCard key={item} variant={item} card={index} />)

    return ( 
        <div className="w-screen h-screen bg-lightgrayblue centered">
            <div className="h-4/5 w-4/5 flex flex-col space-y-16 ">
                <section className="flex-col flex w-3/5 space-y-8 px-4">
                    <h2 className="text-darkblue text-4xl">{Text.title}</h2>
                    <h4 className="text-grayblue text-xl">{Text.subtitle}</h4>
                </section>
                <section className="flex flex-row">
                    {cards}
                </section>
                
            </div>
        </div>
     );
}
 
export default Services;