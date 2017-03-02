var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
let teste = ['a','a','a','a','a','a','a','a','a','a','a','a','a'];


let teste1 = ["a", 1,"a", 1,"a", 1,"a", 1,"a", 1,];
var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];
let university = [{
			"month": "November",
			"year": 2007,
			"courseName": "Master of Computer Application",
			"universityName": "Simpson University",
			"universityCity": "London",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"month": "November",
			"year": 2007,
			"courseName": "Master of Computer Application",
			"universityName": "Simpson University",
			"universityCity": "London",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"month": "November",
			"year": 2007,
			"courseName": "Master of Computer Application",
			"universityName": "Simpson University",
			"universityCity": "London",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}];

function t4(){
 
	var t = university.map( function( prevVal) {
    	return (prevVal);
	});
	console.log(t);
}

 
 function t(){
 	var celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
	}); 

	console.log(celcius);
 
 }


function t1(){

	var tt = teste.map( function (elem){
		return (elem);
	});
	console.log(tt);
}

function t2(){
	var v = teste1.map( function( elem ){
		return (elem);
	});
	console.log(v);
}

function t3(){
 
	var sum = rockets.reduce( function( prevVal, [] ) {
    	return (prevVal, []);
	});
	console.log(sum);
}

let mm = [{"a": "b", "b":"c" }];

function t5 () {

	var t = mm.map(function( elem){
		return elem;
	});

	console.log(t);



}