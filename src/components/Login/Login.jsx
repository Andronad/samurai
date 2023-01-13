import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "./../../redux/authReducer";
import styles from "./Login.module.scss";

const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const [loginError, setLoginError] = useState();

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(
            login(data.login, data.password, data.rememberMe, reset, () =>
                setLoginError("Email or password is incorrect")
            )
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.error}>{loginError}</div>
            <div>
                <input
                    placeholder="Login"
                    {...register("login", {
                        required: "Login is required",
                    })}
                />
                <div className={styles.error}>{errors?.login?.message}</div>
            </div>
            <div>
                <input
                    placeholder="Password"
                    type={"password"}
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
                <div className={styles.error}>{errors?.password?.message}</div>
            </div>
            <label>
                <input type="checkbox" {...register("rememberMe")} />
                Remember me
            </label>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm />
        </div>
    );
};
