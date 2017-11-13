var data = JSON.parse(localStorage.getItem("inpData"));
var array = JSON.parse(localStorage.getItem("keyArray"));

console.log(data);
function view(id, value) {
	if (value) {
		var val = document.createTextNode(value);
		document.getElementById(id).appendChild(val);
		return;
	}
}

array.forEach(function(id) {
	view(id, data[id]);
});

function ppAdd() {
	try {
		var ppp = localStorage.getItem("pp");
		document.getElementById("pp_info").style.backgroundImage =
			"url(" + ppp + ")";
	} catch (e) {
		return;
	}
}
ppAdd();

function PDF(html) {
	req = new XMLHttpRequest();

	var url = "http://api.html2pdfrocket.com/pdf";
	var apiKey = "71b98184-908c-4b4c-9526-4273f3207e59";
	var data = "apikey=" + apiKey + "&value=" + encodeURIComponent(html);
	req.onload = function(event) {
		reader = new FileReader();

		reader.addEventListener("loadend", function() {
			var dowladLink = document.getElementById("dowladLink");
			dowladLink.href = reader.result;
			dowladLink.click();
		});
		reader.readAsDataURL(req.response);
	};
	req.open("POST", url, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.responseType = "blob";
	req.send(data);
}
var html = document.documentElement.innerHTML;
var pdf = PDF(html);
