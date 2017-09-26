# frozen_string_literal: true

require "#{Rails.root}/app/services/postal_codes_task_service"
namespace :postal_codes do
  desc "Generate master data of postal_codes table"
  task :generate do
    service = PostalCodesTaskService.new
    service.execute
  end
end
