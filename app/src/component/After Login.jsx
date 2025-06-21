 import Login from './component/Login.jsx'
import AfterLogin from './component/AfterLogin.jsx';
function App() {
  let login = true;
  return (
    login ? <AfterLogin /> : <Login />
  )
};
export default App;