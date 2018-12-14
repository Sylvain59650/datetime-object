import { test } from "ava";
var DateTime = require("../distrib/datetime-object.min.js");

test("DateTime-mutable", t => {
  var dt = DateTime.today();
  var dt2 = dt.day(2);
  t.deepEqual(dt2, dt);
  dt2.month(1);
  t.deepEqual(dt2, dt);
  dt2.year(2020);
  t.deepEqual(dt2, dt);
  dt2.hours(4);
  t.deepEqual(dt2, dt);
  dt2.minutes(10);
  t.deepEqual(dt2, dt);
  dt2.seconds(5);
  t.deepEqual(dt2, dt);
  dt2.milliSeconds(500);
  t.deepEqual(dt2, dt);
});