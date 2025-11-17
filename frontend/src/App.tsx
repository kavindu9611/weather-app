import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";
import WeatherDashboard from "./pages/WeatherDashboard";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800">
        <div className="text-center">
          <div className="inline-block w-16 h-16 mb-4 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
          <div className="text-xl font-medium text-white sm:text-2xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800">
        <div className="w-full max-w-md p-6 text-center bg-white bg-opacity-10 backdrop-blur-md rounded-2xl sm:p-8">
          <div className="mb-4 text-5xl sm:text-6xl">⚠️</div>
          <div className="mb-2 text-2xl font-bold text-white sm:text-3xl">Oops!</div>
          <div className="mb-3 text-lg text-white sm:text-xl">Something went wrong</div>
          <div className="text-sm text-gray-300 sm:text-base">{error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated ? (
        <WeatherDashboard />
      ) : (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-200 via-blue-500 to-slate-600">
          <div className="w-full max-w-md p-8 text-center bg-white shadow-2xl bg-opacity-10 backdrop-blur-md rounded-2xl sm:p-10">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 text-white sm:w-16 sm:h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">Weather App</h1>
              </div>
              <p className="text-base text-gray-200 sm:text-lg">
                Get started by signing in to your account
              </p>
            </div>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;