// class car(engine, body, interior)




class engine{
    constructor(engine){
        this.engine = engine;


    }
}

class body extends engine{
    constructor(body){
        super(engine, car);
        this.body = body;
        
    }
}

class car extends body{
    constructor(car){
        super(engine, body);
        this.car = car;
        
    }
}

var riocar = new car("v8", "convertible", "bmw") 
console.log(riocar.body, riocar.engine, riocar.car)