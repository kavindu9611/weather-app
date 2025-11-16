import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import WeatherDashboard from "./pages/WeatherDashboard";
import Login from "./pages/Login";

export default function App() {
  const { isLoading, isAuthenticated, handleRedirectCallback } = useAuth0();
  const [callbackDone, setCallbackDone] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/callback" && !callbackDone) {
      setCallbackDone(true);
      handleRedirectCallback()
        .then(() => {
          window.history.replaceState({}, "", "/");
        })
        .catch((err) => {
          console.error("Callback failed:", err);
          window.location.replace("/");
        });
    }
  }, [handleRedirectCallback, callbackDone]);

  if (isLoading || (window.location.pathname === "/callback" && !callbackDone)) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-white">
        Authenticating...
      </div>
    );
  }

  return isAuthenticated ? <WeatherDashboard /> : <Login />;
}