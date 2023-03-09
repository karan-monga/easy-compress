/* eslint-disable react/prop-types */
import React from 'react';
import Logo from '../assets/images/file-icon.png';
import '../assets/css/uploadfiles.css';

export const BeforeUpload = ({ getInputProps, getRootProps }) => {
	return (
		<div className='uploadFiles' {...getRootProps()}>
			<input {...getInputProps()} />
			<img className='logo' src={Logo} alt='Hello' />
			<div className='uploadText'>drop your jpg, png, or svg files</div>
			<div className='or'>
				<div className='line'></div>
				<div className='orText'>or</div>
				<div className='line'></div>
			</div>
			<button className='uploadButton'>
				<div className='buttonContainer'>
					<i style={{ marginTop: 3 }} className='fas fa-upload'></i>
					<div className='browseBtn'>upload</div>
				</div>
			</button>
		</div>
	);
};
