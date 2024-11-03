"use client"
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion'
import { RxCross2 } from "react-icons/rx";
import { RegisterFormData } from '@/constants';
import { ModalContext } from '@/context/ModalContext';
import { slide } from '@/constants/framer';
const RegisterModal = () => {
    const { OffRegisterModal, registermodal } = useContext(ModalContext)
    const [formValue, setFormValue] = useState({
        password: "",
        name: "",
        username: "",
        email: "",
    })
    let loginisLoading = false;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                },
            }}
            animate={{ opacity: 1 }}
            className='h-[100vh] bg-[#16161644] w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={registermodal ? "enter" : "exit"}
                exit={"exit"}
                className="w-full min-h-full md:w-[400px] md:max-w-[450px]  md:min-h-[580px] justify-center relative items-start md:rounded-[10px] flex flex-col gap-6 p-8 bg-white">
                <div onClick={OffRegisterModal} className="absolute top-4 right-4 text-[#000] cursor-pointer w-10 h-10 flex items-center hover:bg-[#fafafa]  rounded-full justify-center text-xl">
                    <RxCross2 />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h3 className="text-3xl md:text-3xl family2">
                        Sign Up
                    </h3>
                    <h5 className="block text-sm md:text-sm max-w-[250px] pt-1">
                     Create an account with Hirehalo to get instant 
                    </h5>
                </div>
                <form className="w-full flex flex-col gap-3">
                    {
                        RegisterFormData?.map((formdata, index) => {
                            return <label key={index} htmlFor="" className="text-sm flex flex-col gap-1">
                                <span>{formdata?.text}</span>
                                <input
                                    type={formdata?.type}
                                    value={formValue[formdata.name]}
                                    name={formdata.name}
                                    onChange={(e) => onChange(e)}
                                    placeholder={formdata?.label}
                                    className="text-sm font-normal input bg-white rounded-full w-full "

                                />

                            </label>
                        })
                    }
                    <div className="w-full mt-2 flex items-center justify-center flex-col gap-3">
                        <button
                            data-test="loginmodal_button"
                            type="submit"
                            disabled={loginisLoading}
                            className="p-3 px-8 hover:opacity-[.5] text-[#fff] flex btn items-center justify-center w-full cursor-pointer  bg-[#000] rounded-md regular"
                        >
                            {loginisLoading ? (
                                <div className="w-full flex justify-center items-center gap-4">
                                    {/* <Loader type="dots" /> Login in progress */}
                                    Login in progress
                                </div>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                        <div className="w-full flex items-center justify-start gap-2">
                            <span className="text-sm font-normal text-dark">
                                <span className="">Not yet a Member?</span>{" "}
                                <span
                                    // onClick={handleLoginModal}
                                    style={{ textDecoration: "underline" }}
                                    className="font-booking_font_bold family2 cursor-pointer"
                                >
                                    Sign Up
                                </span>
                            </span>
                        </div>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default RegisterModal;