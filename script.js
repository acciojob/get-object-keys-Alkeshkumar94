//your JS code here. If required.
let student ={
	name:"alkesh"
}
Object.prototype.getKeys=function(){
	let arr=[];
	for(let i=0;i<this.length;i++){
		arr.push(this[i]);
	}
	return arr;
}