(function($){
    $.fn.ajaxForm = function(options) {
        this.submit(function(e) {
            e.preventDefault();
            
            var $this = $(this);
            var action = $this.attr('action');
            var method = $this.attr('method').toUpperCase();
            
            var fields = {};
            $this.find(':input').each(function(index, field) {
                var name = $(field).attr('name');
                
                if (name !== undefined) {
                    var value = $(field).attr('value');
                    fields[name] = value;
                }
            });

            var ajaxConfig = {
                data: fields,
                type: method,
                context: $this
            };

            ajaxConfig = $.extend({}, ajaxConfig, options);
            
            $.ajax(action, ajaxConfig); 
        });
    }
})(window.jQuery);
