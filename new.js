/*
const main = () =>{
	let a = [1,4,1,0,null,undefined,NaN];
	let b = a.filter(i => !!i).sort((a,b) => a - b);
	console.log(b)
}
*/
/*

let obj = main();

for(let i in obj){
    console.log(i,obj[i]);
}

const main = () =>{
	let a = [1,4,1,0,null,undefined,NaN];
	let b = a.filter(i => !!i).sort((a,b) => a - b);
	console.log(b)
}

const main = () =>{
	const a = {a:1,b:3,d:3};
}
let obj = main();
for(let key in obj){
    console.log(key,obj[key]);
}
*/

const expresiveApiCall = () =>{
    
    setTimeout(() => {
        console.log("running");
        return 2; 
    }, 10000); //after 10 s
	return 1 ; 
}
const main = async () => {
		let a =[];
		for(let i =0;i<10;i++){
			a.push(i);
			await expresiveApiCall();
		}
         console.log(a);
		//   await Promise.all(a.map(i => expresiveApiCall()));
}

main()