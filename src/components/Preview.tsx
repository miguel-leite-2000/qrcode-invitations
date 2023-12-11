import DraggableQRCode from './DraggableQRCode';
import Background from '../assets/poster-3.png';

type Props = {
  setPositionX: (position: number) => void
  setPositionY: (position: number) => void
}

export function Preview({setPositionX, setPositionY}: Props) {
  return (
    <div
      id="pdf-content"
      style={{
        width: '825px',
        height: 'auto',
        border: '1px solid red',
        overflow: 'hidden',
        margin: '100px auto',
      }}
    >
      <DraggableQRCode setPositionX={setPositionX} setPositionY={setPositionY} backgroundImageSrc={Background} />
    </div>
  )
}