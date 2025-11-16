import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 text-center bg-white shadow-xl rounded-2xl">
        <h1 className="mb-4 text-3xl font-bold text-indigo-700">Weather App</h1>
        <p className="mb-8 text-gray-600">Secure login required</p>
        <button
          onClick={() =>
            loginWithRedirect({
              authorizationParams: {
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                scope: "openid profile email offline_access", 
              },
            })
          }
          className="w-full py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Login with Auth0
        </button>
      </div>
    </div>
  );
}