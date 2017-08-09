Rails.application.routes.draw do

  root "top#index"
  resources :themes
  resources :musics
end
