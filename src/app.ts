export class G964 {

    public static stockList = (listOfArt, listOfCat) => {
        if( !listOfArt.length || !listOfCat.length ) return "";
        var count = listOfArt.reduce(function(cat, art) {
            cat[art[0]] = ~~cat[art[0]]+ +art.split(" ")[1];
            return cat
        },{});
        return listOfCat.map(function(cat){ return "(" +cat +" : " + (count[cat] || 0) + ")"; }).join(" - ");
    }
}
let b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c = ["A", "B", "C", "D"];

let d = G964.stockList(b,c);
