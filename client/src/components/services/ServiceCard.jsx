/* eslint-disable react/prop-types */
import { ComponentText as text } from "../../constants/text"

const ServiceCard = ({ variant, card }) => {
    const Text = text.services.cardText[card]

    const icons = {
        online: 'bg-icon-online',
        budgeting: 'bg-icon-budgeting',
        onboarding: 'bg-icon-onboarding',
        api: 'bg-icon-api',
    }

    return ( 
        <div className="flex flex-col pl-4 space-y-8 mobile:w-full md:w-80 mobile:items-center md:items-start mobile:text-center md:text-left">
            <div src="" alt="" className={`w-20 h-20 bg-no-repeat bg-cover ${icons[variant]}`} />
            <h3 className="text-2xl text-darkblue">{Text.title}</h3>
            <h4 className="text-lg text-grayblue">{Text.content}</h4>
        </div>
     );
}
 
export default ServiceCard;