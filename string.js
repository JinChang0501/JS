const sentence = "Hello Jin";

console.log(sentence.at(3));
console.log(sentence.startsWith("B"));
console.log(sentence.endsWith("n"));


const sentence = "Hello Jin";

console.log(sentence.concat("!!!"))
console.log(sentence.repeat(3));
console.log(sentence.replace("e", "%"));
console.log(sentence.replaceAll("e", "$"));
console.log(sentence.substring(1, 4))


let url = "Visit my blogs http://blog1.com and https://blog2.com for more info.";
url = url.replaceAll("http://", "@");
url = url.replaceAll("https://", "@");
url = url.split(' ');

console.log(url);

