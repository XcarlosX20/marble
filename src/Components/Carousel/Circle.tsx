import React, { useEffect, useRef, useState } from 'react';
import styles from './Circle.module.css';
type selected = {img: string, id: string, name: string}
interface Circle {
angulo: number
options: selected[]
}
interface Props {
size: number
options: selected[]
}
const Circle = ({options, size}:Props) => {
  const [selected, setSelected] = useState<selected>({name: '', id: '', img: ''})

  const n = options.length;  // number of circles
  const r = size / 2 // radius
  const circleRef = useRef(null)
  let originX:number;
  let originY:number;
  useEffect(() => {
    originX = circleRef.current.children[0].offsetLeft
    originY = circleRef.current.children[0].offsetTop
    const circle = document.querySelectorAll('.el');
    circle.forEach((element,index) => {
      element.style.top = `${originX + r*Math.cos(2*Math.PI/n*index)}px`;
      element.style.left = `${originY + r*Math.sin(2*Math.PI/n*index)}px`;
    })
  }, [])
  
  //       element.style.left = `${originX + r*Math.cos(0.01 + 2*Math.PI/n*i)}px`;
  //       element.style.left = `${originX + r*Math.cos(0.01 + 2*Math.PI/n*i)}px`;

  return (
    <div className={`${styles.circle}`} style={{width: size, height: size}} ref={circleRef} >
      {options.map((option, index) => (
        <div
          key={index}
          className={`${styles.element} el`}
          onClick={() => setSelected(option)}
          // style={{top: `${ r*Math.sin(0.01 + 2*Math.PI/n*index)}px`, left: `${ r*Math.sin(0.01 + 2*Math.PI/n*index)}px`}}
        >
          <img className='w-full h-auto' src={option.img} alt={option.name}/>
        </div>
      ))}
      <div className={styles['selected-container']} style={{width: r, height: r}}>
        <div className={`${styles.selected} bg-light-200`}>
        {/* <div className={styles['selected-img']}>
          <img  alt={`focus on ${selected.name|| options[0].name }`}
        src={selected.img || options[0].img}/>
        </div> */}
        <div className={styles['selected-text']}>
           <p className='text-center w-full'>{selected.id.length ? selected.name : options[0].name}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export {Circle};