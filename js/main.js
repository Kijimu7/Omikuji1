(function(){
    'use strict';

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        var n = Math.random();
        if (n < 0.1){
            this.textContent = 'Bad luck'; // 
        }else if(n < 0.4){
                 this.textContent = 'Good luck'; // 
             }else{
                 this.textContent = 'Best luck'; // 50%
             }

  });


    // When mouse down
    btn.addEventListener('mousedown', function(){
        this.className = 'pushed';
    
});

    // Wen mouse up, remove pushed class
    btn.addEventListener('mouseup', function(){
        this.className = '';
    });
})();