import Swal from "sweetalert2";

export const toastConfig = () => {
  return Swal.mixin({
    customClass: {
      container: "sweet-toast",
    },
    toast: true,
    icon: "success",
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    confirmButtonText: "close",
    confirmButtonColor: "white",
    timerProgressBar: true,
    showCloseButton: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

export const toastConfirm = (text, subText, html = "") => {
  return Swal.mixin({
    title: text ? text : "Are you sure?",
    text: subText ? subText : "You wanna proceed?",
    html: html,
    customClass: {
      container: "sweet-toast",
    },
    showCancelButton: true,
    confirmButtonText: "Yes",
    denyButtonText: "No",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

export const fireToast = (icon, title) => {
  toastConfig().fire({
    icon,
    title,
  });
};

export const fireSuccessToast = (title) => {
  fireToast("success", title);
};

export const fireTransactionSuccessSwal = (hash) => {
  Swal.fire({
    width: 350,
    icon: 'success',
    denyButtonText: `close`,
    showCancelButton: false,
    title: 'Transaction Successful',
    confirmButtonText: 'View Transaction'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open('https://sepolia.basescan.org/tx/' + hash, '_blank')
    }
  })
}