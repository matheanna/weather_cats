import { useState } from "react";
import "../style/avatarCreator.css";

import burmese from "../img/cats/burmese.png";
import cymric from "../img/cats/cymric.png";
import donskoy from "../img/cats/donskoy.png";
import egyptianMau from "../img/cats/egyptian-mau-cat.png";
import elf from "../img/cats/elf.png";
import exoticShorthair from "../img/cats/exotic-shorthair.png";
import himalayan from "../img/cats/himalayan-cat.png";
import manx from "../img/cats/manx.png";
import siamese from "../img/cats/siamese.png";
import sphinx from "../img/cats/sphinx.png";
import tortoiseshell from "../img/cats/tortoiseshell.png";

import hat1 from "../img/hats/hat1.png";
import hat2 from "../img/hats/hat2.png";
import hat3 from "../img/hats/hat3.png";
import hat4 from "../img/hats/hat4.png";
import hat5 from "../img/hats/hat5.png";
import hat6 from "../img/hats/hat6.png";
import hat7 from "../img/hats/hat7.png";
import bow from "../img/hats/bow.png";
import earring from "../img/hats/earring.png";

import glass2 from "../img/glasses/glass2.png";
import glass3 from "../img/glasses/glass3.png";
import glass4 from "../img/glasses/glass4.png";
import glass5 from "../img/glasses/glass5.png";
import glass6 from "../img/glasses/glass6.png";

import bg1 from "../img/backgrounds/bg1.png";
import bg2 from "../img/backgrounds/bg2.png";
import bg3 from "../img/backgrounds/bg3.png";
import bg4 from "../img/backgrounds/bg4.png";
import bg5 from "../img/backgrounds/bg5.png";

export default function AvatarCreator() {
  const catArr = [
    burmese,
    cymric,
    donskoy,
    egyptianMau,
    elf,
    exoticShorthair,
    himalayan,
    manx,
    siamese,
    sphinx,
    tortoiseshell,
  ];
  const hats = [hat1, hat2, hat3, hat4, hat5, hat6, hat7, bow, earring];
  const glasses = [glass2, glass3, glass4, glass5, glass6];
  const backgrounds = [bg1, bg2, bg3, bg4, bg5];
  const [hatNum, setHatNum] = useState(0);
  const [catNum, setCatNum] = useState(0);
  const [glassNum, setGlassNum] = useState(0);
  const [bgNum, setBgNum] = useState(0);
  const [avatar, setAvatar] = useState({
    bg: bg1,
    cat: "burnemese",
    hat: "hat1",
    glass: "glass2",
  });

  function handleSave() {
    console.log(avatar);
  }

  function handleBG(dir) {
    setAvatar({ ...avatar, bg: "bg" + (bgNum + 2).toString() });
    if (bgNum + 1 >= backgrounds.length) setBgNum(0);
    else setBgNum(bgNum + dir);
  }
  function handleCat(dir) {
    //setAvatar({...avatar, cat: })
    if (catNum + 1 >= catArr.length) setCatNum(0);
    else setCatNum(catNum + dir);
  }
  function handleHat(dir) {
    setAvatar({ ...avatar, hat: "hat" + (hatNum + 2).toString() });
    if (hatNum + 1 >= hats.length) setHatNum(0);

    else setHatNum(hatNum + dir);
  }
  function handleGlasses(dir) {
    setAvatar({ ...avatar, glass: "glass" + (glassNum + 2).toString() });
    if (glassNum + 1 >= glasses.length) setGlassNum(0);
    else setGlassNum(glassNum + dir);
  }

  return (
    <div id="avatarCreator">
      <h2>Create your avatar!</h2>
      <button onClick={() => handleHat(1)}>next hat</button>
      <button onClick={() => handleHat(-1)}>prev hat</button>
      <button onClick={() => handleCat(1)}>next cat</button>
      <button onClick={() => handleCat(-1)}>prev cat</button>
      <button onClick={() => handleGlasses(1)}>next glass</button>
      <button onClick={() => handleGlasses(-1)}>prev glass</button>
      <button onClick={() => handleBG(1)}>next bg</button>
      <button onClick={() => handleBG(-1)}>prev bg</button>

      <div id="bgs">
        <img src={backgrounds[bgNum]} alt="bg" id="bg" />
      </div>
      <div id="cats">
        <img src={catArr[catNum]} alt="cat" id="cat" />
      </div>
      <div id="hats">
        <img src={hats[hatNum]} alt="hat" id="hat" />
      </div>
      <div id="glasses">
        <img src={glasses[glassNum]} alt="glass" id="glass" />
      </div>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
