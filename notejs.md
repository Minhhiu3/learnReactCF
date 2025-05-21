# phong cách code
* kebab-case

# array (mảng)
- có thể thêm phần tử vào mảng: arr[1]="hieu";
- độ dài của mảng sẽ bằng index(mã số) phần tử cuối cùng +1
* pop()
- xóa 1 phần tử ở cuối cùng mảng.
- thay đổi mảng gốc.
- trả về phần tử bị xóa
- sắp xếp tăng và giảm dần theo (a-b là tăng dần b-a là giảm dần)

# push()
- push() trả về độ dài của mảng.
- push(1,2,3) thêm 1 hoặc nhiều tham số vào mảng ví dụ : 
arr = ["a", "b", "c",]; -> arr = ["a", "b", "c", "1","2","3"];
 trả về độ dài mới của mảng.

# unshift()
- thêm 1 or nhiều phần tử ở đầu mảng .
- thay đổi mảng gốc
- trả về độ dài mới của mảng

### các phương thức của array 
* Thêm/Xóa: push(), pop(), unshift(), shift(), splice()

* Duyệt & Biến đổi: map(), filter(), reduce(), forEach()

* Tìm kiếm: indexOf(), includes(), find(), findIndex()

* Sắp xếp & Đảo ngược: sort(), reverse()

* Trích xuất & Sao chép: slice(), concat(), join()

* Kiểm tra kiểu mảng: Array.isArray()

# object (chuỗi)
* object[key] = value; là gán trực tiếp 1 cặp key value vào trong chuỗi

# map 
map là phương thức của mảng (Array)
Dùng để duyệt qua từng phần tử của mảng
và tạo ra một mảng mới có cùng độ dài,
với các phần tử đã được biến đổi theo hàm callback.
arr.map((phần tử trong mảng, vị trí của phần tử trong mảng, mảng gốc) => phần tử trong mảng |and| điều kiện)

# filter 
filter là 1 phương thức của array tạo ra 1 bản sao của mảng gốc
chứa các phần tử của mảng gốc đã vượt qua điều kiện của hàm kiểm tra 
filter không thay đổi mảng gốc mà trả về mảng mới chứa các phần tử của mảng gốc đã thỏa điều kiện 
arr.filter((phần tử trong mảng) => điều kiện lặp )

# include 
include là 1 phương thức của array & string dùng để kiểm tra xem mảng hoặc chuỗi có chứa giá trị đã chuyênf vào hay không
duyệt qua từng phần tử của mảng và trả về true/false 
 arr.includes("giá trị cần tìm", vị trí)

# split 
+ split là phương thức của string(chuỗi)
  giúp chia 1 chuỗi lớn "a b c d e" thành các chuỗi nhỏ "a", "b", "c", "d", "e" theo kí tự phân tách split(" ")
+ sau đó trả về 1 mảng mới chứa các phần của chỗi đã bị phân tách .
+ có thể giới hạn số lượng phần tử được trả về trong mảng kết quả split(" ", number);

# foreach : 
+ element: phần tử hiện tại đang được duyệt.
+ index: chỉ số của phần tử đó trong mảng.
+ array: chính mảng gốc đang duyệt.
+ Muốn làm gì đó cho từng phần tử → dùng forEach().

# reduce  : 
+ giá trị return của reduce là giá trị ở vòng lặp cuối cùng.
+ accumulator: giá trị tích lũy qua mỗi vòng lặp.
+ currentValue: phần tử hiện tại.
+ index: chỉ số hiện tại (tùy chọn).
+ array: mảng gốc (tùy chọn).
+ initialValue: giá trị khởi tạo cho accumulator (nên có!).
+ Muốn rút gọn, gom lại → dùng reduce().
+ cấu trúc .reduce((acc,cur,index,arr) => {
  xử lí
  return acc;
},{giá trị khởi tạo cho acc}[giá trị khởi tạo cho acc])

# flat
* flat là phương thức của array giúp làm phẳng mảng và tạo ra 1 mảng mới với tất cả các mảng con,phần tử của mảng cũ.
* .flat(độ sâu);
* ví dụ: [1,[2,3],4,[5,[6]]].flat(1) thì sẽ ra [1,2,3,4,5,[6]]

# sort
* sort là phương thức của mảng giúp xắp xếp lại các phần tử trong mảng(nếu là mảng chứa các object key value thì có thể . tới)
* arr.sort((a,b) => a.price - b.price)

# regex (biểu thức chính quy)
* regex trong js là 1 công cụ mạnh để tìm kiếm,kiểm tra, thay thế chuỗi.

# settimeout
* setTimeout(cancelIdleCallback, time(mili giay))

# setInterval
* setInterval(() => {}, Thời gian trễ);
* Liên tục gọi lại 1 hàm hoặc 1 đoạn code với thời gian cố định giữa mỗi lần gọi
# stopPropagation()
* ngăn chặn sự kiện nổi bọt của js

# id.innerHTML = ""
* sửa nội dung của 1 khối text html theo id

# id.style.thuộc tính = "trạng thái của thuộc tính"
* sửa css

# .className = `ten thuoc tinh css`
* gán thuộc tính css cho thẻ

# cấu trúc gán function cho onclick
  `<button onclick="deleteTodo('${todo.id}')" class="delete">xoa</button>`
* 

# todoList.appendChild(li);
* todo list là phần tử DOM đại diện cho danh sách todo trong html
* li là đại diện cho phần tử trong danh sách mới được tạo trong vòng lặp foreach mang thông tin của từng todo theo mỗi lần lặp

* appenCHild là thêm li vào cuối danh sách todo

# getItem và setItem
* function getData() {

    //lay dl trong local s
    const dataLocal = JSON.parse(localStorage.getItem('todos') || "[]");
    return dataLocal;
}
//
function handleLocal(todo) {
    //lưu dữ liệu vào local
    return localStorage.setItem('todos', JSON.stringify(todo));
}

# delete 
* dung filter de tim ra cai id duoc bam
function deleteTodo(id) {
    const todoUI = getData().filter(todo => todo.id !== id);
    handleLocal(todoUI);
    renderUI(todoUI);
}
# edit dung find

# tofix là phương thức của number 
* 4.44444.tofixed(2) out put = 4.44

# JSON.stringify()
* là phương thức giúp biến dữ liệu của js thành dạnh chuỗi json
* console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}' 

# paginate 
- có 3 tham số là: số lượng bản gi(products)
                   số lượng sản phẩm trên 1 trang (limit)
                   số trang tối đa (page)
                   
                   số bản gi cần bỏ qua để tới 