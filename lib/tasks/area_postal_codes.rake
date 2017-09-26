# frozen_string_literal: true

require "#{Rails.root}/app/services/area_postal_codes_task_service"
namespace :area_postal_codes do
  desc "Generate master data of area_postal_codes table"
  task :generate do
    service = AreaPostalCodesTaskService.new
    service.execute
  end
end
