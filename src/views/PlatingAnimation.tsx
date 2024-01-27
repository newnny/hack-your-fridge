import React, { useState, useEffect } from 'react';
import Brush from '../components/Brush';
import { BrushSvg } from '../utils/BrushSvg';
import RandomCircles from '../components/RandomCircles';
import '../styles/PlatingAnimationStyles.css';

type Dimentions = {
  width: number;
  height: number;
}

interface PlatingAnimationProps {
  onClick:()=> void
}

const PlatingAnimation:React.FC<PlatingAnimationProps> = ({onClick}) => {
  const [dimentions, setDimentions] = useState<Dimentions>({
    width: window.innerWidth,
    height: window.innerWidth * 0.5
  })

  useEffect(() => {
    const updateDimension = () => {
      setDimentions({
        width: window.innerWidth,
        height: window.innerWidth * 0.5
      })
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [dimentions])

  return (
    <div className='main-wrapper'>
      <div className='animation-div'>
        <div className='anim-circle'
          style={{
            width: dimentions.width / 2.5,
            height: dimentions.width / 2.5,
          }}
        >
          <div>
            <Brush dimentions={dimentions}>
              <RandomCircles dimentions={dimentions} />
            </Brush>
            <BrushSvg />
          </div>
        </div>
      </div>
      <div>
        <p className='font'> HAYFRIE: HAck Your FRIdgE</p>
      </div>
      <div>
      <button onClick={onClick} className='btn'>
          Start
        </button>
      </div>
    </div>
  )
}

export default PlatingAnimation