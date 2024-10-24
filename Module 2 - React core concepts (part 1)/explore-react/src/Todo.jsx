/* eslint-disable react/prop-types */
// export default function Todo({task , isDone}){
//     // props are readonly and immutable

//     return (
//         <li>Task : {task}</li>
//     )
// }


//conditional Rendering 2 
// export default function Todo({task , isDone}){
//     // props are readonly and immutable
//     if(isDone === true){
//         return <li> Finished: {task}</li>
//     }
//     else{
//         return <li> Work On: {task}</li>
//     }
// }



//conditional rendering 3 - ternary operator and conditional rendering 

// export default function Todo({task , isDone}){
//     // props are readonly and immutable
//     return (
//         <li>{isDone ? 'Finish' : 'Work'} : {task}</li>
//     )
// }


//Conditional rendering 4 : && true hoile dekabe 
// export default function Todo({task , isDone}){
//     // props are readonly and immutable
//     return (
//         <li>{task} {isDone && 'Done'}  </li>
//     )
// }

//Conditional rendering 5 : || false hoile dekabe 
export default function Todo({task , isDone}){
    // props are readonly and immutable
    return (
        <li>{task} {isDone ||  'Do it'}  </li>
    )
}