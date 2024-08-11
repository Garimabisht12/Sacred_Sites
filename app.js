window.addEventListener('scroll', function(e){
    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length;
    
    for (index; index < length; index++){
        var pos = window.scrollY * target[index].dataset.rate;
        if(target[index].dataset.direction === "vertical"){
            target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
            

        } else{
            var posX = window.scrollY * target[index].dataset.ratex;
            var posY = window.scrollY * target[index].dataset.ratey;
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
    
})


