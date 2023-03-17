import React from 'react';
import ImageSection from './components/ImageSection';

const App = () => {
  const retouchImages = ['./img/retouch/1.jpg',
  './img/retouch/2.jpg',
  './img/retouch/3.jpg',
  './img/retouch/4.jpg',
  './img/retouch/5.jpg',
  './img/retouch/6.jpg',
  './img/retouch/7.jpg',
  './img/retouch/8.jpg',
  './img/retouch/9.jpg',
  './img/retouch/10.jpg',
  './img/retouch/11.jpg',
  './img/retouch/12.jpg',
  './img/retouch/13.jpg',
  './img/retouch/14.jpg',
  './img/retouch/15.jpg',
];
  const photographyImages = ['./img/photo/0.jpg',
  './img/photo/1.jpg',
  './img/photo/2.jpg',
  './img/photo/3.jpg',
  './img/photo/4.jpg',
  './img/photo/5.jpg', 
  './img/photo/6.png',
  './img/photo/7.jpg',
  './img/photo/8.jpg',
  './img/photo/9.jpg',
  './img/photo/10.jpg',
  './img/photo/11.jpg',
  './img/photo/12.jpg',
  './img/photo/13.png',
  './img/photo/14.jpg',
  './img/photo/16.jpg',
  './img/photo/17.jpg',
  './img/photo/18.jpg',
  './img/photo/19.jpg',

  ];

  return (
    <div className="App">
      
      <div className="content">
        <ImageSection images={retouchImages} title="Retouch" />
        <ImageSection images={photographyImages} title="Photography" />
      </div>
    </div>
  );
};

export default App;
