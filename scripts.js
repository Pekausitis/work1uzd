$(function(){
	
	gen();
	
	var pops = {};
	
	var p = Popcorn("#F_1");
	console.log(p);
	
	$('.file').each(function() {
		var id = $(this).attr('id');
		pops[id] = Popcorn(this);
		//pops[id].play()
	});
	
	$('.word').each( function() {
		var start = parseFloat($(this).data('start'));
		var end = parseFloat($(this).data('end'));
		var fileID = $(this).parent().parent().find(".file").attr("id");
		
		var pop = pops[fileID];
		console.log(pop);
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
	});
	
	$('.word').click(function(e) {
		var audio = $(this).parent().parent().find(".file");
		var start = parseFloat($(this).data('start'));
		console.log(start);
		audio[0].currentTime = start;
		audio[0].play();
	});
	

});



function gen() {
	data={ 
               "audio": [{"name":"audio_15_0011",
                "path":"data/keywords/audio/audio_15_0011.wav",
                "transcription": [{"word":"man","start":"0.62","end":"0.78"
                },{ "word":"mazliet","start":"0.78","end":"1.06"
                },{"word":"man","start":"1.06","end":"1.21"
		},{"word":"liekās","start":"1.21","end":"1.61"
		},{"word":"ka","start":"1.61","end":"1.70"
		},{"word":"tomēr","start":"1.70","end":"1.99"
		},{"word":"nu","start":"1.99","end":"2.07"
		},{"word":"tad","start":"2.07","end":"2.21"
		},{"word":"neatkarīgi","start":"2.28","end":"2.83"
		},{"word":"vērtēt","start":"2.83","end":"3.20"
		},{"word":"vai","start":"3.20","end":"3.35"
		},{"word":"lēmumu","start":"3.35","end":"3.80"
		},{"word":"par","start":"3.80","end":"3.91"
		},{"word":"laikā","start":"3.97","end":"4.30"
		},{"word":"vaidzētu","start":"4.30","end":"4.69"
		},{"word":"bet","start":"4.69","end":"5.08"
		},{"word":"citi","start":"5.08","end":"5.49"
		},{"wo\rd":"redz","start":"5.49","end":"5.72"
		},{"word":"palicis","start":"5.72","end":"6.13"
		},{"word":"jautājums","start":"6.13","end":"6.53"
		},{"word":"ir","start":"6.53","end":"6.62"
		},{"word":"kur","start":"6.66","end":"6.93"
		},{"word":"šajā","start":"6.93","end":"7.17"
		},{"word":"gadījumā","start":"7.17","end":"7.49"
		},{"word":"nu","start":"7.49","end":"7.60"
		},{"word":"kādā","start":"7.60","end":"8.01"
		},{"word":"nē","start":"8.48","end":"8.95"
		},{"word":"nu","start":"8.95","end":"9.28"
		},{"word":"zināmā","start":"9.28","end":"9.62"
		},{"word":"mērā","start":"9.62","end":"9.92"
		},{"word":"sausākā","start":"9.92","end":"10.41"
		},{"word":"ietekme","start":"10.41","end":"10.80"
		},{"word":"saldētas","start":"10.80","end":"11.21"
		},{"word":"kas","start":"11.21","end":"11.36"
		},{"word":"ir","start":"11.36","end":"11.49"
		},{"word":"tā","start":"11.49","end":"11.59"
		},{"word":"kā","start":"11.59","end":"11.69"
		},{"word":"koalīcija","start":"11.69","end":"12.34"
		},{"word":"koalīcijas","start":"12.34","end":"12.78"
		},{"word":"padomā","start":"12.78","end":"13.35"
		},{"word":"un","start":"13.35","end":"13.45"
		},{"word":"bišķiņ","start":"13.45","end":"14.05"
		},{"word":"šādu","start":"14.05","end":"14.40"
		},{"word":"tad","start":"14.40","end":"15.18"
		},{"word":"jau","start":"15.18","end":"15.41"}]},

		{"name":"audio_15_0004",
                "path":"data/keywords/audio/audio_15_0004.wav",
                "transcription": [{"word":"saeimas","start":"0.05","end":"0.39"
		},{"word":"komisija","start":"0.39","end":"0.89"
		},{"word":"koalīcijas","start":"0.89","end":"1.46"
		},{"word":"deputāti","start":"1.46","end":"1.99"
		},{"word":"aizstāvēja","start":"1.99","end":"2.63"
		},{"word":"pašrezējo","start":"2.63","end":"3.46"
		},{"word":"no","start":"3.51","end":"3.70"
		},{"word":"gaidīšanas","start":"3.70","end":"4.32"
		},{"word":"tā","start":"4.32","end":"4.51"
		},{"word":"tiekot","start":"4.51","end":"5.03"
		},{"word":"arī","start":"5.03","end":"5.28"
		},{"word":"pārmetumus","start":"5.28","end":"5.87"
		},{"word":"par","start":"5.87","end":"6.03"
		},{"word":"valdības","start":"6.03","end":"6.51"
		},{"word":"bezdarbības","start":"6.51","end":"7.15"
		},{"word":"pozīcija","start":"7.15","end":"7.73"
		},{"word":"norāda","start":"7.73","end":"8.22"
		},{"word":"uzsverot","start":"8.22","end":"8.65"
		},{"word":"ka","start":"8.65","end":"8.77"
		},{"word":"jautājums","start":"8.77","end":"9.33"
		},{"word":"izdiskutēts","start":"9.33","end":"9.96"
		},{"word":"sešās","start":"9.96","end":"10.49"
		},{"word":"labības","start":"10.49","end":"10.94"
		},{"word":"sēdēs","start":"10.94","end":"11.41"
		},{"word":"turpina","start":"11.75","end":"12.18"
		},{"word":"pieprasījumu","start":"12.18","end":"12.85"
		},{"word":"kommisijas","start":"12.85","end":"13.30"
		},{"word":"priekšsēdētājs","start":"13.30","end":"14.12"
		},{"word":"zatlera","start":"14.30","end":"14.74"
		},{"word":"ir","start":"14.74","end":"14.84"
		},{"word":"tas","start":"14.84","end":"15.03"
		},{"word":"domāts","start":"15.14","end":"15.58"
		},{"word":"ražuks","start":"15.58","end":"16.07"}]},

		{"name":"audio_15_0005",
                "path":"data/keywords/audio/audio_15_0005.wav",
                "transcription": [{"word":"saeimas","start":"1.13","end":"1.53"
		},{"word":"manuprāt","start":"1.53","end":"2.30"
		},{"word":"valdības","start":"2.30","end":"3.02"
		},{"word":"pozīciju","start":"3.02","end":"3.77"
		},{"word":"ir","start":"3.77","end":"3.95"
		},{"word":"pilnīgi","start":"3.95","end":"4.54"
		},{"word":"pareiza","start":"4.54","end":"5.18"
		},{"word":"vienkārši","start":"5.65","end":"6.18"
		},{"word":"paskatīties","start":"6.18","end":"7.03"
		},{"word":"šo","start":"7.03","end":"7.23"
		},{"word":"privāto","start":"7.23","end":"7.98"
		},{"word":"šodien","start":"7.98","end":"8.51"
		},{"word":"tiesāšanās","start":"8.84","end":"10.08"
		},{"word":"iznākumu","start":"10.45","end":"11.39"
		},{"word":"bet","start":"11.70","end":"11.90"
		},{"word":"nu","start":"11.90","end":"12.26"
		},{"word":"nekādu","start":"12.26","end":"12.83"
		},{"word":"akmeni","start":"12.83","end":"13.47"
		},{"word":"to","start":"13.47","end":"13.62"
		},{"word":"par","start":"13.62","end":"13.89"
		},{"word":"to","start":"13.89","end":"14.16"
		},{"word":"ka","start":"14.16","end":"14.29"
		},{"word":"šī","start":"14.29","end":"14.49"
		},{"word":"martā","start":"14.49","end":"14.88"
		},{"word":"tieši","start":"14.88","end":"15.39"
		},{"word":"pieder","start":"15.39","end":"15.84"
		},{"word":"latvijas","start":"15.87","end":"16.48"
		},{"word":"valsti","start":"16.48","end":"17.02"
		},{"word":"mēs","start":"17.02","end":"17.31"}]}]
}


	
        var output="<div>";
		var c = 1;
	for (var j in data.audio){
	    output+="<audio class='file' id='F_"+ c++ +"' src='"+data.audio[j].path+"' controls></audio><div class='text'>";
	    for (var i in data.audio[j].transcription) {
		 output+="<span class='word' ' title='@start="+data.audio[j].transcription[i].start+" @end="+data.audio[j].transcription[i].end+"' data-start='"+data.audio[j].transcription[i].start+"' data-end='"+ data.audio[j].transcription[i].end+"'> "+data.audio[j].transcription[i].word+"</span>";
		
       	    }
	    	}

        output+="</div>";
        document.getElementById("t").innerHTML=output;
		

}

