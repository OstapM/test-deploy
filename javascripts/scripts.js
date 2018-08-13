$( document ).ready(function() {

	var mySwiper = new Swiper ('.swiper-container', {
		slidesPerView: 6,
	    spaceBetween: 0,
	    navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	    },
	    breakpoints: {
	        1024: {
	          slidesPerView: 4,
	          spaceBetween: 40,
	        },
	        768: {
	          slidesPerView: 3,
	          spaceBetween: 30,
	        },
	        640: {
	          slidesPerView: 2,
	          spaceBetween: 20,
	        },
	        320: {
	          slidesPerView: 1,
	          spaceBetween: 10,
	        }
	    }
	});

	$(".js-scroll-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 700);
	});

	$(".js-sidebar-btn").click(function () {
		$("#js-sidebar").toggleClass("open");
		$(".page-content").toggleClass("open");
	});

	/////////////////////////////////////////////////////////////////

	// init Isotope
	var $grid = $('.iso-grid').isotope({
		itemSelector: '.iso-grid-item',
		layoutMode: 'fitRows'
	});
	// filter items on button click
	$('.filter-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
    $("#js-sidebar").toggleClass("open");
	});

	$( ".link-btn" ).click(function() {
		$('.link-btn').removeClass('active');
		$(this).addClass('active');
	});

  console.log( window.location );

  var url = new URL(window.location.href);
  var searchParams = new URLSearchParams(url.search.substring(1));

  var filter = searchParams.get("filter");

  console.log("filter=" + filter);


  switch (filter) {
    case '.ux-ui':
        $grid.isotope({ filter: filter });
        $('.link-ux-ui').addClass('active');
       break;
    case '.layout':
       $grid.isotope({ filter: filter });
        $('.link-layout').addClass('active');
       break;
       case '.grafic-design':
       $grid.isotope({ filter: filter });
        $('.link-grafic-design').addClass('active');
       break;
       case '.illustration':
       $grid.isotope({ filter: filter });
        $('.link-illustration').addClass('active');
       break;
       case '.people':
       $grid.isotope({ filter: filter });
        $('.link-people').addClass('active');
       break;
    default:
  }

});