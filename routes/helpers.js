function randomLocation() {
  //48.895, -123.901
  //27.783968, -69.672700
  return {
    lat: (27.8 + Math.random() * 21),
    lon: (-123.9 + Math.random() * 54.3),
    accuracy_m: 10
  };
}


function randomBrakeForce() {
  return 0.3 + Math.random() * 0.4;
}


function randomAccelForce() {
  return 0.3 + Math.random() * 0.3;
}


function randomSpeed() {
  return 70 + Math.random() * 20;
}


exports.generateEvent = function(user_id, eventType, location) {
  var event = {
    user: {
      id: user_id
    },
    location: location || randomLocation(),
    created_at: new Date().valueOf(),
    vehicle: {
      id: 'C_40ed9887baf98ffd',
      year: 2012,
      make: 'Accura',
      model: 'MDX',
      display_name: 'Speedster',
      color: '#3782e7'
    }
  };

  if(eventType == 'notification:hard_brake') {
    event.g_force = randomBrakeForce();
    event.type = 'notification:hard_brake';
  } else if(eventType == 'notification:hard_accel') {
    event.g_force = randomAccelForce();
    event.type = 'notification:hard_accel';
  } else if(eventType == 'notification:speeding') {
    event.speed_mph = randomSpeed();
    event.type = 'notification:speeding';
  } else if(eventType == 'trip:finished') {
    event.type = 'trip:finished';
    event.distance_mi = 3.7;
    event.duration_min = 19;
    event.start_location = 'Haight & Ashbury, San Francisco, CA';
    event.end_location = '4th & Townsend, San Francisco, CA';
    event.average_mpg = 23.6;
  } else if(eventType == 'ignition:on') {
    event.type = 'ignition:on';
  } else if(eventType == 'ignition:off') {
    event.type = 'ignition:off';
  } else if(eventType == 'mil:on') {
    event.type = 'mil:on';
    event.dtcs = [
      {
        'code': 'P0442',
        'description': 'Small fuel vapor leak in EVAP system',
        'start': 1383448450301
      }
    ];
  } else if(eventType == 'mil:off') {
    event.type = 'mil:off';
    event.dtcs = [
      {
        'code': 'P0442',
        'description': 'Small fuel vapor leak in EVAP system',
        'start': 1383448450301
      }
    ];
  }

  return event;
};


exports.generateTrip = function() {
  return [
    {
      type: 'ignition:on',
      delay: 3000,
      location: {
        lat: 37.77001,
        lon: -122.44694,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:hard_accel',
      delay: 2000,
      location: {
        lat: 37.77187,
        lon: -122.44722,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:hard_brake',
      delay: 5000,
      location: {
        lat: 37.77272,
        lon: -122.44074,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:hard_brake',
      delay: 5000,
      location: {
        lat: 37.77310,
        lon: -122.43742,
        accuracy_m: 10
      }
    },
    {
      type: 'mil:on',
      delay: 8000,
      location: {
        lat: 37.77374,
        lon: -122.43246,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:hard_accel',
      delay: 6000,
      location: {
        lat: 37.77210,
        lon: -122.42359,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:speeding',
      delay: 5000,
      location: {
        lat: 37.76966,
        lon: -122.41737,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:hard_brake',
      delay: 5000,
      location: {
        lat: 37.76926,
        lon: -122.41044,
        accuracy_m: 10
      }
    },
    {
      type: 'mil:off',
      delay: 5000,
      location: {
        lat: 37.77393,
        lon: -122.40639,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:speeding',
      delay: 5000,
      location: {
        lat: 37.77644,
        lon: -122.40417,
        accuracy_m: 10
      }
    },
    {
      type: 'notification:hard_brake',
      delay: 5000,
      location: {
        lat: 37.77952,
        lon: -122.39866,
        accuracy_m: 10
      }
    },
    {
      type: 'ignition:off',
      delay: 2000,
      location: {
        lat: 37.77724,
        lon: -122.39512,
        accuracy_m: 10
      }
    },
    {
      type: 'trip:finished',
      delay: 2000,
      location: {
        lat: 37.77724,
        lon: -122.39512,
        accuracy_m: 10
      }
    },
  ]
};
