import React, { useState } from 'react';
import { addProduct } from '../../api/productApi';
import FormCommon from '../../FormCommon';
import { useForm } from "react-hook-form";
const ProductForm = () => {
    // const [formData, setFormData] = useState({
    //     title: "",
    //     description: "",
    // });


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     console.log(e.target.name);
    //     console.log(e.target.value);


    //     setFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log("Form data:", formData);
    //     try {
    //         const data = await addProduct(formData);
    //         console.log(data);

    //     } catch (error) {
    //         console.log(error);

    //     }
    // };
    const initFormData = {
        title: "",
        description: "",
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await addProduct(data);
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }



    return (
        <>
            <h1>Add Product</h1>
            <FormCommon handleSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="title">Title</label>
                    <input className='form-control' {...register("title", { required: true })} />
                    {errors.title && <span>k duoc de trong</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="name">name</label>
                    <input className='form-control' {...register("description")} />
                    {errors.title && <span>k duoc de trong</span>}
                </div>
                <div className='mb-3'>
                    <button className="btn btn-primary">Add Product</button>{" "}
                    <button className="btn btn-secondary" onClick={reset}>
                        Cancel
                    </button>
                </div>
            </FormCommon>
        </>
    );
};

export default ProductForm;
