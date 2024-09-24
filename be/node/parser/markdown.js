const file = process.argv[2];
console.log(file);

const fs = require("node:fs");

/* fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
}); */

try {
  const data = fs.readFileSync(file, "utf8");
  const html = markdownParser(data);
  console.log(html);
} catch (err) {
  console.error(err);
}

// https://randyperkins2k.medium.com/writing-a-simple-markdown-parser-using-javascript-1f2e9449a558
function markdownParser(text) {
  const toHTML = text
    .replace(/^###### (.*$)/gim, "<h6>$1</h6>") // h6 tag
    .replace(/^##### (.*$)/gim, "<h5>$1</h5>") // h5 tag
    .replace(/^#### (.*$)/gim, "<h4>$1</h4>") // h4 tag
    .replace(/^### (.*$)/gim, "<h3>$1</h3>") // h3 tag
    .replace(/^## (.*$)/gim, "<h2>$1</h2>") // h2 tag
    .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1 tag
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // bold text
    .replace(/\*(.*)\*/gim, "<i>$1</i>") // italic text
    .replace(/~~(.*?)~~/gim, "<del>$1</del>") // strikethrough text
    .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>") // pre tag for multi-line code blocks
    .replace(/`(.*?)`/gim, "<code>$1</code>") // code tag for inline code
    .replace(/^- (.*$)/gim, "<li>$1</li>") // list tag
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img src='$2' alt='$1' />") // image tag
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>") // anchor tag
    // .replace(/^(.*?)$/gim, "<p>$1</p>"); // paragraph tag

  return toHTML.trim(); // using trim method to remove whitespace
};
