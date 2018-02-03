var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var here = document.querySelector('.tabholder');
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var mailers = ['@gmail.com','@wp.pl','@onet.pl','@hotmail.com'];
function randomizer(){
var firstname = ""
var lastname = ""
var tel = ""
var mail =""
var arrayy = []
for (var k= 0; k<Math.floor(Math.random()*10 +6); k++){
var sign = alphabet[Math.floor(Math.random()*alphabet.length)]; 
firstname+= sign;
}
for (var l= 0; l<Math.floor(Math.random()*10 +6); l++){
var sign2 = alphabet[Math.floor(Math.random()*alphabet.length)];
lastname+=sign2;
}
for (var m =0; m<9; m++){
var num = Math.floor(Math.random()*10);
tel+= num;
}
for (var n = 0; n<Math.floor(Math.random()*10+4);n++) {
var sign3 = alphabet[Math.floor(Math.random()*alphabet.length)];
mail+= sign3;
}
mail +=mailers[Math.floor(Math.random()*3)];

  var tab= document.querySelector('.tab1');
var ar = [];
ar[0] = firstname;
ar[1] = lastname;
ar[2] = tel;
ar[3] = mail;
var hmi = document.getElementsByTagName('td');
var check = 0
for (var j= 0; j<hmi.length; j++){
if (hmi[j].textContent === ar[2] || hmi[j].textContent === ar[3]){
	check +=1
}
else{
check=check
}}
if (check ===0){
var MyRow = document.createElement('tr');
for (var i= 0; i<4; i++){
var MyCell= document.createElement('td');
MyCell.textContent = ar[i];
MyRow.appendChild(MyCell);
}
tab.appendChild(MyRow);
here.appendChild(tab);
}
else {
alert('This telephone or email already exists - please select another');
}
}
function addUser(){
var tab= document.querySelector('.tab1');
var ar = [];
ar[0] = document.getElementById('firstname').value;
ar[1] = document.getElementById('lastname').value;
ar[2] = document.getElementById('tel').value;
ar[3] = document.getElementById('mail').value;
var hmi = document.getElementsByTagName('td');
var check = 0
for (var j= 0; j<hmi.length; j++){
if (hmi[j].textContent === ar[2] || hmi[j].textContent === ar[3]){
	check +=1;
}
else if(ar[2] == '' || ar[3] == ''){
	check +=1
}
else{
check=check
}}
if (check ===0){
var MyRow = document.createElement('tr');
for (var i= 0; i<4; i++){
var MyCell= document.createElement('td');
MyCell.textContent = ar[i];
MyRow.appendChild(MyCell);
}
tab.appendChild(MyRow);
here.appendChild(tab);
}
else {
alert('This telephone or email already exists - please select another');
}}

var helper1= [];
var helper2= [];
var helper3= [];
function sortTableAsc(){
var tab4= document.querySelector('.tab1');

for (var i = 1; i<tab4.rows.length; i++){
var cellVal = parseFloat(tab4.rows[i].cells[2].innerHTML);
console.log(cellVal);
helper1[i-1] = cellVal;
var name1=tab4.rows[i].cells[0].innerHTML;
var name2=tab4.rows[i].cells[1].innerHTML;
var tel=tab4.rows[i].cells[2].innerHTML;
var mail= tab4.rows[i].cells[3].innerHTML;
var person= {	firstName:name1,
				lastName: name2, 
				tel: cellVal,
				mail: mail};
helper2[i-1] = person;
}
helper1.sort(function(a,b){return a-b});
for (var j= 0; j<helper1.length; j++){
for (var k = 0; k<helper1.length; k++){
if (helper1[j] === helper2[k].tel){
helper3[j]=helper2[k];
}
}
}
for (var z = 1; z<tab4.rows.length; z++){
tab4.rows[z].cells[0].innerHTML= helper3[z-1].firstName;
tab4.rows[z].cells[1].innerHTML= helper3[z-1].lastName;
tab4.rows[z].cells[2].innerHTML=helper3[z-1].tel;
tab4.rows[z].cells[3].innerHTML=helper3[z-1].mail;
}
}
function sortTableDesc(){
var tab4= document.querySelector('.tab1');

for (var i = 1; i<tab4.rows.length; i++){
var cellVal = parseFloat(tab4.rows[i].cells[2].innerHTML);
console.log(cellVal);
helper1[i-1] = cellVal;
var name1=tab4.rows[i].cells[0].innerHTML;
var name2=tab4.rows[i].cells[1].innerHTML;
var tel=tab4.rows[i].cells[2].innerHTML;
var mail= tab4.rows[i].cells[3].innerHTML;
var person= {firstName:name1,
			lastName: name2,
			tel: cellVal, 
			mail: mail};
helper2[i-1] = person;
}
helper1.sort(function(a,b){return b-a});
for (var j= 0; j<helper1.length; j++){
for (var k = 0; k<helper1.length; k++){
if (helper1[j] === helper2[k].tel){
helper3[j]=helper2[k];
}
}
}
for (var z = 1; z<tab4.rows.length; z++){
tab4.rows[z].cells[0].innerHTML= helper3[z-1].firstName;
tab4.rows[z].cells[1].innerHTML= helper3[z-1].lastName;
tab4.rows[z].cells[2].innerHTML=helper3[z-1].tel;
tab4.rows[z].cells[3].innerHTML=helper3[z-1].mail;
}
}

btn1.addEventListener('click', function(){
addUser();
})
btn2.addEventListener('click',function(){
randomizer();
})
btn3.addEventListener('click', function(){
sortTableAsc();
})
btn4.addEventListener('click', function(){
sortTableDesc();
})
