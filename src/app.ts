function fromTo(str:string,i:number,j:number){
  let map = new Map<number,string>();
  let a = str[i];
  let b = str[j];
  map.set(i," ");
  map.set(j,' ');
  let vet= str.split('').map((s,i)=>{
    if(map.has(i)){
        return map.get(i)
    }
    return s
  }).join('').split(' ');

  if(i<j){
    return vet[0]+vet[1]+b+a+vet[2];
  }
  return vet[0]+a+b+vet[1]+vet[2];
}

export function smallest(n: number): number[] {
  // your code
  let str  = n.toString();
  let menor = n;
  let indexi = n;
  let indexj = 0;
  let busca =  str.split('').sort();
  for(let i=0;i<str.length;i++){
    let num = str.lastIndexOf(busca[i]);
    if(num!=i){
      let a = Number.parseInt(fromTo(str,num,i));
      let b = Number.parseInt(fromTo(str,i,num));
      if(a<menor){
        menor =a ;
        indexi =num;
        indexj =i;
      }
      if(b<menor){
        menor =b;
        indexi =i;
        indexj =num;       
      }
      if(a==menor&&num<indexi){
        indexi = num;
        indexj = i;
      }
      if(b==menor&&i<indexi){
        indexi = i;
        indexj = num;
      }
    }
  }
   
  return [menor,indexi,indexj];
}
let val = smallest( 3003803);
let str = "1234567890"
let vel =  fromTo(str,5,1);
