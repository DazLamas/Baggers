class AddColumnToLocation < ActiveRecord::Migration
  def change
  	add_column :locations, :name, :string
  end
end
