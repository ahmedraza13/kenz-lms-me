import "./Main.css"
import Footer from "../components/footer/Footer"
import Section1 from "./components/Section1"
import Header from "../components/header/Header"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"

const Home = () => {
    return (
        <>
            <div className="home">
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section5 />
                <Section6 />
                <Section4 />
                <Footer />
            </div>
        </>
    )
}

export default Home