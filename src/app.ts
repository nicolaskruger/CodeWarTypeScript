export const encryptThis = (str: string): string => {
  // Your code goes here
  if(str =="") return "";
  let st = str.split(" ");
  
  st = st.map(s =>{
    if(s.length==1){
      return s[0].charCodeAt(0).toString();
    }
    let val= s[0].charCodeAt(0);
    s= s.slice(1);
    if(s.length==1) return val+ s[s.length-1];
    s=val+ s[s.length-1]+s.slice(1,s.length-1)+s[0];
    return s;
  });
  
  return st.join(" ");
}
encryptThis("");
encryptThis("A");
encryptThis("A wise old owl lived in an oak"); 
encryptThis("The more he saw the less he spoke");
encryptThis("The less he spoke the more he heard");
encryptThis("Why can we not all be like that wise old bird");
encryptThis("Thank you Piotr for all your help");