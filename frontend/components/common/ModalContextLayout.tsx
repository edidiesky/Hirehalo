"use client"
import React from 'react';
import { AnimatePresence } from "framer-motion";
import ModalContextProvider, { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';

const ModalContextLayout = ({ children }: { children: React.ReactNode }) => {
    const { loginmodal, registermodal } = useContext(ModalContext)

    return (
        <React.Fragment>
            {/* animating the login modal */}
            <AnimatePresence mode='wait' >
                {loginmodal && <LoginModal />}
            </AnimatePresence>

            {/* animating the register modal */}
            <AnimatePresence mode='wait' >
                {registermodal && <RegisterModal />}
            </AnimatePresence>

            {children}
        </React.Fragment>
    )
}

export default function LayoutWithModalContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <ModalContextProvider>
            <ModalContextLayout>
                {children}
            </ModalContextLayout>
        </ModalContextProvider>
    );
}
