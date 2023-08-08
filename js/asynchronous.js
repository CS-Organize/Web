/* function taskA() {
	console.log("A 작업 끝");
}

taskA();
console.log("코드 끝"); // 코드가 순차적으로 실행된다. -> 동기적 실행 */

/* function taskA() {
	setTimeout(() => {
		console.log("A 작업 끝");
	}, 2000);
}

taskA();
console.log("코드 끝"); // 코드가 순차적으로 실행되지 않는다. -> 비동기적 실행 */

function taskA(a, b, callback) {
	setTimeout(() => {
		const sum = a + b;
		callback(sum);
	}, 3000);
}

function taskB(a, callback) {
	setTimeout(() => {
		const res = a * 2;
		callback(res);
	}, 1000);
};

function taskC(a, callback) {
	setTimeout(() => {
		const res = a * -1;
		callback(res);
	}, 2000);
}

// taskA(3, 4, (result) =>
// 	 console.log(`A 작업 끝 : ${result}`)
// );

// taskB(7, (result) =>
// 	console.log(`B 작업 끝 : ${result}`)
// );

// taskC(14, (result) =>
// 	console.log(`C 작업 끝 : ${result}`)
// );

taskA(4, 5, (a_res) => { // 비동기 처리의 결과값을 다음 비동기 처리의 인자로 넘겨줄 수 있다. -> 콜백 지옥
	console.log(`A 작업 끝 : ${a_res}`);
	taskB(a_res, (b_res) => {
		console.log(`B 작업 끝 : ${b_res}`);
		taskC(b_res, (c_res) => {
			console.log(`C 작업 끝 : ${c_res}`);
		});
	});
});

console.log("코드 끝");
