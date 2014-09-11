(function($){

    $.fn.plugin = function(){
        console.log(this);
    }

})(jQuery)

$('a').plugin();