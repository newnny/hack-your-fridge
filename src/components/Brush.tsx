import './BrushStyle.css'

type Dimentions = {
  width: number;
  height: number;
}

interface BrushProps {
  dimentions: Dimentions
}

const Brush: React.FC<BrushProps> = ({ dimentions }) => {
  return (
    <div
      className="brush-wrap"
      style={{
        height: dimentions.width / 2.5,
        width: dimentions.width / 2.5,
        marginLeft: -dimentions.width / 7
      }}
    />
  )
}

export default Brush;