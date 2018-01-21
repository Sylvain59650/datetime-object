'use strict';

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

DateTime.prototype.locale = function() {
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
  if (arguments.length == 1) {
    this.mmt = this.mmt.day(nb);
    return this;
  } else {
    return this.mmt.day();
  }
}

DateTime.prototype.ceil = function(precision, key) {
  return DateTime.fromMoment(this.mmt.clone().ceil(precision, key));
}

DateTime.prototype.floor = function(precision, key) {
  return DateTime.fromMoment(this.mmt.clone().floor(precision, key));
}

DateTime.prototype.lastDayOfMonth = function() {
  return DateTime.fromMoment(this.mmt.clone().endOf("month"));
}

DateTime.prototype.firstDayOfMonth = function() {
  return DateTime.fromMoment(this.mmt.clone().startOf("month"));
}

DateTime.prototype.nearest = function(dayOfWeek, direction) {
  dayOfWeek = dayOfWeek || 0;
  direction = direction || 1;
  var mmt = this.mmt.clone();
  var dow = mmt.day();
  if (direction == -1) {
    mmt.day(-7);
  }
  if (dow != dayOfWeek) {
    mmt.day(dayOfWeek);
  }
  return DateTime.fromMoment(mmt);
}

DateTime.prototype.nearestSunday = function(direction) {
  return this.nearest(0, direction);
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

DateTime.prototype.toMoment = function() {
  return this.mmt.clone();
}

DateTime.prototype.toDate = function() {
  return this.mmt.toDate();
}

DateTime.prototype.toObject = function() {
  return this.mmt.toObject();
}


/* static */
DateTime.parse = function(st, formats) {
  var mmt = moment(st, formats);
  if (mmt.isValid()) {
    return new DateTime(mmt);
  }

  return null;
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
  return false;
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
  dt.mmt.hours(0).minutes(0).seconds(0); //.milliSeconds(0);
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

DateTime.prototype.isSameOrAfter = function(dt) {
  return this.mmt.isSameOrAfter(dt.mmt);
}

DateTime.prototype.isSameOrBefore = function(dt) {
  return this.mmt.isSameOrBefore(dt.mmt);
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
  DateTime.prototype.name = fn;
};




moment.duration.fn.format = moment.duration.fn.format || function(mask) {
  // Some common format strings
  var formatMasks = {
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

  var format = function() {
    var token = /D{1,2}|M{1,2}|YY(?:YY)?|([HhmsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;

    function pad(val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) val = "0" + val;
      return val;
    }

    // Regexes and supporting functions are cached through closure
    return function(date, mask) {
      mask = String(formatMasks[mask] || mask || formatMasks["default"]);

      var D = date.days(),
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

TimeSpan.prototype.toDuration = function() {
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