console.log("XXXXXXXX");

const spriteWidth: number = 256;
const spriteHeight: number = 256;

interface Position {
    xPos: number;
    yPos: number;
}

interface SpriteFrame {
    loc: Position[];
}

// const spriteAnimation: Record<string, SpriteFrame> = {};
const spriteAnimation = new Map<string, SpriteFrame>();

interface AnimationState {
    name: string;
    frames: number;
}

const animationStates: AnimationState[] = [
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
    const spriteFrame: SpriteFrame = {
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
    console.log(spriteAnimation.get(animationKeys[i]!)!);
}
