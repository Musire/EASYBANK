/* eslint-disable react/prop-types */
import { ComponentText as text } from "../../constants/text";

const ArticleCard = ({ variant, card }) => {
    
    const Text = text.articles.cards[card]
    const images = {
        currency: 'bg-image-currency',
        restaurant: 'bg-image-restaurant',
        plane: 'bg-image-plane',
        confetti: 'bg-image-confetti',
    }

    return ( 
        <div className="flex flex-col h-auto bg-white mobile:w-4/5 md:w-[20.25rem]min-h-80 rounded-se-lg" dir="ttb">
            <div className={`w-full h-56 bg-no-repeat bg-center bg-cover rounded-tl-xl rounded-tr-xl  ${images[variant]}`} />
            <article className="flex flex-col p-8 space-y-2 text-left h-1/2">
                <p className="text-xs">{Text.author}</p>
                <h3 className="text-darkblue">{Text.title}</h3>
                <h4 className="text-sm">{Text.content}</h4>
            </article>
        </div>
     );
}
 
export default ArticleCard;