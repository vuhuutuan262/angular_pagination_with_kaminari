# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include LocaleAction
  protect_from_forgery with: :exception
  before_action :set_locale
end
