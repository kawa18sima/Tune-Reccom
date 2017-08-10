Rails.application.routes.draw do

  root "top#index"
  resources :themes
  resources :musics do
    collection do
      get :recommends
      get :search
    end
  end
end
