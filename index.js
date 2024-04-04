let input = document.querySelector('.guess')
let choose = document.querySelector('.choose')
let result = document.querySelector('.result')

let arr=['Azerbaijan','Baku','America','Turkiye','Istanbul']

let random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);
    
choose.addEventListener('click', function(){
    let newInput = input.value
    result.innerHTML=newInput
    if(arr[random]===newInput){
        result.innerText='Soz tapildi'
    }
    else{
        result.innerText='Bir daha sinayin'
    }
    
})