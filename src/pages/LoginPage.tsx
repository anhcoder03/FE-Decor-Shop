import React from 'react'
import { Input } from '../components/input'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import IconEye from '../components/icons/IconEye';
import IconGoogle from './../components/icons/IconGoogle';
import { Button } from '../components/button';

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    // resolver: yupResolver(shema),
  });

return (
<section className="bg-[#2d2c2c] min-h-screen flex items-center justify-center">
   
    <div className="bg-[#DBA87F] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
     
      <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-bold text-2xl text-white">Login</h2>
        <p className="text-xs mt-4 text-white">If you are already a member, easily log in</p>
  
        <form action="" className="flex flex-col gap-4">
            <Input type="email" name="email" placeholder="Email" control={control} className={'mt-8 p-2 rounded-xl border bg-white text-[#111111]'}></Input>
          <div className="relative">
          <Input type="password" name="password" placeholder="Password" control={control} className={'p-2 rounded-xl border bg-white w-full text-[#111111]'}></Input>
            <IconEye></IconEye>
          </div>
          <button className="bg-[#2d2c2c] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
        </form>
  
        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-200"/>
          <p className="text-center text-sm text-white">OR</p>
          <hr className="border-gray-200"/>
        </div>
  

        <Button type='button' className={'bg-white text-[#2d2c2c] border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 '}>
            Login with Google
            <IconGoogle></IconGoogle>
        </Button>

        <div className="mt-5 text-xs border-b border-gray-200 py-4 text-white">
          <a href="#">Forgot your password?</a>
        </div>
  
        <div className="mt-3 text-xs flex justify-between items-center text-white">
          <p>Don't have an account?</p>
          <Button type='button' className={'bg-white text-[#DBA87F] px-0 w-[100px] h-[40px] duration-300 '} to='/signup'>Signup</Button>
        </div>
      </div>
  
        
      <div className="md:block hidden w-1/2">
        <img className="rounded-2xl" src="https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img1-2.jpg.webp"/>
      </div>
    </div>
  </section>
)
}

export default LoginPage