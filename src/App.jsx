import React from 'react';
import Card from './Cards';
import Sdata from "./Sdata"

const App=()=>{
    return(

    
  <>
    <h1 className='heading_style'> Our Room 210 -The Golden Room </h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link} />
      );
    })}
  </>
)
};
export default App;
























// import React from 'react';
// import { sum, sub, div, mul } from './Calcy';

// function App() {
//     return (
//         <>
//             <ul>
//                 <li>Calculator</li>
//                 <li>The Summation of 2 Number is: {sum(10, 3)}</li>
//                 <li>The Subtration of 2 Number is: {sub(10, 3)}</li>
//                 <li>The Division of 2 Number is: {div(10, 3)}</li>
//                 <li>The Multiplication of 2 Number is: {mul(10, 3)}</li>
//             </ul>
//         </>
//     );
// }
// export default App;
// function sum(a,b){
//     return (a+b);
// }
// function sub(a,b){
//     return (a-b);
// }
// function div(a,b){
//     return (a/b);
// }
// function mul(a,b){
//     return (a*b);
// }
// export default sum;
// export {sub,div,mul}






























// Challenge 4  Wishing Page
// import './index.css'
// let mydate = new Date()
// mydate = mydate.getHours()
// let message = ''
// const cssstyle = {}
// if (mydate >= 1 && mydate < 12) {
//     message = "Good Morning"
//     cssstyle.color = 'green'
// }
// else if (mydate >= 12 && mydate < 17) {
//     message = "Good Afternoon"
//     cssstyle.color = 'orange'
// }
// else {
//     message = "Good Night"
//     cssstyle.color = 'red'
// }
// function App() {
//     return (
//         <>
//             <div>
//                 <h1>Hello Prashant, <span style={cssstyle}>{message}</span> </h1>
//             </div>
//         </>
//     );
// }
// export default App;