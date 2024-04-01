const sentence = "Hello Jin";
console.log(sentence.at(3));
console.log(sentence.startsWith("B"));
console.log(sentence.endsWith("n"));

//2
const sentence2 = "Hello Jin";
console.log(sentence2.concat("!!!"))
console.log(sentence2.repeat(3));
console.log(sentence2.replace("e", "%"));
console.log(sentence2.replaceAll("e", "$"));
console.log(sentence2.substring(1, 4))


let url = "Visit my blogs http://blog1.com and https://blog2.com for more info.";
url = url.replaceAll("http://", "@");
url = url.replaceAll("https://", "@");
url = url.split(' ');

console.log(url);

