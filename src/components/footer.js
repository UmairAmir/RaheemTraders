import logo from "../assets/Logo_Transparent.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.footerSection}>
                <div className={styles.logoImg}>
                    <img src={logo} alt="logo"/>
                    <div className={styles.headings}>
                        <h1>AL-Rahim</h1>
                        <h2>Traders</h2>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.overlay}></div>
                    <div className={styles.text}>
                        <div className={styles.list1}> 
                            <h1>Customer Services</h1>
                            <div className={styles.line}></div>
                            <ul>
                                <li>Home</li>
                                <li>Product</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className={styles.list2}> 
                            <h1>Contact Details</h1>
                            <div className={styles.line}></div>
                            <ul>
                                <li>email@gmail.com</li>
                                <li>03332221111</li>
                                <li>Main Blv Street 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer