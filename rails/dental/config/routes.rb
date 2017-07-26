Rails.application.routes.draw do
  
  get 'authentication/authenticate'

  resources :questions
  post 'schedules/search', to: 'schedules#index'
  resources :schedules
  resources :dentists
  resources :plans
  resources :anamnesis_models
  resources :patient_groups
  resources :patients do
    resource :anamneses	
    resources :treatments
    get 'alerts', to:'alerts#index'
  end  
  
  resources :procedures
  resources :procedure_categories
  resources :chairs

   post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
