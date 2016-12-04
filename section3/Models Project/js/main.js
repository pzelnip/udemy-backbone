

var Vehicle = Backbone.Model.extend({
	urlRoot: "/api/vehicles",
	idAttribute: "registrationNumber",

	initialize: function() {
		console.log("initializing a vehicle");
	},

	start: function() {
		console.log("Vehicle started");
	},

	validate: function(attrs) {
		if (! attrs.registrationNumber) {
			return "Must supply registration number";
		}
	}
});

var Car = Vehicle.extend({
	initialize: function() {
		console.log("initializing a car");
	},
	start: function() {
		console.log("Car with registration number " + this.get('registrationNumber') + " started.");
	}
});

var car = new Car({registrationNumber: 'XLI887', color: 'Blue'});
car.unset('registrationNumber');
if (!car.isValid()) {
	console.log(car.validationError);
}
car.set('registrationNumber', 'XLI887');
if (!car.isValid()) {
	console.log(car.validationError);
}

car.start();