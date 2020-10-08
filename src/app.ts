export class G964 {

    public static primeFactors = (n) => {
        // your code
        let dict:{[id:number]:number}={};
        let num =2;
        while(n!=1){
            if(n%num == 0){
                n/=num;
                if(dict[num]!=undefined){
                    dict[num]++;
                }else{
                    dict[num]=1;
                }
            }else{
                num++;
            }
        }
        let str:string = ""
        for (const key in dict) {
            if(dict[key]==1){
                str +=`(${key})`;
            }else{
                str +=`(${key}**${dict[key]})`;
            }
        }
        return str;
    }
}
G964.primeFactors(7775460);
