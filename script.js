//your JS code here. If required.
let student ={
	name:"alkesh"
}
Object.prototype.getKeys=function(){
	let arr=[];
	for(let i in this){
		if(this.hasOwnProperty(i))
		arr.push(i);
	}
	return arr;
}