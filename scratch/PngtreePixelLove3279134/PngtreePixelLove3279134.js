/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PngtreePixelLove3279134 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "—Pngtree—pixel love_3279134",
        "./PngtreePixelLove3279134/costumes/—Pngtree—pixel love_3279134.png",
        { x: 276, y: 81 }
      ),
      new Costume(
        "—Pngtree—pixel love_2",
        "./PngtreePixelLove3279134/costumes/—Pngtree—pixel love_2.png",
        { x: 276, y: 81 }
      ),
      new Costume(
        "—Pngtree—pixel love_3",
        "./PngtreePixelLove3279134/costumes/—Pngtree—pixel love_3.png",
        { x: 276, y: 81 }
      ),
      new Costume(
        "—Pngtree—pixel love_4",
        "./PngtreePixelLove3279134/costumes/—Pngtree—pixel love_4.png",
        { x: 276, y: 81 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.toNumber(this.stage.vars.lives) === 2) {
        this.costume = "—Pngtree—pixel love_2";
      }
      if (this.toNumber(this.stage.vars.lives) === 1) {
        this.costume = "—Pngtree—pixel love_3";
      }
      if (this.toNumber(this.stage.vars.lives) === 0) {
        this.costume = "—Pngtree—pixel love_4";
      }
      if (this.toNumber(this.stage.vars.lives) === 3) {
        this.costume = "—Pngtree—pixel love_3279134";
      }
      yield;
    }
  }
}
