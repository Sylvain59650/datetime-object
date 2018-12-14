import { test } from "ava";
var DateTime = require("../distrib/datetime-object.min.js");

test("DateTime-compare", t => {
  var dt = DateTime.today();
  var dt2 = dt.addDays(1).addYears(1).addHours(1).addMinutes(1).addSeconds(1);
  t.true(dt2.isAfter(dt));

  var dt3 = dt.addSeconds(-1);
  t.true(dt3.isBefore(dt));
});