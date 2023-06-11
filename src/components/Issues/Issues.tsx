import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { Issue } from "../../types/issues.types";

function Issues() {
  const { data } = useContext(GlobalContext);

  if (data.length === 0)
    return <h2 className="text-center p-4">No issues found!</h2>;

  const Issues = data.map((issue: Issue, idx) => {
    return (
      <div
        className="mb-4 border-2 border-gray-300 p-4 bg-white/5"
        key={issue.code + idx}
      >
        <div>
          <h4 className="font-bold text-xl mb-4">{issue.message}</h4>

          <p className="bg-blue-500/40 p-3 mb-4">{issue.context}</p>

          <p className="bg-blue-400/30 p-2 mb-4">CODE: {issue.code}</p>

          <p className="bg-blue-400/10 p-2">SELECTOR: {issue.selector}</p>
        </div>
      </div>
    );
  });

  return <div>{Issues}</div>;
}

export default Issues;
