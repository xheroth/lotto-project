function alert(num){
	'use strict';
	var type = new Array("PRIMARY", "SECONDARY", "TERTIARY", "INFO", "SUCCESS", "ERROR");
	var description = new Array("This is a primary alert.", "This is a secondary alert.", "This is a tertiary alert.", 
	"This is an info alert.", "This is a success alert.", "This is an error alert.");
	var htmlAlert = "<div type='"+type[num]+"' class='alert'><span class='closebtn' onclick='this.parentElement.style.display=\"none\"';>&times;</span>"+description[num]+"</div>;";
    document.getElementById("alerts").insertAdjacentHTML('beforeend', htmlAlert);
}