import './App.css';
import './style.css'
import img1 from './photo-1539683255143-73a6b838b106.jpg'


function App() {
  let firstName="will"
  let lastName='dan'
  return (
    <div className="App">
      <div style={{border:'solid 1px black;max-width:100vw'}}>
    <h1>Oluwasheyi</h1>
      <h2 className='h1-tag'>This is my Image App</h2>
      <img src={img1} alt='image' className='image1'/> <br/>
      <img src='/photo-1504639725590-34d0984388bd.jpg' className='image2'/><br/>

      <iframe className='iframe' width="320" height="240" controls src="https://www.youtube.com/embed/MRbqLWAwqko"
       title="YouTube video player" 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
       encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default App;
