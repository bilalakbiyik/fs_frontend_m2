//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

//? //? CSS dosyalari import "path" seklinde eklenir.
import "./Main.css";
import kediImage from "./images/kedi.jpeg";

const Main = () => {
  //! JS alanı

  //? Local ve global style degiskeni
  const headerStyle = {
    color: "hotpink",
    backgroundColor: "lightgray",
    fontSize: "0.9rem",
    fontWeight: "bold",
  };

  return (
    <main>
      <h2 style={{ color: "red", backgroundColor: "gray" }}>MAIN SECTION</h2>

      <h3 style={headerStyle}>Other Header</h3>

      <p style={headerStyle}>Lorem, ipsum.</p>

      {/* External CSS'ten stil geldi */}
      <p className="par">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet,
        consequatur in unde iusto molestias magni saepe cumque vitae
        reprehenderit.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis
        accusamus animi, voluptate corrupti adipisci!
      </p>

      <div>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2023/04/29/09/51/polana-kalatowki-7958161_640.jpg"
          alt="yayla"
        />
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2024/02/19/22/58/forest-8584311_640.jpg"
          alt="orman"
        />
        <img
          id="img-id"
          src="https://cdn.pixabay.com/photo/2024/02/16/16/39/flower-8577961_640.jpg"
          alt="cicek"
        />

        {/* Lokal ortamımızda buluna bir resmi dogrudan path vererek cagiramayiz. Bunun yerine import yaparız */}
        <img className="img" src={kediImage} alt="kedi" />

        {/* Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. Ana dizin) */}
        <img className="img" src="./img/bird.webp" alt="bird" />
      </div>
    </main>
  );
};

export default Main;
