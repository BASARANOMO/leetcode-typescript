function fizzBuzz(n: number): string[] {
    let res: string[] = [];
    for (var i:number = 1; i <= n; i++) {
        let temp: string = '';
        if (i % 3 == 0) {
            temp += "Fizz";
        }
        if (i % 5 == 0) {
            temp += "Buzz";
        }
        if (temp == '') {
            temp += i;
        }
        res.push(temp);
    }
    return res;
};