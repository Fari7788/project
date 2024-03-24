import React, { useState } from 'react';
import Navbar from './Navbar';
import homeImage from './Plant.jpg';
import './App.css'
import { FaArrowsSplitUpAndLeft, FaPlantWilt } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { IoIosCall } from "react-icons/io"; 
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";





const Home = () => {
  
  return (
    <>
    <section>
      <div className='container-1'>
        <div className='overlay'>
        <div className='text'>
          <div className='welcom'>Welcome to Our Perfect <br></br> Solution Landscape.</div>
          <div className='we'>We are certified company. We provide best<br></br> Landscaping services for you your company .</div>
          <div className='our'>Our Solutions</div>
        </div>

        <div className='circle'></div>
        </div>
      </div>
      </section>
      <section>
<div className='services'>Our Services</div>
<div className='Why'>Why will you choose our<br></br>services?</div>
<div className='box2'>
  <div className='box'>
  <div className='icon'>
</div>
  <div className='color'>Landscape Design
</div>
  <div className='text1' >There are many variations of passages the majority have suffered alteration form</div>
  <div>Read More </div>
</div>
  <div className='box'>
  <div className='icon'>
</div>
  <div className='color'>Landscape Design</div>
  <div className='text1' >There are many variations of passages the majority have suffered alteration form</div>
  <div>Read More </div>
</div>
  <div className='box'>
  <div className='icon'>
</div>
  <div className='color'>Landscape Design</div>
  <div className='text1'>There are many variations of passages the majority have suffered alteration form</div>
  <div>Read More </div>
</div>
  <div className='box'>
  <div className='icon'>
</div>
  <div className='color'>Landscape Design</div>
  <div className='text1'>There are many variations of passages the majority have suffered alteration form</div>
  <div>Read More </div>
</div>


</div>
<div className='box2'>
  <div className='box'>
  <div className='icon'>
</div>
  <div className='color'>Landscape Design
</div>
  <div className='text1' >There are many variations of passages the majority have suffered alteration form</div>
  <div>Read More </div>
</div>
  <div className='box'>
  <div className='icon'>
</div>
  <div className='color'>Landscape Design</div>
  <div className='text1' >There are many variations of passages the majority have suffered alteration form</div>
  <div>Read More </div>
</div>
<div className='box3'>
<div className='icon'>
</div>
  <div className='color1'>We are professional Landscape & Gardening service</div>
  <div className='text1' >Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat omnis voluptas assumenda est, omnis dolor repellendus.</div>
  <div className='apnt'>Appointment</div>
  </div>
</div>
        </section>
        <section1>
          <div className='box4'>
            <div className='boxi'>
            <div className='ser'>Our Service </div>
            <div className='are'>We Are Right Landscape And Gardening <br></br>Experts Since 2000</div>
            <div className='apnt1'>Appointment</div>
            </div>
            <div className='boxi2'>
            <div className='pic'></div>
            <div className='pic1'></div>
              </div>
          </div>
        </section1>
        <section className='service'>
          <div className='image'> 

          </div>
          <div className='box5'>
            <div className='ser'>Services</div>
            <div className='are'>Our Best Landscape Specialists</div>
            <div className='sml-box'>
              <div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 These cases</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 We denounce</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 Nam libero</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 These cases</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 Pursue pleasure</div>
              </div>
              <div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 These cases</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 We denounce</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 Nam libero</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 These cases</div>
                <div style={{marginTop:'20px',marginLeft:'20px'}}><IoIosArrowForward style={{marginRight:10,color:'brown'}}/>
 Pursue pleasure</div>
              </div>
            </div>
          </div>
        </section>

        <div className='box6'>
          <div >
            <h2 style={{fontSize:35,textAlign:'center',fontWeight:'bold',color:'white'}}>5k+</h2>
            <div style={{color:'white',fontSize:25}}>Completed Projects</div>
          </div>
          <div>
          <h2  style={{fontSize:35,textAlign:'center',fontWeight:'bold',color:'white'}}>6k+</h2>
            <div style={{color:'white',fontSize:25}}>Expert Landscape</div>
          </div>
          <div>
          <h2  style={{fontSize:35,textAlign:'center',fontWeight:'bold',color:'white'}}>7k+</h2>
            <div style={{color:'white',fontSize:25}}>Awrds Winning</div>
          </div>
          <div>
          <h2  style={{fontSize:35,textAlign:'center',fontWeight:'bold',color:'white'}}>8k+</h2>
            <div style={{color:'white',fontSize:25}}>Client Satisfaction</div>
          </div>

        </div>
        <section2>
          <div >
            <div className='ser' style ={{textAlign:'center',marginTop:60 }}> Our Service</div>
            <div className='are' style ={{textAlign:'center', marginTop:20 , fontSize:50}}>We have done more than 534+ <br></br>Servicesuccessful projects</div>

          </div>
        </section2>

        <div className='box7'>
          <div className='box8'>
          <div className='image2'>
            <div className='image2lite'></div>
          </div>
          <div className='gar' >Garden Care</div>
          <div className='nam' style={{fontSize:20, marginTop:20,  marginLeft:20 }}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div>

          </div >
          <div className='box8'>
          <div className='image3'><div className='image2lite'></div></div>
          <div className='gar' >Garden Care</div>
          <div className='nam' style={{fontSize:20, marginTop:20,  marginLeft:20}}> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div>
          </div>
          <div className='box8'>
          <div className='image4'> <div className='image2lite'></div></div>
          <div className='gar' >Garden Care</div>
          <div className='nam' style={{fontSize:20, marginTop:20,  marginLeft:20}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div>

          </div>
        </div>
        <div className='pro'>
        <div className='pro2'>More Project</div>
        </div>

        <section3>
          <div className='box9'>
            <div className='box91'>
              <div>
                <div className='why'> Why Choose Us</div>
                <div className='Ex'>Experience the Ultimate Level of <br></br>Landscape Power</div>
              </div>
          </div>
          </div>
          <div className='box10'>
          <div className='box10-lite'>
            <div className='why' style={{marginTop:30}}>Free Estimates</div>
            <div className='The'>There are many variations of passages the majority have suffered alteration form</div>
            <div className='img'></div>
          </div>
          <div className='box10-lite'>
            <div className='why' style={{marginTop:30}}>Free Estimates</div>
            <div className='The'>There are many variations of passages the majority have suffered alteration form</div>
            <div className='img'></div>
          </div>
          <div className='box10-lite'>
            <div className='why' style={{marginTop:30}}>Free Estimates</div>
            <div className='The'>There are many variations of passages the majority have suffered alteration form</div>
            <div className='img'></div>
          </div>
          <div className='box10-lite'>
            <div className='why' style={{marginTop:30}}>Free Estimates</div>
            <div className='The'>There are many variations of passages the majority have suffered alteration form</div>
            <div className='img'></div>
          </div>
          </div>
        </section3>
        <section4>
          <div className='why' style={{position:'relative',bottom:70}}>Happy Customers</div>
          <div className='Ex' style={{position:'relative',bottom:70}}>What Our Customer Says <br></br>About Our Services</div>
          <div style={{display:'flex',justifyContent:'center',placeItems:'center',width:'100vw',marginTop:100,position:'relative',bottom:170}}>
          <div style={{height:500,width:400,backgroundColor:'aliceblue',marginLeft:20,paddingBottom:30,display:'flex',justifyContent:'center',placeItems:'center',flexDirection:'column'}} >
            <div  className='img1' style={{color:'brown',fontSize:15,marginTop:50,textAlign:'center'}}></div>
            <div style={{color:'black',fontSize:25,marginTop:50,textAlign:'center',fontWeight:'bold'}}>Ali</div>
            <div  style={{color:'brown',fontSize:20,marginTop:50,textAlign:'center'}}>CEO</div>
            <div  style={{color:'black',fontSize:17,marginTop:50,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div>
            <div  style={{color:'brown',fontSize:15,marginTop:50,textAlign:'center',fontSize:20}}><FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
</div>

          </div>
          <div style={{height:500,width:400,backgroundColor:'aliceblue',marginLeft:20,paddingBottom:30,display:'flex',justifyContent:'center',placeItems:'center',flexDirection:'column'}} >
          <div className='img1' style={{color:'brown',fontSize:15,marginTop:50,textAlign:'center',height:200}}  ></div>
            <div   style={{color:'black',fontSize:25,marginTop:50,textAlign:'center',fontWeight:'bold'}}>Ahmed</div>
            <div  style={{color:'brown',fontSize:20,marginTop:50,textAlign:'center'}}>CEO</div>
            <div  style={{color:'black',fontSize:17,marginTop:50,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div>
            <div  style={{color:'brown',fontSize:15,marginTop:50,textAlign:'center',fontSize:20}}><FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /></div>
          </div>
          <div style={{height:500,width:400,backgroundColor:'aliceblue',marginLeft:20,paddingBottom:30,display:'flex',justifyContent:'center',placeItems:'center',flexDirection:'column'}} >
          <div className='img1' style={{color:'black',fontSize:15,marginTop:50,textAlign:'center'}}></div>
            <div  style={{color:'black',fontSize:25,marginTop:50,textAlign:'center',fontWeight:'bold'}}>Kashif</div>
            <div  style={{color:'brown',fontSize:20,marginTop:50,textAlign:'center'}}>CEO</div>
            <div  style={{color:'black',fontSize:17,marginTop:50,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div>
            <div  style={{color:'brown',fontSize:15,marginTop:50,textAlign:'center',fontSize:20}}><FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /></div>
          </div>
          </div>
        </section4>
        <section5>
          <div style={{display:'flex'}}>
<div className='box11'>

</div>
<div className="box-12">
<div  className='' style={{marginLeft:60,fontSize:20,color:'brown'}}>
Book an Appoinment
  </div>
  <div  className='' style={{marginLeft:60,fontSize:40,color:'brown',marginTop:50,fontWeight:'bold'}}>
  Get a Free Quote From
Our Experts
  </div>

    <form>
<div>
  <input style={{width:'48%',height:50}} placeholder='Name'></input>
  <input style={{width:'48%',height:50,marginLeft:18}} placeholder='Email'></input>

</div>
<div>
<input style={{width:'99%',height:50,marginTop:30}} placeholder='Phone'></input>

</div>
<div>
<textarea style={{width:'100%',height:150,marginTop:30,background:'aliceblue',border:'none',fontSize:15,fontFamily:'none'}} placeholder='Write here message'></textarea>

</div>
<div>
  <button className='btn'> Send Your Query</button>
</div>
    </form>
</div>
</div>
        </section5>
<section6>
  <div style={{marginTop:100}}>
    <div className='The' style={{border:'none',color:'brown'}}>See How it Works!</div>
    <div className='Why' style={{color:'brown'}}>How we works<br></br>
Landscape Gardening</div>
<div >
    <div style={{display:'flex',justifyContent:'center',gap:150,marginTop:80,padding:10}}>
      <div style={{borderTop:'5px solid brown',borderBottom:'5px solid brown',borderRight:'1px solid brown',borderLeft:'5px solid brown',borderRadius:'50%',padding:10}}>
    <div  className='pictures' style={{height:150,width:150,border:'0px solid brown',borderRadius:'50%',backgroundColor:'aquamarine'}}></div>
    </div>
    <div style={{borderTop:'5px solid brown',borderBottom:'5px solid brown',borderRight:'1px solid brown',borderLeft:'5px solid brown',borderRadius:'50%',padding:10}}>
    <div  className='pictures' style={{height:150,width:150,border:'0px solid brown',borderRadius:'50%',backgroundColor:'aquamarine'}}></div>
    </div>
    <div style={{borderTop:'5px solid brown',borderBottom:'5px solid brown',borderRight:'1px solid brown',borderLeft:'5px solid brown',borderRadius:'50%',padding:10}}>
    <div  className='pictures' style={{height:150,width:150,border:'0px solid brown',borderRadius:'50%',backgroundColor:'aquamarine'}}></div>
    </div>
    <div style={{borderTop:'5px solid brown',borderBottom:'5px solid brown',borderRight:'1px solid brown',borderLeft:'5px solid brown',borderRadius:'50%',padding:10}}>
    <div  className='pictures' style={{height:150,width:150,border:'0px solid brown',borderRadius:'50%',backgroundColor:'aquamarine'}}></div>
    </div>

    </div>
    </div>
    <div style={{display:'flex',justifyContent:'center',gap:150,marginTop:80}}>
    <div style={{fontSize:25}}>Preparation Phase</div>
    <div style={{fontSize:25}}>Design Proposal</div>
    <div style={{fontSize:25}}>Start Planting</div>
    <div style={{fontSize:25}}>Enjoy the Landscape</div>
    </div>
    <div style={{display:'flex',justifyContent:'center',gap:150,marginTop:80}}>
    <div className='pictures' style={{height:250,width:200,border:'0px solid black',backgroundColor:'brown'}}></div>
    <div  className='pictures' style={{height:250,width:200,border:'0px solid black',backgroundColor:'brown'}}></div>
    <div  className='pictures' style={{height:250,width:200,border:'0px solid black',backgroundColor:'brown'}}></div>
    <div  className='pictures' style={{height:250,width:200,border:'0px solid black',backgroundColor:'brown'}}></div>
    </div>

  </div>
  </section6>
  <section7   >
          <div className='why' style={{position:'relative',top:80,marginBottom:50}}>Happy Customers</div>
          <div className='Ex' style={{position:'relative',top:80}}>What Our Customer Says <br></br>About Our Services</div>
          <div style={{display:'flex',justifyContent:'center',placeItems:'center',width:'100vw',marginTop:100,}}>
          <div className='box-main' style={{height:700,width:400,backgroundColor:'aliceblue',marginLeft:20,paddingBottom:30,display:'flex',justifyContent:'center',placeItems:'center',flexDirection:'column'}} >
            <div  className='image-1' style={{color:'brown',fontSize:15,textAlign:'center'}}>
            <div className='image-2'></div>

            </div>
            <div style={{color:'black',fontSize:20,marginTop:0,fontWeight:'bold',marginRight:190}}><span style={{color:'brown',fontWeight:'bolder'}}>|</span><span style={{color:'brown',marginRight:10}}>Garden</span> Nursey</div>
            <div  style={{color:'brown',fontSize:23,marginTop:50,fontWeight:'bolder',marginLeft:20,  }}>Complete Solution for your land garden desgin</div>
            <div  style={{color:'black',fontSize:17,marginTop:50,marginRight:110,textAlign:'start'}}>25 October 2021 . By Andrew Phili</div>
            <div  style={{color:'brown',fontSize:15,marginTop:50,fontSize:18,color:'brown',marginRight:280,}}>Read More
</div>

          </div>
          <div  className='box-main' style={{height:700,width:400,backgroundColor:'aliceblue',marginLeft:20,paddingBottom:30,display:'flex',justifyContent:'center',placeItems:'center',flexDirection:'column'}} >
            <div  className='image-1' style={{color:'brown',fontSize:15,textAlign:'center'}}>
            <div className='image-2'></div>

            </div>
            <div style={{color:'black',fontSize:20,marginTop:0,fontWeight:'bold',marginRight:190}}><span style={{color:'brown',fontWeight:'bolder'}}>|</span><span style={{color:'brown',marginRight:10}}>Garden</span> Nursey</div>
            <div  style={{color:'brown',fontSize:23,marginTop:50,fontWeight:'bolder',marginLeft:20,  }}>Complete Solution for your land garden desgin</div>
            <div  style={{color:'black',fontSize:17,marginTop:50,marginRight:110,textAlign:'start'}}>25 October 2021 . By Andrew Phili</div>
            <div  style={{color:'brown',fontSize:15,marginTop:50,fontSize:18,color:'brown',marginRight:280,}}>Read More
</div>

          </div>
          <div  className='box-main' style={{height:700,width:400,backgroundColor:'aliceblue',marginLeft:20,paddingBottom:30,display:'flex',justifyContent:'center',placeItems:'center',flexDirection:'column'}} >
            <div  className='image-1' style={{color:'brown',fontSize:15,textAlign:'center'}}>
              <div className='image-2'></div>
            </div>
            <div style={{color:'black',fontSize:20,marginTop:0,fontWeight:'bold',marginRight:190}}><span style={{color:'brown',fontWeight:'bolder'}}>|</span><span style={{color:'brown',marginRight:10}}>Garden</span> Nursey</div>
            <div  style={{color:'brown',fontSize:23,marginTop:50,fontWeight:'bolder',marginLeft:20,  }}>Complete Solution for your land garden desgin</div>
            <div  style={{color:'black',fontSize:17,marginTop:50,marginRight:110,textAlign:'start'}}>25 October 2021 . By Andrew Phili</div>
            <div  style={{color:'brown',fontSize:15,marginTop:50,fontSize:18,color:'brown',marginRight:280,}}>Read More
</div>

          </div>
          </div>
        </section7>
        <footer style={{marginTop:80}}>
<div className='box13'>
  <div>
  <div style={{fontSize:28,color:'white',marginLeft:200,paddingTop:120,fontFamily:'sans-serif'}}>Contact Us </div>
  <div style={{fontSize:18,color:'white',marginLeft:200,paddingTop:50,}}> If you have any questions or need help, <br></br>feel free to contact with our team.</div>
  {/* <div  style={{fontSize:18,color:'white',marginLeft:200,paddingTop:50,}}>(111) 235 2569 125</div> */}
  {/* <div style={{display:'flex'}}> <IoIosCall className='icon1' style={{fontSize:18,color:'white',marginLeft:200,paddingTop:50, color:'yellow'}}/> <div style={{fontSize:18,marginTop:200, color:'yellow'}}>fdfdf</div></div>  */}
 
 
 
<div style={{marginLeft:200,display:'flex' }}>
<div><IoIosCall  style={{fontSize:18,color:'white',paddingTop:30, color:'yellow'}}/></div>
<div style={{color:'white',paddingTop:30,paddingLeft:5}}>(111) 222 555 5566 </div>
</div>

  <div style={{fontSize:18,color:'white',marginLeft:200,paddingTop:30,marginBottom:50}}> House #253, 3rd Floor, Uposhohor 6202,<br></br> Rajshahi, Bangladesh</div>

<div style={{marginLeft:200,display:'flex' }}>
<div><IoIosCall  style={{fontSize:18,color:'white',paddingTop:30, color:'yellow'}}/></div>
<div style={{color:'white',paddingTop:30,paddingLeft:5,fontSize:20}}>Get Directions </div>
  </div>

</div>

<div style={{color:'white' ,marginLeft:200,paddingTop:120,fontSize:28,fontFamily:'sans-serif'}}>
<div>Quick Links</div>
<div style={{fontSize:18,color:'white',paddingTop:50,}}>Team</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>Our Service</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>Our Project</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>About Company</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>News Update</div>


</div>

<div style={{color:'white' ,marginLeft:200,paddingTop:120,fontSize:28,fontFamily:'sans-serif'}}>
<div>Our Services</div>
<div style={{fontSize:18,color:'white',paddingTop:50,}}>Landscaping</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>Plant Growing</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>Branch Cutting</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>Flower Scaping</div>
<div style={{fontSize:18,color:'white',paddingTop:30,}}>Tree Planting</div>


</div>

<div style={{color:'white' ,marginLeft:200,paddingTop:120,fontSize:28,fontFamily:'sans-serif'}}>
<div>Newslettters</div>
<div style={{fontSize:18,color:'white',paddingTop:50,}}>Established since 2000. Mission Eland <br></br>Landscaping Company in US.</div>

<div style={{display:'flex' }}>
<div style={{color:'yellow',paddingTop:50,fontSize:20,}}>Follow Us: </div>
<div><FaFacebook className='fa' style={{fontSize:18,paddingTop:50, color:'yellow',paddingLeft:20}}/></div>
<div><FaXTwitter className='fa'style={{fontSize:18,paddingTop:50, color:'yellow',paddingLeft:20}}/></div>
<div><FaInstagramSquare className='fa' style={{fontSize:18,paddingTop:50, color:'yellow',paddingLeft:20}}/></div>
<div><FaLinkedin className='fa' style={{fontSize:18,paddingTop:50, color:'yellow',paddingLeft:20}}/></div>
  </div>
  <div class="container">
<div class="search-container">
  <input class="input" type="text"/>
  <IoIosArrowDroprightCircle style={{fontSize:50}} />

  {/* <svg viewBox="0 0 24 24" class="search__icon">
    <g>
      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
      </path>
    </g>
  </svg> */}
</div>
</div>
</div>

</div>


        </footer>


    </>
  );
};

export default Home;
