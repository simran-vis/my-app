import api from "./api";
import ENDPOINTS from "../constants/endpoints";

// UPLOAD PRESCRIPTION API
export const uploadPrescription = async (file) => {
  try {
    const formData = new FormData();
    formData.append("prescription", file);

    const res = await api.post(ENDPOINTS.PRESCRIPTION_UPLOAD, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error uploading prescription:", error);
    return null;
  }
};
