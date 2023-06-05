import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { InitialState } from './types';

const STORAGE_NAME = 'whatsApp-green-api';

const useStore = create<InitialState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      idInstance: '',
      apiTokenInstance: '',
      chatContacts: [],
      currentChat: '',
      setCredentials: (value) =>
        set({
          isLoggedIn: value.isLoggedIn,
          apiTokenInstance: value.apiTokenInstance,
          idInstance: value.idInstance,
        }),
      setChatContact: (value) =>
        set({ chatContacts: [...get().chatContacts, value] }),
      setCurrentChat: (value) =>
        set({
          currentChat: value,
        }),
    }),
    {
      name: STORAGE_NAME,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
