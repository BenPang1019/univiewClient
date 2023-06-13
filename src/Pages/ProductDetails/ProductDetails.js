import React, { useState,useEffect } from 'react'
import {useLocation,useParams} from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css'
import Stars from '../../Images/Stars.svg'

import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {motion} from "framer-motion"

export const ProductDetails = () => {
  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });

  const [active,setActive] = useState('first');
  const location = useLocation();

  const [productdata, setproductdata] = useState([])
  const [description, setDescription] = useState([])
  const productId=location.state.product.id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/product/getProduct/${productId}`);
        setproductdata(res.data);
        const formattedData = res.data.productDescription.split('\\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ));
        setDescription(formattedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className='specP'>-{str.replaceAll('\\n', '')}</p>);
  }

  
  return (
    <motion.div className='productDetails' intial={{ width:1}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
    <Helmet>
      <meta name="author" content="https://wdatechnology.com" />
      <title>Our Product | Uniview Solution Sdn Bhd</title>
      <meta name="title" content="Our Product | Uniview Solution Sdn Bhd" />
      <meta name="description" content="We committed to provide high quality and excellent service in security and surveillance field. " />
      <meta property="og:title" content="Our Product | Uniview Solution Sdn Bhd"/>
      <meta property="og:description" content="We committed to provide high quality and excellent service in security and surveillance field. " /> 
    </Helmet>
    <div className='web'>
        <div className='container'>
        {productdata.productImageTwo || productdata.productImageThree || productdata.productImageFour?
        <div className='containerOne inline' style={{ verticalAlign:'top' }}>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                slidesPerView={1}
                slidesPerGroup={1}
                allowTouchMove={false}
                modules={[Navigation]}
            >
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageOne?productdata.productImageOne:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            {productdata.productImageTwo?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            :
            null
            }
            {productdata.productImageThree?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            {productdata.productImageFour?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            </Swiper>
            <div className='imageContainer'>
            {productdata.productImageTwo?
            <div className='containerOneImgTwo'>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
            </div>
            :
            <div className='containerOneImgTwo' style={{ display:'none' }}>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageThree?
            <div className='containerOneImgThree'>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
            </div>
            :
            <div className='containerOneImgThree' style={{ display:'none' }}>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageFour?
            <div className='containerOneImgFour'>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
            </div>
            :
            <div className='containerOneImgFour' style={{ display:'none' }}>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            </div>
            {productdata.productImageTwo && productdata.productImageThree && productdata.productImageFour?
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            :
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            }
        </div>
        :
        <div className='containerOne inline' style={{ verticalAlign:'top' }}>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                slidesPerView={1}
                slidesPerGroup={1}
                allowTouchMove={false}
                modules={[Navigation]}
            >
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageOne?productdata.productImageOne:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            {productdata.productImageTwo?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            :
            null}
            {productdata.productImageThree?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            {productdata.productImageFour?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            </Swiper>
            <div className='imageContainer'>
            {productdata.productImageTwo?
            <div className='containerOneImgTwo'>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
            </div>
            :
            <div className='containerOneImgTwo' style={{ display:'none' }}>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageThree?
            <div className='containerOneImgThree'>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
            </div>
            :
            <div className='containerOneImgThree' style={{ display:'none' }}>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageFour?
            <div className='containerOneImgFour'>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
            </div>
            :
            <div className='containerOneImgFour' style={{ display:'none' }}>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            </div>
            {productdata.productImageTwo && productdata.productImageThree && productdata.productImageFour?
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            :
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            }
        </div>
        }

        <div className='containerProductDetails inline'>
            <h1 className='containerProductDetailsHOne'>{productdata.productName} </h1>
            <img src={Stars} className="image"/>
            <h1 className='containerProductDetailsHTwo'> </h1>
            {active === "first" &&
            <div>
              <h2 className='containerProductDetailsHThree inline' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Description</h2>
              <h2 className='containerProductDetailsHFour inline' onClick={()=>setActive("two")}>Spec</h2>
              <p className='containerProductDetailsPOne' style={{ overflow:"hidden",overflowY:"scroll" }} >
                {description}
              </p>
            </div>
            }
            {active === "two" &&
            <div>
              <h2 className='containerProductDetailsHThree inline'  onClick={()=>setActive("first")}>Description</h2>
              <h2 className='containerProductDetailsHFour inline' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Spec</h2>
              <p className='containerProductDetailsPOne' style={{ overflow:"hidden",overflowY:"scroll" }} >
                <NewlineText text={productdata.productSpec} />
              </p>
            </div>
            }
            {productdata.productCatalogue?
            <div className='button'>
              <a className='buttonCatalogue' href={productdata.productCatalogue} download>Product Catalogue</a>
            </div>
            :
            null
            }
        </div>
        </div>
      </div>

      <div className='mobile'>
        <div className='container'>
        {productdata.productImageTwo || productdata.productImageThree || productdata.productImageFour?
        <div className='containerOne inline' style={{ verticalAlign:'top' }}>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                slidesPerView={1}
                slidesPerGroup={1}
                allowTouchMove={false}
                modules={[Navigation]}
            >
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageOne?productdata.productImageOne:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            {productdata.productImageTwo?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            :
            null
            }
            {productdata.productImageThree?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            {productdata.productImageFour?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            </Swiper>
            <div className='imageContainer'>
            {productdata.productImageTwo?
            <div className='containerOneImgTwo'>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
            </div>
            :
            <div className='containerOneImgTwo' style={{ display:'none' }}>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageThree?
            <div className='containerOneImgThree'>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
            </div>
            :
            <div className='containerOneImgThree' style={{ display:'none' }}>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageFour?
            <div className='containerOneImgFour'>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
            </div>
            :
            <div className='containerOneImgFour' style={{ display:'none' }}>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            </div>
            {productdata.productImageTwo && productdata.productImageThree && productdata.productImageFour?
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            :
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            }
        </div>
        :
        <div className='containerOne inline' style={{ verticalAlign:'top' }}>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                slidesPerView={1}
                slidesPerGroup={1}
                allowTouchMove={false}
                modules={[Navigation]}
            >
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageOne?productdata.productImageOne:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            {productdata.productImageTwo?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            :
            null}
            {productdata.productImageThree?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            {productdata.productImageFour?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            </Swiper>
            <div className='imageContainer'>
            {productdata.productImageTwo?
            <div className='containerOneImgTwo'>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image"/>
            </div>
            :
            <div className='containerOneImgTwo' style={{ display:'none' }}>
              <img src={productdata.productImageTwo?productdata.productImageTwo:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageThree?
            <div className='containerOneImgThree'>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image"/>
            </div>
            :
            <div className='containerOneImgThree' style={{ display:'none' }}>
              <img src={productdata.productImageThree?productdata.productImageThree:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {productdata.productImageFour?
            <div className='containerOneImgFour'>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image"/>
            </div>
            :
            <div className='containerOneImgFour' style={{ display:'none' }}>
              <img src={productdata.productImageFour?productdata.productImageFour:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            </div>
            {productdata.productImageTwo && productdata.productImageThree && productdata.productImageFour?
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            :
            <div className='containerOneCategory'>
                <h1>#{productdata.category}</h1>
                <h1>#{productdata.subCategory}</h1>
            </div>
            }
        </div>
        }

        <div className='containerProductDetails inline'>
            <h1 className='containerProductDetailsHOne'>{productdata.productName} </h1>
            <img src={Stars} className="image"/>
            <h1 className='containerProductDetailsHTwo'> </h1>
            {active === "first" &&
            <div>
              <h2 className='containerProductDetailsHThree inline' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Description</h2>
              <h2 className='containerProductDetailsHFour inline' onClick={()=>setActive("two")}>Spec</h2>
              <p className='containerProductDetailsPOne' style={{ overflow:"hidden",overflowY:"scroll" }} >
                {description}
              </p>
            </div>
            }
            {active === "two" &&
            <div>
              <h2 className='containerProductDetailsHThree inline'  onClick={()=>setActive("first")}>Description</h2>
              <h2 className='containerProductDetailsHFour inline' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Spec</h2>
              <p className='containerProductDetailsPOne' style={{ overflow:"hidden",overflowY:"scroll" }} >
                <NewlineText text={productdata.productSpec} />
              </p>
            </div>
            }
            {productdata.productCatalogue?
            <div className='button'>
              <a className='buttonCatalogue' href={productdata.productCatalogue} download>Product Catalogue</a>
            </div>
            :
            null
            }
        </div>
        </div>
      </div>
    </motion.div>
  )
}

