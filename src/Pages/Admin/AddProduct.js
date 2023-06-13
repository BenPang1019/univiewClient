import React, { useEffect,useContext } from "react";
import home from "../../Images/Home.svg"
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'
import xIcon from '../../Images/xIcon.png'

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import Swal from 'sweetalert2'


import '../Admin/Edit.css'
import { AuthContext } from "../../Context/AuthContext";

export const AddProduct = () => {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});
    const [fileOne, setFileOne] = useState('');

    const [fileTwo, setFileTwo] = useState('');

    const [fileThree, setFileThree] = useState('');

    const [fileFour, setFileFour] = useState('');

    const [fileFive, setFileFive] = useState('');

    const [product, setProduct] = useState({
    brand:"",
    type:"",
    subType:"",
    productImageOne:"",
    productImageTwo:"",
    productImageThree:"",
    productImageFour:"",
    productCatalogue:"",
    category:"",
    subCategory:"",
    productName:"",
    productDescription:"",
    productSpec:"",
    });

    const types = [
    'Audio',
    'Car Plate Recognition',
    'Cube',
    'Fish Eye',
    'Full Color',
    'Normal',
    'Other',
    'PanoVu',
    'Pin Hole',
    'PTZ',
    'Turbo HD ColorVu',
    'WIFI'
    ];

    const subTypes = [
        '1MP',
        '2MP',
        '3MP',
        '4MP',
        '5MP',
        '6MP',
        '8MP',
    ];

      const optionsCategory = [
        {id:"1",name:"Access Control System"},//
        {id:"2",name:"Accessories"},//
        {id:"3",name:"Auto Door System"},//
        {id:"4",name:"Backup Battery"},//
        {id:"5",name:"Cable & Network Wire"},//
        {id:"6",name:"Card & Weigand Reader"},//
        {id:"7",name:"CCTV Recorders"},//
        {id:"8",name:"CCTV Security Camera System"},//
        {id:"9",name:"Digital Air BnB Door Lock System"},//
        {id:"10",name:"Display Monitor"},//
        {id:"11",name:"Draka Cable"},//
        {id:"12",name:"fa"},//
        {id:"13",name:"IP PBX System"},//
        {id:"14",name:"Metal Detector"},//
        {id:"15",name:"Networking"},//
        {id:"16",name:"Security Alarm System"},//
        {id:"17",name:"Security Gate System"},//
        {id:"18",name:"Server Rack"},//
        {id:"19",name:"Smart Door Lock"},//
        {id:"20",name:"Solar System Solution"},//
        {id:"21",name:"Thermal Imaging Camera"},//
        {id:"22",name:"Uncategorized"},//
        {id:"23",name:"Uninterruptible Power Supply"},//
        {id:"24",name:"Video Intercom"},//
        {id:"25",name:"Voice Intercom"}//
        ];

        const optionsSubCategory = [
            {id:"1",categoryId:"Access Control System",name:"Hikvision Access Control System"},
            {id:"2",categoryId:"Access Control System",name:"OEM Access Control System"},
            {id:"3",categoryId:"Access Control System",name:"ZKTeco"},
            {id:"4",categoryId:"Accessories",name:"Access Control Accessories"},
            {id:"5",categoryId:"Accessories",name:"Alarm Accessories"},
            {id:"6",categoryId:"Accessories",name:"Auto Door Accessories"},
            {id:"7",categoryId:"Accessories",name:"BNC Connector"},
            {id:"8",categoryId:"Accessories",name:"Cabling Solution"},
            {id:"9",categoryId:"Accessories",name:"CCTV Bracket"},
            {id:"10",categoryId:"Accessories",name:"CCTV Camera Accessories"},
            {id:"11",categoryId:"Accessories",name:"CCTV Tester"},
            {id:"12",categoryId:"Accessories",name:"Fiber Connectors"},
            {id:"13",categoryId:"Accessories",name:"Fiber Distribution Boxes"},
            {id:"14",categoryId:"Accessories",name:"Fiber Distribution Frames"},
            {id:"15",categoryId:"Accessories",name:"Fiber Distribution SFP"},
            {id:"16",categoryId:"Accessories",name:"Fiber Optic Converter"},//
            {id:"17",categoryId:"Accessories",name:"Fiber Patch Cords"},
            {id:"18",categoryId:"Accessories",name:"Fiber Splicing Tools"},
            {id:"19",categoryId:"Accessories",name:"HD Fiber Convertor"},
            {id:"20",categoryId:"Accessories",name:"HDMI Cable"},
            {id:"21",categoryId:"Accessories",name:"Keystone Jacks & Face Plates"},
            {id:"22",categoryId:"Accessories",name:"Network Patch Panels"},
            {id:"23",categoryId:"Accessories",name:"PoE Solution"},
            {id:"24",categoryId:"Accessories",name:"Power Supply"},
            {id:"25",categoryId:"Accessories",name:"Surge Protector"},
            {id:"26",categoryId:"Auto Door System",name:"Sliding Auto Door"},
            {id:"27",categoryId:"Auto Door System",name:"Swing Door"},
            {id:"28",categoryId:"CCTV Recorders",name:"Dahua DVR NVR Recorders"},
            {id:"29",categoryId:"CCTV Recorders",name:"Hikvision DVR NVR Recorders"},
            {id:"30",categoryId:"CCTV Recorders",name:"REOLINK NVR Recorder"},
            {id:"31",categoryId:"CCTV Security Camera System",name:"DAHUA"},
            {id:"32",categoryId:"CCTV Security Camera System",name:"EZVIZ"},
            {id:"33",categoryId:"CCTV Security Camera System",name:"HIKVISION"},
            {id:"34",categoryId:"CCTV Security Camera System",name:"Wisenet"},
            {id:"35",categoryId:"Display Monitor",name:"Dahua LCD"},
            {id:"36",categoryId:"Display Monitor",name:"Dahua Standing Monitor"},
            {id:"37",categoryId:"Display Monitor",name:"ViewSonic Monitor"},
            {id:"38",categoryId:"IP PBX System",name:"Fanvil IP PBX Phone"},
            {id:"39",categoryId:"IP PBX System",name:"Zycoo IP Phone System"},
            {id:"40",categoryId:"Networking",name:"IP COM"},
            {id:"41",categoryId:"Networking",name:"Ruijie"},
            {id:"42",categoryId:"Security Alarm System",name:"Bluguard Security Alarm System"},
            {id:"43",categoryId:"Security Alarm System",name:"HIKVision Security Alarm System"},
            {id:"44",categoryId:"Security Alarm System",name:"VIVOS Security Alarm System"},
            {id:"45",categoryId:"Security Gate System",name:"Auto Gate"},
            {id:"46",categoryId:"Security Gate System",name:"Parking Barrier Gate"},
            {id:"47",categoryId:"Security Gate System",name:"Turnstile Gate"},
            {id:"48",categoryId:"Smart Door Lock",name:"VLock Smart Door Lock"},
            {id:"49",categoryId:"Smart Door Lock",name:"ZKTeco Smart Lock"},
            {id:"50",categoryId:"Solar System Solution",name:"Reolink Solar Camera"},
            {id:"51",categoryId:"Solar System Solution",name:"VSH Solar Light"},
            {id:"52",categoryId:"Solar System Solution",name:"VSH Solar System Package"},
        ];


        const brand = [
            'Belden',
            'Bluguard',
            'Casa Asia',
            'CyberPower',
            'ahua',
            'Draka',
            'E-jarvis',
            'Ezviz',
            'Fanvil',
            'Hanwha',
            'Imou',
            'IP-COM',
            'OAE',
            'Optic Digital',
            'Ruijie',
            'ViewSonic',
            'Vivos',
            'Vlock',
            'Voom',
            'VSH',
            'WBDP',
            'Reolink',
            'Hikvision',
            'ZKteco',
        ];

      const[Category, setcategory] = useState([]); 
      const[SubCategory, setSubcategory] = useState([]); 
      
      useEffect(()=>{
        setcategory(optionsCategory);
      },[]) 

      const [error,setError] = useState(false);
    
      const navigate = useNavigate();

      const state = {
        file: null,
        base64URL: ""
      };

      const getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            baseURL = reader.result;
            resolve(baseURL);
          };
        });
      };
    
      const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      const handleChangeOne = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileOne(result)
        })
        .catch(err => {
            
        });
      };

      const handleChangeTwo = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileTwo(result)
        })
        .catch(err => {
            
        });
      };

      const handleChangeThree = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileThree(result)
        })
        .catch(err => {
            
        });
      };

      const handleChangeFour = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileFour(result)
        })
        .catch(err => {
            
        });
      };

      const handleChangeFive = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileFive(result)
        })
        .catch(err => {
            
        });
      };
      
      
      const deleteImageOne =  () => {
        setFileOne("")
      }
    
      const deleteImageTwo =  () => {
        setFileTwo("")
      }
    
      const deleteImageThree =  () => {
        setFileThree("")
      }
    
      const deleteImageFour =  () => {
        setFileFour("")
      }
    
      const deleteCatalogue =  () => {
        setFileFive("")
      }

      const handleCategory = (name) => {
        const dt = optionsSubCategory.filter(x => x.categoryId === name);
        setSubcategory(dt);
        product.category=name
      }



    const handleClick = async e => {
        e.preventDefault();
        product.productImageOne=fileOne;
        product.productImageTwo=fileTwo;
        product.productImageThree=fileThree;
        product.productImageFour=fileFour;
        product.productCatalogue=fileFive;
            try {
              await axiosInstance.post("/product/addProduct", product);
            } catch (err) {
              console.log(err);
              setError(true)
            }
        
        Swal.fire({
            title: 'ADD SUCESSFULLY',
            text: "12123",
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
                // navigate("/adminProduct");
            }
            })
        
    }

    const {currentAdmin,adminLogout} = useContext(AuthContext);

    const navigatetohome= () =>{
    navigate('/adminMainPage');
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

    console.log(fileTwo)

    return(

        <div className="editProduct">
        {currentAdmin ? 
      (
        <>
            <section className="EDfirstsection">
                <div className="EDfirstcontainer">
                    <div className="EDcolumn-30 grow" onClick={scrollToTop}>
                        <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                    </div>
                    
                    <div className="EDcolumn-30 right grow" onClick={scrollToTop}>
                        <button className='EDbacktbtn' onClick={() => navigate(-1)}>BACK</button>
                    </div>
                </div>
            </section>

            <section className="EDsecondsection">
                <div className="EDcenter-container">
                    <div className="EDsecondColumn-30 left">
                        <h1 className="EDh1Text">featured image</h1>
                        {fileOne?
                        <img src={xIcon} onClick={deleteImageOne} className='xIconOne grow'/>
                        :
                        null
                        }
                        <img src={fileOne} className='imgstyle'></img><br/><br/>
                        <label for="productImageOne" className="labelButton">
                                Image One
                            <input
                                id="productImageOne"
                                name="productImageOne"
                                className="fileButton"
                                onChange={handleChangeOne}
                                type="file"
                                accept=".jpg, .jpeg, .png"
                            />
                        </label>
                        <br/><br/>
                        <h1 className="EDh1Text">Name</h1>
                        <input type="text" placeholder="Product Name..." className="EDinput" onChange={handleChange} name="productName"/>
                        <h1 className="EDh1Text">Brand</h1>
                        {/* <input type="text" placeholder="Brand..." className="EDinput" onChange={handleChange} name="brand"/> */}
                        <select className="selectStyles" onChange={handleChange} name="brand">
                            <option >Select brand</option>
                            {brand.map((brandoption, index) => {
                                return <option key={index} >
                                    {brandoption}
                                </option>
                            })}
                        </select>
                        <h1 className="EDh1Text">Type</h1>
                        <select className="selectStyles" onChange={handleChange} name="type">
                            <option>Select type</option>
                            {types.map((optionTypes, index) => {
                                return <option key={index} >
                                    {optionTypes}
                                </option>
                            })}
                        </select>
                        <h1 className="EDh1Text">Sub-Type</h1>
                        <select className="selectStyles" onChange={handleChange} name="subType">
                            <option>Select Sub-type</option>
                            {subTypes.map((optionSubTypes, index) => {
                                return <option key={index} >
                                    {optionSubTypes}
                                </option>
                            })}
                        </select>

                        <h1 className="EDh1Text">Product Catalogue</h1>  
                        {fileFive?
                        <img src={xIcon} onClick={deleteCatalogue} className='xIconFive grow'/>
                        :
                        null
                        }
                        <iframe src={fileFive} style={{ width:'250px',height:'370px' }}></iframe>  
                        <label for="productCatalogue" className="labelButtonTwo">
                                Product Catalogue
                            <input
                                id="productCatalogue"
                                name="productCatalogue"
                                className="fileButton"
                                onChange={handleChangeFive}
                                type="file"
                                accept=".pdf"
                            />
                        </label>
                    </div>
                    <div className="EDcolumn left">
                        <h1 className="EDh1Text">images</h1>
                        <div className="imagecontainer">
                        {fileTwo?
                        <img src={xIcon} onClick={deleteImageTwo} className='xIconTwo grow'/>
                        :
                        null
                        }
                        {fileThree?
                        <img src={xIcon} onClick={deleteImageThree} className='xIconThree grow'/>
                        :
                        null
                        }
                        {fileFour?
                        <img src={xIcon} onClick={deleteImageFour} className='xIconFour grow'/>
                        :
                        null
                        }
                            <img src={fileTwo} className='otherImgstyle'></img>
                            <img src={fileThree} className='otherImgstyle'></img>
                            <img src={fileFour} className='otherImgstyle'></img><br/><br/>
                            <label for="productImageTwo" className="labelButton">
                                Image Two
                            <input
                                id="productImageTwo"
                                name="productImageTwo"
                                className="fileButton"
                                onChange={handleChangeTwo}
                                type="file"
                                accept=".jpg, .jpeg, .png, .webp, .jfif"
                            />
                            </label>
                            <label for="productImageThree" className="labelButton">
                                Image Three
                            <input
                                id="productImageThree"
                                name="productImageThree"
                                className="fileButton"
                                onChange={handleChangeThree}
                                type="file"
                                accept=".jpg, .jpeg, .png, .webp, .jfif"
                            />
                            </label>
                            <label for="productImageFour" className="labelButton">
                                Image Four
                            <input
                                id="productImageFour"
                                name="productImageFour"
                                className="fileButton"
                                onChange={handleChangeFour}
                                type="file"
                                accept=".jpg, .jpeg, .png, .webp, .jfif"
                            />
                            </label>
                            <br/><br/>
                            {/* <label>pdf</label>
                            <input
                                name="productCatalogue"
                                className="input-text js-input"
                                style={{marginTop:'1rem'}}
                                onChange={handleChangeFive}
                                type="file"
                            /> */}
                        </div>
                        <h1 className="EDh1Text">Categories</h1>
                        <select className="selectStyles" onChange= {e => {handleCategory(e.target.value)}} name="category"> 
                            <option value="">Please choose one option</option>
                            {
                                Category && 
                                Category !== undefined ?
                                Category.map((optionCat,index) => {
                                    return(
                                        <option key={index} value={optionCat.name}>{optionCat.name}</option>
                                    )
                                })
                                : "No Category"
                            }
                        </select>
                        <h1 className="EDh1Text">Sub-Categories</h1>
                        <select className="selectStyles" onChange={handleChange} name="subCategory">
                            <option value="">Select Sub-Categories</option>
                                {
                                    SubCategory && 
                                    SubCategory !== undefined ?
                                    SubCategory.map((optionsubCat,index) => {
                                        return(
                                            <option key={index} value={optionsubCat.name}>{optionsubCat.name}</option>
                                        )
                                    })
                                    : "No Sub-Category"
                                }
                        </select>
                        <h1 className="EDh1Text">Description</h1>
                        <textarea rows="3" cols="75" placeholder="Desc..." className="EDinput" onChange={handleChange} name="productDescription"/>
                        <h1 className="EDh1Text">Spec (use "," to seperate)</h1>
                        <textarea rows="3" cols="75" placeholder="Spec..." className="EDinput" onChange={handleChange} name="productSpec"/>
                    </div>
                </div>
            </section>

            <section className="EDthirdsection">
                <button className='EDbacktbtn grow' onClick={handleClick}>ADD</button>
            </section>
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