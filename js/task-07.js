const refs =  {
    idFontSizeControl: document.querySelector("input#font-size-control"),
    idText: document.querySelector("#text"),
} 

refs.idFontSizeControl.addEventListener("input", (evt)  => {
    const counter = evt.currentTarget.value;
   return refs.idText.style.fontSize = `${counter}px`; 
}
);