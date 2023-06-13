import React,{useState,useEffect} from 'react'

import {useLocation} from 'react-router-dom';
import '../BlogDetails/BlogDetails.css'
import axios from 'axios';
import {motion} from "framer-motion"

import moment from 'moment'

export const BlogDetails = () => {

    const location = useLocation();

    const axiosInstance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
      });

    const [productdata, setproductdata] = useState([])
    const productId=location.state.data.id

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axiosInstance.get(`/product/getBlog/${productId}`);
            setproductdata(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);
    
    
    return(
        <motion.div className='blogDetails' intial={{ width:1}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>

                <img src={productdata.image} className="newsImage" />

                <div className='containerOne'>
                    <h3 className='containerOneHOne'>{moment(productdata.created_at).format('DD.MM.YYYY')}</h3>
                    <h1 className='containerOneHTwo'>{productdata.title}</h1>
                    <h3 className='containerOneHThree'>By {productdata.postBy}</h3>
                </div>

                <div className='containerTwo'>
                    <p className='description'>{productdata.description}</p>
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <h3 className='containerOneHOne'>{moment(productdata.created_at).format('DD.MM.YYYY')}</h3>
                    <h1 className='containerOneHTwo'>{productdata.title}</h1>
                    <h3 className='containerOneHThree'>By {productdata.postBy}</h3>
                </div>

                <div className=''>
                    <img src={productdata.image} className="newsImage" />
                </div>

                <div className='containerTwo'>
                    <p className='description'>{productdata.description}</p>
                </div>
            </div>
        </motion.div>
    )
}