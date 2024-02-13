import React, { useState } from 'react'
import "../Styles/Wfund.css"
import bank from "../Assets/Images/iconmonstr-bank-1.svg"
import "../Styles/Shome.css"
import remita from "../Assets/Images/remita-logo.png"
import wallet from "../Assets/Images/wallet-svgrepo-com.svg"

const WalletFunding = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Payment Accounts</p>
            <p className='swafundpayacc mt-2 mb-0'>Payment Accounts / Wallet Funding</p>
            <div className='row'>
                <div className='col-md-8 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Fund Wallet</p>
                        </div>
                        <div className='p-3 mb-4'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <div className=''>
                                    <p className='swalfunp2'>Payment Method:</p>
                                    <select onChange={handleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                        <option>Select Payment Method</option>
                                        <option value={"remita"}>Remita</option>
                                        <option value={"voucher"}>Voucher/Scratch Card</option>
                                    </select>
                                    <div className={`mt-4 ${selectedValue === "voucher" ? "d-block" : "d-none"}`}>
                                        <p className='swalfunp2'>Funding PIN Code:</p>
                                        <input className='form-control form-select-sm' placeholder='Enter funding pin code'/>
                                        <p className='swalfuntpcehito mb-0 mt-2'>The PIN Code expected here is the one obtained from Bursary or any of the Payment Designated Centres.</p>
                                        <div className='shoviewall shogtfpajk px-2 py-1 mt-3'><a>Fund Wallet</a></div>
                                    </div>
                                    <div className={`mt-4 ${selectedValue === "remita" ? "d-block" : "d-none"}`}>
                                        <p className='swalfunp2'>Payment Instructions</p>
                                        <p className='swalfunremitap1 mb-0'><i className="fas sdashhic2 fa-arrow-right"></i> Confirm your payment option by clicking the <span>"Begin Payment Process"</span> button.</p>
                                        <p className='swalfunremitap1 mb-0 mt-1'><i className="fas sdashhic2 fa-arrow-right"></i> You may read the <a href=''>A.F.C.S WebPAY FAQs/Tips</a> before you proceed.</p>
                                        <p className='swalfunremitap1 mb-0 mt-1'><i className="fas sdashhic2 fa-arrow-right"></i> Please take note of your <span>Remita Reference Number (RRR)</span> in the Payment Summary section.</p>
                                        <p className='swalfunremitap1 mb-0 mt-1'><i className="fas sdashhic2 fa-arrow-right"></i> Confirm your payment by clicking the <span>"Pay Now"</span> button, otherwise click the <span>"Cancel"</span> button to abort.</p>
                                        <p className='swalfunremitap1 mb-0 mt-1'><i className="fas sdashhic2 fa-arrow-right"></i> Ensure you have a Debit/ATM card that has been enabled for online transactions, specifying the <span>"Card Number", "Expiry Date", "Card PIN" and "CVV2 Code".</span></p>
                                        <div className='shoviewall shogtfpajk px-2 py-1 mt-3'><a>Begin Payment Process</a></div>
                                        <img src={remita} className='mt-2 '/>
                                    </div>
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
                </div>
            </div>
        </main>
    </>
  )
}

export default WalletFunding