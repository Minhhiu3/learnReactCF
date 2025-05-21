const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
  ];
  function groupBy(arr, key){
    return arr.reduce((acc, currentValue) => {
        // (acc[currentValue[key]] = acc[currentValue[key]] || []).push(currentValue);
        if(!acc[currentValue[key]]) {
          acc[currentValue[key]] = [currentValue];
        }else {
          acc[currentValue[key]].push(currentValue);
        }

        return acc;
    }, {});
  }
  console.log(groupBy(users, 'address'));
  // function groupBy(arr,key){
  //   return arr.reduce((result,cValue) => {
  //       (result[cValue[key]]= result[cValue[key]] || []).push(cValue);
  //       return result;
  //   }, {});
  // }
  // console.log(users);
  // console.log(users.splice(0, 2));
  // console.log(users);