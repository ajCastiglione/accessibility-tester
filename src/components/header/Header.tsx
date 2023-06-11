import Form from "../Form/Form";

function Header() {
  return (
    <div className="container max-w-5xl m-auto">
      <div className="card bg-blue-900 text-white p-3 my-5">
        <div className="card-body">
          <h2 className="mb-3">Website Accessibility Tester</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Header;
