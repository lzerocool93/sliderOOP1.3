window.onload = function(){
    
    
    function Slider(obj){
        this.images = document.querySelectorAll(obj.images);
        this.auto = obj.auto;
        this.btnPrev  = document.querySelector(obj.btnPrev);
        this.btnNext = document.querySelector(obj.btnNext);
        this.rate = obj.rate || 1000;
        
        var slider = this,
            i = 0;
        
        this.prev = function(){
            slider.images[i].classList.remove('showed');
            i--;
            if(i < 0){
                i = slider.images.length - 1;
            }
            slider.images[i].classList.add('showed')
            
        }
        
        this.next = function(){
            slider.images[i].classList.remove('showed');
            i++;
            if(i == slider.images.length){
                i = 0;
            }
            slider.images[i].classList.add('showed');
        }
        
        
        
        if(slider.auto){
            setInterval(function(){
                slider.next();
            },slider.rate);
        }
        
        
        this.btnNext.onclick = function(){
            slider.next();
        }
        this.btnPrev.onclick = function(){
            slider.prev();    
        }
        
    }
    
    
    var slider1 = new Slider({    
        images: '.gallery1 .photos img',
        btnPrev: '.btns input[value=Previous]',
        btnNext: '.btns input[value=Next]',
        auto: false
    });
    
    
    var slider2 = new Slider({
        images:'.gallery2 .photos img',
        auto:true,
        rate:4000
    });
}