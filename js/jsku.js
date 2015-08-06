$(function(){
	$("#open-image").click(function(){
		$("#open-file").click();
	});
	$("#upload-gambar").click(function(){
		$("#open-file").click();
	});
	$(".komentar-container").hide();
	function handleEvent (e) {
		var target = $(e.target);
		var type = e.type;
		if(type=="click"){
			var komentar = target.attr("data-number");
			$("#"+komentar).toggle(300);
		}
	}
	autosize($('textarea'));
	$(document).on("click",handleEvent);
	$("#new-katagori").hide();
	$("#buat-katagori").click(function(){
		$("#new-katagori").toggle();
	});
});
//$(document).on("click",ukuran);