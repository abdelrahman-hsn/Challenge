Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :products_promotions
      resources :promotions
      resources :products
      resources :departments
      get 'active', to: 'products#active'
      get 'promocode', to: 'products#promocode'
    end
   end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
