"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("XXXXXXXX");
const spriteWidth = 256;
const spriteHeight = 256;
// const spriteAnimation: Record<string, SpriteFrame> = {};
const spriteAnimation = new Map();
const animationStates = [
    {
        name: "idle",
        frames: 4,
    },
    {
        name: "attack",
        frames: 6,
    }
];
animationStates.forEach((state, index) => {
    const spriteFrame = {
        loc: []
    };
    for (let i = 0; i < state.frames; i++) {
        const x = spriteWidth * i;
        const y = spriteHeight * index;
        spriteFrame.loc.push({ xPos: x, yPos: y });
    }
    // spriteAnimation[state.name] = spriteFrame;
    spriteAnimation.set(state.name, spriteFrame);
});
console.log(animationStates);
// TS2538: Type 'undefined' cannot be used as an index type. 
// const animationKeys = Object.keys(spriteAnimation);
// for (let i = 0; i < animationKeys.length; i++) {
//     console.log(spriteAnimation[animationKeys[i]]);
// }
const animationKeys = Array.from(spriteAnimation.keys());
for (let i = 0; i < animationKeys.length; i++) {
    console.log(spriteAnimation.get(animationKeys[i]));
}
//# sourceMappingURL=index.js.map