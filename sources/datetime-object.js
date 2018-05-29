/* eslint-disable */ ;
(function(moduleName, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["moment"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("moment"));
  } else {
    DateTime = factory(moment);
  }
}("DateTimeModule", this, function(moment) {
  "use strict";

  /* eslint-enable */

  /* global moment */

  function isDef(value) {
    return (value !== null && typeof value !== "undefined");
  }
  class DateTime {
    constructor(year, month, day, hours, minutes, seconds, milliseconds) {
      if (arguments.length === 0) {
        this.mmt = moment();
      } else {
        this.mmt = moment({ y: year, M: month - 1, d: day, h: hours, m: minutes, s: seconds, ms: milliseconds });
      }
    }
    locale() {
      return this.mmt.locale();
    }
    toString(format) {
      return this.mmt.format(format || DateTime.defaultOutput);
    }
    toJSON() {
      return this.mmt.toJSON();
    }
    addDays(nb) {
      return DateTime.fromMoment(this.mmt.clone().add(nb * 24, "hours"));
    }
    addMonths(nb) {
      return DateTime.fromMoment(this.mmt.add(nb, "months"));
    }
    addYears(nb) {
      return DateTime.fromMoment(this.mmt.clone().add(nb, "years"));
    }
    addHours(nb) {
      return DateTime.fromMoment(this.mmt.clone().add(nb, "hours"));
    }
    addMinutes(nb) {
      return DateTime.fromMoment(this.mmt.clone().add(nb * 60, "seconds"));
    }
    addSeconds(nb) {
      return DateTime.fromMoment(this.mmt.add(nb, "seconds"));
    }
    add(years, months, days, hours, minutes, seconds) {
      var mmt = this.mmt.clone();
      mmt.add(years || 0, "years").add(months || 0, "months").add(days || 0, "days")
        .add(hours || 0, "hours").add(minutes || 0, "minutes").add(seconds || 0, "seconds");
      return DateTime.fromMoment(mmt);
    }
    humanize(relative) {
      var duration = moment.duration(this.mmt.diff(moment()));
      return duration.humanize(relative);
    }
    day(nb) {
      if (arguments.length === 1) {
        this.mmt = this.mmt.date(nb);
        return this;
      }
      return this.mmt.date();
    }
    month(nb) {
      if (arguments.length === 1) {
        this.mmt = this.mmt.month(nb);
        return this;
      }
      return this.mmt.month() + 1;
    }
    year(nb) {
      if (arguments.length === 1) {
        this.mmt = this.mmt.year(nb);
        return this;
      }
      return this.mmt.year();
    }
    week() {
      return this.mmt.week();
    }
    hours(nb) {
      if (arguments.length === 1) {
        this.mmt = this.mmt.hours(nb);
        return this;
      }
      return this.mmt.hours();
    }
    minutes(nb) {
      if (arguments.length === 1) {
        this.mmt = this.mmt.minutes(nb);
        return this;
      }
      return this.mmt.minutes();
    }
    seconds(nb) {
      if (arguments.length === 1) {
        this.mmt = this.mmt.seconds(nb);
        return this;
      }
      return this.mmt.seconds();
    }
    milliSeconds(nb) {
      if (arguments.length === 1) {
        this.mmt = this.mmt.milliseconds(nb);
        return this;
      }
      return this.mmt.milliseconds();
    }
    dayOfWeek() {
      if (arguments.length === 1) {
        this.mmt = this.mmt.day(arguments[0]);
        return this;
      }
      return this.mmt.day();
    }
    ceil(precision, key) {
      return DateTime.fromMoment(this.mmt.clone().ceil(precision, key));
    }
    floor(precision, key) {
      return DateTime.fromMoment(this.mmt.clone().floor(precision, key));
    }
    lastDayOfMonth() {
      return DateTime.fromMoment(this.mmt.clone().endOf("month"));
    }
    firstDayOfMonth() {
      return DateTime.fromMoment(this.mmt.clone().startOf("month"));
    }
    nearest(dayOfWeek, direction) {
      dayOfWeek = dayOfWeek || 0;
      direction = direction || 1;
      var mmt = this.mmt.clone();
      var dow = mmt.day();
      if (direction === -1) {
        mmt.day(-7);
      }
      if (dow !== dayOfWeek) {
        mmt.day(dayOfWeek);
      }
      return DateTime.fromMoment(mmt);
    }
    nearestSunday(direction) {
      return this.nearest(0, direction);
    }
    nearestMonday(direction) {
      return this.nearest(1, direction);
    }
    nearestTuesday(direction) {
      return this.nearest(2, direction);
    }
    nearestWednesday(direction) {
      return this.nearest(3, direction);
    }
    nearestThursday(direction) {
      return this.nearest(4, direction);
    }
    nearestFriday(direction) {
      return this.nearest(5, direction);
    }
    nearestSaturday(direction) {
      return this.nearest(6, direction);
    }
    toMoment() {
      return this.mmt.clone();
    }
    toDate() {
      return this.mmt.toDate();
    }
    toObject() {
      return this.mmt.toObject();
    }
    utcOffset() {
      return this.mmt.utcOffset();
    }
    toUnixEpoch() {
      return this.mmt.unix();
    }
    isAfter(dt) {
      return this.mmt.isAfter(dt.mmt);
    }
    isBefore(dt) {
      return this.mmt.isBefore(dt.mmt);
    }
    isSame(dt) {
      return this.mmt.isSame(dt.mmt);
    }
    isSameOrAfter(dt) {
      return this.mmt.isSameOrAfter(dt.mmt);
    }
    isSameOrBefore(dt) {
      return this.mmt.isSameOrBefore(dt.mmt);
    }
    isBetween(dt1, dt2, strict) {
      // return this.mmt.isBetween(dt1, dt2, granularity || null, stric || '[]');
      strict = strict || "[]";
      if (this.mmt.isBefore(dt1.mmt)) {
        return false;
      }
      if (this.mmt.isAfter(dt2.mmt)) {
        return false;
      }
      if (strict.charAt(0) === "]" && this.mmt.isSame(dt1.mmt)) {
        return false;
      }
      if (strict.charAt(1) === "[" && this.mmt.isSame(dt2.mmt)) {
        return false;
      }
      return true;
    }
    diffAsTimeSpan(dt) {
      var duration = moment.duration(this.mmt.diff(dt.mmt));
      return TimeSpan.fromDuration(duration);
    }
    diff(dt) {
      return this.mmt.diff(dt.mmt);
    }
    roundHours(nbHours, past) {
      if (!isDef(past)) {
        past = true;
      }
      var s = 0;
      var current = this.mmt.hours();
      while (s + nbHours <= current) {
        s += nbHours;
      }
      if (!past) {
        s += nbHours;
      }
      var dt = DateTime.fromMoment(this.mmt.clone());
      dt.hours(s);
      dt.minutes(0);
      dt.seconds(0);
      dt.milliSeconds(0);
      return dt;
    }
    roundMinutes(nbMinutes, past) {
      if (!isDef(past)) {
        past = true;
      }
      var s = 0;
      var current = this.mmt.minutes();
      while (s + nbMinutes <= current) {
        s += nbMinutes;
      }
      if (!past) {
        s += nbMinutes;
      }
      var dt = DateTime.fromMoment(this.mmt.clone());
      dt.minutes(s);
      dt.seconds(0);
      dt.milliSeconds(0);
      return dt;
    }
    roundSeconds(nbSeconds, past) {
      if (!isDef(past)) {
        past = true;
      }
      var s = 0;
      var current = this.mmt.seconds();
      while (s + nbSeconds <= current) {
        s += nbSeconds;
      }
      if (!past) {
        s += nbSeconds;
      }
      var dt = DateTime.fromMoment(this.mmt.clone());
      dt.seconds(s);
      dt.milliSeconds(0);
      return dt;
    }
    static fromMoment(mmt) {
      var dt = new DateTime();
      dt.mmt = mmt;
      return dt;
    }
    static fromDate(dt) {
      return DateTime.fromMoment(moment(dt));
    }
    static fromObject(jsonObject) {
      return DateTime.fromMoment(moment(jsonObject));
    }
    static SetupLocale(lang, definition) {
        if (arguments.length === 1) {
          moment.locale(lang);
        } else if (arguments.length === 2) {
          moment.updateLocale(lang, definition);
        }
      }
      /* static */
    static parse(st, formats, parseExact, utcMode) {
      var mmt = null;
      if (utcMode || false) {
        mmt = moment(st, formats, parseExact);
      } else {
        mmt = moment.utc(st, formats, parseExact);
      }
      if (mmt.isValid()) {
        return DateTime.fromMoment(mmt);
      }
      var cause = mmt.invalidAt();
      var causeTxt = "";
      if (cause === 0) {
        causeTxt = "years";
      } else if (cause === -1) {
        causeTxt = "months";
      } else if (cause === -2) {
        causeTxt = "days";
      } else if (cause === -3) {
        causeTxt = "hours";
      } else if (cause === -4) {
        causeTxt = "minutes";
      } else if (cause === -5) {
        causeTxt = "seconds";
      } else if (cause === -6) {
        causeTxt = "milliseconds";
      }
      console.log("'" + st + "'", "couldn't parse with '" + formats + "'", "cause :", causeTxt);
      return null;
    }
    static parseZone(st, formats) {
      return moment.parseZone(st, formats);
    }
    static fromUnixEpoch(number) {
      return DateTime.fromMoment(moment(number).utc());
    }
    static now() {
      return DateTime.fromMoment(moment());
    }
    static today() {
      var dt = DateTime.now();
      dt.mmt.hours(0).minutes(0).seconds(0); //.milliSeconds(0);
      return dt;
    }
    static compare(dt1, dt2) {
      if (this.mmt.isSame(dt1.mmt, dt2.mmt)) {
        return 0;
      }
      return (dt1.mmt.isAfter(dt2.mmt) ? 1 : -1);
    }
    static locale(lang) {
      moment.locale(lang);
    }
    static daysInMonth(month, year) {
      if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 11) {
        return 31;
      }
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
      }
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      }
      return 28;
    }
    static isLeapYear(year) {
      return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    }
    static fn(name, fn) {
      DateTime.prototype.name = fn;
    }
  }


  DateTime.defaultOutput = null;
  DateTime.defaultLocale = null;


































































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
      isoDateTime: "YYYY-MM-DD'T'hh:mm:ss"
    };

    var format = function() {
      var token = /D{1,2}|M{1,2}|YY(?:YY)?|y|([HhmsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/gi;

      function pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) { val = "0" + val; }
        return val;
      }

      // Regexes and supporting functions are cached through closure
      return function(date, mask) {
        mask = String(formatMasks[mask] || mask || formatMasks.default);

        var D = date.days(),
          M = date.months(),
          y = date.years(),
          H = date.hours(),
          m = date.minutes(),
          s = date.seconds(),
          L = date.milliseconds(),
          flags = {
            D: D,
            DD: pad(D),
            M: m + 1,
            MM: pad(m + 1),
            YY: String(y).slice(2),
            YYYY: y,
            H: H % 24 || 0,
            HH: pad(H % 24 || 0),
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
            TT: H < 12 ? "AM" : "PM"
          };

        return mask.replace(token, function($0) {
          return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
      };
    }();
    return format(this, mask);
  };



  class TimeSpan {
    constructor(year, month, day, hours, minutes, seconds) {
      this.duration = moment.duration({
        seconds: seconds || 0,
        minutes: minutes || 0,
        hours: hours || 0,
        days: day || 0,
        weeks: 0,
        months: month || 0,
        years: year || 0
      });
    }
    toDuration() {
      return this.duration;
    }
    totalSeconds() {
      return parseInt(this.duration.asMilliseconds() / 1000, 10);
    }
    totalMinutes() {
      return parseInt(this.duration.asMilliseconds() / 60000, 10);
    }
    totalHours() {
      return parseFloat(this.duration.asMilliseconds() / 3600000);
    }
    totalDays() {
      return parseFloat(this.duration.asMilliseconds() / (3600000 * 24));
    }
    totalMilliSeconds() {
      return this.duration.asMilliseconds();
    }
    humanize(relative) {
      return this.duration.humanize(relative);
    }
    toString(format) {
      return this.duration.format(format);
    }
    static fromDuration(duration) {
      var ts = new TimeSpan();
      ts.duration = duration;
      return ts;
    }
  }

  return DateTime;

}));