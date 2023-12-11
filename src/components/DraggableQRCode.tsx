import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import QRCode from 'qrcode.react';

interface Position {
  x: number;
  y: number;
}
interface DraggableQRCodeProps {
  backgroundImageSrc: string;
  setPositionX: (position: number) => void
  setPositionY: (position: number) => void
}

// ...

const DraggableQRCode: React.FC<DraggableQRCodeProps> = ({ backgroundImageSrc, setPositionX, setPositionY }) => {
  const [qrCodeData, setQrCodeData] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<Position | null>(null);

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleStop = () => {
    setIsDragging(false);
  };

  const handleDrag = (e: any, data: any) => {
    if (isDragging) {
      setPositionX(data.x);
      setPositionY(data.y);
    }
  };

  useEffect(() => {
    const getPosition = localStorage.getItem('@tutondeleinvite');
    if (getPosition) {
      const newPosition = JSON.parse(getPosition) as Position;
      setPosition(newPosition);
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }, []);


  return (
    <>
      {position && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img src={backgroundImageSrc} alt="Convite" style={{ width: 'auto', height: 'auto' }} />
          <Draggable
            defaultPosition={{ x: position.x, y: position.y }}
            onStart={handleStart}
            onStop={handleStop}
            onDrag={handleDrag}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <QRCode value={qrCodeData} size={100} />
            </div>
          </Draggable>
        </div>
      )}
    </>
  );
};
export default DraggableQRCode;
