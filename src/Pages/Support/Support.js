import React, { useState,useEffect } from 'react'
import Service from '../../Images/Service.svg'
import FAQ from '../../Images/FAQ.svg'
import Contact from '../../Images/Contact.svg'
import axios from 'axios';
import '../Support/Support.css'
import Open from '../../Images/Open.svg'
import Close from '../../Images/Close.svg'
import QrCode from '../../Images/qrcode.jpeg'

import { Helmet } from 'react-helmet';

import {motion} from "framer-motion"
import Swal from 'sweetalert2'

export const Support= () =>{
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const [active7, setActive7] = useState(false);
    const [active8, setActive8] = useState(false);
    const [active9, setActive9] = useState(false);
    const [active10, setActive10] = useState(false);
    const [active11, setActive11] = useState(false);
    const [active12, setActive12] = useState(false);
    const [active13, setActive13] = useState(false);
    const [active14, setActive14] = useState(false);
    const [active15, setActive15] = useState(false);
    const [active16, setActive16] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [company, setCompany] = useState('')
    const [type, setType] = useState('')
    const [service, setService] = useState('')

    const handleRequest = async (e) => {
        e.preventDefault()
        if(name==0){
            Swal.fire({
              title:'Name Are Required',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(email==0){
            Swal.fire({
              title:'E-mail Are Required',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(phone==0){
            Swal.fire({
              title:'Phone Number Are Required',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(service==0){
            Swal.fire({
              title:'Please Select One Type of Service',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(company==0){
            Swal.fire({
              title:'Company Name Are Required',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(type==0){
            Swal.fire({
              title:'Please Select One Type of Product',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else{
            const body = {
                name,
                phone, 
                email, 
                message,
                company,
                type,
                service
            }
        
            try {
              const res = await axiosInstance.post("/requestMail", body);
              Swal.fire({
                title:`${res.data}`,
                customClass: {
                  confirmButton: 'alertButton',
                }
              })
            } catch (err) {
              
            }
          }
      }

      const handleContact = async (e) => {
        e.preventDefault()
        if(name==0){
            Swal.fire({
              title:'Name Are Required',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(email==0){
            Swal.fire({
              title:'E-mail Are Required',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(phone==0){
            Swal.fire({
              title:'Phone Number Are Required',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else
          if(type==0){
            Swal.fire({
              title:'Please Select One Type of Product',
              customClass: {
                confirmButton: 'alertButton',
              }
            })
          }else{
            const body = {
                name,
                phone, 
                email, 
                message,
                type,
            }
        
            try {
              const res = await axiosInstance.post("/contactMail", body);
              Swal.fire({
                title:`${res.data}`,
                customClass: {
                  confirmButton: 'alertButton',
                }
              })
            } catch (err) {
              
            }
          }
      }

      
    return(
        <motion.div className='support' >
        <Helmet>
            <meta name="author" content="https://wdatechnology.com" />
            <title>Enquiry & Support | Uniview Solution Sdn Bhd</title>
            <meta name="title" content="Enquiry & Support | Uniview Solution Sdn Bhd" />
            <meta name="description" content="We committed to provide high quality and excellent service in security and surveillance field. " />
            <meta property="og:title" content="Enquiry & Support | Uniview Solution Sdn Bhd"/>
            <meta property="og:description" content="We committed to provide high quality and excellent service in security and surveillance field. " />
        </Helmet>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneH'>Need Help?</h1>
                    
                    <div className='containerOneImage'>
                    <a href='#service' style={{ textDecoration:"none" }}>
                        <img src={Service}/>
                        <h3 className='containerOneImageH'>Service Centre</h3>
                        <p className='containerOneImageP'>We Offer CCTV Repair <br/> Service for other brands</p>
                    </a>
                    </div>

                    <div className='containerOneImage'>
                    <a href='#FAQ' style={{ textDecoration:"none" }}>
                        <img src={FAQ}/>
                        <h3 className='containerOneImageH'>FAQ</h3>
                        <p className='containerOneImageP'>Various FAQs that you <br/> may curious about</p>
                    </a>
                    </div>

                    <div className='containerOneImage'>
                    <a href='#contact' style={{ textDecoration:"none" }}>
                        <img src={Contact}/>
                        <h3 className='containerOneImageH'>Contact Us</h3>
                        <p className='containerOneImageP'>Tell us what you need, <br/> We Reply Fast!</p>
                    </a>
                    </div>
                </div>

                <div className='containerTwo' id='service'>
                    <h1 className='containerTwoHOne'>Service Centre</h1>
                    <h3 className='containerTwoHTwo'>Send your request here</h3>
                    <div className='containerTwoForm'>
                        <div className='containerTwoFormServiceType'>
                            <h1 className='containerTwoFormServiceTypeH'>Type of Service</h1>
                            <div className='serviceRadio'>
                            <input type='radio' value='Product Status' name='serviceRadio' onChange = {(e) => setService(e.target.value)} required/>
                            <label >Product Status</label>
                            </div>
                            <div className='serviceRadio'>
                            <input type='radio' value='Repair/Service' name='serviceRadio' onChange = {(e) => setService(e.target.value)} required/>
                            <label >Repair/Service</label>
                            </div>
                            <div className='serviceRadio'>
                            <input type='radio' value='Warranty Check' name='serviceRadio' onChange = {(e) => setService(e.target.value)} required/>
                            <label >Warranty Check</label>
                            </div>
                        </div>
                        <div className='containerTwoFormUserDetail'>
                            <div className='userDetailLabelContainer'>
                                <label className='userDetailLabel'>Name:</label>  
                            </div>
                            <br/>
                            <div className='userDetailLabelContainer'>
                                <label className='userDetailLabel'>Phone:</label>
                            </div>
                            <br/>
                            <div className='userDetailLabelContainer'>
                                <label className='userDetailLabel'>E-mail:</label>
                            </div>
                            <br/>
                            <div className='userDetailLabelContainer'>
                                <label className='userDetailLabel'>Company Name:</label>
                            </div>
                            <div className='userDetailInputContainer'>
                                <input className='userDetailInput' type='text' value = {name} onChange = {(e) => setName(e.target.value)} name="name" required></input>
                                <input className='userDetailInput' type='text' value = {phone} onChange = {(e) => setPhone(e.target.value)} name="phone" required></input>
                                <input className='userDetailInput' type='text' value = {email} onChange = {(e) => setEmail(e.target.value)} name="email" required></input>
                                <input className='userDetailInput' type='text' value = {company} onChange = {(e) => setCompany(e.target.value)} name="company" required></input>
                            </div>
                        </div>
                        <div className='containerTwoFormProductType'>
                            <h1 className='containerTwoFormProductTypeH'>Product Type</h1>
                                <div className='productRadio' style={{ marginLeft:'10rem' }}>
                                    <input type='radio' value="Access Control" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Access Control</label><br/>
                                    <input type='radio' value="Auto Sliding Door" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Auto Sliding Door</label><br/>
                                    <input type='radio' value="DVR Recorders" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>DVR Recorders</label><br/>
                                    <input type='radio' value="Power Supply" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Power Supply</label>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Alarm System" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Alarm System</label><br/>
                                    <input type='radio' value="Barrier Gate" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Barrier Gate</label><br/>
                                    <input type='radio' value="HDD" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>HDD</label><br/>
                                    <input type='radio' value="Smart Door Lock" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Smart Door Lock</label>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Auto Gate" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Auto Gate</label><br/>
                                    <input type='radio' value="CCTV" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>CCTV</label><br/>
                                    <input type='radio' value="Metal Detector" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Metal Detector</label><br/>
                                    <input type='radio' value="UHF" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>UHF</label>
                                </div>  
                        </div>
                        <div className='containerTwoFormQuestionDetails'>
                            <div className='questionDetailLabelContainer'>
                                <label className='questionDetailLabel'>More Details?</label>
                            </div>
                            <textarea className='questionDetailTextArea' value = {message} onChange = {(e) => setMessage(e.target.value)} name="message" required/>
                        </div>
                        <div className='submitBtn'>
                            <button className='submit' onClick={handleRequest}>Submit</button>
                        </div>
                    </div>
                </div>

                <div className='containerThree' id='contact'>
                    <h1 className='containerThreeHOne'>Contact Us</h1>
                    <h3 className='containerThreeHTwo'>Tell us what you’re searching for</h3>
                    <div className='containerThreeForm'>
                        <div className='containerThreeFormUserDetail'> 
                            <div className='userDetailLabelContainer'>
                                <label className='userDetailLabel'>Name:</label>  
                            </div>
                            <br/>
                            <div className='userDetailLabelContainer'>
                                <label className='userDetailLabel'>Phone:</label>
                            </div>
                            <br/>
                            <div className='userDetailLabelContainer'>
                                <label className='userDetailLabel'>E-mail:</label>
                            </div>
                            <div className='userDetailInputContainerThree'>
                                <input className='userDetailInput' type='text' value = {name} onChange = {(e) => setName(e.target.value)} name="name" required></input>
                                <input className='userDetailInput' type='text' value = {phone} onChange = {(e) => setPhone(e.target.value)} name="phone" required></input>
                                <input className='userDetailInput' type='text' value = {email} onChange = {(e) => setEmail(e.target.value)} name="email" required></input>
                            </div> 
                        </div>

                        <div className='containerThreeFormProductType'>
                            <h1 className='containerThreeFormProductTypeH'>Product Type</h1>
                                <div className='productRadio' style={{ marginLeft:'10rem' }}>
                                    <input type='radio' value="Access Control" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Access Control</label><br/>
                                    <input type='radio' value="Auto Sliding Door" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Auto Sliding Door</label><br/>
                                    <input type='radio' value="DVR Recorders" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>DVR Recorders</label><br/>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Alarm System" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Alarm System</label><br/>
                                    <input type='radio' value="Barrier Gate" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Barrier Gate</label><br/>
                                    <input type='radio' value="HDD" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>HDD</label><br/>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Auto Gate" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Auto Gate</label><br/>
                                    <input type='radio' value="CCTV" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>CCTV</label><br/>
                                    <input type='radio' value="Metal Detector" name='productRadio' onChange = {(e) => setType(e.target.value)} required/>
                                    <label>Metal Detector</label><br/>
                                </div>
                        </div>
                        <div className='containerThreeFormQuestionDetails'>
                            <div className='questionDetailLabelContainer'>
                                <label className='questionDetailLabel'>Requirement?</label>
                            </div>
                            <textarea className='questionDetailTextArea' value = {message} onChange = {(e) => setMessage(e.target.value)} name="message" required/>
                        </div>
                        <div className='submitBtn'>
                            <button className='submit' onClick={handleContact}>Submit</button>
                        </div>
                    </div>
                </div>

                <div className='containerFour' id='FAQ'>
                    <h1 className='containerFourHOne'>FAQ</h1>
                    <h1 className='containerFourHTwo'>Tell us what you're searching for</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive1(!active1)} >
                            <h1 className='accordionH'>What payment methods are available to complete your purchase?</h1>
                                <div className={`accordionContent ${active1 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Cash & Carry</li>
                                        <li>Debit / Credit</li>
                                        <li>ATM Deposit / Funds Transfer to VSH Technology SDN BHD:MAYBANK : 562 777 234 909</li>
                                        <li>TNG / BOOST / SHOPEEPAY / DUITNOW</li>
                                        <li>JOMPAY  BILLER CODE : 71233</li>
                                        <li>For CHEQUE Payments, Funds have to Clear before Goods Release</li>
                                    </ul>
                                    <img src={QrCode} className="image"/>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive1(!active1)}>
                            {active1 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive2(!active2)}>
                            <h1 className='accordionH'>What are the terms of our Warranty and Repair?</h1>
                                <div className={`accordionContent ${active2 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Minimum 7 working days for item sent in to checking.</li>
                                        <li>Hardware purchases come with 1 year warranty (carry-in) except for power adaptors and unless otherwise stated.</li>
                                        <li>One to one replacement on faulty hardware to be given within 1 week from date of purchase. (subject to inspection by our technicians for damages) & (Item returned must be in good condition and original packing).</li>
                                        <li>VSH Technology reserves the right to replace the product or relevant part with the same or equivalent product or part, rather than repair it. Where a replacement is provided, the product or part becomes property of VSH. VSH Technology may replace with refurbished parts, replacement of the product or part does not extend or restart the warranty period.</li>
                                        <li>Warranty covers manufacturer defects only. Does not cover damage due to lightning and power surge.<br/>The warranty will void if the factory-applied serial number has been altered/ torn / removed from the product. Warranty will not apply. <br/>If damage, malfunction or failure resulting from alterations, accident, misuse, burnt mark, fire, liquid spillage. <br/>Mis-adjustment of customer controls, use on an incorrect voltage, power surges and lightning/thunderstorm activities.</li>
                                        <li>For warranty service, return products with transportation prepaid to VSH Technology SDN BHD. Warranty Department (No.93C, Jalan BP 7/2, Bandar Bukit Puchong, 47120 Puchong, Selangor.)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive2(!active2)}>
                            {active2 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive3(!active3)}>
                            <h1 className='accordionH'>What is our Loan Policy?</h1>
                                <div className={`accordionContent ${active3 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>For loan items we require full payment as security deposit. Loan period is 7 days. If not returned, we will not refund the deposit and item will be considered sold. Item must be returned in perfect condition & packaging as at the time of loan, Otherwise we will impose charges.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive3(!active3)}>
                            {active3 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive4(!active4)}>
                            <h1 className='accordionH'>What is the Return Policy of VSH Technology?</h1>
                                <div className={`accordionContent ${active4 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Goods sold is returnable within 7 days at a restocking fee of 20%. Goods must be returned in its original packaging complete with accessories and in mint condition. Goods returned after 7 days will not be accepted.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive4(!active4)}>
                            {active4 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>



                    {/* FAQ CCTV */}
                    <h1 className='containerFourHOne'>FAQ's for CCTV Camera System</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive5(!active5)} >
                            <h1 className='accordionH'>What kind of brand CCTV VSH Technology carry?</h1>
                                <div className={`accordionContent ${active5 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>HIKVISION/ DAHUA / ZKTECO /REOLINK/ IMOU/ EZVIZ/ HANWHA (Samsung)</li>
                                        <li>VIEWSONIC ,OAE , VLOCK ,DRAKA ,IPCOM ,VOOM, WBDP ,CASA ASIA</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive5(!active5)}>
                            {active5 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive6(!active6)} >
                            <h1 className='accordionH'>How many megapixel we have?</h1>
                                <div className={`accordionContent ${active6 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>ANALOG : 2MP / 5MP/ 8MP</li>
                                        <li>NETWORK : 2MP/ 4MP /5MP /6MP/ 8MP</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive6(!active6)}>
                            {active6 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive7(!active7)} >
                            <h1 className='accordionH'>What is the Types of CCTV Cameras we have ?</h1>
                                <div className={`accordionContent ${active7 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>normal camera (black n white)</li>
                                        <li>ColourVU ( which is day & night got colour view)</li>
                                        <li>built in mic (normal & colourVU)</li>
                                        <li>Wireless (plug n play / built in mic n speaker)</li>
                                        <li>SIMCARD SLOT (use 4G data camera)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive7(!active7)}>
                            {active7 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>



                    {/* FAQ Barrier Gate */}
                    <h1 className='containerFourHOne'>FAQ's for Barrier Gate</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive8(!active8)} >
                            <h1 className='accordionH'>What brand of barrier gate we have?</h1>
                                <div className={`accordionContent ${active8 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>ZKTECO (4.5m and 6m)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive8(!active8)}>
                            {active8 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive9(!active9)} >
                            <h1 className='accordionH'>How many years warranty ?</h1>
                                <div className={`accordionContent ${active9 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>1 year warranty</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive9(!active9)}>
                            {active9 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>
                    


                    {/* FAQ Alarm System*/}
                    <h1 className='containerFourHOne'>FAQ's for Barrier Gate</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive10(!active10)} >
                            <h1 className='accordionH'>What kind of brand alarms we have?</h1>
                                <div className={`accordionContent ${active10 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>HIKVISION HYBRID ALARM</li>
                                        <li>BLUGUARD ALARM (L9 & V16)</li>
                                        <li>VIVOS ALARM</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive10(!active10)}>
                            {active10 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive11(!active11)} >
                            <h1 className='accordionH'>Do we have wireless alarms?</h1>
                                <div className={`accordionContent ${active11 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Absolutely yes! we suggest you try our new one Hikvision hybrid alarm which is more reliable than another brand. Besides that, you can link all Hikvision product and control in one apps only (HIKCONNECT)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive11(!active11)}>
                            {active11 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    


                    {/* FAQ Alarm System*/}
                    <h1 className='containerFourHOne'>FAQ's for Backup Battery</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive12(!active12)} >
                            <h1 className='accordionH'>How many capacity – Amp Hours (Ah) ?</h1>
                                <div className={`accordionContent ${active12 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>12V 7ah / 12v 7.2Ah / 12V9AH/ 12V12AH/ 12V18AH/ 12V26AH/ 12V40AH/ 12V65AH</li>
                                        <li>12V80AH/ 12V100AH/ 12V120AH/ 12V150AH / 12V200AH/ 12V250AH</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive12(!active12)}>
                            {active12 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive13(!active13)} >
                            <h1 className='accordionH'>How many years warranty ?</h1>
                                <div className={`accordionContent ${active13 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>1 year warranty</li>
                                        <li>over charging is warranty void</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive13(!active13)}>
                            {active13 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>
                    



                    {/* FAQ's for Metal Detector*/}
                    <h1 className='containerFourHOne'>FAQ's for Metal Detector</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive14(!active14)} >
                            <h1 className='accordionH'>Can detect any metal and gold item ?</h1>
                                <div className={`accordionContent ${active14 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Yes, Can! This device ZK-D3180S got 18zone detecting zone, 2side LED sensitivity light bar which is will show you where the banned item placed.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive14(!active14)}>
                            {active14 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive15(!active15)} >
                            <h1 className='accordionH'>How many years warranty ?</h1>
                                <div className={`accordionContent ${active15 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>1 year warranty</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive15(!active15)}>
                            {active15 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>



                    {/* FAQ's for Solar Camera System*/}
                    <h1 className='containerFourHOne'>FAQ's for Solar Camera System</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive16(!active16)} >
                            <h1 className='accordionH'>Do VSH Technology supplies SOLAR Camera system for farm / orchid/ fishing pond?</h1>
                                <div className={`accordionContent ${active16 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>VSH Technology have supply Solar Camera System for farm/ orchid and also fishing pond. Depend on your request, which type of Solar Camera you want, and some detail places then We will quote for you.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive16(!active16)}>
                            {active16 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>
                </div> 
                </div>





                <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneH'>Need Help?</h1>
                    
                    <div className='containerOneImage'>
                    <a href='#service' style={{ textDecoration:"none" }}>
                        <img src={Service}/>
                        <h3 className='containerOneImageH'>Service Centre</h3>
                        <p className='containerOneImageP'>We Offer CCTV Repair <br/> Service for other brands</p>
                    </a>
                    </div>

                    <div className='containerOneImage'>
                    <a href='#FAQ' style={{ textDecoration:"none" }}>
                        <img src={FAQ}/>
                        <h3 className='containerOneImageH'>FAQ</h3>
                        <p className='containerOneImageP'>Various FAQs that you <br/> may curious about</p>
                    </a>
                    </div>

                    <div className='containerOneImage'>
                    <a href='#contact' style={{ textDecoration:"none" }}>
                        <img src={Contact}/>
                        <h3 className='containerOneImageH'>Contact Us</h3>
                        <p className='containerOneImageP'>Tell us what you need, <br/> We Reply Fast!</p>
                    </a>
                    </div>
                </div>

                <div className='containerTwo' id='service'>
                    <h1 className='containerTwoHOne'>Service Centre</h1>
                    <h3 className='containerTwoHTwo'>Send your request here</h3>
                    <div className='containerTwoForm'>
                        <div className='containerTwoFormServiceType'>
                            <h1 className='containerTwoFormServiceTypeH'>Type of Service</h1>
                            <div className='serviceRadio'>
                            <input type='radio' value='Product Status' name='serviceRadio'/>
                            <label >Product Status</label>
                            </div>
                            <div className='serviceRadio'>
                            <input type='radio' value='Repair/Service' name='serviceRadio'/>
                            <label >Repair/Service</label>
                            </div>
                            <div className='serviceRadio'>
                            <input type='radio' value='Warranty Check' name='serviceRadio'/>
                            <label >Warranty Check</label>
                            </div>
                        </div>
                        <div className='containerTwoFormUserDetail'>
                            <div className='userDetailLabelContainerC'>
                                <label className='userDetailLabel'>Name:</label>  
                                <input className='userDetailInput' type='text'></input>
                            </div>
                            <br/>
                            <div className='userDetailLabelContainerC'>
                                <label className='userDetailLabel'>Phone:</label>
                                <input className='userDetailInput' type='text'></input>
                            </div>
                            <br/>
                            <div className='userDetailLabelContainerC'>
                                <label className='userDetailLabel'>E-mail:</label>
                                <input className='userDetailInput' type='text'></input>
                            </div>
                            <br/>
                            <div className='userDetailLabelContainerC'>
                                <label className='userDetailLabel'>Company Name:</label>
                                <input className='userDetailInput' type='text'></input>
                            </div>
                        </div>
                        <div className='containerTwoFormProductType'>
                            <h1 className='containerTwoFormProductTypeH'>Product Type</h1>
                                <div className='productRadio'>
                                    <input type='radio' value="Access Control" name='productRadio'/>
                                    <label>Access Control</label><br/>
                                    <input type='radio' value="Auto Sliding Door" name='productRadio'/>
                                    <label>Auto Sliding Door</label><br/>
                                    <input type='radio' value="DVR Recorders" name='productRadio'/>
                                    <label>DVR Recorders</label><br/>
                                    <input type='radio' value="Power Supply" name='productRadio'/>
                                    <label>Power Supply</label>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Alarm System" name='productRadio'/>
                                    <label>Alarm System</label><br/>
                                    <input type='radio' value="Barrier Gate" name='productRadio'/>
                                    <label>Barrier Gate</label><br/>
                                    <input type='radio' value="HDD" name='productRadio'/>
                                    <label>HDD</label><br/>
                                    <input type='radio' value="Smart Door Lock" name='productRadio'/>
                                    <label>Smart Door Lock</label>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Auto Gate" name='productRadio'/>
                                    <label>Auto Gate</label><br/>
                                    <input type='radio' value="CCTV" name='productRadio'/>
                                    <label>CCTV</label><br/>
                                    <input type='radio' value="Metal Detector" name='productRadio'/>
                                    <label>Metal Detector</label><br/>
                                    <input type='radio' value="UHF" name='productRadio'/>
                                    <label>UHF</label>
                                </div>  
                        </div>
                        <div className='containerTwoFormQuestionDetails'>
                            <div className='questionDetailLabelContainer'>
                                <label className='questionDetailLabel'>More Details?</label>
                            </div>
                            <textarea className='questionDetailTextArea'/>
                        </div>
                        <div className='submitBtn'>
                            <button className='submit'>Submit</button>
                        </div>
                    </div>
                </div>

                <div className='containerThree' id='contact'>
                    <h1 className='containerThreeHOne'>Contact Us</h1>
                    <h3 className='containerThreeHTwo'>Tell us what you’re searching for</h3>
                    <div className='containerThreeForm'>
                        <div className='containerThreeFormUserDetailF'> 
                            <div className='userDetailLabelContainerF'>
                                <label className='userDetailLabelF'>Name:</label> 
                                <input className='userDetailInputF' type='text'></input> 
                            </div>
                            <br/>
                            <div className='userDetailLabelContainerF'>
                                <label className='userDetailLabelF'>Phone:</label>
                                <input className='userDetailInputF' type='text'></input>
                            </div>
                            <br/>
                            <div className='userDetailLabelContainerF'>
                                <label className='userDetailLabelF'>E-mail:</label>
                                <input className='userDetailInputF' type='text'></input>
                            </div>
                        </div>

                        <div className='containerThreeFormProductType'>
                            <h1 className='containerThreeFormProductTypeH'>Product Type</h1>
                                <div className='productRadio'>
                                    <input type='radio' value="Access Control" name='productRadio'/>
                                    <label>Access Control</label><br/>
                                    <input type='radio' value="Auto Sliding Door" name='productRadio'/>
                                    <label>Auto Sliding Door</label><br/>
                                    <input type='radio' value="DVR Recorders" name='productRadio'/>
                                    <label>DVR Recorders</label><br/>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Alarm System" name='productRadio'/>
                                    <label>Alarm System</label><br/>
                                    <input type='radio' value="Barrier Gate" name='productRadio'/>
                                    <label>Barrier Gate</label><br/>
                                    <input type='radio' value="HDD" name='productRadio'/>
                                    <label>HDD</label><br/>
                                </div>
                                <div className='productRadio'>
                                    <input type='radio' value="Auto Gate" name='productRadio'/>
                                    <label>Auto Gate</label><br/>
                                    <input type='radio' value="CCTV" name='productRadio'/>
                                    <label>CCTV</label><br/>
                                    <input type='radio' value="Metal Detector" name='productRadio'/>
                                    <label>Metal Detector</label><br/>
                                </div>
                        </div>
                        <div className='containerThreeFormQuestionDetails'>
                            <div className='questionDetailLabelContainerF'>
                                <label className='questionDetailLabelF'>Requirement?</label>
                            </div>
                            <textarea className='questionDetailTextAreaF'/>
                        </div>
                        <div className='submitBtnF'>
                            <button className='submitF'>Submit</button>
                        </div>
                    </div>
                </div>

                <div className='containerFour' id='FAQ'>
                    <h1 className='containerFourHOne'>FAQ</h1>
                    <h1 className='containerFourHTwo'>Tell us what you're searching for</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive1(!active1)} >
                            <h1 className='accordionH'>What payment methods are available to complete your purchase?</h1>
                                <div className={`accordionContent ${active1 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Cash & Carry</li>
                                        <li>Debit / Credit</li>
                                        <li>ATM Deposit / Funds Transfer to VSH Technology SDN BHD:MAYBANK : 562 777 234 909</li>
                                        <li>TNG / BOOST / SHOPEEPAY / DUITNOW</li>
                                        <li>JOMPAY  BILLER CODE : 71233</li>
                                        <li>For CHEQUE Payments, Funds have to Clear before Goods Release</li>
                                    </ul>
                                    <img src={QrCode} className="image"/>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive1(!active1)}>
                            {active1 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive2(!active2)}>
                            <h1 className='accordionH'>What are the terms of our Warranty and Repair?</h1>
                                <div className={`accordionContent ${active2 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Minimum 7 working days for item sent in to checking.</li>
                                        <li>Hardware purchases come with 1 year warranty (carry-in) except for power adaptors and unless otherwise stated.</li>
                                        <li>One to one replacement on faulty hardware to be given within 1 week from date of purchase. (subject to inspection by our technicians for damages) & (Item returned must be in good condition and original packing).</li>
                                        <li>VSH Technology reserves the right to replace the product or relevant part with the same or equivalent product or part, rather than repair it. Where a replacement is provided, the product or part becomes property of VSH. VSH Technology may replace with refurbished parts, replacement of the product or part does not extend or restart the warranty period.</li>
                                        <li>Warranty covers manufacturer defects only. Does not cover damage due to lightning and power surge.<br/>The warranty will void if the factory-applied serial number has been altered/ torn / removed from the product. Warranty will not apply. <br/>If damage, malfunction or failure resulting from alterations, accident, misuse, burnt mark, fire, liquid spillage. <br/>Mis-adjustment of customer controls, use on an incorrect voltage, power surges and lightning/thunderstorm activities.</li>
                                        <li>For warranty service, return products with transportation prepaid to VSH Technology SDN BHD. Warranty Department (No.93C, Jalan BP 7/2, Bandar Bukit Puchong, 47120 Puchong, Selangor.)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive2(!active2)}>
                            {active2 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive3(!active3)}>
                            <h1 className='accordionH'>What is our Loan Policy?</h1>
                                <div className={`accordionContent ${active3 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>For loan items we require full payment as security deposit. Loan period is 7 days. If not returned, we will not refund the deposit and item will be considered sold. Item must be returned in perfect condition & packaging as at the time of loan, Otherwise we will impose charges.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive3(!active3)}>
                            {active3 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive4(!active4)}>
                            <h1 className='accordionH'>What is the Return Policy of VSH Technology?</h1>
                                <div className={`accordionContent ${active4 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Goods sold is returnable within 7 days at a restocking fee of 20%. Goods must be returned in its original packaging complete with accessories and in mint condition. Goods returned after 7 days will not be accepted.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive4(!active4)}>
                            {active4 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>



                    {/* FAQ CCTV */}
                    <h1 className='containerFourHOne'>FAQ's for CCTV Camera System</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive5(!active5)} >
                            <h1 className='accordionH'>What kind of brand CCTV VSH Technology carry?</h1>
                                <div className={`accordionContent ${active5 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>HIKVISION/ DAHUA / ZKTECO /REOLINK/ IMOU/ EZVIZ/ HANWHA (Samsung)</li>
                                        <li>VIEWSONIC ,OAE , VLOCK ,DRAKA ,IPCOM ,VOOM, WBDP ,CASA ASIA</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive5(!active5)}>
                            {active5 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive6(!active6)} >
                            <h1 className='accordionH'>How many megapixel we have?</h1>
                                <div className={`accordionContent ${active6 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>ANALOG : 2MP / 5MP/ 8MP</li>
                                        <li>NETWORK : 2MP/ 4MP /5MP /6MP/ 8MP</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive6(!active6)}>
                            {active6 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive7(!active7)} >
                            <h1 className='accordionH'>What is the Types of CCTV Cameras we have ?</h1>
                                <div className={`accordionContent ${active7 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>normal camera (black n white)</li>
                                        <li>ColourVU ( which is day & night got colour view)</li>
                                        <li>built in mic (normal & colourVU)</li>
                                        <li>Wireless (plug n play / built in mic n speaker)</li>
                                        <li>SIMCARD SLOT (use 4G data camera)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive7(!active7)}>
                            {active7 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>



                    {/* FAQ Barrier Gate */}
                    <h1 className='containerFourHOne'>FAQ's for Barrier Gate</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive8(!active8)} >
                            <h1 className='accordionH'>What brand of barrier gate we have?</h1>
                                <div className={`accordionContent ${active8 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>ZKTECO (4.5m and 6m)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive8(!active8)}>
                            {active8 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive9(!active9)} >
                            <h1 className='accordionH'>How many years warranty ?</h1>
                                <div className={`accordionContent ${active9 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>1 year warranty</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive9(!active9)}>
                            {active9 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>
                    


                    {/* FAQ Alarm System*/}
                    <h1 className='containerFourHOne'>FAQ's for Barrier Gate</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive10(!active10)} >
                            <h1 className='accordionH'>What kind of brand alarms we have?</h1>
                                <div className={`accordionContent ${active10 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>HIKVISION HYBRID ALARM</li>
                                        <li>BLUGUARD ALARM (L9 & V16)</li>
                                        <li>VIVOS ALARM</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive10(!active10)}>
                            {active10 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive11(!active11)} >
                            <h1 className='accordionH'>Do we have wireless alarms?</h1>
                                <div className={`accordionContent ${active11 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Absolutely yes! we suggest you try our new one Hikvision hybrid alarm which is more reliable than another brand. Besides that, you can link all Hikvision product and control in one apps only (HIKCONNECT)</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive11(!active11)}>
                            {active11 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    


                    {/* FAQ Alarm System*/}
                    <h1 className='containerFourHOne'>FAQ's for Backup Battery</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive12(!active12)} >
                            <h1 className='accordionH'>How many capacity – Amp Hours (Ah) ?</h1>
                                <div className={`accordionContent ${active12 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>12V 7ah / 12v 7.2Ah / 12V9AH/ 12V12AH/ 12V18AH/ 12V26AH/ 12V40AH/ 12V65AH</li>
                                        <li>12V80AH/ 12V100AH/ 12V120AH/ 12V150AH / 12V200AH/ 12V250AH</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive12(!active12)}>
                            {active12 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive13(!active13)} >
                            <h1 className='accordionH'>How many years warranty ?</h1>
                                <div className={`accordionContent ${active13 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>1 year warranty</li>
                                        <li>over charging is warranty void</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive13(!active13)}>
                            {active13 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>
                    



                    {/* FAQ's for Metal Detector*/}
                    <h1 className='containerFourHOne'>FAQ's for Metal Detector</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive14(!active14)} >
                            <h1 className='accordionH'>Can detect any metal and gold item ?</h1>
                                <div className={`accordionContent ${active14 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>Yes, Can! This device ZK-D3180S got 18zone detecting zone, 2side LED sensitivity light bar which is will show you where the banned item placed.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive14(!active14)}>
                            {active14 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive15(!active15)} >
                            <h1 className='accordionH'>How many years warranty ?</h1>
                                <div className={`accordionContent ${active15 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>1 year warranty</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive15(!active15)}>
                            {active15 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>



                    {/* FAQ's for Solar Camera System*/}
                    <h1 className='containerFourHOne'>FAQ's for Solar Camera System</h1>
                    <div className="accordion">
                        <div className="accordionItem" onClick={() => setActive16(!active16)} >
                            <h1 className='accordionH'>Do VSH Technology supplies SOLAR Camera system for farm / orchid/ fishing pond?</h1>
                                <div className={`accordionContent ${active16 ? 'active' : ''}`}>
                                    <ul style={{ listStyleType:'number' }}>
                                        <li>VSH Technology have supply Solar Camera System for farm/ orchid and also fishing pond. Depend on your request, which type of Solar Camera you want, and some detail places then We will quote for you.</li>
                                    </ul>
                                </div>
                        </div>
                        <div className='accordionBullet' onClick={() => setActive16(!active16)}>
                            {active16 ? <img src={Close} /> : <img src={Open}/>}
                        </div>
                    </div>
                </div> 
                </div>                
        </motion.div>
    )
}