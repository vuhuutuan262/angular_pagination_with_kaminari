# frozen_string_literal: true

module NoAuth
  class HealthChecksController < NoAuthController
    def show
      render plain: "OK"
    end
  end
end
