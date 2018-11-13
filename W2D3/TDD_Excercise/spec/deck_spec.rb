require 'deck'

RSpec.describe "Deck" do
  
  describe "#initialize" do 
    deck = Deck.new
    it "Has 52 cards" do 
      expect(deck.cards.length).to eq(52)
    end 
    
    it "Has 52 unique cards" do 
      expect(deck.cards.uniq.length).to eq(52)
    end     
  end 
  
  describe "#random_card" do 
    deck = Deck.new
    it "gives you a random card!" do 
      expect(deck.random_card).to be_a(Card)
    end
    
    it "Removes the random card from the deck" do 
      card = deck.random_card
      expect(deck.cards).to_not include(card)
    end
    
    it "Doesn't give you the same card twice" do 
      card_one = deck.random_card
      card_two = deck.random_card
      expect(card_one).to_not eq(card_two)
    end  
  
  end 
  
end