import React ,{useState,useEffect}from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Bride_collections,Shoe_collections,Groom_collections,Boutique_Products} from './Boutique_data';
import './Boutique.css';
import {useNavigate } from 'react-router-dom';
import {CartPage_NavBar} from './Boutique_ProductPage';



const styles={
    cards:{
      width:'100px'
    },
    img:
    {
      width:'100%',
    }
}
const Groom_Bride_collection=()=>{

  const navigate =useNavigate();

  const arrowStyle = {
    background: "#fff",
    border: 0,
    color: "red",
  };
  const CustomRight = ({ onClick }) => (
    <button className="boutique_arrow right" onClick={onClick} style={arrowStyle}>
      <ArrowForwardIcon style={{ fontSize: "25px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="boutique_arrow left" onClick={onClick} style={arrowStyle}>
      <ArrowBackIcon style={{ fontSize: "25px" }} />
    </button>
  );


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1500, min: 992},
      items: 5
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };  
return(
  <>
   {/* ***********************************************   BRIDE COLLECTIONS  ********************************************* */}

   <div className="container-fluid my-5 px-5" id="bride_collections">   
            <div id="bride_collections_title"className="col-12 col-md-12">
                <h4>Bride Collections </h4>
            </div>        
              <Carousel responsive={responsive} customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                          {Bride_collections.map((item)=>(
                              <div>
                                    <div className="card mx-1">
                                      <div className="mx-2" id="bride_collections-card">
                                      <img src={item.image} className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                             <h5 className="card-title">{item.name}</h5>
                                             <h6 className="card-price"><span>&#8377;</span>{item.price}</h6>
                                             <button className="" id="top_collections_btn" onClick={()=>navigate(`/planpackage/boutique/top_bride_productpage/${item.id}`)}>Add to Cart </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>                                   
                          ))}
              </Carousel>  
          </div> 
        {/* ***********************************************   GROOM COLLECTIONS  ********************************************* */}

          <div className="container-fluid px-5" id="groom_collections">
                <div id="groom_collections_title" className="col-12 col-md-12">
                      <h4> Groom Collections </h4>
                </div>
                  <Carousel responsive={responsive}  customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                      {Groom_collections.map((item)=>(
                          <div className="card mx-1">
                              <div className="mx-2" id="groom_collections-card">
                              <img src={item.image} className="card-img-top" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title">{item.name}</h5>
                                      <h6 className="card-price"><span>&#8377;</span>{item.price}</h6>
                                      <button className="" id="groom_collections-btn" onClick={()=>navigate(`/planpackage/boutique/top_groom_productpage/${item.id}`)}>Add to Cart </button>
                                  </div>
                              </div>
                          </div>

                      ))}
                      </Carousel>
          </div>
  </>

)
}
const Shoe_collection=()=>{
  const navigate =useNavigate();

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  arrows:false,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

return(
  <>
   <div className="container">
              <div id="shoe_collections" className="row my-5">
                   <div className="col-10 col-xl-3 col-md-4 col-sm-6 mx-auto mx-md-3" id="shoe_collections_title">
                   <h4> Shoe Collections </h4>
                   </div>
                      <Slider {...settings}>
                          {Shoe_collections.map((item)=>(
                              <div>
                                  <div className="mx-2" id="shoe_collections-card">
                                  <img src={item.image} height={240} className="card-img-top" alt="..."/>
                                      <div className="card-body">
                                      <h5 className="card-title p-1">{item.name.substring(0,15).concat("...")}</h5> 

                                          <div className="d-flex justify-content-between">
                                                <h6 className="card-price col-7"><span>&#8377;</span>{item.price}</h6>
                                                <button className="text-right col-5" id="shoe_collections_btn"
                                                onClick={()=>navigate(`/planpackage/boutique/shoe_productpage/${item.id}`)}>Add to Cart </button>

                                          </div>
                                      </div>
                                  </div>
                              </div>

                          ))}
                      </Slider>
              </div>
       </div>
  </>

)
}

<CartPage_NavBar/>

const Boutique_main=({addtoCart})=>{       
    
    const navigate =useNavigate();

     
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(Boutique_Products);

    const [noOfElement,setnoOfElement]=useState(12);
    const slice=filteredItems.slice(0,noOfElement);
    const loadmore=()=>{
      setnoOfElement(noOfElement+4);
    }
   
    let filters=["Anarkali","PattuSaree","Saree","Anarkali_Serwani","Dhorti_Serwani","Jodhpuri_Suits","Kurta","Serwani"]
    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

useEffect(() => {
  filterItems();
}, [selectedFilters]);

 
const filterItems = () => {
  if (selectedFilters.length > 0) {
    let tempItems = selectedFilters.map((selectedCategory) => {
      let temp = Boutique_Products.filter((item) => item.categroies === selectedCategory);

      return temp;
    });


    setFilteredItems(tempItems.flat());
  }
   else {
    setFilteredItems([...Boutique_Products]);
  }
};

    return(
      <div id="boutique_page">
          <Groom_Bride_collection/>       
        {/* **********************************************TOP CATEGROIES ********************************************** */}
<div className="container">
    <div className="col-12" id="boutique_categroies">
        <div className=" my-3 px-2" id="boutique_categroies_title">
            <h3 className="my-5">Top Categories</h3>
        </div>
          {filters.map((categrory, idx) => (
              <button id="btn"
                onClick={() => handleFilterButtonClick(categrory)}
                className={`button ${selectedFilters?.includes(categrory)?"active1" : ""}`}
                key={`filters-${idx}`}
              >
                {categrory}
              </button>
        ))}
    </div>
</div>
             
        {/* ***********************************************   BOUTIQUE  FILTER ********************************************* */}
              <div className="row">
                    <div className="col-xl-2 col-md-3 col-12" id="filter">
                        <div className="container-fluid">
                        {/* <div id="pricefilter" className="col-sm-4 col-md-12">
                                    <h5 id="title">Price</h5>
                                      <ul className="" id="price">
                                          <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 5K to 15K</li>
                                          <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 16k to 30K </li>
                                          <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 30K to 60K </li>
                                          <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> 60K to 100K </li>
                                          <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..."/> Above 100K</li>
                                        </ul>
                                        <hr/>
                                  </div> */}
                              </div>
                    </div>
        {/*      ************************************     PRODUCTS DETAILS  *************************************************/}
              <div className="col-xl-10 col-md-9 col-12" id="Boutique_Products">
                  <div className="row" id="boutiquecard">
                      {slice.map((item1,idx)=>(
                              <div key={item1.id} className="col-xl-3 col-sm-6 col-12">
                                  <div className="card mx-1 my-3 cursor-pointer">
                                  <img src={item1.images} className="card-img-top" alt="..." role="button" onClick={()=>navigate(`/planpackage/boutique/productpage/${item1.id}`)}/>
                                          <div className="card-body">
                                              <h5 className="card-title">{item1.name.substring(0,20).concat("...")}</h5>
                                              <div className="">
                                                    <span  id="price" className="">&#8377;{item1.price.substring(0,2)+","+item1.price.substring(2)} </span>
                                                    <button  className="" onClick={()=>addtoCart(item1)}>Booking Now</button>
                                              </div>
                                          </div>
                                  </div>
                              </div>
                      ))}
                  </div>
                  
                        <div className="text-center">
                            <button className="col-6 mt-5" id="loadmore" onClick={()=>loadmore()}> Load More...</button>
                        </div>
              </div>

        </div>

          <Shoe_collection/>
     
    </div>

      
  )
}
export default Boutique_main;
