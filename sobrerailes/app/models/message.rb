class Message < ActiveRecord::Base
	belongs_to :user

	validates :user_name, presence: true
	validates :user_name, length: {maximun: 30, minimum: 2}
	validates :message, presence: true
	validates :message, length: {maximun: 30, minimum: 3}

end
