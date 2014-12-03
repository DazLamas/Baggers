# encoding: UTF-8 
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(
			user_name: 'Golfred',
			lat: 40.41,
			long: -3.70
			)

user2 = User.create(
			user_name: 'Hälh',
			lat: 40.4211,
			long: -3.7011
			)

message1=Message.create(
			user_id: user1.id,
			text: 'Lorem ipsum dolor sit amet, 
			consectetur adipisicing elit. Alias minus, 
			tempora cum expedita cumque'
			)

message2=Message.create(
			user_id: user2.id,
			text: 'Lorem ipsum dolor sit amet, 
			consectetur adipisicing elit. Alias minus, 
			tempora cum expedita cumque'
			)

Location.create(
	name: "Bar Paco",
	latitude: 40.42133,
	longitude: -3.7113
	)

Location.create(
	name: "Manolo´s pub",
	latitude: 40.423,
	longitude: -3.73
	)	

Location.create(
	name: "Bar La Cebada",
	latitude: 40.4333,
	longitude: -3.7213
	)

Location.create(
	name: "Tablao Flamenco Fernando",
	latitude: 40.39,
	longitude: -3.7113
	)

Location.create(
	name: "Pulperia Ivan",
	latitude: 40.432,
	longitude: -3.71
	)	

Location.create(
	name: "Bar Javi Bilbao",
	latitude: 40.487,
	longitude: -3.71713
	)
Location.create(
	name: "La Biblioteca",
	latitude: 40.38,
	longitude: -3.693
	)

Location.create(
	name: "Garaje Okupa",
	latitude: 40.396,
	longitude: -3.69
	)	

Location.create(
	name: "Plaza Kalimotxo",
	latitude: 40.415,
	longitude: -3.692
	)
