$(function(){
	var pops = {};
	
	var p = Popcorn("#F_1");
	console.log(p);
	
	$('.file').each(function() {
		var id = $(this).attr('id');
		pops[id] = Popcorn(this);
		//pops[id].play()
	})
	
	$('.word').each( function() {
		var start = parseFloat($(this).data('start'));
		var end = parseFloat($(this).data('end'));
		var fileID = $(this).parent().parent().find(".file").attr("id");
		
		var pop = pops[fileID]
		console.log(pop)
		var wID = $(this).attr('id');
		
		// p.footnote({
           // start: 2,
           // end: 6,
           // text: "Pop!",
           // target: "W_1_1"
         // });
		
		pop.footnote({
			start: start,
			end: end,
			text: '',
			target: wID,
			effect: "applyclass",
			applyclass: "sync"
		});
	})
	
	$('.word').click(function(e) {
		var audio = $(this).parent().parent().find(".file");
		var start = parseFloat($(this).data('start'));
		console.log(start);
		audio[0].currentTime = start
		audio[0].play();
	});
	

})
