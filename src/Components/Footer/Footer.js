import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import Facebook from '../../Images/Facebook.svg'
import Instagram from '../../Images/Instagram.svg'
import Tiktok from '../../Images/Tiktok.svg'
import Whatsapp from '../../Images/Whatsapp.svg'
import Youtube from '../../Images/Youtube.svg'


export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

  return (
    <div className='footerF'>
    <div className='web'>
        <div className='containerOneF'>
            <h1>Quick Links</h1>
            <div className='linkContainer'>
            <Link to="/"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>Home</h3></Link>
            <Link to="/about"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>About Us</h3></Link>
            <Link to="/products"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>Products</h3></Link>
            <Link to="/blog"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>Blog</h3></Link>
            <Link to="/support"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>Support</h3></Link>
            <Link to="/termsofuse"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>Terms of Use</h3></Link>
            <Link to="/warranty"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>Warranty</h3></Link>
            <Link to="/privacypolicy"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='listItemsOne'>Privacy Policy</h3></Link>
            </div>
        </div>

        <div className='containerTwoF'>
            <h1>Contact</h1>
            <a href='/'><img src={Instagram} className="iconF"/></a>
            <a href='/'><img src={Facebook} className="iconF"/></a>
            <a href="https://wa.me/601120432729" target="_blank"><img src={Whatsapp} className="iconF"/></a>

            <h1>Address</h1>
            <a href='https://goo.gl/maps/MLt8PwJ1AZPRGWTX7' target="_blank" style={{ textDecoration:'none',color:'white' }}>
            <p className='containerTwoPF'>
                109, JALAN PASAR PUDU 55100<br/>
                &nbsp;&nbsp;&nbsp;KUALA LUMPUR, 55100 WILAYAH<br/>
            </p>
            <p className='containerTwoPPF'>
                PERSEKUTUAN, Wilayah<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persekutuan Kuala Lumpur
            </p>
            </a>
        </div>

        <div className='containerThreeF'>
            <h1>Follow Us</h1>
            <a href="https://wa.me/601120432729" target="_blank" style={{ textDecoration:'none',color:'white' }}><p className='containerThreePF'>011-2043 2729</p></a>

            <h1 className='containerThreeHF'>Opening Hours</h1>
            <p className='containerThreePPF'>
                Mon - Fri <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00a.m. - 6:00p.m.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat & Sun:Closed
            </p>
        </div>

        <div className='containerFourF'>
            <h1>Locate Us</h1>
            <div className='containerMap'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31870.77984342198!2d101.6988730430603!3d3.1349668985924977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc376aabea5f77%3A0x99db50889e70978c!2sUNI%20VIEW%20SOLUTION%20SDN%20BHD!5e0!3m2!1sen!2smy!4v1679040777605!5m2!1sen!2smy"></iframe>
            </div>
            <div className='copyright'>
                <h3 className='copyrightHOne'>
                    Copyright © 2022 Uni View Solution Sdn Bhd All rights reserved. | Another Site built on React by WDA Technology Solution SDN BHD.
                </h3>
            </div>
        </div>
    </div>


    <div className='mobile'>
        <div className='containerOneF'>
            <h1>Quick Links</h1>
            <Link className='listItemsOne' to='/' onClick={scrollToTop} style={{ textDecoration:'none' }}>Home</Link>
            <br/>
            <Link className='listItemsTwo' to='/about' onClick={scrollToTop} style={{ textDecoration:'none' }}>About Us</Link>
            <br/>
            <Link className='listItemsThree' to='/product' onClick={scrollToTop} style={{ textDecoration:'none' }}>Products</Link>
            <br/>
            <Link className='listItemsFour' to='/blog' onClick={scrollToTop} style={{ textDecoration:'none' }}>Blog</Link>
            <br/>
            <Link className='listItemsFive' to='/support' onClick={scrollToTop} style={{ textDecoration:'none' }}>Support</Link>
            <br/>
            <Link className='listItemsSix' to='/termsofuse' onClick={scrollToTop} style={{ textDecoration:'none' }}>Terms of Use</Link>
            <br/>
            <Link className='listItemsSeven' to='/warranty' onClick={scrollToTop} style={{ textDecoration:'none' }}>Warranty</Link>
            <br/>
            <Link className='listItemsEight' to='/privacypolicy' onClick={scrollToTop} style={{ textDecoration:'none' }}>Privacy Policy</Link>
        </div>

        <div className='containerTwoF'>
            <h1>Contact</h1>
            <a href='/'><img src={Instagram} className="iconF"/></a>
            <a href='/'><img src={Facebook} className="iconF"/></a>
            <a href="https://wa.me/601120432729" target="_blank"><img src={Whatsapp} className="iconF"/></a>

            <h1>Address</h1>
            <a href='https://goo.gl/maps/MLt8PwJ1AZPRGWTX7' target="_blank" style={{ textDecoration:'none',color:'white' }}>
            <p className='containerTwoPF'>
                109, JALAN PASAR PUDU 55100<br/>
                &nbsp;&nbsp;&nbsp;KUALA LUMPUR, 55100 WILAYAH<br/>
            </p>
            <p className='containerTwoPPF'>
                PERSEKUTUAN, Wilayah<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persekutuan Kuala Lumpur
            </p>
            </a>
        </div>

        <div className='containerThreeF'>
            <h1>Follow Us</h1>
            <a href="https://wa.me/601120432729" target="_blank" style={{ textDecoration:'none',color:'white' }}><p className='containerThreePF'>011-2043 2729</p></a>

            <h1 className='containerThreeHF'>Opening Hours</h1>
            <p className='containerThreePPF'>
                Mon - Fri <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00a.m. - 6:00p.m.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat & Sun:Closed
            </p>
        </div>

        <div className='containerFourF'>
            <h1>Locate Us</h1>
            <div className='containerMap'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31870.77984342198!2d101.6988730430603!3d3.1349668985924977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc376aabea5f77%3A0x99db50889e70978c!2sUNI%20VIEW%20SOLUTION%20SDN%20BHD!5e0!3m2!1sen!2smy!4v1679040777605!5m2!1sen!2smy"></iframe>
            </div>
        </div>
        
        <div className='copyright'>
            <h3 className='copyrightHOne'>
            Copyright © 2022 Uni View Solution Sdn Bhd All rights reserved. | Another Site built on React by WDA Technology Solution SDN BHD.
            </h3>
        </div>
    </div>
    </div>
  )
}