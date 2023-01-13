import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../redux/authReducer";
import { Navigate } from "react-router";

const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(login(data.login, data.password, data.rememberMe));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    placeholder="Login"
                    {...register("login", {
                        required: "Login is required",
                    })}
                />
                <div style={{ color: "red" }}>{errors?.login?.message}</div>
            </div>
            <div>
                <input
                    placeholder="Password"
                    type={"password"}
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
                <div style={{ color: "red" }}>{errors?.password?.message}</div>
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
