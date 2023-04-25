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
        <div className="bg-white w-72 h-96 flex flex-col rounded-se-lg" dir="ttb">
            <div className={`w-full h-72 bg-no-repeat bg-center bg-cover rounded-tl-xl rounded-tr-xl  ${images[variant]}`} />
            <article className=" h-1/2 flex flex-col p-4 space-y-2">
                <p className="text-xs">{Text.author}</p>
                <h3 className="text-darkblue">{Text.title}</h3>
                <h4 className="text-sm">{Text.content}</h4>
            </article>
        </div>
     );
}
 
export default ArticleCard;