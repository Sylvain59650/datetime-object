import { test } from "ava";
var DateTime = require("../distrib/datetime-object.min.js");

test("DateTime-humanize", t => {
  var dt = DateTime.now();
  var dt2 = dt.addDays(1).addYears(1).addHours(1).addMinutes(1).addSeconds(1);
  t.deepEqual(dt2.humanize(true), "in a year");

  var dt3 = dt.addSeconds(15);

  console.log(dt.toString("DD/MM/YYYY HH:mm:ss"), dt3.toString("DD/MM/YYYY HH:mm:ss"));
  t.deepEqual(dt3.humanize(false), "a few seconds");

});