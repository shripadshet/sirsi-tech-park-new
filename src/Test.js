
import { useState ,useEffect} from 'react';
import './App.css';

function App() {


  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    const darkFavicon = 'https://www.google.com/favicon.ico';
    favicon.href = darkFavicon;
}, []);
  const changeFavicon = env => {
    const link = document.querySelector('link[rel="icon"]');

    if ( link && env === 'dev') {
     
      link.setAttribute('href', 'youtube.png');
    } else {
      link.setAttribute('href', 'logo512.png');
    }
  };
  <script>
  document.getElementsByTagName('div')[0].focus();
  </script>

  return (
    <div className="App">
      <header className="App-header">
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
    <div>
      <button onClick={() => changeFavicon('dev')}>
        Button 1
      </button>
<br/>
      <button onClick={() => changeFavicon()}>
        Button 2
      </button>
    </div>
    

<div className='main'>
<div className='left'>
<input  type="radio" id="html" name="fav_language" value="HTML"/>
 <label for="html">Vertical</label><br/>
  <input  tabindex="1" type="text" id="fname" name="fname"/>
  <input  tabindex="3" type="text" id="lname" name="lname"/>
  <input   tabindex="5" type="text" id="fname" name="fname"/>
  <input  tabindex="7" type="text" id="lname" name="lname"/>
  <input   tabindex="9" type="text" id="fname" name="fname"/>
  <input   tabindex="11"  type="text" id="lname" name="lname"/>
  <input   tabindex="13" type="text" id="fname" name="fname"/>
  <input  tabindex="15" type="text" id="lname" name="lname"/>
  <input  tabindex="17" type="text" id="fname" name="fname"/>
  <input tabindex="19" type="text" id="lname" name="lname"/>
  
  </div>
  <div className='right'>
  <input  type="radio" id="css" name="fav_language1" value="CSS"/>
  <label for="css">Horizontal</label><br/>
  <input  tabindex="2" type="text" id="fname" name="fname"/>
  <input tabindex="4"type="text" id="lname" name="lname"/>
  <input tabindex="6" type="text" id="fname" name="fname"/>
  <input tabindex="8" type="text" id="lname" name="lname"/>
  <input  tabindex="10" type="text" id="fname" name="fname"/>
  <input tabindex="12" type="text" id="lname" name="lname"/>
  <input tabindex="14" type="text" id="fname" name="fname"/>
  <input tabindex="16" type="text" id="lname" name="lname"/>
  <input tabindex="18" type="text" id="fname" name="fname"/>
  <input tabindex="20" type="text" id="lname" name="lname"/>
  
  </div>
  </div>
      </header>
    </div>
    
  );
}

export default App;
