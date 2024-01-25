import { ReactNode } from 'react';
import '../styles/BrushStyle.css'

type Dimentions = {
  width: number;
  height: number;
}

interface BrushProps {
  dimentions: Dimentions;
  children: ReactNode
}

const Brush: React.FC<BrushProps> = ({ dimentions, children }) => {
  return (
    <div
      className="brush-wrap"
      style={{
        height: dimentions.width / 2.5,
        width: dimentions.width / 2.5,
        marginLeft: -dimentions.width / 7
      }}
    >
      <div
        style={{
          marginTop: -dimentions.width / 7,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Brush;