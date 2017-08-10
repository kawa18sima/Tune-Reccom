Rails.application.routes.draw do

  root "top#index"
  resources :themes
  resources :musics do
    collection do
      get :recommends
      get :search
      get :add
    end
  end
end
