// async

/* function hello() {
	return ("hello");
}

async function helloAsync() { // async를 붙이면 promise를 리턴하는 비동기 처리 함수가 된다.
	return ("hello async");
}

console.log(hello());
helloAsync().then((res) => console.log(res)); */

// await

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function helloAsync() {
// 	return delay(3000).then(() => "hello async");
// }

async function helloAsync() {
	await delay(3000); // await을 비동기 함수 앞에 붙이면 해당 프로미스가 resolve될 때까지 기다렸다가 다음 로직으로 넘어간다. -> 동기적으로 실행
	return "hello async";
};

async function main() {
	const result = await helloAsync();
	console.log(result);
}

main();
