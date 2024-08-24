class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
        
    }
    push(num){
        this.data[this.length] = num
        this.length = this.length+1
    }
    pop(){
        const last = this.data[this.length-1]
        delete(this.data[this.length-1])
        this.length = this.length-1
        return last
    }
    get(){
        console.log(Object.values(this.data))
    }
    get(index){
        return this.data[index]
    }
    shift(){
      const first = this.data[0]
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i+1]
      }
      delete this.data[this.length-1]
      this.length--;
      return first
    }
    delete(index){
        const last = this.data[this.data-1]
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--;
        return last
    }
}

// const myNewArray = new MyArray()
// myNewArray.push(2)
// myNewArray.push(3)
// myNewArray.push(4)
// myNewArray.push(5)
// myNewArray.push(6)
// console.log(myNewArray);
// myNewArray.delete(2)
// console.log(myNewArray);

module.exports = MyArray; 