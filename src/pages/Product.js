import Navbar from "../components/navbar.js";
import styles from "../styles/Product.module.css"
import Card from "../components/card.js"
import trac1 from "../assets/trac1.png"
import trac2 from "../assets/trac2.png"
import trac3 from "../assets/trac3.png"
import trac4 from "../assets/trac4.png"
import trac5 from "../assets/trac5.png"
import trac6 from "../assets/trac6.png"
import trac7 from "../assets/trac7.png"
import trac8 from "../assets/trac8.png"

const Product = () => {
    const cardData = [
        {
        heading: "Millat's MF 235",
        description: "'New Tractor Model - Specially designed for Orchards & Narrow Spaces'",
        image: trac1,
        listItems: ['Smaller in Size & Bigger in Power.', 'Economical in Use.', 'Spare Parts & After sales services available across the country.', 'Suitable for all types of haulage & Tillage operations including PTO work like, Tube well, Thresher, Rotavator & Lawn mower.'],
        },
        {
        heading: "Millat's MF 240",
        description: "'Most popular and economical Tractor'",
        image: trac2,
        listItems: ['Most economical in 50 HP range', 'Rugged, maneuverable and compact', 'Easy accessibility to service points', 'Ideal, versatile, all round tractor', 'Spring suspension deluxe Seat'],
        },
        {
        heading: "Millat's MF 350",
        description: "'Efficient, Economical and easy to operate'",
        image: trac3,
        listItems: ['Robust Straddle Rear Axle with Epicyclic Reduction Unit', 'Durable Crown Wheel / Pinion.', 'Hydrostatic Power steering.', 'Heavy-Duty Front axle & support.', 'Efficient Oil- Immersed Multi-disc Brake System', 'Longer Wheel Base / Greater Pulling Power.', 'Fuel Efficient, High Performance Engine.', 'Spring suspension Deluxe Seat', 'Easy Maintenance'],
        },
        {
        heading: "Millat's MF 260",
        description: "'Multipurpose Tractor'",
        image: trac4,
        listItems: ['High Performance, Fuel Efficient, Diesel Turbocharged Engine.', 'Less Smoke Emission due to Better Fuel Burning.', 'Oil cooler added For Effective cooling.', 'High PTO Power for Efficient operation of tube wells’ Rotavators, Threshers etc', 'Robust Straddle Rear Axle.', 'Efficient Oil Immersed Multi-disc Brakes.', 'Spring Suspension Deluxe Seat.'],
        },
        {
        heading: "Millat's MF 360",
        description: "'Rugged, Robust and Reliable'",
        image: trac5,
        listItems: ['Hydrostatic Power steering', 'Heavy Duty Front Axle & Support.', 'Water cooled - oil Cooler.', 'Longer Wheel Base / Greater Pulling Power.', 'High Performance, fuel Efficient, Diesel Turbocharged Engine', 'Robust Straddle Rear Axle with Epicyclic Reduction Unit.', 'Efficient Oil- Immersed Multi- Disc Brake System.', 'Durable Crown Wheel / Pinion', 'High PTO Power'],
        },
        {
        heading: "Millat MF 360 - 4WD",
        description: "'Powerful 4x4 tractor'",
        image: trac6,
        listItems: ['Durable & Highly Fuel Efficient Turbocharged Engine', 'Longer Wheel Base', 'Water Cooled Oil Cooler For Effective Cooling', 'Hydraulically actuated Efficient Oil Immersed Multi Disc Brake System', 'Robust Straddle Rear Axle With Epicyclic Reduction Unit', 'Less Tyre Wear', 'New Spring Suspension Deluxe Seat', 'Hydrostatic Power Steering', 'Smart Steering Wheel for Reduced Steering Effort', 'Heavy Duty 4WD Front Axle', 'Improved Draw Bar Pull', 'Improved Traction'],
        },
        {
        heading: "Millat MF 385",
        description: "'The Long Term Partner Most Powerfil Yet Economical'",
        image: trac7,
        listItems: ['High Performance Diesel Low Noise Engine.', 'Reduced Gaseous Emission Under ECE R49.', 'Reduced Smoke Level.', 'Oil Cooler Added For Effective Cooling.', 'Hydrostatic Power Steering.', 'Hydraulically Actuated Efficient oil Immersed Multi- Disc Brake system.', 'Spring Suspension Deluxe Seat', 'Easy Accessibility to service / Maintenance Points.'],
        },
        {
        heading: "Millat MF 385 - 4WD",
        description: "'Strongest Pakistan Made Tractor Edge Over 2WD'",
        image: trac8,
        listItems: ['TRACTION  30% More', 'DRAWBAR POWER 16% More', 'DRAWBARPULL 34% More', 'TYRE WEAR 15% Less', 'FUEL EFFICIENCY 15% More', 'FIELD WORK SPEED 13 -20 % More'],
        },
    ];

    return (
        <>
            <Navbar />
            <div className={styles.heroSection}>
                <h1>Agricultural Tractors</h1>
            </div>

            <div className={styles.allCards}>
                <Card className={styles.cards}
                    heading={cardData[0].heading}
                    description={cardData[0].description}
                    image={cardData[0].image}
                    listItems={cardData[0].listItems}
                />
                <Card className={styles.cards}
                    heading={cardData[1].heading}
                    description={cardData[1].description}
                    image={cardData[1].image}
                    listItems={cardData[1].listItems}
                />
                <Card className={styles.cards}
                    heading={cardData[2].heading}
                    description={cardData[2].description}
                    image={cardData[2].image}
                    listItems={cardData[2].listItems}
                />
                <Card className={styles.cards}
                    heading={cardData[3].heading}
                    description={cardData[3].description}
                    image={cardData[3].image}
                    listItems={cardData[3].listItems}
                />
                <Card className={styles.cards}
                    heading={cardData[4].heading}
                    description={cardData[4].description}
                    image={cardData[4].image}
                    listItems={cardData[4].listItems}
                />
                <Card  className={styles.cards}
                    heading={cardData[5].heading}
                    description={cardData[5].description}
                    image={cardData[5].image}
                    listItems={cardData[5].listItems}
                />
                <Card className={styles.cards}
                    heading={cardData[6].heading}
                    description={cardData[6].description}
                    image={cardData[6].image}
                    listItems={cardData[6].listItems}
                />
                <Card className={styles.cards}
                    heading={cardData[7].heading}
                    description={cardData[7].description}
                    image={cardData[7].image}
                    listItems={cardData[7].listItems}
                />
            </div>
        </>
    );
};

export default Product