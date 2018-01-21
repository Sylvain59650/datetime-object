// var DateTimeModule = (function() {

//   moment = require("moment");
//   require("moment-round");
//   var { DateTime, TimeSpan } = require("./datetime-object.js");

//   return {
//     DateTime: DateTime,
//     TimeSpan: TimeSpan
//   }
// }());


moment = require("moment");
require("moment-round");
// var { DateTime, TimeSpan } = require("./datetime-object.js");

// module.exports = { DateTime: DateTime };
// module.exports = { TimeSpan: TimeSpan };

module.exports = require("./datetime-object.js");