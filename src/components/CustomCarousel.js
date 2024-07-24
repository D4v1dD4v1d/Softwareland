import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';// se importa lo que se va a necesitar
// items es un arreglo de objetos que es lo que va a llevar el carousel
const items = [
  {
    src: '/imagen1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://www.hibridosyelectricos.com/uploads/s1/48/63/72/seres-nueva-marca-coches-electricos-seres-3-portada2.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Third+Slide',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Fourth+Slide',
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  //active index, es el index de la imagen que se va a mostrar en el carousel
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    //=== es para comparar estrictamente valor y tipo de dato
    /*si el indice actual es igual a la longitud -1 es decir al la ultima imagen
     este se reinicia, si no, solo aumenta en 1 el indice
    */
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    //esta funcion es lo mismo que next pero invertida para regresar en lugar de avanzar
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default CustomCarousel;
