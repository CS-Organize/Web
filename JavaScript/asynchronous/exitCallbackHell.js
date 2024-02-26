function taskA(a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const res = a + b;
			resolve(res);
		}, 3000);
	});
}

function taskB(a) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const res = a * 2;
			resolve(res);
		}, 1000);
	});
}

function taskC(a) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const res = a * -1;
			resolve(res);
		}, 2000);
	});
}

// promise 객체의 사용으로 코드 사이에 다른 작업을 할 수 있다. 작업 시간은 그대로

bPromiseResult = taskA(3, 4).then((a_res) => {
	// then chaining
	console.log(`A 작업 끝 : ${a_res}`);
	return taskB(a_res);
});

console.log("이렇게 다른 일도 할 수 있다.");

bPromiseResult
	.then((b_res) => {
		console.log(`B 작업 끝 : ${b_res}`);
		return taskC(b_res);
	})
	.then((c_res) => {
		console.log(`C 작업 끝 : ${c_res}`);
	});

// callback hell 코드가 계속 깊어지는 것을 방지하기 위해 promise를 사용한다.

// taskA(3, 4).then((a_res) => {
// 	console.log(`A 작업 끝 : ${a_res}`);
// 	taskB(a_res).then((b_res) => {
// 		console.log(`B 작업 끝 : ${b_res}`);
// 		taskC(b_res).then((c_res) => {
// 			console.log(`C 작업 끝 : ${c_res}`);
// 		});
// 	});
// });
