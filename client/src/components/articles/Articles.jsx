import { ArticleCard } from "./"
import { ComponentText as text } from "../../constants/text"

const Articles = () => {

    const Text = text.articles
    const articleArray = ['currency', 'restaurant', 'plane', 'confetti']
    const articles = articleArray.map((item, index) => <ArticleCard key={item} variant={item} card={index} />)

    return ( 
        <div className="w-screen mobile:min-h-screen mobile:h-auto md:h-screen bg-lightgray centered">
            <div className="space-y-16 mobile:w-5/6 md:w-4/5 md:h-4/5 mobile:text-center md:text-left mobile:py-20 md:py-0">
                <h2 className="text-4xl text-darkblue">{Text.title}</h2>
                <section className="flex md:space-x-8 mobile:flex-col md:flex-row mobile:items-center md:items-start mobile:space-y-8 md:space-y-0">
                    {articles}
                </section>
            </div>
        </div>
     );
}
 
export default Articles;