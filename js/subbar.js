
function subbarHeight(nav, block){
        /* subbar-Down */
    document.getElementById(nav).onmouseover=function(){
        /* menu-button-hover */
        document.getElementById(block).classList.remove('subbar-up');
        document.getElementById(block).classList.add('subbar-down');
    };
    document.getElementById(block).onmouseover=function(){
        /* subbar-hover */
        document.getElementById(block).classList.remove('subbar-up');
        document.getElementById(block).classList.add('subbar-down');
    };
        /* subbar-Up */
    document.getElementById(nav).onmouseleave=function(){
        /* menu-button-leave */
        document.getElementById(block).classList.remove('subbar-down');
        document.getElementById(block).classList.add('subbar-up');
    };
    document.getElementById(block).onmouseleave=function(){
        /* subbar-leave */
        document.getElementById(block).classList.remove('subbar-down');
        document.getElementById(block).classList.add('subbar-up');
    };
};

subbarHeight('about', 'about-subbar');
subbarHeight('services', 'services-subbar');
subbarHeight('projects', 'projects-subbar');