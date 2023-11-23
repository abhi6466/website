// Function component
// const App = () => {
//     return 
//     <h1> Welcome to React</h1>
// };


// export default App;


//  How to creat JSX:
//     const App = () => {
//     const element = <h2> This is my first JSX</h2>;
//         return element;
// };

// export default App;


// const App = () => {
// return (
// <div>
//     <h1> Welcome to React</h1>
//     <p>This is how we create react nested element</p>
// </div>
        
// );
// };
// export default App;

//Props:

// import Message from "./components/Props/Message"

// const App = () => {
//   return (
//     <div>
//         <h1> App component</h1>
//         <Message username= "Abhishek" age={29}/>
//     </div>
//   )
// }

// export default App


// import UseStateComp from './my-app/src/UseState/UseStateComp'

// const App = () => {
//   return (
//     <div>
//         <UseStateComp />
//     </div>
//   )
// }

// export default App

import { Header } from "./Website portfolio/Header/Header"
import Navbar from "./Website portfolio/Navbar/Navbar"
import Services from "./Website portfolio/Services/Services";
import Footer from "./Website portfolio/Footer/Footer";
import Works from "./Website portfolio/Works/Works";

function App() {
  return (
      <div>
          <Navbar/>
          <Header/>
          <Services/>
          <Works/>
          <Footer/>
      </div>
  );
}

export default App
