(function () {
    window.myPaint={};
    myPaint.canvas = null;
    myPaint.ctx = null;    
    myPaint.init = function (selector) {  
        myPaint.canvas = document.querySelector(selector);
        myPaint.ctx = myPaint.canvas.getContext('2d');
        myPaint.ctx.translate(-0.5, -0.5);             
    };           

})();

