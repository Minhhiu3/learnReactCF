function getUser(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "John", age: 30 });
    }, 1000);
}

function getPurchases(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, userId: userId, product: "Laptop", price: 1000 },
            { id: 2, userId: userId, product: "Phone", price: 2000 },
            { id: 3, userId: 2, product: "gay", price: 3000 },
        ]);
    }, 1000);
}

function getProductDetails(productId, productName, productPrice, callback) {
    setTimeout(() => {
        callback({ id: productId, name: productName, price: productPrice });
    }, 1000);
}

//bai 11
function logUserById(x) {
    getUser(x, (user) => {
        console.log("User:", user);

    })

    getPurchases(x, (allPurcharse) => {
        const usPurchase = allPurcharse.filter(p => p.userId === x);
        console.log("sp cua id nay la :", usPurchase);
        let lastPrice = 0;
        let cout = 0;
        for (let i = 0; i < usPurchase.length; i++) {
            lastPrice += usPurchase[i].price;
            cout++;
        }
        console.log("tong tien cua don hang la :", lastPrice);
        console.log(cout);




    })


}
logUserById(1)





