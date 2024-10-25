// import add from '../../Utils/calculate';
import {add, multiply , onekboronaamaita as short} from '../../Utils/calculate';
import './Sunglass.css'

// import Watch from '../Watch/Watch'; 

// .. -> duita dot mane ekta level upore uta  

const Sunglass = () => {
    const first = 55;
    const second = 199; 
    const sum = add(first,second); 
    const mult = multiply(first,second); 
    const check = short(first,second); 

    console.log(sum,mult,check)

    return (
        <div>
            
        </div>
    );
};

export default Sunglass;