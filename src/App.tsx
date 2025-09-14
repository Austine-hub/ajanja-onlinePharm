import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/Header";
import AppRoutes from "./routes";

/**
 * Error Boundary Fallback Component
 */
const ErrorFallback = ({ error, resetErrorBoundary }: { error: any; resetErrorBoundary: () => void }) => (
  <div className="error-fallback min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="text-red-500 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 
            1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 
            0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-6">
        We're sorry, but there was an unexpected error. Please try refreshing the page.
      </p>

      {import.meta.env.MODE === "development" && (
        <details className="text-left bg-gray-100 rounded p-4 mb-4">
          <summary className="font-semibold cursor-pointer">Error Details (Development)</summary>
          <pre className="mt-2 text-sm text-red-600 whitespace-pre-wrap">{error.message}</pre>
        </details>
      )}

      <div className="space-x-4">
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
);

/**
 * Main App Component
 */
function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <Header />
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;





