# frozen_string_literal: true

module APIError
  class Base < StandardError
    include ActiveModel::Serialization

    attr_reader :code, :message

    def initialize
      @error = self.class.name.gsub("::", ".").underscore
      error_type = I18n.t @error
      error_type.each do |attr, value|
        instance_variable_set("@#{attr}".to_sym, value)
      end
    end
  end

  # TODO: This is sample class, to be removed
  module SignIn
    class InvalidInfo < APIError::Base
    end

    class NoneActivate < APIError::Base
    end
  end

  module SignOut
    class TokenInvalid < APIError::Base
    end
  end

  module PasswordReset
    class NonExistingEmail < APIError::Base
    end

    class NonMatchingEmail < APIError::Base
    end
  end

  module AuthInfoChange
    class InvalidAuthInfo < APIError::Base
    end
  end

  module UserRequest
    class InvalidState < APIError::Base
    end
  end
end
