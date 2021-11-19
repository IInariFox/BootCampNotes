/*method is for defining which type of request we are making, "GET", "POST", "PUT", "DELETE", etc. The default is "GET", that's why we don't need to define the option object for a simple "GET" request.
mode is for defining whether the API we are sending a request to, has the same domain URL as the website we are sending the request from.
"same-origin" is the default setting, it will only allow sending request to the same domain as the page. I.e., we can only send a request to www.foo.com if we are on a page of www.foo.com.
"cors" stands for Cross Origin Resource Sharing, this mode allows us to send request to domains of different origins. A page on www.foo.com can send requests to www.bar.com with this setting.
credentials defines whether we are going to send the browser cookies to the API server. The browser cookie may contain sensitive information such as login status, session id, etc. It is most conservative to only send cookie data to the origin domain.
"include" will send the cookie data for same origin and cross origin requests. This means making a request to www.bar.com from www.foo.com will also include the cookie.
"same-origin" will only send cookie data when the request is same origin, www.foo.com to www.foo.com.
"omit" will prevent cookie being sent at all.
headers lets us define what type of headers we want to set for the request, the most common header we will set for now is "Content-Type".
body is where we define the data to be sent to the API, we must remember to use JSON.stringify to transform the data into JSON.
*/

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error("Request was either a 404 or 500");
}
const json = (response) => response.json();


class Task extends React.Component {
  render () {
    const { task, onDelete, onComplete } = this.props;
    const { id, content, completed } = task;
    return (
      <div className="row mb-1">
        <p className="col">{content}</p>
        <button onClick={() => onDelete(id)}>
          Delete
        </button>
        <input className="d-inline-block mt-2" type="checkbox" onChange={() => onComplete(id, completed)} checked={completed} />
      </div>
    ); 
  }
}


class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_task: '',
      tasks: [],
      filter: 'all'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }
  componentDidMount() {
    this.fetchTasks();
  }
  fetchTasks() {
    fetch("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=48").then(checkStatus).then(json).then((response) => {
      console.log(response);
      this.setState({tasks: response.tasks});
    }).catch(error => {
      console.error(error.message);
    });
  }

  handleChange (event) {
    this.setState({ new_task: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    let {new_task} = this.state;
    new_task = new_task.trim();
    if (!new_task) {
      return;
    }
    fetch("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=48", {
      method: "post",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        task: {
          content: new_task
        }
      }),
    }).then(checkStatus).then(json).then((data) => {
      this.setState({new_task: ''});
      this.fetchTasks();
    }).catch((error) => {
      this.setState({error: error.message});
      console.log(error);
    });
  } 

  deleteTask(id) {
    if(!id) {
      return;
    }
    fetch(`https://altcademy-to-do-list-api.herokuapp.com/tasks/${id}?api_key=48`, {
      method: "DELETE",
      mode: "cors",
    }).then(checkStatus).then(json).then((data) => {
      this.fetchTasks();//fetches task after delete
    }).catch((error) => {
      this.setState({error: error.message});
      console.log(error);
    });
  }

  toggleComplete(id, completed) {
    if(!id) {
      return;
    }
    const newState = completed ? 'active' : 'complete';
    fetch(`https://altcademy-to-do-list-api.herokuapp.com/tasks/${id}/mark_${newState}?api_key=48`, {
     method: "put",
     mode: "cors", 
    }).then(checkStatus).then(json).then((data) => {
      this.fetchTasks();
    }).catch((error) => {
      this.setState({error: error.message});
      console.log(error);
    });
  }
  
  toggleFilter(e) {
    console.log(e.target.name);
    this.setState({filter: e.target.name});
  }
  
  render() {
    const { new_task, tasks, filter } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">To Do List</h2>
            {tasks.length > 0 ? tasks.filter(task => {
              if (filter === 'all') {
                return true;
              } else if (filter === 'active') {
                return !task.completed;
              } else {
                return task.completed;
              }
            }).map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={this.deleteTask}
                  onComplete={this.toggleComplete}
                />
              );
            }) : <p>no tasks here</p>}
            <div className="mt-3">
              <label>
                <input type="checkbox" name="all" checked={filter === "all"} onChange={this.toggleFilter} /> All
              </label>
              <label>
                <input type="checkbox" name="active" checked={filter === "active"} onChange={this.toggleFilter} /> Active
              </label>
              <label>
                <input type="checkbox" name="completed" checked={filter === "completed"} onChange={this.toggleFilter} /> Completed
              </label>
            </div>
            <form onSubmit={this.handleSubmit} className="form-inline my-4">
              <input type="text" className="form-control mr-sm-2 mb-2" placeholder="Add a task" value={new_task} onChange={this.handleChange} onComplete={this.toggleComplete}/>
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  } 
}
ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);