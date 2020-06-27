
const App = () => {
  return (

<div>
  <h2 className="header">Home</h2>
  <h1 className="header-title">Arsalan Books</h1>
  <h1 className="banner-title">Online Book Store</h1>
  <button className="button-title">Order Now</button>
  <h1 className="logo">Book Store</h1>
  <Slider1/>
  <Slider2/>
  <Slider3/>
  <Slider4/>
  <Slider5/>
  <Slider6/>
  <Slider7/>
  <Slider8/>
  <Footer/>
  
</div>
      );
};
const Slider1 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book1 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};

const Slider2 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book2 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};

const Slider3 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book3 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};

const Slider4 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book4 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};

const Slider5 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book5 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};

const Slider6 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book6 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};

const Slider7 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc"> Book7 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};

const Slider8 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book8 <br></br>Lorem ispum dolor sit amet,consectetur adipiscing elit.</div>
    </div>
</div>
  );
};


const Footer = () => {
  return(
    <div>
      <h1 className ="footer-title">ALL RIGHTS RESERVED!!!</h1>
    </div>
  );
};









ReactDOM.render(<App />, document.getElementById("root"));