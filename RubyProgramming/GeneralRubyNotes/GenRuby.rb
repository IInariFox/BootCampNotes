################## Drawing a shape ################### 
puts "Nathon" #puts - also prints out text, and has priority over print, will make a new line every time
print "My Notes"
print "are cool."# print - will be put in the same line as before
puts "   /|"
puts "  / |"
puts " /  |"
puts "/___|"

################# Variables ##########################
character_name = "Sam" #we need an underscore every time we make a name with more than one word
character_age = "35"
puts (character_name +  " did not like being " + character_age) #we need parenthasis whenever we make a insert of variable
puts ("So one day," + character_name + " changed his age from 35 to " + character_age)

############### Data Types #########################
name = "nathon" # string - plain text
age = 75 # int - number
height = 6.5 # float - decimal number
ismale = true # boolean - true or false
errors = nil # does not have a value

############## Working With Strings ################
phrase = "this is a string"
puts phrase.upcase() #upcase() - will uppercase the letters and downcase()
puts phrase.strip() #stript() - will remove white space
puts phrase.length() #length() - gives length of string
puts phrase.include? "this" #include? - true or false if something is inside of another thing
puts phrase[0] #accesses the first letter of the string
puts phrase[0, 4] #will give the first four characters

############# Math and Numbers #########################
puts 2**3 #this is how to raise
num = 10.4
puts num.floor() #prints out lower  
puts Math.sqrt(100) #math and square root

########### Getting User Input #############
puts "Enter your name: "
name = gets.chomp() #get - gets specific information #chomp() - makes everything in one line
puts ("Hello " + name)

####### Building a Calculator ##############
puts "Enter a number: "
num1 = gets.chomp()
puts "Enter a second number" # to_f - will round floor the boolean 
num2 = gets.chomp()
puts (num1.to_i + num2.to_i) #to_i - converts the string into an integer

############### Arrays ###############
friends  = Array["Kevin", "Sam", "John"]
puts friends[0] #gets kevin
puts friends[-2] #gets john
puts friends[0, 2] #gets everything up until and excluding 2
puts friends[0] = "Orange" # changed the first name
puts friends.reverse() #reverse() - reverses all of the elements in the array
puts friends.sort() #sort() - orders the array alphabetically

############### Hashes ####################
states = {
  "Pennsylvania" => "PA", # key on the left - must be unique : value on the right
  "New York" => "NY",
  "Oregon" => "OR"
}
puts states["Oregon"]

############### Methods #################
def sayHi(name, age) # we inserted a parameter 
  puts ("Hello " + name + " you are " + age.to_s) # printed text plus the parameter #to_s - because we can't mix integer and string
end

sayHi("nathon", 20) #inserted the value of the parameter

########### Return Statement ############
def cube(num)
  return num * num * num # return - only gives stuff on the same line, anything after it will be ignored
end
puts cube(10)

############## If Statements ##########
isMale = true
isTall = true

if isMale and isTall  
  puts "You are a male"
elsif !ismale and isTall
  puts "You are not tall and not male"
else 
  puts "You are not male"
end

def max(num1, num2, num3)
  if num1 >= num2 and num1 >= num3
    return num1
  elsif num2 >= num1 and num2 >= num3
    return num2
  else
    return num3
  end # this end ends off the if statement
end #this end ends off the def

puts max(1,23,4)

####### Better Calculator ############
puts "Enter first number: "
num1 = gets.chomp().to_f
puts "Enter operator: "
op = gets.chomp()
puts "Enter second number: "
num2 = gets.chomp().to_f

if op == "+" 
  puts (num1 + num2)
elsif op == "-"
  puts (num1 - num2)
elsif op == "/"
  puts (num1 / num2)
elsif op == "*"
  puts (num1 * num2)
else 
  puts "invalid operator"
end

########## Case Expressions #######
def get_day_name(day)
  day_name = ""
  case day #insert the value in the def 
  when "mon"
    day_name = "Monday"
  when "tue"
    day_name = "Tuesday"
  when "Wed"
    day_name = "Wednesday"
  when "thur"
    day_name = "Thursday"
  when "fri"
    day_name = "Friday"
  when "Sat"
    day_name = "Saturday"
  when "Sun"
    day_name = "Sunday"
  else day_name = "Invalid choice"
  end
  return day_name
end

puts get_day_name("mon")

######## While Loops ##########
index = 1
while index <= 5
  puts index
  index += 1

end

###### Building a guessing game #########
secret_word = "secret"
guess = "" #guess stores the users guesses 
guess_count = 0
guess_limit = 3
out_of_guesses = false #when the user reaches limit, it will change to true and lose the game

while guess != secret_word and !out_of_guesses #keep looping through the loop as long as the guess does not equal the secret word and not out of guesses
  if guess_count < guess_limit
    puts "enter guess: "
    guess = gets.chomp()
    guess_count += 1
  else 
    out_of_guesses = true
  end    
end
if out_of_guesses
  puts "You lose"
else 
  puts "You Won"
end

##### For Loops ######
friends = ["John","Sam", "Sally","Karen"]
for friend in friends #friend - is a variable it can be whatever name
  puts friend
end
friends.each do |friend|
  puts friend
end
for index in 0..5
  puts index
end
6.times do |index|
  puts index
end

###### Exponent Method ########
def pow(base_num, pow_num)
  result = 1
  pow_num.times do |index|
    result = result * base_num #if pow_num is 3, we're going to loop through this code 3 times
  end
  return result
end 
puts pow(2,1)

######## Reading Files ##########
=begin
File.open("fileName.txt")
File.open("name/otherName/file.txt", "r") do |file| # r - all we want to do is read the file - store the file in the |file| variable
  puts file - metadata of file
  puts file.read() - everything in the file
  puts file.readline() - reads line by line

  for line in file.readlines() #loop and edit all of the lines in the file
    puts line
  end
end
=end

##### Handling Errors ########
numbers = [1,2,3,4,45,6,77,8,9]
begin 
  numbers["number"]
  num = 10 / 0
rescue ZeroDivisionError
  puts "Division by zero error"
rescue TypeError => e # e places the explaination of the error
  puts e
end

######### Classes and Objects ##########  ######## Initialize Method ###########

class Book #book data type will have attribute accessor of title, author and pages
  attr_accessor :title, :author, :pages
  def initialize(title, author, pages) # parameters
    @title = title # @title - refers to the title attribute
    @author = author
    @pages = pages
  end
end
book1 = Book.new() # created a new book which is an object
book1.title = "Harry Potter" # attributes are the values of the objects
book1.author = "JK Rowling"
book1.pages = 400
puts book1.title

book2 = Book.new()
book2.title = "Lord"
book2.author = "Name"
book2.pages = 343
puts book2.pages

book3 = Book.new("New", "name", 300)
puts book3.title

######### Instance Method ###########
class Student 
  attr_accessor :name, :major, :gpa
  def initialize (name, major, gpa)
    @name = name
    @major = major
    @gpa = gpa
  end
  def has_honors
    if @gpa >= 3.5
      return true
    end
    return false
  end
end
student1 = Student.new("Jim", "major name", 2.3)
student2 = Student.new("awd", "major name two", 3.6) #returns true because gpa is higher than 3.5
puts student2.has_honors

######## Inheritance ##########
class Chef
  def make_chicken
    puts "Chef makes chicken"
  end
  def make_salad
    puts "Chef makes salad"
  end
  def make_soup
    puts "Chef makes soup"
  end
end
class ItalianChef < Chef # < - ItalianChef class inherits def from Chef 
  def make_soup
    puts "Chef makes special dish"
  end
  def make_pasta
    print "Makes pasta"
  end
end
italianChef = ItalianChef.new()
italianChef.make_salad
italianChef.make_soup #ovverride make_soup from Chef class

######### Modules #########
module Tools
  def sayHi(name)
    puts "hellow #{name}"
  end
  def sayBye(name)
    puts "bye #{name}"
  end
end
include Tools 
Tools.sayHi("nathon")
Tools.sayBye("nathon")

=begin
  require_relative "GenRuby.rb" #file name export to another file
  include Tools
  Tools.sayHi("nathon")
=end

############ Interactive Ruby ###########
#open command prompt 
#irb -v
#irb 
