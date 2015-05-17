$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		// console.log('mousedown');
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
		// animate hadouken across screen
	})
	.mouseup(function() {
		// console.log('mouseup');
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		// $('.ryu-still').show();
	});


	$('body').keydown(function(e) {
		if(e.keyCode == 88 ) {
			console.log('keydown');
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			$('.ryu-still').hide();
		}
	})
	.keyup(function(e) {
		if(e.keyCode == 88 ) {
		console.log('keyup');
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		}
	});

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}