moment = require("moment");
require("moment-round");

moment.duration.fn.format = moment.duration.fn.format || function(mask) {
  // Some common format strings
  let formatMasks = {
    "default": "DD MM YYYY HH:mm:ss",
    shortDate: "M/D/YY",
    mediumDate: "MM DD, YYYY",
    longDate: "MM DD, YYYY",
    fullDate: "DD, MM, YYYY",
    shortTime: "H:mm TT",
    mediumTime: "H:mm:ss TT",
    longTime: "H:mm:ss TT Z",
    isoDate: "YYYY-MM-DD",
    isoTime: "hh:mm:ss",
    isoDateTime: "YYYY-MM-DD'T'hh:mm:ss",
  };

  let format = function() {
    let token = /D{1,2}|M{1,2}|YY(?:YY)?|([HhmsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;

    function pad(val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) val = "0" + val;
      return val;
    }

    // Regexes and supporting functions are cached through closure
    return function(date, mask) {
      mask = String(formatMasks[mask] || mask || formatMasks["default"]);

      let D = date.days(),
        m = date.months(),
        y = date.years(),
        H = date.hours(),
        M = date.minutes(),
        s = date.seconds(),
        L = date.milliseconds(),
        flags = {
          D: D,
          DD: pad(D),
          M: m + 1,
          MM: pad(m + 1),
          YY: String(y).slice(2),
          YYYY: y,
          H: H % 12 || 12,
          HH: pad(H % 12 || 12),
          h: H,
          hh: pad(H),
          m: M,
          mm: pad(M),
          s: s,
          ss: pad(s),
          l: pad(L, 3),
          L: pad(L > 99 ? Math.round(L / 10) : L),
          t: H < 12 ? "a" : "p",
          tt: H < 12 ? "am" : "pm",
          T: H < 12 ? "A" : "P",
          TT: H < 12 ? "AM" : "PM",
        };

      return mask.replace(token, function($0) {
        return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
      });
    };
  }();
  console.log("fff");
  return format(this, mask);
};






function TimeSpan(year, month, day, hours, minutes, seconds) {
  if (arguments.length == 1) {
    this.duration = year; // duration
  } else {
    this.duration = moment.duration({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: day,
      weeks: 0,
      months: month,
      years: year
    });
  }
}

TimeSpan.prototype.asDuration = function() {
  return this.duration;
}

TimeSpan.prototype.totalSeconds = function() {
  return parseInt(this.duration.asMilliseconds() / 1000, 10);
}

TimeSpan.prototype.totalMinutes = function() {
  return parseInt(this.duration.asMilliseconds() / 60000, 10);
}

TimeSpan.prototype.totalHours = function() {
  return parseFloat(this.duration.asMilliseconds() / 3600000);
}

TimeSpan.prototype.totalDays = function() {
  return parseFloat(this.duration.asMilliseconds() / (3600000 * 24));
}

TimeSpan.prototype.totalMilliSeconds = function() {
  return this.duration.asMilliseconds();
}

TimeSpan.prototype.humanize = function(relative) {
  return this.duration.humanize(relative);
}


TimeSpan.prototype.toString = function(format) {
  //return moment.utc(this.duration.asMilliseconds()).format(format, { forceLength: true });
  return this.duration.format(format);
}


function DateTime(year, month, day, hours, minutes, seconds, milliseconds) {
  if (arguments.length === 0) {
    this.mmt = moment();
  } else if (arguments.length === 1) {
    this.mmt = year; //a moment
  }
  //var dt = new Date(year, month, day, hours, minutes, seconds, milliseconds);
  else {
    this.mmt = moment({ y: year, M: month - 1, d: day, h: hours, m: minutes, s: seconds, ms: milliseconds });
  }
}

DateTime.defaultOutput = null;
DateTime.defaultLocale = null;

//Date(année, mois[, jour[, heures[, minutes[, secondes[, millisecondes]]]]]);
DateTime.fromMoment = function(moment) {
  var dt = new DateTime();
  dt.mmt = moment;
  return dt;
}

DateTime.fromDate = function(dt) {
  return DateTime.fromMoment(moment(dt));
}

DateTime.fromObject = function(jsonObject) {
  return DateTime.fromMoment(moment(jsonObject));
}


DateTime.SetupLocale = function(lang, definition) {
  if (arguments.length == 1) {
    moment.locale(lang);
  } else if (arguments.length == 2) {
    moment.updateLocale(lang, definition);
  }
}

DateTime.prototype.Locale = function() {
  return this.mmt.locale();
}

DateTime.prototype.toString = function(format) {
  return this.mmt.format(format || DateTime.defaultOutput);
}

DateTime.prototype.toJSON = function() {

  return this.mmt.toJSON();
}
DateTime.prototype.addDays = function(nb) {
  return DateTime.fromMoment(this.mmt.clone().add(nb * 24, 'hours'));
}

DateTime.prototype.addMonths = function(nb) {
  return DateTime.fromMoment(this.mmt.add(nb, 'months'));
}

DateTime.prototype.addYears = function(nb) {
  return DateTime.fromMoment(this.mmt.clone().add(nb, 'years'));
}

DateTime.prototype.addHours = function(nb) {
  return DateTime.fromMoment(this.mmt.clone().add(nb, 'hours'));
}

DateTime.prototype.addMinutes = function(nb) {
  return DateTime.fromMoment(this.mmt.clone().add(nb * 60, 'seconds'));
}

DateTime.prototype.addSeconds = function(nb) {
  return DateTime.fromMoment(this.mmt.add(nb, 'seconds'));
}

DateTime.prototype.add = function(years, months, days, hours, minutes, seconds) {
  var mmt = this.mmt.clone();
  mmt.add(years || 0, "years").add(months || 0, "months").add(days || 0, "days")
    .add(hours || 0, "hours").add(minutes || 0, "minutes").add(seconds || 0, "seconds");
  return DateTime.fromMoment(mmt);
}


DateTime.prototype.day = function(nb) {
  if (arguments.length == 1) {
    this.mmt = this.mmt.date(nb);
    return this;
  } else {
    return this.mmt.date();
  }
}

DateTime.prototype.month = function(nb) {
  if (arguments.length == 1) {
    this.mmt = this.mmt.month(nb);
    return this;
  } else {
    return this.mmt.month() + 1;
  }
}

DateTime.prototype.year = function(nb) {
  if (arguments.length == 1) {
    this.mmt = this.mmt.year(nb);
    return this;
  } else {
    return this.mmt.year();
  }
}

DateTime.prototype.week = function() {
  return this.mmt.week();
}

DateTime.prototype.hours = function(nb) {
  if (arguments.length == 1) {
    this.mmt = this.mmt.hours(nb);
    return this;
  } else {
    return this.mmt.hours();
  }
}

DateTime.prototype.minutes = function(nb) {
  if (arguments.length == 1) {
    this.mmt = this.mmt.minutes(nb);
    return this;
  } else {
    return this.mmt.minutes();
  }
}

DateTime.prototype.seconds = function(nb) {
  if (arguments.length == 1) {
    this.mmt = this.mmt.seconds(nb);
    return this;
  } else {
    return this.mmt.seconds();
  }
}

DateTime.prototype.milliSeconds = function(nb) {
  if (arguments.length == 1) {
    this.mmt = this.mmt.milliseconds(nb);
    return this;
  } else {
    return this.mmt.milliseconds();
  }
}

DateTime.prototype.dayOfWeek = function() {
  return this.mmt.day();
}

DateTime.prototype.ceil = function(precision, key) {
  this.mmt = this.mmt.ceil(precision, key);
  return this;
}

DateTime.prototype.floor = function(precision, key) {
  this.mmt = this.mmt.floor(precision, key);
  return this;
}

DateTime.prototype.lastDayOfMonth = function() {
  this.mmt = this.mmt.endOf("month");
  return this;
}

DateTime.prototype.firstDayOfMonth = function() {
  this.mmt = this.mmt.startOf("month");
  return this;
}

DateTime.prototype.nearest = function(dayOfWeek, direction) {
  var dow = this.mmt.day();
  if (dow == dayOfWeek) {
    return this;
  }

  var amount = dayOfWeek - dow;
  if (dayOfWeek < dow) amount += 7;
  if (direction == -1) amount -= 7;
  this.mmt = this.mmt.add(amount, "days");
  return this;
}

DateTime.prototype.nearestSunday = function(direction) {
  return nearest(0, direction);
}

DateTime.prototype.nearestMonday = function(direction) {
  return this.nearest(1, direction);
}

DateTime.prototype.nearestTuesday = function(direction) {
  return this.nearest(2, direction);
}
DateTime.prototype.nearestWednesday = function(direction) {
  return this.nearest(3, direction);
}
DateTime.prototype.nearestThursday = function(direction) {
  return this.nearest(4, direction);
}
DateTime.prototype.nearestFriday = function(direction) {
  return this.nearest(5, direction);
}
DateTime.prototype.nearestSaturday = function(direction) {
  return this.nearest(6, direction);
}

DateTime.prototype.asMoment = function() {
  return this.mmt.clone();
}

DateTime.prototype.asDate = function() {
  return this.mmt.toDate();
}

DateTime.prototype.asObject = function() {
  return this.mmt.toObject();
}


/* static */
DateTime.parse = function(st, formats) {
  return new DateTime(moment(st, formats));
}

DateTime.tryParse = function(st, formats) {
  var mmt = moment(st, formats);
  if (mmt.isValid()) {
    return DateTime.fromMoment(mmt);
  }
  var cause = mmt.invalidAt();
  var causeTxt = "";
  if (cause === 0) causeTxt = "years";
  else if (cause === -1) causeTxt = "months";
  else if (cause === -2) causeTxt = "days";
  else if (cause === -3) causeTxt = "hours";
  else if (cause === -4) causeTxt = "minutes";
  else if (cause === -5) causeTxt = "seconds";
  else if (cause === -6) causeTxt = "milliseconds";
  console.log(st, formats || "", mmt.format(), "cause :", causeTxt);
  return null;
}

DateTime.fromUnixEpoch = function(number) {
  return DateTime.fromMoment(moment(number).utc());
}

DateTime.prototype.toUnixEpoch = function() {
  return this.mmt.unix();
}

DateTime.now = function() {
  return DateTime.fromMoment(moment());
}

DateTime.today = function() {
  var dt = DateTime.now();
  var dur = moment.duration({
    seconds: -dt.mmt.seconds(),
    minutes: -dt.mmt.minutes(),
    hours: -dt.mmt.hours(),
    milliseconds: -dt.mmt.milliseconds()
  });
  dt.mmt = dt.mmt.add(dur);
  return dt;
}

DateTime.prototype.isAfter = function(dt) {
  return this.mmt.isAfter(dt.mmt);
}

DateTime.prototype.isBefore = function(dt) {
  return this.mmt.isBefore(dt.mmt);
}

DateTime.prototype.isSame = function(dt) {
  return this.mmt.isSame(dt.mmt);
}

DateTime.compare = function(dt1, dt2) {
  if (this.mmt.isSame(dt1.mmt, dt2.mmt)) { return 0; }
  return (dt1.mmt.isAfter(dt2.mmt) ? 1 : -1);
}

DateTime.prototype.isBetween = function(dt1, dt2, strict, granularity) {
  // return this.mmt.isBetween(dt1, dt2, granularity || null, stric || '[]');
  strict = strict || "[]";
  if (this.mmt.isBefore(dt1.mmt)) {
    return false;
  }
  if (this.mmt.isAfter(dt2.mmt)) {
    return false;
  }
  if (strict.charAt(0) === ']' && this.mmt.isSame(dt1.mmt)) {
    return false;
  }
  if (strict.charAt(1) === '[' && this.mmt.isSame(dt2.mmt)) {
    return false;
  }
  return true;
}


DateTime.locale = function(lang) {
  moment.locale(lang);
}

DateTime.daysInMonth = function(month, year) {
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 11) {
    return 31;
  }
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    return 30;
  }
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return 29;
  }
  return 28;
}

DateTime.isLeapYear = function(year) {
  return ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0);
}

DateTime.prototype.isValid = function() {
  return this.mmt.isValid();
}
DateTime.prototype.invalidAt = function() {
  return this.mmt.invalidAt();
}

DateTime.prototype.diff = function(dt) {
  var duration = moment.duration(this.mmt.diff(dt.mmt));
  return new TimeSpan(duration);
}

DateTime.fn = function(name, fn) {
  moment.fn.name = fn;
}

var dt2 = new DateTime();


console.log(dt2.toString("DD/MM/YYYY HH:mm:ss"));
dt2 = dt2.addDays(5);
console.log(dt2.toString("DD/MM/YYYY"));

var mnt = dt2.asMoment();

var dt3 = DateTime.parse("15/01/2018 00:00:00", "DD/MM/YYYY HH:mm:ss");
console.log(dt3.toString("DD/MM/YYYY"));

var ts = dt3.diff(dt2);
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
console.log(dt6.asDate());

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
// console.log(dt16.nearestMonday(-1).toString("ddd DD/MM/YY"));
// console.log(dt16.nearestFriday(-1).toString("ddd DD/MM/YY"));
// console.log(dt16.nearestSaturday(-1).toString("ddd DD/MM/YY"));
// console.log(dt16.nearestTuesday(-1).toString("ddd DD/MM/YY"));
console.log("nearestMonday prev", dt16.nearestMonday(-1).toString("ddd DD/MM/YY"));
console.log("nearestMonday next ", dt16.nearestMonday(1).toString("ddd DD/MM/YY"));
console.log("nearestTuesday prev", dt16.nearestTuesday(-1).toString("ddd DD/MM/YY"));
console.log("nearestTuesday next ", dt16.nearestTuesday(1).toString("ddd DD/MM/YY"));
console.log("nearestFriday prev", dt16.nearestFriday(-1).toString("ddd DD/MM/YY"));
console.log("nearestFriday next ", dt16.nearestFriday(1).toString("ddd DD/MM/YY"));


var dt17 = DateTime.today().addDays(1);
var dt18 = DateTime.today();
var ts = dt18.diff(dt17);

console.log(ts);

var dt19 = DateTime.fromUnixEpoch(0);
console.log(dt19.toString("DD/MM/YYYY HH:mm"));

var dt20 = DateTime.today();
console.log(dt20.toJSON());

var dt21 = DateTime.today();
console.log(dt21.asObject());

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

var dt;
console.log(DateTime.tryParse("2017-10-30T18:30:25", dt));
console.log(dt);

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


DateTime.tryParse("32/12/2018");
DateTime.tryParse("31/04/2018");
DateTime.tryParse("31/13/2018");
DateTime.tryParse("12/12/2018");
DateTime.tryParse("1/1/2018");
DateTime.tryParse("01/12/20i18");
DateTime.tryParse("01/4l/2018");
DateTime.tryParse("01/04/2018 05:aa:00");
DateTime.tryParse("01/04/2018 aa:55:55");
DateTime.tryParse("01/04/2018 04:05:aa");
DateTime.tryParse("01/04/2018 04:05:555");
DateTime.tryParse("01/04/2018 07:055:05");

var dt31 = DateTime.fromObject({ y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123 });
console.log(dt31.toString());

DateTime.defaultOutput = "DD/MM/YYYY HH:mm:ss";
console.log(dt31.toString());

var dt32 = new DateTime();
var dt33 = dt32.addDays(1);

console.log(dt32.toString(), dt33.toString());

var di = dt33.diff(dt32);
console.log(di.totalMilliSeconds());
console.log(di.totalSeconds());
console.log(di.totalMinutes());
console.log(di.totalHours());
console.log(di.totalDays());
console.log(di.humanize());
console.log(di.toString("HH:mm:ss"));

//var dt34 = dt32.addHours(12);
var dt34 = dt32.addDays(0.5);
di = dt34.diff(dt32);

console.log(dt32.toString(), dt34.toString());
console.log(di.totalMilliSeconds());
console.log(di.totalSeconds());
console.log(di.totalMinutes());
console.log(di.totalHours());
console.log(di.totalDays());
console.log("s", di.asDuration().asSeconds());
console.log(di.humanize());
console.log(di.toString("HH:mm:ss"));

console.log(moment.locale("fr"));

DateTime.SetupLocale("fr", {
  months: [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ],
  monthsShort: ["J", "F", "M", "A", "m", "j", "J", "A", "S", "O", "N", "D"]
});

DateTime.SetupLocale("en");

//console.log(moment.locale("fr"));

console.log(dt26.toString("MMM"), dt26.toString("MMMM"));
console.log(new DateTime().toString("LLLL"));

DateTime.SetupLocale("ru");
console.log(new DateTime().toString("LLLL"));



moment.locale('de');
// Use moment now that the locale has been properly set.
console.log(moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
console.log(moment().format('LLLL', "fr"));
console.log(new DateTime().Locale());