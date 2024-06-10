import '../styles/Login.module.css'

function Login(){
    return(
        <div className={styles.login}>
            <h1>LogIn</h1>
            <div className={styles.container}>
                <div className={styles.input_wrapper}>
                    <input type='text' className={styles.input} required />
                    <span className={styles.label}>Username *</span>
                </div>
                <div className={styles.input_wrapper}>
                    <input type='password' className={styles.input} required />
                    <span className={styles.label}>Password *</span>
                </div>
                <div className={styles.remember}>
                    <div>
                        <input type='checkbox' className={styles.checkbox}/>
                        <label for='text'>Remember me</label>
                    </div>
                    <a href='me' className={styles.forgot}>Forgot Password ?</a>
                </div>
                <button className={styles.btn}>LogIn</button>
                <div className={styles.registerLink}>
                    <a href='me'>Create an account ?</a>
                </div>
            </div>
        </div>
    )
}

export default Login;