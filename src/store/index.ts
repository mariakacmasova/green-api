import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { InitialState } from './types';

const STORAGE_NAME = 'whatsApp-green-api';

const useStore = create<InitialState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      idInstance: '',
      apiTokenInstance: '',
      setCredentials: (value) =>
        set({
          isLoggedIn: value.isLoggedIn,
          apiTokenInstance: value.apiTokenInstance,
          idInstance: value.idInstance,
        }),
    }),
    {
      name: STORAGE_NAME,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
