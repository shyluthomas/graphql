import './App.css';

// import { Title} from './components/typography';

import Signin from './components/signin';
import Signup from './components/signup';




function App() {



  return (
    <div className="App flex justify-around mt-10 w-full flex-col  sm:flex-row">
       <Signin></Signin>
       <Signup></Signup>
     </div>
  );
}

export default App;
