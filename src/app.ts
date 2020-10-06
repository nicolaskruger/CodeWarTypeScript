import { strict } from "assert";
import { stringify } from "querystring";

export class G964 {
  public static partlist(arr: string[]): string[][] {
    let matrix:string[][] = [];
    for (let i = 0; i <arr.length-1; i++) {
      let a: string = arr.slice(0,i+1).join(" ");
      let b: string = arr.slice(i+1).join(" ");
      matrix[i]=[a,b];
    }
    return matrix;
  }
}
G964.partlist(["I", "wish", "I", "hadn't", "come"]);