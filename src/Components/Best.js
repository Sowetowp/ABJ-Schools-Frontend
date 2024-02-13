import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Best.css"
import quote from "../Assets/Images/iconmonstr-quote-1.svg"
import test from "../Assets/Images/testimonial-img-1.jpg"
import test1 from "../Assets/Images/testimonial-img-2.jpg"
import test2 from "../Assets/Images/testimonial-img-3.jpg"
import test3 from "../Assets/Images/testimonial-img-4.jpg"
import test4 from "../Assets/Images/testimonial-img-5.jpg"

const Best = () => {
    const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [quoteer, setQuoteer] = useState(`"Education is a lifelong journey, and the true essence of learning lies not merely in acquiring knowledge but in comprehending the world around us. It's a journey of self-discovery, where each step uncovers new horizons of understanding, enriching our minds and expanding our hearts."`)
  const quote1 = ()=>{
    setQuoteer(`"Learning is an intricate dance of curiosity and exploration, where the human mind, like a voracious sponge, absorbs the wisdom of ages, and every book read, every class attended, adds another brushstroke to the masterpiece of personal growth."`)
  }
  const quote2 = ()=>{
    setQuoteer(`"Knowledge is the compass that guides us through the labyrinth of life. It empowers us to explore uncharted territories, challenge the status quo, and unlock the doors to innovation. Education is not just a means to an end; it's the catalyst that propels humanity forward."`)
  }
  const quote3 = ()=>{
    setQuoteer(`"Education is a lifelong journey, and the true essence of learning lies not merely in acquiring knowledge but in comprehending the world around us. It's a journey of self-discovery, where each step uncovers new horizons of understanding, enriching our minds and expanding our hearts."`)
  }
  const quote4 = ()=>{
    setQuoteer(`"The essence of true education is not merely the accumulation of facts but the cultivation of wisdom. It is the spark that ignites our passion for understanding, propelling us to question, to seek, and to never stop exploring the mysteries of the universe."`)
  }
  const quote5 = ()=>{
    setQuoteer(`"Education is the cornerstone of progress, the beacon of enlightenment, and the bridge that connects generations. It is through the pursuit of knowledge that we ascend to new heights, unlocking the boundless potential within ourselves and the world we inhabit."`)
  }
  return (
    <>
        <div className='container-fluid bstbg pt-5'>
            <img className='py-4' src={quote}/>
            <p className='bstp1 mt-5'>{quoteer}</p>
            <div className='bstri container mt-3'>
                <div className='row justify-content-between bstpx'>
                    <div className='col-xl bsttest1 pb-3' tabIndex="0" onClick={quote1}>
                        <a className='bsea'>
                            <img className="bsttei" src={test4}/>
                            <p className='bsttep1'>Bayode Gabriel</p>
                            <p className='bsttep2 m-0'>Student of Mathematics</p>
                        </a>
                    </div>
                    <div className='col-xl bsttest1 pb-3' tabIndex="0" onClick={quote2}>
                        <a className='bsea'>
                            <img className="bsttei" src={test}/>
                            <p className='bsttep1'>Ikechuku Jasper</p>
                            <p className='bsttep2 m-0'>Student of Commercial</p>
                        </a>
                    </div>
                    <div className='col-xl bsttest1 pb-3' style={{outline:"none"}} tabIndex="0" ref={inputRef} onClick={quote3}>
                        <a className='bsea'>
                            <img className="bsttei" src={test1}/>
                            <p className='bsttep1'>Uthman Lukman</p>
                            <p className='bsttep2 m-0'>Student of Humanities</p>
                        </a>
                    </div>
                    <div className='col-xl bsttest1 pb-3' tabIndex="0" onClick={quote4}>
                        <a className='bsea'>
                            <img className="bsttei" src={test2}/>
                            <p className='bsttep1'>Jack Smith</p>
                            <p className='bsttep2 m-0'>Student of Sciences</p>
                        </a>
                    </div>
                    <div className='col-xl bsttest1 pb-3' tabIndex="0" onClick={quote5}>
                        <a className='bsea'>
                            <img className="bsttei" src={test3}/>
                            <p className='bsttep1'>Andrew Abel</p>
                            <p className='bsttep2 m-0'>Student of Technology</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Best