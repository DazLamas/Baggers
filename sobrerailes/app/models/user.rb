
class User < ActiveRecord::Base
	has_many :messages

	validates :lat, presence: true
	validates :long, presence: true
end
