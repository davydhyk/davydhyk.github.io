$(document).ready(function () {
	 
 		$.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Нед',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);	
 		 
 		  var dateFormat = "dd.mm.yy",
		      from = $( "input.from" )
		        .datepicker({
		          defaultDate: "+1w",
		          changeMonth: true,
		          numberOfMonths: 1,
		           minDate: 0,
		          dateFormat: dateFormat
		        })
		        .on( "change", function() {
		          to.datepicker( "option", "minDate", getDate( this ) );
		        }),
		        
		        
		      to = $( "input.to" ).datepicker({
		        defaultDate: "+2w",
		        changeMonth: true,
		        numberOfMonths: 1,
		         minDate: 0,
		        dateFormat: dateFormat
		      })
		      .on( "change", function() {
		        from.datepicker( "option", "maxDate", getDate( this ) );
		      });
		      
			from.datepicker('setDate', 'tomorrow');
			to.datepicker('setDate', '+1 week');
		 		
		 		
		    function getDate( element ) {
		      var date;
		      try {
		        date = $.datepicker.parseDate( dateFormat, element.value );
		      } catch( error ) {
		        date = null;
		      }
		 
		      return date;
		    }
		    
		  /*  $.datepicker.regional[ "ru" ]
		    
		    from.datepicker( "option", $.datepicker.regional[ "ru" ] );
		    to.datepicker( "option", $.datepicker.regional[ "ru" ] );*/
		    
		  
		    
	   $('.search-form').submit(function(e){
	   		e.preventDefault();
	 		var that = $(this);
	    
	         e.preventDefault();
	         $('body').animate({
	             'opacity': 0.7
	         }, 400)
	   		       
	         $.ajax({
	            /// type: 'POST',
	         //    dataType: 'json',
	             url: globals.url,
	             data: $(that).serialize(),
	             success: function(data) {
	             	console.log(data);
	                 
			         $('body').animate({
			             'opacity': 1
			         }, 400) ;
			         $('.content').removeClass('loaded').removeClass('loaded-abs')
			         $('.result-tours').html(data)
 
	                
	             }
	         });
	     })
 
     
  


	/*arrow*/
	$(document).on('click', '.arrow', function(e) {
	 
	    $(this).parent('.quest').toggleClass('active');
	    if ($(this).parent('.quest').hasClass('active')) {
	      $(this).children('span').removeClass('fa-angle-down').addClass('fa-angle-up');
	      $(this).parent('.quest').next().slideDown('fast');
	    } else {
	      $(this).children('span').removeClass('fa-angle-up').addClass('fa-angle-down');
	      $(this).parent('.quest').next().slideUp('fast');
	    }
	  });
	
	/* book-tab */
 
	$(document).on('click', '.order a', function(e) {
		e.preventDefault()	 ;
		$('.book-tab').click();
		$('body, html').animate({
			'scrollTop' : $('#calc').offset().top
		}, 500)
	
	})
	
	/* booking form */
	 function booking() {
 
	   $('.booking-form').each(function(){
	 	var that = $(this);
	     var dataForm = $(this).bootstrapValidator({
	         preventSubmit: true,
	         message: 'Значение не корректно',
	         feedbackIcons: {
	             valid: 'dashicons dashicons-yes',
	             invalid: 'dashicons dashicons-no',
	             validating: 'dashicons dashicons-refresh'
	         },
	     })
		 .on('success.form.bv', function(e) {
	         e.preventDefault();
	         $('body').animate({
	             'opacity': 0.7
	         }, 400)
	   		       
	         $.ajax({
	             type: 'POST',
	             dataType: 'json',
	             url: globals.url,
	             data: $(that).serialize(),
	             success: function(data) {
	             	console.log(data);
	                 e.preventDefault();
			         $('body').animate({
			             'opacity': 1
			         }, 400) ;
 
				    var pay = function () {
				        wayforpay.run({
				                merchantAccount : "hitsvit_com",
				                merchantDomainName : "https://hitsvit.com/",
				                authorizationType : "SimpleSignature",
				                merchantSignature : that.attr('data-hash'),
				                orderReference : that.attr('data-order_id'), 
				                orderDate : that.attr('data-u'),
				                amount : that.attr('data-price'),
				                currency : "UAH",
				                productName : that.attr('data-tour'),
				                productPrice : that.attr('data-price'), 
				                productCount : "1",
				                clientFirstName : that.find('[name="name"]').val(),
				                clientLastName : " ",
				                clientEmail : that.find('[name="email"]').val(),
				                clientPhone: that.find('[name="tel"]').val(),
				                language: "UA",
				                returnUrl: that.attr('data-returnUrl')
				            },
				            function (response) {
				            	// on accepted   
				            	location.href = that.attr('data-returnUrl')
				            },
				            function (response) {
				                // on declined
				            },
				            function (response) {
				                // on pending or in processing
				               // location.href = that.attr('data-returnUrl')
				            }
				        );
				    }
				    pay();
	                
	             }
	         });
	     })
     })
     
     }


	/*
	create deal
	*/ 
	
	document.addEventListener( 'wpcf7mailsent', function( event ) {
	    	if ( '1211' == event.detail.contactFormId ) {
			 
 
	         $.ajax({
	        	 type: 'POST',
	        
	             url: globals.url, 
	             data:  {
	             	action:'create_deal',
	             	data:event.detail.inputs,
	             	 
	             } ,
	             success: function(data) {
	             	console.log(data);
	                 
  				//	$('#wpcf7-f1211-p1209-o1').append(data)
	                
	             }
	         });
			}
	    	
	}, false );
	
		
	/* btn-show-more */
	
	$(document).on('click', '.btn-show-more', function(e) {
		e.preventDefault()	 ;
		$('.rec-tour').fadeIn();
		$(this).closest('.button').fadeOut()
	})
	
	
	/*get_single_tour_html*/
	
	$(window).load(function(){
		 
		 if ($('.data-tour').length > 0) {
		 	//$('.data-tour').animate({'opacity' : 0.5}, 300);
		 	$.ajax({
	       		url:globals.url,
	       		type:'POST',
	       		data: {
					action: 'get_single_tour_html',
					tour: $('.data-tour').attr('data-tour')
						
				},				 
				success: function(data) {
 					$('.data-tour').animate({'opacity' :1}, 300);
					$('.data-tour').html(data);
					//$('.data-tour').removeClass('loaded');
					$('.tabs').tabulous();
					$('.fancybox').fancybox();
					$('[name="tel"]').mask('(000) 000-0000'); //specifying options
	
					booking()	
				}
	        }) 
		 }
			 
	     
	      if ($('.recomends').length > 0)
			 $.ajax({
	       		url:globals.url,
	       		type:'POST',
	       		data: {
					action: 'get_reccommends_tours_html',
					post_id: $('.recomends').attr('data-post_id'),
				 
						
				},				 
				success: function(data) {
					
				 //console.log(data)
					$('.recomends-result').html(data);
					$('.recomends-l').remove();
					 
				}
	        })   
	        
	        
	})
	
	
	/*ajax_cats*/
	
	function ajax_cats(obj) {
		$('.icon-round-arrow').addClass('loading')
		var container =  '.filter-area'; 
		$(container).animate({'opacity':0.6},300)

		var url 	=  $('.filter-form').attr('action') ;
		var query 	=  $('.filter-form').serialize() ;
		newurl 		=  url + '?' + query;
		
		if (obj.hasClass('load-more')) {
			url 	=  	$(obj).attr('href') ;
			query 	=   $(obj).attr('href') ;
			newurl 	=  url  ;
			
			
		}
 
		window.history.pushState({path:url },'',newurl);

		$.get(newurl, function(data) {
		 
		var tempDom = $('<output>').append($.parseHTML(data));
		var appContainer = $('.filter-area', tempDom);

		$(container)
		.html(appContainer.html())
		.animate({'opacity':1},300);
		
		$('.icon-round-arrow').removeClass('loading')
 
		});		
	}
	
 
	
	$(document).on('click', '.search-ajax', function(e){	
		e.preventDefault()	 ;
		ajax_cats($(this)) 
		e.stopPropagation();
		   
	})
	
	$(document).on('click', '.load-more', function(e){	
		e.preventDefault()	 ;
		ajax_cats($(this)) 
		e.stopPropagation();
		   
	})

});


 	