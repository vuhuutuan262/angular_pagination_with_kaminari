# frozen_string_literal: true

class NoAuthController < ActionController::Base
  protect_from_forgery with: :exception
end
