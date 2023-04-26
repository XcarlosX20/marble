import styles from './Circlex.module.css'
interface Circle{
 radius: number,
 angle: number
}
 const array = ['lime', 'orange', 'blue', 'teal', 'pink']
const Circle = ({radius, angle}:Circle) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
    return ( 
    <>
    <div style={{left:`${x}px`, top: `${y}px`, right:x+'px', bottom: y+'px'}} className={styles.circle}>
    </div>
    </> );
}
 const CircleContainer = () => {
  let n = array.length;
  let radius = 100;
  const angle = (2 * Math.PI) / n;
  return ( 
  <>

    <div className={`${styles['circle-container']}`}>
    {array.map((item, index) => (
      <Circle key={item} angle={angle * index} radius={radius}/>
    ))}
  </div>
  </> );
 }
  
 export {CircleContainer};