import { useContext } from "react";
import { GlobalContext } from "./context/Context";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Issues from "./components/Issues/Issues";

function App() {
  const { loading, success } = useContext(GlobalContext);

  return (
    <div className="bg-gray-900 text-white py-4 min-h-screen">
      <div className="max-w-5xl m-auto">
        <Header />

        {loading && (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        )}

        {success && <Issues />}
      </div>
    </div>
  );
}

export default App;
