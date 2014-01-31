$.fn.typewriter = function() {
    this.each(function() {
        var $ele = $(this), str = $ele.text(), progress = 0;
        $ele.text('');

        var timer = setInterval(function() {
            $ele.text(str.substring(0, ++progress) + (progress ? '_' : ' '));
            if (progress >= str.length){
            	$ele.text(str);
            	clearInterval(timer);
            }
        }, 100);
    });

    return this;
};