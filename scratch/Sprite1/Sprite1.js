/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 113,
        y: 53,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.points = 0;
    this.stage.vars.lives = 3;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x -= 10;
      }
      if (this.toNumber(this.stage.vars.lives) === 0) {
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.stage.vars.lives--;
  }
}
