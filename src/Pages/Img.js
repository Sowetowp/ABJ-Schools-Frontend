import React from 'react';
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

// import {Transformation} from "@cloudinary/url-gen"
// import {CloudinaryImage} from "@cloudinary/url-gen";
// import {URLConfig} from "@cloudinary/url-gen";
// import {CloudConfig} from "@cloudinary/url-gen";

const Img = ({uploadedImage}) => {
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwgwcghfh'
    }
  })
  const myImage = cld.image(uploadedImage)
  myImage.resize(thumbnail().width(200).height(200).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
  
  return (
    <>
      <AdvancedImage cldImg={myImage} plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
    </>
  )
}

export default Img