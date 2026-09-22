"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
let result = add(10, 20);
console.log(result);
function concatenateName(first, last) {
    const fullName = `${first} ${last}`;
    return fullName;
}
let fullName = concatenateName("Bob", "Charlie");
console.log(fullName);
const words = ["Hello", "World", "From", "Typescript"];
const sentence = words.join(" ");
console.log(sentence);
//# sourceMappingURL=index.js.map