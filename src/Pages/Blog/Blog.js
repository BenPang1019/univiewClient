import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Blog/Blog.css'
import {motion} from "framer-motion"
import axios from 'axios'

export const Blog = () => {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});
  
    const [data,setData] = useState([])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setisLoading] = useState(false);

  
    useEffect(() => {
      fetchProducts();
    }, [currentPage]);
  
    const fetchProducts = async () => {
      setisLoading(true)
      try {
        const response = await axiosInstance.get("/product/getBlogs", {
          params: {
            limit:12,
            page: currentPage,
          },
        });
        setData(response.data);
        setisLoading(false)
      } catch (error) {
        console.log(error);
        setisLoading(false)
      }
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      setTimeout(() => {
        window.scrollTo(0, 900);
      }, 1500);
    };

  
    useEffect(() => {
      fetchTotalPages();
    }, []);
  
    const fetchTotalPages = async () => {
      try {
        const response = await axiosInstance.get("/product/getBlogsTotalPages", {
          params: {
            limit:12,
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

  

    const displayNews = data
    .map(data => {
        return(
            <div class="inline" key={data.id}>
                <div className='containerOneCard'>
                    <Link to='/blogDetails' state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><img src={data.image} className="image"/></Link>
                    <Link to='/blogDetails' state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><p className='containerOnePrg'>{data.title}</p></Link>
                </div>
            </div>
        )
    })

    return(
        <motion.div className='blog' >
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHeader'>What’s New?</h1>
                    <div className='newsContainer'>
                            {displayNews } 
                    </div>
                    <div className="pagination">
                        {renderPageNumbers()}
                    </div> 
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneHeader'>What’s New?</h1>
                        <div className='newsContainer'>
                            {displayNews } 
                        </div>
                        <div className="pagination">
                            {renderPageNumbers()}
                        </div> 
                </div>
            </div>
        </motion.div>
    )
}