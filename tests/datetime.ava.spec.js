import { test } from "ava";
var DateTime = require("../distrib/datetime-object.min.js");

test("DateTime-parse", t => {

  var inputs = [
    { i: "12/02/1973", opt: { format: "DD/MM/YYYY" } },
    { i: "12-02-1973", opt: { format: "DD-MM-YYYY" } },
    { i: "12/13/1973", opt: { format: "MM/DD/YYYY" } },
    { i: "1973/12/02", opt: { format: "YYYY/DD/MM" } },
    { i: "1973", opt: { format: "YYYY" } },
    { i: "02/1973", opt: { format: "MM/YYYY" } },
  ];
  for (var input of inputs) {
    let result = DateTime.parse(input.i, input.opt.format);
    t.deepEqual(result.toString(input.opt.format), input.i, input.i + " fail");
  }
});