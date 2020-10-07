import { strict } from "assert";
import { stringify } from "querystring";

export function next(curret:number,max:number):number{
    return (curret+1)%max;
}
export function prev(curret:number,max:number):number{
    return (curret-1)==-1?(max-1):(curret-1);
}
export function streetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]) {
    let vertilen = fighters.length;
    let horilen = fighters[0].length;
    let vet:String[] = [];
    moves.forEach(mv => {
        switch (mv) {
            case "left":
                position[0]=prev(position[0],horilen);
                break;
            case "right":
                position[0]=next(position[0],horilen);
                break;
            case "up":
                position[1]=(position[1]-1)==-1?0:(position[1]-1);
                break;
            case "down":
                position[1]=(position[1]+1)==vertilen?position[1]:(position[1]+1);
                break;
            default:
                break;
        }
        vet.push(fighters[position[1]][position[0]]);
    });
    return vet;
}
let fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
let moves = ['up', 'left', 'right', 'left', 'left'];
streetFighterSelection(fighters, [0,0], moves);