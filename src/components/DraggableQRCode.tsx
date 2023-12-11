import React, { useState } from 'react';
import Draggable from 'react-draggable';
import QRCode from 'qrcode.react';

interface DraggableQRCodeProps {
  backgroundImageSrc: string;
}

const DraggableQRCode: React.FC<DraggableQRCodeProps> = ({ backgroundImageSrc }) => {
  const [qrCodeData, setQrCodeData] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleStop = () => {
    setIsDragging(false);
  };

  const handleDrag = (e: any, data: any) => {
    if (isDragging) {
      // Aqui, você pode acessar as informações de posicionamento durante o arrastar
      console.log('Posição:', { x: data.x, y: data.y });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Este é o seu convite ou imagem de fundo */}
      <img src={backgroundImageSrc} alt="Convite" style={{ width: 'auto', height: 'auto' }} />

      {/* Este é o seu QR Code arrastável */}
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        onStart={handleStart}
        onStop={handleStop}
        onDrag={handleDrag}
      >
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <QRCode value={qrCodeData} size={100} />
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableQRCode;
