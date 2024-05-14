import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import Main from "./components/Main";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Header />
      <BookingForm />
      <Footer/>      
    </>
  );
}

export default App;
