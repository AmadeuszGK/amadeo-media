import React from 'react';
import '../styles/main.scss';

const NotFoundPage = () => (
  <div style={{ height: 100 + 'vh' }} className="error-site">
    <div className="canvas__container">
      <canvas id="stars" width="300" />
      <div className="canvas-text">
        <h1>BŁĄD 404</h1>
        <p>UPSS! WYGLĄDA NA TO, ŻE ZABŁĄDZIŁEŚ</p>
        <a className="link-home" href="/">
          POWRÓT NA STRONĘ GŁÓWNĄ
        </a>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
