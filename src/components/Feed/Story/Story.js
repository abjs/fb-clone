import React from "react";
import "./Story.css";
import StoryBox from "./StoryBox";
import CreateStoryBox from "./CreateStoryBox";
import { useStateValue } from "../../Login/helpers/Provider";

export default function Story({ userImg, bgImage, title }) {
  const tmpImage = {
    Surya:
      "https://firebasestorage.googleapis.com/v0/b/facebook-clone-77242.appspot.com/o/62403853.jpg?alt=media&token=9208dee9-2882-4026-b1a3-67f089571062",
    Tovino:
      "https://firebasestorage.googleapis.com/v0/b/facebook-clone-77242.appspot.com/o/Tovino_Thomas.jpg?alt=media&token=6785d24c-8f11-4f61-aa43-107d2308b326",
    aadhi:
      "https://firebasestorage.googleapis.com/v0/b/facebook-clone-77242.appspot.com/o/adhi.jpg?alt=media&token=cf1cf08e-2448-4d9f-852a-591dee42c7fa",
    unni: "https://firebasestorage.googleapis.com/v0/b/facebook-clone-77242.appspot.com/o/Unni_Mukundan-2_1.jpg?alt=media&token=277f98ef-1028-4aff-9c11-6d718ef42f42",
  };
  const [{ user }] = useStateValue();
  console.log(user);
  return (
    <div className="Story">
      <CreateStoryBox bgImage={user.photoURL} />
      {user && (
        <StoryBox
          title={user ? user?.displayName : ""}
          bgImage={user ? user?.photoURL : ""}
          userImg={user ? user?.photoURL : ""}
        />
      )}
      <StoryBox
        title="Tovino Thomas"
        userImg={tmpImage.Tovino}
        bgImage={tmpImage.Tovino}
      />
      <StoryBox
        title="Surya"
        userImg={tmpImage.Surya}
        bgImage={tmpImage.Surya}
      />
      <StoryBox
        title="Hiphop Tamizha"
        userImg={tmpImage.aadhi}
        bgImage={tmpImage.aadhi}
      />
      <StoryBox
        title="unni mukundan"
        userImg={tmpImage.unni}
        bgImage={tmpImage.unni}
      />
    </div>
  );
}
