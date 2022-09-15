const refs = {
    valueId: document.querySelector("#value"),
    counterValue: 0,
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
}

refs.btnDecrement.addEventListener('click', () =>{
    refs.counterValue -=1;
    refs.valueId.textContent = `${refs.counterValue}`;
});

refs.btnIncrement.addEventListener('click', ()=>{
    refs.counterValue +=1;
    refs.valueId.textContent = `${refs.counterValue}`;
})

