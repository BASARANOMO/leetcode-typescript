class Stack<T> {
    _store: T[] = [];
    push(val: T) {
      this._store.push(val);
    }
    pop(): T | undefined {
      return this._store.pop();
    }
  }
  
  function decodeString(s: string): string {
      let str: string = "";
      let stk = new Stack<any>();
      let num: number = 0;
      for (let char of s) {
          if (!isNaN(Number(char))) {
              num = num * 10 + Number(char);
          } else if (char === "[") {
              stk.push(str);
              stk.push(num);
              str = "";
              num = 0;
          } else if (char === "]") {
              let prevNum: number = stk.pop();
              let prevStr: string = stk.pop();
              let tempStr: string = "";
              for (let i = 0; i < prevNum; i++) {
                  tempStr += str;
              }
              str = prevStr + tempStr;
          } else {  // alphabet
              str += char;
          }
      }
      return str;
  };