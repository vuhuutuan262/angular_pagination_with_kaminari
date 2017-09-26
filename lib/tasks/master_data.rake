# frozen_string_literal: true

namespace :master_data do
  desc "Import master data from CSV files located at db/seeds folder"
  task import_for_all_master_tables: :environment do
    MasterDataImporterService.new.excute
  end
end
