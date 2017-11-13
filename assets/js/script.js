// SELECT TEMPLATE

var selectedTemp;
function tempSelect(elem) {
	selectedTemp = elem.getAttribute("id");
	console.log(selectedTemp);
}

// START 
function str(){
	var tabz = document.getElementsByClassName("tab");
	for (var i =0; i< tabz.length; i++){
		tabz[i].style.display = "inline-block";
	}
	var btnz = document.getElementsByClassName("btn");
	for (var x =0; x< btnz.length; x++){
		btnz[x].style.display = "flex";
	}
	document.getElementById("tabs-0").style.display = "none";
	document.getElementById("tabs-1").style.display = "flex";
}

// SHOW CLICKED TAB

function showTab(elem) {
	var tabCont = document.getElementsByClassName("tab_cont");
	for (var i = 0; i < tabCont.length; i++) {
		tabCont[i].style.display = "none";
	}

	var tabContId = elem.id.replace(/(\d)/g, "-$1");
	document.getElementById(tabContId).style.display = "flex";
}

// PP

function uppp(pp) {
	var grabber = new FileReader();
	grabber.onload = function(pp_elem) {
		localStorage.setItem("pp", pp_elem.target.result);
	};
	grabber.readAsDataURL(pp.files[0]);
}

// STORE FORM INPUTS TO LOCALSTORAGE

function createRes() {
	if (!selectedTemp) {
		alert("No Template Design Selected ! Select One");
		return;
	}
	var inputs$ = {};
	inputs$.temp = selectedTemp;
	var keys = [];
	document.querySelectorAll(".text_field").forEach(function(input) {
		if (input.value.trim()) {
			inputs$[input.id] = input.value;
			keys.push(input.id);
			return;
		}
		inputs$[input.id] = null;
	});
	localStorage.setItem("inpData", JSON.stringify(inputs$));
	localStorage.setItem("keyArray", JSON.stringify(keys));
	console.log(inputs$);
	console.log(keys);
	window.location = window.location.href.replace(
		/\bindex.html\b/,
		inputs$.temp + ".html"
	);
}
// RESET FORM

function resetForm() {
	var inputs = document.querySelectorAll(".text_field");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
	}
}

// CHANGING DAY NIGHT

function dayNight() {
	var swit = document.getElementById("switch");
	var page = document.getElementById("page");

	if (page.classList.contains("night")) {
		page.classList.remove("night");
		swit.classList.remove("switched");
	} else {
		page.classList.add("night");
		swit.classList.add("switched");
	}
}

// var temps = document.getElementsByClassName("template");
// 	temps.forEach(function(elem) {});

// CREATE NEW INPUT FIELD ( CLONE METHOD )

// var div = document.getElementById(''),
//     clone = div.cloneNode(true);
// clone.id = "";
// document.body.appendChild(clone);

// SET ATTRs WITH LOOP

// function setAttributes(el, attrs) {
//   for(var key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
// }

var w = 4;
function createWork() {
	w++;
	var elemP = document.createElement("p");
	var elemIn = document.createElement("input");
	var elemIn1 = document.createElement("input");
	var elemIn2 = document.createElement("input");
	elemIn.setAttribute("id", "title" + w);
	elemIn.setAttribute("name", "title" + w);
	elemIn.setAttribute("type", "text");
	elemIn.setAttribute("value", "");
	elemIn.setAttribute("placeholder", "Job Title / Position");
	elemIn.setAttribute("class", "text_field");
	elemIn1.setAttribute("id", "company" + w);
	elemIn1.setAttribute("name", "company" + w);
	elemIn1.setAttribute("type", "text");
	elemIn1.setAttribute("value", "");
	elemIn1.setAttribute("placeholder", "Company Name");
	elemIn1.setAttribute("class", "text_field");
	elemIn2.setAttribute("id", "date" + w);
	elemIn2.setAttribute("name", "date" + w);
	elemIn2.setAttribute("type", "text");
	elemIn2.setAttribute("value", "");
	elemIn2.setAttribute("placeholder", "From / To");
	elemIn2.setAttribute("class", "text_field");
	elemP.appendChild(elemIn);
	elemP.appendChild(elemIn1);
	elemP.appendChild(elemIn2);
	document.getElementById("work_info").appendChild(elemP);
}

var e = 3;
function createEduc() {
	e++;
	var elemP = document.createElement("p");
	var elemIn = document.createElement("input");
	var elemIn1 = document.createElement("input");
	var elemIn2 = document.createElement("input");
	// var button = document.createElement("button");
	elemIn.setAttribute("id", "course" + e);
	elemIn.setAttribute("name", "course" + e);
	elemIn.setAttribute("type", "text");
	elemIn.setAttribute("value", "");
	elemIn.setAttribute("placeholder", "Course Name");
	elemIn.setAttribute("class", "text_field");
	elemIn1.setAttribute("id", "institute" + e);
	elemIn1.setAttribute("name", "institute" + e);
	elemIn1.setAttribute("type", "text");
	elemIn1.setAttribute("value", "");
	elemIn1.setAttribute("placeholder", "Institution Name");
	elemIn1.setAttribute("class", "text_field");
	elemIn2.setAttribute("id", "dateE" + e);
	elemIn2.setAttribute("name", "dateE" + e);
	elemIn2.setAttribute("type", "text");
	elemIn2.setAttribute("value", "");
	elemIn2.setAttribute("placeholder", "From / To");
	elemIn2.setAttribute("class", "text_field");
	elemP.appendChild(elemIn);
	elemP.appendChild(elemIn1);
	elemP.appendChild(elemIn2);
	document.getElementById("educ_info").appendChild(elemP);
}

var s = 4;
function createSkill() {
	s++;
	var elemP = document.createElement("p");
	var elemIn = document.createElement("input");
	elemIn.setAttribute("id", "skill" + s);
	elemIn.setAttribute("name", "skill" + s);
	elemIn.setAttribute("type", "text");
	elemIn.setAttribute("value", "");
	elemIn.setAttribute("placeholder", "Skill");
	elemIn.setAttribute("class", "text_field");
	elemP.appendChild(elemIn);
	document.getElementById("skill_info").appendChild(elemP);
}

var l = 3;
function createLang() {
	l++;
	var elemP = document.createElement("p");
	var elemIn = document.createElement("input");
	var elemIn1 = document.createElement("input");
	elemIn.setAttribute("id", "lang" + l);
	elemIn.setAttribute("name", "lang" + l);
	elemIn.setAttribute("type", "text");
	elemIn.setAttribute("value", "");
	elemIn.setAttribute("placeholder", "Language");
	elemIn.setAttribute("class", "text_field");
	elemIn1.setAttribute("id", "level" + l);
	elemIn1.setAttribute("name", "level" + l);
	elemIn1.setAttribute("type", "text");
	elemIn1.setAttribute("value", "");
	elemIn1.setAttribute("placeholder", "Level");
	elemIn1.setAttribute("class", "text_field");
	elemP.appendChild(elemIn);
	elemP.appendChild(elemIn1);
	document.getElementById("lang_info").appendChild(elemP);
}
