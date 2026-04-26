import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [showContent,setShowContent] = useState(false);

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to('.vi-mask-group',{
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",
  }).to('.vi-mask-group',{
    scale:10,
    duration:2,
    delay:-1.8,
    ease:"Expo.easeInOut",
    transformOrigin:"50% 50%",
    opacity:0,
    onUpdate:function(){
      if(this.progress() >= .9){
        document.querySelector(".svg").remove();
        setShowContent(true);
        this.kill();
      }
    }
  })
});

  useGSAP(()=>{
    if(!showContent) return;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:'-1',
      ease:"Expo.easeInOut"
    });

    gsap.to(".sky",{
      scale:1.2,
      rotate:0,
      duration:2,
      delay:'-.7',
      ease:"Expo.easeInOut"
    });
    gsap.to(".bg",{
      scale:1.2,      
      rotate:0,
      duration:2,
      delay:'-1',
      ease:"Expo.easeInOut"
    });
    gsap.to(".girl",{
      scale:1.1,
      x:'-50%',
      bottom:'-25%',
      rotate:0,
      duration:2,
      delay:'-1.5',
      ease:"Expo.easeInOut"
    });
    gsap.to(".text-bar",{
      scale:1,      
      rotate:0,
      duration:2,
      delay:'-.8',
      ease:"Expo.easeInOut"
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      // console.log(e.clientX,e.clientY);
      const xMove = (e.clientX/window.innerWidth-.5)*40;
      gsap.to(".imgdiv .text-bar",{
        x:`${xMove*.4}%`
      })
      gsap.to(".sky",{
        x:xMove
      })
      gsap.to(".bg",{
        x:xMove*1.7
      })
    })
  },[showContent]);

  useGSAP(() => {
    if(!showContent) return;

  });

  return (
    <>
      <div className='svg fixed flex items-center justify-center top-0 left-0 z-8 w-full h-screen overflow-hidden bg-black'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='viMask'>
              <rect width='100%' height='100%' fill='black' />
              <g className='vi-mask-group'>
                <text 
                  x='50%'
                  y='50%'
                  fontSize='250'
                  textAnchor='middle'
                  fill='white'
                  dominantBaseline='middle'
                  fontFamily='Arial Black'
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href='./bg.png'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            mask='url(#viMask)'
            />
        </svg>
      </div>

      {showContent && 
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing w-full h-screen bg-black overflow-hidden relative'>
            <div className='navbar absolute top-0 left-0 z-10 w-full py-10 px-10'>
              <div className='logo flex gap-7'>
                <div className="lines flex flex-col gap-1.25">
                  <div className='line w-15 h-1.5 bg-white'></div>
                  <div className='line w-8 h-1.5 bg-white'></div>
                  <div className='line w-5 h-1.5 bg-white'></div>
                </div>
                <h3 className='text-4xl text-white -mt-2.25 leading-none'>RockStar</h3>
              </div>
            </div>  
            
            <div className='imgdiv overflow-hidden relative h-screen w-full '>
              <img className='sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-screen object-cover' src="./sky.png" alt="" />
              <img className='bg scale-[1.8] rotate-[-15deg] absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
              <div className='text-bar flex flex-col gap-4 absolute top-12 left-1/2 -translate-x-1/2 text-white scale-[1.4] rotate-[-10deg]'>
              <h1 className='text-7xl -ml-30 leading-none'>grand</h1>
              <h1 className='text-7xl ml-20 leading-none'>theft</h1>
              <h1 className='text-7xl -ml-20 leading-none'>auto</h1>
            </div>
              <img className='girl scale-[3] absolute left-1/2 -translate-x-1/2 bottom-[-150%] rotate-[-20deg]  h-screen object-top' src="./girlbg.png" alt="" />
              

            </div>
            <div className='btmbar absolute bottom-0 left-0 w-full py-15 px-10 bg-linear-to-t from-black to-transparent text-white'>
              <div className='flex gap-4 items-center'>
                <i className=" text-4xl ri-arrow-down-line"></i>
                <h3 className=' font-bold text-2xl'>Scroll Down</h3>
              </div>
              <img className='h-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
            </div>
          </div>   

          <div className='w-full h-screen   flex items-center justify-center bg-black overflow-hidden'>
            <div className="cntr text-white flex w-full h-[80%]">
              <div className="lmig relative w-1/2  h-full">
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover' src="./imag.png" alt="" />
              </div>
              <div className="rimg w-[60%] ">
                <h1 className='text-6xl **:'>Still Runinng,</h1>
                <h1 className='text-6xl **:'>Not Hunting</h1>
                <p className='mt-10 font-[helvetica-Now_Display] text-xl'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio isteconsequatur! Similique nulla nemo quisquam laudantium, quasi quaerat suscipit expedita nam!
                  </p>
                <p className='mt-3 font-[helvetica-Now_Display] text-xl'>
                  Lorem ipsum dolor sit amet consectetur,tenetur a, impedit cupiditate, eum natus mollitia obcaecati nulla suscipit!
                  </p>
                  <p className='mt-10 font-[helvetica-Now_Display] text-xl'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illum eveniet deleniti deserunt praesentium iste nemo dolorum dicta vero repellendus tenetur a, impedit cupiditate, eum natus mollitia obcaecati nulla suscipit!
                  </p>
                  <button className='bg-yellow-500 px-6 py-6 rounded-4xl text-3xl text-black mt-10'>Download Now!</button>
              </div>
            </div>
              
          </div>
        </div>
      }
    </>
  )
}

export default App
