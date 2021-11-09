$(document).ready(function(){
  var getAndDisplayAllTasks = function (filter) {
    if (!filter) {
      filter = 'all';
    }

    $.ajax({
      type: 'GET',
      url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=200',
      dataType: 'json',
      success: function (response, textStatus) {
        $('.todo-list').empty();
        var activeTasks = 0;
        
        response.tasks.filter(function (task) {
          if (filter === 'all') {
            return true;
          }
          if (filter === 'active') {
            return !task.completed;
            
          }
          if (filter === 'completed') {
            return task.completed;
          }
        })
        .forEach(function (task) {
          if (!task.completed) {
            activeTasks++;
          }
          
          $('.todo-list').append('<div class="col-xs-12 to-do ' + (task.completed ? 'complete' : '') + '"><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '><p>' + task.content + '</p><button class="delete btn-danger" data-id="' + task.id + '"></button></div>');
          
        });
        $('.to-do-amount span').text(activeTasks.length + " task remaining");
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
    }
    
    });
  }

  var deleteTask = function (id) {
    $.ajax({
      type: 'DELETE',
      url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + id + '?api_key=200',
      success: function (response, textStatus) {
        getAndDisplayAllTasks();
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  }

  $(document).on('click', '.delete', function () {
    deleteTask($(this).data('id'));
  });

  var markTaskComplete = function (id) {
    $.ajax({
      type: 'PUT',
      url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + id + '/mark_complete?api_key=200',
      dataType: 'json',
      success: function (response, textStatus) {
        getAndDisplayAllTasks();
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  }

  var markTaskActive = function (id) {
    $.ajax({
      type: 'PUT',
      url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + id + '/mark_active?api_key=200',
      dataType: 'json',
      success: function (response, textStatus) {
        getAndDisplayAllTasks();
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  }

  $(document).on('change', '.mark-complete', function () {
    if (this.checked) {
      markTaskComplete($(this).data('id'));
    } else {
      markTaskActive($(this).data('id'));
    }
  });
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("title").innerHTML = "To-do List: " + m + "/" + d + "/" + y;


$('#all-button').on('click', function () {
  getAndDisplayAllTasks('all');
});
$('#remaining-button').on('click', function () {
  getAndDisplayAllTasks('active');
});
$('#completed-button').on('click', function () {
  getAndDisplayAllTasks('completed');
});

$('all-button').on('click', showAll);
function showAll() {
  $('all-button').toggleClass('todo-list');
}
$('remaining-button').on('click', showRemaining);
function showRemaining() {
  $('remaining-button').toggleClass('remaining');
}
$('completed-button').on('click', showCompleted);
function showCompleted() {
$('completed-button').toggleClass('mark-complete');
}

function filteredItems() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
}
$('.filtered-div button').on('click', filteredItems);
  getAndDisplayAllTasks();
});