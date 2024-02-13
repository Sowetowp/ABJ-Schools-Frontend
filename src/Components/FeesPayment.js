import React, { useState } from 'react'
import "../Styles/Fpay.css"
import "../Styles/Wfund.css"
import bank from "../Assets/Images/iconmonstr-bank-1.svg"
import "../Styles/Shome.css"
import remita from "../Assets/Images/remita-logo.png"
import wallet from "../Assets/Images/wallet-svgrepo-com.svg"

const FeesPayment = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Payment Accounts</p>
            <p className='swafundpayacc mt-2 mb-0'>Payment Accounts / Fees Payment</p>
            <div className='row'>
                <div className='col-md-8 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Fees Payment</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <div className=''>
                                    <p className='swalfunp2'>Payment Session:</p>
                                    <select onChange={handleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                        <option>Select Payment Session</option>
                                        <option value={"remita"}>2020/2021</option>
                                        <option value={"voucher"}>2020/2021</option>
                                    </select>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-3'>
                    <div className='shotpas'>
                        <div className='d-flex shoccibjk23 px-3 py-3'>
                            <img src={wallet} style={{width:"30px"}}/>
                            <div className='ms-3'>
                            <p className='mb-0 shotdasp1'>{"Wallet Balance"}</p>
                            <p className='mb-0 shotdasp2'>₦ 0.00</p>
                            </div>
                        </div>
                    </div>
                    <div className='shotpas mt-3'>
                        <div className='d-flex shoccibjk2 px-3 py-3'>
                            <img src={wallet} style={{width:"30px"}}/>
                            <div className='ms-3'>
                            <p className='mb-0 shotdasp1'>{"Total Due (All Sessions)"}</p>
                            <p className='mb-0 shotdasp2'>₦ 402,500.00</p>
                            </div>
                        </div>
                    </div>
                    <div className='shotpas mt-3'>
                        <div className='d-flex shoccibjk px-3 py-3'>
                            <img src={wallet} style={{width:"30px"}}/>
                            <div className='ms-3'>
                            <p className='mb-0 shotdasp1'>{"Total Paid (All Sessions)"}</p>
                            <p className='mb-0 shotdasp2'>₦ 402,500.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='swalfunbs my-4'>
                <div className='d-flex swalfunaic'>
                    <div className='swalfunsbbs'></div>
                    <p className='mb-0 ms-2 swalfunp1'>Payment Schedule for 2022/2023 Session</p>
                </div>
                <div className='shoiwtrsb22 p-3'>
                    <div class="table-responsive shoiwtrsb">
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
                </div>
            </div>
        </main>
    </>
  )
}

export default FeesPayment