import Navbar from "../components/navbar";
import HeroSection from "../components/homeHero";
import styles from "../styles/Home.module.css";
import aboutImg from "../assets/about.png";
import Commitment from "../components/commitment"; 
import Footer from "../components/footer.js";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />

            <section className={styles.about}>
                <div className={styles.content} >
                    <h1>About Our Company</h1>
                    <p>Al - Rahim Traders is directly associated with New Punjab Tractor House. Who are providing their service and adding value for 2 decades and established since 2003. Proprietor Mian Muzaffer Rahim</p>
                    <div>
                        <button>Contact Us Now</button>
                    </div>
                </div>
                <div className={styles.tractorImage} >
                    <img src={aboutImg} alt="logo"/>
                </div>
            </section>

            {/* <Commitment /> */}

            <Footer />
        </>
    );
};

export default Home