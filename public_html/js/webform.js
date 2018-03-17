//document.getElementById("priemnaya_table");
$(document).ready(function() { 
    
	// Отображаем скрытый блок формы 	
	  $(".problem_list").click(function()
          {		
               $("#box").fadeIn(); // fadeIn - плавное появление
               $("#priemnaya_table").fadeOut();
	  });               
	
        //Блок для автоматического заполнения полей "Место проблемы" и "Выбранная проблема" в форме
            $("#priemnaya_table").click(function(event) {
		
                var problem_class = event.target.className;
                var problem_id = event.target.id;
                var problem_place;
                
                if(problem_class==="flat")
                {
                    problem_place="Квартира";
                    $('#img_place').attr('src','../img/flat.jpg');
                    $('#img_place_name').html('Квартира');
                }
                 else if(problem_class==="floor") 
                {
                     problem_place="Подъезд";
                    $('#img_place').attr('src','../img/floor.jpg');
                    $('#img_place_name').html('Подъезд');
                }
                 else if(problem_class==="house")
                 {
                     problem_place="Дом";
                     $('#img_place').attr('src','../img/house.jpg');
                     $('#img_place_name').html('Дом');
                 }
                 $("#where_problem").html('<label><strong>Место проблемы: '+problem_place+'</strong></label>');
                 
                var problem_theme= $('#'+problem_id).html(); 
                if(problem_theme==='Другая')
                {
                $('#problem_theme').css('display','inline');  //Если проблема "Другая", то клиент сам ее вписывает
                }    
               else{
                $("#what_problem").html('<label><strong>Выбранная проблема: '+problem_theme+'</strong></label>');
                }		               
            });
        
});

