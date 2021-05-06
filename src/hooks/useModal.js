
import { useState } from 'react';
import React from 'react'

 const useModal = (initialValue=false) => {
    const [isOpen, setlsOpen] = useState(initialValue);

    const openModal = () => setlsOpen(true);
    const closeModal = () => setlsOpen(false);
    return [isOpen, openModal, closeModal];
}


export default useModal