import React from "react";
import galleryStyles from "../styles/Gallery.module.scss";

const Gallery = () => {
  const imagesUrl = [
    "developer 1.png",
    "developer 2.png",
    "developer 3.png",
    "developer 4.png",
  ];

  return (
    <div className={galleryStyles.gallery}>
      <p className={galleryStyles.description}>
        By the end of this course, you will be able to develop and publish your
        very own Google Chrome extension! In this course we will focus on coding
        exercises and projects.
      </p>
      {imagesUrl.map((url) => (
        <img
          className={galleryStyles.img}
          src={`/media/gallery/${url}`}
          alt={url}
        />
      ))}
      <p className={galleryStyles.description}>
        If you would like to learn web development and get a job in the tech
        industry, you are going to LOVE this course! Learn HTML, CSS,
        JavaScript, Bootstrap and more with over 15 hours of HD video tutorials!
        This course was designed to be extremely beginner friendly. We will
        begin with the very basics of HTML and build a simple web page.
      </p>
    </div>
  );
};

export default Gallery;
