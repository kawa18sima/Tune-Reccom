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
    @musics = Music.all
    render partial: "index"
  end
end
