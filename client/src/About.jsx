import React from "react";
import { Link as ScrollLink, Element, scroller } from "react-scroll";
import Contact from "./Contact";
import Footer from "./Footer";
import about from "../src/images/about-us.jpg";

const About=()=>{
    return(
        <>
            <div style={{backgroundColor:"#e6eff7",display:'flex'}}>
                <div id='div2About'>
                    <img src={about} id="imgAbout" alt="about us image"/>
                    <p className="shortpara">
                        Rentomatic enables seamless rent payments, bill management, and efficient property administration, enhancing the rental experience for both tenants and landlords.
                    </p>     
                 <ScrollLink to="contact" smooth={true} duration={500}><button type="button" class="btn btn-outline-primary">Contact Us</button></ScrollLink>         
                </div>
            </div>
            <div className="para">
                <p>
                    A rent management app is a user-friendly and efficient software application designed to assist both tenants and landlords in effectively managing rental properties and handling financial transactions associated with renting. With this app, tenants can easily pay their rent and bills online, eliminating the need for manual transactions or visits to the property manager's office.
                    <br/><br/>For tenants, the app provides a convenient platform to securely make rent payments using various payment methods such as credit/debit cards, bank transfers, or digital wallets. They can also view and pay other bills like utilities or maintenance fees associated with their rental property. The app sends automated reminders and notifications to ensure timely payments and helps tenants stay organized with their financial obligations.
                    Additionally, the app offers a user-friendly online portal where tenants can access their account information, view payment history, and download rent receipts or bills.It serves as a centralized hub for tenants to manage their rental-related documents and communicate with the property manager regarding maintenance requests or other important matters.<br/><br/>
                    Landlords or property managers benefit from the app's features as well. They can easily track and manage rent payments, generate financial reports, and analyze the performance of their rental properties. The app streamlines communication between tenants and landlords, allowing for efficient handling of maintenance requests and ensuring a smooth rental experience for both parties.
                    Overall, a rent management app simplifies the rental process, providing convenience, transparency, and automation. It improves financial management, enhances communication, and helps create a more organized and efficient rental experience for tenants and landlords alike.
                </p>
            </div>
            <Element id="contact">
                <Contact/>
            </Element>
            <br/>
            <Footer/>
        </>
    );
};

export default About;