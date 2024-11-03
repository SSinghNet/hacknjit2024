import ChatBubble from "@/components/ChatBubble";
import ChatSidebar from "@/components/ChatSidebar";
import NavBar from "@/components/NavBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      id="background"
      className="h-screen bg-[url('steampunk-overlay.webp')] bg-cover bg-fixed bg-center"
    >
      <SidebarProvider defaultOpen={false}>
        <NavBar />
        <main className="pt-24">
          <Outlet />
        </main>
        <ChatBubble />
        <ChatSidebar />
      </SidebarProvider>
    </div>
  );
};

export default Layout;
