export class G964 {

    public static mathAll(str:string,rg:RegExp){
        let vet  = [];
        try {

            while(true){
               let st = str.match(rg)[0];
               str = str.replace(st,'');
               vet.push(st);
            }
        } catch (error) {
            return vet;
        }
    }
    public static phone = (strng:string, num:string) => {
        // your code
        let numReg = /\d{1,2}-\d{3}-\d{3}-\d{4}/;
        let nameReg = /<(.+)>/;
        let endReg = /[\w.\-]+/;
        
        return strng.split('\n').map(s =>{
            let numm = s.match(numReg);
            let name = nameReg.exec(s);
            let end = s.replace('+'+numm,'');
            if(name!=null)
            end = end.replace(name[0],'').trim();
            end = G964.mathAll(end,endReg).join(" ").trim();
            return [numm,name,end]
        }).filter(s => s[0]==num).map(s => {
            return `Phone => ${s[0]}, Name => ${s[1][1]}, Address => ${s[2]}`
        })[0];
    }
}