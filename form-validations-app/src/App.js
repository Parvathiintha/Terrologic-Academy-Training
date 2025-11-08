
import './App.css';
import CustomForm from './CustomForm';
import ToggleExample from './Exmaple';
import FormWithErrors from './FormWithErrors';
import MyForm from './Myform';
import ThemeToggler from './ThemeToggle';
// import MyInput from './MyInput';
function App() {
  return (
  <>
      {/* <MyInput label="Name" /> */}
      <MyForm />
      <CustomForm/>
      <FormWithErrors/>
      <ToggleExample/>
      <ThemeToggler/>
 </>
  );
}

export default App;
