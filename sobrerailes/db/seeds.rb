
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(
	user_name: 'Golfred', 
	lat: 40.11,
	long: -3
	)

user2 = User.create(
	user_name: 'Hälh', 
	lat: 40.1,
	long: -3.01
	)

	Message.create(
	user_id: user1.id,
	user_name: user1.user_name,
	message: 'Lorem ipsum dolor sit amet, 
	consectetur adipisicing elit. Alias minus, 
	tempora cum expedita cumque'
	)

	Message.create(
	user_id: user2.id,
	user_name: user2.user_name,
	message: 'Lorem ipsum dolor sit amet, 
	consectetur adipisicing elit. Alias minus, 
	tempora cum expedita cumque'
	)

	Location.create(
	latitude: 40.1133,
	longitude: -3.1113
	)

	Location.create(
	latitude: 40.123,
	longitude: -3.1
	)	

