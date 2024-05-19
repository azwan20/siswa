export default function Login() {
    return (
        <>
            <div className="login d-flex">
                <h1>Login</h1>
                <section>
                    <span>
                        <p>email</p>
                        <input type="email" />
                    </span>
                    <span>
                        <p>password</p>
                        <input type="password" />
                    </span>
                </section>
                <button>Login</button>
            </div>
        </>
    )
}