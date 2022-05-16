// class car(engine, body, interior)




class aengine{
    constructor(engine){
        this.engine = engine;


    }
}

class abody extends aengine{
    constructor(body){
        super(aengine);
        this.body = body;
        
    }
}

class acar extends abody{
    constructor(car){
        super(aengine, abody);
        this.car = car;
        
    }
}

var riocar = new acar("v8", "convertible", "bmw") 
console.log(riocar.engine)
console.log(riocar.body)
console.log(riocar.car)