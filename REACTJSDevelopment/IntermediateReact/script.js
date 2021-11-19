var letters = ['a', 'b', 'c', 'd']
var letterElements = letters.map(letter => <li>{letter}</li>); //the map function returns an array of jsx outputs in a parent jsx component React will render it into the DOM

ReactDOM.render(
  <ul>{letterElements}</ul>,
  document.getElementById('root')
);
/* Feed and Posts */
var posts = [
  {
    id: '1',
    body: 'Love For All, Hatred For None.',
    user: 'Khalifatul Masih III',
    comments: [
      {
        id: '1',
        body: 'Word.',
        user: 'John Doe',
      }
    ]
  },{
    id: '2',
    body: 'Change the world by being yourself.',
    user: 'Amy Poehler',
    comments: [
      {
        id: '2',
        body: 'I am always myself, how come the world no change?',
        user: 'John Doe',
      },{
        id: '3',
        body: 'Then change yourself.',
        user: 'Amy Poehler',
      }
    ]
  },{
    id: '3',
    body: 'Every moment is a fresh beginning.',
    user: 'T.S Eliot',
    comments: []
  },{
    id: '4',
    body: 'Never regret anything that made you smile.',
    user: 'Mark Twain',
    comments: [
      {
        id: '4',
        body: 'Like tipping that glass of milk over?',
        user: 'John Doe',
      },{
        id: '5',
        body: 'Please stop trolling sir.',
        user: 'Amy Poehler',
      }
    ]
  },
];

var Comment = (props) => {
  var { comment } = props;
  return <p className="ml-3">{comment.body} - {comment.user}</p>
}

var Post = (props) => {
  var { post } = props; //destructuring - a shorter way to create variables from object properties
  var { comments } = post;

  return (
    <div>
      <p>{post.body} - {post.user}</p>
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  )
}

 Feed = (props) => {
  return (
    <div className="p-3">
      <p>Feed</p>
      {props.posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  )
}

ReactDOM.render(
  <Feed posts={posts} />,
  document.getElementById('root')
);

var obj = {
  foo: 'hello',
  bar: 'world',
  baz: 1,
};
var { foo, bar, baz } = obj;
console.log(foo); // -> 'hello'
console.log(bar); // -> 'world'
console.log(baz); // -> 1

/* Controlled Components */
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '', // a property for storing password state
      biography: '',
      age: '<20',
      subscribe: false, //default not checked
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var { name, value } = event.target;
    let value;
    switch (type) {
      case 'checkbox':
        value = event.target.checked; //for checkbox
        break;
      default:
        value = event.target.value; //for input and form elements\
    }

    // extract name and value attribute from element

    this.setState({
      [name]: value // ES6 object computed property name
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // prevents default page change behavior
    var { email, password, biography } = this.state;
    console.log(`form submitted\nemail: ${email}\npassword: ${password}\nbiography: ${biography}\nage: ${age}\nsubscribe: ${subscribe}`);
  }

  render() {
    var { email, password, biography, age, subscribe } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleChange} />
        </label>
        <label>
          Biography:
          <textarea name="biography" value={biography} onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <select name="age" value={age} onChange={this.handleChange}>
          <option value="<20">20 or younger</option>
          <option value="21-30">21 to 30</option>
          <option value="31-40">31 to 40</option>
          <option value="41-50">41 to 50</option>
          <option value=">51">51 or older</option>
          </select>
        </label>
        <label>
          Subscribe to newsletter:
          <input name="subscribe" type="checkbox" checked={subscribe} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}


/* Uncontrolled Form Elements */
class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // use .createRef() to create a ref object
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    var value = this.inputRef.current.value;
    console.log(`form submitted: ${value}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class FileForm extends React.component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    var file = this.fileRef.current.files[0].name;
    console.log(`form submitted.\nfile: ${file}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} defaultValue="John" />
        </label>
        <label>
          Subscribe:
          <input type="checkbox" ref={this.checkboxRef} defaultChecked={true} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/* Conditional Rendering if else statements */

// If else statements
const RainForecast = (props) => {
  const precipitation = props.precipitation;
  if (precipitation > 50) {
    return <h1>It is likely going to rain!</h1>;
  }
  return <h1>It is unlikely going to rain.</h1>;
}

// Using variables
const RainForecast2 = (props) => {
  const precipitation = props.precipitation;
  let message;
  if (precipitation > 50) {
    message = <h1>It is likely going to rain!</h1>;
  } else {
    message = <h1>It is unlikely going to rain.</h1>;
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Precipitation rate {precipitation}%</h2>
          {message}
        </div>
      </div>
    </div>
  )
}

// Inline if else statements
const RainForecast3 = (props) => {
  const precipitation = props.precipitation;

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Precipitation rate {precipitation}%</h2>
          {(() => {
            if (precipitation > 50) {
              return <h1>It is likely going to rain!</h1>;
            }
            return <h1>It is unlikely going to rain.</h1>;
          })()}
        </div>
      </div>
    </div>
  )
}

// Inline logical operators
const RainForecast4 = (props) => {
  const precipitation = props.precipitation;

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Precipitation rate {precipitation}%</h2>
          {precipitation > 50 && <h1>It is likely going to rain!</h1>}
          {precipitation <= 50 && <h1>It is unlikely going to rain.</h1>}
        </div>
      </div>
    </div>
  )
}

const RainForecast5 = (props) => {
  const precipitation = props.precipitation;

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Precipitation rate {precipitation}%</h2>
          {precipitation > 50 ? (
            <h1>It is likely going to rain!</h1>
          ) : (
            <h1>It is unlikely going to rain.</h1>
          )}
        </div>
      </div>
    </div>
  )
}

(() => {//we we dont put in parenthasis, JS engine will think that this is a function definition and proceed to hoist
  const x = "hello";
  console.log(x);
})() // extra parenthasis is used to invoke the function

// Prevent rendering on error
const RainForecast6 = (props) => {
  const precipitation = props.precipitation;

  if (!precipitation) {
    return null;
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Precipitation rate {precipitation}%</h2>
          {precipitation > 50 && <h1>It is likely going to rain!</h1>}
          {precipitation <= 50 && <h1>It is unlikely going to rain.</h1>}
        </div>
      </div>
    </div>
  )
}
//ternary version
return (
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Precipitation rate {precipitation}%</h2>
        {precipitation > 50 ? (
          <h1>It is likely going to rain!</h1>
        ) : (
          <h1>It is unlikely going to rain.</h1>
        )}
      </div>
    </div>
  </div>
);
}

ReactDOM.render(
  <RainForecast />,
  document.getElementById('root')
);

/* Asynchronous Promises */
var doAfterDelay = function (data, callBack) {
  setTimeout(function () {
    callBack(data);
  }, 300);
}
doAfterDelay('hello world', function (data) {
  console.log(data); //after 300 milliseconds, console will log hello world
});
doAfterDelay('hello world', function (data) {
  doAfterDelay(data, function(data) {
    console.log(data);
  });
});
//calling doAfterDelay as the first callBack, then call the function to log the data
//console will log 'hello world' after a delay of 600 milliseconds - not ideal because nested

/* Promise Object */
const doAfterDelay = (data) => {
  return Promise((resolve, reject) => { //promise - object that will track of when the asynchronous program will complete
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
};
doAfterDelay('hello world').then((data) => {
  console.log(data); //after 300 milliseconds, console will log hello world
});
doAfterDelay('hello world').then((data) => {
  return doAfterDelay(data);
}).then((data) =>{ //then - defines what program to execute after the delay
  console.log(data);
}); //after 600 milliseconds, console will log hello world

/* Throw an error */
// Rejecting a promise
const flipCoin = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    resolve('Success');
  }

  reject(new Error('Failure, better luck next time'));
  // Error creates a JS error object with a message, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
});

flipCoin.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
})

// (50% of the time the promise will resolve and you get)

// Success

// (Other 50% of the time, the promise will reject)

// Failure, better luck next time

// Throwing an error
const biasedCoin = () => {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    if (Math.random() > 0.5) {
      resolve(num);
    }

    resolve(1);
    // This coin is biased, will only return decimal larger than 0.5 or 1
  });
}

biasedCoin().then((num) => {
  if (num === 1) {
    throw new Error('Math.random() should not produce whole number');
  }

  if (num > 0.5) {
    console.log('Coin flip got Head.');
  } else {
    console.log('Coin flip got Tail.');
  }

  return num;
}).then((num) => {
  console.log('The num was ', num);
}).catch((error) => {
  console.log(error.message);
})

// 50% of the time, biasedCoin will flip a Head

// Coin flip got Head
// THe num was 0.75233134

// Other 50% will result in a 1, and an Error will be thrown

// Math.random() should not produce whole number

// Fetch request to OMDBAPI
fetch('https://www.omdbapi.com/?t=frozen&apikey=b7da8d63').then((response) => {
  if (response.ok) {
    // .ok returns true if response status is 200-299
    return response.json();
  }
  throw new Error('Request was either a 404 or 500');
}).then((data) => {
  console.log('json data', data);
  // do what you need to do with the data returned
}).catch((error) => {
  console.log(error);
  // deal with the error
})


/* Web dev simp */
