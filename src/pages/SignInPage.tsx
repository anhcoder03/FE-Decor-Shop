/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field } from "../components/field";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "../components/icons";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { Button } from "../components/button";
import IconGoogle from "../components/icons/IconGoogle";
import { useDispatch } from "react-redux";
import { TDataResponse, handleLogin } from "../store/auth/handler";
import { toast } from "react-toastify";

type FormDataType = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .required("* Trường này không được để trống!")
    .email("Nhập đúng đạnh dạng email"),
  password: yup.string().required("* Trường này không được để trống!"),
});

const SignInPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const handleSignIn = async (values: FormDataType) => {
    try {
      const response: TDataResponse = await dispatch(
        handleLogin(values) as any
      ).unwrap();
      toast.success(response?.message);
      if (response?.user) {
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <section className="bg-[#2d2c2c] min-h-screen flex items-center justify-center">
      <div className="bg-[#DBA87F] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="px-8 md:w-1/2 md:px-8">
          <h2 className="text-2xl font-bold text-white">Login</h2>
          <p className="mt-4 text-xs text-white">
            If you are already a member, easily log in
          </p>

          <form
            action=""
            className="flex flex-col mt-10"
            onSubmit={handleSubmit(handleSignIn)}
            autoComplete="false"
          >
            <Field>
              <div className="flex flex-col w-full gap-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  control={control}
                  className={" h-12  rounded-xl border bg-white text-[#111111]"}
                ></Input>
                <div className="text-sm text-red-500">
                  {errors.email && errors.email.message}
                </div>
              </div>
            </Field>
            <Field>
              <div className="flex flex-col w-full gap-y-2">
                <Input
                  type={togglePassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  control={control}
                  className={
                    " h-12  rounded-xl border bg-white w-full text-[#111111]"
                  }
                >
                  {!togglePassword ? (
                    <IconEyeClose
                      onClick={() => {
                        setTogglePassword((t) => !t);
                      }}
                    ></IconEyeClose>
                  ) : (
                    <IconEyeOpen
                      onClick={() => {
                        setTogglePassword((t) => !t);
                      }}
                    ></IconEyeOpen>
                  )}
                </Input>

                <div className="text-sm text-red-500">
                  {errors.password && errors.password?.message}
                </div>
              </div>
            </Field>
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="mx-auto w-full  h-12 !bg-[#222222]"
            >
              Login
            </Button>
          </form>

          <div className="grid items-center grid-cols-3 mt-6 text-gray-400">
            <hr className="border-gray-200" />
            <p className="text-sm text-center text-white">OR</p>
            <hr className="border-gray-200" />
          </div>

          <Button
            type="button"
            className={
              "bg-white text-[#2d2c2c] border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 "
            }
          >
            <span className="text-[#222222]">Login with Google</span>
            <IconGoogle></IconGoogle>
          </Button>

          <div className="flex items-center justify-between mt-3 text-xs text-white">
            <p>Have an account?</p>
            <Button
              type="button"
              className={"bg-white px-0 w-[100px] h-[40px] duration-300 "}
              to="/signup"
            >
              <span className="text-primary"> Register</span>
            </Button>
          </div>
        </div>

        <div className="hidden w-1/2 md:block">
          <img
            className="rounded-2xl"
            src="https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/img3-1.jpg.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
