import './App.css';
import ProductShowPage from './components/ProductShowPage';
import ProductIndexPage from './components/ProductIndexPage';
import ShapeMaker from './components/ShapeMaker';

function App() {
  return (
    <div className="App">
      <ProductShowPage />
      <ProductIndexPage />
      <ShapeMaker />
    </div>
  );
}

export default App;
