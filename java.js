 var lastScrollTop = 0;
    navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            navbar.style.top='-80px';
        }
        else{
            navbar.style.top='0';
        }
        lastScrollTop = scrollTop;
    });

        const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});