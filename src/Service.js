
import React from 'react'
import { Link, resolvePath } from 'react-router-dom'
import './Service.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io"; 
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Service = (props) => {
  return (
    <>
        {/*  ----------------------------section 1------------------------------ */}

<section>
      <div className='cont-1'>
        <div className='cont-1-lite'>
        <div className='text-1'>
        Our Service

        </div>
        <div  className='text-2'>
        We are available for 24/7 for Garden & Landscaping Services 
        </div>
        <div className='text-3'>
          <Link  className='cont-11'style={{color:'white',textDecoration:'none'}} to='/'>Home</Link>
         - <span style={{color:'goldenrod'}}>About</span>
      </div>  
      </div>
      </div>
    </section>
            {/*  ----------------------------section 2------------------------------ */}
<section style={{backgroundColor:'aliceblue'}}>
    <div style={{paddingTop:50}} className='services'>Our Services</div>
<div className='Why'>Why will you choose our <br></br>services?</div>
            {/*  ----------------------------section 3------------------------------ */}
<div style={{justifyContent:'center',placeItems:'center', display:'flex',height:'100vh',width:'100vw',backgroundColor:'aliceblue'}}>
  <div style={{justifyContent:'center',placeItems:'center', display:'flex',height:'75vh',width:'80vw',flexWrap:'wrap',gap:20}}>
    <div className='box17'>
    <div  className='box17' style={{placeItems:'center',  display:'flex',height:'35vh',width:'20vw',flexDirection:'column',}}>
      <div className='box14'></div>
      <div className='text15'> Landscape Design</div>
      <div className='text16'>There are many variations of passages the majority have  suffered alteration form</div>
    </div>
    </div>
    <div className='box17' style={{placeItems:'center',  display:'flex',height:'35vh',width:'20vw',flexDirection:'column',}}>
      <div className='box14'></div>
      <div className='text15'>Landscape Design</div>
      <div className='text16'>There are many variations of passages the majority have  suffered alteration form</div>
    </div>
    <div className='box17' style={{placeItems:'center',  display:'flex',height:'35vh',width:'20vw',flexDirection:'column',}}>
      <div className='box14'></div>
      <div className='text15'>Landscape Design</div>
      <div className='text16'>There are many variations of passages the majority have  suffered alteration form</div>
    </div>
    <div className='box17' style={{placeItems:'center',  display:'flex',height:'35vh',width:'20vw',flexDirection:'column',}}>
      <div className='box14'></div>
      <div className='text15'>Landscape Design</div>
      <div className='text16'>There are many variations of passages the majority have  suffered alteration form</div>
    </div>
    <div className='box17' style={{placeItems:'center',  display:'flex',height:'35vh',width:'20vw',flexDirection:'column',}}>
      <div className='box14'></div>
      <div className='text15'>Landscape Design</div>
      <div className='text16'>There are many variations of passages the majority have suffered alteration form</div>
    </div>
    <div className='box17' style={{placeItems:'center',  display:'flex',height:'35vh',width:'20vw',flexDirection:'column',}}>
      <div className='box14'></div>
      <div className='text15'>Landscape Design</div>
      <div className='text16'>There are many variations of passages the majority have suffered alteration form</div>
    </div>

  </div>
</div>
</section>
            {/*  ----------------------------section 4------------------------------ */}


<div style={{height:'20vh', width:'100vw',backgroundColor:'brown',justifyContent:'center',display:'flex',placeItems:'center'}}>
          <div style={{color:'white',fontSize:35}}>Get a Professional Services, Call us Now. 123 789 654</div>
        </div>
            {/*  ----------------------------section 5------------------------------ */}
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
                

<footer>
<div className='box13'>
  <div>
  <div style={{fontSize:28,color:'white',marginLeft:200,paddingTop:120,fontFamily:'sans-serif'}}>Contact Us </div>
  <div style={{fontSize:18,color:'white',marginLeft:200,paddingTop:50,}}> If you have any questions or need help, <br></br>feel free to contact with our team.</div>
  {/* <div  style={{fontSize:18,color:'white',marginLeft:200,paddingTop:50,}}>(111) 235 2569 125</div> */}
  {/* <div style={{display:'flex'}}> <IoIosCall className='icon1' style={{fontSize:18,color:'white',marginLeft:200,paddingTop:50, color:'yellow'}}/> <div style={{fontSize:18,marginTop:200, color:'yellow'}}>fdfdf</div></div>  */}
 
 
 
<div style={{marginLeft:200,display:'flex' }}>
{/* <div><IoIosCall  style={{fontSize:18,color:'white',paddingTop:30, color:'yellow'}}/></div> */}
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

export default Service
