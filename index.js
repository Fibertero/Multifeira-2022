invalidItens = ["'",'!',',','.','@','$','#','%','&','(',')','*','-','+','/'];
let text = document.getElementsByName('nome');
const getInputValue = ()=>{
    let inputValue = document.getElementById("username").value;
    for(i=0;i<inputValue.length;i++){
        let s = inputValue.slice(i,i+1);
        for(f=0;f<invalidItens.length;f++){
            if(s===invalidItens[f]){
                let x = inputValue.replace(invalidItens[f],"");
                inputValue = x
            }
        }
    }
    return inputValue;
}

const removeInvalidItens = () =>{
    for(y=0;y<document.getElementById("username").value.length+2;y++){
        document.getElementById("username").value = getInputValue()
    }
}