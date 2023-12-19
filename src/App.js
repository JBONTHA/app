import logo from './logo.svg';
import './App.css';
import EmployeeComponent from './EmployeeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <h1>Employee Management App</h1>
      <EmployeeComponent />
      <Routes>
            <Route path="/register" component={RegisterCompo} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/update/:id" component={UpdateComponent} />
            {/* Add other routes as needed */}
            <Route path="/" component={EmployeeListComponent} />
          </Routes>
    </div>
    </div>
   </Router> 
  );
}

export default App;
