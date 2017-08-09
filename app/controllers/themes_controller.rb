class ThemesController < ApplicationController

  def create
    name = params[:name]
    Theme.create(name: name)
    render json: {name: name}
  end
end
