import api from ".";
import Message from "../Message";
// Thêm sản phẩm mới
export const addProduct = (data) => api.post("/products", data);

// Lấy tất cả sản phẩm với params tùy chọn (_limit, _page, ...)
export const getAllProducts = (path, params = {}) => {
    return api.get(`/${path}`, { params }); //  params đã chứa _page, _limit, title_like, level, ...
};


//tìm kiếm sản phẩm
export const searchProduct = (keyword) => api.get(`/products?title_like=${keyword}`)

//lọc theo level
export const filterByLevel = (level) => api.get(`/products?level=${level}`)

//paginate


// Lấy chi tiết 1 sản phẩm
export const getDetailProduct = (id) => api.get(`/products/${id}`);

// Cập nhật sản phẩm
export const updateProduct = (id, data) => api.patch(`/products/${id}`, data);

// Xoá sản phẩm
export const deleteProduct = async (id) => {
    try {
        const res = await api.delete(`/products/${id}`);
        console.log("Deleted ID:", id);
        return res;
    } catch (error) {
        console.error(Message.productMessage.errorHandle`: ${error}`);
    }
};
