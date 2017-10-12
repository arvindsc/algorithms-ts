export class MathWorld {
    static factorial(num: number) {
        let temp = 1;
      
        if (num == 0 ) {
            return 1
        }
        while (num > 1) {
            console.log(num);
            temp *=num--; 
        }
        return temp;
      
    }
}