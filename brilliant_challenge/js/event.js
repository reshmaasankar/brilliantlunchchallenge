 function matchLunchEvent(array){
 		   
    $("#div2").empty();
   
                    var blockDiv = '';
                    var tophight =0;
                    var bottomhight=0;  
                    var height =0;
                    var text = '';
                    $.each(array, function(key, value){
                        
                        if(key == 0){
                                text = "Me";
                        }else{
                                text = "Brilliant Lunch";
                        }
                         tophight = 30*(((value.start/60)*2));
                         bottomhight = 30*(((value.end/60)*2));
                         height = bottomhight - tophight;

                         if(array.length>3){
                         	
                         	var div2width = 600+(((array.length)-3)*150);
                         	$('#div2').css('width', div2width);
                         }
                        
                        
	                    $('<div id="event'+key+'">').addClass("block").appendTo($('#div2'));
	                    
	                    $('#event'+key+'').css('top', tophight);
	                    $('#event'+key+'').css('height', height);

	                    $('<div id="event_inside'+key+'">').addClass("liner").appendTo($('#event'+key+''));
	                    $('#event_inside'+key+'').css('height', height);
	                    
	                    $('<div id="event_inside_span'+key+'">').addClass("span_txt").appendTo($('#event'+key+''));
	                   
	                    $('#event_inside_span'+key+'').text(text);
	                    $('.span_txt').css('font-size', '10px');
	                    $('.span_txt').css('margin-left', '20px');
                    });
                 var nikkiEvent = array[0];
                 var first;
		         var last;
		         var maxTimeSpent = 0;
		         var eventflag  = false;
		         var eventMatch, matcheventIndx;
		         for(var i=1;i< array.length;i++){
		             
		            if(nikkiEvent.start > array[i].start){
		                first =nikkiEvent.start-array[i].start;
		                
		             }else{
		                    first = array[i].start - nikkiEvent.start;

		             }
		            if(nikkiEvent.end > array[i].end){
		                last =nikkiEvent.end-array[i].end;
		                
		             }else{
		                    last = array[i].end - nikkiEvent.end;

		             }
		            var totaltimeSpent = 60 - (first);
		            if( Math.abs(totaltimeSpent) > maxTimeSpent && (totaltimeSpent)<=60 && (totaltimeSpent)>=30){
		                maxTimeSpent = Math.abs(totaltimeSpent);
		                eventMatch = array[i];
		                matcheventIndx = i;
		                eventflag = true;
		            }
		        
		         }
		         $("#event_inside"+0).removeClass("liner").addClass("liner_green");
		         $("#event_inside"+matcheventIndx).removeClass("liner").addClass("liner_green");
		         if(eventflag == false){
		             $("#event_inside"+0).removeClass("liner").addClass("liner_black");
		         }
    		}