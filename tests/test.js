const moment = require('moment-timezone');
const {Scheduler} = require("../dist/index");
const scheduler = new Scheduler();

const schedule1 = {
    from: '2019-01-10',
    to: '2019-01-17',
    duration: 60,
    interval: 60,
    timezone: "America/Los_Angeles",
    schedule: {
        weekdays: {
            from: '08:00', to: '17:00',
            unavailability: [
                { from: '12:00', to: '13:00' }
            ]
        },
        unavailability: [
            // two different types of unavailability structure
            { from: '2019-01-20 00:00', to: '2019-01-27 00:00' },
            { date: '2019-01-15', from: '14:00', to: '15:00' }
        ],
        allocated: [
          { from: '2019-02-01 13:00' , duration: 60 },
          { from: '2019-02-01 14:00' , duration: 60 }
        ]
    }
};
const schedule2 = {
    from: '2019-01-10',
    to: '2019-01-17',
    duration: 60,
    interval: 60,
    timezone: "CET",
    schedule: {
        weekdays: {
            from: '07:00', to: '18:00',
            unavailability: [
                { from: '13:00', to: '14:00' }
            ]
        },
        unavailability: [
            // two different types of unavailability structure
            { from: '2019-01-15 17:00', to: '2019-01-15 18:00' },
            { date: '2019-01-16', from: '17:00', to: '18:00' }
        ],
        allocated: [
          { from: '2019-02-01 13:00' , duration: 60 },
          { from: '2019-02-01 14:00' , duration: 60 }
        ]
    }
};

// console.log(scheduler.getAvailability(schedule2));
let c = scheduler.getIntersectionWithTimezone(schedule1, schedule2);
console.log(c);

// const availability2 = scheduler.getIntersection({
//     from: '2019-01-12',
//     to: '2019-01-15',
//     duration: 60,
//     interval: 60,
//     timezone: "America/Los_Angeles",
//     schedules: [
//         // The doctor's schedule
//         {
//             weekdays: {
//                 from: '09:00', to: '17:00',
//                 unavailability: [
//                     { from: '12:00', to: '13:00' }
//                 ]
//             },
//             unavailability: [
//                 { from: '2019-01-15 00:00', to: '2019-01-22 00:00' }
//             ],
//             allocated: [
//               { from: '2019-01-12 13:00' , duration: 60 },
//               { from: '2019-01-12 14:00' , duration: 60 }
//             ]
//         },

//         // The room's schedule
//         {
//             weekdays: {
//                 from: '08:00', to: '20:00',
//             },
//             unavailability: [
//                 { from: '2019-01-14 15:00', to: '2019-01-14 17:00' }
//             ]
//         }
//     ]
// });

// console.log(availability2);

// let b = moment('2019-01-20 14:00').tz("America/Los_Angeles").format();
// console.log(b);
// console.log(moment.tz.zone("America/Los_Angeles"));  //checking



// console.log(availability);

// let b = moment('2019-01-20T13:00:00').tz("America/Los_Angeles");
// console.log("PST " + b.format());
// let c = b.tz('EST');
// console.log("EST " + c.format());
// console.log(moment.tz.zone("America/Los_Angeles4"));  //checking

