import '../styles/Login.css'

function Login(){
    return(
        <div className='login'>
            <div className='container'>
                <div className='container_left'>
                    <h1>IoT</h1>
                </div>

                <div className='container_right'>
                    <h1>LogIn</h1>
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
                        <div>
                            <a href='me' className='forgot'>Forgot Password ?</a>
                        </div>
                    </div>
                    <button className='btn'>LogIn</button>
                    <div className='registerLink'>
                        <a href='me'>Create an account ?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;