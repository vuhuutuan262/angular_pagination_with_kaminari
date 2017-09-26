# frozen_string_literal: true

module ApplicationHelper
  def webpack_js_path path
    return "http://0.0.0.0:8080/#{path}" if Rails.env.development?

    host = Rails.application.config.action_controller.asset_host
    manifest = Rails.application.config.assets.webpack_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "#{host}/#{path}"
  end
end
