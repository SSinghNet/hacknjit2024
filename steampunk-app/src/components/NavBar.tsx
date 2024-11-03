import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserRound } from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  const signOutWithGoogle = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

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
        className="absolute left-0 right-0 mx-auto size-32 translate-y-[40%] cursor-pointer transition-transform hover:rotate-90 lg:translate-y-[32%]"
      />
      {!user ? (
        <Button
          variant="outline"
          onClick={signInWithGoogle}
          className="text-xl text-bronze-700 md:text-2xl"
        >
          Sign in
        </Button>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-2">
            <UserRound className="stroke-bronze-700" strokeWidth={2} />
            <p className="text-xl text-bronze-800">
              Greetings, {user.displayName}
            </p>
          </div>
          <Button
            variant="ghost"
            onClick={signOutWithGoogle}
            className="text-xl text-bronze-700 md:text-2xl"
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
