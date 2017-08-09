class TopController < ApplicationController

  def index
    @themes = Theme.all
  end
end
