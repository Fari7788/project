import React from 'react'
import './About.css'
import './App.css'
import './project.css'
import './Contact.css'
import { CiHeadphones } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io"; 
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from 'react';
// import { Link, resolvePath } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

import { FaLongArrowAltRight } from "react-icons/fa";

import { Link, resolvePath } from 'react-router-dom'
const Projects = () => {
const [data,setdata]=useState(true)
const [data1,setdata1]=useState(false)
const [data2,setdata2]=useState(false)
const [data3,setdata3]=useState(false)
const [data4,setdata4]=useState(false)
const [data5,setdata5]=useState(false)



// const [dat4, setdata4]=useState(false)


  return (
    <>
    <section>
      <div className='cont-1'>
        <div className='cont-1-lite'>
        <div className='text-1'>
        Project 2

        </div>
        <div  className='text-2'>
        We are available for 24/7 for Garden & Landscaping Services 
        </div>
        <div className='text-3'>
          <Link  className='cont-11'style={{color:'white',textDecoration:'none'}} to='/'>Home</Link>
         - <span style={{color:'goldenrod'}}>Project 2</span>
      </div>  
      </div>
      </div>
    </section>
    <section>

        <div style={{marginTop:50,textAlign:'center',color:'golden',fontSize:25}}>Our Projects</div>
        <div  style={{marginTop:50,textAlign:'center',color:'golden',fontSize:35,fontWeight:'bold'}}>Our Successful Projects</div>
        <div style={{display:'flex',justifyContent:'center',placeItems:'center',width:'100vw',marginTop:50}}>
            <div style={{width:'50vw',height:'55px',paddingTop:10,backgroundColor:'rgb(178, 178, 0)',gap:30,display:'flex',justifyContent:'space-around',placeItems:'center',fontSize:20,color:'white'}}>
                <div onClick={()=>{setdata(true);setdata1(false);setdata2(false);setdata3(false);setdata4(false);setdata5(false)}} style={{cursor:'pointer'}} className={`dataa ${data? 'data' : ''}`}>All</div>
                <div onClick={()=>{setdata(false);setdata1(true);setdata2(false);setdata3(false);setdata4(false);setdata5(false)}} style={{cursor:'pointer'}} className={`dataa ${data1? 'data1' : ''}`}>Lawn</div>
                <div onClick={()=>{setdata(false);setdata1(false);setdata2(true);setdata3(false);setdata4(false);setdata5(false)}} style={{cursor:'pointer'}} className={`dataa ${data2? 'data2' : ''}`}>CareVideo</div>
                <div onClick={()=>{setdata(false);setdata1(false);setdata2(false);setdata3(true);setdata4(false);setdata5(false)}} style={{cursor:'pointer'}} className={`dataa ${data3? 'data3' : ''}`}>GalleryGarden</div>
                <div onClick={()=>{setdata(false);setdata1(false);setdata2(false);setdata3(false);setdata4(true);setdata5(false)}} style={{cursor:'pointer'}} className={`dataa ${data4? 'data4' : ''}`} >CarePlantingSnow</div>
                <div onClick={()=>{setdata(false);setdata1(false);setdata2(false);setdata3(false);setdata4(false);setdata5(true)}} style={{cursor:'pointer'}} className={`dataa ${data5? 'data5' : ''}`}>Removal</div>
            </div>
        </div>



        <div style={{marginTop:100,width:'100vw',display:'flex',justifyContent:'center',placeItems:'center'}}>
            <div style={{width:'65vw',display:'flex',flexWrap:'wrap',gap:30}}>

                {
                  data?
                  <>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a  href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                </>
                   :null
                }
                                {
                  data1?
                  <>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a  href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>

                  
                 </>
                   :null
                }
                  {
                  data2?
                  <>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a  href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>

                  
                 </>
                   :null
                }
                 {
                  data3?
                  <>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a  href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>

                  
                 </>
                   :null
                }
                                 {
                  data4?
                  <>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a  href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>

                  
                 </>
                   :null
                }
                                                 {
                  data5?
                  <>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a  href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>
                  <div style={{height:330,width:380,border:'1px solid black'}} className='img-box'><div style={{height:330,width:380,border:'1px solid black'}} className='show'><div style={{color:'white',fontSize:20,textAlign:'center'}}>Landscape Design</div><div  style={{color:'white',fontSize:18,textAlign:'center'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</div><div style={{color:'yellow'}}><a href='https://www.awwwards.com/'>Read More</a> <FaLongArrowAltRight size={20} style={{position:'relative',top:6,}}/> </div></div></div>

                  
                 </>
                   :null
                }
                

            </div>
        </div>
    </section>


    <section>
      <div style={{marginTop:50,paddingTop:50,paddingBottom:50,backgroundColor:'brown',textAlign:'center',fontSize:25,fontWeight:'',color:'white'}}>
      Get a Professional Services, Call us Now. 123 789 654
      </div>
    </section>
    <section>
      <div style={{color:'brown',marginTop:100,textAlign:'center',fontSize:25}}>Why Choose US</div>
      <div style={{color:'brown',marginTop:50,textAlign:'center',fontSize:45}}>Experience the Ultimate Level of <br></br>Landscape Power</div>
<div className='cont-one'>
  <div className='cont-oneLite'>
    <div style={{fontWeight:'bold',fontSize:20,marginTop:10}}>Free Estimates</div>
    <div style={{borderBottom:'1px solid black' ,paddingBottom:100}}>There are many variations of passages the majority have suffered alteration form</div>
    <div className='img-cont'></div>
  </div>
  <div className='cont-oneLite'>    <div style={{fontWeight:'bold',fontSize:20,marginTop:10}}>Free Estimates</div>
    <div style={{borderBottom:'1px solid black' ,paddingBottom:100}}>There are many variations of passages the majority have suffered alteration form</div>
    <div className='img-cont'></div></div>
  <div className='cont-oneLite'>    <div style={{fontWeight:'bold',fontSize:20,marginTop:10}}>Free Estimates</div>
    <div style={{borderBottom:'1px solid black' ,paddingBottom:100}}>There are many variations of passages the majority have suffered alteration form</div>
    <div className='img-cont'></div></div>
  <div className='cont-oneLite'>    <div style={{fontWeight:'bold',fontSize:20,marginTop:10}}>Free Estimates</div>
    <div style={{borderBottom:'1px solid black' ,paddingBottom:100}}>There are many variations of passages the majority have suffered alteration form</div>
    <div className='img-cont'></div></div>
</div>
    </section>
    <section className='cont-9' style={{marginTop:50}}>
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

export default Projects
