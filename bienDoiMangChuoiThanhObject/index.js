// input
// Gợi ý dùng forEach hoặc reduce
const arrayString = [["name:John", "age:30", "city:NY"], ["name:hieuhieu", "age:29", "city:hn"]];

function convertArrayToObject(arr) {
    const result = arr.reduce((total, currValue) => {
        const formatData = currValue.split(":");

        console.log(formatData);
        return {
            ...total,
            [formatData[0]]: formatData[1]
        }
    }, {})
    return result;

}
function updateConvertArrayToObject(arr) {
    const total = {};
    const flatArr = arr.flat(1);
    flatArr.forEach(element => {
        const formatData = element.split(":");
        console.log(formatData);
        total[formatData[0]] = formatData[1]
    });
    return total;
}
console.log(updateConvertArrayToObject(arrayString));
