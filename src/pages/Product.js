import Navbar from "../components/navbar.js";
import styles from "../styles/Product.module.css"
import Card from "../components/card.js"
import trac1 from "../assets/trac1.png"

const Product = () => {
    const cardData = {
        heading: "Millat's MF 235",
        description: "'New Tractor Model - Specially designed for Orchards & Narrow Spaces'",
        image: trac1,
        listItems: ['Smaller in Size & Bigger in Power.', 'Economical in Use.', 'Spare Parts & After sales services available across the country.', 'Suitable for all types of haulage & Tillage operations including PTO work like, Tube well, Thresher, Rotavator & Lawn mower.'],
    };

    return (
        <>
            <Navbar />
            <div className={styles.heroSection}>
                <h1>Agricultural Tractors</h1>
            </div>

            <div className={styles.allCards}>
                <Card
                    heading={cardData.heading}
                    description={cardData.description}
                    image={cardData.image}
                    listItems={cardData.listItems}
                />
            </div>
        </>
    );
};

export default Product