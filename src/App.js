// // import React, { useReducer, useState } from "react";

// // const handleEverything = (state, action) => {
// //   switch (action.type) {
// //     case "Increment":
// //       return {count: state.count + 1, showText: state.showText}
// //     case "ShowText":
// //       return {count: state.count + 1, showText: !state.showText}
// //       default:
// //         return state
// //   }
// // }

// // const UseReduce = () => {
// //   const [state, dispatch] = useReducer(handleEverything, 
// //     {count: 0, showText: false, header: 'Use reduce latihan'})
// //   return (
// //     <div>
// //       <h1>{state.header}</h1>
// //       <h1>{state.count}</h1>
// //       <button onClick={() => {
// //         dispatch({ type: "Increment" });
// //         dispatch({ type: 'ShowText' })      
// //       }}>Increment</button>

// //       {state.showText && (
// //         <h3>Ini adalah harta karun</h3>
// //       )}
// //     </div>
// //   )
// // }
 
// // const App = () => {
// //   const [count, setCount] = useState(0);
// //   const [text, setText] = useState(true);
// //   const [hidden, setHidden] = useState(false)

// //   const addOne = () => {
// //     setCount(count + 1);
// //     setText(false)

// //     if (count === 25) {
// //       setHidden(true)
// //       setText(true)
// //     }
// //   }
// //   return (
// //     <>
// //       <div>
// //       <h1>{count}</h1>
// //       <button onClick={addOne}>Increment</button>
// //       {text && (
// //         <h2>Selamat datang</h2>
// //       )}
// //       {hidden && (
// //         <h2>Selamat anda menemukan harta karun</h2>
// //       )}
// //       </div>
// //       <div className="usereduce">
// //         <UseReduce />
// //       </div>
// //     </>

// //   )
// // }

// // export default App;

// // import React, { useEffect, useState } from "react";
// // import axios from 'axios'

// // const App = () => {

// //   const [data, setData] = useState('');

// //   useEffect(() => {
// //     axios
// //     .get('https://jsonplaceholder.typicode.com/comments')
// //     .then((response) => {
// //       setData(response.data[0].email)
// //       console.log(response.data)
// //     })
// //   }, []);
// //   return (
// //     <div className="app">
// //       <h1>Selamat Datang</h1>
// //       <h2>{data}</h2>
// //     </div>
// //   )
// // }

// // export default App


// import React, { useRef, useState } from "react";

// function App () {
//   const inputRef = useRef(null)
//   const [people, setPeople] = useState('People')


//   const handleClick = () => {
//     const item = inputRef.current.value;
//     setPeople(item)
//     inputRef.current.value = '';
//   }  
//   return (
//     <div>
//       <h1>Selamat Datang : {people}</h1>
//       <input 
//         type="text" 
//         placeholder="Your Name"
//         ref={inputRef}
      
//       />
//       <button onClick={handleClick}>Login</button>
//     </div>
//   )
// }

// export default App;


import React from "react";
import UseContext from "./component/useContext";

function App () {
  return (
    <div>
      <UseContext />
    </div>
  )
}

export default App;