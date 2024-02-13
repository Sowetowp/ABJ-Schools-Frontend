import React, { useEffect, useState } from 'react'
import "../Styles/Achi.css"

const Achievements = () => {
    const [count, setCount] = useState(1991)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          if (count < 1991) {
            setCount(count + 1);
          }
          if (count1 < 934) {
            setCount1(count1 + 1);
          }
          if (count2 < 65409) {
            setCount2(count2 + 25);
          }
          if (count3 < 289) {
            setCount3(count3 + 1);
          }
        }, 0.001);
    
        return () => {
          clearInterval(interval);
        };
    }, [count, count1, count2, count3]);
    
  return (
    <>
        <div className='container-fluid p-0 achbim'>
            <div className='achbb p-5'>
                <p className='achiota pt-3'>OUR TEACHERS AND STUDENTS ACHIEVEMENTS</p>
                <div className='row pb-3'>
                    <div className='col-md-3 text-center mt-5'>
                        <p className='achnum'>{count}</p>
                        <p className='achnum2'>YEAR FOUNDED</p>
                    </div>
                    <div className='col-md-3 text-center mt-5'>
                        <p className='achnum'>{count1}</p>
                        <p className='achnum2'>CERTIFIED TEACHERS</p>
                    </div>
                    <div className='col-md-3 text-center mt-5'>
                        <p className='achnum'>{count2}</p>
                        <p className='achnum2'>GRADUATED STUDENTS</p>
                    </div>
                    <div className='col-md-3 text-center mt-5'>
                        <p className='achnum'>{count3}</p>
                        <p className='achnum2'>AWARDS WINNER</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Achievements