import Calculator from './Calculator';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <div style={{ 
          backgroundColor: '#1a1a1a', 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '20px'
        }}>
          <Calculator />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;