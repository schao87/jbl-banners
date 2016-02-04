home_animation = (function() {
	
	var boundEvents = {};

	function bind (elem, eventName, callback) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, callback, false);
		}

		else if (elem.attachEvent) {
			var eID = elem.attachEvent('on'+ eventName, callback);
			boundEvents[eID] = { name: eventName, callback: callback };
		}
	}

	function unbind (elem, eventName, callback) {
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, callback, false);
		}

		else if (elem.detachEvent) {
			for (var eID in boundEvents) {
				if ((boundEvents[eID].name === eventName) &&
						(boundEvents[eID].callback === callback)) {
					elem.detachEvent(eID);
					delete boundEvents[eID];
				}
			}
		}
	}

		

	function init()
	{
		document.getElementById("container").style.display = "block";


		// CTA BTN CLICKTAG //
		/*
			bind(document.getElementById('click_screen'), 'click', function(e) 
			{
				e.preventDefault();
				Enabler.exit("clickTag1");
			});
*/
		TweenLite.to(black_headphone_blur_right, 0, {left:0});

		frame1();

	}
	

		
	function frame1()
	{
		//headphone slides in
		TweenLite.to(black_headphone_1, 0.5, {left:0, delay:0});
		//wire slides in	
		TweenLite.to(wire, 0.5, {left:35, delay:0});
		//headphone moves left while rotating
		//headphones rotate
		TweenLite.to(black_headphone_1, 1.5, {rotationY:180, delay:1.2, ease: Expo.easeOut});

		//blur image fades in
		TweenLite.to(black_headphone_blur_right, .4, {left:-135,opacity:1, delay:1.3, ease: Expo.easeOut});	
			
		//wire falls off
		TweenLite.to(wire, 4.5, {top:300, left:350, rotationY:180, delay:1.2});	

		//blur fades out
		TweenLite.to(black_headphone_blur_right, .7, {opacity:0, delay:1.4, ease: Expo.easeOut});
		//headphones in final position
		TweenLite.to(black_headphone_left, .2, {opacity:1, delay:1.4});	
		TweenLite.to(black_headphone_1, .2, {opacity:0, delay:1.4});	



		TweenLite.delayedCall(1.5, frame2);
		
	}
	
	function frame2()
	{

		TweenLite.to(intro_text, 0.4, {opacity:1, delay:0 });
		TweenLite.to(headphone_text, 0.4, {opacity:1, delay:1.4 });


   // == show text ==
   var i;
    for (i = 1; i < 14; i++) {
      var j = i+2

      		TweenLite.to("wireless_text_"+i, .2, {opacity:1, delay: .1*i, ease: Expo.easeOut});

    	}


   var x;
    for (x = 1; x < 13; x++) {
      var j = x+2

     		TweenLite.to("wireless_text_"+x, .2, {opacity:0, delay: .1*j, ease: Expo.easeOut});

    	}
	
		TweenLite.delayedCall(3.5, frame3);	

	}
	
	function frame3()
	{	
		TweenLite.to(whileless_holder, 0.3, {opacity:0, delay:0 });
		TweenLite.to(intro_text, 0.3, {opacity:0, delay:0 });
		TweenLite.to(headphone_text, 0.3, {opacity:0, delay:0 });


		TweenLite.delayedCall(0.4, frame4);	
	}
	
	function frame4()
	{	


		TweenLite.to(for_music_text, 0.3, {opacity:1, delay:0.2});

		
		TweenLite.delayedCall(2.6, frame5);	

	}

	function frame5()
	{	

		TweenLite.to(black_headphone_left, 1, {left:-300, delay:0 });
		TweenLite.to(white_headphone, 0.8, {left:0, opacity:1, delay:0.2 });

		TweenLite.to(jbl_logos, 0.3, {opacity:0, delay:0});
		TweenLite.to(for_music_text, 0.3, {opacity:0, delay:0});
		TweenLite.to(jbl_everest_logo, 0.8, {left:0, opacity:1, delay:0.2 });
		TweenLite.to(learnMore, 0.8, {left:0, opacity:1, delay:0.5 });
		TweenLite.to(bestbuy_logo, 0.8, {left:0, opacity:1, delay:0.8 });
		TweenLite.to(cta_bottom_rollover, 0.2, {opacity:0});
		endFrame = 1;
		
		if(mouseOver == 1) {
		TweenLite.to(learnMore_over, 0.2, {opacity:1});
		}
	}


	init();
});

var endFrame = 0;
var mouseOver = 0;

container.onmouseover = function() {
mouseOver = 1;


if(endFrame == 0) {
	TweenLite.to(cta_bottom_rollover, 0.2, {opacity:1});

}
		

	if(endFrame == 1)
	{
		//TweenLite.to(black_headphone_left, 0.5, {left:0, delay:0.1, overwrite:"all" });
		//TweenLite.to(white_headphone, 0.5, {left:-300, delay:0, overwrite:"all" });


 		TweenLite.to(learnMore_over, 0.2, {opacity:1});
 		TweenLite.to(learnMore, 0.2, {opacity:0});
	}

}

container.onmouseout = function() {
mouseOver = 0;

if(endFrame == 0) {
 		TweenLite.to(cta_bottom_rollover, 0.2, {opacity:0});
 		TweenLite.to(learnMore_over, 0.2, {opacity:0});
 	}
  		//TweenLite.to(jbl_logos, 0.2, {opacity:1});		

	if(endFrame == 1)
	{

	//	TweenLite.to(black_headphone_left, 0.5, {left:-300, delay:0, overwrite:"all"});
	//	TweenLite.to(white_headphone, 0.5, {opacity:1, left:0, delay:0.1, overwrite:"all" });

 		TweenLite.to(learnMore_over, 0.2, {opacity:0});
  		TweenLite.to(learnMore, 0.2, {opacity:1});
	}
}



// If true, start function. If false, listen for INIT.
window.onload = function() {
 home_animation();
}


