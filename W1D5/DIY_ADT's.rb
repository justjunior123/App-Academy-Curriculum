#Let's write a Stack class. To do this, use the following framework:
#To test that your code works, create a new instance of the Stack class,
#and play around with adding and removing elements. Remember, a stack
#follows the principle of LIFO!

class Stack
    def initialize
      @a_stack = []
    end

    def push(el)
      @a_stack << el # adds an element to the stack
    end

    def pop
      @stack.pop# removes one element from the stack
    end

    def peek
      @a_stack[0]# returns, but doesn't remove, the top element in the stack
    end
end
# p a = Stack.new()
# p a.push(3).push(2).push(3)
# p a.peek

########################################################################

#Now let's write a Queue class. We will need the following instance
#methods: enqueue(el), dequeue, and peek.

#Test your code to ensure it follows the principle of FIFO.

class Queue
  def initialize
    @a_queue = []
  end

  def enqueue(el)
    @a_queue << el
  end

  def dequeue
    @a_queue.shift
  end

  def peek
    @a_queue.first
  end

end
# p a = Queue.new()
# p a.enqueue(1)
# p a.peek
########################################################################

#As you saw in the videos for tonight, a map can be implemented using a
#2D array. Let's write a Map class (following a similar pattern to Stack
# and Queue) that implements a map using only arrays.

#Remember, a map stores information in key-value pairs, where the keys
#are always unique. When implemented with arrays, a map might look
#something like this: my_map = [[k1, v1], [k2, v2], [k3, v2], ...].

#Our Map class should have the following instance methods:
#set(key, value), get(key), delete(key), show. Note that the set method
#can be used to either create a new key-value pair or update the value
#for a pre-existing key. It's up to you to check whether a key currently exists!

#As always, test your code thoroughly to make sure all properties of maps are enforced.

class Map
  attr_accessor :a_map

  def initialize(array)
    @a_map = array

  end

  def set(key, value)
    sub_arr = []
    @a_map.each do |subs|
      p subs
      if subs[0] == key
        subs[0] = value
      else
        p sub_arr = key,value
      end
    end
    @a_map << sub_arr
  end

  def get(key)

  end

  def delete(key)

  end

  def show

  end

end
a = Map.new([1,2,3,4])
p a
p a.set(1,2)
