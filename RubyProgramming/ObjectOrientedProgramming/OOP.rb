### Defining a Class ###
class Animal 
  def eat
    puts "NOM NOM"
  end
  # To define a class, start with the keyword `class`.
  # Give the class a name; in this case, we call it `Animal`.
  # The naming convention of classes in Ruby is CamelCase.\
end

class Cat < Animal
  # Remember, Cat itself is a class, and Cat is also a sub-class of Animal.
  # To establish the relationship between the superclass and the subclass,
  # use the keyword `<` followed by the name of superclass.
  # In this case, it would be `< Animal`
end
class Dog < Animal
  def age
    @age #return the value of the instance variable @age
  end
  def age=(val)
    @age = val #assign the value of `val` to the instance variable @age
  end
  attr_accessor :name, :weight, :color # a replacement for an instance (@)
  def initialize(name, weight, color) #added the parameters
    @name = name #added the instances to reference
    @weight = weight
    @color = color
  end
end
class ShibaInu < Dog 

end

class Lion < Animal 
end


new_dog = Dog.new("John", 12, "red") #instantiate
#new_dog.age # check new_dogs age -> nil since we haven't set anything yet
#new_dog.age = 8
#new_dog.age # -> 8
puts new_dog.name
new_animal = Animal.new
puts new_animal.eat # instantiated new var name and printed out the def
new_shiba = ShibaInu.new("Sam", 12, "Yellow")
puts new_shiba.eat
puts new_shiba.weight


### Method Visisbility ###
#Public - can be called during class definition, as well as outside of the class definition
#Protected - can only be called during class definition and it will be inherited by its subclass
#Private - can only be called during class definition, and will not be inherited by its subclass


class Person 
  def public
    puts "this is a public function"
  end
  protected
  def protected
    puts "This is a protected function"
  end
  private
  def private
    puts "this is a private function"
  end
end
first_person = Person.new()
first_person.public # -> "this is a public function"
#first_person.protected -> "NoMethodError"
#first_person.private -> "NoMethodErrorError"


class Parent 
  def words
    puts "These will print first from parent"
  end
end
class SubClass < Parent
  def words
    super # the parent class will be called first
    puts "This will print second from sub"
  end
end
parent = SubClass.new()
parent.words()

### Novels and Authors ###
class Book
  attr_accessor :title, :year, :authors
  def initialize(title, year, authors)
    @title = title
    @year = year
    @authors = authors
  end
  
  def add_author(name)
    @authors.push(name)
  end
  
  def remove_author(name)
    if @authors.index(name) == nil
      return "#{name} not found in authors"
    else
      @authors.delete(name)
      return "#{name} deleted"
    end
  end
end

### Employee <-> Manager ###
class Employee
  attr_accessor :name, :salary, :days_of_annual_leave

  def initialize(name, salary, days_of_annual_leave)
    @name = name
    @salary = salary
    @days_of_annual_leave = days_of_annual_leave
  end
end

class Manager
  attr_accessor :name, :employees

  def initialize(name, employees)
    @name = name
    @employees = employees
  end
  
  def add_employee(employee)
    if @employees.index(employee) != nil
      return "Employee #{employee.name} already exists"
    else
      @employees.push(employee)
      return "Employee #{employee.name} added"
    end
  end

  def change_employee_leave(employee, days_of_annual_leave)
    if @employees.index(employee) != nil
      employee.days_of_annual_leave = 20
      return "New days of annual leave for #{employee.name} is #{days_of_annual_leave} days"
    else
      return "Employee #{employee.name} is not Max's direct reportee"
    end
  end
end

### Animal Type ### 
class Animal
  attr_accessor :name, :type, :sound

  def initialize(options) #takes one argument instead of three
    @name = options[:name] 
    @type = options[:type]
    @sound = options[:sound]
  end
  
  def make_noise
    return @sound
  end
end

class Human < Animal
end

class Dog < Animal
end

### Big Numbers ###



### Additive Persistance ###

def additivePersistence(number)
  count = 0
  num = number.to_s
  def numberSum(num, count)
    num_array = num.split("")
    def sum(array)
      sum = 0
      array.each do |num|
        sum += num.to_i 
      end
      return sum.to_s
    end
    result = sum(num_array)
    count += 1
    return result.length > 1 ? numberSum(result, count) : count
  end
  
  return num.length > 1 ? numberSum(num, count) : count
end
puts additivePersistence(2718)
puts additivePersistence(35786)

### Triple Double ###
