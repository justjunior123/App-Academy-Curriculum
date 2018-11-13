require "card"

RSpec.describe "Card" do
    
  describe "#initialize" do  
    king_spades = Card.new(:spades,"king")
    seven_hearts = Card.new(:hearts,"seven")
    
    it "Raises an error if suit is invalid" do 
      expect{Card.new(:circle,"one")}.to raise_error("That is not a valid suit")
    end 
    
    it "Raises an error if the key is invalid" do 
      expect{Card.new(:spades,"seventeen")}.to raise_error("That is not a valid value for a card")
    end 
    
    it "Stores the suit in an instance variable" do 
      expect(king_spades.suit).to eq(:spades)
      expect(seven_hearts.suit).to eq(:hearts)
    end
    
    it "stores the key in an instance variable" do 
      expect(king_spades.key).to eq("king")
      expect(seven_hearts.key).to eq("seven")
    end
    
    it "has a 'value' instance variable that always returns an integer" do 
      expect(king_spades.value).to eq(13)
      expect(seven_hearts.value).to eq(7)
    end
  end 
  
end