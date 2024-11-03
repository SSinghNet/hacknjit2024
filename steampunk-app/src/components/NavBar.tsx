import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: "url('/navbar-background.webp')" }}
      className="fixed top-0 z-50 flex h-24 w-full items-center justify-between bg-cover bg-bottom px-8 pb-8 pt-4 font-['Alegreya_SC'] lg:px-16"
    >
      <Link
        to="/catalog"
        className="pl-4 text-xl font-bold text-bronze-700 md:text-2xl"
      >
        Browse
      </Link>
      <img
        src="/temp-logo.png"
        onClick={() => navigate("/")}
        style={{ transitionDuration: "500ms" }}
        className="size-32 translate-y-[40%] cursor-pointer transition-transform hover:rotate-90 md:translate-x-2.5 lg:translate-y-[32%]"
      />
      <Button
        variant="outline"
        onClick={() =>
          navigate("/", { replace: true, state: { from: "homepage" } })
        }
        className="text-xl text-bronze-700 md:text-2xl"
      >
        Sign in
      </Button>
    </div>
  );
};

export default NavBar;
