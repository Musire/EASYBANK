import { Navbar, Hero, Services, Articles, Footer } from "./"

const LandingPage = () => {
    return ( 
        <div className="centered-col">
            <Navbar />
            <Hero />
            <Services />
            <Articles />
            <Footer />
        </div>
     );
}
 
export default LandingPage;