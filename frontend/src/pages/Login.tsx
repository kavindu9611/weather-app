import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        audience: "https://weatherr-app/api", 
        scope: "openid profile email weather:read",
        prompt: "consent",
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="w-full px-6 py-3 text-base font-semibold text-blue-900 transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
    >
      Log In
    </button>
  );
};

export default Login;
