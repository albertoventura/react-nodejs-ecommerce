import toast from "react-hot-toast";

const ShowSuccess = async (message: string) => {
    return await toast.success(message, {
        style:{
          borderRadius: 10,
          backgroundColor: "#121212",
          color: "#FFF"
        }
    });
}
const ShowError = async (message: string) => {
    return await toast.error(message, {
        style:{
          borderRadius: 10,
          backgroundColor: "#121212",
          color: "#FFF"
        }
    });
}

export const ToastService = {
    ShowSuccess,
    ShowError,
}