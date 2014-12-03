class ChangeUserColumns < ActiveRecord::Migration
  def change
  	remove_column :users, :message_id
  	remove_column :users, :message
  end
end
