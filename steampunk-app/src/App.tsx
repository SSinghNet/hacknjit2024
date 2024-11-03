import NavBar from "@/components/NavBar";
import ChatBubble from "@/components/ChatBubble";
import ItemCarouselSection from "./components/ItemCarouselSection";
import { SidebarProvider } from "@/components/ui/sidebar";
import ChatSidebar from "@/components/ChatSidebar";

function App() {
  return (
    <div
      id="background"
      className="h-screen bg-[url('steampunk-overlay.webp')] bg-cover bg-fixed bg-center"
    >
      <NavBar />
      <main className="pt-24">
        <section className="flex h-[calc(100vh-6rem)] flex-col items-center justify-start pt-40">
          <h1 className="text-center text-6xl font-bold lg:text-7xl">
            Octavius's Workshop
          </h1>
          <p className="mt-4 px-8 text-center text-2xl text-bronze-400">
            The premier marketplace for mechanical parts
          </p>
        </section>
        <ItemCarouselSection name="Best Sellers" />
        <ItemCarouselSection name="Cogs & Gears" />
        <ItemCarouselSection name="Engines" />
      </main>
      <SidebarProvider defaultOpen={false}>
        <ChatBubble />
        <ChatSidebar />
      </SidebarProvider>
    </div>
  );
}

export default App;
