import { ArticleCard } from "./"
import { ComponentText as text } from "../../constants/text"

const Articles = () => {

    const Text = text.articles
    const articleArray = ['currency', 'restaurant', 'plane', 'confetti']
    const articles = articleArray.map((item, index) => <ArticleCard key={item} variant={item} card={index} />)

    return ( 
        <div className="w-screen mobile:min-h-screen mobile:h-auto desktop:h-screen bg-lightgray centered">
            <div className="space-y-16 mobile:w-5/6 md:w-4/5 md:h-4/5 mobile:text-center md:text-left mobile:py-20 desktop:py-0">
                <h2 className="text-4xl text-darkblue">{Text.title}</h2>
                <section className="flex w-full desktop:space-x-8 mobile:flex-col md:grid md:grid-cols-2 mobile:items-center desktop:items-start mobile:space-y-8 md:space-y-0 md:m-auto md:justify-center md:gap-y-8 md:justify-items-center desktop:flex-row desktop:flex">
                    {articles}
                </section>
            </div>
        </div>
     );
}
 
export default Articles;