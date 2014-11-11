class User < ActiveRecord::Base

	has_many :messages

	validates :user_name, presence: true

end
