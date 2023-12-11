import Background from './assets/poster-3.png';
import DraggableQRCode from './components/DraggableQRCode';
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <div style={{ width: '825px', height: 'auto', border: '1px solid red', overflow: 'hidden', margin: '100px auto' }}>

        <DraggableQRCode backgroundImageSrc={Background} />
      </div>
    </>
  )
}

export default App
