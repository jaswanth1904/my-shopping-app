import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header Section */}
      <Header />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar Section */}
        <Sidebar style={{ width: "20%" }} />

        {/* Content Section */}
        <div style={{ flex: 1, padding: "20px" }}>
          {/* Replace Home with Content or other logic */}
          <Content /> {/* You can use the Content component here */}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
