import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/user.context";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const onFormInputChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const redirect = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadUser = async () => {
        if (!user) {
            const fetchedUser = await fetchUser();
            if (fetchedUser) {
                redirect();
            }
        }
    }

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    const handleSubmit = async () => {
        try {
            const user = await emailPasswordLogin(form.email, form.password);
            if (user) {
                redirect();
            }
        } catch (err) {
            if (err.status === 401) {
                alert(err.message);
            } else {
                alert(err);
            }
        }
    }

    return (
        <div className="auth w-1/2 mx-auto mt-10 bg-blue-50 text-slate-700">
            <div className="border-slate-300 flex">
                <h1>Login</h1>
            </div>
            <form method="POST" className="auth-form ">
                <div>
                    <span>Email: </span>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={onFormInputChange}
                    />
                </div>
                <div>
                    <span>Password: </span>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={onFormInputChange}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        className="p-2 border-slate-700 border-2 rounded-md cursor-pointer"
                        onClick={handleSubmit}
                        value="Login"
                    />
                </div>
            </form>
        </div>
    )
}