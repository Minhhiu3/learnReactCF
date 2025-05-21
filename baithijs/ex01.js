const listCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatorId(length, prefix, name) {
    let result = "";
    let outPut = [];
    if (length > 100) {
        return console.log("do dai phai be hon 100");
    }
    for (i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * prefix.length);
        result += prefix[randomIndex];
    }
    outPut.push(name, result);
    return outPut;

}
console.log(generatorId(5, listCharacters, 'tc'));
