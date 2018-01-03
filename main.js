var numArr = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
var gameNumArr = new Array();
var newNumArr = new Array();
var num = 0;
var base = 0;

function initialize() {
	for(var i = 0; i < 24; i++) {
	  fillCard(i);
	}
}

function fillCard(i) {
	base = numArr[i] * 15;
	num = base + Math.floor((Math.random() * 15) + 1)

    if(newNumArr[num] != true) {
      document.getElementById('d' + i).innerHTML = num;
      newNumArr[num] = true;
    } else {
      fillCard(i);
    }
}

function reset() {
	for(var j = 0; j < newNumArr.length; j++){
	  newNumArr[j] = false;
	}
}

function printCard() {
	var cardToPrint = document.getElementById('printCard');
	var htmlToPrint = '' +
        '<style type="text/css">' +
        'table th, table td {' +
        'width:75px;' +
        'height:75px;' +
        'text-align:center;' +
        'border:1px solid #000;' +
        'padding;0.5em;' +
        '}' +
        '</style>';
    htmlToPrint += cardToPrint.outerHTML;
	newWin = window.open("");
	newWin.document.write(htmlToPrint);
	newWin.print();
	newWin.close();
}

function startGame(){

	function setRandom() {
	    document.getElementById('countDown').innerHTML = Math.floor((Math.random() * 75) + 1)
	}
	setRandom();
	setInterval(setRandom, 4000);
}


$(document).ready(function() {
	$('td').click(function(){
	  var toggle = this.style;
	  toggle.backgroundColor = toggle.backgroundColor? "" : "#aed581";
	  toggle.color = toggle.color? "" : "#0f0f0f";
	});
});