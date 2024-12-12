/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 }),
    ];

    this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    while (true) {
      this.createClone();
      yield* this.wait(1.5);
      yield;
    }
  }

  *startAsClone() {
    this.effects.ghost = 0;
    this.goto(this.random(-240, 240), 181);
    while (true) {
      this.y -= 4;
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.vars.points++;
        this.deleteThisClone();
      }
      if (this.y === -179) {
        this.broadcast("message1");
        this.deleteThisClone();
      }
      yield;
    }
  }
}
