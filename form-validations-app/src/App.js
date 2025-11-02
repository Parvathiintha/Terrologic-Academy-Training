
import './App.css';
import CustomForm from './CustomForm';
import FormWithErrors from './FormWithErrors';
import MyForm from './Myform';
// import MyInput from './MyInput';
function App() {
  return (
  <>
      {/* <MyInput label="Name" /> */}
      <MyForm />
      <CustomForm/>
      <FormWithErrors/>
 </>
  );
}

export default App;
