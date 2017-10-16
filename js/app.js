$(function() {
	$('#loginModal').modal('show');
	$('#loginModal #regUser').click(function() {
		$(this).parents('.login').addClass('hide');
		$(this).parents('.login').next().removeClass('hide');
	});
	$(".J-log").click(function(){
		$('#loginModal .reg').addClass("hide");
		$('#loginModal .login').removeClass("hide");
	})
	$(".J-reg").click(function(){
		$('#loginModal .login').addClass("hide");
		$('#loginModal .reg').removeClass("hide");
	})
	$('#carousel-imgnews-generic').find('.count-mix .count').text($('#carousel-imgnews-generic').find('.item').length);
	$('#carousel-imgnews-generic-full').find('.count-mix .count').text($('#carousel-imgnews-generic-full').find('.item').length);
	$('#carousel-imgnews-generic-full').find('.count-mix .in').each(function() {
		$(this).text($(this).parents('.item').index() + 1);
	});
});
$('#carousel-imgnews-generic').on('slid.bs.carousel', function() {
	var a = $("#carousel-imgnews-generic").find('.item.active').index() + 1;
	$(this).find('.count-mix .in').text(a);
});
$('.fullview').on('click', function() {
	$('#imgnews-modal').modal('show');
})