//Storage 

const addToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id'); 
    const id = idInput.value;

    const valueInput = document.getElementById('storage-value'); 
    const value = valueInput.value;


    //set item
    if(id && value){
        localStorage.setItem(id,value); 
    }

    //ekbar set korar por empty kore diba
    idInput.value = '';
    valueInput.value = ''; 

    //local storage e items rakte hoile such as array tahole stringify kore pataite hobe 
}
