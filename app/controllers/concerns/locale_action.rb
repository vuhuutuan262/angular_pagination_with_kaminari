# frozen_string_literal: true

module LocaleAction
  extend ActiveSupport::Concern
  HEADER_KEY = "HTTP_X_LOCALE"

  def set_locale
    I18n.locale = if I18n.available_locales.include? request.headers[HEADER_KEY].to_s.to_sym
                    request.headers[HEADER_KEY]
                  else
                    I18n.default_locale
                  end
  end
end
