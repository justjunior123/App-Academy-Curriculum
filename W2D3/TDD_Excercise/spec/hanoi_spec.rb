require "hanoi"

RSpec.describe "TowersOfHanoi" do
  
  describe "#initialize" do
    t = [[3, 2, 1], [], []]
    game = TowersOfHanoi.new
    it "should initialize the correct length" do 
      expect(game.towers.length).to eq(3)
    end
    
    it "should have its first subarray as [3, 2, 1]" do
      expect(game.towers[0]).to eq([3,2,1])
    end 
    
    it "checks that the last two arrays are empty initially" do 
      expect(game.towers[1].empty?).to_be(true)
      expect(game.towers[2].empty?).to_be(true)
    end
    
  end
  
  describe "#move" do
    game = TowersOfHanoi.new
    it "Removes a disk from the correct tower" do 
      game.move(0,2)
      expect(game.towers[0]).to eq([3,2])
    end
    
    it "Places disk on correct tower" do 
      game.move(0,2)
      expect(game.towers[2]).to eq([1])
    end 
     
    it "Doesn't modify any other towers" do 
      game.move(0,2)
      expect(game.towers[1]).to eq([])
    end 
  end
  
  describe "#valid_move?" do 
    game = TowersOfHanoi.new
  
    it "Checks that the starting tower is not empty" do 
      game.move(0,2)
      expect{game.move(1,2)}.to_raise("That tower is empty!")
    end
  
    it "Checks that the value is not greater than the last value on the ending tower" do 
      game.move(0,2)
      expect{game.move(0,2)}.to_raise("The disk is too big to move there!")
    end
  end
  
  describe "#won?" do 
    game = TowersOfHanoi.new
  
    it "returns true when the game is over/won" do 
      moves = [[0,2], [0, 1], [2, 1], [0, 2], [1,0], [1, 2], [0, 2]]
      moves.each do |move|
        game.move(move[0], move[1])
      end
      expect(game.won?).to_be(true)
    end 
  
    it "returns false when the game hasn't been won yet" do
      game.move(0, 2)
      expect(game.won?).to_be(false)
    end
  end 
  
end



