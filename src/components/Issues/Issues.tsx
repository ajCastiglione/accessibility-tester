import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { Issue } from "../../types/issues.types";

function Issues() {
  const { data, loading } = useContext(GlobalContext);

  if (loading) return <></>;

  if (data.length === 0)
    return <h2 className="text-center p-4">No issues found!</h2>;

  const Issues = data.map((issue: Issue, idx) => {
    return (
      <div
        className="border-2 border-gray-300 rounded-md p-4 bg-white/5 break-words mb-4 md:mb-0"
        key={issue.code + idx}
        data-testid="issue"
      >
        <div>
          <h4 className="font-bold text-md mb-4">{issue.message}</h4>

          <p className="bg-blue-500/40 p-3 mb-4 text-sm">{issue.context}</p>

          <p className="bg-blue-400/30 p-2 mb-4 text-sm">CODE: {issue.code}</p>

          <p className="bg-blue-400/10 p-2 text-sm">
            SELECTOR: {issue.selector}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="mb-4">Total issues: {data.length}</h2>
      <div className="md:grid md:grid-cols-2 gap-4 pb-5">{Issues}</div>
    </>
  );
}

export default Issues;
