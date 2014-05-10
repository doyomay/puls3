/*$(function() {
	$.get("pagina_footer.html",function(codigo){
		$("footer").append(codigo);
	});
});

aqui jquery se encarga de adivinar el contenido que mandamos por ajax
*/

$(function(){
	$.get('usuario.json',
		function(info){
			console.log(info)
		});
});