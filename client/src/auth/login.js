export default function Login() {

    const LoginForm = () => {
        return (
            <div className="auth w-1/2 mx-auto mt-10 bg-blue-50 text-slate-700">
                <div className="border-slate-300">
                    <button className="rounded-tl-lg">Login</button>
                    <button className="bg-slate-300 rounded-tr-lg">Register</button>
                </div>
                <form method="POST" className="auth-form ">
                    <div>
                        <span>User: </span>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div>
                        <span>Password: </span>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <input className="p-2 border-slate-700 border-2 rounded-md cursor-pointer" type="submit" value="Login"/>
                    </div>
                </form>
            </div>

        // <form method="POST" className="login-form w-1/2 mx-auto mt-10 bg-blue-50 text-slate-700">
        //     <section className="border-slate-300">
        //         <div>
        //             <button className="rounded-tl-lg">Login</button>
        //             <button className="bg-slate-300 rounded-tr-lg">Register</button>
        //         </div>
        //     </section>
        //     <section className="login-form-inputs">
        //         <div>
        //             <span>User: </span>
        //             <input type="text" placeholder="Username"/>
        //         </div>
        //         <div>
        //             <span>Password: </span>
        //             <input type="password" placeholder="Password"/>
        //         </div>
        //         <div>
        //             <input className="min-h-12" type="submit" value="Login"/>
        //         </div>
        //     </section>
        // </form>

    )
    }


    return (
        <div className="">
        <LoginForm/>
        </div>
    )
}