import React, { useState } from 'react'
import './About.css'
import './App.css'
import image from './1.jpg'
import { Link, resolvePath } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io"; 
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {

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
        {/* <button onClick={onee}>Section One</button>
<button onClick={twoo}>Section Two</button>
<button onClick={threee}>Section Three</button>

{one && <div>Section One Content</div>}
{two && <div>Section Two Content</div>}
{three && <div>Section Three Content</div>} */}

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
          <Link  className='cont-11'style={{color:'white',textDecoration:'none'}} to='/'>Home</Link>
         - <span style={{color:'goldenrod'}}>About</span>
      </div>  
      </div>
      </div>
    </section>
        {/*  ----------------------------section 2------------------------------ */}
<section className='cont-2'>
<div className='cont-2-lite'>
    <h1 style={{fontSize:40}}>Why will you choose our
Garden and Landscape
services</h1>
    <p style={{fontSize:20}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
</p>
    <p style={{fontSize:20}}>
The cites of the word in classical literature, discovered the undoubtable source. the Lorem Ipsum comes from sections.</p>
    <button style={{fontSize:20}}>Appointments</button>
</div>
<div className='cont-2-lite-1'></div>
</section>
        {/*  ----------------------------section 3------------------------------ */}
<section>
    
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
</section>
        {/*  ----------------------------section 4------------------------------ */}
<section>
  <div className='cont-3'>
<div className='text-4'>We Have 20 Years of Experience</div>
<div  className='text-5'> We Give Awesome Landscape<div style={{textAlign:'center'}}> Gardening Services </div></div>
  </div>
  <div className='cont-5'>
  <div className='cont-5-lite'>
    <div className='text-6'>
      <div style={{fontSize:40,backgroundColor:'brown',color:'white',width:140,padding:5}}>Mission</div>
      <div style={{marginTop:20}}>There are many variations of passages of Lorem Ipsum available, but the have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</div>
    </div>
    <div className='text-6'>
      <div style={{fontSize:40,backgroundColor:'brown',color:'white',width:140,padding:5}}>Mission</div>
      <div style={{marginTop:20}}>There are many variations of passages of Lorem Ipsum available, but the have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</div>
    </div>
    <div className='text-6'>
      <div style={{fontSize:40,backgroundColor:'brown',color:'white',width:140,padding:5}}>Mission</div>
      <div style={{marginTop:20}}>There are many variations of passages of Lorem Ipsum available, but the have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</div>
    </div>
  </div>
  <div className='img2'><div style={{color:'white',fontSize:20,padding:10,backgroundColor:'brown',width:170,height:100 ,marginTop:'60vh',marginLeft:22 }}>We are Since <br></br>2000 ! Over 200 <br></br>Awards</div></div>
  </div>
</section>
        {/*  ----------------------------section 5------------------------------ */}
        <section style={{height:'80vh',width:'100vw',display:'flex',backgroundColor:'aliceblue',marginTop:50}}>
          <div style={{width:'50vw',height:'80vh',display:'flex',justifyContent:'center',placeItems:'center'}}>
            <div className='img3'></div>
            <div className='img4'></div>
            <div></div>
          </div>
          <div style={{width:'50vw',height:'80vh',display:'flex',flexDirection:'column'  ,justifyContent:'center',gap:40}}>
            <div style={{fontSize:20,color:'brown'}}>About Landi</div>
            <div style={{fontSize:40,fontWeight:'bold'}}>We Have 20 Years of Experience<br></br> in Garden Landscape Service</div>
            <div style={{fontSize:20}}>All the Lorem Ipsum generators on the Internet tend to repeat predefined<br></br> chunks as necessary, making this the first true generator on the<br></br> Internet. Combined with a handful of model sentence structures,</div>
            <div style={{display:'flex'}}>
              <div style={{height:20,width:120,borderRadius:10,backgroundColor:'brown',color:'white',textAlign:'center',padding:15}}>Read More</div>
              <div style={{display:'flex',gap:30}}>
                <div className='image-5'></div>
                <div style={{gap:10,display:'flex',flexDirection:'column',paddingTop:5}}>
                  <div style={{font:20,color:'brown',fontWeight:'bold'}}>Nicolas Jurgan</div>
                  <div style={{font:20,color:'gold',fontWeight:'bold'}}>Founder Landscape</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{position:'relative',bottom:200,marginLeft:240}}>
        <div style={{fontSize:50}}>
          20+
    </div>
    <div style={{fontSize:20,}}>
      Year of <br></br>Experience
    </div>
    </div>
        {/*  ----------------------------section 6------------------------------ */}
        <div style={{height:'20vh', width:'100vw',backgroundColor:'brown',justifyContent:'center',display:'flex',placeItems:'center'}}>
          <div style={{color:'white',fontSize:35}}>Get a Professional Services, Call us Now. 123 789 654</div>
        </div>
         {/*  ----------------------------section 7------------------------------ */}
         <div>
          <div style={{textAlign:'center',fontSize:30,marginTop:100, color:'brown'}}> Team Members</div>
          <div style={{textAlign:'center',fontSize:60}}> Dedicated Members 20+</div>
         </div>
         <div style={{justifyContent:'center', display:'flex',placeItems:'center', height:'70vh',width:'100vw',gap:20,}}>
          <div>
          <div className='image8'>
             <div className='image8-1' >
            <div>
              <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaFacebook className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaInstagramSquare className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><BsTwitterX className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaLinkedin className='icons' style={{fontSize:25,color:'white'}}/> </a>
            </div>


</div>
</div>
          <div style={{justifyContent:'center',placeItems:'center',display:'flex',backgroundColor:'brown',height:'15vh',width:'15vw',display:'flex',flexDirection:'column', color:'white' }}>      
          <div style={{fontSize:25}}>Meri Sheraia</div>
          <div style={{fontSize:20, color:'yellow'}}>Gardener</div>
          </div>
    
          </div>
          <div>
          <div className='image9'>
          <div className='image8-2' >
            <div>
              <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaFacebook className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaInstagramSquare className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><BsTwitterX className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaLinkedin className='icons' style={{fontSize:25,color:'white'}}/> </a>
            </div>


</div>
          </div>
          <div style={{justifyContent:'center',placeItems:'center',display:'flex',backgroundColor:'brown',height:'15vh',width:'15vw',display:'flex',flexDirection:'column', color:'white' }}>      
          <div style={{fontSize:25}}>Meri Sheraia</div>
          <div style={{fontSize:20, color:'yellow'}}>Gardener</div>
          </div >   
          </div>
          <div>
          <div className='image10'>
          <div className='image8-3' >
            <div>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaFacebook className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaInstagramSquare className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><BsTwitterX className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaLinkedin className='icons' style={{fontSize:25,color:'white'}}/> </a>
            </div>


</div>
          </div>
          <div style={{justifyContent:'center',placeItems:'center',display:'flex',backgroundColor:'brown',height:'15vh',width:'15vw',display:'flex',flexDirection:'column', color:'white' }}>      
          <div style={{fontSize:25}}>Meri Sheraia</div>
          <div style={{fontSize:20, color:'yellow'}}>Gardener</div>
          </div>
    
          </div>          
          <div>
          <div className='image11'>
          <div className='image8-4' >
            <div>
              <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaFacebook className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaInstagramSquare className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><BsTwitterX className='icons' style={{fontSize:25,color:'white'}}/> </a>
            <a href='https://react-icons.github.io/react-icons/search/#q=link'><FaLinkedin className='icons' style={{fontSize:25,color:'white'}}/> </a>
            </div>


</div>
          </div>
          <div style={{justifyContent:'center',placeItems:'center',display:'flex',backgroundColor:'brown',height:'15vh',width:'15vw',display:'flex',flexDirection:'column', color:'white' }}>      
          <div style={{fontSize:25}}>Meri Sheraia</div>
          <div style={{fontSize:20, color:'yellow'}}>Gardener</div>
          </div>
    
          </div>          

         </div>
                {/*  ----------------------------section 8------------------------------ */}
                <div style={{justifyContent:'center,', placeItems:'center', display:'flex',backgroundColor:'azure', height:'100vh',width:'100vw',flexDirection:'column', paddingTop:100}}>
                  <div style={{fontSize:20, color:'brown'}}> See How it Works!</div>
                  <div style={{fontSize:40,marginTop:40,textAlign:'center'}}>How we works <div style={{textAlign:'center'}}> Landscape Gardening</div></div>
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
    <div style={{display:'flex',justifyContent:'center',gap:150,}}>
    <div style={{fontSize:25,position:'relative',right:100,top:40}}>Preparation Phase</div>
    <div style={{fontSize:25,position:'relative',right:50,top:40}}>Design Proposal</div>
    <div style={{fontSize:25,position:'relative',left:40,top:40}}>Start Planting</div>
    <div style={{fontSize:25,position:'relative',left:100,top:40}}>Enjoy the Landscape</div>
    </div>
    <div style={{display:'flex',justifyContent:'center',gap:150,marginTop:80}}>
      
    <div className='pictures' style={{height:200,width:250,border:'0px solid black',backgroundColor:'brown'}}> <div className='pic-9'></div></div>
    <div  className='pictures' style={{height:200,width:250,border:'0px solid black',backgroundColor:'brown'}}> <div className='pic-9'></div></div>
    <div  className='pictures' style={{height:200,width:250,border:'0px solid black',backgroundColor:'brown'}}> <div className='pic-9'></div></div>
    <div  className='pictures' style={{height:200,width:250,border:'0px solid black',backgroundColor:'brown'}}> <div className='pic-9'></div></div>
    </div>
                </div>
                {/*  ----------------------------section 9------------------------------ */}
                <div style={{placeItems:'center',display:'flex',height:'30vh',width:'100vw',display:'flex',flexDirection:'column', color:'white' ,paddingTop:100,gap:40}}>      
                  <div style={{color:'brown',fontSize:20}}>Happy Customer</div>
                  <div style={{color:'brown', fontSize:40,textAlign:'center'}}>What Our Customer Says<div style={{textAlign:'center'}}></div>
About Our Services</div>
                </div>

<div style={{justifyContent:'center',placeItems:'center',display:'flex',width:'100vw'}}>
<div className='small-box'>''</div>
</div>

                <div className='cont-6'>

                  <div className='pic-10'></div>

                  <div  style={{justifyContent:'center',placeItems:'center',display:' ',width:'50vw'}}>
                    <div className='cont-7'>


{
  one ?
  <>
  <div style={{textAlign:'start',fontSize:'20px',fontWeight:''}}>For a good quality range hood at an affordable price in Pakistan, you can consider looking for local brands or models that are popular and well-reviewed by customers. It's also a good idea to compare prices and features across different brands to find the best value for your budget.</div>
  <div style={{textAlign:'start',fontSize:'20px',color:'brown',fontWeight:'bold'}}>Daneen </div>
  <div style={{textAlign:'start',fontSize:'20px',color:'orange',fontWeight:'bold'}}>CEO,Daneen</div>
  <div className='dots' style={{cursor:'pointer'}} on>        <button onMouseEnter={onee}>.</button>
<button onMouseEnter={twoo}>.</button>
<button onMouseEnter={threee}>.</button> </div>
</>
  :null
}

{
  two ?
  <>
  <div style={{textAlign:'start',fontSize:'20px',fontWeight:''}}>For a good quality range hood at an affordable price in Pakistan, you can consider looking for local brands or models that are popular and well-reviewed by customers. It's also a good idea to compare prices and features across different brands to find the best value for your budget.</div>
  <div style={{textAlign:'start',fontSize:'20px',color:'brown',fontWeight:'bold'}}>Daneen22 </div>
  <div style={{textAlign:'start',fontSize:'20px',color:'orange',fontWeight:'bold'}}>CEO,Daneen</div>
  <div className='dots' style={{cursor:'pointer'}}>         <button onMouseEnter={onee}>.</button>
<button onMouseEnter={twoo}>.</button>
<button onMouseEnter={threee}>.</button></div>
</>
  :null
  
}

{
  three ?
  <>
  <div style={{textAlign:'start',fontSize:'20px',fontWeight:''}} >For a good quality range hoosadsad at an affordable price in Pakistan, you can consider looking for local brands or models that are popular and well-reviewed by customers. It's also a good idea to compare prices and features across different brands to find the best value for your budget.</div>
  <div style={{textAlign:'start',fontSize:'20px',color:'brown',fontWeight:'bold'}}>Daneen33 </div>
  <div style={{textAlign:'start',fontSize:'20px',color:'orange',fontWeight:'bold'}}>CEO,Daneen</div>
  <div className='dots' style={{cursor:'pointer'}}>         <button onMouseEnter={onee}>.</button>
<button onMouseEnter={twoo}>.</button>
<button onMouseEnter={threee}>.</button> </div>
</>
  :null
}




                  </div>
                  </div>

                </div>
                {/*  ----------------------------section 10------------------------------ */}
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

export default About
