# MySQL 5.6 default setting can not include columns larger than 767 bytes in index.
#   Mysql2::Error: Index column size too large. The maximum column size is 767 bytes.: CREATE INDEX `index_xxx_yyy_id`
#
# It is necessary to satisfy the following conditions
#   - innodb_file_per_table = 1
#   - innodb_file_format = Barracuda
#   - innodb_large_prefix = 1
#   - innodb_default_row_format = DYNAMIC or COMPACT
#
# However, the innodb_default_row_format option does not exist before MySQL 5.7.8.
# Prepend AbstractMysqlAdapter to avoid specifying option in create table migration script.
#
# ```ruby
#   create_table :table_name, options: 'ROW_FORMAT=DYNAMIC' do |t|
#     ## column A
#   end
# ```
#
# see: http://qiita.com/xend/items/4d5c3333cbae53888f37
#
ActiveSupport.on_load :active_record do
  module AbstractMysqlAdapterWithRowFormat
    def create_table(table_name, **options)
      table_options = options.merge(:options => 'ROW_FORMAT=DYNAMIC')
      super(table_name, table_options)
    end
  end
  ActiveRecord::ConnectionAdapters::AbstractMysqlAdapter.prepend(AbstractMysqlAdapterWithRowFormat)
end
