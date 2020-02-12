import React from 'react';
import '../styles/main.scss';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <div style={{ height: 100 + 'vh' }} className="error-site">
    <Helmet>
      <meta charSet="utf-8" />
      <title>404 - Amadeo Media</title>
      <meta
        name="keywords"
        content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika,tanio, tanie, grafik"
      />
      <meta name="author" content="Amadeusz Grzesiak" />
      <meta
        name="description"
        content="Zajmujemy się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko,
            sprawdź naszą ofertę! Stwórzmy coś razem."
      />
      <html lang="pl-PL" />
    </Helmet>
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
