import React from 'react'
import Logo from '../Assets/Images/load-8510_256.gif'
import '../Styles/preloader2.css'

const Preloader2 = () => {
	return (
		<div id='preloader-active'>
			<div className='preloader2 d-flex align-items-center justify-content-center'>
				<div className='preloader-inner position-relative'>
					<div className='preloader-circle'></div>
					<div className='preloader-img pere-text'>
						<img
							className='logo'
							alt='Logo'
							src={Logo}
							width='100px'
							height='100px'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Preloader2
