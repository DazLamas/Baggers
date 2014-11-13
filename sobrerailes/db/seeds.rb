
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(
	user_name: 'Golfred', 
	message_id: 1,
	message: 'Lorem ipsum dolor sit amet, 
	consectetur adipisicing elit. Alias minus, 
	tempora cum expedita cumque',
	lat: 40.41,
	long: -3.70
	)

user2 = User.create(
	user_name: 'Hälh', 
	message_id: 2,
	message: 'Lorem ipsum dolor sit amet, 
	consectetur adipisicing elit. Alias minus, 
	tempora cum expedita cumque',
	lat: 40.4211,
	long: -3.7011
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
	name: "Bar Paco",
	latitude: 40.22133,
	longitude: -3.1113
	)

	Location.create(
	name: "Manolo´s pub",
	latitude: 40.323,
	longitude: -3.1
	)	

	Location.create(
	name: "Bar La Cebada",
	latitude: 40.5133,
	longitude: -3.1713
	)
	