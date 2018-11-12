class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
    @hsh_key = 0
  end

  def insert(key)
    if include?(key) == false 
      self[key] << key.hash
      @count += 1
    end 
    if @num_buckets == count 
      resize!
    end 
  end
  
  def include?(key)
    self[key].include?(key) 
  end
  
  def remove(key)
  end
  
  private
  
  def [](key)
    @store[key.hash % num_buckets] # optional but useful; return the bucket corresponding to `num`
  end
  
  def num_buckets
    @store.length
  end

  def resize!
    @count.times do 
      @store << Array.new
    end
    @num_buckets = num_buckets 
    storage = [] 
    @store.each do |bucket| 
      until bucket.empty?
        storage << bucket.pop 
      end 
    end 
    
    storage.each do |value| 
      self[value] << value 
    end 
  end
end
