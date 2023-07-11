import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Information from "../Components/Information";
import Selectors from "../Components/Selectors";
import Slider from "../Components/Slider";

function HomePage() {
    return (  
        <>
        <Header/>
        <Selectors/>
        <Slider/>
        <Information/>
        <Cards/>
        <Footer/>
        </>
    );
}

export default HomePage;