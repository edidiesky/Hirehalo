"use client"
import React, { createContext, useState } from 'react';
type ModalContextType = {
    loginmodal: boolean,
    registermodal: boolean,
    jobdetailsidebar:boolean,
    OffRegisterModal: () => void,
    OnRegisterModal: () => void,
    OffLoginModal: () => void,
    OnLoginModal: () => void,
    OnJobDetailsSidebar: () => void,
    OffJobDetailsSidebar: () => void,
}
export const ModalContext = createContext<ModalContextType>({
    loginmodal: false,
    registermodal: false,
    jobdetailsidebar: false,
    OffLoginModal: () => {},
    OnLoginModal: () => {},
    OffRegisterModal: () => {},
    OnRegisterModal: () => {},
    OnJobDetailsSidebar: () => { },
    OffJobDetailsSidebar: () => { },
})
const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [loginmodal, setLoginModal] = useState<boolean>(false)
    const [registermodal, setRegisterModal] = useState<boolean>(false)
    const [jobdetailsidebar, setJobDetailSidebar] = useState<boolean>(false)
    const OnLoginModal = () => { setLoginModal(true) }
    const OnRegisterModal = () => { setRegisterModal(true) }
    const OnJobDetailsSidebar = () => { setJobDetailSidebar(true) }
    const OffJobDetailsSidebar = () => { setJobDetailSidebar(false) }
    const OffLoginModal = () => setLoginModal(false)
    const OffRegisterModal = () => setRegisterModal(false)
    return <ModalContext.Provider value={{
        loginmodal,
        registermodal,
        jobdetailsidebar,
        OffLoginModal,
        OnLoginModal,
        OffRegisterModal,
        OnRegisterModal,
        OnJobDetailsSidebar,
        OffJobDetailsSidebar
    }}>{children}</ModalContext.Provider>;
}


export default ModalContextProvider;