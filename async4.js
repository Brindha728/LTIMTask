const async = require("async");
function cube(x){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(Math.pow(x,3));
			}, 2000);
			});
}
async function output(x){
	const ans = await cube(x);
	console.log(ans);
}
output(5);