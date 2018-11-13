
class Card
  attr_reader :suit, :key, :value
  # HASH TABLE 
  # KEYS => VALUES
  KEYS_to_VALUES = {"ace" => 1, "two"=> 2, "three"=> 3, "four"=> 4, "five"=> 5, 
           "six"=> 6, "seven"=> 7, "eight"=> 8,
           "nine"=> 9, "ten"=> 10, "jack"=> 11, "queen"=> 12, "king"=> 13}
  SUITS = [:spades, :hearts, :clubs, :diamonds]
  # def initialize
    # it should take a suit and a value and assign instance variables
    # @key, @value, @suit
    
    def initialize(suit, key)
      raise "That is not a valid suit" unless SUITS.include?(suit)
      raise "That is not a valid value for a card" unless KEYS_to_VALUES.keys.include?(key)
      @suit = suit
      @key = key 
      @value = KEYS_to_VALUES[key]
    end     
    
    # def face_up {  self.to_s  }
    # def face_down {  "hidden card"  }
    
    # def to_s {  "#{key} of #{suit}" }
    
    
end 