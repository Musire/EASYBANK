import { ArticleCard } from "./"
import { ComponentText as text } from "../../constants/text"

const Articles = () => {

    const Text = text.articles
    const articleArray = ['currency', 'restaurant', 'plane', 'confetti']
    const articles = articleArray.map((item, index) => <ArticleCard key={item} variant={item} card={index} />)

    return ( 
        <div className="bg-lightgray w-screen h-screen centered">
            <div className="w-4/5 h-4/5 space-y-16">
                <h2 className="text-4xl text-darkblue">{Text.title}</h2>
                <section className="flex flex-row space-x-8">
                    {articles}
                </section>
            </div>
        </div>
     );
}
 
export default Articles;