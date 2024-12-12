import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Apple from "./Apple/Apple.js";
import PngtreePixelLove3279134 from "./PngtreePixelLove3279134/PngtreePixelLove3279134.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Sprite1: new Sprite1({
    x: 118,
    y: -157,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 1,
  }),
  Apple: new Apple({
    x: -6,
    y: 181,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 2,
  }),
  PngtreePixelLove3279134: new PngtreePixelLove3279134({
    x: -183,
    y: 134,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 40,
    visible: true,
    layerOrder: 3,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
