/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Fragment } from "react";

interface IImageUploadProps {
  className?: string;
  name: string;
  image: string;
  onChange: any;
  handleDeleteImage: any;
  rest?: any;
  loading: boolean;
}

const ImageUpload = ({
  className = "",
  name,
  image = "",
  onChange,
  handleDeleteImage,
  loading,
  ...rest
}: IImageUploadProps) => {
  console.log(image);
  return (
    <label
      className={`cursor-pointer flex items-center justify-center border border-dashed w-full max-h-[300px] h-full rounded-lg ${className} relative overflow-hidden group`}
    >
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={onChange}
        multiple
      />
      {loading && image === "" && (
        <div className="absolute z-10 w-16 h-16 border-8 border-green-500 rounded-full loading border-t-transparent animate-spin"></div>
      )}
      {!loading && image === "" && (
        <div className="flex flex-col items-end text-center pointer-events-none">
          <img
            src="/img-upload.png"
            alt="upload-image"
            className="max-w-[80px] mb-5"
            {...rest}
          />
          <p className="font-semibold">Choose photo</p>
        </div>
      )}
      {image && (
        <Fragment>
          <img src={image} alt="" className="object-cover w-full h-full" />
          <button
            type="button"
            className="absolute z-10 flex items-center justify-center invisible w-16 h-16 text-red-500 transition-all bg-white rounded-full opacity-0 cursor-pointer group-hover:opacity-100 group-hover:visible"
            onClick={handleDeleteImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </Fragment>
      )}
    </label>
  );
};

export default ImageUpload;
