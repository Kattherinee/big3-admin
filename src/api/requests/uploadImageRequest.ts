import baseRequest from "../baseRequest";

export const uploadImage = async (
  file: File,
  token: string
): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await baseRequest.post("/api/Image/SaveImage", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  const imagePath = response.data;
  const fullImageUrl = `http://dev.trainee.dex-it.ru${imagePath}`;

  return fullImageUrl;
};
