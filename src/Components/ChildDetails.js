import React, { useEffect } from 'react'
import "../Styles/Shome.css"
import wallet from "../Assets/Images/wallet-svgrepo-com.svg"
import home from "../Assets/Images/home-17-svgrepo-com.svg"
import { useDispatch, useSelector } from 'react-redux'
import { get_self } from '../Redux/Actions/StudentAction'
import { useParams } from 'react-router-dom'

const ChildDetails = () => {
    const { param } = useParams();

    const dispatch = useDispatch()
    const getSelf = useSelector((state) => state.getSelf)
    const { self } = getSelf
    useEffect(() => {
        dispatch(get_self({ id: param }))
    }, [])
    return (
        <>
            <main className='container-fluid shomain'>
                <p className='shopsash mb-0'>Dashboard</p>
                <img src={home} className='' style={{ width: "30px" }} />
                <div className='row'>
                    <div className='col-md-6 mt-2'>
                        <div className=' showegif '>
                            <div className='shojk1 px-3 py-4'>
                                <p className='showam'>{self && self.lastName} {self && self.firstName}</p>
                                <p className='mb-0 showam2'>{self && self._class.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6 mt-2'>
                                <div className='shotpas'>
                                    <div className='d-flex shoccibjk2 px-3 py-3'>
                                        <img src={wallet} style={{ width: "30px" }} />
                                        <div className='ms-3'>
                                            <p className='mb-0 shotdasp1'>{"Total Due (All Sessions)"}</p>
                                            <p className='mb-0 shotdasp2'>₦ {self && self.tdue.toLocaleString()}.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <div className='shotpas'>
                                    <div className='d-flex shoccibjk px-3 py-3'>
                                        <img src={wallet} style={{ width: "30px" }} />
                                        <div className='ms-3'>
                                            <p className='mb-0 shotdasp1'>{"Total Paid (All Sessions)"}</p>
                                            <p className='mb-0 shotdasp2'>₦{self && self.tpaid.toLocaleString()}.00</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='shogtfpajk mt-2 px-2 py-1'>
                  <p className='shogtfpa mb-0'>Go to fees payment</p>
                </div> */}
                            </div>
                            <div className='col-md-6 mt-2 ms-auto'>
                                <div className='shotpas'>
                                    <div className='d-flex shoccibjk23 px-3 py-3'>
                                        <img src={wallet} style={{ width: "30px" }} />
                                        <div className='ms-3'>
                                            <p className='mb-0 shotdasp1'>{"Outstanding (All Sessions)"}</p>
                                            {self && typeof self.tdue !== 'undefined' && typeof self.tpaid !== 'undefined' &&
                                                <p className='mb-0 shotdasp2'>
                                                    ₦ {(self.tdue - self.tpaid).toLocaleString()}.00
                                                </p>
                                            }                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-md-6 mt-4'>
                        <div className='bg-white p-3 shoboxshfnoti'>
                            <p className='shopendis'>Pending Issues</p>
                            <div className='d-flex shopendisnoti p-3'>
                                <span style={{ color: "white" }}>&#10003;</span>
                                <p className='mb-0 text-white shonoipeat'>Nothing is pending for you at the moment!</p>
                                <span style={{ color: "white" }}>&times;</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <div className='bg-white shoboxshfnoti'>
                            <p className='shopendis p-3 mb-0'>Recent Portal Updates</p>
                            <div className='p-3 shoheighonoti'>
                                <div className='d-flex shopendisnoti2 p-3 '>
                                    {/* <span style={{color:"white"}}>&#10003;</span> */}
                                    <p className='mb-0 text-white shonoipeat'>No news update at this time, check back later</p>
                                    <span style={{ color: "white" }}>&times;</span>
                                </div>
                                <div className='d-flex shopendisnoti2 p-3 mt-2'>
                                    {/* <span style={{color:"white"}}>&#10003;</span> */}
                                    <p className='mb-0 text-white shonoipeat'>No news update at this time, check back later</p>
                                    <span style={{ color: "white" }}>&times;</span>
                                </div>
                                <div className='d-flex shopendisnoti2 p-3 mt-2'>
                                    {/* <span style={{color:"white"}}>&#10003;</span> */}
                                    <p className='mb-0 text-white shonoipeat'>No news update at this time, check back later</p>
                                    <span style={{ color: "white" }}>&times;</span>
                                </div>
                            </div>
                            <div className='border-top p-3'>
                                <a className='shoviewall px-2 py-1'>View All</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='shoiwtrsb2 p-3 my-5'>
          <div class="table-responsive shoiwtrsb">
            <h5>Recent Payment Transactions</h5>
            <table class="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Transaction Ref.</th>
                  <th>Transaction Date</th>
                  <th>Transaction Amount(₦)</th>
                  <th>Transaction Code/Response</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Anna</td>
                  <td>Pitt</td>
                  <td>35</td>
                  <td>New York</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Anna</td>
                  <td>Pitt</td>
                  <td>35</td>
                  <td>New York</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Anna</td>
                  <td>Pitt</td>
                  <td>35</td>
                  <td>New York</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='shoviewall shogtfpajk px-2 py-1 mt-3'><a>View All Transactions</a></div>
        </div> */}
            </main>
        </>
    )
}

export default ChildDetails