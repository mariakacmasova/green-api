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
      currentUser: null,
      chatContacts: [],
      currentChat: '',
      isModalOpen: false,
      setCurrentUser: (value) =>
        set({
          currentUser: value,
        }),
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
      openModal: () =>
        set({
          isModalOpen: true,
        }),
      closeModal: () =>
        set({
          isModalOpen: false,
        }),
    }),
    {
      name: STORAGE_NAME,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
