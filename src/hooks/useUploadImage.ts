/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { deleteImage, uploadImage } from "../api/upload";

export default function useUploadImage() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUploadImage = async (file: any) => {
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("image", file[i]);
    }
    try {
      setLoading(true);
      const response = await uploadImage(formData);
      setImage(response.data?.urls[0]?.url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectImage = (e: any) => {
    const file = e.target.files;
    if (!file) return;
    void handleUploadImage(file);
  };

  const handleDeleteImage = async () => {
    const imageRegex: any = /\/v\d+\/(\w+)\./.exec(image);
    const publicId = imageRegex[1];
    console.log(publicId);
    if (!publicId) return;
    try {
      await deleteImage(publicId);
      setImage("");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    image,
    setImage,
    loading,
    handleSelectImage,
    handleDeleteImage,
  };
}
