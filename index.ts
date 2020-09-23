export class G964 {
    public static printerError(s: string): string {
        return s.split('').filter( s => s>'m').length.toString()+"/"+s.length.toString();
    }
  }
  console.log(
G964.printerError("aaaaaaaaaaaxxxaaaaaaaaa")
  );