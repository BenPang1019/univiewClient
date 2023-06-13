import React, { useEffect } from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import Background from '../../Images/HomeBackGround.jpg'
import ImageOne from '../../Images/ImageOne.jpg'
import ImageTwo from '../../Images/ImageTwo.jpg'
import ImageThree from '../../Images/ImageThree.jpg'
import ImageFour from '../../Images/ImageFour.jpg'
import Experience from '../../Images/Experience.svg'
import Quality from '../../Images/Quality.svg'
import Professional from '../../Images/Professional.svg'
import Stars from '../../Images/Reviews.svg'
import PopularOne from '../../Images/PopularOne.svg'
import PopularTwo from '../../Images/PopularTwo.svg'
import PopularThree from '../../Images/PopularThree.svg'
import NewOne from '../../Images/NewOne.svg'
import NewTwo from '../../Images/NewTwo.svg'
import NewThree from '../../Images/NewThree.svg'
import IPPHome from '../../Images/IPPHome.png'
import Baterry from '../../Images/Baterry.png'
import Detector from '../../Images/Detector.png'
import SmartDoor from '../../Images/SmartDoor.png'
import Control from '../../Images/Control.png'
import Gate from '../../Images/Gate.png'
import CCTV from '../../Images/CCTV.png'
import Alarm from '../../Images/Alarm.png'

import { Helmet } from 'react-helmet';
import '../Home/Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper";

import { Link, useLocation, useSearchParams } from 'react-router-dom'
import {motion} from "framer-motion"


export const Home = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <motion.div className='home' >
    <Helmet>
        <meta name="author" content="https://wdatechnology.com" />
        <title>One Stop Security Solution &amp; Provider In Malaysia | Uniview</title>
        <meta name="title" content="One Stop Security Solution &amp; Provider In Malaysia | Uniview" />
        <meta name="description" content="VSH Group is the leading Security Systems Supplier/provider in Malaysia, (CCTV, Security Systems, Turnstile, Barrier Gate and Solar Battery)" />
        <meta property="og:title" content="One Stop Security Solution &amp; Provider In Malaysia | Uniview"/>
        <meta property="og:description" content="VSH Group is the leading Security Systems Supplier/provider in Malaysia, (CCTV, Security Systems, Turnstile, Barrier Gate and Solar Battery"/>    
    </Helmet>


        <div className='web'>
          <div className='container-one'>
            <img src={Background} className='image'/>
            <h1 className='container-one-h'>One Place</h1>
            <h1 className='container-one-h-h'>for all your security solution</h1>
            <h1 className='container-one-h-h-h'>Enabling a safer society <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and smarter living</h1>
          </div>
          <div className='container-card'>
            <Link to="/products" state={{ product:{category:'IP PBX System'} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageOne}/>
                <h3 className='card-h'>IP PBX System</h3>
              </div>
            </Link>
            <Link to="/products" state={{ product:{category:'Security Alarm System'} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageTwo} />
                <h3 className='card-h'>Alarm Security System</h3>
              </div>
            </Link>
            <Link to="/products" state={{ product:{category:'Solar System Solution'} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageThree} />
                <h3 className='card-h'>Solar System Solution</h3>
              </div>
            </Link>
            <Link to="/products" state={{ product:{category:'Auto Door System'} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageFour} />
                <h3 className='card-h'>Gate System</h3>
              </div>
            </Link>
          </div>

          <div className='containerThree'>
            <h1 className='containerThree-h'>Uni View Solution Sdn Bhd</h1>
            <p className='containerThree-p'>
              is a well-established home Security System Supplier in Malaysia Founded in 2016, we care about<br/>
              providing the best security systems to meet the evolving needs of modern society to advance safety
            </p>
            <div className='container-image'>
              <img src={Experience} />
              <h3 className='container-image-h'>Experienced</h3>
              <p className='container-image-p'>Step by step guide from <br/>experienced professional</p>
            </div>
            <div className='container-image'>
              <img src={Quality} />
              <h3 className='container-image-h'>High Quality</h3>
              <p className='container-image-p'>All kind of security tech from<br/> high-quality brands</p>
            </div>
            <div className='container-image'>
              <img src={Professional} />
              <h3 className='container-image-h'>Professional</h3>
              <p className='container-image-p'>Provides many solutions to<br/> meet specific needs</p>
            </div>
            <div>
            <Link style={{ textDecoration:'none' }} to='/about' onClick={scrollToTop}><button className='containerThree-button'>Explore</button></Link>
            </div>
          </div>

          <div style={{ backgroundColor:'#205696' }}>
          <div className='containerFour'>
            <h1 className='containerFourHeader'>Customer Reviews</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}
                slidesPerGroup={1}
                loop={true}
                navigation={true}                               
                modules={[Navigation]} 
                allowTouchMove={false}
              >
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
            </Swiper>
          </div>
          </div>

          <div className='containerFive'>
            <h1 className='containerFiveHeader'>Popular Products</h1>
            <div className='cardContainer inline'> 
            <Link to="/productsDetails" state={{ product:{id:'1163'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={PopularOne}/>
              <p className='containerFivePrg'>ZKTeco HBL400 <br/>Smart Lock</p>
            </div>
            </Link>
            <Link to="/productsDetails" state={{ product:{id:'506'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={PopularTwo} />
              <p className='containerFivePrg'>Voom Backup <br/>Battery 12v7AH</p>
            </div>
            </Link>
            <Link to="/productsDetails" state={{ product:{id:'1103'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={PopularThree} />
              <p className='containerFivePrg'>ZKTeco TS2000<br/> Pro Tripod Tur...</p>
            </div>
            </Link>
            </div>
            <div className='containerFiveCardMore inline'>
              <ol start="4">
                <li>
                  <Link className='containerFiveCardMorePrg' to="/productsDetails" state={{ product:{id:'1066'} }} onClick={scrollToTop}>Hikvision DS-PK LCD...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/productsDetails" state={{ product:{id:'1'} }} onClick={scrollToTop}>ZKTeco SF300 IP Fin... </Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/productsDetails" state={{ product:{id:'634'} }} onClick={scrollToTop}>CCTV DVR Recorde...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/productsDetails" state={{ product:{id:'10'} }} onClick={scrollToTop}>ZKTeco Face Reader...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/productsDetails" state={{ product:{id:'1177'} }} onClick={scrollToTop}>Solar Garden Light</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/productsDetails" state={{ product:{id:'1165'} }} onClick={scrollToTop}>Reolink Go </Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/productsDetails" state={{ product:{id:'1082'} }} onClick={scrollToTop}>VGATE-68 Stainless...</Link>
                </li>
              </ol>
              </div>
              <Link to="/products" className='More' onClick={scrollToTop}>More {'>'}</Link>
          </div>

          <div className='containerFive'>
            <h1 className='containerFiveHeaderNew'>Whats' New ?</h1>
            <div className='cardContainer inline'> 
            <Link to="/blogDetails" state={{ data:{id:'1'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={NewOne} />
              <p className='containerFivePrgNew'>2 in 1: ID Mix <br/> Mifare Card, <br/> All-in-one...</p>
            </div>
            </Link>
            <Link to="/blogDetails" state={{ data:{id:'2'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={NewTwo} />
              <p className='containerFivePrgNew'>Features of Ebelco <br/> 600-LED-TB-MC <br/> Electromagnetic...</p>
            </div>
            </Link>
            <Link to="/blogDetails" state={{ data:{id:'3'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={NewThree} />
              <p className='containerFivePrgNew' >4 Customer <br/> Service Ideas <br/> To Boost...</p>
            </div>
            </Link>
            </div>
            <div className='containerFiveCardMore inline'>
              <ol start="4">
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'4'} }} onClick={scrollToTop}>Intelligent Traffic...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'5'} }} onClick={scrollToTop}>4 Types Of Smart... </Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'6'} }} onClick={scrollToTop}>What Is Hotel Netwo...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'7'} }} onClick={scrollToTop}>ViewSonic ViewBoard...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'8'} }} onClick={scrollToTop}>What Is IoT?...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'9'} }} onClick={scrollToTop}>Benefits Of Central...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'10'} }} onClick={scrollToTop}>Features & Benefits...</Link>
                </li>
              </ol>
              </div>
              <Link to="/blog" className='More' onClick={scrollToTop}>More {'>'}</Link>
          </div>

        
          <div className='containerSix'>
            <h1 className='containerSixHeader'>What Are You Searching For?</h1>
            <Swiper
              direction={"vertical"}
              pagination={pagination}
              modules={[Pagination]}
              loop={true}
              slidesPerView={1}
              style={{ height: 520 }}
              className="mySwiper"
              // allowTouchMove={false}
            >
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={IPPHome} className="containerSixImageW inline"/>
                <div className='prgCotainer inline'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>IP PBX Phone System</h1>
                  VSH Technology provides branded IP PHONE that equipped IP PBX PHONE SYSTEM. Some of them are COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, and more.<br/><br/>Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers will hear while waiting to speak with someone. It does not necessarily have to be music. It could be a series of messages accompanied by a unique. In addition, Conferencing Tools, VoIP business phones now contained feature s that allow businesses to conduct audio or video web conferencing. There tools are increasingly vital to companies that find themselves operating remotely.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={CCTV} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Solar CCTV Solution</h1>
                  The features of Reolink Solar Camera and VSH Solar System includes video security in remote locations that work even during power outages, comes with easy installation and mobility, Eco-friendly, day and night monitoring, scalability for growing businesses, durable & long-lasting equipment, can be self-contained or viewed in real-time through the Internet and more. <br/><br/>Our solar-powered camera has a high resolution, which allows for zooming into an image with less blur and more viewing clarity. You furthermore can view the video on any digital device via an Internet connection. Not only that, these systems are infinitely scalable. By using cloud storage, you can harness the facility of the Internet to store and process footage. Our cameras have a wider viewing range, which reduces the number of cameras you need to install. The most important is our solar system is easy to install & move, and integrates with other security solutions like access control solutions. <br/><br/>The typical sites where you can install a solar-powered surveillance camera include your vacation houses, sheds, construction sites, vineyards, farms, barns, boats, warehouses, RVs, etc.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Gate} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Gate System</h1>
                  VSH Technology Sdn Bhd carries CASA ASIA Autogate System, ZKTECO Autogate System, and OAE Autogate System. Auto gate System incorporated with Turnstile gate, and Parking Barrier Gate, Stainless Steel Auto Gate System, Auto Sliding Door, Flap Barrier Turnstile Gate, Tripod Turnstile Gate, Swing Barrier Gate, Automatic Barrier Gate, Parking Barrier Gate, and more.<br/><br/>The Gate system we provide can be connected to Video Camera Surveillance. With a security camera in place, you can monitor everything that happens around the main access point whenever someone comes. Our gate system comes with an alarm or warning system, you’ll be able to get a loud warning device with LED flashing lights to frighten the intruders or select a silent device that notifies you and your security company of the forced entry attempt. Furthermore, our gate system has remote access and an advanced lock system. A remote access feature on smartphones enhances security as it allows remote monitoring of the property. Advanced lock system, choose a key card reader for an automatic gate to permit seamless entry and maintain high-security standards. Keypad locks or card readers guarantee that people who access to the property come in. The doorbell and buzzer system allows for monitoring of whoever comes into the home.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Control} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Access Control System</h1>
                  The brand of access control VSH carry are OEM Access Control System, HIKVISION Access Control System, and ZKTECO Access Control System. Access control system extensions we have includes Long Range Reader and Guard Patrol System. Other related access control system accessories are Timer Relay, Drop Bolt, Push Buttons, Access Control Card, Electromagnetic Lock, Surface armature housing, and more.<br/><br/>VSH’s access control is cost-effective and simple to operate, easy to understand even for the entire group of people. Easily adjust access time within seconds while not interfering with protocols you currently have in place. Our access control simplifies management, has fast and secure hosting and provides scheduled backups applicable for hotels, restaurants, and more.<br/><br/>Digital Touch Panel Access Control/Standalone RFID Access Control Keypad/Fingerprint Access Control System/Elevator Control Panel/Patrol Stick Guard Tour System/IP-Based Door Access Control Panel/Biometric Door Access Control Panel/Access Door Panel & Time Attendance/Face Recognition Terminal/Fingerprint Access Control Terminal
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={SmartDoor} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Smart Door Lock</h1>
                  Smart door locks refer to locks that are improved on the basis of traditional mechanical locks, and are more intelligent and simplified in terms of user safety, identification, and management. VSH Technology SDN BHD is the ZKTECO and VLOCK distributor in Malaysia. Our smart door lock can be divided into Wi-Fi Smart Lock, Bluetooth Smart Lock, Finger Print Access Smart Lock, App Access Smart Lock, Card Access Smart Lock, Biometric Smart Lock, and more, competent enough for home, hotel, bank, etc.<br/><br/>VLOCK and ZKTECO smart door locks have many functions that can make life qualitatively change. The most well-known is the automatic Anti-lock function and record query. Anti-piracy alarm function: the alarm function of the smart lock is divided into anti-piracy alarm, low battery alarm, trial and error alarm, etc. Not only that, but the information management functions also include the functions of adding, modifying, and deleting user information. Our smart door lock also has a voice prompt operation function. Intelligent operation settings and convenient voice prompt let them easy to operation suitable for all ages. Ensuring your personal safety is the original intention of the establishment of VSH TECHNOLOGY SDN BHD.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Detector} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Metal Detector</h1>
                  VSH Technology is a ZKTeco metal detector distributor in Malaysia, with a focus on Selangor and Kuala Lumpur. We supply two types of metal detectors Walkthrough Metal Detecting and Hand-Held Metal Detecting. Malls, schools, universities, government buildings, airports, and other such locations are suitable to use of the metal detectors. Some of the models we have are ZKTECO ZK-D3180 Metal Detector Gate, ZKTECO ZK-D2180S Metal Detector Gate, ZKTECO ZK-D3180S Walk Through Metal Detector Gate, ZKTECO ZK-D4330 Metal Detector Walk Through Gate, ZKTECO ZK-D100S Hand-Held Metal Detector. <br/><br/>Our metal detector is processed on a powerful high-frequency solid-state transmitter providing the highest sensitivity to nonferrous and nonmagnetic stainless steel. Moreover, tuned oscillator and input coils to increase resistance to electrical noise, Intuitive operator Interface-Operator controls accessible by a single keystroke, High-density head fill unaffected by moisture and prevent false-positive resulting from vibration. In addition, USB & Ethernet ports provide automatic data logging and networking capabilities. Besides that, ZKTECO metal detectors have strong stability, super anti-interference ability, and adaptability
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Baterry} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Backup Battery</h1>
                  A UPS backup battery gives you the required power to keep working or carefully shut down your systems. VSH technology has a broad range of UPS backup batteries for sale to homes and businesses in Malaysia.<br/><br/>UPS backup battery provides you with the most needed power to complete your jobs and keep your electrical system online. In recent times, these UPS backup batteries are built to last a long time enough for the power company to resolve your power issues. UPS backup batteries are a lifesaver.<br/><br/>If you are ever in need of a reliable UPS backup battery in Malaysia, you should check out VSH technology. We have some of the best UPS backup batteries you can get.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Alarm} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Alarm Security System</h1>
                  VSH Technology provides and distributes Alarm Security Systems like BLUGUARD, HIKVISION, and VIVOS. These Alarm Security Systems include Hybrid Security Control Panel, a Keypad Security alarm system, Wireless Panel Kits, Wireless Key fob, Wireless Input Expander, Wireless Magnetic Contact, Dual-Tech Detector and etc.<br/><br/>Alarm system make excellent solutions for a variety of situations, including open spaces, campuses, small enterprises, residential regions, etc. We offers a large selection of items that create trustworthy protection in all directions. Alarm goods assist you in constructing a strong security system that keeps an eye on all circumstances by offering security measures that concentrate on very specific needs and hazards, such as smoke detection, water leak detection, or displacement detection for vital objects.<br/><br/>Depending on your budget and the infrastructure that is already in place, home users can select between our wired or wireless alarm system. Complete your system by adding various detectors and accessories, such as magnetic contacts for windows and doors and dual-tech detectors that are intelligent enough to remain silent while your pet is running around the garden.
                </p>
                </div>
              </div>
              </SwiperSlide>
              </Swiper>
          </div>
        </div>


        {/* Mobile */}
        <div className='mobile'>
          <div className='container-one'>
            <img src={Background} className='image'/>
            <h1 className='container-one-h'>One Place</h1>
            <h1 className='container-one-h-h'>for all your security solution</h1>
            <h1 className='container-one-h-h-h'>Enabling a safer society  and smarter living</h1>
          </div>

          <div className='container-card'>
              <Link to="/products" state={{ product:{category:'IP PBX System'} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageOne} />
                <h3 className='card-h' >IP PBX Phone System</h3>
              </div>
              </Link>
              <Link to="/products" state={{ product:{category:'Security Alarm System'} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageFour} />
                <h3 className='card-h'>Alarm Security System</h3>
              </div>
              </Link>
              <Link to="/products" state={{ product:{category:'Solar System Solution'} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageTwo} />
                <h3 className='card-h'>Solar System Solution</h3>
              </div>
              </Link>
              <Link to="/products" state={{ product:{category:'Auto Door System '} }} onClick={scrollToTop}>
              <div className='card grow'>
                <img src={ImageThree} />
                <h3 className='card-h'>Gate System</h3>
              </div>
              </Link>
          </div>

          <div className='containerThree'>
            <h1 className='containerThree-h'>Uni View Solution Sdn Bhd</h1>
            <p className='containerThree-p'>
              is a well-established home Security System Supplier in Malaysia Founded in 2016, we care about<br/>
              providing the best security systems to meet the evolving needs of modern society to advance safety
            </p>
            <div className='container-image'>
              <img src={Experience} />
              <h3 className='container-image-h'>Experienced</h3>
              <p className='container-image-p'>Step by step guide from <br/>experienced professional</p>
            </div>
            <div className='container-image'>
              <img src={Quality} />
              <h3 className='container-image-h'>High Quality</h3>
              <p className='container-image-p'>All kind of security tech from<br/> high-quality brands</p>
            </div>
            <div className='container-image'>
              <img src={Professional} />
              <h3 className='container-image-h'>Professional</h3>
              <p className='container-image-p'>Provides many solutions to<br/> meet specific needs</p>
            </div>
            <div>
            <Link style={{ textDecoration:'none' }} to='/about' onClick={scrollToTop}><button className='containerThree-button'>Explore</button></Link>
            </div>
          </div>

          <div style={{ backgroundColor:'#205696' }}>
          <div className='containerFour'>
            <h1 className='containerFourHeader'>Customer Reviews</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}
                slidesPerGroup={1}
                loop={true}
                navigation={true}                               
                modules={[Navigation]} 
                allowTouchMove={false}
              >
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
              <div className='empty-container'></div>
            </Swiper>
          </div>
          </div>

          <div className='containerFive'>
            <h1 className='containerFiveHeader'>Popular Products</h1>
            <Link to="/productsDetails" state={{ product:{id:'1163'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={PopularOne} />
              <p className='containerFivePrg'>ZKTeco HBL400 <br/>Smart Lock</p>
            </div>
            </Link>
            <Link to="/productsDetails" state={{ product:{id:'506'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={PopularTwo} />
              <p className='containerFivePrg'>Voom Backup <br/>Battery 12v7AH</p>
            </div>
            </Link>
            <Link to="/productsDetails" state={{ product:{id:'1103'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={PopularThree} />
              <p className='containerFivePrg'>ZKTeco TS2000<br/> Pro Tripod Tur...</p>
            </div>
            </Link>
            <div className='containerFiveCardMore'>
              <ol start="4">
                <li>
                  <Link to="/productsDetails" state={{ product:{id:'1066'} }} className='containerFiveCardMorePrg' onClick={scrollToTop}>Hikvision DS-PK LCD...</Link>
                </li>
                <li>
                  <Link to="/productsDetails" state={{ product:{id:'1'} }} className='containerFiveCardMorePrg' onClick={scrollToTop}>ZKTeco SF300 IP Fin... </Link>
                </li>
                <li>
                  <Link to="/productsDetails" state={{ product:{id:'634'} }} className='containerFiveCardMorePrg' onClick={scrollToTop}>CCTV DVR Recorde...</Link>
                </li>
                <li>
                  <Link to="/productsDetails" state={{ product:{id:'10'} }} className='containerFiveCardMorePrg' onClick={scrollToTop}>ZKTeco Face Reader...</Link>
                </li>
                <li>
                  <Link to="/productsDetails" state={{ product:{id:'1177'} }} className='containerFiveCardMorePrg' onClick={scrollToTop}>Solar Garden Light</Link>
                </li>
                <li>
                  <Link to="/productsDetails" state={{ product:{id:'1165'} }} className='containerFiveCardMorePrg' onClick={scrollToTop}>Reolink Go...</Link>
                </li>
                <li>
                  <Link to="/productsDetails" state={{ product:{id:'1082'} }} className='containerFiveCardMorePrg' onClick={scrollToTop}>VGATE-68 Stainless...</Link>
                </li>
              </ol>
              </div>
              <div>
              <Link className='More' onClick={scrollToTop}>More {'>'}</Link>
              </div>
          </div>

          <div className='containerFive'>
            <h1 className='containerFiveHeaderNew'>Whats' New ?</h1>
            <Link to="/blogDetails" state={{ data:{id:'1'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={NewOne} />
              <p className='containerFivePrgNew'>2 in 1: ID Mix <br/> Mifare Card, <br/> All-in-one...</p>
            </div>
            </Link>
            <Link to="/blogDetails" state={{ data:{id:'2'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={NewTwo} />
              <p className='containerFivePrgNew'>Features of Ebelco <br/> 600-LED-TB-MC <br/> Electromagnetic...</p>
            </div>
            </Link>
            <Link to="/blogDetails" state={{ data:{id:'3'} }} onClick={scrollToTop}>
            <div className='containerFiveCard grow'>
              <img src={NewThree} />
              <p className='containerFivePrgNew' >4 Customer <br/> Service Ideas <br/> To Boost...</p>
            </div>
            </Link>
            <div className='containerFiveCardMore'>
              <ol start="4">
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'4'} }} onClick={scrollToTop}>Intelligent Traffic...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'5'} }} onClick={scrollToTop}>4 Types Of Smart... </Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'6'} }} onClick={scrollToTop}>What Is Hotel Netwo...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'7'} }} onClick={scrollToTop}>ViewSonic ViewBoard...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'8'} }} onClick={scrollToTop}>What Is IoT?...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'9'} }} onClick={scrollToTop}>Benefits Of Central...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg' to="/blogDetails" state={{ data:{id:'10'} }} onClick={scrollToTop}>Features & Benefits...</Link>
                </li>
              </ol>
              </div>
              <div>
              <Link className='More' onClick={scrollToTop}>More {'>'}</Link>
              </div>
          </div>

        
          <div className='containerSix'>
            <h1 className='containerSixHeader'>What Are You Searching For?</h1>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              loop={true}
              slidesPerView={1}
              className="mySwiper"
              // allowTouchMove={false}
            >
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={IPPHome} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>IP PBX Phone System</h1>
                  VSH Technology provides branded IP PHONE that equipped IP PBX PHONE SYSTEM. Some of them are COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, and more.<br/><br/>Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers will hear while waiting to speak with someone. It does not necessarily have to be music. It could be a series of messages accompanied by a unique. In addition, Conferencing Tools, VoIP business phones now contained feature s that allow businesses to conduct audio or video web conferencing. There tools are increasingly vital to companies that find themselves operating remotely.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={CCTV} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Solar CCTV Solution</h1>
                  The features of Reolink Solar Camera and VSH Solar System includes video security in remote locations that work even during power outages, comes with easy installation and mobility, Eco-friendly, day and night monitoring, scalability for growing businesses, durable & long-lasting equipment, can be self-contained or viewed in real-time through the Internet and more. <br/><br/>Our solar-powered camera has a high resolution, which allows for zooming into an image with less blur and more viewing clarity. You furthermore can view the video on any digital device via an Internet connection. Not only that, these systems are infinitely scalable. By using cloud storage, you can harness the facility of the Internet to store and process footage. Our cameras have a wider viewing range, which reduces the number of cameras you need to install. The most important is our solar system is easy to install & move, and integrates with other security solutions like access control solutions. <br/><br/>The typical sites where you can install a solar-powered surveillance camera include your vacation houses, sheds, construction sites, vineyards, farms, barns, boats, warehouses, RVs, etc.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Gate} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Gate System</h1>
                  VSH Technology Sdn Bhd carries CASA ASIA Autogate System, ZKTECO Autogate System, and OAE Autogate System. Auto gate System incorporated with Turnstile gate, and Parking Barrier Gate, Stainless Steel Auto Gate System, Auto Sliding Door, Flap Barrier Turnstile Gate, Tripod Turnstile Gate, Swing Barrier Gate, Automatic Barrier Gate, Parking Barrier Gate, and more.<br/><br/>The Gate system we provide can be connected to Video Camera Surveillance. With a security camera in place, you can monitor everything that happens around the main access point whenever someone comes. Our gate system comes with an alarm or warning system, you’ll be able to get a loud warning device with LED flashing lights to frighten the intruders or select a silent device that notifies you and your security company of the forced entry attempt. Furthermore, our gate system has remote access and an advanced lock system. A remote access feature on smartphones enhances security as it allows remote monitoring of the property. Advanced lock system, choose a key card reader for an automatic gate to permit seamless entry and maintain high-security standards. Keypad locks or card readers guarantee that people who access to the property come in. The doorbell and buzzer system allows for monitoring of whoever comes into the home.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Control} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Access Control System</h1>
                  The brand of access control VSH carry are OEM Access Control System, HIKVISION Access Control System, and ZKTECO Access Control System. Access control system extensions we have includes Long Range Reader and Guard Patrol System. Other related access control system accessories are Timer Relay, Drop Bolt, Push Buttons, Access Control Card, Electromagnetic Lock, Surface armature housing, and more.<br/><br/>VSH’s access control is cost-effective and simple to operate, easy to understand even for the entire group of people. Easily adjust access time within seconds while not interfering with protocols you currently have in place. Our access control simplifies management, has fast and secure hosting and provides scheduled backups applicable for hotels, restaurants, and more.<br/><br/>Digital Touch Panel Access Control/Standalone RFID Access Control Keypad/Fingerprint Access Control System/Elevator Control Panel/Patrol Stick Guard Tour System/IP-Based Door Access Control Panel/Biometric Door Access Control Panel/Access Door Panel & Time Attendance/Face Recognition Terminal/Fingerprint Access Control Terminal
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={SmartDoor} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Smart Door Lock</h1>
                  Smart door locks refer to locks that are improved on the basis of traditional mechanical locks, and are more intelligent and simplified in terms of user safety, identification, and management. VSH Technology SDN BHD is the ZKTECO and VLOCK distributor in Malaysia. Our smart door lock can be divided into Wi-Fi Smart Lock, Bluetooth Smart Lock, Finger Print Access Smart Lock, App Access Smart Lock, Card Access Smart Lock, Biometric Smart Lock, and more, competent enough for home, hotel, bank, etc.<br/><br/>VLOCK and ZKTECO smart door locks have many functions that can make life qualitatively change. The most well-known is the automatic Anti-lock function and record query. Anti-piracy alarm function: the alarm function of the smart lock is divided into anti-piracy alarm, low battery alarm, trial and error alarm, etc. Not only that, but the information management functions also include the functions of adding, modifying, and deleting user information. Our smart door lock also has a voice prompt operation function. Intelligent operation settings and convenient voice prompt let them easy to operation suitable for all ages. Ensuring your personal safety is the original intention of the establishment of VSH TECHNOLOGY SDN BHD.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Detector} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Metal Detector</h1>
                  VSH Technology is a ZKTeco metal detector distributor in Malaysia, with a focus on Selangor and Kuala Lumpur. We supply two types of metal detectors Walkthrough Metal Detecting and Hand-Held Metal Detecting. Malls, schools, universities, government buildings, airports, and other such locations are suitable to use of the metal detectors. Some of the models we have are ZKTECO ZK-D3180 Metal Detector Gate, ZKTECO ZK-D2180S Metal Detector Gate, ZKTECO ZK-D3180S Walk Through Metal Detector Gate, ZKTECO ZK-D4330 Metal Detector Walk Through Gate, ZKTECO ZK-D100S Hand-Held Metal Detector. <br/><br/>Our metal detector is processed on a powerful high-frequency solid-state transmitter providing the highest sensitivity to nonferrous and nonmagnetic stainless steel. Moreover, tuned oscillator and input coils to increase resistance to electrical noise, Intuitive operator Interface-Operator controls accessible by a single keystroke, High-density head fill unaffected by moisture and prevent false-positive resulting from vibration. In addition, USB & Ethernet ports provide automatic data logging and networking capabilities. Besides that, ZKTECO metal detectors have strong stability, super anti-interference ability, and adaptability
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Baterry} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Backup Battery</h1>
                  A UPS backup battery gives you the required power to keep working or carefully shut down your systems. VSH technology has a broad range of UPS backup batteries for sale to homes and businesses in Malaysia.<br/><br/>UPS backup battery provides you with the most needed power to complete your jobs and keep your electrical system online. In recent times, these UPS backup batteries are built to last a long time enough for the power company to resolve your power issues. UPS backup batteries are a lifesaver.<br/><br/>If you are ever in need of a reliable UPS backup battery in Malaysia, you should check out VSH technology. We have some of the best UPS backup batteries you can get.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Alarm} className="containerSixImageW"/>
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 className='containerSixHOne'>Alarm Security System</h1>
                  VSH Technology provides and distributes Alarm Security Systems like BLUGUARD, HIKVISION, and VIVOS. These Alarm Security Systems include Hybrid Security Control Panel, a Keypad Security alarm system, Wireless Panel Kits, Wireless Key fob, Wireless Input Expander, Wireless Magnetic Contact, Dual-Tech Detector and etc.<br/><br/>Alarm system make excellent solutions for a variety of situations, including open spaces, campuses, small enterprises, residential regions, etc. We offers a large selection of items that create trustworthy protection in all directions. Alarm goods assist you in constructing a strong security system that keeps an eye on all circumstances by offering security measures that concentrate on very specific needs and hazards, such as smoke detection, water leak detection, or displacement detection for vital objects.<br/><br/>Depending on your budget and the infrastructure that is already in place, home users can select between our wired or wireless alarm system. Complete your system by adding various detectors and accessories, such as magnetic contacts for windows and doors and dual-tech detectors that are intelligent enough to remain silent while your pet is running around the garden.
                </p>
                </div>
              </div>
              </SwiperSlide>
              <div className='empty-container'></div>
              </Swiper>
          </div>
        </div>
    </motion.div>
  )
}
