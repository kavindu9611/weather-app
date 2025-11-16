import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        audience: "https://weatherr-app/api", // your API identifier
        scope: "openid profile email weather:read",
        prompt: "consent", // ⚡ forces consent screen
      },
    });
  };

  return (
    <button onClick={handleLogin} className="button login">
      Log In
    </button>
  );
};

export default Login;
