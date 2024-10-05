import axios from 'axios';
import React from 'react'
import { Flip, ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from 'react-router-dom';
import "../index.css"
function Login() {
    let [username,setUsername]= React.useState("")
    let [password,setPassword]= React.useState("")
    let [usernameActive,setUsernameActive] =React.useState(false)
    let [passwordActive,setPasswordActive] =React.useState(false)
    const Navigate = useNavigate()

    function handleUsernameChange(event){
        let value =  event.target.value
        value.length <=0 ? setUsernameActive(false) : setUsernameActive(true)
        console.log(value)
        setUsername(value)
    }   
    function handlePasswordChange(event){
        let value =  event.target.value
        value.length <=0 ? setPasswordActive(false) : setPasswordActive(true)
        console.log(value)
        setPassword(value)
    } 

    async function handleLogin(){
       
        if(username.length<=0 || password.length<=0){
            return toast.warning("Please fill both fields")
        }
        try{

            let data = await axios.get("https://66fd81486993693089556ab8.mockapi.io/login", {
                params: {
                  username:username,
                }
              })

            
            let userInfo = data.data[0]
            if (data.status===200 && userInfo.username.length >0){
                if(userInfo.username === username && userInfo.password === password ) {
                    localStorage.setItem("username", username)
                    Navigate("/videos")
                }
                else{
                    toast.error("incorrect login Information")
                }

            }
        }
       catch(err){
        console.log(err)
        if(err.status===404){
            toast.error("incorrect login Information")
        }
       }

    }

    function handleBodyClick(){
        if(username.length<=0) setUsernameActive(false)
        if(password.length<=0) setPasswordActive(false)
    }

    return (
        <div onClick={handleBodyClick} className=' flex justify-center items-center  w-screen h-screen  '>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Flip}
             />
            <div className='rounded-2xl w-[75%] h-[60%] max-lg:w-[75%] max-lg:h-[90%]  max-md:w-screen max-md:h-screen p-7 relative bg-white '>
                <svg className='mb-4' xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>

                <div className='max-sm:flex-col flex max-sm:items-center'>

                    <div className=' space-y-3 max-sm:w-[95%] w-[50%]'>
                        <div className='text-3xl mb-5'>Login in</div>
                        <div className='text-lg pb-5'>to continue to Youtube</div>
                    </div>
                    <div className=' relative max-sm:w-[95%] w-[50%]'>

                        <div className='space-y-5'>
                            <div>
                                <input onChange={handleUsernameChange} className=' bg-transparent w-[100%]    focus:border-[1px] focus:border-blue-500 rounded-md p-3 border-[1px] border-black' type="text" />
                                <span className={`${usernameActive? "style-input " : ""} text-gray-400 pointer-events-none text-lg duration-300 bg-white absolute left-4 translate-y-[40%]`}>Username</span>
                            </div>

                            <div>
                                <input onChange={handlePasswordChange} className='  bg-transparent w-[100%]   focus:border-[1px] focus:border-blue-500 rounded-md p-3 border-[1px] border-black' type="text" />
                                <span className={`${passwordActive? "style-input " : ""} text-gray-400 pointer-events-none text-lg duration-300 bg-white absolute left-4 translate-y-[40%]`}>Password</span>
                            </div>
                        </div>

                        <div className='mt-3 '>
                            
                            <Link to="/signup" className='mt-3 text-googleBlue text-sm font-medium'>Not a member? Signup</Link>
                          
                           
                            <div className=' mt-3 justify-between ms-auto flex max-md:w-[100%] w-[100%]'>
                            <button className='text-googleBlue font-medium'><Link to="/videos">Continue As a guest</Link></button>
                                <button onClick={handleLogin} className=' font-medium text-sm rounded-full bg-googleBlue px-5 py-2 text-white  ' >Login</button>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        
        </div>
    )
}

export default Login
