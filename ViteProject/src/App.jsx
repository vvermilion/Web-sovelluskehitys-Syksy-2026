import './App.css';
import Greeting from './components/Greeting';

const App = () => {

  const sitename = 'Super site!';
  return (
    <>
      <h1>{sitename}</h1>
      <p>Hello! This is my app.</p>
      <Greeting name="Maisa" age={23}/>
      <ul>
        <li>This</li>
        <li>is</li>
        <li>my</li>
        <li>list</li>
      </ul>
    </>
  );
};
export default App;
