function isPositive(number, resolve, reject) {
	setTimeout(() => {
		if (typeof number === "number")
			resolve(number > 0 ? "Positive" : "Negative");
		else reject("Not a number");
	}, 1000);
}

// isPositive([], (res) => {
// 	console.log(`Success: ${res}`);
// }, (err) => {
// 	console.log(`Error: ${err}`);
// });

function isPositivePromise(number) {
	const executer = (resolve, reject) => {
		// 실행자
		setTimeout(() => {
			if (typeof number === "number")
				resolve(number > 0 ? "Positive" : "Negative");
			else reject("Not a number");
		}, 1000);
	};

	const asyncTask = new Promise(executer);
	return asyncTask;
}

const res = isPositivePromise(12);

res.then((res) => {
	console.log(`Success: ${res}`);
}).catch((err) => {
	console.log(`Error: ${err}`);
});
