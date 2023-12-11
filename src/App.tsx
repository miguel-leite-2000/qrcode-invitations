import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Preview } from './components/Preview';

const App: React.FC = () => {
  const componentPDF = useRef(null);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [editedPosition, setEditedPosition] = useState(false);

  const [reloadKey, setReloadKey] = useState(0);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: `Convite`,
  });

  const savePosition = () => {
    localStorage.setItem('@tutondeleinvite', JSON.stringify({
      name: 'Certification',
      x: positionX,
      y: positionY,
    }));
    setEditedPosition(false);
    setReloadKey((prevKey) => prevKey + 1);
  };

  const resetPosition = () => {
    const getPosition = localStorage.getItem('@tutondeleinvite');
    if (getPosition) {
      setPositionX(0);
      setPositionY(0);
      setReloadKey((prevKey) => prevKey + 1);
    }
  };

  useEffect(() => {
    if (positionX !== 0 || positionY !== 0) {
      setEditedPosition(true);
    }
  }, [positionX, positionY]);

  return (
    <>
      <div key={reloadKey} ref={componentPDF}>
        <Preview setPositionX={setPositionX} setPositionY={setPositionY} />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}>
        <button
          style={{
            padding: '20px 30px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '6px',
            fontWeight: '500',
            background: 'rgb(22, 115, 255)',
            color: 'white',
          }}
          onClick={generatePDF}
        >
          Gerar PDF
        </button>
        {editedPosition && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}>
            <button
              onClick={savePosition}
              style={{
                padding: '20px 30px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '6px',
                fontWeight: '500',
                background: 'rgb(0, 126, 84)',
                color: 'white',
              }}
            >
              Salvar
            </button>
            <button
              onClick={resetPosition}
              style={{
                padding: '20px 30px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '6px',
                fontWeight: '500',
                background: '#dfdfdf',
                color: '#1d1d1d',
              }}
            >
              Reverter
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
