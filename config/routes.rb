Rails.application.routes.draw do

  root 'stores#index'
  resources :items
end
