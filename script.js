const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrolly > 0);
}):

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
});
sr.reveal('.hometext',{delay:200,origin:'left'});
sr.reveal('.homeimg',{delay:200,origin:'right'});

sr.reveal('.container,.about,.menu,.contact',{delay:200,origin:'left'});