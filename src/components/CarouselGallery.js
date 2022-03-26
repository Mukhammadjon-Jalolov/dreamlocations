import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import '../Appp.scss';

const CarouselGallery = () => {
  const rasmarray = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));
  //console.log(rasmarray)

  function importAll(r) {
	let rasmlar = {};
	let rasmarray = [];
		r.keys().forEach((item, index) => {
			var rasm = {}
			rasmlar[item.replace('./', '')] = r(item);
			rasm.src = 'images/'+item.replace('./', '')
			rasmarray.push(rasm)
		});
	return rasmarray
	}

  return (

  
    <Carousel images={rasmarray} style={{ height: 400, width: '70%' }} isAutoPlaying = {true} transitionDurationLimit = {300} transitionSpeed = {3} />
	
	
  );
};

export default CarouselGallery;