import React, { useState,useEffect,useMemo,useDeferredValue } from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios';
import './Product.css'
import PopularOne from '../../Images/PopularOne.svg'
import { Link,useLocation } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import ReactPaginate from "react-paginate";
import { Helmet } from 'react-helmet';
import {motion} from "framer-motion"


export const Product = () =>{
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});
    const location = useLocation();
  
    const [active1,setActive1] = useState(false)
    const [active2,setActive2] = useState(false)
    const [active3,setActive3] = useState(false)
    const [active4,setActive4] = useState(false)
    const [active5,setActive5] = useState(false)
    const [active6,setActive6] = useState(false)
    const [active7,setActive7] = useState(false)
    const [active8,setActive8] = useState(false)
    const [active9,setActive9] = useState(false)
    const [active10,setActive10] = useState(false)
    const [active11,setActive11] = useState(false)
    const [activeCategory,setActiveCategory] = useState(false)
    const [activeBrand,setActiveBrand] = useState(false)
    const [activeType,setActiveType] = useState(false)
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState(location.state?location.state.product.category:"");
    const [subcategory, setSubcategory] = useState("");
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    useEffect(() => {
      fetchProducts();
    }, [currentPage, category, subcategory, type, brand, search]);
  
    const fetchProducts = async () => {
      setisLoading(true)
      try {
        const response = await axiosInstance.get("/product/getProducts", {
          params: {
            limit:12,
            page: currentPage,
            category: category,
            subcategory: subcategory,
            type: type,
            brand: brand,
            search: search,
          },
        });
        setProducts(response.data);
        setisLoading(false)
      } catch (error) {
        console.log(error);
        setisLoading(false)
      }
    };
  
    const handleCategoryChange = (event,name) => {
      setCategory(event.target.value);
      setCurrentPage(1);
    };
  
    const handleSubcategoryChange = (event) => {
      setSubcategory(event.target.value);
      setCurrentPage(1);
    };
  
    const handleTypeChange = (event) => {
      setType(event.target.value);
      setCurrentPage(1);
    };
  
    const handleBrandChange = (event) => {
      setBrand(event.target.value);
      setCurrentPage(1);
    };
  
    const handleSearchChange = (event) => {
      setSearch(event.target.value);
      setCurrentPage(1);
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      setTimeout(() => {
        window.scrollTo(0, 900);
      }, 1500);
    };

  
    useEffect(() => {
      fetchTotalPages();
    }, [category, subcategory, type, brand, search]);
  
    const fetchTotalPages = async () => {
      try {
        const response = await axiosInstance.get("/product/getProductsTotalPages", {
          params: {
            limit:12,
            category: category,
            subcategory: subcategory,
            type: type,
            brand: brand,
            search: search,
          },
        }); 
        setTotalPages(response.data.totalPages);
        setisLoading(true)
      } catch (error) {
        console.log(error);
      }
    };
  
    const renderPageNumbers = () => {
      const pageNumbers = [];
      let startPage = 1;
      let endPage = Math.min(totalPages, 10);
    
      if (currentPage > 6) {
        startPage = currentPage - 5;
        endPage = Math.min(currentPage + 4, totalPages);
      }
    
      if (endPage - startPage < 9 && endPage < totalPages) {
        endPage = Math.min(startPage + 9, totalPages);
        if (endPage - startPage < 9) {
          startPage = Math.max(endPage - 9, 1);
        }
      }
    
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={currentPage === i ? "active" : ""}
            onClick={() => {handlePageChange(i)  }}
          >
            {i}
          </li>
        );
      }
    
      if (startPage > 1) {
        pageNumbers.unshift(
          <li key="ellipsis-start" className="ellipsis">
            ...
          </li>
        );
        pageNumbers.unshift(
          <li
            key={1}
            className={currentPage === 1 ? "active" : ""}
            onClick={() => {handlePageChange(1) }}
          >
            1
          </li>
        );
      }
    
      if (endPage < totalPages) {
        pageNumbers.push(
          <li key="ellipsis-end" className="ellipsis">
            ...
          </li>
        );
        pageNumbers.push(
          <li
            key={totalPages}
            className={currentPage === totalPages ? "active" : ""}
            onClick={() => {handlePageChange(totalPages)  }}
          >
            {totalPages}
          </li>
        );
      }
    
      return pageNumbers;
    };

    const displayProduct = products
    .map(products => {
        return(
            <div className='imageContainer grow' key={products.id} >
                <Link style={{ textDecoration:'none' }} to="/productsDetails" state={{ product:products }} onClick={scrollToTop}><img src={products.productImageOne?products.productImageOne:null} className="image"/></Link>

                <div className='productName'>
                <Link style={{ textDecoration:'none' }} to="/productsDetails" state={{ product:products }} onClick={scrollToTop}>{products.productName?products.productName:null}</Link>
                </div>
            </div>   
        )
    })

    const handleSearch = () => {
      setSearch(document.getElementById("search-input").value);
    }

    const handleSearchF = (event) => {
      event.preventDefault(); // prevent page from reloading
      setSearch(event.target.search.value);
    }


    return(
        <motion.div className='product' >
        <Helmet>
          <meta name="author" content="https://wdatechnology.com" />
          <title>Our Product | Uniview Solution Sdn Bhd</title>
          <meta name="title" content="Our Product | Uniview Solution Sdn Bhd" />
          <meta name="description" content="We committed to provide high quality and excellent service in security and surveillance field. " />
          <meta property="og:title" content="Our Product | Uniview Solution Sdn Bhd"/>
          <meta property="og:description" content="We committed to provide high quality and excellent service in security and surveillance field. " /> 
        </Helmet>

            <div className='web'>
              <div className='filterContainer'>
                  <h1 className='filterHOne'>Browse By</h1>
                  <input className='filterInput' type="text" id="search-input"></input>
                  <div className='filterButtonSearchContainer'>
                  <button className='filterSearchButton' onClick={handleSearch}>Search</button>
                  </div>
                  <div className='filterButtonClearContainer'>
                  <button className='filterClearButton' onClick={() => {setCategory("");setSubcategory("");setType("");setBrand("");setSearch("");document.getElementById("search-input").value = "";fetchProducts();}}>Clear All</button>
                  </div>
                  <div className='containerCategory'>
                    <h3 className='containerCategoryH'>Categories</h3>
                    <div className='containerInputCategory'>
                    <div className='inline categoryUl'>
                      <input type="radio" name='category' value="Access Control System" checked={category === "Access Control System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive1(!active1)}} style={{ cursor:'pointer' }}>Access Control System +</label><br/>
                      {active1 &&
                        <div className='contaierSubCategory'>
                          <input type="radio" name="subCat" value="Hikvision Access Control System" checked={subcategory === "Hikvision Access Control System"} onChange={handleSubcategoryChange}/><label>Hikvision Access Control System</label><br/>
                          <input type="radio" name="subCat" value="OEM Access Control System" checked={subcategory === "OEM Access Control System"} onChange={handleSubcategoryChange}/><label>OEM Access Control System</label><br/>
                          <input type="radio" name="subCat" value="ZKTeco" checked={subcategory === "ZKTeco"} onChange={handleSubcategoryChange}/><label>ZKTeco</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Accessories" checked={category === "Accessories"} onChange={handleCategoryChange}/><label onClick={()=>{setActive2(!active2)}} style={{ cursor:'pointer' }}>Accessories +</label><br/>
                      {active2 &&
                        <div className='contaierSubCategory'>
                          <input type="radio" name="subCat" value="Access Control Accessories" checked={subcategory === "Access Control Accessories"} onChange={handleSubcategoryChange}/><label>Access Control Accessories</label><br/>
                          <input type="radio" name="subCat" value="Alarm Accessories" checked={subcategory === "Alarm Accessories"} onChange={handleSubcategoryChange}/><label>Alarm Accessories</label><br/>
                          <input type="radio" name="subCat" value="Auto Door Accessories" checked={subcategory === "Auto Door Accessories"} onChange={handleSubcategoryChange}/><label>Auto Door Accessories</label><br/>
                          <input type="radio" name="subCat" value="BNC Connector" checked={subcategory === "BNC Connector"} onChange={handleSubcategoryChange}/><label>BNC Connector</label><br/>
                          <input type="radio" name="subCat" value="Cabling Solution" checked={subcategory === "Cabling Solution"} onChange={handleSubcategoryChange}/><label>Cabling Solution</label><br/>
                          <input type="radio" name="subCat" value="CCTV Bracket" checked={subcategory === "CCTV Bracket"} onChange={handleSubcategoryChange}/><label>CCTV Bracket</label><br/>
                          <input type="radio" name="subCat" value="CCTV Camera Accessories" checked={subcategory === "CCTV Camera Accessories"} onChange={handleSubcategoryChange}/><label>CCTV Camera Accessories</label><br/>
                          <input type="radio" name="subCat" value="CCTV Tester" checked={subcategory === "CCTV Tester"} onChange={handleSubcategoryChange}/><label>CCTV Tester</label><br/>
                          <input type="radio" name="subCat" value="Fiber Connectors" checked={subcategory === "Fiber Connectors"} onChange={handleSubcategoryChange}/><label>Fiber Connectors</label><br/>
                          <input type="radio" name="subCat" value="Fiber Distribution Boxes" checked={subcategory === "Fiber Distribution Boxes"} onChange={handleSubcategoryChange}/><label>Fiber Distribution Boxes</label><br/>
                          <input type="radio" name="subCat" value="Fiber Distribution Frames" checked={subcategory === "Fiber Distribution Frames"} onChange={handleSubcategoryChange}/><label>Fiber Distribution Frames</label><br/>
                          <input type="radio" name="subCat" value="Fiber Distribution SFP" checked={subcategory === "Fiber Distribution SFP"} onChange={handleSubcategoryChange}/><label>Fiber Distribution SFP</label><br/>
                          <input type="radio" name="subCat" value="Fiber Optic Converter" checked={subcategory === "Fiber Optic Converter"} onChange={handleSubcategoryChange}/><label>Fiber Optic Converter</label><br/>
                          <input type="radio" name="subCat" value="Fiber Patch Cords" checked={subcategory === "Fiber Patch Cords"} onChange={handleSubcategoryChange}/><label>Fiber Patch Cords</label><br/>
                          <input type="radio" name="subCat" value="Fiber Splicing Tools" checked={subcategory === "Fiber Splicing Tools"} onChange={handleSubcategoryChange}/><label>Fiber Splicing Tools</label><br/>
                          <input type="radio" name="subCat" value="HD Fiber Convertor" checked={subcategory === "HD Fiber Convertor"} onChange={handleSubcategoryChange}/><label>HD Fiber Convertor</label><br/>
                          <input type="radio" name="subCat" value="HDMI Cable" checked={subcategory === "HDMI Cable"} onChange={handleSubcategoryChange}/><label>HDMI Cable</label><br/>
                          <input type="radio" name="subCat" value="Keystone Jacks & Face Plates" checked={subcategory === "Keystone Jacks & Face Plates"} onChange={handleSubcategoryChange}/><label>Keystone Jacks & Face Plates</label><br/>
                          <input type="radio" name="subCat" value="Network Patch Panels" checked={subcategory === "Network Patch Panels"} onChange={handleSubcategoryChange}/><label>Network Patch Panels</label><br/>
                          <input type="radio" name="subCat" value="PoE Solution" checked={subcategory === "PoE Solution"} onChange={handleSubcategoryChange}/><label>PoE Solution</label><br/>
                          <input type="radio" name="subCat" value="Power Supply" checked={subcategory === "Power Supply"} onChange={handleSubcategoryChange}/><label>Power Supply</label><br/>
                          <input type="radio" name="subCat" value="Surge Protector" checked={subcategory === "Surge Protector"} onChange={handleSubcategoryChange}/><label>Surge Protector</label><br/>
                          <input type="radio" name="subCat" value="Parking System Accessories" checked={subcategory === "Parking System Accessories"} onChange={handleSubcategoryChange}/><label>Parking System Accessories</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Auto Door System" checked={category === "Auto Door System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive3(!active3)}} style={{ cursor:'pointer' }}>Auto Door System +</label><br/>
                      {active3 &&
                        <div className='contaierSubCategory' style={{ height:'60px' }}>
                          <input type="radio" name="subCat" value="Sliding Auto Door" checked={subcategory === "Sliding Auto Door"} onChange={handleSubcategoryChange}/><label>Sliding Auto Door</label><br/>
                          <input type="radio" name="subCat" value="Swing Door" checked={subcategory === "Swing Door"} onChange={handleSubcategoryChange}/><label>Swing Door</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Backup Battery" checked={category === "Backup Battery"} onChange={handleCategoryChange}/><label>Backup Battery</label><br/>
                      <input type="radio" name='category' value="Card & Weigand Reader" checked={category === "Card & Weigand Reader"} onChange={handleCategoryChange}/><label>Card & Weigand Reader</label><br/>
                      <input type="radio" name='category' value="CCTV Recorders" checked={category === "CCTV Recorders"} onChange={handleCategoryChange}/><label onClick={()=>{setActive4(!active4)}} style={{ cursor:'pointer' }}>CCTV Recorders +</label><br/>
                      {active4 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Dahua DVR NVR Recorders" checked={subcategory === "Dahua DVR NVR Recorders"} onChange={handleSubcategoryChange}/><label>Dahua DVR NVR Recorders</label><br/>
                          <input type="radio" name="subCat" value="Hikvision DVR NVR Recorders" checked={subcategory === "Hikvision DVR NVR Recorders"} onChange={handleSubcategoryChange}/><label>Hikvision DVR NVR Recorders</label><br/>
                          <input type="radio" name="subCat" value="REOLINK NVR Recorder" checked={subcategory === "REOLINK NVR Recorder"} onChange={handleSubcategoryChange}/><label>REOLINK NVR Recorder</label>
                        </div>
                      }
                      <input type="radio" name='category' value="CCTV Security Camera System" checked={category === "CCTV Security Camera System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive5(!active5)}} style={{ cursor:'pointer' }}>CCTV Security Camera System +</label><br/>
                      {active5 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="DAHUA" checked={subcategory === "DAHUA"} onChange={handleSubcategoryChange}/><label>DAHUA</label><br/>
                          <input type="radio" name="subCat" value="EZVIZ" checked={subcategory === "EZVIZ"} onChange={handleSubcategoryChange}/><label>EZVIZ</label><br/>
                          <input type="radio" name="subCat" value="HIKVISION" checked={subcategory === "HIKVISION"} onChange={handleSubcategoryChange}/><label>HIKVISION</label><br/>
                          <input type="radio" name="subCat" value="Wisenet" checked={subcategory === "Wisenet"} onChange={handleSubcategoryChange}/><label>Wisenet</label><br/>
                          <input type="radio" name="subCat" value="IMOU" checked={subcategory === "IMOU"} onChange={handleSubcategoryChange}/><label>IMOU</label><br/>
                          <input type="radio" name="subCat" value="REOLINK" checked={subcategory === "Wisenet"} onChange={handleSubcategoryChange}/><label>REOLINK</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Display Monitor" checked={category === "Display Monitor"} onChange={handleCategoryChange}/><label onClick={()=>{setActive6(!active6)}} style={{ cursor:'pointer' }}>Display Monitor +</label><br/>
                      {active6 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Dahua LCD" checked={subcategory === "Dahua LCD"} onChange={handleSubcategoryChange}/><label>Dahua LCD</label><br/>
                          <input type="radio" name="subCat" value="Dahua Standing Monitor" checked={subcategory === "Dahua Standing Monitor"} onChange={handleSubcategoryChange}/><label>Dahua Standing Monitor</label><br/>
                          <input type="radio" name="subCat" value="ViewSonic Monitor" checked={subcategory === "ViewSonic Monitor"} onChange={handleSubcategoryChange}/><label>ViewSonic Monitor</label><br/>
                          <input type="radio" name="subCat" value="Projector" checked={subcategory === "Projector"} onChange={handleSubcategoryChange}/><label>Projector</label><br/>
                          <input type="radio" name="subCat" value="Smart Interactive Whiteboard" checked={subcategory === "Smart Interactive Whiteboard"} onChange={handleSubcategoryChange}/><label>Smart Interactive Whiteboard</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Draka Cable" checked={category === "Draka Cable"} onChange={handleCategoryChange}/><label>Draka Cable</label><br/>
                      <input type="radio" name='category' value="IP PBX System" checked={category === "IP PBX System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive7(!active7)}} style={{ cursor:'pointer' }}>IP PBX System +</label><br/>
                      {active7 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Fanvil IP PBX Phone" checked={subcategory === "Fanvil IP PBX Phone"} onChange={handleSubcategoryChange}/><label>Fanvil IP PBX Phone</label>
                          <input type="radio" name="subCat" value="Zycoo IP Phone System" checked={subcategory === "Zycoo IP Phone System"} onChange={handleSubcategoryChange}/><label>Zycoo IP Phone System</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Metal Detector" checked={category === "Metal Detector"} onChange={handleCategoryChange}/><label>Metal Detector</label><br/>
                      <input type="radio" name='category' value="Networking" checked={category === "Networking"} onChange={handleCategoryChange}/><label onClick={()=>{setActive8(!active8)}} style={{ cursor:'pointer' }}>Networking +</label><br/>
                      {active8 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="IP COM" checked={subcategory === "IP COM"} onChange={handleSubcategoryChange}/><label>IP COM</label><br/>
                          <input type="radio" name="subCat" value="Ruijie" checked={subcategory === "Ruijie"} onChange={handleSubcategoryChange}/><label>Ruijie</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Security Alarm System" checked={category === "Security Alarm System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive9(!active9)}} style={{ cursor:'pointer' }}>Security Alarm System +</label><br/>
                      {active9 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Auto Gate" checked={subcategory === "Auto Gate"} onChange={handleSubcategoryChange}/><label>Auto Gate</label><br/>
                          <input type="radio" name="subCat" value="Parking Barrier Gate" checked={subcategory === "Parking Barrier Gate"} onChange={handleSubcategoryChange}/><label>Parking Barrier Gate</label><br/>
                          <input type="radio" name="subCat" value="Turnstile Gate" checked={subcategory === "Turnstile Gate"} onChange={handleSubcategoryChange}/><label>Turnstile Gate</label>
                        </div>
                      }
                    </div>
                    <div className='nextRowCategory inline' style={{ verticalAlign:"top" }}>
                      <input type="radio" name='category' value="Security Gate System" checked={category === "Security Gate System"} onChange={handleCategoryChange}/><label>Security Gate System</label><br/>
                      <input type="radio" name='category' value="Server Rack" checked={category === "Server Rack"} onChange={handleCategoryChange}/><label>Server Rack</label><br/>
                      <input type="radio" name='category' value="Smart Door Lock" checked={category === "Smart Door Lock"} onChange={handleCategoryChange}/><label onClick={()=>{setActive10(!active10)}} style={{ cursor:'pointer' }}>Smart Door Lock +</label><br/>
                      {active10 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="VLock Smart Door Lock" checked={subcategory === "VLock Smart Door Lock"} onChange={handleSubcategoryChange}/><label>VLock Smart Door Lock</label><br/>
                          <input type="radio" name="subCat" value="ZKTeco Smart Lock" checked={subcategory === "ZKTeco Smart Lock"} onChange={handleSubcategoryChange}/><label>ZKTeco Smart Lock</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Solar System Solution" checked={category === "Solar System Solution"} onChange={handleCategoryChange}/><label onClick={()=>{setActive11(!active11)}} style={{ cursor:'pointer' }}>Solar System Solution +</label><br/>
                      {active11 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Reolink Solar Camera" checked={subcategory === "Reolink Solar Camera"} onChange={handleSubcategoryChange}/><label>Reolink Solar Camera</label><br/>
                          <input type="radio" name="subCat" value="VSH Solar Light" checked={subcategory === "VSH Solar Light"} onChange={handleSubcategoryChange}/><label>VSH Solar Light</label><br/>
                          <input type="radio" name="subCat" value="VSH Solar System Package" checked={subcategory === "VSH Solar System Package"} onChange={handleSubcategoryChange}/><label>VSH Solar System Package</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Thermal Imaging Camera" checked={category === "Thermal Imaging Camera"} onChange={handleCategoryChange}/><label>Thermal Imaging Camera</label><br/>
                      <input type="radio" name='category' value="Video Intercom" checked={category === "Video Intercom"} onChange={handleCategoryChange}/><label>Video Intercom</label><br/>
                      <input type="radio" name='category' value="Digital Air BnB Door Lock System" checked={category === "Digital Air BnB Door Lock System"} onChange={handleCategoryChange}/><label>Digital Air BnB Door Lock &nbsp;&nbsp;&nbsp;&nbsp;System</label><br/>
                      <input type="radio" name='category' value="Uninterruptible Power Supply" checked={category === "Uninterruptible Power Supply"} onChange={handleCategoryChange}/><label>Uninterruptible Power Supply</label><br/>
                      <input type="radio" name='category' value="Voice Intercom" checked={category === "Voice Intercom"} onChange={handleCategoryChange}/><label>Voice Intercom</label><br/>
                      <input type="radio" name='category' value="Cable & Network Wire" checked={category === "Cable & Network Wire"} onChange={handleCategoryChange}/><label>Cable & Network Wire</label><br/>
                      <input type="radio" name='category' value="Uncategorized" checked={category === "Uncategorized"} onChange={handleCategoryChange}/><label>Uncategorized</label><br/>
                    </div>  
                    </div> 
                  </div>

                  <div className='containerBrand'>
                    <h3 className='containerBrandH'>Brands</h3>
                    <ul className='brandUl'>
                      <input type="radio" name="brand" value="Belden" checked={brand === "Belden"} onChange={handleBrandChange}/><label>Belden</label><br/>
                      <input type="radio" name="brand" value="Bluguard" checked={brand === "Bluguard"} onChange={handleBrandChange}/><label>Bluguard</label><br/>
                      <input type="radio" name="brand" value="Casa Asia" checked={brand === "Casa Asia"} onChange={handleBrandChange}/><label>Casa Asia</label><br/>
                      <input type="radio" name="brand" value="Dahua" checked={brand === "Dahua"} onChange={handleBrandChange}/><label>Dahua</label><br/>
                      <input type="radio" name="brand" value="Draka" checked={brand === "Draka"} onChange={handleBrandChange}/><label>Draka</label><br/>
                      <input type="radio" name="brand" value="E-jarvis" checked={brand === "E-jarvis"} onChange={handleBrandChange}/><label>E-jarvis</label><br/>
                      <input type="radio" name="brand" value="Ezviz" checked={brand === "Ezviz"} onChange={handleBrandChange}/><label>Ezviz</label><br/>
                      <input type="radio" name="brand" value="Fanvil" checked={brand === "Fanvil"} onChange={handleBrandChange}/><label>Fanvil</label><br/>
                      <input type="radio" name="brand" value="Hanwha" checked={brand === "Hanwha"} onChange={handleBrandChange}/><label>Hanwha</label><br/>
                      <input type="radio" name="brand" value="Imou" checked={brand === "Imou"} onChange={handleBrandChange}/><label>Imou</label><br/>
                      <input type="radio" name="brand" value="IP-COM" checked={brand === "IP-COM"} onChange={handleBrandChange}/><label>IP-COM</label><br/>
                      <input type="radio" name="brand" value="OAE" checked={brand === "OAE"} onChange={handleBrandChange}/><label>OAE</label>
                      <div className='nextRowBrand'>
                      <input type="radio" name="brand" value="Optic Digital" checked={brand === "Optic Digital"} onChange={handleBrandChange}/><label>Optic Digital</label><br/>
                      <input type="radio" name="brand" value="Ruijie" checked={brand === "Ruijie"} onChange={handleBrandChange}/><label>Ruijie</label><br/>
                      <input type="radio" name="brand" value="ViewSonic" checked={brand === "ViewSonic"} onChange={handleBrandChange}/><label>ViewSonic</label><br/>
                      <input type="radio" name="brand" value="Vivos" checked={brand === "Vivos"} onChange={handleBrandChange}/><label>Vivos</label><br/>
                      <input type="radio" name="brand" value="Vlock" checked={brand === "Vlock"} onChange={handleBrandChange}/><label>Vlock</label><br/>
                      <input type="radio" name="brand" value="Voom" checked={brand === "Voom"} onChange={handleBrandChange}/><label>Voom</label><br/>
                      <input type="radio" name="brand" value="VSH" checked={brand === "VSH"} onChange={handleBrandChange}/><label>VSH</label><br/>
                      <input type="radio" name="brand" value="WBDP" checked={brand === "WBDP"} onChange={handleBrandChange}/><label>WBDP</label><br/>
                      <input type="radio" name="brand" value="Reolink" checked={brand === "Reolink"} onChange={handleBrandChange}/><label>Reolink</label><br/>
                      <input type="radio" name="brand" value="Hikvision" checked={brand === "Hikvision"} onChange={handleBrandChange}/><label>Hikvision</label><br/>
                      <input type="radio" name="brand" value="ZKteco" checked={brand === "ZKteco"} onChange={handleBrandChange}/><label>ZKteco</label><br/>
                      <input type="radio" name="brand" value="CyberPower" checked={brand === "CyberPower"} onChange={handleBrandChange}/><label>CyberPower</label>
                      </div>
                    </ul>
                  </div>

                  <div className='containerType'>
                    <h3 className='containerTypeH'>Type (CCTV)</h3>
                    <ul className='typeUl'>
                      <input type="radio" name="type" value="Audio" checked={type === "Audio"} onChange={handleTypeChange}/><label>Audio</label><br/>
                      <input type="radio" name="type" value="Cube" checked={type === "Cube"} onChange={handleTypeChange}/><label>Cube</label><br/>
                      <input type="radio" name="type" value="Fish Eye" checked={type === "Fish Eye"} onChange={handleTypeChange}/><label>Fish Eye</label><br/>
                      <input type="radio" name="type" value="Full Color" checked={type === "Full Color"} onChange={handleTypeChange}/><label>Full Color</label><br/>
                      <input type="radio" name="type" value="Normal" checked={type === "Normal"} onChange={handleTypeChange}/><label>Normal</label><br/>
                      <input type="radio" name="type" value="PTZ" checked={type === "PTZ"} onChange={handleTypeChange}/><label>PTZ</label><br/>
                      <input type="radio" name="type" value="Turbo HD ColorVu" checked={type === "Turbo HD ColorVu"} onChange={handleTypeChange}/><label>Turbo HD ColorVu</label><br/>
                      <input type="radio" name="type" value="WIFI" checked={type === "WIFI"} onChange={handleTypeChange}/><label>WIFI</label><br/>
                      <input type="radio" name="type" value="Car Plate Recognition" checked={type === "Car Plate Recognition"} onChange={handleTypeChange}/><label>Car Plate Recognition</label><br/>
                      <input type="radio" name="type" value="PanoVu" checked={type === "PanoVu"} onChange={handleTypeChange}/><label>PanoVu</label><br/>
                      <input type="radio" name="type" value="Pin Hole" checked={type === "Pin Hole"} onChange={handleTypeChange}/><label>Pin Hole</label><br/>
                      <input type="radio" name="type" value="Other" checked={type === "Other"} onChange={handleTypeChange}/><label>Other</label>
                    </ul>
                  </div>
              </div>
              <div>
              </div>

              <div className='productContainer' >
              {isLoading?
              <>
                <h1>Loading</h1>
              </>
              :
              <>
                {displayProduct } 
              </>   
              }
                  
              </div>
              <div className="pagination">
                  {renderPageNumbers()}
              </div>  
            </div>



            <div className='mobile'>
              <div className='filterContainer'>
                  <h1 className='filterHOne'>Browse By</h1>
                  <form onSubmit={handleSearchF}>
                  <input className='filterInput' type="text" id="search-input" name='search'></input>
                  <div className='filterButtonSearchContainer'>
                  <button className='filterSearchButton' type='submit'>Search</button>
                  </div>
                  </form>
                  <div className='filterButtonClearContainer'>
                  <button className='filterClearButton' onClick={() => {setCategory("");setSubcategory("");setType("");setBrand("");setSearch('');fetchProducts();}}>Clear All</button>
                  </div>

                  <div className='containerCategory'>
                    <h3 className='containerCategoryH' onClick={()=>{setActiveCategory(!activeCategory)}} style={{ cursor:'pointer' }}>Categories {activeCategory?<>-</>:<>+</>}</h3>
                    {activeCategory &&
                    <div className='inline categoryUl'>
                      <input type="radio" name='category' value="Access Control System" checked={category === "Access Control System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive1(!active1)}} style={{ cursor:'pointer' }}>Access Control System +</label><br/>
                      {active1 &&
                        <div className='contaierSubCategory'>
                          <input type="radio" name="subCat" value="Hikvision Access Control System" checked={subcategory === "Hikvision Access Control System"} onChange={handleSubcategoryChange}/><label>Hikvision Access Control System</label><br/>
                          <input type="radio" name="subCat" value="OEM Access Control System" checked={subcategory === "OEM Access Control System"} onChange={handleSubcategoryChange}/><label>OEM Access Control System</label><br/>
                          <input type="radio" name="subCat" value="ZKTeco" checked={subcategory === "ZKTeco"} onChange={handleSubcategoryChange}/><label>ZKTeco</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Accessories" checked={category === "Accessories"} onChange={handleCategoryChange}/><label onClick={()=>{setActive2(!active2)}} style={{ cursor:'pointer' }}>Accessories +</label><br/>
                      {active2 &&
                        <div className='contaierSubCategory'>
                          <input type="radio" name="subCat" value="Access Control Accessories" checked={subcategory === "Access Control Accessories"} onChange={handleSubcategoryChange}/><label>Access Control Accessories</label><br/>
                          <input type="radio" name="subCat" value="Alarm Accessories" checked={subcategory === "Alarm Accessories"} onChange={handleSubcategoryChange}/><label>Alarm Accessories</label><br/>
                          <input type="radio" name="subCat" value="Auto Door Accessories" checked={subcategory === "Auto Door Accessories"} onChange={handleSubcategoryChange}/><label>Auto Door Accessories</label><br/>
                          <input type="radio" name="subCat" value="BNC Connector" checked={subcategory === "BNC Connector"} onChange={handleSubcategoryChange}/><label>BNC Connector</label><br/>
                          <input type="radio" name="subCat" value="Cabling Solution" checked={subcategory === "Cabling Solution"} onChange={handleSubcategoryChange}/><label>Cabling Solution</label><br/>
                          <input type="radio" name="subCat" value="CCTV Bracket" checked={subcategory === "CCTV Bracket"} onChange={handleSubcategoryChange}/><label>CCTV Bracket</label><br/>
                          <input type="radio" name="subCat" value="CCTV Camera Accessories" checked={subcategory === "CCTV Camera Accessories"} onChange={handleSubcategoryChange}/><label>CCTV Camera Accessories</label><br/>
                          <input type="radio" name="subCat" value="CCTV Tester" checked={subcategory === "CCTV Tester"} onChange={handleSubcategoryChange}/><label>CCTV Tester</label><br/>
                          <input type="radio" name="subCat" value="Fiber Connectors" checked={subcategory === "Fiber Connectors"} onChange={handleSubcategoryChange}/><label>Fiber Connectors</label><br/>
                          <input type="radio" name="subCat" value="Fiber Distribution Boxes" checked={subcategory === "Fiber Distribution Boxes"} onChange={handleSubcategoryChange}/><label>Fiber Distribution Boxes</label><br/>
                          <input type="radio" name="subCat" value="Fiber Distribution Frames" checked={subcategory === "Fiber Distribution Frames"} onChange={handleSubcategoryChange}/><label>Fiber Distribution Frames</label><br/>
                          <input type="radio" name="subCat" value="Fiber Distribution SFP" checked={subcategory === "Fiber Distribution SFP"} onChange={handleSubcategoryChange}/><label>Fiber Distribution SFP</label><br/>
                          <input type="radio" name="subCat" value="Fiber Optic Converter" checked={subcategory === "Fiber Optic Converter"} onChange={handleSubcategoryChange}/><label>Fiber Optic Converter</label><br/>
                          <input type="radio" name="subCat" value="Fiber Patch Cords" checked={subcategory === "Fiber Patch Cords"} onChange={handleSubcategoryChange}/><label>Fiber Patch Cords</label><br/>
                          <input type="radio" name="subCat" value="Fiber Splicing Tools" checked={subcategory === "Fiber Splicing Tools"} onChange={handleSubcategoryChange}/><label>Fiber Splicing Tools</label><br/>
                          <input type="radio" name="subCat" value="HD Fiber Convertor" checked={subcategory === "HD Fiber Convertor"} onChange={handleSubcategoryChange}/><label>HD Fiber Convertor</label><br/>
                          <input type="radio" name="subCat" value="HDMI Cable" checked={subcategory === "HDMI Cable"} onChange={handleSubcategoryChange}/><label>HDMI Cable</label><br/>
                          <input type="radio" name="subCat" value="Keystone Jacks & Face Plates" checked={subcategory === "Keystone Jacks & Face Plates"} onChange={handleSubcategoryChange}/><label>Keystone Jacks & Face Plates</label><br/>
                          <input type="radio" name="subCat" value="Network Patch Panels" checked={subcategory === "Network Patch Panels"} onChange={handleSubcategoryChange}/><label>Network Patch Panels</label><br/>
                          <input type="radio" name="subCat" value="PoE Solution" checked={subcategory === "PoE Solution"} onChange={handleSubcategoryChange}/><label>PoE Solution</label><br/>
                          <input type="radio" name="subCat" value="Power Supply" checked={subcategory === "Power Supply"} onChange={handleSubcategoryChange}/><label>Power Supply</label><br/>
                          <input type="radio" name="subCat" value="Surge Protector" checked={subcategory === "Surge Protector"} onChange={handleSubcategoryChange}/><label>Surge Protector</label><br/>
                          <input type="radio" name="subCat" value="Parking System Accessories" checked={subcategory === "Parking System Accessories"} onChange={handleSubcategoryChange}/><label>Parking System Accessories</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Auto Door System" checked={category === "Auto Door System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive3(!active3)}} style={{ cursor:'pointer' }}>Auto Door System +</label><br/>
                      {active3 &&
                        <div className='contaierSubCategory' style={{ height:'60px' }}>
                          <input type="radio" name="subCat" value="Sliding Auto Door" checked={subcategory === "Sliding Auto Door"} onChange={handleSubcategoryChange}/><label>Sliding Auto Door</label><br/>
                          <input type="radio" name="subCat" value="Swing Door" checked={subcategory === "Swing Door"} onChange={handleSubcategoryChange}/><label>Swing Door</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Backup Battery" checked={category === "Backup Battery"} onChange={handleCategoryChange}/><label>Backup Battery</label><br/>
                      <input type="radio" name='category' value="Card & Weigand Reader" checked={category === "Card & Weigand Reader"} onChange={handleCategoryChange}/><label>Card & Weigand Reader</label><br/>
                      <input type="radio" name='category' value="CCTV Recorders" checked={category === "CCTV Recorders"} onChange={handleCategoryChange}/><label onClick={()=>{setActive4(!active4)}} style={{ cursor:'pointer' }}>CCTV Recorders +</label><br/>
                      {active4 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Dahua DVR NVR Recorders" checked={subcategory === "Dahua DVR NVR Recorders"} onChange={handleSubcategoryChange}/><label>Dahua DVR NVR Recorders</label><br/>
                          <input type="radio" name="subCat" value="Hikvision DVR NVR Recorders" checked={subcategory === "Hikvision DVR NVR Recorders"} onChange={handleSubcategoryChange}/><label>Hikvision DVR NVR Recorders</label><br/>
                          <input type="radio" name="subCat" value="REOLINK NVR Recorder" checked={subcategory === "REOLINK NVR Recorder"} onChange={handleSubcategoryChange}/><label>REOLINK NVR Recorder</label>
                        </div>
                      }
                      <input type="radio" name='category' value="CCTV Security Camera System" checked={category === "CCTV Security Camera System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive5(!active5)}} style={{ cursor:'pointer' }}>CCTV Security Camera System +</label><br/>
                      {active5 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="DAHUA" checked={subcategory === "DAHUA"} onChange={handleSubcategoryChange}/><label>DAHUA</label><br/>
                          <input type="radio" name="subCat" value="EZVIZ" checked={subcategory === "EZVIZ"} onChange={handleSubcategoryChange}/><label>EZVIZ</label><br/>
                          <input type="radio" name="subCat" value="HIKVISION" checked={subcategory === "HIKVISION"} onChange={handleSubcategoryChange}/><label>HIKVISION</label><br/>
                          <input type="radio" name="subCat" value="Wisenet" checked={subcategory === "Wisenet"} onChange={handleSubcategoryChange}/><label>Wisenet</label><br/>
                          <input type="radio" name="subCat" value="IMOU" checked={subcategory === "IMOU"} onChange={handleSubcategoryChange}/><label>IMOU</label><br/>
                          <input type="radio" name="subCat" value="REOLINK" checked={subcategory === "Wisenet"} onChange={handleSubcategoryChange}/><label>REOLINK</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Display Monitor" checked={category === "Display Monitor"} onChange={handleCategoryChange}/><label onClick={()=>{setActive6(!active6)}} style={{ cursor:'pointer' }}>Display Monitor +</label><br/>
                      {active6 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Dahua LCD" checked={subcategory === "Dahua LCD"} onChange={handleSubcategoryChange}/><label>Dahua LCD</label><br/>
                          <input type="radio" name="subCat" value="Dahua Standing Monitor" checked={subcategory === "Dahua Standing Monitor"} onChange={handleSubcategoryChange}/><label>Dahua Standing Monitor</label><br/>
                          <input type="radio" name="subCat" value="ViewSonic Monitor" checked={subcategory === "ViewSonic Monitor"} onChange={handleSubcategoryChange}/><label>ViewSonic Monitor</label><br/>
                          <input type="radio" name="subCat" value="Projector" checked={subcategory === "Projector"} onChange={handleSubcategoryChange}/><label>Projector</label><br/>
                          <input type="radio" name="subCat" value="Smart Interactive Whiteboard" checked={subcategory === "Smart Interactive Whiteboard"} onChange={handleSubcategoryChange}/><label>Smart Interactive Whiteboard</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Draka Cable" checked={category === "Draka Cable"} onChange={handleCategoryChange}/><label>Draka Cable</label><br/>
                      <input type="radio" name='category' value="IP PBX System" checked={category === "IP PBX System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive7(!active7)}} style={{ cursor:'pointer' }}>IP PBX System +</label><br/>
                      {active7 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Fanvil IP PBX Phone" checked={subcategory === "Fanvil IP PBX Phone"} onChange={handleSubcategoryChange}/><label>Fanvil IP PBX Phone</label><br/>
                          <input type="radio" name="subCat" value="Zycoo IP Phone System" checked={subcategory === "Zycoo IP Phone System"} onChange={handleSubcategoryChange}/><label>Zycoo IP Phone System</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Metal Detector" checked={category === "Metal Detector"} onChange={handleCategoryChange}/><label>Metal Detector</label><br/>
                      <input type="radio" name='category' value="Networking" checked={category === "Networking"} onChange={handleCategoryChange}/><label onClick={()=>{setActive8(!active8)}} style={{ cursor:'pointer' }}>Networking +</label><br/>
                      {active8 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="IP COM" checked={subcategory === "IP COM"} onChange={handleSubcategoryChange}/><label>IP COM</label><br/>
                          <input type="radio" name="subCat" value="Ruijie" checked={subcategory === "Ruijie"} onChange={handleSubcategoryChange}/><label>Ruijie</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Security Alarm System" checked={category === "Security Alarm System"} onChange={handleCategoryChange}/><label onClick={()=>{setActive9(!active9)}} style={{ cursor:'pointer' }}>Security Alarm System +</label><br/>
                      {active9 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Auto Gate" checked={subcategory === "Auto Gate"} onChange={handleSubcategoryChange}/><label>Auto Gate</label><br/>
                          <input type="radio" name="subCat" value="Parking Barrier Gate" checked={subcategory === "Parking Barrier Gate"} onChange={handleSubcategoryChange}/><label>Parking Barrier Gate</label><br/>
                          <input type="radio" name="subCat" value="Turnstile Gate" checked={subcategory === "Turnstile Gate"} onChange={handleSubcategoryChange}/><label>Turnstile Gate</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Security Gate System" checked={category === "Security Gate System"} onChange={handleCategoryChange}/><label>Security Gate System</label><br/>
                      <input type="radio" name='category' value="Server Rack" checked={category === "Server Rack"} onChange={handleCategoryChange}/><label>Server Rack</label><br/>
                      <input type="radio" name='category' value="Smart Door Lock" checked={category === "Smart Door Lock"} onChange={handleCategoryChange}/><label onClick={()=>{setActive10(!active10)}} style={{ cursor:'pointer' }}>Smart Door Lock +</label><br/>
                      {active10 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="VLock Smart Door Lock" checked={subcategory === "VLock Smart Door Lock"} onChange={handleSubcategoryChange}/><label>VLock Smart Door Lock</label><br/>
                          <input type="radio" name="subCat" value="ZKTeco Smart Lock" checked={subcategory === "ZKTeco Smart Lock"} onChange={handleSubcategoryChange}/><label>ZKTeco Smart Lock</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Solar System Solution" checked={category === "Solar System Solution"} onChange={handleCategoryChange}/><label onClick={()=>{setActive11(!active11)}} style={{ cursor:'pointer' }}>Solar System Solution +</label><br/>
                      {active11 &&
                        <div className='contaierSubCategory' style={{ height:'90px' }}>
                          <input type="radio" name="subCat" value="Reolink Solar Camera" checked={subcategory === "Reolink Solar Camera"} onChange={handleSubcategoryChange}/><label>Reolink Solar Camera</label><br/>
                          <input type="radio" name="subCat" value="VSH Solar Light" checked={subcategory === "VSH Solar Light"} onChange={handleSubcategoryChange}/><label>VSH Solar Light</label><br/>
                          <input type="radio" name="subCat" value="VSH Solar System Package" checked={subcategory === "VSH Solar System Package"} onChange={handleSubcategoryChange}/><label>VSH Solar System Package</label>
                        </div>
                      }
                      <input type="radio" name='category' value="Thermal Imaging Camera" checked={category === "Thermal Imaging Camera"} onChange={handleCategoryChange}/><label>Thermal Imaging Camera</label><br/>
                      <input type="radio" name='category' value="Video Intercom" checked={category === "Video Intercom"} onChange={handleCategoryChange}/><label>Video Intercom</label><br/>
                      <input type="radio" name='category' value="Digital Air BnB Door Lock System" checked={category === "Digital Air BnB Door Lock System"} onChange={handleCategoryChange}/><label>Digital Air BnB Door Lock System</label><br/>
                      <input type="radio" name='category' value="Uncategorized" checked={category === "Uncategorized"} onChange={handleCategoryChange}/><label>Uncategorized</label><br/>
                      <input type="radio" name='category' value="Uninterruptible Power Supply" checked={category === "Uninterruptible Power Supply"} onChange={handleCategoryChange}/><label>Uninterruptible Power Supply</label><br/>
                      <input type="radio" name='category' value="Voice Intercom" checked={category === "Voice Intercom"} onChange={handleCategoryChange}/><label>Voice Intercom</label><br/>
                      <input type="radio" name='category' value="Cable & Network Wire" checked={category === "Cable & Network Wire"} onChange={handleCategoryChange}/><label>Cable & Network Wire</label><br/>
                    </div>
                    }
                  </div>

                  <div className='containerBrand'>
                    <h3 className='containerBrandH' onClick={()=>{setActiveBrand(!activeBrand)}}>Brands {activeBrand ? <>-</>:<>+</>}</h3>
                    {activeBrand && 
                    <ul className='brandUl'>
                      <input type="radio" name="brand" value="Belden" checked={brand === "Belden"} onChange={handleBrandChange}/><label>Belden</label><br/>
                      <input type="radio" name="brand" value="Bluguard" checked={brand === "Bluguard"} onChange={handleBrandChange}/><label>Bluguard</label><br/>
                      <input type="radio" name="brand" value="Casa Asia" checked={brand === "Casa Asia"} onChange={handleBrandChange}/><label>Casa Asia</label><br/>
                      <input type="radio" name="brand" value="Dahua" checked={brand === "Dahua"} onChange={handleBrandChange}/><label>Dahua</label><br/>
                      <input type="radio" name="brand" value="Draka" checked={brand === "Draka"} onChange={handleBrandChange}/><label>Draka</label><br/>
                      <input type="radio" name="brand" value="E-jarvis" checked={brand === "E-jarvis"} onChange={handleBrandChange}/><label>E-jarvis</label><br/>
                      <input type="radio" name="brand" value="Ezviz" checked={brand === "Ezviz"} onChange={handleBrandChange}/><label>Ezviz</label><br/>
                      <input type="radio" name="brand" value="Fanvil" checked={brand === "Fanvil"} onChange={handleBrandChange}/><label>Fanvil</label><br/>
                      <input type="radio" name="brand" value="Hanwha" checked={brand === "Hanwha"} onChange={handleBrandChange}/><label>Hanwha</label><br/>
                      <input type="radio" name="brand" value="Imou" checked={brand === "Imou"} onChange={handleBrandChange}/><label>Imou</label><br/>
                      <input type="radio" name="brand" value="IP-COM" checked={brand === "IP-COM"} onChange={handleBrandChange}/><label>IP-COM</label><br/>
                      <input type="radio" name="brand" value="OAE" checked={brand === "OAE"} onChange={handleBrandChange}/><label>OAE</label><br/>
                      <input type="radio" name="brand" value="Optic Digital" checked={brand === "Optic Digital"} onChange={handleBrandChange}/><label>Optic Digital</label><br/>
                      <input type="radio" name="brand" value="Ruijie" checked={brand === "Ruijie"} onChange={handleBrandChange}/><label>Ruijie</label><br/>
                      <input type="radio" name="brand" value="ViewSonic" checked={brand === "ViewSonic"} onChange={handleBrandChange}/><label>ViewSonic</label><br/>
                      <input type="radio" name="brand" value="Vivos" checked={brand === "Vivos"} onChange={handleBrandChange}/><label>Vivos</label><br/>
                      <input type="radio" name="brand" value="Vlock" checked={brand === "Vlock"} onChange={handleBrandChange}/><label>Vlock</label><br/>
                      <input type="radio" name="brand" value="Voom" checked={brand === "Voom"} onChange={handleBrandChange}/><label>Voom</label><br/>
                      <input type="radio" name="brand" value="VSH" checked={brand === "VSH"} onChange={handleBrandChange}/><label>VSH</label><br/>
                      <input type="radio" name="brand" value="WBDP" checked={brand === "WBDP"} onChange={handleBrandChange}/><label>WBDP</label><br/>
                      <input type="radio" name="brand" value="Reolink" checked={brand === "Reolink"} onChange={handleBrandChange}/><label>Reolink</label><br/>
                      <input type="radio" name="brand" value="Hikvision" checked={brand === "Hikvision"} onChange={handleBrandChange}/><label>Hikvision</label><br/>
                      <input type="radio" name="brand" value="ZKteco" checked={brand === "ZKteco"} onChange={handleBrandChange}/><label>ZKteco</label><br/>
                      <input type="radio" name="brand" value="CyberPower" checked={brand === "CyberPower"} onChange={handleBrandChange}/><label>CyberPower</label>
                    </ul>
                    }
                  </div>

                  <div className='containerType'>
                    <h3 className='containerTypeH' onClick={()=>{setActiveType(!activeType)}}>Type (CCTV) {activeType ? <>-</>:<>+</>}</h3>
                    {activeType &&
                    <ul className='typeUl'>
                      <input type="radio" name="type" value="Audio" checked={type === "Audio"} onChange={handleTypeChange}/><label>Audio</label><br/>
                      <input type="radio" name="type" value="Cube" checked={type === "Cube"} onChange={handleTypeChange}/><label>Cube</label><br/>
                      <input type="radio" name="type" value="Fish Eye" checked={type === "Fish Eye"} onChange={handleTypeChange}/><label>Fish Eye</label><br/>
                      <input type="radio" name="type" value="Full Color" checked={type === "Full Color"} onChange={handleTypeChange}/><label>Full Color</label><br/>
                      <input type="radio" name="type" value="Normal" checked={type === "Normal"} onChange={handleTypeChange}/><label>Normal</label><br/>
                      <input type="radio" name="type" value="PTZ" checked={type === "PTZ"} onChange={handleTypeChange}/><label>PTZ</label><br/>
                      <input type="radio" name="type" value="Turbo HD ColorVu" checked={type === "Turbo HD ColorVu"} onChange={handleTypeChange}/><label>Turbo HD ColorVu</label><br/>
                      <input type="radio" name="type" value="WIFI" checked={type === "WIFI"} onChange={handleTypeChange}/><label>WIFI</label><br/>
                      <input type="radio" name="type" value="Car Plate Recognition" checked={type === "Car Plate Recognition"} onChange={handleTypeChange}/><label>Car Plate Recognition</label><br/>
                      <input type="radio" name="type" value="PanoVu" checked={type === "PanoVu"} onChange={handleTypeChange}/><label>PanoVu</label><br/>
                      <input type="radio" name="type" value="Pin Hole" checked={type === "Pin Hole"} onChange={handleTypeChange}/><label>Pin Hole</label><br/>
                      <input type="radio" name="type" value="Other" checked={type === "Other"} onChange={handleTypeChange}/><label>Other</label>
                    </ul>
                  }
                  </div>
              </div>
              <div>
              </div>

              <div className='productContainer' >
              {isLoading?
              <>
                <h1>Loading</h1>
              </>
              :
              <>
                {displayProduct } 
              </>   
              }
                  
              </div>
              <div className="pagination">
                  {renderPageNumbers()}
              </div>  
            </div>               


      </motion.div>
  )
}