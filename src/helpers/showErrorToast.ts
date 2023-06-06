import { toast } from 'react-toastify';

const CUSTOM_ID = Math.random() * 1000;
const DELAY = 5000;

export const showErrorToast = (errorMessage: string) =>
  toast.error(errorMessage, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: DELAY,
    toastId: `${CUSTOM_ID}`,
    className: 'toast-error',
  });
