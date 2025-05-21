function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: userId, name: "John", age: 30 },
                { id: 2, name: "John1", age: 33 },
            ])
        }, 1000)
    });
}

function getPurchases(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, userId: userId, product: "Laptop", price: 1000 },
                { id: 2, userId: userId, product: "Phone", price: 2000 },
                { id: 3, userId: 2, product: "Phonee", price: 2000 },
            ])
        }, 1000);
    });
}

function getProductDetails(productId, productName, productPrice) {
    return new Promise.all((resolve, reject) => {
        setTimeout(() => {
            resolve(
                { id: productId, name: productName, price: productPrice }
            )
        }, 1000);
    });
}

//bai2
function logUserById(x) {
    getUser(x)
        .then((user) => {
            const realUser = user.find(user => user.id === x)
            console.log("user:", realUser);

            return getPurchases(realUser.id);
        })
        .then((purchases) => {

            // for (let i = 0; i < purchases.length; i++) {
            //     const usPur = purchases[i];
            //     console.log("san phan cua usser :", usPur);
            // }
            const usPur = purchases.filter(p => p.userId === x);
            console.log("sp cua user", usPur);
            let lastPrice = 0;
            for (let i = 0; i < usPur.length; i++) {
                lastPrice += usPur[i].price;
            }
            console.log("tong tien la :", lastPrice)
        })
        .catch((Error) => {
            console.log(Error);

        })

}
logUserById(1);


