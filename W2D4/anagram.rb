

def first_anagram?(str1, str2)  
  pemutated = str1.chars.permutation.to_a
  pemutated.map! {|word| word.join("")}
  return true if pemutated.include?(str2)
  false
end

first_anagram?("elvis", "lives")
