import React from 'react'
import './About.css'
import './Contact.css'
import { CiHeadphones } from "react-icons/ci";
// import { Link, resolvePath } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io"; 
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from 'react';
import { Link, resolvePath } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';


const Contact = (props) => {


  const mapOptions = {
    center: {
      lat: 31.4625, // default to San Francisco
      lng: 74.2465,
    },
    zoom: 10,
  };
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  function onee() {
    setOne(true);
    setTwo(false);
    setThree(false);
  }

  function twoo() {
    setOne(false);
    setTwo(true);
    setThree(false);
  }

  function threee() {
    setOne(false);
    setTwo(false);
    setThree(true);
  }


  return (
    <>
    {/*  ----------------------------section 1------------------------------ */}
    <section>
      <div className='cont-1'>
        <div className='cont-1-lite'>
        <div className='text-1'>
        Our Company

        </div>
        <div  className='text-2'>
        We are available for 24/7 for Garden & Landscaping Services 
        </div>
        <div className='text-3'>
          <Link className='cont-11'style={{color:'white',textDecoration:'none'}} to='/'>Home</Link>
         - <span style={{color:'goldenrod'}}>About</span>
      </div>  
      </div>
      </div>
    </section>
       {/*  ----------------------------section 2------------------------------ */}
       <div style={{justifyContent:'center',placeItems:'center',display:'flex',height:'100vh',width:'100vw'}}>
        
        <div style={{justifyContent:'center',placeItems:'center',display:'flex',height:'80vh',width:'70vw',backgroundColor:'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
        
          <div style={{display:'flex',height:'70vh',width:'32vw',flexDirection:'column',gap:20 }} >
          <div style={{color:'brown',}}>Need Our Service Or Have Queries</div>
          <div style={{color:'Brown',position:'relative',fontWeight:'bolder', fontSize:40}}> Send Us Message.</div>
          <input style={{marginTop:20}} placeholder='Your Name' className="Input"/>
          <input placeholder='Your Email '  className="Input"/>
          <input placeholder='Your Subject'  className="Input"/>
          <textarea className="textaera">Your Message Here</textarea>
          <div className='btn-4'>Send Message
        <span style={{textAlign:'end'}}></span>
          </div>
          </div>


          <div style={{display:'flex',height:'70vh',width:'27vw',flexDirection:'column',backgroundColor:'brown'}} >
            <div style={{marginTop:50,marginLeft:50,fontSize:20,fontWeight:'bold',color:'white'}}> Gardening Excellence!</div>
            <div style={{marginTop:40,marginLeft:50,fontSize:30,color:'white'}}>Expanded Gardening
<br></br>Services Fits All needs!</div>
<div style={{marginTop:30,marginLeft:50,fontSize:20,color:'white',}}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled <br></br>and demoralized by the charms</div>
         
         <div style={{color:'white',marginLeft:50,marginTop:30, fontSize:20,}}><  CiHeadphones style={{paddingRight:10,position:'relative',top:5}}/>Emergency Line: (002) 012612457</div>
         <div style={{color:'white',marginLeft:50,marginTop:30, fontSize:20,}}><  CiHeadphones style={{paddingRight:10,position:'relative',top:5}}/>Emergency Line: (002) 012612457</div>
         <div style={{color:'white',marginLeft:50,marginTop:30, fontSize:20,}}><  CiHeadphones style={{paddingRight:10,position:'relative',top:5}}/>Emergency Line: (002) 012612457</div>
         <div style={{color:'white',marginLeft:50,marginTop:30, fontSize:20,}}><  CiHeadphones style={{paddingRight:10,position:'relative',top:5}}/>Emergency Line: (002) 012612457</div>
          </div>
        </div>
       </div>

       {/*  ----------------------------section 3------------------------------ */}

<div style={{justifyContent:'center',placeItems:'center', display:'flex', height:'10vh', width:'100vw',gap:180}}>
  <button className='buttn' style={{color:'White',borderRadius:'30px',backgroundColor:'brown',fontSize:18}}> <a href='https://react-icons.github.io/react-icons/search/#q=phone'> Google </a></button>
  <button className='buttn' style={{color:'White',borderRadius:'30px',backgroundColor:'brown',fontSize:18}}> <a href='https://react-icons.github.io/react-icons/search/#q=phone'> Google </a></button>
  <button className='buttn' style={{color:'White',borderRadius:'30px',backgroundColor:'brown',fontSize:18}}> <a href='https://react-icons.github.io/react-icons/search/#q=phone'> Google </a></button>
  <button className='buttn' style={{color:'White',borderRadius:'30px',backgroundColor:'brown',fontSize:18}}> <a href='https://react-icons.github.io/react-icons/search/#q=phone'> Google </a></button>
 
</div>


       {/*  ----------------------------section 4------------------------------ */}

<div style={{justifyContent:'center',placeItems:'center', display:'flex', height:'70vh', width:'100vw',}}>
  <div style={{justifyContent:'center',placeItems:'center', display:'flex', height:'50vh', width:'50vw',}}> <div className='pic-12'></div></div>

  <div style={{ height:'50vh', width:'50vw',}}>
    
    <div style={{fontSize:25, fontWeight:'bold',color:'brown',marginTop:80, position:'relative',right:120}} >Satisfied Users Over The Globe</div> 
<div  style={{justifyContent:'center',placeItems:'center',display:' ',width:'50vw',position:'relative',right:120,top:20}}>
                  


{
  one ?
  <>
  <div style={{textAlign:'start',fontSize:'20px',fontWeight:''}}>For a good quality range hood at an affordable price in Pakistan, you can consider looking for local brands or models that are popular and well-reviewed by customers. It's also a good idea to compare prices and features across different brands to find the best value for your budget.</div>
  <div style={{display:'flex',gap:30,marginTop:20,position:'relative',right:80,top:20}}>
    <div style={{display:'flex',gap:30}}>
                <div className='image-5'></div>
                <div style={{gap:10,display:'flex',flexDirection:'column',paddingTop:5}}>
                  <div style={{font:20,color:'brown',fontWeight:'bold'}}>Nicolas Jurgan</div>
                  <div style={{font:20,color:'gold',fontWeight:'bold'}}>Founder Landscape</div>
                </div>
              </div>

              <div style={{display:'flex',gap:30}}>
                <div className='image-5'></div>
                <div style={{gap:10,display:'flex',flexDirection:'column',paddingTop:5}}>
                  <div style={{font:20,color:'brown',fontWeight:'bold'}}>Nicolas Jurgan 11</div>
                  <div style={{font:20,color:'gold',fontWeight:'bold'}}>Founder Landscape</div>
                </div>
              </div>
              
  <div className='dots' style={{cursor:'pointer',marginLeft:50,position:'relative',top:-50,left:10}}>  
         <button onMouseEnter={onee}>.</button>
<button onMouseEnter={twoo}>.</button>
<button onMouseEnter={threee}>.</button></div>
</div>
</>
  :null
}

{
  two ?
  <>
  <div style={{textAlign:'start',fontSize:'20px',fontWeight:''}}>For a good quality range hood at an affordable price in Pakistan, you can consider looking for local brands or models that are popular and well-reviewed by customers. It's also a good idea to compare prices and features across different brands to find the best value for your budget.</div>
  <div style={{display:'flex',gap:30,marginTop:20,position:'relative',right:80,top:20}}>
    <div style={{display:'flex',gap:30}}>
                <div className='image-5'></div>
                <div style={{gap:10,display:'flex',flexDirection:'column',paddingTop:5}}>
                  <div style={{font:20,color:'brown',fontWeight:'bold'}}>Nicolas Jurgan 22</div>
                  <div style={{font:20,color:'gold',fontWeight:'bold'}}>Founder Landscape</div>
                </div>
              </div>

              <div style={{display:'flex',gap:30}}>
                <div className='image-5'></div>
                <div style={{gap:10,display:'flex',flexDirection:'column',paddingTop:5}}>
                  <div style={{font:20,color:'brown',fontWeight:'bold'}}>Nicolas Jurgan</div>
                  <div style={{font:20,color:'gold',fontWeight:'bold'}}>Founder Landscape</div>
                </div>
              </div>
              
  <div className='dots' style={{cursor:'pointer',marginLeft:50,position:'relative',top:-50,left:10}}>  
         <button onMouseEnter={onee}>.</button>
<button onMouseEnter={twoo}>.</button>
<button onMouseEnter={threee}>.</button></div>
</div>
</>
  :null
  
}

{
  three ?
  <>
  <div style={{textAlign:'start',fontSize:'20px',fontWeight:''}} >For a good quality range hoosadsad at an affordable price in Pakistan, you can consider looking for local brands or models that are popular and well-reviewed by customers. It's also a good idea to compare prices and features across different brands to find the best value for your budget.</div>
  <div style={{display:'flex',gap:30,marginTop:20,position:'relative',right:80,top:20}}>
    <div style={{display:'flex',gap:30}}>
                <div className='image-5'></div>
                <div style={{gap:10,display:'flex',flexDirection:'column',paddingTop:5}}>
                  <div style={{font:20,color:'brown',fontWeight:'bold'}}>Nicolas Jurgan</div>
                  <div style={{font:20,color:'gold',fontWeight:'bold'}}>Founder Landscape</div>
                </div>
              </div>

              <div style={{display:'flex',gap:30}}>
                <div className='image-5'></div>
                <div style={{gap:10,display:'flex',flexDirection:'column',paddingTop:5}}>
                  <div style={{font:20,color:'brown',fontWeight:'bold'}}>Nicolas Jurgan 33</div>
                  <div style={{font:20,color:'gold',fontWeight:'bold'}}>Founder Landscape</div>
                </div>
              </div>
              
  <div className='dots' style={{cursor:'pointer',marginLeft:50,position:'relative',top:-50,left:10}}>  
         <button onMouseEnter={onee}>.</button>
<button onMouseEnter={twoo}>.</button>
<button onMouseEnter={threee}>.</button></div>
</div>
</>
  :null
}




                  </div>
                  </div>

                </div>
    

       {/*  ----------------------------section 5------------------------------ */}


                <div style={{ height: '40vh', width: '100vw' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC7E9dLOny7mRIdpt946cUcplriVChpQGw' }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      ></GoogleMapReact>
    </div>

       {/*  ----------------------------section 6------------------------------ */}

    <section className='cont-9'>
<div className='cont-10'>
  <div style={{fontSize:40,fontWeight:'bold',color:'white'}}>
  Get News Updates Special Event Notices And<br></br>
   <div style={{textAlign:'center'}}>More When You Join Our Email List
</div>
  </div>

  <div>
    <input type='text' style={{height:50,width:600,borderRadius:50}} placeholder='Enter Your Email'/>
    <button style={{height:50,width:200,borderRadius:50,position:'relative',top:0,left:20}}>Subscribe</button>
  </div>
  </div>
</section>
       {/*  ----------------------------section 7------------------------------ */}


<footer>
<div className='box13'>
  <div>
  <div style={{fontSize:28,color:'white',marginLeft:200,paddingTop:120,fontFamily:'sans-serif'}}>Contact Us </div>
  <div style={{fontSize:18,color:'white',marginLeft:200,paddingTop:50,}}> If you have any questions or need help, <br></br>feel free to contact with our team.</div>
 
 
 
<div style={{marginLeft:200,display:'flex' }}>
<div style={{color:'white',paddingTop:30,paddingLeft:5}}>(111) 222 555 5566 </div>
</div>

  <div style={{fontSize:18,color:'white',marginLeft:200,paddingTop:30,}}> House #253, 3rd Floor, Uposhohor 6202,<br></br> Rajshahi, Bangladesh</div>

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


</div>
</div>
</div>

</div>


        </footer>
    </>
  )
}

export default Contact
