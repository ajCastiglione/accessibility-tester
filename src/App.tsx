import { useContext } from "react";
import { GlobalContext } from "./context/Context";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Issues from "./components/Issues/Issues";

function App() {
  const { loading, success, error } = useContext(GlobalContext);

  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen">
      <div className="max-w-6xl m-auto">
        <Header />

        {loading && (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        )}

        {error && (
          <p className="px-3 font-bold text-xl text-center text-red-500">
            Please enter a valid URL
          </p>
        )}

        {success && <Issues />}
      </div>
    </div>
  );
}

export default App;
