import logo from './logo.svg';
import './App.css';
//StarRating 컴포넌트 사용을 위한 import
import StarRating from './components/star-rating/index';

function App() {
  return (
    <div className="App">
        <StarRating starCount={5}/>
    </div>
  );
}

export default App;
