index = 17
search_path = Dir.glob(Rails.root.join('public', 'search.py'))
system("python3 #{search_path} #{index}")
num_path = "search.txt"
num = []
File.open(num_path, "r") do |f|
  f.each_line do |line|
    num << line.chomp.to_i
  end
end
