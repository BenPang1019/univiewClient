import React,{useState,useEffect} from 'react'
import '../About/About.css'
import { Link } from 'react-router-dom'
import background from '../../Images/AboutBackground.jpg'
import backgroundTwo from '../../Images/AboutBackgroundTwo.svg'
import Repairing from '../../Images/Repairing.svg'
import Delivery from '../../Images/Delivery.svg'
import Warranty from '../../Images/Warranty.svg'

import { Helmet } from 'react-helmet';
import {motion} from "framer-motion"

export const About = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => {
            const newCount = prevCount + 1;
            return newCount > 100 ? 100 : newCount;
          });
        }, 30);
    
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
    const interval = setInterval(() => {
        setCountTwo((prevCount) => {
        const newCount = prevCount + 1;
        return newCount > 50 ? 50 : newCount;
        });
    }, 30);

    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
    const interval = setInterval(() => {
        setCountThree((prevCount) => {
        const newCount = prevCount + 1;
        return newCount > 1 ? 1 : newCount;
        });
    }, 100);

    return () => clearInterval(interval);
    }, []);
      
    return(
        <motion.div className='about' >
        <Helmet>
            <meta name="author" content="https://wdatechnology.com" />
            <title>About Us | Uniview Solution Sdn Bhd</title>
            <meta name="title" content="About Us | Uniview Solution Sdn Bhd" />
            <meta name="description" content="Established in 2016, Uniview has since provided and distributed a wide range of security systems to Malaysians for more than 6 years" />
            <meta property="og:title" content="About Us | Uniview Solution Sdn Bhd"/>
            <meta property="og:description" content="Established in 2016, Uniview has since provided and distributed a wide range of security systems to Malaysians for more than 6 years" />
        </Helmet>
        
            <div className='web'>
                <div className='containerOne'>
                    <img src={background} className="image"/>
                    <h1 className='containerOneHOne'>uniview</h1>
                    <h1 className='containerOneHTwo'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has provided and distributed <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a wide range of security <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;systems to Malaysians for <br/> more than 6 years</h1>
                    <h1 className='containerOneHThree'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;founded in 2016 to help new <br/> generation improve their life style. We <br/> &nbsp;&nbsp;&nbsp;focused to provide high quality and <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excellent service in security and <br/> &nbsp;&nbsp;surveillance field. Technologies grow <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rapidly every day and challenging <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;world of security system. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and smarter living</h1>
                </div>

                <div className='containerTwo'>
                    <div className='marginTest'>
                        <h1 className='containerTwoHOne'>{count}+</h1>
                        <h1 className='containerTwoHOne'>{countTwo}+</h1>
                        <h1 className='containerTwoHOne'>{countThree}K+</h1><br/>
                    </div>
                    <div className='margin'>
                        <h3 className='containerTwoHTwo'>employees</h3>
                        <h3 className='containerTwoHTwo'>partners</h3>
                        <h3 className='containerTwoHTwo'>products</h3>
                    </div>
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Everything Is About You</h1>
                    <p className='containerThreePOne'>Our goal is to give clients the highest-quality goods and services possible while upholding their expectations. We are enthusiastic to provide safety and prevention by providing the most cutting-edge security products, as well as to continually increase client satisfaction with our array of capabilities to forge lasting business relationships.</p>
                </div>

                <div className='imageContainer'>
                    <img src={backgroundTwo} className="image"/>
                </div>

                <div className='containerFour'>
                    <h1 className='containerFourHOne'>Repair, Set Up & Install Service</h1>
                    <h3 className='containerFourHTwo'>Repair & Reboot Your Old Security System Or Install The New Ones</h3>
                </div>

                <div className='containerFive'>
                    <div className='containerImage'>
                    <img src={Repairing} />
                    <h3 className='containerImageH'>Repairing</h3>
                    <p className='containerImageP'>We offer Repair service with <br/>or without Warranty</p>
                    </div>
                    <div className='containerImage'>
                    <img src={Delivery} />
                    <h3 className='containerImageH'>Delivery</h3>
                    <p className='containerImageP'>We offer delivery service for <br/>your products by Lalamove & Courier</p>
                    </div>
                    <div className='containerImage'>
                    <img src={Warranty} />
                    <h3 className='containerImageH'>Warranty</h3>
                    <p className='containerImageP'>We offer warranty check for<br/> your products</p>
                    </div>
                    <div>
                    <Link style={{ textDecoration:'none' }} to='/support'><button className='containerFiveButton'>Explore</button></Link>
                </div>
            </div>
            </div>



            <div className='mobile'>
                <div className='containerOne'>
                    <img src={background} className="image"/>
                    <h1 className='containerOneHOne'>uniview</h1>
                    <h1 className='containerOneHTwo'>has provided and distributed a wide range of security systems to Malaysians for more than 6 years</h1>
                    <h1 className='containerOneHThree'>founded in 2016 to help new generation improve their life style. We focused to provide high quality and excellent service in security and surveillance field. Technologies grow rapidly every day and challenging and smarter living</h1>
                </div>

                <div className='containerTwo'>
                    <div className='marginTest'>
                        <h1 className='containerTwoHOne'>{count}++</h1>
                        <h3 className='containerTwoHTwo'>employees</h3>
                        <h1 className='containerTwoHOne'>{countTwo}+</h1>
                        <h3 className='containerTwoHTwo'>partners</h3>
                        <h1 className='containerTwoHOne'>{countThree}K+</h1>
                        <h3 className='containerTwoHTwo'>products</h3>
                    </div>
                    {/* <div className='margin'>
                        <h3 className='containerTwoHTwo'>employees</h3>
                        <h3 className='containerTwoHTwo'>partners</h3>
                        <h3 className='containerTwoHTwo'>products</h3>
                    </div> */}
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Everything Is About You</h1>
                    <p className='containerThreePOne'>Our goal is to give clients the highest-quality goods and services possible while upholding their expectations. We are enthusiastic to provide safety and prevention by providing the most cutting-edge security products, as well as to continually increase client satisfaction with our array of capabilities to forge lasting business relationships.</p>
                </div>

                <div className='imageContainer'>
                    <img src={backgroundTwo} className="image"/>
                </div>

                <div className='containerFour'>
                    <h1 className='containerFourHOne'>Repair, Set Up & Install Service</h1>
                    <h3 className='containerFourHTwo'>Repair & Reboot Your Old Security System Or Install The New Ones</h3>
                </div>

                <div className='containerFive'>
                    <div className='containerImage'>
                    <img src={Repairing} />
                    <h3 className='containerImageH'>Repairing</h3>
                    <p className='containerImageP'>We offer Repair service with <br/>or without Warranty</p>
                    </div>
                    <div className='containerImage'>
                    <img src={Delivery} />
                    <h3 className='containerImageH'>Delivery</h3>
                    <p className='containerImageP'>We offer delivery service for <br/>your products by Lalamove & Courier</p>
                    </div>
                    <div className='containerImage'>
                    <img src={Warranty} />
                    <h3 className='containerImageH'>Warranty</h3>
                    <p className='containerImageP'>We offer warranty check for<br/> your products</p>
                    </div>
                    <div>
                    <Link style={{ textDecoration:'none' }} to='/support'><button className='containerFiveButton'>Explore</button></Link>
                </div>
            </div>
            </div>
        </motion.div>
    )

}