import React from 'react'
import '../Privacy/Privacy.css'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

export const Privacy = () => {

    return(
        <motion.div className='privacy' >
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>Privacy Policy</h1>

                    <h3 className='containerOneHTwo'>About Our Privacy Policy</h3>
                    <p className='containerOnePOne'>
                        This Privacy Policy explains how we manage your personal information that we collect about you. Please read this Privacy Policy before using the website at www.uniview.com.my (the “Website”) or before you submit any personal information to us.<br/>
                        By using the Website, you are accepting the practices described in this Privacy Policy. This Privacy Policy is incorporated into, forms part of and is subject to the Terms of Use of the Website. Your use of this Website and any personal information you provide on the Website remains subject to the terms of this Privacy Policy and Terms of Use In particular, you must be of the age of majority in order to use the Website. By using our Website, you are confirming that you meet the minimum age requirement.<br/>
                        You are encouraged to review this Privacy Policy whenever you visit the Website to make sure that you understand how any personal information you provide will be used.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Collection of Your Personal Information</h3>
                    <p className='containerOnePOne'>
                        We and/or our third party service providers may collect your personal information:<br/>
                        1.<b>directly from you;</b><br/>
                        2.<b>when you register or contact us in the Website;</b><br/>
                        3.<b>where you access and interact with the Website; or</b><br/>
                        4.<b>from other sources.</b><br/>
                        The information collected from you may include personally identifiable information (such as your name, NRIC/passport or other personal identification number, postal or e-mail addresses and telephone numbers) and personal content preferences.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Our Use of Cookies</h3>
                    <p className='containerOnePOne'>
                        A cookie is a small piece of text that is placed within the memory of a computer and can be later retrieved by web page servers. We use cookies to enhance your interaction and convenience with the Website and do not use cookies to record any personal information.<br/>
                        Cookies may record information about your visit, including the type of browser and operating system you use, the previous site you visited, your server’s IP address, the pages you access and the information downloaded by you. While this anonymous statistical data may be aggregated and used in broader statistical analysis by us and our web monitoring service provider to improve our services, at no time can we personally identify you as the source of that data.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Use and Disclosure of Personal Information</h3>
                    <p className='containerOnePOne'>
                        You acknowledge and consent that by providing your personal information to us that we may use and disclose your personal information for the purposes for which it was collected or for a related or ancillary purpose such as:<br/>
                        1.<b>to carry out or respond to your requests;</b><br/>
                        2.<b>to our third party service providers to assist us in providing and improving our services to you, and to analyse and better understand our customer’s needs or to develop, improve and market our products and services to you;</b><br/>
                        3.<b>for regulatory reporting and compliance with our legal obligations;</b><br/>
                        4.<b>to various regulatory bodies and law enforcement officials and agencies to protect against fraud and for related security purposes;</b><br/>
                        5.<b>to our third party service providers to include in a database compiled by us or our third party service provider for use in direct marketing of promotions, product and services we think may interest you;</b><br/>
                        6.<b>to seek your feedback in relation to customer satisfaction and our relationship with you;</b><br/>
                        7.<b>to the Licensor and our related companies for internal accounting and administration;</b><br/>
                        8.<b>to monitor or improve the quality and standard of service provided to you by the Website;</b><br/>
                        9.<b>to our successors and/or assigns;</b><br/>
                        10.<b>to provide offers that may be of interest to you; and</b><br/>
                        11.<b>to better understand your preferences.</b><br/>
                        Our third party service providers are organisations that include those that may assist us with research, mail and delivery, security, professional advisory, banking, payment processing or technology services. Where we engage third party service providers to perform services for us those third parties may be required to handle your personal information. Under these circumstances those third parties must safeguard this information and must only use it for the purposes for which it was supplied, although we are not responsible for ensuring this.<br/>
                        Other than the above, we will not disclose your personal information without your consent unless disclosure is either necessary to prevent a threat to life or health, authorized or required by law, reasonably necessary to enforce the law or necessary to investigate a suspected unlawful activity.<br/>
                        Any handling of personal information authorized or required by law will take priority over this Privacy Policy to the extent of any inconsistency.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Providing Personal Information About Another Person</h3>
                    <p className='containerOnePOne'>
                        You represent to us that where you provide personal information to us about another person, you are authorized to provide that information to us, and that you will inform that person who we are, how we use and disclose their information, and that they can gain access to that information.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Securing Your Personal Information</h3>
                    <p className='containerOnePOne'>
                        We have implemented appropriate physical, electronic and managerial security procedures in order to protect personal information from loss, misuse, alteration or destruction. Access to your personal information is limited to those who specifically need it to conduct their responsibilities.<br/>
                        We and our third party service providers take reasonable steps to destroy or permanently de-identify your personal information where it is no longer required and to protect your personal information from unauthorized access, disclosure, loss, misuse and alteration.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Accuracy and Access to Personal Information</h3>
                    <p className='containerOnePOne'>
                        We take reasonable steps to ensure that the information we hold about you is accurate, complete and up-to-date. To assist us to do this, please provide us with the correct information and inform us if your details change. You may update your details at any time by <Link to='/support'>contacting us.</Link><br/>
                    </p>

                    <h3 className='containerOneHTwo'>Linked Sites</h3>
                    <p className='containerOnePOne'>
                        This Website may contain links to websites which are owned or operated by other parties. You should make your own inquiries as to the privacy policies of these parties. We are not responsible for information on, or the privacy practices of, such websites.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Transmission of Your Data</h3>
                    <p className='containerOnePOne'>
                    While care is taken to protect your personal information on the Website, unfortunately no data transmission over the Internet is guaranteed as 100% secure. Accordingly, we cannot ensure or warrant the security of any information you send to us or receive from us online. This is particularly true for information you send to us via email as we have no way of protecting that information until it reaches us.<br/> 
                    </p>

                    <h3 className='containerOneHTwo'>Changes to our Policy</h3>
                    <p className='containerOnePOne'>From time to time it may be necessary for us to review and revise this Privacy Policy. We reserve the right to change this Privacy Policy at any time. Amendments or replacements of the Privacy Policy will be posted on the Website.<br/></p>

                    <h3 className='containerOneHTwo'>Direct Marketing</h3>
                    <p className='containerOnePOne'>
                    You consent for your personal information to be included in a database for use in direct marketing by us and our related entities or our third party contractors. If you do not wish to receive marketing material from us, you can opt-out or unsubscribe, by <Link to='/support'>contacting us.</Link> All emails, SMS and newsletters from this Website allow you to opt-out of further mailings by clicking on the link or responding, “Unsubscribe”.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Interpretation</h3>
                    <p className='containerOnePOne'>
                    All defined terms in this Privacy Policy shall have the same meaning in this Privacy Policy as is given to those terms in the Terms of Use of this Website<br/>
                    </p>
                </div>
            </div>


            <div className='mobile'>
            <div className='containerOne'>
                    <h1 className='containerOneHOne'>Privacy Policy</h1>

                    <h3 className='containerOneHTwo'>About Our Privacy Policy</h3>
                    <p className='containerOnePOne'>
                        This Privacy Policy explains how we manage your personal information that we collect about you. Please read this Privacy Policy before using the website at www.uniview.com.my (the “Website”) or before you submit any personal information to us.<br/>
                        By using the Website, you are accepting the practices described in this Privacy Policy. This Privacy Policy is incorporated into, forms part of and is subject to the Terms of Use of the Website. Your use of this Website and any personal information you provide on the Website remains subject to the terms of this Privacy Policy and Terms of Use In particular, you must be of the age of majority in order to use the Website. By using our Website, you are confirming that you meet the minimum age requirement.<br/>
                        You are encouraged to review this Privacy Policy whenever you visit the Website to make sure that you understand how any personal information you provide will be used.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Collection of Your Personal Information</h3>
                    <p className='containerOnePOne'>
                        We and/or our third party service providers may collect your personal information:<br/>
                        1.<b>directly from you;</b><br/>
                        2.<b>when you register or contact us in the Website;</b><br/>
                        3.<b>where you access and interact with the Website; or</b><br/>
                        4.<b>from other sources.</b><br/>
                        The information collected from you may include personally identifiable information (such as your name, NRIC/passport or other personal identification number, postal or e-mail addresses and telephone numbers) and personal content preferences.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Our Use of Cookies</h3>
                    <p className='containerOnePOne'>
                        A cookie is a small piece of text that is placed within the memory of a computer and can be later retrieved by web page servers. We use cookies to enhance your interaction and convenience with the Website and do not use cookies to record any personal information.<br/>
                        Cookies may record information about your visit, including the type of browser and operating system you use, the previous site you visited, your server’s IP address, the pages you access and the information downloaded by you. While this anonymous statistical data may be aggregated and used in broader statistical analysis by us and our web monitoring service provider to improve our services, at no time can we personally identify you as the source of that data.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Use and Disclosure of Personal Information</h3>
                    <p className='containerOnePOne'>
                        You acknowledge and consent that by providing your personal information to us that we may use and disclose your personal information for the purposes for which it was collected or for a related or ancillary purpose such as:<br/>
                        1.<b>to carry out or respond to your requests;</b><br/>
                        2.<b>to our third party service providers to assist us in providing and improving our services to you, and to analyse and better understand our customer’s needs or to develop, improve and market our products and services to you;</b><br/>
                        3.<b>for regulatory reporting and compliance with our legal obligations;</b><br/>
                        4.<b>to various regulatory bodies and law enforcement officials and agencies to protect against fraud and for related security purposes;</b><br/>
                        5.<b>to our third party service providers to include in a database compiled by us or our third party service provider for use in direct marketing of promotions, product and services we think may interest you;</b><br/>
                        6.<b>to seek your feedback in relation to customer satisfaction and our relationship with you;</b><br/>
                        7.<b>to the Licensor and our related companies for internal accounting and administration;</b><br/>
                        8.<b>to monitor or improve the quality and standard of service provided to you by the Website;</b><br/>
                        9.<b>to our successors and/or assigns;</b><br/>
                        10.<b>to provide offers that may be of interest to you; and</b><br/>
                        11.<b>to better understand your preferences.</b><br/>
                        Our third party service providers are organisations that include those that may assist us with research, mail and delivery, security, professional advisory, banking, payment processing or technology services. Where we engage third party service providers to perform services for us those third parties may be required to handle your personal information. Under these circumstances those third parties must safeguard this information and must only use it for the purposes for which it was supplied, although we are not responsible for ensuring this.<br/>
                        Other than the above, we will not disclose your personal information without your consent unless disclosure is either necessary to prevent a threat to life or health, authorized or required by law, reasonably necessary to enforce the law or necessary to investigate a suspected unlawful activity.<br/>
                        Any handling of personal information authorized or required by law will take priority over this Privacy Policy to the extent of any inconsistency.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Providing Personal Information About Another Person</h3>
                    <p className='containerOnePOne'>
                        You represent to us that where you provide personal information to us about another person, you are authorized to provide that information to us, and that you will inform that person who we are, how we use and disclose their information, and that they can gain access to that information.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Securing Your Personal Information</h3>
                    <p className='containerOnePOne'>
                        We have implemented appropriate physical, electronic and managerial security procedures in order to protect personal information from loss, misuse, alteration or destruction. Access to your personal information is limited to those who specifically need it to conduct their responsibilities.<br/>
                        We and our third party service providers take reasonable steps to destroy or permanently de-identify your personal information where it is no longer required and to protect your personal information from unauthorized access, disclosure, loss, misuse and alteration.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Accuracy and Access to Personal Information</h3>
                    <p className='containerOnePOne'>
                        We take reasonable steps to ensure that the information we hold about you is accurate, complete and up-to-date. To assist us to do this, please provide us with the correct information and inform us if your details change. You may update your details at any time by <Link to='/support'>contacting us.</Link><br/>
                    </p>

                    <h3 className='containerOneHTwo'>Linked Sites</h3>
                    <p className='containerOnePOne'>
                        This Website may contain links to websites which are owned or operated by other parties. You should make your own inquiries as to the privacy policies of these parties. We are not responsible for information on, or the privacy practices of, such websites.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Transmission of Your Data</h3>
                    <p className='containerOnePOne'>
                    While care is taken to protect your personal information on the Website, unfortunately no data transmission over the Internet is guaranteed as 100% secure. Accordingly, we cannot ensure or warrant the security of any information you send to us or receive from us online. This is particularly true for information you send to us via email as we have no way of protecting that information until it reaches us.<br/> 
                    </p>

                    <h3 className='containerOneHTwo'>Changes to our Policy</h3>
                    <p className='containerOnePOne'>From time to time it may be necessary for us to review and revise this Privacy Policy. We reserve the right to change this Privacy Policy at any time. Amendments or replacements of the Privacy Policy will be posted on the Website.<br/></p>

                    <h3 className='containerOneHTwo'>Direct Marketing</h3>
                    <p className='containerOnePOne'>
                    You consent for your personal information to be included in a database for use in direct marketing by us and our related entities or our third party contractors. If you do not wish to receive marketing material from us, you can opt-out or unsubscribe, by <Link to='/support'>contacting us.</Link> All emails, SMS and newsletters from this Website allow you to opt-out of further mailings by clicking on the link or responding, “Unsubscribe”.<br/>
                    </p>

                    <h3 className='containerOneHTwo'>Interpretation</h3>
                    <p className='containerOnePOne'>
                    All defined terms in this Privacy Policy shall have the same meaning in this Privacy Policy as is given to those terms in the Terms of Use of this Website<br/>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}