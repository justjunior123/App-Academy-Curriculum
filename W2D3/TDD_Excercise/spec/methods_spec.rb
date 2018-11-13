require "methods"

RSpec.describe Array do
  describe "#my_uniq" do 
    
    it "Removes duplicates from an array" do 
      arr = [3,1,2,1,3,3]
      expect(arr.my_uniq).to eq([3,1,2])
    end
  
  end 
  
  describe "#two_sum" do 
    test_arr = [-1,0,2,-2,1]
    it "Finds all pairs of positions whose elements sum to zero" do 
      expect(test_arr.two_sum.sort).to eq([[0,4],[2,3]])
    end
    
    it "Sorts the pairs in order of smaller index to bigger index" do 
      expect(test_arr.two_sum).to eq([[0,4],[2,3]])
    end  
  end 
  
  describe "#my_transpose" do 
    matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

    it "transposes a matrix" do 
      expect(matrix.my_transpose).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
    end 
  end
  
  describe "#stock_picker" do
    
    stocks = [1,4,2,5,3]
    stocks2 = [1,4,3,2,1]
    it "Outputs the most profitable pair of days" do 
      expect(stocks.stock_picker).to eq([0,3])
      expect(stocks2.stock_picker).to eq([0,1])
    end 
    
  end 
  
end 