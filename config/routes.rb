Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :charges
  root 'products#index'
  # resources :products, only: [:show]
  
  resources :api do
    collection do
      get 'index'
    end
  end
end
