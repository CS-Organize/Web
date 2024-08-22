const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
  let response = await fetch(url);
  // Handle the response here
  console.log(response);
}

fetchData();
