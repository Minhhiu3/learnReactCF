import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../api/productApi";
import useFetchListWithParams from "../../hooks/useFetchListWithParams";
import Message from "../../Message";

const ProductListPage = () => {
	const [limit, setLimit] = useState(5);
	const [keyword, setKeyword] = useState("");
	const [level, setLevel] = useState("");
	const [page, setPage] = useState(1);

	const [list, loading, error, fetchList, , totalCount] = useFetchListWithParams("products", {
		_limit: limit,
		_page: page,
		title_like: keyword,
		level: level,
	});

	const totalPages = Math.ceil(totalCount / limit);

	// Gọi fetch lại khi các giá trị filter thay đổi
	useEffect(() => {
		fetchList({
			_limit: limit,
			_page: page,
			title_like: keyword,
			level,
		});
	}, [limit, keyword, level, page]);

	const handleLimitChange = (newLimit) => {
		setLimit(newLimit);
		setPage(1);
	};

	const handleDelete = async (id) => {
		if (!window.confirm(Message.productMessage.confirmDelete)) return;
		try {
			await deleteProduct(id);
			await fetchList({ _limit: limit, _page: page, title_like: keyword, level });
			alert(Message.productMessage.deleteSuccess);
		} catch (error) {
			alert(`${Message.productMessage.errorHandle}: ${error}`);
		}
	};

	return (
		<div>
			<h1>Quản lý sản phẩm</h1>

			<select value={limit} onChange={(e) => handleLimitChange(Number(e.target.value))}>
				<option value="5">5</option>
				<option value="9">9</option>
				<option value="18">18</option>
			</select>

			<input
				type="text"
				value={keyword}
				onChange={(e) => {
					setKeyword(e.target.value);
					setPage(1);
				}}
				placeholder="Tìm kiếm"
			/>

			<select
				value={level}
				onChange={(e) => {
					setLevel(e.target.value);
					setPage(1);
				}}
			>
				<option value="">Tất cả</option>
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>

			{loading && <p>Đang tải...</p>}
			{error && <p style={{ color: "red" }}>Lỗi: {error.message}</p>}

			<table border={1}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Level</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{list.map((p) => (
						<tr key={p.id}>
							<td>{p.id}</td>
							<td>{p.title}</td>
							<td>{p.level}</td>
							<td>{p.status}</td>
							<td>
								<button onClick={() => handleDelete(p.id)}>Xoá</button>
								<Link to={`edit/${p.id}`}><button>Sửa</button></Link>
								<Link to={`detail/${p.id}`}><button>Chi tiết</button></Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Link to="add">Thêm sản phẩm</Link>

			<div style={{ marginTop: "10px" }}>
				<button disabled={page === 1} onClick={() => setPage(page - 1)}>
					Trang trước
				</button>
				<span style={{ margin: "0 10px" }}>
					Trang {page} / {totalPages}
				</span>
				<button disabled={page === totalPages || totalPages === 0} onClick={() => setPage(page + 1)}>
					Trang sau
				</button>
			</div>
		</div>
	);
};

export default ProductListPage;
