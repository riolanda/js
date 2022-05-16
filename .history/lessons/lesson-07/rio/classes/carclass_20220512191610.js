// class car(engine, body, interior)




class engine{
    constructor(engine){
        this.engine = engine;


    }
}

class body extends engine{
    constructor(body){
        this.body = body;
    }
}

class car extends body{
    constructor(car){
        this.car = car;
    }
}

var riocar = 