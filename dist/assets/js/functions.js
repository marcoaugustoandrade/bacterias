let visivel = false;

function mostrarMenu(){
    
    let menu = document.querySelector("#menu");
    if (visivel == false){
        menu.style.display = "block";
        visivel = true;
    } else {
        menu.style.display = "none";
        visivel = false;
    }
}