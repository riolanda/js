// class car(engine, body, interior)
//TODO: import class from files


class engine{
    constructor(engine){
        this.engine = engine;

    }
}

class body extends engine{
    constructor(engine, body){
        super(engine);
        this.body = body;
        
    }
}

class car extends body{
    constructor(engine, body,car){
        super(engine, body);
        this.car = car;
        
    }
}

var riocar = new car("v8", "convertible", "bmw") 
console.log(riocar.engine)
console.log(riocar.body)
console.log(riocar.car)