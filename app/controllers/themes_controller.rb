class ThemesController < ApplicationController

  def create
    name = params[:name]
    Theme.create(name: name)
    render json: {name: name}
  end
  def destroy
    Theme.find(params[:id]).destroy
    render json: {theme_id: params[:id]}
  end
end
