CANVAS_ID = "canvas";

/*
*	Max Size of Array
*
*	37 = chromatic
*/
var maxSize = 37;
var curFrame = 0;
var prevFrame = 0;



var Visualizer = {

	canvas:		null,
	ctx:		null,
	isInit:		false,

	//Random Array
	noteArray:	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],

	//Sorted Array
	sortArray:	[],

	//Time Variables
	curTime:	0,
	prevTime:	0,
	deltaTime:	0,


	Init: function() {

		this.isInit = true;
		canvas = document.getElementById(CANVAS_ID);
		ctx = canvas.getContext("2d");


		//this.setArray(maxSize);
		this.shuffle();
		console.log("shuffle");

		for(var z in this.noteArray){
			this.sortArray.push(this.noteArray[z]);
		}

		runViz();
		this.draw();


		this.sort(this.sortArray, 0, this.sortArray.length - 1);

	},

	setArray: function(size){
		var s = size;
		console.log("asdfasdlfk;jald");

		for (var i = 0; this.noteArray.length <= s; i++ ){

			//random number within
			n = Math.ceil(Math.random() * s);
			good = true;
			//console.log(n);

			for (var a in this.noteArray){
				console.log("n: " + n + "\na: " + this.noteArray[a]);
				if (n === this.noteArray[a]){
					//good = false;
				}
			}

			if (good === true){
				this.noteArray.push(n);
				this.sortArray.push(n);

			}

		}

	},

	draw: function(){

		ctx.clearRect(0,0, canvas.width, canvas.height);
		ctx.fillStyle = 'CYAN';
		ctx.fillRect(0,0, canvas.width, canvas.height);

		var i = 0;
		for(var t in this.noteArray){
			ctx.fillStyle = 'PINK';
			ctx.fillRect(0 + (i*5),50,5, this.noteArray[t] );
			//console.log(t + ": " + this.noteArray[t]);
			i++;
		}

		console.log("draw");
		var j = 0;
		for (var x in this.sortArray) {
			ctx.fillStyle = 'Green';
			ctx.fillRect(0 + (j*5), 100, 5, this.sortArray[x]);
			j++;

		}

	},

	update: function(){
		//Time Calculation
		newDate = new Date();
		this.prevTime = this.curTime;
		this.curTime = newDate.getTime() / 1000.0;  //end time in seconds
		this.deltaTime = (this.curTime - this.prevTime) //delta time in seconds

		if(this.deltaTime > 30){
			this.deltaTime = 0;
		}

		this.draw();

	},

	shuffle: function(){
		this.shuffleHelper(this.noteArray);
	},

	shuffleHelper: function(a){
		for (var j, x, i = a.length; i; j = Math.ceil(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x){}
		return a;
	},

	/*quicksort stuff
	*****************************************************************************
	*/

	//swaps two values in the heap
	swap: function(array, a, b){
		var temp = array[a];

		array[a] = array[b];
		array[b] = temp;


	},

	//Partitions the sub array into values less than and greater than the pivot value
	partition: function(array, p, l, r){
		var storeIndex = l,
		pVal = array[p];

		// put the pivot on the right
		this.swap(array, p, r);

		//go through the rest
		for(var v = l; v < r; v++){
			if(array[v] < pVal){
				this.swap(array, v, storeIndex);
				storeIndex++;
			}
		}

		//finally pt the pivot in teh correct place
		this.swap(array,r,storeIndex);

		return storeIndex;
	},

	//sorts the array
	sort: function(array, l, r){
		//this.update();

		for (var x in this.sortArray) {
			console.log(x + ": " + this.sortArray[x]);
		}
		var p = null;

		if(typeof l !== 'number'){
			l = 0;
		}

		if(typeof r !== 'number'){
			r = array.length - 1;
		}

		//effectively set our base
		//case here. When left == right,
		//we'll stop
		if(l < r){

			//pick a pivot between l & r and update it
			//once we've partitioned the array to values
			//less than or greater than the pivot value
			p = l + Math.ceil((r-l) * .5);
			newP = this.partition(array, p, l, r);

			//recursively sort to the left and right

			this.sort(array, l, newP - 1);
			this.sort(array, newP + 1, r);





			//setTimeout(this.sort(array, l, newP - 1),9000);
			//setTimeout(this.sort(array, newP + 1, r),9000);

		}



	},

};

window.onload = function(){
	Visualizer.Init();
};

function runViz(){
	console.log("runViz");

	curFrame++;

	if (Visualizer.isInit){
		Visualizer.update();
	}
	requestAnimationFrame(runViz);

};
