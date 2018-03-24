$(".cub").mouseenter( function () {
	$(".animatiom").css("visibility", "visible");
}
);
$(".smcub").mouseenter( function () {
	$(".animatiom").animate({
	    left: '43%', bottom:'40%'
	}, 1000);
}
);