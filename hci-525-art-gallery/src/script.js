var items = document.querySelectorAll('.timeline li');

function elementInView(el){
    var rect = el.getBoundingClientRect();

    return(
        rect.top>= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight )
    )
}

function callBack(){
    for(var i = 0; i < items.length; i++){
        if(elementInView(items[i])){
            items[i].classList.add("in-view")
        }
    }
}

window.onload = callBack;
window.onresize = callBack;
window.onscroll = callBack;


 