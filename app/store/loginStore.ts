import { create } from "zustand";

type LoginStore = {
    mailAddress: string;
    password: string;
    setMailAddress: (mailAddress: string) => void;
    setPassword: (password: string) => void;
    };

    export const useLoginStore = create<LoginStore>((set) => ({
        mailAddress: "",
    password: "",
    setMailAddress: (mailAddress) => set(() => ({ mailAddress })),
    setPassword: (password) => set(() => ({ password })),
    }));