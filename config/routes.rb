# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :auth do
    devise_for :users
  end

  namespace :api, format: "json" do
    namespace :v1 do
      use_doorkeeper do
        controllers tokens: "sessions"
      end

      resources :samples, only: [:index]
      resources :samples_serializer, only: [:index, :show]
      resource :user, only: [:update, :show]
      resource :partner, only: [:update, :show]

      namespace :password_change do
        resource :user, only: :update
      end

      namespace :registration do
        resources :users, only: :create
        resources :partners, only: :create
      end

      namespace :password_reset do
        resource :user, only: [:create, :update]
      end

      namespace :mail_change do
        resource :user, only: :update
        resource :partner, only: :update
      end

      namespace :partners do
        resources :user_requests, only: [:index, :update]
      end

      namespace :supports do
        post "expired_token", to: "token#check_expired_token"
      end
    end
  end

  scope module: :no_auth do
    resource :health_check, only: %i( show )
  end

  root to: "entries#index"
  get "*path", to: "entries#index"
end
