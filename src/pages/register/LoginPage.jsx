import styles from "./RegisterPage.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "../../zod/AuthSchema";
import { registerApi } from "../../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(loginSchema),
	})
	console.log(1);
	const nav = useNavigate();
	const onSubmit = async (dataForm) => {
		try {
			const { data } = dataForm;
			if (data.accessToken) {
				localStorage.setItem("accessToken", data.accessToken);
				localStorage.setItem("user", JSON.stringify(data.user));
				nav("/");
			}
		} catch (error) {
			toast.error(error.response.data.message || "Đăng ký thất bại");
			reset();
		}
	}
	return (
		<>
			<h1>Register Form</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formGroup}>
					<label htmlFor="">User Name</label>
					<input type="text" {...register("userName", { required: true })} />
					{errors.userName && <span>{errors.userName.message}</span>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="">Email</label>
					<input type="text" {...register("email", { required: true })} />
					{errors.email && <span>{errors.email.message}</span>}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="">Password</label>
					<input type="password" {...register("password", { required: true })} />
					{errors.password && <span>{errors.password.message}</span>}
				</div>

				<div className="mb-3">
					You have an account? <Link to={"auth/login"}>Login now!</Link>
				</div>

				<div className="mb-3">
					<button type="submit" className="btn btn-primary">Register</button>
				</div>
			</form>
		</>
	);
};

export default LoginPage;
