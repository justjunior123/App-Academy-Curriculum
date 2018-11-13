require "byebug"
class Array
  
  def my_uniq
    results = []
    self.each do |el|
      results << el unless results.include?(el)
    end
    results 
  end 
  
  def two_sum 
    idx = 0
    answer_arr = []
    while idx <= self.length-1
      idx2 = idx + 1
      while idx2 <= self.length-1
        if self[idx] + self[idx2] == 0 
          answer_arr << [idx, idx2]
        end
        idx2 += 1
      end 
      idx += 1
    end
    answer_arr
  end

  def my_transpose
    result = Array.new(self.length) { Array.new(self[0].length) }
    self.length.times do |i|
      self.length.times do |j|
        result[i][j] = self[j][i]
      end
    end
    result
  end
  
  def stock_picker
    pairs = []
    
    (0...self.length - 1).each do |d1|
      rest = self[d1 + 1..-1]
      d2 = self.find_index(rest.max)
      pairs << [d1,d2]  
    end 
    pairs.sort_by{|pair| self[pair[1]] - self[pair[0]]}.last
  end 
    
  
end 