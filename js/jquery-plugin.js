(function($){

    $.fn.plugin = function(p){
        console.log(this, p);
    }

})(jQuery);

(function($){

    $.fn.plugin = function(p){
        this.each(function(i, o){
            console.log(this, p, i, o);
        });
    }

})(jQuery);

//$('el').plugin({a:'b'});