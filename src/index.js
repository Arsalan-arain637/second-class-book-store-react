
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
  <Slider9/>
  <Footer/>
  
</div>
      );
};
const Slider1 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 01 <br></br><br></br>“A room without books is like a body without a soul.” ..</div>
    </div>
</div>
  );
};

const Slider2 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 02 <br></br><br></br>“A room without books is like a body without a soul.” .</div>
    </div>
</div>
  );
};

const Slider3 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 03 <br></br><br></br>“A room without books is like a body without a soul.” ..</div>
    </div>
</div>
  );
};

const Slider4 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 04 <br></br><br></br>“A room without books is like a body without a soul.” .</div>
    </div>
</div>
  );
};

const Slider5 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 05 <br></br><br></br>“A room without books is like a body without a soul.” .</div>
    </div>
</div>
  );
};

const Slider6 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 06 <br></br><br></br>“A room without books is like a body without a soul.” .</div>
    </div>
</div>
  );
};

const Slider7 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc"> Book 07 <br></br><br></br>“A room without books is like a body without a soul.” ..</div>
    </div>
</div>
  );
};

const Slider8 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 08 <br></br><br></br>“A room without books is like a body without a soul.” </div>
    </div>
</div>
  );
};

const Slider9 = () => {
  return (
    <div className="container">
    <div className= "gallery">
      <img src="images/book2.jpeg"></img>
      <div className="desc">Book 09 <br></br><br></br>“A room without books is like a body without a soul.” .</div>
    </div>
</div>
  );
};



const Footer = () => {
   return(
     <div className="footer-title">
       <h2 className="footer">All rights reserved</h2>
   </div>
   );
 };









ReactDOM.render(<App />, document.getElementById("root"));