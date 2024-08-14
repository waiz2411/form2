import './App.css';
import Step1 from './My Components/Step1';
import Step2 from './My Components/Step2';
import Step3 from './My Components/Step3';
import Step4 from './My Components/Step4';
import Step5 from './My Components/Step5';
import Step6 from './My Components/Step6';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route  exact   path="/"  element={<Step1/>} />
          <Route path="/step2" element={<Step2/>} />
          <Route path="/step3" element={<Step3/>} />
          <Route path="/step4" element={<Step4/>} />
          <Route path="/step5" element={<Step5/>} />
          <Route path="/step6" element={<Step6/>} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
