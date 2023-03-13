let nmb = document.querySelector('.couter-nmb');
let inc = document.querySelector('.inc-btn');
let dec = document.querySelector('.dec-btn');
let clr = document.querySelector('.clr-btn');

let counter = 0;

function render(){
    nmb.innerHTML = counter;
}
function increment(){
    counter += 1;
}
function decrement(){
    if(counter >= 1){
        counter -= 1;
    } else{
        return;
    } 
}
function clear(){
    counter = 0;
}
render()
inc.addEventListener('click', () => {
    increment()
    render()
})
dec.addEventListener('click', () => {
    decrement()
    render()
})
clr.addEventListener('click', () => {
    clear()
    render()
})