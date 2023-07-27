const handleOnMouseMove = e => {
    const{ currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const card of document.querySelectorAll(".text-card1, .text-card2, .text-card3")){
    card.onmousemove = e => handleOnMouseMove(e);
}

document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("text-card1, .text-card2, .text-card3")){
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
}
function redirectToFrontEndPage(){
    window.location.href="front-end.html";
}
function redirectToDesignPage() {
    window.location.href = "design.html";
}