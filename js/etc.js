// const password = prompt('Enter your password');

const hobbies = ['reading', 'coding', 'listening to music', 'watching movies', 'playing games'];

for (const hobby of hobbies) {
	console.log(hobby);
}

function greeter(greetFunc) {
	greetFunc();
}

greeter(() => {
	console.log('Hello, World!');
});
