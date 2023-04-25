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
        <div className="w-80 pl-4 flex flex-col space-y-8">
            <div src="" alt="" className={`w-20 h-20 bg-no-repeat bg-cover ${icons[variant]}`} />
            <h3 className="text-darkblue text-2xl">{Text.title}</h3>
            <h4 className="text-grayblue text-lg">{Text.content}</h4>
        </div>
     );
}
 
export default ServiceCard;