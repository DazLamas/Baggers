class AddColumnMessageIdToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :message_id, :integer
  end
end
