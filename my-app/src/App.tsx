// import { Chat } from "@/Chat/Chat";
// import { ChatIntro } from "@/Chat/ChatIntro";
// import { randomName } from "@/Chat/randomName";
// import { Layout } from "@/Layout";
// import { UserMenu } from "@/components/UserMenu";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ChatApp } from "@/pages/ChatApp";
import { SelectImages } from "./pages/SelectImages";
import { ImagePage } from "@/pages/ImagePage";
import { ConfigureGame } from "@/pages/ConfigureGame";
import { Finish } from "@/pages/Won";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ChatApp />} />
          <Route path="/test" element={<Home />} />
          <Route path="/selectimages" element={<SelectImages />} />
          {/* <Route path="/test" element={<Home />} /> */}
          <Route path="/image" element={<ImagePage />} />
          <Route path="/configuregame" element={<ConfigureGame />} />
          <Route path="/youredone" element={<Finish />} />
        </Routes>
      </Router>
    </>
  );
}
