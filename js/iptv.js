$(document).ready(function() {

    // 两个div调换了一下位置
	function switchNode(elem){
	    elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
	}




    //differentUI 轮播图
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    
    
    if (screen.width < 768) {
    	var items = document.getElementsByClassName('iptv-menu-item-title');
        for (var i = 0; i < items.length; i++) {
            // items[i].parentNode.insertBefore(items[i], items[i].parentNode.firstChild);
            switchNode(items[i])
        }


        // 几个case的图片和介绍 换位置
        var itemImg1 = document.getElementsByClassName('iptv-hardware-items1-img')[0];
        var itemImg3 = document.getElementsByClassName('iptv-hardware-items3-img')[0];
        switchNode(itemImg1);
        switchNode(itemImg3);


        var case3Img = document.getElementsByClassName('iptv-case3-image')[0];
        switchNode(case3Img);
    }

    //greeting interface 轮播图
    var greetingGalleryTop = new Swiper('.greeting-gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var greetingGalleryThumbs = new Swiper('.greeting-gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = greetingGalleryTop;
    galleryThumbs.params.control = greetingGalleryThumbs;













})
