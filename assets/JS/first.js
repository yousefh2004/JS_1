let size = 16;
function zoom_in() {
    size+=1;
    document.querySelector("p").setAttribute("style", `font-size: ${size}px;`);
}
function zoom_out() {
    size-=1;
    document.querySelector("p").setAttribute("style", `font-size: ${size}px;`);
}
document.querySelector(".zoomin").onclick = zoom_in;
document.querySelector(".zoomout").onclick =  zoom_out;
function darkmode(){
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
}
function lightmode(){
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
}
document.querySelector(".darkm").onclick =darkmode;
document.querySelector(".lightm").onclick =lightmode;