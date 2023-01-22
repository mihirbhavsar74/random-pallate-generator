 const refreshBtn=document.querySelector(".refresh-btn");
 const container=document.querySelector(".container");

 const maxPaletteBoxes=32;
 const generatePallate=()=>{
    container.innerHTML="";//clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        //Generating a random hex color code
        let randomHex=Math.floor(Math.random()*0xffffff).toString(16);
        randomHex=`#${randomHex.padStart(6,"0")}`;
        const color=document.createElement("li");
        color.classList.add("color");
        color.innerHTML=`<div class="rect-box" style="background:${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
        color.addEventListener("click",()=>copyColor(color,randomHex));
        container.appendChild(color);
    }
  

 }
 generatePallate();
 const copyColor=(elem,hexval) =>{
    const colorElement =elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexval).then(()=>{
        colorElement.innerText="Copied";
        setTimeout(()=>colorElement.innerText =hexval,1000);
    });
 }
 refreshBtn.addEventListener("click",generatePallate);