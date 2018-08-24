require "byebug"
#Write a function sum_to(n) that uses recursion to calculate
#the sum from 1 to n (inclusive of n).
def sum_to(int)
  return nil if int < 0
  return int if int == 0

  int + sum_to(int - 1)
end

# Test Cases
  #sum_to(5)  # => returns 15
  #sum_to(1)  # => returns 1
  #sum_to(9)  # => returns 45
  #sum_to(-8)  # => returns nil
#################################################################

#Write a function add_numbers(nums_array) that takes in an array of
#Fixnums and returns the sum of those numbers.
#Write this method recursively.

def add_numbers(array)
  return nil if array.empty?
  return array[0] if array.length == 1

  array.shift + add_numbers(array)
end
# Test Cases
  #add_numbers([1,2,3,4]) # => returns 10
  #add_numbers([3]) # => returns 3
  #add_numbers([-80,34,7]) # => returns -39
  #add_numbers([]) # => returns nil
########################################################################

#Let's write a method that will solve Gamma Function recursively.
#The Gamma Function is defined Γ(n) = (n-1)!.

def gamma_fnc(int)# int = 6
  return nil if int <= 0
  return int if int == 1 || int == 2
  debugger
  (int - 1) * gamma_fnc(int - 2) # (7) * (6) * (5) * (4)
end
  p gamma_fnc(8)
# Test Cases
  #gamma_fnc(0)  # => returns nil
  #gamma_fnc(1)  # => returns 1
  #gamma_fnc(4)  # => returns 6
  #gamma_fnc(8)  # => returns 5040
