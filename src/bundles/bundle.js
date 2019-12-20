import { elements } from "./elements";

elements.amiiboForm.addEventListener("keypress", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".btn").click();
    }
})

function search() {
    elements.amiiboForm("submit", async function(e){
        e.preventDefault();
        const amiiboURL = `https://amiiboapi.com/api/amiibo/?character=${elements.amiiboName.value}`
    });
}