import React, { useState } from 'react'
import { Link, resolvePath } from 'react-router-dom'
import './ServiceDetails.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowsSplitUpAndLeft, FaPlantWilt } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/fa";

import { IoIosCall } from "react-icons/io"; 
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const ServiceDetails = () => {
  const [Toggle,setToggle]=useState(false)
  const [Toggle2,setToggle2]=useState(false)
  const [Toggle3,setToggle3]=useState(false)
  const [Toggle4,setToggle4]=useState(false)
  const [Toggle5,setToggle5]=useState(false)
  return (
    <>

            {/*  ----------------------------section 1------------------------------ */}

    <section>
      <div className='cont-1'>s
        <div className='cont-1-lite' style={{marginTop:-20}}>
        <div className='text-1'>
        Services Details

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

        <div style={{ height:'fit-content',width:'100vw',display:'flex',}}>
          <div style={{width:'37vw', height:'fit-content',marginTop:'120px'}}>
          <div style={{marginTop:25, justifyContent:'center',placeItems:'center', height:'fit-content',width:'18vw',display:'flex',flexDirection:'column', gap:10,marginLeft:300, borderTop:'3px solid brown',backgroundColor:'snow'}}>
           <div className='text16'>Our Serices</div>
            <div style={{justifyContent:'space-between',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginBottom:15,}} className='text17' >
              <div className='text17'> Landscape Desgin</div>
              <div style={{paddingRight:8 }}><IoIosArrowForward /></div>
            </div>
            <div style={{justifyContent:'space-between',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginBottom:15,}} className='text17' >
              <div className='text17'> Landscape Desgin</div>
              <div style={{paddingRight:8 }}><IoIosArrowForward /></div>
            </div>          
            <div style={{justifyContent:'space-between',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginBottom:15,}} className='text17' >
              <div className='text17'> Landscape Desgin</div>
              <div style={{paddingRight:8 }}><IoIosArrowForward /></div>
            </div>            
            <div style={{justifyContent:'space-between',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginBottom:15,}} className='text17' >
              <div className='text17'> Landscape Desgin</div>
              <div style={{paddingRight:8 }}><IoIosArrowForward /></div>
            </div>          
            <div style={{justifyContent:'space-between',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginBottom:15,}} className='text17' >
              <div className='text17'> Landscape Desgin</div>
              <div style={{paddingRight:8 }}><IoIosArrowForward /></div>
            </div>         
               <div style={{justifyContent:'space-between',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginBottom:15,}} className='text17' >
              <div className='text17'> Landscape Desgin</div>
              <div style={{paddingRight:8 }}><IoIosArrowForward /></div>
            </div>
          </div>

                   <div style={{marginTop:50, height:'47vh',width:'18vw',backgroundColor:'brown',display:'flex',flexDirection:'column', gap:10,marginLeft:300, borderTop:'3px solid brown'}}>
           <div style={{paddingLeft:10,display:'flex',flexDirection:'column',fontSize:20,fontWeight:'bold',color:'white',marginTop:30}}>Gardening Excellence!</div>
           <div style={{paddingLeft:10,display:'flex',flexDirection:'column',fontSize:23,fontWeight:'bold',color:'white',marginTop:30}}>Expanded Gardening Services <br></br>Fits All needs</div>
           <div style={{paddingLeft:10,display:'flex',color:'white',flexDirection:'column',marginTop:16,fontSize:15,}}>The processes and systems we put<br></br> in place provide high quality <br></br>service with a focus on safety.</div>
          
          <div style={{marginLeft:10,paddingRight:20,height:60,width:170,backgroundColor:'white',gap:20,borderRadius:50,marginTop:10,display:'flex',placeItems:'center',justifyContent:'center'}}>
            <div style={{padding:20,backgroundColor:'brown',height:10,width:10,borderRadius:50,textAlign:'center',display:'flex',placeItems:'center',justifyContent:'center'}}>call</div>
        <div style={{color:'black',fontSize:20}}>Dial To Call</div>
          </div>
          
           <div style={{paddingLeft:10,display:'flex',flexDirection:'column',fontSize:26,fontWeight:'bold',color:'white',marginTop:30}}>+88 01061 345</div>

                  
                   
                    
                     

          </div>
          <div style={{marginTop:50, height:'50vh',width:'18vw',backgroundColor:'aliceblue',display:'flex',flexDirection:'column', gap:10,marginLeft:300, borderTop:'3px solid brown'}}>
           <div style={{paddingLeft:25,display:'flex',flexDirection:'column',fontSize:20,fontWeight:'bold',color:'black',marginTop:30}}>Leave a Message</div>
           <div style={{justifyContent:'center',placeItems:'center', height:'7vh',width:'15vw',display:'flex', marginTop:15,marginLeft:'auto',marginRight:'auto',}}  >
              <input type='text' placeholder='FullName' style={{width:'15vw',height:'100%',backgroundColor:'white',fontSize:20,paddingLeft:20}} className='input2'></input>
            </div>
            <div style={{justifyContent:'center',placeItems:'center', height:'7vh',width:'15vw',display:'flex', marginTop:15,marginLeft:'auto',marginRight:'auto',}}  >
              <input type='text' placeholder='Email' style={{width:'15vw',height:'100%',backgroundColor:'white',fontSize:20,paddingLeft:20}} className='input2'></input>
            </div>
            <div style={{justifyContent:'center',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginTop:15,marginLeft:'auto',marginRight:'auto',}}  >
              <textarea className='text-area' type='text' placeholder='Message Details' style={{width:'15vw',height:'100%',backgroundColor:'white',fontSize:20,paddingLeft:20}}></textarea>
            </div>
            <div style={{justifyContent:'center',placeItems:'center', height:'7vh',width:'15vw',display:'flex',marginTop:15,marginLeft:'auto',marginRight:'auto',}}  >
              <button style={{width:'15vw',height:'100%',backgroundColor:'brown',color:'white'}}>Send Message</button>
            </div>

                  
                   
                    
                     

          </div>
          </div>
        
        <div style={{width:'63vw',height:'fit-content'}}>
          <div style={{display:'flex',flexDirection:'column',fontSize:33,fontWeight:'bold',color:'brown',marginTop:130}}>Know more us of our landi Gardening<br></br> and Landscape Services.</div>
        
          
          <div style={{display:'flex',flexDirection:'column',marginTop:30,fontSize:15,}}>It is a long established fact that a reader will be distracted by the readable content of page when looking layout.<br></br> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, using Content here,<br></br> content here', making it look like readable English.</div>
          <div style={{display:'flex',flexDirection:'column',marginTop:40,fontSize:15,}}>It is a long established fact that a reader will be distracted by the readable content of page when looking layout.<br></br> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, using Content here,<br></br> content here', making it look like readable English.</div>

<div className='picture'></div>
<div style={{display:'flex',flexDirection:'column',fontSize:33,fontWeight:'bold',color:'brown',marginTop:20}}>Why we are giving Gardening Services Since 2000,<br></br> you can trust us for</div>
<div style={{display:'flex',flexDirection:'column',marginTop:30,fontSize:15,}}>It is a long established fact that a reader will be distracted by the readable content of page when looking layout.<br></br> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, using Content here,<br></br> content here', making it look like readable English.</div>
          <div style={{display:'flex',flexDirection:'column',marginTop:40,fontSize:15,}}>It is a long established fact that a reader will be distracted by the readable content of page when looking layout.<br></br> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, using Content here,<br></br> content here', making it look like readable English.</div>
          <div style={{display:'flex',flexDirection:'column',fontSize:33,fontWeight:'bold',color:'brown',marginTop:20}}>Working Process</div>
          <div style={{display:'flex',flexDirection:'column',marginTop:30,fontSize:15,}}>It is a long established fact that a reader will be distracted by the readable content of page when looking layout.<br></br> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, using Content here,<br></br> content here', making it look like readable English.</div>
          <div >
    <div style={{display:'flex',justifyContent:'',gap:60,marginTop:50,padding:10}}>
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
    <div style={{display:'flex',justifyContent:'',gap:60,marginTop:50}}>
    <div style={{fontSize:25}}>Preparation Phase</div>
    <div style={{fontSize:25}}>Design Proposal</div>
    <div style={{fontSize:25}}>Start Planting</div>
    </div>
    <div style={{display:'flex',justifyContent:'',gap:60,marginTop:50}}>
    <div className='pictures' style={{height:250,width:200,border:'0px solid black',backgroundColor:'brown'}}></div>
    <div  className='pictures' style={{height:250,width:200,border:'0px solid black',backgroundColor:'brown'}}></div>
    <div  className='pictures' style={{height:250,width:200,border:'0px solid black',backgroundColor:'brown'}}></div>
    </div>
    <div style={{fontSize:30,fontWeight:'bold',marginTop:50}}>Key Benefits</div>

    <div className='box-line'>
      <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:''}}>
      <div>Design & Planing</div>
      <div style={{cursor:'pointer'}} onClick={()=>setToggle(!Toggle)}><IoIosArrowForward /></div>
      </div>

{
  Toggle?
  <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:'',borderTop:'1px solid black'}}>
  <div >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
  </div>
  :null
}

   
    </div>
    <div className='box-line'>
      <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:''}}>
      <div>Those who experiment the most, are able to innovate the best.</div>
      <div style={{cursor:'pointer'}} onClick={()=>setToggle2(!Toggle2)}><IoIosArrowForward /></div>
      </div>

{
  Toggle2?
  <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:'',borderTop:'1px solid black'}}>
  <div >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
  </div>
  :null
}

   
    </div>
    <div className='box-line'>
      <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:''}}>
      <div>Modern Equipment We Use and support from our experts.</div>
      <div style={{cursor:'pointer'}} onClick={()=>setToggle3(!Toggle3)}><IoIosArrowForward /></div>
      </div>

{
  Toggle3?
  <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:'',borderTop:'1px solid black'}}>
  <div >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
  </div>
  :null
}

   
    </div>
    <div className='box-line'>
      <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:''}}>
      <div>Understand Your Problem, You must understand the issue.</div>
      <div style={{cursor:'pointer'}} onClick={()=>setToggle4(!Toggle4)}><IoIosArrowForward /></div>
      </div>

{
  Toggle4?
  <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:'',borderTop:'1px solid black'}}>
  <div >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
  </div>
  :null
}

   
    </div>
    <div className='box-line'>
      <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:''}}>
      <div>How much and how often should I water my vegetables?</div>
      <div style={{cursor:'pointer'}} onClick={()=>setToggle5(!Toggle5)}><IoIosArrowForward /></div>
      </div>

{
  Toggle5?
  <div style={{justifyContent:'space-between',display:'flex',width:'35vw',padding:10,backgroundColor:'',borderTop:'1px solid black'}}>
  <div >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
  </div>
  :null
}

   
    </div>
          </div>
          </div>

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

</div>
</div>
</div>

</div>


        </footer>



    </>
  )
}

export default ServiceDetails
