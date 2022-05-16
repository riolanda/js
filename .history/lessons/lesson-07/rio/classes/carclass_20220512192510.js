// class car(engine, body, interior)




class engine{
    constructor(engine){
        this.engine = engine;


    }
}

class body extends engine{
    constructor(body){
        this.body = body;
        super(engine);
    }
}

class car extends body{
    constructor(car){
        this.car = car;
        super(engine, body);
    }
}

var riocar = new car("v8", "convertible", "bmw") 
console.log(riocar.body, riocar.engine, riocar.car)