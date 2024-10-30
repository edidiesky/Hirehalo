"use client"
import React, { createContext, useState } from 'react';
type ModalContextType = {
    loginmodal: boolean,
    registermodal: boolean,
    OffRegisterModal: () => void,
    OnRegisterModal: () => void,
    OffLoginModal: () => void,
    OnLoginModal: () => void,
}
export const ModalContext = createContext<ModalContextType>({
    loginmodal: false,
    registermodal: false,
    OffLoginModal: () => false,
    OnLoginModal: () => false,
    OffRegisterModal: () => false,
    OnRegisterModal: () => false,
})
const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [loginmodal, setLoginModal] = useState<boolean>(true)
    const [registermodal, setRegisterModal] = useState<boolean>(false)
    const OnLoginModal = () => { setLoginModal(true) }
    const OnRegisterModal = () => { setRegisterModal(true) }
    const OffLoginModal = () => setLoginModal(false)
    const OffRegisterModal = () => setRegisterModal(false)
    return <ModalContext.Provider value={{
        loginmodal,
        registermodal,
        OffLoginModal,
        OnLoginModal,
        OffRegisterModal,
        OnRegisterModal
    }}>{children}</ModalContext.Provider>;
}


export default ModalContextProvider;