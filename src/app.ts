export function areaOfPolygonInsideCircle(circleRadius: number, numberOfSides: number): number {
    return Number.parseFloat((Math.pow(circleRadius,2)*Math.sin(2*Math.PI/numberOfSides)*numberOfSides/2).toFixed(3));
  }

 let val = areaOfPolygonInsideCircle(3, 3) ;
 