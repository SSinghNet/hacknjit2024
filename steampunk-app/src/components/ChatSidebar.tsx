import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import ChatMessage from "./ChatMessage";

export default function ChatSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar side="right">
      <SidebarHeader className="mt-[5.5rem] flex flex-row items-center justify-between p-4">
        <h1 className="tracking-wide">Chat with Octavius</h1>
        <X
          onClick={toggleSidebar}
          className="h-4 w-4 cursor-pointer stroke-stone-500 transition-colors hover:stroke-foreground"
        />
      </SidebarHeader>
      <SidebarContent className="h-full bg-background">
        <ChatMessage message="Hello! How can I help you?" />
        <ChatMessage
          message="Hey, I need help with a part."
          userIsAuthor={true}
        />
      </SidebarContent>
      <SidebarFooter className="p-4">
        <form>
          <Textarea
            placeholder="Send message..."
            className="resize-none border-cyan-800 text-lg"
          />
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
