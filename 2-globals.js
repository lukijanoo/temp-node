// Globals - no window cause we're not in the browser, there's no window object here in Node

//__dirname => putanja trenutnog direktorijuma/foldera u kom smo
//__filename => trenutni fajl gde se nalazimo
// require => funkcija za koriscenje modula(CommonJS je by default u Nodu, ES6 Module je za browser)
// module = info o trenutnom modulu(fajlu)
// process => info vezano za ENV gde se program izvrsava, ovo cemo koristiti bas cesto

console.log(__filename);
console.log(__dirname);
console.log(module);
setInterval(() => {
  console.log("hello world");
}, 1000);
