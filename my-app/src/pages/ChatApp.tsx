import { Chat } from "@/Chat/Chat";
import { ChatIntro } from "@/Chat/ChatIntro";
import { randomName } from "@/Chat/randomName";
import { Layout } from "@/Layout";
import { UserMenu } from "@/components/UserMenu";
import { useState } from "react";
import { Image } from "@/components/Image";

export function ChatApp() {
  const [viewer] = useState(randomName());

  return (
    <Layout menu={<UserMenu>{viewer}</UserMenu>}>
      <ChatIntro />
      <Chat viewer={viewer} />
      <Image imageID="girl-smiling-flowers.jpg" />
    </Layout>
  );
}
