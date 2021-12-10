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
def addBig(num1, num2)
  # your magic here
  result = ""
  leftover = 0

  [num1.length, num2.length].max.times do |i|
    total = num1.reverse[i].to_i + num2.reverse[i].to_i + leftover
    if total >= 10
      total -= 10
      leftover = 1
    else
      leftover = 0
    end
    
    result.prepend total.to_s
  end
  
  result
end
a = "25256262652562";
b = "8790087923478963673763168867989797";
puts addBig(a, b) == "8790087923478963673788425130642359"


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
def tripleDouble(num1, num2)
  num1_s = num1.to_s
  num2_s = num2.to_s
  
  for i in 0..(num1_s.length - 3) #loop through two numbers to check if one has triple duplicates and other has double duplicates
    if num1_s[i] == num1_s[i+1] and num1_s[i] == num1_s[i+2]
        for j in 0..(num2_s.length - 2)
          if num1_s[i] == num2_s[j] and num2_s[j] == num2_s[j+1]
            return true
          end
        end
    end
  end  
  return false
end

### Prime Numbers ###
def PrimeNumber?(number)
  a = 2
  while a < ( (number/2) + 1 )
    return false if number % a === 0
    a += 1
  end
  return true
end

def primeFactors(number)
  factors = []
  i = 2
  
  while number != 1
    if PrimeNumber?(i) and number % i == 0
      factors.push(i)
      number = number / i
    else
      i = i + 1
    end
  end
  
  return factors
end

puts primeFactors(24)


### Anagram ###
def anagrams(str)
  str.split('').permutation.map(&:join).uniq.sort
  #split() - will break the string into an array of individual characters
  #permutation.map(&:join) - will create all possible combinatations
  #uniq - is to remove any duplicates
  #sort - will sort the results alphabetically
end



### Tutorial Difficulty ###
$allLevels = ['easy', 'medium', 'advanced', 'expert']
class Course
  attr_accessor :name, :tutorials
  def initialize(name, tutorials)
    # write your code here
    @name = name
    @tutorials = tutorials
  end
  def add_tutorial(tutorial)
    # write your code here
    for i in 0..(@tutorials.length-1)
      if @tutorials[i] == tutorial
        return "Tutorial level: #{tutorial.level} already exists"
      end
    end
    @tutorials.push(tutorial)
    return "Tutorial level: #{tutorial.level} added"
  end
  def remove_tutorial(tutorial)
    # write your code here
    for i in 0..(@tutorials.length-1)
      if @tutorials[i] == tutorial
        @tutorials.delete(tutorial)
        return "Tutorial level: #{tutorial.level} deleted"
      end
    end
    
    return "Tutorial level: #{tutorial.level} does not exist"
  end
  def is_tut_harder_than?(tut1, tut2)
    # write your code here
    if $allLevels.index(tut1.level) > $allLevels.index(tut2.level)
      return true
    elsif tut1.level == tut2.level
      return "They are the same level"
    else
      return false
    end
  end
end
class Tutorial
  attr_accessor :level
  def initialize(lvl)
    # write your code here
    @level = lvl
  end
end