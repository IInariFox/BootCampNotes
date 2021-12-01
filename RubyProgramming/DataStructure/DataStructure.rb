### Arrays ###
labels = ['Milk', 'Eggs', 'Flour', 'Chocolate Bar', 'Ice Cream', 'Biscuits', 'Strawberry Jam']
inventory = [35, 80, 15, 28, 10, 45, 8]

for i in 0..(labels.length-1)
  puts labels[i] + ": " + inventory[i].to_s
end

london = ['rainy', 'rainy', 'rainy', 'rainy', 'cloudy', 'cloudy', 'rainy']
new_york = ['sunny', 'cloudy', 'rainy', 'rainy', 'cloudy', 'sunny', 'stormy']
sydney = ['sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'sunny', 'rainy']
hong_kong = ['cloudy', 'cloudy', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'sunny']

forecasts = [london, new_york, sydney, hong_kong]
cities = ['London', 'New York', 'Sydney', 'Hong Kong']

for i in 0..(forecasts.length-1)
  result = ""
  result += cities[i]
  result += ':'
  for j in 0..(forecasts[i].length-1)
    result += ' '
    result += forecasts[i][j]
  end
  puts result
end

arr = [['abc', '123'], ['xyz', '456']]

for i in 0..(arr.length-1)
  for j in 0..(arr[i].length-1)
    puts arr[i][j]
  end
end

# abc
# 123
# xyz
# 456

array = [1, 2, 3, 4, 5, 6]
array.each { |x| puts x }

arr = ['a', 'b', 'c']

arr.each do |item|
  puts item
end

arr = ['a', 'b', 'c']

arr.each { |item| print item }

numbers = [0, 1, 2, 3]
for element in numbers do
  puts element
end

def string_joiner(arr)
  string = ""

  for i in 0..(arr.length-1)
    string += arr[i]
  end

  return string
end

puts string_joiner(['M', 'e', 'r', 'r', 'y', ' ', 'C', 'h', 'r', 'i', 's', 't', 'm', 'a', 's'])
# -> Merry Christmas

friends = ["Mary"]
lost_friends = ["John", "Peter"]


friends.unshift(lost_friends.pop())
friends.unshift(lost_friends.pop())

puts friends
# -> ["John", "Peter", "Mary"]
puts lost_friends
# -> []


### Search and Destory ### 
def search_and_destroy(arr, target)
  # Write your code below
  for i in arr
    if i == target 
      arr.delete(target)
    end
  end
  return arr
end

numbers = [1, 3, 5, 7, 5, 3, 1]
without3 = search_and_destroy(numbers, 3)
puts without3
# -> [1, 5, 7, 5, 1]
puts numbers
# -> [1, 3, 5, 7, 5, 3, 1]

### Find Missing Number ###
example_array = [36, 58, 41, 55, 90, 37, 97, 63, 18, 92, 5, 45, 75, 62, 81, 95, 57, 86, 2, 8, 34, 31, 83, 89, 10, 60, 70, 84, 87, 66, 42, 74, 43, 12, 46, 69, 20, 7, 98, 22, 32, 13, 72, 16, 24, 53, 54, 23, 96, 56, 25, 100, 64, 94, 27, 35, 82, 6, 33, 28, 91, 44, 40, 67, 48, 79, 11, 21, 80, 9, 30, 29, 71, 65, 73, 49, 78, 39, 51, 19, 38, 76, 47, 93, 15, 68, 52, 88, 14, 85, 4, 26, 61, 3, 50, 99, 17, 77, 1]

def missingNumber(arr)
  count = 0
  sum = 0
  arr.each do |i|
    count += i
  end
  for x in 1..100
    sum += x
  end
  return sum - count
end # -> 59

### Loop over a string ### 

my_string = 'Words'
for i in (0..my_string.length-1)
  puts my_string[i]
end

### Unicode ###
puts 'abc'[0].ord
# => 97
puts 'abc'[2].ord
# => 99

puts 97.chr
# => "a"
puts 97.chr + 98.chr + 99.chr
# => "abc"

### Replace ###
my_string = 'The weather is nice'
my_string = my_string.gsub('nice', 'fantastic') #gsub! - will automatically assign the new value in the variable
puts my_string
# => The weather is fantastic.

### Split ###
my_string = 'The weather is nice'
my_string.split(' ')
# => ['The', 'weather', 'is', 'nice']

### strip ###
my_string = '  hello world      '
puts my_string.strip
# => 'hello world'

### Method Chaining ###
foo = "Hello World"
foo.split('')
# => ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
foo = foo.split('')
foo = foo.join('')
foo = foo.split('').join('') # chaining the methods together instead

### Loop through a hash ###
inventory = {
  milk: 35,
  eggs: 80,
  flour: 15,
  chocolate_bar: 28,
  ice_cream: 10,
  biscuits: 45,
  strawberry_jam: 8,
}

inventory.keys.each() do |item|
  puts item
  puts inventory[item]
end


person = {
  first_name: 'John',
  last_name: 'Wayne',
  date_of_birth: '07-12-1981',
  family: ['Peter Wayne', 'Mary Wayne', 'Jane Lily'],
  friends: ['Maria Marquez', 'Tony Shark'],
  jobs: [
    {
      employer: 'Star Mart',
      position: 'cashier',
      start_date: '05-02-2009',
      end_date: '01-05-2010',
    },
    {
      employer: 'Juicy Bar',
      position: 'juice mixer',
      start_date: '11-04-2010',
      end_date: '22-03-2011',
    }
  ]
}
person[:family].push('John Jr. Wayne') # added new member to family
puts person[:family]

person[:jobs][2][:end_date] = '01-07-2017'

puts person[:jobs][2] # edited the leave date
# => {:employer=>"The Corner Store", :position=>"cashier", :start_date=>"11-04-2017", :end_date=>"01-07-2017"}