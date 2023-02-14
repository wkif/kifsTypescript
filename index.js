function Persion(name, age) {
    this.name = name;
    this.age = age
}
Persion.prototype.getName = function () {
    console.log(this.name)
}

let p1 = new Persion('kif', 12)
p1.getName()

class PersionC {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    getName(){
        console.log(this.name)
    }
}
let p2 = new PersionC('kif2',22)
p2.getName()