//toggle and responsive nav 

const navSlide= () => {
    const burger = document.querySelector(".burger"); // document.querySelector= untuk mengambil class
    const navlists =  document.querySelector("nav");

    burger.addEventListener("click", ()=> {
        navlists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    })
}

navSlide();  

window.onbeforeunload = () => {
    for( const form of document.getElementsByTagName("form")) {
        form.reset()
    }
};