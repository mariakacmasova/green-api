import { toast } from 'react-toastify';

const CUSTOM_ID = Math.random() * 1000;
const DELAY = 5000;

export const showToastSuccess = (successMessage: string) =>
  toast.success(successMessage, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: DELAY,
    toastId: `${CUSTOM_ID}`,
    className: 'toast-success',
  });
