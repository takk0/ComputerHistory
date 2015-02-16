window.onload=init;
	function init (){
counter = 0;
pic1 = document.getElementById('td1');
pic1.onclick = changeImg1;
pic1a = document.getElementById('td1a');
pic1a.onclick = changeImg1a;
pic2 = document.getElementById('td2');
pic2.onclick = changeImg2;
pic2a = document.getElementById('td2a');
pic2a.onclick = changeImg2a;
pic3a = document.getElementById('td3a');
pic3a.onclick = changeImg3a;
pic3 = document.getElementById('td3');
pic3.onclick = changeImg3;	
pic4 = document.getElementById('td4');
pic4.onclick = changeImg4;
pic4a = document.getElementById('td4a');
pic4a.onclick = changeImg4a;
pic5 = document.getElementById('td5');
pic5.onclick = changeImg5;
pic5a = document.getElementById('td5a');
pic5a.onclick = changeImg5a;
pic6 = document.getElementById('td6');
pic6.onclick = changeImg6;
pic6a = document.getElementById('td6a');
pic6a.onclick = changeImg6a;
pic7 = document.getElementById('td7');
pic7.onclick = changeImg7;
pic7a = document.getElementById('td7a');
pic7a.onclick = changeImg7a;
pic8 = document.getElementById('td8');
pic8.onclick = changeImg8;
pic8a = document.getElementById('td8a');
pic8a.onclick = changeImg8a;
pic9 = document.getElementById('td9');
pic9.onclick = changeImg9;
pic9a = document.getElementById('td9a');
pic9a.onclick = changeImg9a;
pic10 = document.getElementById('td10');
pic10.onclick = changeImg10;
pic10a = document.getElementById('td10a');
pic10a.onclick = changeImg10a;

karten = new Array(pic1, pic1a, pic2, pic2a, pic3, pic3a, pic4, pic4a, pic5, pic5a, pic6, pic6a, pic7, pic7a, pic8, pic8a, pic9, pic9a, pic10, pic10a )
}

function changeImg1(){
pic1.src ='http://oi58.tinypic.com/4s087a.jpg';
compareImg()

}

function changeImg1a(){
pic1a.src ='http://oi58.tinypic.com/4s087a.jpg';
compareImg()
}

function changeImg2(){
pic2.src ='http://oi59.tinypic.com/el5lhg.jpg';
compareImg()
}

function changeImg3(){
pic3.src ='http://oi60.tinypic.com/15i5j11.jpg';
compareImg()
}

function changeImg4(){
pic4.src ='http://oi59.tinypic.com/20pyesy.jpg';
compareImg()
}

function changeImg5(){
pic5.src ='http://oi57.tinypic.com/1214ahz.jpg';
compareImg()
}

function changeImg6(){
pic6.src ='http://oi61.tinypic.com/2h4w4z8.jpg';
compareImg()
}

function changeImg7(){
pic7.src ='http://oi59.tinypic.com/f1y04g.jpg';
compareImg()
}

function changeImg8(){
pic8.src ='http://oi57.tinypic.com/2vx2equ.jpg';
compareImg()
}

function changeImg9(){
pic9.src ='http://oi57.tinypic.com/25jv96r.jpg';
compareImg()
}

function changeImg10(){
pic10.src ='http://oi58.tinypic.com/2yubv9w.jpg';
compareImg()
}

function changeImg2a(){
pic2a.src ='http://oi59.tinypic.com/el5lhg.jpg';
compareImg()
}

function changeImg3a(){
pic3a.src ='http://oi60.tinypic.com/15i5j11.jpg';
compareImg()
}

function changeImg4a(){
pic4a.src ='http://oi59.tinypic.com/20pyesy.jpg';
compareImg()
}

function changeImg5a(){
pic5a.src ='http://oi57.tinypic.com/1214ahz.jpg';
compareImg()
}

function changeImg6a(){
pic6a.src ='http://oi61.tinypic.com/2h4w4z8.jpg';
compareImg()
}

function changeImg7a(){
pic7a.src ='http://oi59.tinypic.com/f1y04g.jpg';
compareImg()
}

function changeImg8a(){
pic8a.src ='http://oi57.tinypic.com/2vx2equ.jpg';
compareImg()
}

function changeImg9a(){
pic9a.src ='http://oi57.tinypic.com/25jv96r.jpg';
compareImg()
}

function changeImg10a(){
pic10a.src ='http://oi58.tinypic.com/2yubv9w.jpg';
compareImg()
}

function compareImg(){
	counter++;
	for(i=0; i <= 19; i++){
		for(j=1; j <= 20; j++){
			if((!karten[i].src == karten[j].src) && (counter == 2)){
				karten[i].src = 'http://oi62.tinypic.com/dlnbti';
				karten[j].src = 'http://oi62.tinypic.com/dlnbti';
			}
		}
	}
	if(counter >= 2){counter = 0;
	}
}
