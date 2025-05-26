import React from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../api/productApi";
import useFetchListWithParams from "../../hooks/useFetchListWithParams";



const ProductListPage = () => {
	const [list, loading, error] = useFetchListWithParams("product");
	console.log(list);


	return (
		<div>
			<h1>Quan ly san pham</h1>
			<table>
				<thead>
					<tr>
						<th>title</th>
						<th>name</th>
					</tr>

				</thead>
				<tbody>

					{list.map((p) => (
						<tr key={p.id}>
							<td>{p.title}</td>
							<td>{p.description}</td>
						</tr>
					))}

				</tbody>
			</table>
			<Link to="add">Add Product</Link>
		</div>
	);
};

export default ProductListPage;