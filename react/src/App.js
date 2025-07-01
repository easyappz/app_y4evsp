import Calculator from './Calculator';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <div className="calculator-container">
          <Calculator />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;