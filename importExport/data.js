const data = {
    name :"hieu",
    aage :33,
};
export const myStudent = ["qA","hieu"];
export{data};
 function lengthStudent(arr) {
    return console.log(arr.length);
}

export {data as myIn4, lengthStudent};
export default myStudent;