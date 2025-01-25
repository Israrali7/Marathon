import Swal from "sweetalert2";

const showSwalMessage = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "OK",
    });
  };

  export default showSwalMessage;