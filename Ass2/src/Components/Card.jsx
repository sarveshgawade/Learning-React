import { useState } from "react"
import InputField from "./InputField"

function Card(){

  const [isLoggedin,setIsLoggedIn] = useState(false)

    return(
        <>
            <div className="max-w-md mx-auto border-2 border-slate-600  rounded-xl shadow-lg overflow-hidden mt-20 " style={{backgroundColor:'#fbfbfb'}}>
                <div className="px-6 py-4">
                    <img src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png"/>
                    
                </div>
                <div className="px-6 py-4">

                    <InputField typeofField='text' place_holder='Username'/>
                    <InputField typeofField='password' place_holder='Password'/>
                    
                    {
                        isLoggedin && 

                        <InputField typeofField='password' place_holder='Confirm Password'/>
                    }

                    {
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full mb-4">
                        {isLoggedin ? 'SignUp' : 'SignIn'}
                      </button>
                    }
                    <div>
                        {isLoggedin ?`Already have an account ? `:`Don't have an account ?`} <br />
                        <a 
                        href="#" 
                        className="text-blue-600"
                        onClick={()=>setIsLoggedIn(!isLoggedin)}
                        >
                            { isLoggedin ? `SignIn`:`SignUp`}

                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card