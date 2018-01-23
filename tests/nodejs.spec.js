//var { DateTime, TimeSpan } = 
var DateTime = require("../distrib/datetime-object.min.js");

//import { DateTime, TimeSpan } from "../sources/datetime-object-nodejs.js";
//var { TimeSpan } = require("./sources/TimeSpan.js");

// var DateTime = DateTimeModule.DateTime;
// var TimeSpan = DateTimeModule.TimeSpan;

var dt2 = new DateTime();


console.log(dt2.toString("DD/MM/YYYY HH:mm:ss"));
dt2 = dt2.addDays(5);
console.log(dt2.toString("DD/MM/YYYY"));

var mnt = dt2.toMoment();

var dt3 = DateTime.parse("15/01/2018 00:00:00", "DD/MM/YYYY HH:mm:ss");
console.log(dt3.toString("DD/MM/YYYY"));

var ts = dt3.diffAsTimeSpan(dt2);
console.log(ts.toString("HH:mm:ss"));
console.log(ts.totalSeconds());


var dt4 = DateTime.now();
console.log(dt4.toString("HH:mm:ss"));

var dt5 = DateTime.today();
console.log(dt5.toString("DD/MM/YY HH:mm:ss"));

var dt6 = DateTime.now();
console.log(dt6.toString("DD/MM/YY HH:mm:ss"));
console.log(dt6.ceil(2, "hours").toString("DD/MM/YY HH:mm:ss"));
console.log(dt6.toString("DD/MM/YY HH:mm:ss"));
console.log(dt6.toDate());

var dt7 = new DateTime(2018, 1, 12, 5, 12, 33);
console.log(dt7.toString("DD/MM/YY HH:mm:ss"));


var dt8 = DateTime.today();
dt8.addDays(1).addDays(1);
console.log(dt8.toString("DD/MM/YY"));

var dt9 = DateTime.today();
dt9.addDays(1).addYears(1).addHours(1).addMinutes(1).addSeconds(1);
console.log(dt9.toString("DD/MM/YY HH:mm:ss"));

console.log(dt9.isAfter(dt8));
console.log(dt9.isBefore(dt8));

console.log(dt9.isBefore(dt9));
console.log(dt9.isSame(dt9));

var dt10 = DateTime.today();
var dt11 = DateTime.today();

console.log(dt11.isSame(dt10));

var dt12 = dt10.lastDayOfMonth();
console.log(dt12.toString("DD/MM/YY"));

var dt13 = dt10.firstDayOfMonth();
console.log(dt13.toString("DD/MM/YY"));

var dt14 = DateTime.today().month(2);
console.log(dt14.toString("DD/MM/YY"));

var dt15 = DateTime.now();
console.log(dt15.day(), dt15.month(), dt15.year(), dt15.hours(), dt15.minutes(), dt15.seconds(), dt15.milliSeconds());


var dt16 = DateTime.now();
console.log(dt16.nearestMonday(-1).toString("ddd DD/MM/YY"));
console.log(dt16.nearestFriday(-1).toString("ddd DD/MM/YY"));
console.log(dt16.nearestSaturday(-1).toString("ddd DD/MM/YY"));
console.log(dt16.nearestTuesday(-1).toString("ddd DD/MM/YY"));
console.log("nearestMonday prev", dt16.nearestMonday(-1).toString("ddd DD/MM/YY"));
console.log("nearestMonday next ", dt16.nearestMonday(1).toString("ddd DD/MM/YY"));
console.log("nearestTuesday prev", dt16.nearestTuesday(-1).toString("ddd DD/MM/YY"));
console.log("nearestTuesday next ", dt16.nearestTuesday(1).toString("ddd DD/MM/YY"));
console.log("nearestFriday prev", dt16.nearestFriday(-1).toString("ddd DD/MM/YY"));
console.log("nearestFriday next ", dt16.nearestFriday(1).toString("ddd DD/MM/YY"));
console.log("nearestSunday next ", dt16.nearestSunday(1).toString("ddd DD/MM/YY"));
console.log("nearestSunday prev ", dt16.nearestSunday(-1).toString("ddd DD/MM/YY"));


var dt17 = DateTime.today().addDays(1);
var dt18 = DateTime.today();
var ts = dt18.diff(dt17);

console.log(ts);

var dt19 = DateTime.fromUnixEpoch(0);
console.log(dt19.toString("DD/MM/YYYY HH:mm"));

var dt20 = DateTime.today();
console.log(dt20.toJSON());

var dt21 = DateTime.today();
console.log(dt21.toObject());

var dt22 = DateTime.today();
var dt23 = DateTime.today().addDays(1);
var dt24 = DateTime.now();
console.log(dt22.isBetween(dt22, dt22));
console.log(dt22.isBetween(dt22, dt22, "(]"));
console.log(dt22.isBetween(dt22, dt22, "(]"));
console.log(dt22.toString("DD/MM/YYYY HH:mm"),
  dt23.toString("DD/MM/YYYY HH:mm"),
  dt24.toString("DD/MM/YYYY HH:mm"),
  dt24.isBetween(dt22, dt23, "[]", null));

console.log(dt22.toString("DD/MM/YYYY HH:mm"),
  dt23.toString("DD/MM/YYYY HH:mm"),
  dt24.toString("DD/MM/YYYY HH:mm"),
  dt22.isBefore(dt23), dt23.isBefore(dt24));

console.log(dt22.isBetween(dt22, dt23, "[]"));
console.log(dt24.isBetween(dt22, dt23, "]["));
console.log(dt24.isBetween(dt22, dt24, "[]"));
console.log(dt22.isBetween(dt22, dt23, "]]"));
console.log(dt22.isBetween(dt22, dt22, "]["));


console.log(DateTime.parse("2017-10-30T18:30:25").toString("DD/MM/YYYY HH:mm:ss"));

DateTime.locale("fr");
console.log(DateTime.today().toString("dddd"));

console.log(dt24.toString("dddd"));

console.log(1600, DateTime.daysInMonth(2, 1600));
console.log(1684, DateTime.daysInMonth(2, 1684));
console.log(1896, DateTime.daysInMonth(2, 1896));
console.log(2104, DateTime.daysInMonth(2, 2104));
console.log(2100, DateTime.daysInMonth(2, 2100));
console.log(2204, DateTime.daysInMonth(2, 2204));
console.log(2404, DateTime.daysInMonth(2, 2404));

//console.log(DateTime.tryParse("2017-10-30T18:30:25").toString("DD/MM/YYYY"));

console.log(DateTime.parse("2017-10-30T18:30:25").toString());


var dt26 = DateTime.today();
var dt27 = dt26.addMinutes(5);
console.log(dt26.toString("mm"), dt27.toString("mm"));

var dt28 = DateTime.parse("05/08/1050 08:00:00", "DD/MM/YYYY HH:mm:ss");
console.log(dt28.year());

var dt29 = new Date(1050, 11, 5);
console.log(dt29);

var dt30 = dt26.add(1, 2, 3, 4, 5, 6);
console.log(dt26.toString("DD/MM/YYYY HH:mm"), dt30.toString("DD/MM/YYYY HH:mm"));

console.log(dt30.toString());


var dt31 = DateTime.fromObject({ y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123 });
console.log(dt31.toString());

DateTime.defaultOutput = "DD/MM/YYYY HH:mm:ss";
console.log(dt31.toString());

var dt32 = new DateTime();
var dt33 = dt32.addDays(1);

console.log(dt32.toString(), dt33.toString());

var di = dt33.diffAsTimeSpan(dt32);
console.log(di.totalMilliSeconds());
console.log(di.totalSeconds());
console.log(di.totalMinutes());
console.log(di.totalHours());
console.log(di.totalDays());
console.log(di.humanize());
console.log(di.toString("HH:mm:ss"));

//var dt34 = dt32.addHours(12);
var dt34 = dt32.addDays(0.5);
di = dt34.diffAsTimeSpan(dt32);

console.log(dt32.toString(), dt34.toString());
console.log(di.totalMilliSeconds());
console.log(di.totalSeconds());
console.log(di.totalMinutes());
console.log(di.totalHours());
console.log(di.totalDays());
console.log("s", di.toDuration().asSeconds());
console.log(di.humanize());
console.log(di.toString("HH:mm:ss"));

//console.log(moment.locale("fr"));

DateTime.SetupLocale("fr", {
  months: [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ],
  monthsShort: ["J", "F", "M", "A", "m", "j", "J", "A", "S", "O", "N", "D"]
});

DateTime.SetupLocale("en");

//console.log(moment.locale("fr"));

console.log("dt26", dt26.toString("MMM"), dt26.toString("MMMM"));
console.log(new DateTime().toString("LLLL"));

DateTime.SetupLocale("ru");
console.log(new DateTime().toString("LLLL"));

DateTime.SetupLocale("fr");

//moment.locale('de');
// Use moment now that the locale has been properly set.
// console.log(moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
// console.log(moment().format('LLLL', "fr"));
console.log(new DateTime().locale());


now = DateTime.now();
console.log(now.toString());
var timestamp = now.toUnixEpoch();
console.log(timestamp);

var now2 = DateTime.fromUnixEpoch(timestamp);
console.log(now2.toString());

var dt40 = DateTime.now();
var dt41 = dt40.lastDayOfMonth();
console.log("dt40", dt40.toString(), dt41.toString());

dt41 = dt40.firstDayOfMonth();
console.log(dt40.toString(), dt41.toString());

if (DateTime.parse("30/02/2018", "DD/MM/YYYY") != null) {

} else {
  console.log("fail");
}

var dt = DateTime.parse("28/02/2018", "DD/MM/YYYY");
if (dt) {
  console.log(dt.toString("DD/MM/YYYY"));
}

var dt50 = DateTime.now();
var dt51 = dt50.addDays(1).addHours(5).addMinutes(10).addSeconds(2);

var diff = dt51.diffAsTimeSpan(dt50);
console.log(diff.toString("D HH:mm:ss"), diff.totalHours());


var dt52 = dt51.addMonths(4).addYears(2);
diff = dt52.diffAsTimeSpan(dt51);
console.log(dt52.toString(), dt51.toString(), diff.toString("y MM D HH:mm:ss"), diff.totalHours());

console.log(diff.humanize(true));
debugger;
var dt53 = DateTime.parse("2013-02-04T18:35:24+02:00", null, false, true);
console.log("dt53", dt53.toString());

var zone = DateTime.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', true);
console.log(zone.utcOffset());

var dt54 = DateTime.parse("2013 01 01 +02:00", 'YYYY MM DD ZZ', false, false);
console.log(dt54.toString(), dt54.utcOffset());

var dt55 = DateTime.parse("2013 01 01", 'YYYY MM DD', false, true);
console.log(dt55.toString(), dt55.utcOffset());

DateTime.locale('fr');
//var m = DateTime.fromUnixEpoch(1316116057189);

var m = new DateTime(2014, 2, 5, 0, 0, 0, 0);
console.log(m.toString("ddd MMM YYYY"));

DateTime.locale('en');
console.log(m.toString("ddd MMM YYYY"));

var dt56 = new DateTime(2018, 1);
console.log(dt56.toString("ddd DD/MM/YYYY HH:mm:ss"));

DateTime.locale('fr');
var dt57 = DateTime.now().addDays(2);
console.log(dt57.humanize(true));

console.log(dt57.locale());