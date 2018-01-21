'use strict';

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