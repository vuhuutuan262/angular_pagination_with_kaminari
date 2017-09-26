require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EstWeb
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.time_zone = "Asia/Tokyo"
    I18n.default_locale = :ja
    config.eager_load_paths += %W(#{config.root}/lib #{config.root}/app/services
        #{config.root}/app/validators/)
    config.i18n.load_path += Dir["#{Rails.root.to_s}/config/locales/**/*.{rb,yml}"]
    config.action_mailer.default_url_options = {host: Settings.mailer.host_name}
    config.action_mailer.default_options = {from: Settings.mailer.from_address}
  end
end
