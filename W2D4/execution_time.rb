require 'byebug'

list = [ 3,0, 5, 4, -5, 10, 1, 90 ] #length 8
# my_min(list)  # =>  -5


# phase 1
def my_min(arr)
  smallest = 0
  i = 0
  while i < arr.length - 1
    current_number = arr[i]
    j = i + 1 
    while j < arr.length 
      second_number = arr[j]
      if current_number < second_number && smallest > current_number
        smallest = arr[i]
      end 
      j += 1
    end 
    i += 1
  end
   smallest
end

# phase 2
def my_min_2(arr)
  smallest = arr[0]

  arr.each do |el|
    if smallest > el 
      smallest = el 
    end 
  end 
  smallest
end 

list = [5, 3, -7]

def sub_sum(arr)
  i = 0
  ans = []
  while i <= arr.length - 1
    j = i
    while j <= arr.length - 1
      ans << arr[i..j].reduce(:+)
      j += 1
    end
    i += 1
  end
  ans.sort.max 
end




def largest(arr)# [2, 3, -6, 7, -6, 7]
  debugger
  larget = arr.first
  current = arr.first
  
  return arr.max if arr.all? {|el| el < 0}
  
  (1...arr.length).each do |i|
  
  current = 0 if current < 0
  current += arr[i]
  larget = current if current > larget
  end
  larget

end 








# sum1 = arr[0]
# # debugger
# arr.each_with_index do |el,i| # @ 4 el == -6
#   if i == 0
#     sum1 = el # 12
#     next
#   end 
#   # temp = el + sum and el is the current element and sum1 is previous element n + (n-1)
#   temp = el + sum1 #7 == el @ 3 and temp = 12
# 
#   if temp > sum1 # 6 > 12 true
#     sum1 = temp #  
#   elsif  el > sum1  # -6 > 12 true 
#     sum1 = el # sum1 = -1
#   end  
# end 
# 
# sum1









#   smallest = 0
#   arr.length.times do |i| 
#     debugger
#     break if i == arr.length - 1
#     if i == 0
#       smallest = arr[i]
#     end
#     (arr[(i + 1)..-1]).length.times do |j|
#       if arr[i] > arr[j]
#         smallest = arr[j]
#       end
#     end
#   end
#   smallest
