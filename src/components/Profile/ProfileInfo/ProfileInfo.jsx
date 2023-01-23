import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.img}
          src="https://www.lovethegarden.com/sites/default/files/styles/header_image_xl/public/content/articles/UK_community-fun-facts-19-common-british-birds-you-can-find-your-garden_header.jpg?itok=MweJ55ij"
          alt="ImgTwo"
        />
      </div>
      <div className={style.descriptionBlock}>
        ava + info {/* <div><img src="https://images.vexels.com/media/users/3/157837/isolated/preview/db181fb308b9a32197d9c3cadc58c4d3-asymmetric-cut-hair-woman-avatar.png" /></div> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
