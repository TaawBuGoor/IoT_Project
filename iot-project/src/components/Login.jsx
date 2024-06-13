import '../styles/Login.css'

function Login(){
    return(
        <div className='login'>
            <h1>LogIn</h1>
            <div className='container'>
                <div className='input_wrapper'>
                    <input type='text' className='input' required />
                    <span className='label'>Username *</span>
                </div>
                <div className='input_wrapper'>
                    <input type='password' className='input' required />
                    <span className='label'>Password *</span>
                </div>
                <div className='remember'>
                    <div>
                        <input type='checkbox' className='checkbox'/>
                        <label for='text'>Remember me</label>
                    </div>
                    <a href='me' className='forgot'>Forgot Password ?</a>
                </div>
                <button className='btn'>LogIn</button>
                <div className='registerLink'>
                    <a href='me'>Create an account ?</a>
                </div>
            </div>
        </div>
    )
}

export default Login;