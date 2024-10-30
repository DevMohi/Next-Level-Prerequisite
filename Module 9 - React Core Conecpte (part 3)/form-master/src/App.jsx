import "./App.css";
// import HookForm from "./components/HookForm/HookForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

const handleSignUpSubmit = (data) => {
  console.log("sign up", data);
};
const handleUpdateSubmit = (data) => {
  console.log("update dataa", data);
};

function App() {
  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm>   */}
      {/* <StatefulForm></StatefulForm>  */}

      {/* <RefForm></RefForm>  */}
      {/* <HookForm></HookForm>   */}
      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <h2>Sign Up for this</h2>
        <p>Oke</p>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        btnText="Update"
        handleSubmit={handleUpdateSubmit}
      >
        <div>
          <h2>Update Profile Please</h2>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
