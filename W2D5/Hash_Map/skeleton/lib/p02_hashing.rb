class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  
  def hash
    encrypt = 0
    
    self.each_with_index do |el, i| 
      encrypt ^= ((el.to_s).hash * i )
    end 
    encrypt
  end 
    
end

class String
  
  def hash
    encrypt = 0
    
    self.each_with_index do |el, i| 
      encrypt ^= ((el.to_s).hash * i )
    end 
    encrypt
  end 
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
