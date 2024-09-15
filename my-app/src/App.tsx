import { Chat } from "@/Chat/Chat";
import { ChatIntro } from "@/Chat/ChatIntro";
import { randomName } from "@/Chat/randomName";
import { Layout } from "@/Layout";
import { UserMenu } from "@/components/UserMenu";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";

export default function App() {
  const [viewer] = useState(randomName());
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>This is a test!</h1>} />
          <Route path="/test" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
  // return (
  //   <Layout menu={<UserMenu>{viewer}</UserMenu>}>
  //     <ChatIntro />
  //     <Chat viewer={viewer} />
  //   </Layout>
  // );
}
