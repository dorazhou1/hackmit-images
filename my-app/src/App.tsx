// import { Chat } from "@/Chat/Chat";
// import { ChatIntro } from "@/Chat/ChatIntro";
// import { randomName } from "@/Chat/randomName";
// import { Layout } from "@/Layout";
// import { UserMenu } from "@/components/UserMenu";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ChatApp } from "@/pages/ChatApp";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ChatApp />} />
          <Route path="/test" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
