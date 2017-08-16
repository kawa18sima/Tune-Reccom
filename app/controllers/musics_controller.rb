class MusicsController < ApplicationController

  def index
    theme = Theme.find_by(id: params[:theme_id])
    if theme
      @musics = theme.musics
    else
      @musics = Music.all
    end
    render partial: "index"
  end

  def recommends
    id = params[:music_id].to_i
    puts id
    # search_path = Dir.glob(Rails.root.join('public', 'search.py'))
    # Open3.capture3("python3 #{search_path} #{id}")
    # num_path = "./public/search.txt"
    # num = []
    # File.open(num_path, "r") do |f|
    #   f.each_line do |line|
    #     num << line.chomp.to_i
    #   end
    # end
    num = Search.sea(id)

    @musics = []
    num.each do |i|
      if(i !=0)
        a = Music.find(i)
        @musics << a
      end
    end
    render partial: "index"
  end

  def search
    @random = Random.new
    @musics = Music.where('title LIKE(?)', "%#{params[:keyword]}%")
    render partial: "tbody"
  end

  def add
    music = Music.find(params[:music_id])
    music.theme_id = Theme.first.id
    music.save
    render json: {status: "ok"}
  end
end
