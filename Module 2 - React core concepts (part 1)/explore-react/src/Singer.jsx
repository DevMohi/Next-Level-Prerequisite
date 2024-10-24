/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Singer ({singer}){
    console.log(singer);
    return(
        <div>
            <h3>Singer : {singer.name} </h3>
            <p>age : {singer.age}</p>
        </div>
    ) 
}