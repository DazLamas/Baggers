class ChangeMessagesTable < ActiveRecord::Migration
	def change
	  	remove_column :messages, :user_name
	  	rename_column :messages, :message, :text
 	end
end
