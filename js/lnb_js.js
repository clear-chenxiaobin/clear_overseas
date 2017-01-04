(function($,window) {
		var myCarousel = $(".myCarousel");
		var body = $(body);
		console.log(window)
		console.log($("window"))
	    console.log($(window).height())
	    var window =$(window)
		console.log(body.innerWidth(),body.width(),body.outerWidth(),window.height())
	    var preIndex = 0;
	    var indicators= $('.carousel-indicators li')
	    var items= $('.carousel-inner .item')
	    // 点击弹出
	    $('.percase').click(function(event) {
	         // Act on the event 
	        var nowIndex = $(this).index();
            var windowH = $(window).height();
            var windowW = $(window).width();

	        // 所有的class清空
	        indicators.each(function(index, el) {
	        	el.className = '';
	        });
	        items.each(function(index, el) {
	        	el.className = 'item';
	        });
	        

	        indicators[nowIndex].className ='active';
	        items[nowIndex].className +=' active';
	        document.getElementById('modelflag').click();
            // $('.modelFlag').click();
	        console.log(windowH,windowW)
	        // myCarousel.css('position', 'fixed');
	        // myCarousel.animate({
	        // 	'width': (windowW - 200),
	        // 	'height': (windowH - 200),
	        // 	'duration':100,
	        // 	"top": 100,
	        // 	"left":100,
	        // 	/* stuff to do after animation is complete */
	        // });
	    });
	    // // 关闭按钮
	    // $('.closeCarousel').click(function(event) {
	    // 	/* Act on the event */
	    // 	myCarousel.animate({
	    // 		'width': '0px',
	    // 		'height': '0px',
	    // 		'duration':'500',
	    // 		"top": '50%',
	    // 		"left":'50%'
	    // 		/* stuff to do after animation is complete */
	    // 	});
	    // });
})($,window)
