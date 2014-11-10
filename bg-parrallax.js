/**
 * Author: Jonas Luthi (based on Heather Corey plugin)
 * jQuery Simple Background Parallax Plugin
 *
 */

(function($) {

    $.fn.parallax = function(options) {

        var window_height = $(window).height();

        // default settings
        var settings = $.extend({
            speed : 0.15,
            inverse : false 
        }, options);

        // iterate over each object in collection
        return this.each( function() {

            // save a reference to the element
            var $this = $(this);

            // set up scroll handler
            $(document).scroll(function(){

                var scroll_top = $(window).scrollTop();
                var offset = $this.offset().top;
                var height = $this.outerHeight();

                // Check if above or below viewport
                if (offset + height <= scroll_top || offset >= scroll_top + window_height) {
                    return;
                }

                if (settings.inverse) {
                    var bg_position = Math.round((offset + scroll_top) * settings.speed);
                } else {
                    var bg_position = Math.round((offset - scroll_top) * settings.speed);
                }

                // apply the background position to set the parallax effect
                $this.css('background-position', 'center ' + bg_position + 'px');
                        
            });
        });

    }

}(jQuery));
