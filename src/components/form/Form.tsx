import { GlobalContext } from "../../context/Context";
import { useContext } from "react";

function Form() {
  const { setUrl, fetchUrl, url } = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bail if no url
    if (!url) return;

    fetchUrl?.(url);
  };

  return (
    <form action="" id="form" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="url"
          name="url"
          id="url"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter a website url..."
          required
          onChange={e => setUrl?.(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
