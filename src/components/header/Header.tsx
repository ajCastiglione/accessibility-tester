import Form from "../form/Form";

function Header() {
  return (
    <div className="container">
      <div className="card bg-blue-950 text-white">
        <div className="card-body">
          <h2 className="mb-3">Website Accessibility Tester</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Header;
