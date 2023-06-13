import React,{useState,useContext} from 'react'
import searchLogo from '../../Images/searchLogo.svg'
import product from '../../Images/product.svg'
import post from '../../Images/Post.svg'
import stats from '../../Images/Stats.svg'
import sales from '../../Images/Sales.svg'
import settings from '../../Images/Setting.svg'
import reviews from '../../Images/Review.svg'
import promotion from '../../Images/Promotion.svg'
import media from '../../Images/Media.svg'
import PopUp from '../../Images/Pop-up.svg'
import contact from '../../Images/contactAdmin.svg'
import profile from '../../Images/Profile.svg'
import add from '../../Images/Add.svg'
import logo from '../../Images/wdalogo.svg'
import flower from '../../Images/Flower.jpg'

import '../Admin/Admin.css'
import {Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import Swal from 'sweetalert2'

export const Admin = () => {
    const navigate = useNavigate();

    const navigatetoProduct= () =>{
        navigate('/adminProduct');
    };



    const {currentAdmin,adminLogout} = useContext(AuthContext);

    const logout = () => {
        Swal.fire({
            title: 'Sign Out',
            text: "Are you sure you want to sign out? You’ll need to sign in again.",
            width:'700px',
            height:'300px',
            showCancelButton: true,
            confirmButtonText: 'YES',
            confirmButtonColor:"white",
            cancelButtonText:'NO',
            cancelButtonColor:"white",
            customClass:{
                confirmButton:'confirmButton grow',
                cancelButton:'confirmButton grow',
                title:'title',
                popup:'popup',
                validationMessage:'title'
            },
            allowOutsideClick:false,
            }).then((result) => {
            if (result.isConfirmed) {
                adminLogout()
            }
            })
      
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

    return(

        <div className='admin'>
        {currentAdmin ? 
      (
        <>
            <section className='firstsection'>
                <div className='firstcontainer'>
                    <input className='searchinput' type='text' placeholder='SEARCH...'></input>
                    <div className='btncontainer'>
                        <iconbutton><img src={searchLogo} className='searchbtn'/></iconbutton>
                    </div>
                    <button className='signoutbtn grow' onClick={logout}>SIGN OUT</button>
                </div>
            </section>

            <section className='secondsection'>
                <div className='center-container'>
                    <div className='container-2'>
                        <img src={flower} className='imgstyle'></img>
                            <div className='col-secondcontainer'>
                                <h1 className='h1Text'>Hi Admin, welcome back!</h1>
                                <a href='https://wdatechnology.com/' style={{ textDecoration:'none' }}><p className='webtext'>www.wdatechnology.com.my</p></a>
                            </div>
                        <iconbutton><img src={profile} className='profilebtn grow'/></iconbutton>
                        <iconbutton><img src={add} className='addbtn grow'/></iconbutton>
                    </div>
                </div>
            </section>

            <section className='thirdsection'>
                <h2 className='h3-color'>QUICK ACTIONS</h2>
                <div className='thirdcontainer'>
                    <iconbutton onClick={navigatetoProduct}><img src={product} className='actionbtn grow'/></iconbutton>
                    {/* <button className='actionbtn'>Post</button> */}
                    <Link to={`/post/:id`}><iconbutton><img src={post} className='actionbtn actionbtn-Lf grow'/></iconbutton></Link>
                    {/* <button className='actionbtn'>Stats</button> */}
                    <iconbutton><img src={stats} className='actionbtn actionbtn-Lf grow'/></iconbutton>
                    {/* <button className='actionbtn'>Sales</button> */}
                    <iconbutton><img src={sales} className='actionbtn actionbtn-Lf grow'/></iconbutton>
                    {/* <button className='actionbtn'>Setting</button> */}
                    <iconbutton><img src={settings} className='actionbtn actionbtn-Lf grow'/></iconbutton>
                </div>
            </section>

            <section className='fourthsection'>
                <h2 className='h3-color'>OTHERS</h2>
                <div className='fourthcontainer'>
                    {/* <button>Review</button> */}
                    <iconbutton><img src={reviews} className='actionbtn grow'/></iconbutton>
                    {/* <button className='actionbtn'>Promotion</button> */}
                    <iconbutton><img src={promotion} className='actionbtn actionbtn-Lf grow'/></iconbutton>
                    {/* <button className='actionbtn'>Media</button> */}
                    <iconbutton><img src={media} className='actionbtn actionbtn-Lf grow'/></iconbutton>
                    {/* <button className='actionbtn'>Pop-up</button> */}
                    <iconbutton><img src={PopUp} className='actionbtn actionbtn-Lf grow'/></iconbutton>
                    {/* <button className='actionbtn'>Contact</button> */}
                    <iconbutton><img src={contact} className='actionbtn actionbtn-Lf grow'/></iconbutton>
                </div>
            </section>

            <section className='fifthsection'>
                <div className='center-fifthContainer'>
                    <div className='container-5'>
                        <div className='column-40'>
                            <iconbutton><img src={logo}/></iconbutton>
                        </div>
                        <div className='column-60'>
                            <h1 className='h1Text'>Need some help?</h1>
                            <p className='helptext'>Feel free to leave a message regarding issues you are facing. We will get in touch with you as soon as posible.</p>
                        </div>
                        {/* <div className='col-secondcontainer'>
                            
                        </div> */}
                    </div>
                </div>
            </section>

            <section className='fromsection'>
                <form className="contact-form fromcontainer">
                    <div className='container-5'>
                        <div className='column'>
                            <div className="form-field">
                                <label className="label" for="name">NAME</label>
                                <input
                                id="name"
                                className="input-text js-input"
                                type="text"
                                required
                                />
                            </div>

                            <div className="form-field">
                                <label className="label" for="phone">PHONE</label>
                                <input
                                id="phone"
                                className="input-text js-input"
                                type="text"
                                required
                                />
                            </div>
                        </div>
                        <div className='column'>
                            <div className="form-field space-5">
                                <label className="label" for="message">MESSAGE</label>
                                <textarea
                                id="message"
                                className="input-text-2"
                                type="text"
                                required
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </section>

            <div className='sendBtncontainer'>
                <button className='sendtBtn grow'>SEND</button>
            </div>

            <div className='ViewBtncontainer'>
                <button className='ViewBtn'>View Site</button>
            </div>

            </>
        ) : 
      (
        setTimeout(() => {
          navigate('/adminLogin')
        }, 3)
      )
      }                
        </div>

    )

}