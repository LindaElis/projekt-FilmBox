const menuTlacitko = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")


menuTlacitko.addEventListener("click",(function () {
    const viditelneMenu = menuPolozky.classList.contains("show")

    if (!viditelneMenu) {
        menuPolozky.classList.add("show")
    } else {
        menuPolozky.classList.remove("show")
    }

    const elementIkony = menuTlacitko.querySelector("i")
    
    if(menuPolozky.classList.contains("show")) {
        elementIkony.className = "fas fa-xmark";
    } else {
        elementIkony.className = "fas fa-bars";
    }


}))