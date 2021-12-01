### Functions/Methods ###
def sum(a, b) #def - functionName - (input1, input2)
  return a + b
end
puts sum(1,2)

def microwave(time)
  heat = time * x * y * z
  return heat
end

def is_odd(number)
    if number % 2 != 0
      return true
    else
      return false
  end
end
def sum (a, b)
  return a - b
end
puts sum(20, 10)

# to_s - Return a string containing the number. - 12345.to_s => "12345"
# odd? - Return true if is an odd number. -	7.odd? => true
# to_i - Convert the string into an integer. - "1234".to_i => 1234 "hello".to_i => 0

### Palindrome ###
def isPalindrome(string)
  # your magic
  # return true if the string is a palindrome, otherwise return false

  return string.downcase == string.downcase.reverse
end

puts isPalindrome("anna")
puts isPalindrome("Ruby")
puts isPalindrome("nOoN")

### Prime Number ###
def PrimeNumber?(number)
  if number <= 1
    return false
  elsif number == 2
    return true
  else
    isPrime = true
    for i in 2..number-1
      if number % i == 0
        isPrime = false
      end
    end
    return isPrime
  end
end

puts PrimeNumber?(13) # true
puts PrimeNumber?(10) # false
puts PrimeNumber?(97) # true

### Early Return Function ###
def is_plural(number)
  puts "please print me."
  if number % 2 == 0
    return true
  end
  puts "please print me too."
  return false
  puts "please print me three."
end
is_plural(10)
# please print me.
# => true
is_plural(11)
# please print me.
# please print me too.
# => false

### Arrays ###
even_numbers = [2, 4, 6, 8, 10]
even_numbers.each do |item| # each iteration, it will store the stuff in item
  puts item
end
# 2
# 4
# 6