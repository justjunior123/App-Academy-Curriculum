json.array! (@parties) do |party|
  json.(party, :name, :location)
end
