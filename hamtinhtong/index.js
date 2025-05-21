//Input
const orders = [
    { id: 1, amount: 100, date: "2025-04-01", status: "completed" },
    { id: 2, amount: 200, date: "2025-04-02", status: "pending" },
    { id: 3, amount: 150, date: "2025-04-03", status: "completed" },
    { id: 4, amount: 300, date: "2025-04-04", status: "shipped" },
    { id: 5, amount: 50, date: "2025-04-05", status: "cancelled" },
    { id: 6, amount: 120, date: "2025-04-06", status: "completed" },
    { id: 7, amount: 180, date: "2025-04-07", status: "shipped" },
    { id: 8, amount: 220, date: "2025-04-08", status: "pending" },
    { id: 9, amount: 350, date: "2025-04-09", status: "completed" },
    { id: 10, amount: 500, date: "2025-04-10", status: "completed" },
  ];
  //Thực hiện viết hàm calculateTotalCompletedAmount để tính tổng tiền của các order có amount lớn hơn giá trị nhập vào và status = completed
  function calculateTotalCompletedAmount(arr,amount){

    return arr.reduce((total, order) => {
        if (order.amount > amount && order.status === "completed") {
         
         return total + order.amount;
        }
        return total;
      },0);
    
  }
  console.log(calculateTotalCompletedAmount(orders, 100)); 
   