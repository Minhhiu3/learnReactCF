import React from "react";
import useFetchListWithParams from "./hooks/useFetchListWithParams";
import useQueryParams from "./hooks/useQueryParams";
import { useState } from "react";
// * Tách các logic filter ra. Component chỉ làm công việc của UI.
/**
 * * Phân trang
 * * Tìm trang
 * * Sắp xếp theo giá
 * * Lọc theo rate
 */

const ProductList = () => {

    const [sortOrder, setSortOrder] = useState("")
    const [params, updateParams, resetParams] = useQueryParams({
        search: "",
        skip: 0,
        limit: 12,
        sortBy: "price",
        order: "asc",
        page: 1,
    });
    const [products, loading, error] = useFetchListWithParams("products", params);

    const handlePage = (newPage) => {
        updateParams({
            ...params,
            page: newPage,
            skip: (newPage - 1) * params.limit,
        });
    };

    const handleLimit = (e) => {
        const newLimit = Number(e.target.value);
        updateParams({
            ...params,
            limit: newLimit,
            page: 1,
            skip: 0,
        });
    };
    // -- Sắp xếp theo giá
    let filtered = [...products];
    if (sortOrder === "asc") {
        filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortOrder === "desc") {

        filtered = [...filtered].sort((a, b) => b.price - a.price)
    }


    const handleSort = (sortBy, order) => {
        updateParams({ ...params, sortBy, order });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Danh sach san pham</h1>
            <span>Hiển thị</span>
            <select name="limit" id="limit" onChange={handleLimit}>
                <option value="12">12</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="194">all</option>
            </select>
            <span> sản phẩm</span>
            <select value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
            >
                <option value="">— Không sắp xếp —</option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            <div>
                {filtered.map((item) => (
                    <div key={item.id}>
                        {item.id} - {item.title} - {item.price}
                    </div>
                ))}
            </div>
            <button onClick={() => handlePage(params.page - 1)}>preview</button>
            <span>{params.page}</span>

            <button onClick={() => handlePage(params.page + 1)}>next</button>
        </div>
    );
};

export default ProductList;
