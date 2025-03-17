
import { data } from 'react-router-dom'
import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReUseableForm from './components/ReuseableForm/ReUseableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFullForm from './components/StatefullForm/StateFullForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data ',data)
  }

  const handleSignInSubmit = data =>{
    
  }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUseableForm formTitel='Sign-Up' submitBtnText='Sign-Up' handleSubmit={handleSignUpSubmit}>
        <div>
          <h4>hello sign up</h4>
        </div>
      </ReUseableForm>
      <ReUseableForm formTitel='Sign-In' submitBtnText='Sign-In' handleSubmit={handleSignInSubmit}></ReUseableForm>
    </>
  )
}

export default App
