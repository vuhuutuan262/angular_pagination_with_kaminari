# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "active_model_serializers"
gem "activerecord-import"
gem "bower-rails", "~> 0.11.0"
gem "carrierwave"
gem "coffee-rails", "~> 4.2"
gem "config"
gem "devise"
gem "doorkeeper"
gem "dotenv-rails"
gem "jbuilder", "~> 2.5"
gem "kaminari"
gem "mini_magick"
gem "mysql2"
gem "puma", "~> 3.7"
gem "rails", "5.1.3"
gem "ransack", github: "activerecord-hackery/ransack"
gem "sass-rails", "~> 5.0"
gem "slim-rails"
gem "tzinfo"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "uglifier", ">= 1.3.0"
gem "mojinizer"
gem "aasm"

group :development, :test do
  gem "brakeman", require: false
  gem "bundler-audit"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 2.13"
  gem "factory_girl_rails"
  gem "faker"
  gem "pry-rails"
  gem "reek"
  gem "rspec"
  gem "rspec-collection_matchers"
  gem "rspec-rails"
  gem "rubocop", "~> 0.49.1", require: false
  gem "rubocop-checkstyle_formatter", require: false
  gem "selenium-webdriver"
end

group :development do
  gem "letter_opener"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring", '~> 2.0', '>= 2.0.2'
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "shoulda-matchers"
  gem "simplecov", require: false
  gem "simplecov-json"
  gem "simplecov-rcov", require: false
end
