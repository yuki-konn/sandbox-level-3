class Column {
  openingTag = "<div class='col'>";
  closingTag = "</div>";
  innerHTML = "";

  constructor(content = "") {
    /*****************************************
     * - THE constructor IS A METHOD THAT
     *   AUTOMATICALLY RUNS WHEN THE OBJECT IS CREATED.
     * - USE THE constructor TO ACCEPT PARAMETERS
     *   AND INITIALIZE VALUES
     *
     * - Every Class has it's own empty constructor until you make it.
     *****************************************/

    console.log("The content of this column will be: " + content);
    this.innerHTML = content;
  }
}

// CLASS FOR METHOD EXAMPLE
class Car {
  color = "red";

  constructor(newColor = "") {
    this.color = newColor;
    console.warn("A new car has been created.");
  }

  honkHorn() {
    // IN A CLASS, THE function KEYWORD IS NOT USED FOR METHODS.
    console.log("Honk honk!");
  }

  info() {
    /*****************************************
     * - USE THE KEYWORD this TO ACCESS PROPERTIES AND
     *   METHODS FROM WITHIN AN OBJECT.
     *****************************************/
    console.error("The color is " + this.color);
  }

  toString() {
    /*****************************************
     * - THE toString METHOD CUSTOMIZES
     *   HOW AN OBJECT IS OUTPUT.
     * - THIS METHOD IS AUTOMATICALLY CALLED
     *   WHEN THE OBJECT IS USED LIKE A STRING.
     *
     * - EVERY CLASS HAS IT'S OWN toString METHOD.
     * - WITHOUT THIS METHOD IT WOULD OUTPUT [object Object].
     *****************************************/
    return "This car's color is " + this.color;
  }
}

function classExample() {
  debugger;

  const column1 = new Column();
  column1.innerHTML = "I'm column 1";
  const column2 = new Column();
  column2.innerHTML = "I'm column 2";
  const column3 = new Column();
  column3.innerHTML = "I'm column 3";
}

function methodExample() {
  debugger;
  /*****************************************
   * - A METHOD IS A FUNCTION IN AN OBJECT OR CLASS
   * - IN A CLASS, THE function KEYWORD IS NOT USED FOR METHODS.
   *****************************************/
  const car = new Car("red");
  car.honkHorn();
  output(car.toString(), "outputTag1");
}
//this example
function thisExample() {
  debugger;
  /*****************************************
   * - USE THE KEYWORD this TO ACCESS PROPERTIES AND
   *   METHODS FROM WITHIN AN OBJECT.
   * - USE THE USUAL DOT NOTATION.
   * - THINK OF this AS THE PLACEHOLDER NAME OF THE OBJECT.
   *****************************************/
  const car1 = new Car();
  const car2 = new Car();
  const car3 = new Car();

  car1.color = "black";
  car2.color = "blue";
  car3.color = "bronze";

  car1.info();
  car2.info();
  car3.info();
}
//toString example
function toStringExample() {
  debugger;
  /*****************************************
   * - THE toString METHOD CUSTOMIZES
   *   HOW AN OBJECT IS OUTPUT.
   *****************************************/
  const car = new Car("red");
  output(car + "<br>", "outputTag3");
}

function contructorExample() {
  debugger;
  /*****************************************
   * - THE constructor IS A METHOD THAT
   *   AUTOMATICALLY RUNS WHEN THE OBEJCT IS CREATED.
   * - IT CAN ACCEPT PARAMETERS FOR THE OBJECT.
   *****************************************/

  const car = new Car("black");
  // const column = new Column("I'm column 1.");
}
