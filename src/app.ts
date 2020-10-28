class points{
    win = 0;
    lose = 0;
    tie = 0;
    played = 0;
    shot = 0;
    gothen = 0;
    get diff(){ return this.shot-this.gothen;}
    constructor(s=0,g=0,w=0,l=0,t=0,p=0){
        this.win=w;
        this.lose=l;
        this.tie=t;
        this.played=p;
        this.shot =s;
        this.gothen = g;
    }
    get points(){return this.win*3+this.tie}
    add(p:points){
        return new points(this.shot+p.shot,this.gothen+p.gothen,this.win+p.win,this.lose+p.lose,this.tie+p.tie,
                        this.played+p.played);
    }
}
class placar{
    point:points;
    time: string;
    constructor(time:string="",point:points=new points()){
        this.point = point;
        this.time = time;
    }
}
class dicPoint{
    dic:{[key:string]:points} = {}
    add(key:string,point:points){
        if(this.dic[key]!=undefined){
            this.dic[key]=this.dic[key].add(point);
        }else{
            this.dic[key]=point;
        }
    }
    toList(){
        let li:Array<placar>=[];
        for(const k in this.dic){
            li.push(new placar(k,this.dic[k]));
        }
        return li;
    }
}
class partida{
    aPoint:number;
    bPoint:number;
    aName:string;
    bName:string;
    constructor(a:number=0,b:number=0,an:string='',bn:string=''){
        this.aPoint=a;
        this.bPoint=b;
        this.aName=an;
        this.bName=bn;
    }
    static transform(res:RegExpExecArray){
        
        return new partida(Number.parseInt(res[1]),Number.parseInt(res[2]),res[3],res[4]);
    }
}
export function getPoinst(a:number,b:number){
    let tie = [0,0,1,1];
    let win = [1,0,0,1];
    let lose = [0,1,0,1];
    if(a==b){
        return [new points(a,b,...tie),new points(b,a,...tie)];
    }
    if(a>b){
        return [new points(a,b,...win),new points(b,a,...lose)];
    }
    return [new points(a,b,...lose),new points(b,a,...win)];
}
const comp = (a,b)=>{
    if(a.point.points<b.point.points)
        return 1;
    if(a.point.points>b.point.points)
        return -1;
    if(a.point.diff<b.point.diff)
        return 1;
    if(a.point.diff>b.point.diff)
        return -1;
    if(a.point.shot<b.point.shot)
        return 1;
    if(a.point.shot>b.point.shot)
        return -1;
    return 0;     
}
const comp2 = (a,b)=>{
    let val = comp(a,b);
    if(val==0){
        if(a.time<b.time)
        return -1;
        if(a.time>b.time)
            return 1;
        return 0;     
    }else{
        return val;
    }
}

export function table(results: string[]): string {
    let rege = /(-|\d+):(-|\d+) (.+) - (.+)/;
    let dic = new dicPoint();
    results.forEach(res =>{
        let groups = rege.exec(res);
        let ptd = partida.transform(groups);
        if(groups[1]=='-'){
            dic.add(ptd.aName,new points());
            dic.add(ptd.bName,new points());
        }else{
            let d = getPoinst(ptd.aPoint,ptd.bPoint);
            dic.add(ptd.aName,d[0]);
            dic.add(ptd.bName,d[1]);
        }
        
    })
    let dci = dic.toList();
    dci.sort((a,b)=>comp2(a,b))
    let cont =1;
    let cc =1;
    let ant = dci[0];
    let colocation= dci.reduce((c,s)=>{
        let val = comp(ant,s);
        if(comp(ant,s)==0){
            c.push(cont);
        }else{
            cont = cc;
            c.push(cont);
            
        }
        ant = s;
        cc++;
        return c;
    },[])
    return dci.map((s,i)=>{
        let lenC = (colocation[i] as number).toString().length;
        let space = " ".repeat(30-s.time.length);
        return `${" ".repeat(2-lenC)}${colocation[i]}. ${s.time}${space}${s.point.played}  ${s.point.win}  ${s.point.tie}  ${s.point.lose}  ${s.point.shot}:${s.point.gothen}  ${s.point.points}`
    }).join('\n');
    return "";
}

var results = [      
    "6:0 FC Bayern Muenchen - Werder Bremen",
    "-:- Eintracht Frankfurt - Schalke 04",
    "-:- FC Augsburg - VfL Wolfsburg",
    "-:- Hamburger SV - FC Ingolstadt",
    "-:- 1. FC Koeln - SV Darmstadt",
    "-:- Borussia Dortmund - FSV Mainz 05",
    "-:- Borussia Moenchengladbach - Bayer Leverkusen",
    "-:- Hertha BSC Berlin - SC Freiburg",
    "-:- TSG 1899 Hoffenheim - RasenBall Leipzig"
  ];
let res = table(results);
