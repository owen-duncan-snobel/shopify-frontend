import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

const API_KEY = process.env.REACT_APP_API_KEY;


function App() {

  const [data, setData] = useState(() => {
    const savedPhotos = localStorage.getItem('space_photos');
    const parsePhotos = JSON.parse(savedPhotos);
    return parsePhotos || Array(5).fill({});
  });



  useEffect(() => {
    if (!Object.keys(data[0]).length){
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`)
      .then(res => res.json())
      .then(data => {
        data.map(photo => photo.liked = false);
        localStorage.setItem('space_photos', JSON.stringify(data))
        setData(data)
      })
    }
  }, [])


  return (
    <>
    <Navbar />
    <div>
      {data.map((photo) => {
        return (
          <Card key={photo.url} photo={photo} />
        )
      })}
    </div>
    </>
  );
}

export default App;
