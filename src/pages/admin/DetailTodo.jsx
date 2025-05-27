import React, { useEffect } from 'react'
import { addProduct } from '../../api/productApi';
import FormCommon from '../../FormCommon';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductSchema from '../../zod/ProductSchema';
import { getDetailProduct, updateProduct } from '../../api/productApi';
import { useParams, useNavigate, data } from 'react-router-dom';
import productSchema from '../../zod/ProductSchema';
import Message from '../../Message';
const DetailTodo = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(productSchema)
    });


    const onSubmit = async (data) => {
        try {
            await updateProduct(id, data);
            alert(Message.productMessage.updateSuccess)
            navigate("/admin/products")
        } catch (error) {
            alert(`${Message.productMessage.errorHandle}: ${error}`)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDetailProduct(id);
                // if (data && data.title && data.description && data.status && data.level && data.id != undefined) {
                reset(res.data);
                // } else {
                //     alert(Message.productMessage.checkApiData)
                // }
            } catch (error) {
                alert(`${Message.productMessage.errorHandle}: ${error}`)
            }
        }
        fetchData()
    }, [id, reset]);
    return (
        <>
            <h1>Detail todo</h1>
            <FormCommon handleSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="title">id</label>
                    <input disabled className='form-control' {...register("id", { required: true })} />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="title">Title</label>
                    <input disabled className='form-control' {...register("title", { required: true })} />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="name">description</label>
                    <input disabled className='form-control' {...register("description")} />
                    {errors.title && <span>{errors.description.message}</span>}
                </div>
                <div className='mb-3'>
                    <label disabled htmlFor="name">level </label>
                    <input disabled className='form-control'    {...register("level")} />

                    {errors.title && <span>{errors.level.message}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="name">trạng thái</label>
                    <input disabled className='form-control'    {...register("status")} />
                    {errors.title && <span>{errors.status.message}</span>}
                </div>
                {/* <div className='mb-3'>
                    <button className="btn btn-primary">update </button>{" "}
                    <button className="btn btn-secondary" onClick={reset}>
                        Cancel
                    </button>
                </div> */}
            </FormCommon>
        </>
    )
}

export default DetailTodo