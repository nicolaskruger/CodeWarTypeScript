export class G964 {

    public static primeFactors = (n) => {
        // your code
        let dict=new Map<number,number>();
        let num =2;
        while(n!=1){
            if(n%num == 0){
                n/=num;
                if(dict.has(num)){
                    dict.set(num,dict.get(num)+1);
                }else{
                    dict.set(num,1);
                }
            }else{
                num++;
            }
        }
        let str:string = ""
        dict.forEach((v,k,m) =>{
            if(v==1){
                str +=`(${k})`;
            }else{
                str +=`(${k}**${v})`;
            }
        });
        return str;
    }
}
G964.primeFactors(86240);
