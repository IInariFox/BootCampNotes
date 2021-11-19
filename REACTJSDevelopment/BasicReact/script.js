const element = React.createElement( //React.createElement - takes three inputs: type ~ html tag element; props ~ object property we want to pass in; children ~ are the child elements we want nested inside the element
  'h1', //type
  {className: 'title'}, //props
  'Hello World!' //children
);
ReactDOM.render( //ReactDOM.render(): takes two arguments - a react element & a container reference to inject into the element(which needs a DOM node)
  element,
  document.getElementById('root') //renders the element into the DOM 
);


/* React Props */
var anotherElement = React.createElement(
  'h1',
  {
    className: 'title',
    onClick: () => {console.log('clicked');},
    style: {fontFamily: 'sans-serif', color: 'yellow'} //will override what is written in css file
  }, //props: 16 - 19
  'Hello World'
); 
document.getElementById('title').style.color = 'green';

/* Using same compontent in multiple classes */
var thirdElement = React.createElement(
  'h1',//type
  {
    className: 'title',
    onClick: () => {console.log('clicked');},
    style: {fontFamily: 'sans-serif', color: 'red'}
  }, //props: 28 - 31
  'Hello world'//children
);
ReactDOM.render(
  thirdElement,
  document.getElementById('root')
);
ReactDOM.render(
  thirdElement,
  document.getElementById('second-root')
);
document.querySelectorAll('.button').forEach(domNode => {//select all three of the buttons and on each
  //we loop through each of the span DOM node and retrieve the message ID from the data attribute thorugh the datset prop
  const messageId = parseInt(domNode.dataset.messageId);
  //then we create and render a React element for a button and attach an onClick event handler which will lg the message ID
  const button = React.createElement(
    'button',
     {
       onClick: () => { console.log(`liked message: ${messageId}`); }
     },
    'Like'
   )
   
   ReactDOM.render(
     button,
     domNode
   )
});

var thirdElement = <h1>Hello World</h1>;
ReactDOM.render(
  thirdElement,
  document.getElementById('second-root'x)
);
var name = 'john';
const fourthElement = <h1>Hello {name}</h1>;
var name = 'javier';
var spanish = true;
var fifthElement = <h1>{spanish ? 'Hola' : 'Hello'} {name}</h1>;
console.log(fifthElement);


/*Using expression in JSX */
var formulateGreeting = (user) => {

  if (user) {
    let greeting;
    switch (user.language) {
      case 'es':
        greeting = 'Hola';
        break;
      case 'de':
        greeting = 'Hallo';
        break;
      default:
        greeting = 'Hello';
    }

    // if user input is defined, return the following dynamic message
    return (
      <h1 className="greeting">
        {`${greeting} ${user.firstName} ${user.lastName}`}
      </h1>
    );
  }

  // if user input is undefined, return the following static message
  return <h1 className="greeting" style={{color: 'yellow'}}>Hello my friend</h1>; //we need to add in double curly braces to define that JS code is inside 
};

var element = formulateGreeting();

/* Styling in JSX */
//we add 'className' in camelCase to define a class

/* Using JS expressions in JSX attributes */
var formulateGreeting = (user) => {

  if (user) {
    let greeting;
    switch (user.language) {
      case 'es':
        greeting = 'Hola';
        break;
      case 'de':
        greeting = 'Hallo';
        break;
      default:
        greeting = 'Hello';
    }

    
    return (
      <h1 className={`greeting $(user.language)`}> //gives a different class value of the h1 element based on the language
        {`${greeting} ${user.firstName} ${user.lastName}`}
      </h1>
    );
  }


  return <h1 className="greeting" style={{color: 'yellow'}}>Hello my friend</h1>; 
};

var element = formulateGreeting();


/* React custom components and props */ /* Composing Components */
var Temperature = (props) => {
  console.log('props: ', props);
  return <h1>The current temperature in {props.city} is {props.degree} degree {props.unit}</h1> //function component - only accepts one parameter(props) 
};
var App = () => {
  return (
   <div>
     <Temperature city="London" degrees={20} unit="celcius" />
     <Temperature city="New York" degrees={25} unit="celcius" />
     <Temperature city="Dubai" degrees={32} unit="celcius" />
   </div> 
  );
}

var sixthElement = <Temperature degree={25} unit="celcius"/> //we use the name of the custom component as the name of the react comp
ReactDOM.render( //React expects all of its functions to be pure functions
  sixthElement,
  document.getElementById('second-root')
);

/* Navbar */
var Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
    </nav>
  );
}
/* Sidebar */
var Sidebar = () => {
  return(
    <div className="sidebar d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
        Sidebar
      </div>
    </div>
  );
}
/* Footer */
var Footer = () => {
  return (
    <div className="footer border-top p-2">
      Template demo
    </div>
  );
}
/* Template */
const Template = (props) => {
  return (
    <React.Fragment> //wrap a list of elements and the fragment component will not transform into the DOM 
      <div>
        <Navbar />
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-9">
              {props.children} //lets us access the children content of a component - Template component doesnt need to know in advance what the main content will be 
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
/* Using a template component */
var App = () => {//we use this to wrap the template around everything
  return (
    <Template>
      <h1>Main content</h1> //h1 will be rendered as the children
    </Template>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/* Use same template on multiple HTML pages */
var Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand"></a>
    </nav>
  );
}
var Sidebars = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
        Sidebar
      </div>
    </div>
  );
}
var Footer = () => {
  return (
    <div className="border-top p-2">
      Template demo
    </div>
  );
}
Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
var App = () => {
  return (
    <Template>
      <h1>Main content</h1>
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/* Adding State to A Component */
var Clock = (props) => {
  return (
    <div>
      <h2>The current time is: {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

window.setInterval(() => {
  ReactDOM.render(
    <Clock date={new Date()} />, //refreshes the page or clock every second
    document.getElementById('root')
  );
}, 1000);

/* React Class Component */
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  //method syntax
  changeAge (age) {
    this.age = age;
  }
}
var tom = new Person('Tom', 20);
tom.changeAge (21); //changed Tom's name
console.log(tom.age); //printed the age

// ES5, an object Constructor
var Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.changeAge = function (age) {
  this.age = age;
}
const tom = new Person('Tom', 20);
tom.changeAge(21);
console.log(tom.age);
// -> 21

/* ES6 class inheritance */
//ES6 
class Student extends Person {
  constructor (name, age, subject) {
    super(name, name);//super - calls the Person constructor method to initialize the properties name and age
    this.subject = subject;
  }
  changeSubject (subject) {
    this.subject = subject;
  }
}
var mary = new Student('Mary', 21, 'Physics');
mary.changeAge(22);
mary.changeSubject('Astrophysics');
console.log(mary);

// ES5
var Student = function (name, age, subject) {
  Person.call(this, name, age);
  this.subject = subject;
}
Student.prototype = Object.create(Person.prototype);
// Student inherits Person.prototype methods
Student.prototype.constructor = Student;
// Reset constructor method to Student constructor function
Student.prototype.changeSubject = function (subject) {
  this.subject = subject;
}
var mary = new Student('Mary', 21, 'Physics');
mary.changeAge(22);
mary.changeSubject('Astrophysics');

/* Create a React Class Component */
//class component 
class Clock extends React.Component {//needs to exent React.component to inherit React stuff
  render() {
    return (
      <div>
        <h2>The current time is {thus.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
window.setInterval(() => {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
},1000);

/* Add state to class component */
class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()}; //this is the component state property object -- needs to be an object
  }
  render() {
    return (//we can access the state property anywhere else via the this.state
      <div>
        <h2>The current time is: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
window.setInterval(() => {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
});

/* React Component Life Cycle */
//mounting: constructor method is run to setup the component - render method is run to generate output
//live and updating: React watches for any changes to the component render is called if state or prop changes
//Unmounting: ceases all actions to remove component from DOM

/* Doing things between the state change (lifecycle methods) */
class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { date: new Date() }; // this is the component state property object - we cannot modify the state directly 
  }

  componentDidMount () {
    // run code when component is first rendered into the DOM
    this.timer = setInterval( //store interval id in this timer
      () => this.updateTime(),1000 //interval timer will execute every 1 second
    );
  }

  componentWillUnmount () {
    // run code just before component is removed from the DOM
    clearInterval(this.timer);//component unmounts when it is no longer needed on the page, based on user
  }

  updateTime() {
    this.setState({ //we beed to pass an object value to this method that represents the new state we want to set
      date: new Date() // we use setState() to update the state
    });
  }

  render () {
    return (
      <div>
        <h2>The time now is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

/* State can be passed down */
var DateDisplay = (props) => {
  return <h2>The time now is {props.date.toLocaleTimeString()}.</h2>
}

DateDisplay.defaultProps = {
  date: new Date()
}

class Clock extends React.Component {
  static defaultProps = {
    secondsShift: 0
  }

  constructor (props) {
    super(props);
    var date = new Date();
    date.setSeconds(date.getSeconds() + props.secondsShift);

    this.state = { date };
  }

  componentDidMount () {
    this.timer = setInterval(
      () => this.updateTime(),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  updateTime () {
    var date = new Date();
    date.setSeconds(date.getSeconds() + this.props.secondsShift);

    this.setState({ date });
  }

  render () {
    return (
      <div>
        <DateDisplay date={this.state.date} />
      </div>
    )
  }
}

// Clock.defaultProps = {
//   secondsShift: 0
// }
var App = () => {
  return (
    <React.Fragment>
      <Clock />
      <Clock secondsShift={10} />
      <Clock secondsShift={20} />
    </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/* React counter component and event handling */
class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {count: 0} //count value starts at 0
    this.addCount = this.addCount.bind(this); //the binding ensures 'this' refers to the class object in the callback
  }
  addCount (amount) {
    //add 1 to this.state.count
    this.setState({
      count: this.state.count + amount
    });
  }
  render () {
    return (//h2 displays the current value of the count state via a JS expression
      //we add in the onClick function 
      <div>
        <h2>Count: {this.state.count}</h2>
        <h2>Count {this.state.count}</h2>
        <button onClick={() => this.addCount(1)}>
          +1
        </button>
        <button onClick={() => this.addCount(2)}>
          +2
        </button>
        <button onClick={() => this.addCount(3)}>
          +3
        </button>
      </div>
    );
  }
}
class Button extends React.Component{
  handleClick() {
    console.log('this is: ', this);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    )
  }
}
var Link = () => {
  var handleClick = (e) => {
    e.preventDefault();
    console.log('Link clicked');
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
class ScrollLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
    // bind to the class object so updateScrollY can access this.setState
    this.updateScrollY = this.updateScrollY.bind(this);
  };
  updateScrollY(e) {
    this.setState({ scrollY: Math.round(window.scrollY) });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollY);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollY);
  }
  render() {
    return (
      <div className="position-fixed bg-white p-3" style={{right: 0, top: 0}}>
        Scrolled: {this.state.scrollY}px
      </div>
    )
  }
}
var App = () => {
  return (
    <React.Fragment>
      <Counter />
      <Button />
      <Link />
      <ScrollLogger />
    </React.Fragment>
  );
}
ReactDOM.render (
  <App />,
  document.getElementById('root')
);