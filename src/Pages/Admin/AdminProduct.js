import React, { useEffect, useState,useContext} from "react";
import menu from "../../Images/Menu.svg"
import home from "../../Images/Home.svg"
import profile from '../../Images/Profile.svg'
import add from '../../Images/Add.svg'
import edit from '../../Images/Edit.svg'
import searchLogo from '../../Images/searchLogo.svg'
import filter from '../../Images/Filter.svg'
import flower from '../../Images/Flower.jpg'
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'
import ReactPaginate from "react-paginate";
import '../Admin/AdminProduct.css'
import { Link,useNavigate,createSearchParams } from 'react-router-dom'

import axios from 'axios'
import { AuthContext } from "../../Context/AuthContext";

import Swal from 'sweetalert2'

export const AdminProduct = () => {

    const [product, setProduct] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)
    const [searchTerm, setSearchTerm] = useState("");

    const {currentAdmin} = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/product/getProducts"); 
              console.log(res)
              setProduct(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
    }, []);

    const handleDelete = async (id)=>{
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
              axios.delete(`/product/deleteProduct/${id}`);
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
                    window.location.reload()
                  }
                })
          }
          })
    
      };

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

    const productPerPage = 9
    const pagesVisited = pageNumber * productPerPage

    const displayProduct = product
        .filter((product)=>{
            if (searchTerm == ""){
                return product
            }else if(product.productName.replaceAll(/\s/g,'').toLowerCase().includes(searchTerm.toLowerCase().replaceAll(/\s/g,''))){
                return product
            }
        })
        .slice(pagesVisited,pagesVisited + productPerPage)
        .map(product => {
        return(
            <div className="card_container" key={product.id}>
                    <p className="productcodeText">{product.id}</p>
                    <img src={product.productImageOne?product.productImageOne:null} className='imgstyle'></img>
                    <p className="productText">{product.productName}</p>
                    <div className="col-container">
                        <Link to={`/viewProduct`} state={{ product:product }} onClick={scrollToTop}><iconbutton><img src={eye} className='grow'/></iconbutton></Link>
                        <Link to={`/updateProduct`} state={{ product:product }} onClick={scrollToTop}><iconbutton><img src={pencel} className='grow'/></iconbutton></Link>
                        <iconbutton onClick={() => handleDelete(product.id)}><img src={dele} className='grow'/></iconbutton> 
                    </div>
            </div>    
        )
    })

    const pageCount = Math.ceil(product.length/ productPerPage)

    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }

    const navigate = useNavigate();

    const navigatetohome= () =>{
        navigate('/adminMainPage');
    };

    const navigatetoadd= () =>{
        navigate('/addProduct');
    };

    

    return(

        <div className="adminProduct">
        {currentAdmin ? 
      (
        <>
            <section className="APfirstsection">
                <div className="APfirstcontainer">
                    <iconbutton onClick={navigatetohome}><img src={home} className="grow"/></iconbutton>
                    <button className='backtbtn grow' onClick={() => navigate(-1)}>BACK</button>
                </div>
            </section>

            <section className='APsecondsection'>
                <div className='APcenter-container'>
                    <div className='APcontainer-2'>
                        <img src={flower} className='imgstyle'></img>
                        <div className='col-secondcontainer'>
                            <h1 className="h1Text">Products</h1>
                            <p className='APwebtext'>manage and add new product here</p>
                        </div>
                        <iconbutton><img src={edit} className='editbtn grow'/></iconbutton>
                        <iconbutton onClick={navigatetoadd}><img src={add} className='APaddbtn grow'/></iconbutton>
                    </div>
                </div>
            </section>

            <section className='APthirdsection'>
                <div className='APthirdcontainer'>
                    <input className='APsearchinput' type='text' placeholder='SEARCH PRODUCT...' onChange={event => {setSearchTerm(event.target.value)}}></input>
                    <iconbutton><img src={searchLogo} className='btn grow'/></iconbutton>
                    <iconbutton><img src={filter} className='btn grow'/></iconbutton>
                </div>
            </section>

            <div className='productContainer'>
                        {displayProduct}
            </div>
                
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                breakLabel="..."
                pageRangeDisplayed={5}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                breakClassName={"break"}
                pageClassName={"pageItem"} //li
                pageLinkClassName={"pageLink"} //a
                activeLinkClassName={"pageLinkActive"}
            />
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