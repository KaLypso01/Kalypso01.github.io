$(document).ready(function() {
    $('#skills').fadeToggle();
    $('#content').fadeToggle();
    $('#events').fadeToggle();
    $('#landing').fadeToggle();
    $('#back').delay(1500).fadeToggle(1500);
    $('#load h1:nth-child(1)').addClass('show');
    setTimeout(function(){
       $("#load h1:nth-child(2)").addClass("show");
   }, 4900);
    
    setTimeout(function(){
       $("#load").hide();
   }, 9800);
    
    $('#landing').delay(10000).fadeToggle(1500);
    
    
     
});

$(document).ready(function(){
    
	$('#clik').click(function(){
        $('#landing').fadeToggle(1500);
        $('#skills').delay(1500).fadeToggle(1500);
        $('#content').delay(1500).fadeToggle(1500);
        $('#events').delay(1500).fadeToggle(1500);
        $('#back').delay(1500).fadeToggle(1500);
        
        
    });
    
       
    
    
});

$(document).ready(function(){
   $('#back').click(function(){
       turn=0;
        
        $('#back').delay(1500).fadeToggle(1500);
        $('#skills').fadeToggle(1500);
        $('#content').fadeToggle(1500);
        $('#events').fadeToggle(1500);
       $('#landing').delay(1500).fadeToggle(1500);
        
    }); 
});


