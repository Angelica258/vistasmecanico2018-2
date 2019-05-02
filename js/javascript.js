$("a").click(function (event){

	event.preventDefault();

    if ($(this).data('seleccion') != null){
      	console.log("entra en el primer if" + $(this).data('seleccion'));
        if ($(this).data('seleccion') === "index"){
           console.log("entra en el primer  2 if"+ $(this).data('seleccion'));
            window.location.href = "index.html";
        } 
    else {
        console.log("entra en el primer  else "+$(this).data('seleccion'));
        $("#contenido").load('paginas/'+$(this).data('seleccion')+'.html');
        }
       
    }
});


