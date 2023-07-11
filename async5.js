const async = require("async");
function sub(a,b){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(a-b);
			}, 2000);
			});
}
async function output(a,b){
	const ans = await sub(a,b);
	console.log(ans);
}
output(10,5);