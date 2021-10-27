import React, { useEffect, useRef, useState } from "react";

export default function ProfileImage() {
  const [imageProfile, setImageProfile] = useState();
  const [preview, setPreview] = useState();
  const imageInputRef = useRef();

  useEffect(() => {
    if (imageProfile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageProfile);
    } else {
      setPreview(null);
    }
  }, [imageProfile]);
  return (
    <form>
      {preview ? (
        <img className="profileImage" src={preview} />
      ) : (
        <button className="profileImage"
          onClick={e => {
            e.preventDefault();
            imageInputRef.current.click();
          }} >
          Add Image
        </button>
      )}
      <input className="imageInput" type="file" accept="image/*" ref={imageInputRef}
        onChange={e => {
          e.preventDefault();
          const file = e.target.files[0];
          if (file && file.type.substr(0, 5) === "image") {
            setImageProfile(file);
          } else {
            setImageProfile(null);
          }
        }} />
    </form>
  );
}