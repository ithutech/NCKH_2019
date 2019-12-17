
var script_url = "https://script.google.com/macros/s/AKfycbz2IxXjwCE_Zi86XWe030SvVgkat_osttNX25Jx7toXGpCiarhQ/exec";



$("#submitIOT").click(function(event) {
    var masv =  $.trim($("#masv").val()).replace(/ /g,'');
    var lop = $.trim($("#lop").val()).replace(/ /g,'').toUpperCase();
    var email = $.trim($("#email").val()).replace(/ /g,'');
    var hovaten = $("#hovaten").val();
    var cauhoi = $("#cauhoi").val();
	var cauhoi1 = $("#cauhoi1").val();
	var cauhoi2 = $("#cauhoi2").val();
	var sdt = $("#sdt").val();
	var tour = "";
	if ($("#co").prop('checked')) {
		tour = "Có";
	}
	if ($("#khong").prop('checked')) {
		tour="Không";
	}
	if (tour == "") {
		alert("Vui lòng chọn có hoặc không");
		return;
	}
    var url = script_url + "?callback=result&masv=" + masv + "&lop=" + lop + "&email=" + email +  "&hovaten=" + hovaten + "&cauhoi=" +cauhoi + "&cauhoi1=" +cauhoi1 + "&cauhoi2=" +cauhoi2 + "&sdt=" + sdt + "&tour"+ tour + "&action=register";
	console.log(url);
    if (masv == '' || lop == '' )
        return alert("Vui lòng điền thông tin Tên và Mã số sinh viên");
    var result = $(".input-group #email");
    result.text("");

    if (!validateEmail(email))
    {
        result.css("border-bottom", "1.5px solid red");
        result.val("");
        result.attr("placeholder","Vui lòng nhập đúng định dạng @mail.com");
        return;
    }
    document.querySelector('.is-loading').classList.remove('is-hidden');

    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

});
function result(e) {
    document.querySelector('.is-loading').classList.add('is-hidden');
    document.querySelector('.is-result').classList.remove('is-hidden');

    $("#text_result").html(e.result);
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
