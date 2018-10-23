json.array! (@gifts) do |gift|
  json.(gift,:title,:description)
end
