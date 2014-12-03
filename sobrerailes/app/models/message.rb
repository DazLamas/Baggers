class Message < ActiveRecord::Base
	belongs_to :user
	validates :text, presence: true
	validates :text, length: {maximun: 30, minimum: 3}
end
