class Card {
  constructor(name,cost) {
    this.name = name;
    this.cost = cost;
  }

}

class Unit extends Card{
  constructor(name,cost,resilience,power){
    super(name,cost);
    this.power = power;
    this.resilience = resilience;
  }

  attack(target){
    if( target instanceof Unit ){
      target.resilience -= this.power
    }
  }

  showStats(){
    console.log(this.name,this.cost,this.resilience,this.power)
  }
}

class Effect extends Card{
  constructor(name,cost,text,stat,magnitude){
  super(name,cost)
  this.text = text
  this.stat= stat
  this.magnitude = magnitude
  }

  play( target) {
    if( target instanceof Unit ) {
        if(this.stat === "resilience"){
          target.resilience += this.magnitude
        }
        if(this.stat === "power"){
          target.power +=this.magnitude
        }
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
}



const unit1 = new Unit("Red Belt Ninja",3,3,4);
const unit2 = new Unit("Black Belt Ninja",4,5,4);

const effect1 = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience", 3);
const effect2 = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience", -2);
const effect3 = new Effect("Pair Programming",3,"increase target's power by 2","power", 2)






effect1.play(unit1);
unit1.showStats();
effect2.play(unit1);
unit1.showStats();
effect3.play(unit1);
unit1.showStats();
unit1.attack(unit2);
unit2.showStats();
