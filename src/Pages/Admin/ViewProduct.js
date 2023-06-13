import React, { useEffect } from "react";
import home from "../../Images/Home.svg"
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";

import '../Admin/Edit.css'

import Swal from 'sweetalert2'

export const ViewProduct = () => {

  const [productdata, setproductdata] = useState({})
  const location = useLocation();

  const productId=location.state.product.id

  const [error,setError] = useState(false);


  const handleDelete = async ()=>{
    Swal.fire({
      title: 'Delete Product',
      text: "Are you sure you want to delete? Your product will be cleared forever.",
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
        try {
          axios.delete(`/product/deleteProduct/${productId}`);
        } catch (err) {
          console.log(err);
        }
          Swal.fire({
            title: 'Delete Successfully',
            text: "Your product has been removed successfully. Press OK to continue.",
            width:'700px',
            height:'300px',
            confirmButtonText: 'OK',
            confirmButtonColor:"white",
            customClass:{
                confirmButton:'confirmButton grow',
                title:'title',
                popup:'popup',
                validationMessage:'title'
            },
            allowOutsideClick:false,
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/adminProduct");
              }
            })
      }
      })

  };

  const navigate = useNavigate();
  const navigatetohome= () =>{
    navigate('/adminMainPage');
  };

  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className='specP'>{str.replaceAll('\\n', '')}</p>);
  }

  function NewlineTextTwo(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className='specP'>{str.replaceAll('\\n', '')}</p>);
  }


    return(

        <div className="editProduct">    
                <section className="EDfirstsection">
                    <div className="EDfirstcontainer">
                        <div className="EDcolumn-30 grow">
                            <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                        </div>
                        <div className="EDcolumn-40">
                            <Link to={`/updateProduct`} state={{ product:location.state.product }}><iconbutton><img src={pencel} className="btnstyle grow" /></iconbutton></Link>
                            <iconbutton onClick={handleDelete}><img src={dele} className="btnstyle1 grow"/></iconbutton>
                        </div>
                        <div className="EDcolumn-30 right">
                            <button className='EDbacktbtn grow' onClick={() => navigate(-1)}>BACK</button>
                        </div>
                    </div>
                </section>

                <section className="EDsecondsection">
                    <div className="EDcenter-container">
                        <div className="EDsecondColumn-30 left">
                            <h1 className="EDh1Text">featured image</h1>
                            <img src={location.state.product.productImageOne?location.state.product.productImageOne:null} className='imgstyle'></img>
                            <h1 className="EDh1Text">name</h1>
                            <span className="EDText">{location.state.product.productName}</span>
                            <h1 className="EDh1Text">Brand</h1>
                            <span className="EDText">{location.state.product.brand}</span>
                            <h1 className="EDh1Text">Type</h1>
                            <span className="EDText">{location.state.product.type}</span>
                            <h1 className="EDh1Text">Product Catalogue</h1>
                            <iframe src={location.state.product.productCatalogue} style={{ width:'250px',height:'370px' }}></iframe>
                        </div>
                        <div className="EDcolumn left">
                            <h1 className="EDh1Text">images</h1>
                            <div className="imagecontainer">
                            <img src={location.state.product.productImageTwo?location.state.product.productImageTwo:null} className='otherImgstyle'></img>
                            <img src={location.state.product.productImageThree?location.state.product.productImageThree:null} className='otherImgstyle'></img>
                            <img src={location.state.product.productImageFour?location.state.product.productImageFour:null} className='otherImgstyle'></img>
                            </div>
                            <h1 className="EDh1Text">Categories</h1>
                            <span className="EDText">{location.state.product.category}</span>
                            <h1 className="EDh1Text">Sub-Categories</h1>
                            <span className="EDText">{location.state.product.subCategory}</span>
                            <h1 className="EDh1Text">Description</h1>
                            <span className="EDText"><NewlineTextTwo text={location.state.product.productDescription} /></span>
                            <h1 className="EDh1Text">Spec</h1>
                            <span className="EDText"><NewlineText text={location.state.product.productSpec} /></span>
                          
                        </div>
                    </div>
                </section>

                <br/>
                <br/>
                <br/>
                
           </div> 
    )
}


    