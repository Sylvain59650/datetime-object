
 
 The lastest version of this document is available at (https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
 <div class="docs-content">

<article class="docs-section"><a class="docs-section-target" id="/use-it/" name="/use-it/"></a>

## [Where to use it](#/use-it/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/intro/" name="/use-it/intro/"></a>

<div class="docs-method-prose">

DateTime was designed to work both in the browser and in Node.js.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/node-js/" name="/use-it/node-js/"></a>

### [Node.js](#/use-it/node-js/)

<div class="docs-method-prose">

    npm install DateTime

    require('datetime-object');
 
</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/browser/" name="/use-it/browser/"></a>

<div class="docs-method-prose">

    <script src="datetime-object.min.js"></script>
    <script>
        var dt=new DateTime();
        console.log(dt.toString());
    </script>

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/bower/" name="/use-it/bower/"></a>

<div class="docs-method-prose">

[bower](https://bower.io/)

    bower install --save DateTime


</div>

</article>




<article class="docs-method"><a class="docs-method-target" id="/use-it/other/" name="/use-it/other/"></a>


<article class="docs-section"><a class="docs-section-target" id="/parsing/" name="/parsing/"></a>

# [Statics methods](#/rr/)

## [Parse](#/parsing/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/intro/" name="/parsing/intro/"></a>

<div class="docs-method-prose">
<code>
DateTime.parse(string);
</code>
<code>
DateTime.parse(string,format);
</code>
DateTime.parse(string,[formats]);

</code>
Instead of modifying the native `Date.prototype`, DateTime.js creates a wrapper for the `Date` object. To get this wrapper object, simply call `new DateTime()` with one of the supported input types.

The `DateTime` prototype is exposed through `DateTime.fn`. If you want to add your own functions, that is where you would put them.

For ease of reference, any method on the `DateTime.prototype` will be referenced in the docs as `DateTime#method`. So `DateTime.prototype.toString` == `DateTime.fn.toString` == `DateTime#format`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/now/" name="/parsing/now/"></a>

<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime();

</div>

To get the current date and time, just call `new DateTime()` with no parameters.

    var now = new DateTime();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/string/" name="/parsing/string/"></a>


<div class="docs-method-prose">

When creating a DateTime from a string, we first check if the string matches known [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formats, we then check if the string matches the [RFC 2822 Date time](https://tools.ietf.org/html/rfc2822#section-3.3) format before dropping to the fall back of `new Date(string)` if a known format is not found.

    var day = new DateTime("1995-12-25");

**Warning:** Browser support for parsing strings [is inconsistent](http://dygraphs.com/date-formats.html). Because there is no specification on which formats should be supported, what works in some browsers will not work in other browsers.

For consistent results parsing anything other than ISO 8601 strings, you should use [String + Format](#/parsing/string-format/).

#### Supported ISO 8601 strings

An ISO 8601 string requires a date part.

    2013-02-08  # A calendar date part
    2013-W06-5  # A week date part
    2013-039    # An ordinal date part

    20130208    # Basic (short) full date
    2013W065    # Basic (short) week, weekday
    2013W06     # Basic (short) week only
    2013050     # Basic (short) ordinal date

A time part can also be included, separated from the date part by a space or a uppercase T.

    2013-02-08T09            # An hour time part separated by a T
    2013-02-08 09            # An hour time part separated by a space
    2013-02-08 09:30         # An hour and minute time part
    2013-02-08 09:30:26      # An hour, minute, and second time part
    2013-02-08 09:30:26.123  # An hour, minute, second, and millisecond time part
    2013-02-08 24:00:00.000  # hour 24, minute, second, millisecond equal 0 means next day at midnight

    20130208T080910,123      # Short date and time up to ms, separated by comma
    20130208T080910.123      # Short date and time up to ms
    20130208T080910          # Short date and time up to seconds
    20130208T0809            # Short date and time up to minutes
    20130208T08              # Short date and time, hours only

Any of the date parts can have a time part.

    2013-02-08 09  # A calendar date part and hour time part
    2013-W06-5 09  # A week date part and hour time part
    2013-039 09    # An ordinal date part and hour time part

If a time part is included, an offset from UTC can also be included as `+-HH:mm`, `+-HHmm`, `+-HH` or `Z`.

    2013-02-08 09+07:00            # +-HH:mm
    2013-02-08 09-0100             # +-HHmm
    2013-02-08 09Z                 # Z
    2013-02-08 09:30:26.123+07:00  # +-HH:mm
    2013-02-08 09:30:26.123+07     # +-HH

**Note:** Automatic cross browser ISO-8601 support was added in version **1.5.0**. Support for the week and ordinal formats was added in version **2.3.0**.

If a string does not match any of the above formats and is not able to be parsed with `Date.parse`, `DateTime#isValid` will return false.

#### The RFC 2822 date time format

Before parsing a RFC 2822 date time the string is cleansed to remove any comments and/or newline characters. The additional characters are legal in the format but add nothing to creating a valid DateTime instance.

After cleansing, the string is validated in the following space-separated sections, all using the English language:

    6 Mar 17 21:22 UT
    6 Mar 17 21:22:23 UT
    6 Mar 2017 21:22:23 GMT
    06 Mar 2017 21:22:23 Z
    Mon 06 Mar 2017 21:22:23 z
    Mon, 06 Mar 2017 21:22:23 +0000

1.  Day of Week in three letters, followed by an optional comma. (optional)
2.  Day of Month (1 or 2 digit), followed by a three-letter month and 2 or 4 digit year
3.  Two-digit hours and minutes separated by a colon (:), followed optionally by another colon and seconds in 2-digits
4.  Timezone or offset in one of the following formats:

    1.  UT : +0000
    2.  GMT : +0000
    3.  EST | CST | MST | PST | EDT | CDT | MDT | PDT : US time zones*
    4.  A - I | K - Z : Military time zones*
    5.  Time offset +/-9999

    [*] See [section 4.3](https://tools.ietf.org/html/rfc2822#section-4.3) of the specification for details.

The parser also confirms that the day-of-week (when included) is consistent with the date.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/string-format/" name="/parsing/string-format/"></a>

<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime(String, String);
    new DateTime(year, month, day, hours, minutes, seconds, milliseconds);
   
</div>

If you know the format of an input string, you can use that to parse a DateTime.

    new DateTime("12-25-1995", "MM-DD-YYYY");

The parser ignores non-alphanumeric characters, so both of the following will return the same thing.

    new DateTime("12-25-1995", "MM-DD-YYYY");
    new DateTime("12/25/1995", "MM-DD-YYYY");

The parsing tokens are similar to the formatting tokens used in `DateTime#format`.

#### Year, month, and day tokens

<table>

<thead>

<tr>

<th>Input</th>

<th>Example</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>`YYYY`</td>

<td>`2014`</td>

<td>4 or 2 digit year</td>

</tr>

<tr>

<td>`YY`</td>

<td>`14`</td>

<td>2 digit year</td>

</tr>

<tr>

<td>`Y`</td>

<td>`-25`</td>

<td>Year with any number of digits and sign</td>

</tr>

<tr>

<td>`Q`</td>

<td>`1..4`</td>

<td>Quarter of year. Sets month to first month in quarter.</td>

</tr>

<tr>

<td>`M MM`</td>

<td>`1..12`</td>

<td>Month number</td>

</tr>

<tr>

<td>`MMM MMMM`</td>

<td>`Jan..December`</td>

<td>Month name in locale set by `DateTime.locale()`</td>

</tr>

<tr>

<td>`D DD`</td>

<td>`1..31`</td>

<td>Day of month</td>

</tr>

<tr>

<td>`Do`</td>

<td>`1st..31st`</td>

<td>Day of month with ordinal</td>

</tr>

<tr>

<td>`DDD DDDD`</td>

<td>`1..365`</td>

<td>Day of year</td>

</tr>

<tr>

<td>`X`</td>

<td>`1410715640.579`</td>

<td>Unix timestamp</td>

</tr>

<tr>

<td>`x`</td>

<td>`1410715640579`</td>

<td>Unix ms timestamp</td>

</tr>

</tbody>

</table>

`YYYY` from version **2.10.5** supports 2 digit years, and converts them to a year near 2000 (same as `YY`).

`Y` was added in **2.11.1**. It will match any number, signed or unsigned. It is useful for years that are not 4 digits or are before the common era. It can be used for any year.

#### Week year, week, and weekday tokens

For these, the lowercase tokens use the locale aware week start days, and the uppercase tokens use the [ISO week date](https://en.wikipedia.org/wiki/ISO_week_date) start days.

<table>

<thead>

<tr>

<th>Input</th>

<th>Example</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>`gggg`</td>

<td>`2014`</td>

<td>Locale 4 digit week year</td>

</tr>

<tr>

<td>`gg`</td>

<td>`14`</td>

<td>Locale 2 digit week year</td>

</tr>

<tr>

<td>`w ww`</td>

<td>`1..53`</td>

<td>Locale week of year</td>

</tr>

<tr>

<td>`e`</td>

<td>`0..6`</td>

<td>Locale day of week</td>

</tr>

<tr>

<td>`ddd dddd`</td>

<td>`Mon...Sunday`</td>

<td>Day name in locale set by `DateTime.Locale()`</td>

</tr>

<tr>

<td>`GGGG`</td>

<td>`2014`</td>

<td>ISO 4 digit week year</td>

</tr>

<tr>

<td>`GG`</td>

<td>`14`</td>

<td>ISO 2 digit week year</td>

</tr>

<tr>

<td>`W WW`</td>

<td>`1..53`</td>

<td>ISO week of year</td>

</tr>

<tr>

<td>`E`</td>

<td>`1..7`</td>

<td>ISO day of week</td>

</tr>

</tbody>

</table>

#### Hour, minute, second, millisecond, and offset tokens

<table>

<thead>

<tr>

<th>Input</th>

<th>Example</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>`H HH`</td>

<td>`0..23`</td>

<td>Hours (24 hour time)</td>

</tr>

<tr>

<td>`h hh`</td>

<td>`1..12`</td>

<td>Hours (12 hour time used with `a A`.)</td>

</tr>

<tr>

<td>`k kk`</td>

<td>`1..24`</td>

<td>Hours (24 hour time from 1 to 24)</td>

</tr>

<tr>

<td>`a A`</td>

<td>`am pm`</td>

<td>Post or ante meridiem (Note the one character `a p` are also considered valid)</td>

</tr>

<tr>

<td>`m mm`</td>

<td>`0..59`</td>

<td>Minutes</td>

</tr>

<tr>

<td>`s ss`</td>

<td>`0..59`</td>

<td>Seconds</td>

</tr>

<tr>

<td>`S SS SSS`</td>

<td>`0..999`</td>

<td>Fractional seconds</td>

</tr>

<tr>

<td>`Z ZZ`</td>

<td>`+12:00`</td>

<td>Offset from UTC as `+-HH:mm`, `+-HHmm`, or `Z`</td>

</tr>

</tbody>

</table>

 fractional second tokens length 4 up to 9 can parse any number of digits, but will only consider the top 3 (milliseconds). Use if you have the time printed with many fractional digits and want to consume the input.

Note that the number of `S` characters provided is only relevant when parsing in strict mode. In standard mode, `S`, `SS`, `SSS`, `SSSS` are all equivalent, and interpreted as fractions of a second. For example, `.12` is always 120 milliseconds, passing `SS` will not cause it to be interpreted as 12 milliseconds.

Locale aware date and time formats are also available using `LT LTS L LL LLL LLLL`. They were added in version **2.2.1**, except `LTS` which was added **2.8.4**.

`Z ZZ` were added in version **1.2.0**.

`S SS SSS` were added in version **1.6.0**.

`X` was added in version **2.0.0**.

`k kk` was added in version **2.18.0**

Unless you specify a time zone offset, parsing a string will create a date in the current time zone.

    new DateTime("2010-10-20 4:30",       "YYYY-MM-DD HH:mm");   
    new DateTime("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"); 

If the DateTime that results from the parsed input does not exist, `DateTime#isValid` will return false.

    new DateTime("2010 13",           "YYYY MM").isValid();     
    new DateTime("2010 11 31",        "YYYY MM DD").isValid();  
    new DateTime("2010 2 29",         "YYYY MM DD").isValid();  
    new DateTime("2010 notamonth 29", "YYYY MMM DD").isValid(); 

 a locale key can be passed as the third parameter to `new DateTime()` and `DateTime.utc()`.

    new DateTime('2012 juillet', 'YYYY MMM', 'fr');
    new DateTime('2012 July',    'YYYY MMM', 'en');

DateTime's parser is very forgiving, and this can lead to undesired/unexpected behavior.

For example, the following behavior can be observed:

    new DateTime('2016 is a date', 'YYYY-MM-DD').isValid() 

the parser exhibited the following behavior. This has been corrected.

    new DateTime('I am spartacus', 'h:hh A').isValid();     

you may specify a boolean for the last argument to make DateTime use strict parsing. Strict parsing requires that the format and input match exactly, _including delimeters_.

    new DateTime('It is 2012-05-25', 'YYYY-MM-DD').isValid();       
    new DateTime('It is 2012-05-25', 'YYYY-MM-DD', true).isValid(); 
    new DateTime('2012-05-25',       'YYYY-MM-DD', true).isValid(); 
    new DateTime('2012.05.25',       'YYYY-MM-DD', true).isValid(); 

You can use both locale and strictness.

    new DateTime('2012-10-14', 'YYYY-MM-DD', 'fr', true);

Strict parsing is frequently the best parsing option. For more information about choosing strict vs forgiving parsing, see the [parsing guide.](https://DateTimejs.com/guides/#/parsing/)

#### Parsing glued hour and minutes

 parsing `hmm`, `Hmm`, `hmmss` and `Hmmss` is supported:

    new DateTime("123", "hmm").toString("HH:mm") === "01:23"
    new DateTime("1234", "hmm").toString("HH:mm") === "12:34"

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/string-formats/" name="/parsing/string-formats/"></a>

### [String + Formats](#/parsing/string-formats/) <span>1.0.0+</span>


<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime(String, String[], String, Boolean);

</div>

If you don't know the exact format of an input string, but know it could be one of many, you can use an array of formats.

This is the same as [String + Format](#/parsing/string-format/), only it will try to match the input to multiple formats.

    new DateTime("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);

Starting in version **2.3.0**, DateTime uses some simple heuristics to determine which format to use. In order:

*   Prefer formats resulting in [valid](#/parsing/is-valid/) dates over invalid ones.
*   Prefer formats that parse more of the string than less and use more of the format than less, i.e. prefer stricter parsing.
*   Prefer formats earlier in the array than later.

    new DateTime("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"]); 
    new DateTime("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]);          

You may also specify a locale and strictness argument. They work the same as the single format case.

    new DateTime("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr');       
    new DateTime("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], true);       
    new DateTime("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', true); 

**Note:** Parsing multiple formats is considerably slower than parsing a single format. If you can avoid it, it is much faster to parse a single format.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/special-formats/" name="/parsing/special-formats/"></a>

### [Special Formats](#/parsing/special-formats/) 

<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime(String, DateTime.CUSTOM_FORMAT, [String], [Boolean]);
    new DateTime(String, DateTime.HTML_FMT.DATETIME_LOCAL, [String], [Boolean]); 
    new DateTime(String, [..., DateTime.ISO_8601, ...], [String], [Boolean]);

</div>

[ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) is a standard for time and duration display. DateTime already supports parsing iso-8601 strings, but this can be specified explicitly in the format/list of formats when constructing a DateTime.

To specify iso-8601 parsing use `DateTime.ISO_8601` constant.

    new DateTime("2010-01-01T05:06:07", DateTime.ISO_8601);
    new DateTime("2010-01-01T05:06:07", ["YYYY", DateTime.ISO_8601]);

the following HTML5 formats are available:

<table>

<thead>

<tr>

<th>Constant</th>

<th>Format</th>

<th>Example</th>

<th>Input Type</th>

</tr>

</thead>

<tbody>

<tr>

<td>`DateTime.HTML5_FMT.DATETIME_LOCAL`</td>

<td>`YYYY-MM-DDTHH:mm`</td>

<td>2017-12-14T16:34</td>

<td>`<input type="datetime-local" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.DATETIME_LOCAL_SECONDS`</td>

<td>`YYYY-MM-DDTHH:mm:ss`</td>

<td>2017-12-14T16:34:10</td>

<td>`<input type="datetime-local" step="1" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.DATETIME_LOCAL_MS`</td>

<td>`YYYY-MM-DDTHH:mm:ss.SSS`</td>

<td>2017-12-14T16:34:10.234</td>

<td>`<input type="datetime-local" step="0.001" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.DATE`</td>

<td>`YYYY-MM-DD`</td>

<td>2017-12-14</td>

<td>`<input type="date" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.TIME`</td>

<td>`HH:mm`</td>

<td>16:34</td>

<td>`<input type="time" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.TIME_SECONDS`</td>

<td>`HH:mm:ss`</td>

<td>16:34:10</td>

<td>`<input type="time" step="1" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.TIME_MS`</td>

<td>`HH:mm:ss.SSS`</td>

<td>16:34:10.234</td>

<td>`<input type="time" step="0.001" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.WEEK`</td>

<td>`YYYY-[W]WW`</td>

<td>2017-W50</td>

<td>`<input type="week" />`</td>

</tr>

<tr>

<td>`DateTime.HTML5_FMT.MONTH`</td>

<td>`YYYY-MM`</td>

<td>2017-12</td>

<td>`<input type="month" />`</td>

</tr>

</tbody>

</table>

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/object/" name="/parsing/object/"></a>

### [Object](#/parsing/object/)

<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime({unit: value, ...});

</div>

    new DateTime({ hour:15, minute:10 });
    new DateTime({ y    :2010, M     :3, d   :5, h    :15, m      :10, s      :3, ms          :123});
    new DateTime({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
    new DateTime({ years:2010, months:3, days:5, hours:15, minutes:10, seconds:3, milliseconds:123});
    new DateTime({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123});
    new DateTime({ years:'2010', months:'3', date:'5', hours:'15', minutes:'10', seconds:'3', milliseconds:'123'});  

You can create a DateTime by specifying some of the units in an object.

Omitted units default to 0 or the current date, month, and year.

`day` and `date` key both mean day-of-the-month.


Note that  `new Date(year, month, date)`, months are 0 indexed.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/unix-timestamp-milliseconds/" name="/parsing/unix-timestamp-milliseconds/"></a>

### [Unix Timestamp (milliseconds)](#/parsing/unix-timestamp-milliseconds/)

<div class="docs-method-prose">

Similar to `new Date(Number)`, you can create a DateTime by passing an integer value representing the number of _milliseconds_ since the Unix Epoch (Jan 1 1970 12AM UTC).

    var day = new DateTime(1318781876406);

[Note: ECMAScript calls this a "Time Value"](https://www.ecma-international.org/ecma-262/6.0/#sec-time-values-and-time-range)

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/unix-timestamp/" name="/parsing/unix-timestamp/"></a>

### [Unix Timestamp (seconds)](#/parsing/unix-timestamp/) 
<div class="docs-method-prose">

To create a DateTime from a Unix timestamp (_seconds_ since the Unix Epoch), use `DateTime.unix(Number)`.

    var day = DateTime.unix(1318781876);

This is implemented as `new DateTime(timestamp * 1000)`, so partial seconds in the input timestamp are included.

    var day = DateTime.unix(1318781876.721);

**Note:** Despite Unix timestamps being UTC-based, this function creates a DateTime object in _local_ mode. If you need UTC, then subsequently call `.utc()`, as in:

    var day = DateTime.unix(1318781876).utc();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/date/" name="/parsing/date/"></a>

### [Date](#/parsing/date/)
<div class="docs-method-prose">

You can create a `DateTime` with a pre-existing native Javascript `Date` object.

    var day = new Date(2011, 9, 16);
    var dayWrapper = new DateTime(day);

This clones the `Date` object; further changes to the `Date` won't affect the `DateTime`, and vice-versa.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/asp-net-json-date/" name="/parsing/asp-net-json-date/"></a>

### [ASP.NET JSON Date](#/parsing/asp-net-json-date/)
<div class="docs-method-prose">

Microsoft Web API returns JSON dates in proper ISO-8601 format by default, but older ASP.NET technologies may return dates in JSON as `/Date(1198908717056)/` or `/Date(1198908717056-0700)/`

If a string that matches this format is passed in, it will be parsed correctly.

    new DateTime("/Date(1198908717056-0700)/"); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/DateTime-clone/" name="/parsing/DateTime-clone/"></a>

### [DateTime Clone](#/parsing/DateTime-clone/)
<div class="docs-method-prose">

All DateTimes are mutable. If you want a clone of a DateTime, you can do so implicitly or explicitly.

Calling `new DateTime()` on a DateTime will clone it.

    var a = new DateTime(2012);
    var b = new DateTime(a);
    a.year(2000);
    b.year(); 

Additionally, you can call `DateTime#clone` to clone a DateTime.

    var a = new DateTime(2012);
    var b = a.clone();
    a.year(2000);
    b.year(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/utc/" name="/parsing/utc/"></a>

### [UTC](#/parsing/utc/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.utc();
    DateTime.utc(Number);
    DateTime.utc(Number[]);
    DateTime.utc(String);
    DateTime.utc(String, String);
    DateTime.utc(String, String[]);
    DateTime.utc(String, String, String);
    DateTime.utc(String, String, Boolean);
    DateTime.utc(String, String, String, Boolean);
    DateTime.utc(DateTime);
    DateTime.utc(Date);

</div>

By default, DateTime parses and displays in local time.

If you want to parse or display a DateTime in UTC, you can use `DateTime.utc()` instead of `new DateTime()`.

This brings us to an interesting feature of DateTime.js. UTC mode.

While in UTC mode, all display methods will display in UTC time instead of local time.

    new DateTime().toString();     
    DateTime.utc().toString(); 

Additionally, while in UTC mode, all getters and setters will internally use the `Date#getUTC*` and `Date#setUTC*` methods instead of the `Date#get*` and `Date#set*` methods.

    DateTime.utc().seconds(30).valueOf() === new Date().setUTCSeconds(30);
    DateTime.utc().seconds()   === new Date().getUTCSeconds();

It is important to note that though the displays differ above, they are both the same DateTime in time.

    var a = new DateTime();
    var b = DateTime.utc();
    a.toString();  
    b.toString(); 

Any DateTime created with `DateTime.utc()` will be in UTC mode, and any DateTime created with `new DateTime()` will not.

To switch from UTC to local time, you can use [DateTime#utc](#/manipulating/utc/) or [DateTime#local](#/manipulating/local/).

    var a = DateTime.utc([2011, 0, 1, 8]);
    a.hours(); 
    a.local();
    a.hours(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/parse-zone/" name="/parsing/parse-zone/"></a>

### [parseZone](#/parsing/parse-zone/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.parseZone()
    DateTime.parseZone(String)
    DateTime.parseZone(String, String)
    DateTime.parseZone(String, [String])
    DateTime.parseZone(String, String, Boolean)
    DateTime.parseZone(String, String, String, Boolean)

</div>

DateTime's string parsing functions like `new DateTime(string)` and `DateTime.utc(string)` accept offset information if provided, but convert the resulting DateTime object to local or UTC time. In contrast, `DateTime.parseZone()` parses the string but keeps the resulting DateTime object in a fixed-offset timezone with the provided offset in the string.

    DateTime.parseZone("2013-01-01T00:00:00-13:00").utcOffset(); 
    DateTime.parseZone('2013 01 01 05 -13:00', 'YYYY MM DD HH ZZ').utcOffset(); 
    DateTime.parseZone('2013-01-01-13:00', ['DD MM YYYY ZZ', 'YYYY MM DD ZZ']).utcOffset(); 

It also allows you to pass locale and strictness arguments.

    DateTime.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', true).utcOffset(); 
    DateTime.parseZone("2013-01-01-13:00", 'YYYY MM DD ZZ', true).utcOffset(); 
    DateTime.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', 'fr', true).utcOffset(); 
    DateTime.parseZone("2013 01 01 -13:00", ['DD MM YYYY ZZ', 'YYYY MM DD ZZ'], 'fr', true).utcOffset(); 

`DateTime.parseZone` is equivalent to parsing the string and using `DateTime#utcOffset` to parse the zone.

    var s = "2013-01-01T00:00:00-13:00";
    new DateTime(s).utcOffset(s);

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/is-valid/" name="/parsing/is-valid/"></a>

### [Validation](#/parsing/is-valid/) 
<div class="docs-method-prose">

DateTime applies stricter initialization rules than the `Date` constructor.

    new Date(2013, 25, 14).toString(); 
    new DateTime([2015, 25, 35]).toString();   

You can check whether the DateTime considers the date invalid using `DateTime#isValid`. You can check the metrics used by `#isValid` using `DateTime#parsingFlags`, which returns an object.

The following parsing flags result in an invalid date:

*   `overflow`: An overflow of a date field, such as a 13th month, a 32nd day of the month (or a 29th of February on non-leap years), a 367th day of the year, etc. `overflow` contains the index of the invalid unit to match `#invalidAt` (see below); `-1` means no overflow.
*   `invalidMonth`: An invalid month name, such as `new DateTime('Marbruary', 'MMMM');`. Contains the invalid month string itself, or else null.
*   `empty`: An input string that contains nothing parsable, such as `new DateTime('this is nonsense');`. Boolean.
*   `nullInput`: A `null` input, like `new DateTime(null);`. Boolean.
*   `invalidFormat`: An empty list of formats, such as `new DateTime('2013-05-25', [])`. Boolean.
*   `userInvalidated`: A date created explicitly as invalid, such as `DateTime.invalid()`. Boolean.

    In addition to the above, the meridiem and parsedDateParts flags work together to determine date validity.

*   `meridiem`: Indicates what meridiem (AM/PM) was parsed, if any. String.
*   `parsedDateParts`: Returns an array of date parts parsed in descending order - i.e. parsedDateParts[0] === year. If no parts are present, but meridiem has value, date is invalid. Array.

Additionally, if the DateTime is parsed in strict mode, these flags must be empty for the DateTime to be valid:

*   `unusedTokens`: array of format substrings not found in the input string
*   `unusedInput`: array of input substrings not matched to the format string

Additionally, you can use `DateTime#invalidAt` to determine which date unit overflowed.

    var m = new DateTime("2011-10-10T10:20:90");
    m.isValid(); 
    m.invalidAt(); 

The return value has the following meaning:

1.  years
2.  months
3.  days
4.  hours
5.  minutes
6.  seconds
7.  milliseconds

**Note:** In case of multiple wrong units the first one is returned (because days validity may depend on month, for example).

If a DateTime is invalid, it behaves like a NaN in floating point operations.

All of the following produce invalid DateTimes:

*   `invalid.add(unit, value)`
*   `another.add(invalid)`
*   `invalid.clone()`
*   `invalid.diff(another)`
*   `invalid.endOf(unit)`
*   `invalid.max(another)`
*   `another.max(invalid)`
*   `invalid.min(another)`
*   `another.min(invalid)`
*   `invalid.set(unit, value)`
*   `invalid.startOf(unit)`
*   `invalid.subtract(unit, value)`

The following produce a localized version of `'InvalidDate'`:

*   `invalid.toString(anyFmt)` results in `'Invalid Date'` in the current locale
*   `invalid.from(another)`
*   `another.from(invalid)`
*   `invalid.fromNow(suffix)`
*   `invalid.to(another)`
*   `another.to(invalid)`
*   `invalid.toNow(suffix)`
*   `invalid.toISOString()`
*   `invalid.toString()`

The following return `false`:

*   `invalid.isAfter(another)`
*   `another.isAfter(invalid)`
*   `invalid.isBefore(another)`
*   `another.isBefore(invalid)`
*   `invalid.isBetween(another, another)`
*   `invalid.isSame(another)`
*   `another.isSame(invalid)`
*   `invalid.isSameOrAfter(another)`
*   `another.isSameOrAfter(invalid)`
*   `invalid.isSameOrBefore(another)`
*   `another.isSameOrBefore(invalid)`

And these return `null` or `NaN` with some structure:

*   `invalid.get(unit)` returns null, as all other named getters
*   `invalid.toArray() === [NaN, NaN, NaN, NaN, NaN, NaN]`
*   `invalid.toObject()` has all values set to `NaN`
*   `invalid.toDate()` returns an invalid Date object
*   `invalid.toJSON()` returns null
*   `invalid.unix()` returns null
*   `invalid.valueOf()` returns null

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/defaults/" name="/parsing/defaults/"></a>

### [Defaults](#/parsing/defaults/)
<div class="docs-method-prose">

You can create a DateTime object specifying only some of the units, and the rest will be defaulted to the current day, month or year, or 0 for hours, minutes, seconds and milliseconds.

Defaulting to now, when nothing is passed:

    new DateTime();  

Defaulting to today, when only hours, minutes, seconds and milliseconds are passed:

    new DateTime(5, "HH");  
    new DateTime({hour: 5});  
    new DateTime({hour: 5, minute: 10});  
    new DateTime({hour: 5, minute: 10, seconds: 20});  
    new DateTime({hour: 5, minute: 10, seconds: 20, milliseconds: 300});  

Defaulting to this month and year, when only days and smaller units are passed:

    new DateTime(5, "DD");  
    new DateTime("4 05:06:07", "DD hh:mm:ss");  

Defaulting to this year, if year is not specified:

    new DateTime(3, "MM");  
    new DateTime("Apr 4 05:06:07", "MMM DD hh:mm:ss");  

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/get-set/" name="/get-set/"></a>

## [Get + Set](#/get-set/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/intro/" name="/get-set/intro/"></a>

<div class="docs-method-prose">

DateTime.js uses overloaded getters and setters. You may be familiar with this pattern from its use in jQuery.

Calling these methods without parameters acts as a getter, and calling them with a parameter acts as a setter.

These map to the corresponding function on the native `Date` object.

    new DateTime().seconds()   === new Date().getSeconds();

If you are in [UTC mode](#/manipulating/utc/), they will map to the UTC equivalent.

    DateTime.utc().seconds()   === new Date().getUTCSeconds();

For convenience, both singular and plural method names exist as of version **2.0.0**.

**Note:** All of these methods mutate the original DateTime when used as setters.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/millisecond/" name="/get-set/millisecond/"></a>

### [Millisecond](#/get-set/millisecond/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

   new DateTime().milliseconds(Number);
    new DateTime().milliseconds(); 

</div>

Gets or sets the milliseconds.

Accepts numbers from 0 to 999\. If the range is exceeded, it will bubble up to the seconds.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/second/" name="/get-set/second/"></a>

### [Seconds](#/get-set/second/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().seconds(Number);
    new DateTime().seconds(); 

</div>

Gets or sets the seconds.

Accepts numbers from 0 to 59\. If the range is exceeded, it will bubble up to the minutes.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/minute/" name="/get-set/minute/"></a>

### [Minutes](#/get-set/minute/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().minutes(Number);
    new DateTime().minutes(); 

</div>

Gets or sets the minutes.

Accepts numbers from 0 to 59\. If the range is exceeded, it will bubble up to the hour.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/hour/" name="/get-set/hour/"></a>

### [Hours](#/get-set/hour/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().hours(Number);
    new DateTime().hours(); 

</div>

Gets or sets the hour.

Accepts numbers from 0 to 23\. If the range is exceeded, it will bubble up to the day.

</div>

</article>



<article class="docs-method"><a class="docs-method-target" id="/get-set/day/" name="/get-set/day/"></a>

### [Day of Week](#/get-set/day/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

   new DateTime().days(Number|String);
    new DateTime().days(); 

</div>

Gets or sets the day of the week.

This method can be used to set the day of the week, with Sunday as 0 and Saturday as 6.

If the range is exceeded, it will bubble up to other weeks.

    new DateTime().day(-7); 
    new DateTime().day(7); 
    new DateTime().day(10); 
    new DateTime().day(24); 

**Note:** `DateTime#date` is for the date of the month, and `DateTime#day` is for the day of the week.

a day name is also supported. This is parsed in the DateTime's current locale.

    new DateTime().day("Sunday");
    new DateTime().day("Monday");

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/weekday/" name="/get-set/weekday/"></a>

### [Day of Week (Locale Aware)](#/get-set/weekday/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().weekday(Number);
    new DateTime().weekday(); 

</div>

Gets or sets the day of the week according to the locale.

If the locale assigns Monday as the first day of the week, `new DateTime().weekday(0)` will be Monday. If Sunday is the first day of the week, `new DateTime().weekday(0)` will be Sunday.

As with `DateTime#day`, if the range is exceeded, it will bubble up to other weeks.

    new DateTime().weekday(-7); 
    new DateTime().weekday(7); 

    new DateTime().weekday(-7); 
    new DateTime().weekday(7); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-weekday/" name="/get-set/iso-weekday/"></a>

### [ISO Day of Week](#/get-set/iso-weekday/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isoWeekday(Number);
    new DateTime().isoWeekday(); 

</div>

Gets or sets the [ISO day of the week](https://en.wikipedia.org/wiki/ISO_week_date) with `1` being Monday and `7` being Sunday.

As with `DateTime#day`, if the range is exceeded, it will bubble up to other weeks.

    new DateTime().isoWeekday(1); 
    new DateTime().isoWeekday(7); 

A day name is also supported. This is parsed in the DateTime's current locale.

    new DateTime().isoWeekday("Sunday");
    new DateTime().isoWeekday("Monday");

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/day-of-year/" name="/get-set/day-of-year/"></a>

### [Day of Year](#/get-set/day-of-year/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().dayOfYear(Number);
    new DateTime().dayOfYear(); 

</div>

Gets or sets the day of the year.

Accepts numbers from 1 to 366\. If the range is exceeded, it will bubble up to the years.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/week/" name="/get-set/week/"></a>

### [Week of Year](#/get-set/week/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().week(Number);
    new DateTime().week(); 
    new DateTime().weeks(Number);
    new DateTime().weeks(); 

</div>

Gets or sets the week of the year.

Because different locales define week of year numbering differently, DateTime.js added `DateTime#week` to get/set the localized week of the year.

The week of the year varies depending on which day is the first day of the week (Sunday, Monday, etc), and which week is the first week of the year.

For example, in the United States, Sunday is the first day of the week. The week with January 1st in it is the first week of the year.

In France, Monday is the first day of the week, and the week with January 4th is the first week of the year.

The output of `DateTime#week` will depend on the [locale](#/i18n) for that DateTime.

When setting the week of the year, the day of the week is retained.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-week/" name="/get-set/iso-week/"></a>

### [Week of Year (ISO)](#/get-set/iso-week/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isoWeek(Number);
    new DateTime().isoWeek(); 
    new DateTime().isoWeeks(Number);
    new DateTime().isoWeeks(); 

</div>

Gets or sets the [ISO week of the year](https://en.wikipedia.org/wiki/ISO_week_date).

When setting the week of the year, the day of the week is retained.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/month/" name="/get-set/month/"></a>

### [Month](#/get-set/month/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().month(Number|String);
    new DateTime().month(); 
  
</div>

Gets or sets the month.

Accepts numbers from 0 to 11\. If the range is exceeded, it will bubble up to the year.

**Note:** Months are zero indexed, so January is month 0.

 a month name is also supported. This is parsed in the DateTime's current locale.

    new DateTime().month("January");
    new DateTime().month("Feb");

    new DateTime(2012, 0, 31).month(1).toString("YYYY-MM-DD"); 

    new DateTime(2012, 0, 31).month(1).toString("YYYY-MM-DD"); 

</div>

</article>



<article class="docs-method"><a class="docs-method-target" id="/get-set/year/" name="/get-set/year/"></a>

### [Year](#/get-set/year/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().year(Number);
    new DateTime().year(); 
 
</div>

Gets or sets the year.

Accepts numbers from -270,000 to 270,000.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/week-year/" name="/get-set/week-year/"></a>

### [Week Year](#/get-set/week-year/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().weekYear(Number);
    new DateTime().weekYear(); 

</div>

Gets or sets the week-year according to the locale.

Because the first day of the first week does not always fall on the first day of the year, sometimes the week-year will differ from the month year.

For example, in the US, the week that contains Jan 1 is always the first week. In the US, weeks also start on Sunday. If Jan 1 was a Monday, Dec 31 would belong to the same week as Jan 1, and thus the same week-year as Jan 1\. Dec 30 would have a different week-year than Dec 31.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-week-year/" name="/get-set/iso-week-year/"></a>

### [Week Year (ISO)](#/get-set/iso-week-year/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isoWeekYear(Number);
    new DateTime().isoWeekYear(); 

</div>

Gets or sets the [ISO week-year](https://en.wikipedia.org/wiki/ISO_week_date).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/weeks-in-year/" name="/get-set/weeks-in-year/"></a>

### [Weeks In Year](#/get-set/weeks-in-year/) 
<div class="docs-method-prose">

Gets the number of weeks according to locale in the current DateTime's year.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-weeks-in-year/" name="/get-set/iso-weeks-in-year/"></a>

### [Weeks In Year (ISO)](#/get-set/iso-weeks-in-year/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isoWeeksInYear();

</div>

Gets the number of weeks in the current DateTime's year, according to [ISO weeks](https://en.wikipedia.org/wiki/ISO_week_date).

</div>

</article>





<article class="docs-method"><a class="docs-method-target" id="/manipulating/add/" name="/manipulating/add/"></a>

### [Add](#/manipulating/add/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().add(Number, String);
    new DateTime().add(Duration);
    new DateTime().add(Object);

</div>

Mutates the original DateTime by adding time.

This is a pretty robust function for adding time to an existing DateTime. To add time, pass the key of what time you want to add, and the amount you want to add.

    new DateTime().add(7, 'days');

There are some shorthand keys as well if you're into that whole brevity thing.

    new DateTime().add(7, 'd');

<table class="table table-striped table-bordered">

<tbody>

<tr>

<th>Key</th>

<th>Shorthand</th>

</tr>

<tr>

<td>years</td>

<td>y</td>

</tr>

<tr>

<td>quarters</td>

<td>Q</td>

</tr>

<tr>

<td>months</td>

<td>M</td>

</tr>

<tr>

<td>weeks</td>

<td>w</td>

</tr>

<tr>

<td>days</td>

<td>d</td>

</tr>

<tr>

<td>hours</td>

<td>h</td>

</tr>

<tr>

<td>minutes</td>

<td>m</td>

</tr>

<tr>

<td>seconds</td>

<td>s</td>

</tr>

<tr>

<td>milliseconds</td>

<td>ms</td>

</tr>

</tbody>

</table>

If you want to add multiple different keys at the same time, you can pass them in as an object literal.

    new DateTime().add(7, 'days').add(1, 'months'); 
    new DateTime().add({days:7,months:1}); 

There are no upper limits for the amounts, so you can overload any of the parameters.

    new DateTime().add(1000000, 'milliseconds'); 
    new DateTime().add(360, 'days'); 

#### Special considerations for months and years

If the day of the month on the original date is greater than the number of days in the final month, the day of the month will change to the last day in the final month.

    new DateTime([2010, 0, 31]);                  
    new DateTime([2010, 0, 31]).add(1, 'months'); 

There are also special considerations to keep in mind when adding time that crosses over daylight saving time. If you are adding years, months, weeks, or days, the original hour will always match the added hour.

    var m = new DateTime(new Date(2011, 2, 12, 5, 0, 0)); 
    m.hours(); 
    m.add(1, 'days').hours(); 

If you are adding hours, minutes, seconds, or milliseconds, the assumption is that you want precision to the hour, and will result in a different hour.

    var m = new DateTime(new Date(2011, 2, 12, 5, 0, 0)); 
    m.hours(); 
    m.add(24, 'hours').hours(); 

Alternatively, you can use [durations](#/durations/) to add to DateTimes.

    var duration = DateTime.duration({'days' : 1});
    new DateTime([2012, 0, 31]).add(duration); 

Before version **2.8.0**, the `DateTime#add(String, Number)` syntax was also supported. It has been deprecated in favor of `DateTime#add(Number, String)`.

    new DateTime().add('seconds', 1); 
    new DateTime().add(1, 'seconds');

As of **2.12.0** when decimal values are passed for days and months, they are rounded to the nearest integer. Weeks, quarters, and years are converted to days or months, and then rounded to the nearest integer.

    new DateTime().add(1.5, 'months') == new DateTime().add(2, 'months')
    new DateTime().add(.7, 'years') == new DateTime().add(8, 'months') 

</div>

</article>



<article class="docs-method"><a class="docs-method-target" id="/displaying/format/" name="/displaying/format/"></a>

### [toString](#/displaying/format/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().toString();
    new DateTime().toString(String);

</div>

This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.

    new DateTime().toString();                                
    new DateTime().toString("dddd, MMMM Do YYYY, h:mm:ss a"); 
    new DateTime().toString("ddd, hA");         

<table class="table table-striped table-bordered">

<tbody>

<tr>

<th></th>

<th>Token</th>

<th>Output</th>

</tr>

<tr>

<td>**Month**</td>

<td>M</td>

<td>1 2 ... 11 12</td>

</tr>

<tr>

<td></td>

<td>Mo</td>

<td>1st 2nd ... 11th 12th</td>

</tr>

<tr>

<td></td>

<td>MM</td>

<td>01 02 ... 11 12</td>

</tr>

<tr>

<td></td>

<td>MMM</td>

<td>Jan Feb ... Nov Dec</td>

</tr>

<tr>

<td></td>

<td>MMMM</td>

<td>January February ... November December</td>

</tr>

<tr>

<td>**Quarter**</td>

<td>Q</td>

<td>1 2 3 4</td>

</tr>

<tr>

<td></td>

<td>Qo</td>

<td>1st 2nd 3rd 4th</td>

</tr>

<tr>

<td>**Day of Month**</td>

<td>D</td>

<td>1 2 ... 30 31</td>

</tr>

<tr>

<td></td>

<td>Do</td>

<td>1st 2nd ... 30th 31st</td>

</tr>

<tr>

<td></td>

<td>DD</td>

<td>01 02 ... 30 31</td>

</tr>

<tr>

<td>**Day of Year**</td>

<td>DDD</td>

<td>1 2 ... 364 365</td>

</tr>

<tr>

<td></td>

<td>DDDo</td>

<td>1st 2nd ... 364th 365th</td>

</tr>

<tr>

<td></td>

<td>DDDD</td>

<td>001 002 ... 364 365</td>

</tr>

<tr>

<td>**Day of Week**</td>

<td>d</td>

<td>0 1 ... 5 6</td>

</tr>

<tr>

<td></td>

<td>do</td>

<td>0th 1st ... 5th 6th</td>

</tr>

<tr>

<td></td>

<td>dd</td>

<td>Su Mo ... Fr Sa</td>

</tr>

<tr>

<td></td>

<td>ddd</td>

<td>Sun Mon ... Fri Sat</td>

</tr>

<tr>

<td></td>

<td>dddd</td>

<td>Sunday Monday ... Friday Saturday</td>

</tr>

<tr>

<td>**Day of Week (Locale)**</td>

<td>e</td>

<td>0 1 ... 5 6</td>

</tr>

<tr>

<td>**Day of Week (ISO)**</td>

<td>E</td>

<td>1 2 ... 6 7</td>

</tr>

<tr>

<td>**Week of Year**</td>

<td>w</td>

<td>1 2 ... 52 53</td>

</tr>

<tr>

<td></td>

<td>wo</td>

<td>1st 2nd ... 52nd 53rd</td>

</tr>

<tr>

<td></td>

<td>ww</td>

<td>01 02 ... 52 53</td>

</tr>

<tr>

<td>**Week of Year (ISO)**</td>

<td>W</td>

<td>1 2 ... 52 53</td>

</tr>

<tr>

<td></td>

<td>Wo</td>

<td>1st 2nd ... 52nd 53rd</td>

</tr>

<tr>

<td></td>

<td>WW</td>

<td>01 02 ... 52 53</td>

</tr>

<tr>

<td>**Year**</td>

<td>YY</td>

<td>70 71 ... 29 30</td>

</tr>

<tr>

<td></td>

<td>YYYY</td>

<td>1970 1971 ... 2029 2030</td>

</tr>

<tr>

<td></td>

<td>Y</td>

<td>1970 1971 ... 9999 +10000 +10001  
**Note:** This complies with the ISO 8601 standard for dates past the year 9999</td>

</tr>

<tr>

<td>**Week Year**</td>

<td>gg</td>

<td>70 71 ... 29 30</td>

</tr>

<tr>

<td></td>

<td>gggg</td>

<td>1970 1971 ... 2029 2030</td>

</tr>

<tr>

<td>**Week Year (ISO)**</td>

<td>GG</td>

<td>70 71 ... 29 30</td>

</tr>

<tr>

<td></td>

<td>GGGG</td>

<td>1970 1971 ... 2029 2030</td>

</tr>

<tr>

<td>**AM/PM**</td>

<td>A</td>

<td>AM PM</td>

</tr>

<tr>

<td></td>

<td>a</td>

<td>am pm</td>

</tr>

<tr>

<td>**Hour**</td>

<td>H</td>

<td>0 1 ... 22 23</td>

</tr>

<tr>

<td></td>

<td>HH</td>

<td>00 01 ... 22 23</td>

</tr>

<tr>

<td></td>

<td>h</td>

<td>1 2 ... 11 12</td>

</tr>

<tr>

<td></td>

<td>hh</td>

<td>01 02 ... 11 12</td>

</tr>

<tr>

<td></td>

<td>k</td>

<td>1 2 ... 23 24</td>

</tr>

<tr>

<td></td>

<td>kk</td>

<td>01 02 ... 23 24</td>

</tr>

<tr>

<td>**Minute**</td>

<td>m</td>

<td>0 1 ... 58 59</td>

</tr>

<tr>

<td></td>

<td>mm</td>

<td>00 01 ... 58 59</td>

</tr>

<tr>

<td>**Second**</td>

<td>s</td>

<td>0 1 ... 58 59</td>

</tr>

<tr>

<td></td>

<td>ss</td>

<td>00 01 ... 58 59</td>

</tr>

<tr>

<td>**Fractional Second**</td>

<td>S</td>

<td>0 1 ... 8 9</td>

</tr>

<tr>

<td></td>

<td>SS</td>

<td>00 01 ... 98 99</td>

</tr>

<tr>

<td></td>

<td>SSS</td>

<td>000 001 ... 998 999</td>

</tr>

<tr>

<td></td>

<td>SSSS ... SSSSSSSSS</td>

<td>000[0..] 001[0..] ... 998[0..] 999[0..]</td>

</tr>

<tr>

<td>**Time Zone**</td>

<td>z or zz</td>

<td>EST CST ... MST PST  
**Note:** as of **1.6.0**, the z/zz format tokens have been deprecated from plain DateTime objects. [Read more about it here.](https://github.com/DateTime/DateTime/issues/162) However, they _do_ work if you are using a specific time zone with the DateTime-timezone addon.</td>

</tr>

<tr>

<td></td>

<td>Z</td>

<td>-07:00 -06:00 ... +06:00 +07:00</td>

</tr>

<tr>

<td></td>

<td>ZZ</td>

<td>-0700 -0600 ... +0600 +0700</td>

</tr>

<tr>

<td>**Unix Timestamp**</td>

<td>X</td>

<td>1360013296</td>

</tr>

<tr>

<td>**Unix Millisecond Timestamp**</td>

<td>x</td>

<td>1360013296123</td>

</tr>

</tbody>

</table>

#### Localized formats

Because preferred formatting differs based on locale, there are a few tokens that can be used to format a DateTime based on its locale.

There are upper and lower case variations on the same formats. The lowercase version is intended to be the shortened version of its uppercase counterpart.

<table class="table table-striped table-bordered">

<tbody>

<tr>

<td>**Time**</td>

<td>LT</td>

<td>8:30 PM</td>

</tr>

<tr>

<td>**Time with seconds**</td>

<td>LTS</td>

<td>8:30:25 PM</td>

</tr>

<tr>

<td>**Month numeral, day of month, year**</td>

<td>L</td>

<td>09/04/1986</td>

</tr>

<tr>

<td></td>

<td>l</td>

<td>9/4/1986</td>

</tr>

<tr>

<td>**Month name, day of month, year**</td>

<td>LL</td>

<td>September 4, 1986</td>

</tr>

<tr>

<td></td>

<td>ll</td>

<td>Sep 4, 1986</td>

</tr>

<tr>

<td>**Month name, day of month, year, time**</td>

<td>LLL</td>

<td>September 4, 1986 8:30 PM</td>

</tr>

<tr>

<td></td>

<td>lll</td>

<td>Sep 4, 1986 8:30 PM</td>

</tr>

<tr>

<td>**Month name, day of month, day of week, year, time**</td>

<td>LLLL</td>

<td>Thursday, September 4, 1986 8:30 PM</td>

</tr>

<tr>

<td></td>

<td>llll</td>

<td>Thu, Sep 4, 1986 8:30 PM</td>

</tr>

</tbody>

</table>

`L LL LLL LLLL LT` are available in version **1.3.0**. `l ll lll llll` are available in **2.0.0**. `LTS` was added in **2.8.4**.

#### Escaping characters

To escape characters in format strings, you can wrap the characters in square brackets.

    new DateTime().toString('[today] dddd'); 

#### Similarities and differences with LDML

**Note:** While these date formats are very similar to LDML date formats, there are a few minor differences regarding day of month, day of year, and day of week.

For a breakdown of a few different date formatting tokens across different locales, see [this chart of date formatting tokens.](https://docs.google.com/spreadsheet/ccc?key=0AtgZluze7WMJdDBOLUZfSFIzenIwOHNjaWZoeGFqbWc&hl=en_US#gid=0)

#### Formatting speed

To compare DateTime.js formatting speed against other libraries, check out [this comparison against other libraries](https://jsperf.com/date-formatting/49).

#### Other tokens

If you are more comfortable working with strftime instead of LDML-like parsing tokens, you can use Ben Oakes' plugin. [benjaminoakes/DateTime-strftime](https://github.com/benjaminoakes/DateTime-strftime).

#### Default format

calling `DateTime#format` without a format will default to `DateTime.defaultFormat`. Out of the box, `DateTime.defaultFormat` is the ISO8601 format `YYYY-MM-DDTHH:mm:ssZ`.

 when in UTC mode, the default format is governed by `DateTime.defaultFormatUtc` which is in the format `YYYY-MM-DDTHH:mm:ss[Z]`. This returns `Z` as the offset, instead of `+00:00`.

In certain instances, a local timezone (such as `Atlantic/Reykjavik`) may have a zero offset, and will be considered to be UTC. In such cases, it may be useful to set `DateTime.defaultFormat` and `DateTime.defaultFormatUtc` to use the same formatting.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/from/" name="/displaying/from/"></a>

### [Time from X](#/displaying/from/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().from(DateTime|String|Number|Date|Array);
    new DateTime().from(DateTime|String|Number|Date|Array, Boolean);

</div>

You may want to display a DateTime in relation to a time other than now. In that case, you can use `DateTime#from`.

    var a = new DateTime([2007, 0, 28]);
    var b = new DateTime([2007, 0, 29]);
    a.from(b) 

The first parameter is anything you can pass to `new DateTime()` or an actual `DateTime`.

    var a = new DateTime([2007, 0, 28]);
    var b = new DateTime([2007, 0, 29]);
    a.from(b);                     
    a.from([2007, 0, 29]);         
    a.from(new Date(2007, 0, 29)); 
    a.from("2007-01-29");          

Like `DateTime#fromNow`, passing `true` as the second parameter returns value without the suffix. This is useful wherever you need to have a human readable length of time.

    var start = new DateTime([2007, 0, 5]);
    var end   = new DateTime([2007, 0, 10]);
    end.from(start);       
    end.from(start, true); 

From version **2.10.3**, if any of the endpoints are invalid the result is the localized Invalid date string.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/tonow/" name="/displaying/tonow/"></a>

### [Time to now](#/displaying/tonow/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().toNow();
    new DateTime().toNow(Boolean);

</div>

A common way of displaying time is handled by `DateTime#toNow`. This is sometimes called timeago or relative time.

This is similar to [`DateTime.fromNow`](https://DateTimejs.com/docs/#/displaying/fromnow/), but gives the opposite interval: `a.fromNow() = - a.toNow()`.

This is similar to [`DateTime.to`](https://DateTimejs.com/docs/#/displaying/to/), but is special-cased for the current time. Use `DateTime.to`, if you want to control the two end points of the interval.

    new DateTime([2007, 0, 29]).toNow(); 

If you pass `true`, you can get the value without the prefix.

    new DateTime([2007, 0, 29]).toNow();     
    new DateTime([2007, 0, 29]).toNow(true); 

The base strings are [customized by the current locale](#/customization/relative-time/).

The breakdown of which string is displayed for each length of time is outlined in the table below.

<table class="table table-striped table-bordered">

<thead>

<tr>

<th>Range</th>

<th>Key</th>

<th>Sample Output</th>

</tr>

</thead>

<tbody>

<tr>

<td>0 to 44 seconds</td>

<td>s</td>

<td>in seconds</td>

</tr>

<tr>

<td>45 to 89 seconds</td>

<td>m</td>

<td>in a minute</td>

</tr>

<tr>

<td>90 seconds to 44 minutes</td>

<td>mm</td>

<td>in 2 minutes ... in 44 minutes</td>

</tr>

<tr>

<td>45 to 89 minutes</td>

<td>h</td>

<td>in an hour</td>

</tr>

<tr>

<td>90 minutes to 21 hours</td>

<td>hh</td>

<td>in 2 hours ... in 21 hours</td>

</tr>

<tr>

<td>22 to 35 hours</td>

<td>d</td>

<td>in a day</td>

</tr>

<tr>

<td>36 hours to 25 days</td>

<td>dd</td>

<td>in 2 days ... in 25 days</td>

</tr>

<tr>

<td>26 to 45 days</td>

<td>M</td>

<td>in a month</td>

</tr>

<tr>

<td>45 to 319 days</td>

<td>MM</td>

<td>in 2 months ... in 10 months</td>

</tr>

<tr>

<td>320 to 547 days (1.5 years)</td>

<td>y</td>

<td>in a year</td>

</tr>

<tr>

<td>548 days+</td>

<td>yy</td>

<td>in 2 years ... in 20 years</td>

</tr>

</tbody>

</table>

From version **2.10.3**, if the target DateTime object is invalid the result is the localized Invalid date string.

</div>

</article>



<article class="docs-method"><a class="docs-method-target" id="/displaying/difference/" name="/displaying/difference/"></a>

### [Difference](#/displaying/difference/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().diff(DateTime|String|Number|Date|Array);
    new DateTime().diff(DateTime|String|Number|Date|Array, String);
    new DateTime().diff(DateTime|String|Number|Date|Array, String, Boolean);

</div>

To get the difference in milliseconds, use `DateTime#diff` like you would use `DateTime#from`.

    var a = new DateTime([2007, 0, 29]);
    var b = new DateTime([2007, 0, 28]);
    a.diff(b) 

To get the difference in another unit of measurement, pass that measurement as the second argument.

    var a = new DateTime([2007, 0, 29]);
    var b = new DateTime([2007, 0, 28]);
    a.diff(b, 'days') 

The supported measurements are `years`, `months`, `weeks`, `days`, `hours`, `minutes`, and `seconds`. For ease of development, the singular forms are supported as of **2.0.0**. Units of measurement other than milliseconds are available in version **1.1.1**.

By default, `DateTime#diff` will truncate the result to zero decimal places, returning an integer. If you want a floating point number, pass `true` as the third argument. Before **2.0.0**, `DateTime#diff` returned a number rounded to the nearest integer, not a truncated number.

    var a = new DateTime([2008, 9]);
    var b = new DateTime([2007, 0]);
    a.diff(b, 'years');       
    a.diff(b, 'years', true); 

If the DateTime is earlier than the DateTime you are passing to `DateTime.fn.diff`, the return value will be negative.

    var a = new DateTime();
    var b = new DateTime().add(1, 'seconds');
    a.diff(b) 
    b.diff(a) 

An easy way to think of this is by replacing `.diff(` with a minus operator.

    a.diff(b) 
    b.diff(a) 

#### Month and year diffs

`DateTime#diff` has some special handling for month and year diffs. It is optimized to ensure that two months with the same date are always a whole number apart.

So Jan 15 to Feb 15 should be exactly 1 month.

Feb 28 to Mar 28 should be exactly 1 month.

Feb 28 2011 to Feb 28 2012 should be exactly 1 year.

[See more discussion on the month and year diffs here](https://github.com/DateTime/DateTime/pull/571)

This change to month and year diffs was made in **2.0.0**. As of version **2.9.0** diff also support quarter unit.

</div>

</article>


<article class="docs-method"><a class="docs-method-target" id="/displaying/unix-timestamp/" name="/displaying/unix-timestamp/"></a>

### [Unix Timestamp (seconds)](#/displaying/unix-timestamp/)
<div class="docs-method-prose">

`DateTime#unix` outputs a Unix timestamp (the number of seconds since the Unix Epoch).

    new DateTime(1318874398806).unix(); 

This value is floored to the nearest second, and does not include a milliseconds component.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/days-in-month/" name="/displaying/days-in-month/"></a>

### [Days in Month](#/displaying/days-in-month/) 
<div class="docs-method-prose">

Get the number of days in the current month.

    new DateTime("2012-02", "YYYY-MM").daysInMonth() 
    new DateTime("2012-01", "YYYY-MM").daysInMonth() 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-javascript-date/" name="/displaying/as-javascript-date/"></a>

### [asDate](#/displaying/as-javascript-date/) 
<div class="docs-method-prose">

To get a copy of the native Date object that DateTime.js wraps, use `DateTime#toDate`.

This will return a copy of the `Date` that the DateTime uses, so any changes to that `Date` will not cause DateTime to change. If you want to change the DateTime `Date`, see `DateTime#manipulate` or `DateTime#set`.

`DateTime#native` has been replaced by `DateTime#toDate` and has been deprecated as of **1.6.0**.

</div>

</article>


<article class="docs-method"><a class="docs-method-target" id="/displaying/as-json/" name="/displaying/as-json/"></a>

### [asJSON](#/displaying/as-json/) 
<div class="docs-method-prose">

When serializing an object to JSON, if there is a `DateTime` object, it will be represented as an ISO8601 string, adjusted to UTC.

    JSON.stringify({
        postDate : new DateTime()
    }); 

If instead you would like an ISO8601 string that reflects the DateTime's `utcOffset()`, then you can modify the `toJSON` function like this:

    DateTime.fn.toJSON = function() { return this.toString(); }

This changes the behavior as follows:

    JSON.stringify({
        postDate : new DateTime()
    }); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-iso-string/" name="/displaying/as-iso-string/"></a>

### [As ISO 8601 String](#/displaying/as-iso-string/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().toISOString();
    new DateTime().toISOString(keepOffset); 

</div>

Formats a string to the ISO8601 standard.

    new DateTime().toISOString() 

Note that `.toISOString()` returns a timestamp in UTC, even if the DateTime in question is in local mode. This is done to provide consistency with the specification for native JavaScript Date `.toISOString()`, as outlined in [the ES2015 specification](https://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.toisostring). From version **2.20.0**, you may call `.toISOString(true)` to prevent UTC conversion.

From version **2.8.4** the native `Date.prototype.toISOString` is used if available, for performance reasons.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-object/" name="/displaying/as-object/"></a>

### [As Object](#/displaying/as-object/) 
<div class="docs-method-prose">

This returns an object containing year, month, day-of-month, hour, minute, seconds, milliseconds.

    new DateTime().toObject()  

</div>

</article>



<article class="docs-section"><a class="docs-section-target" id="/query/" name="/query/"></a>

## [Query](#/query/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-before/" name="/query/is-before/"></a>

### [Is Before](#/query/is-before/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isBefore(DateTime);
 
</div>

Check if a DateTime is before another DateTime.

    new DateTime('2010-10-20').isBefore(new DateTime('2010-10-21')); 

If you want to limit the granularity to a unit other than milliseconds, pass the units as the second parameter.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-same/" name="/query/is-same/"></a>

### [Is Same](#/query/is-same/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isSame(DateTime);

</div>

Check if a DateTime is the same as another DateTime.

    new DateTime('2010-10-20').isSame(new DateTime('2010-10-20')); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-after/" name="/query/is-after/"></a>

### [Is After](#/query/is-after/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isAfter(DateTime);

</div>

Check if a DateTime is after another DateTime.

    new DateTime('2010-10-20').isAfter(new DateTime('2010-10-19')); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-same-or-before/" name="/query/is-same-or-before/"></a>

### [Is Same or Before](#/query/is-same-or-before/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isSameOrBefore(DateTime);
</div>

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-same-or-after/" name="/query/is-same-or-after/"></a>

### [Is Same or After](#/query/is-same-or-after/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isSameOrAfter(DateTime);

</div>

Check if a DateTime is after or the same as another DateTime.

    new DateTime('2010-10-20').isSameOrAfter(new DateTime('2010-10-19'));
</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-between/" name="/query/is-between/"></a>

### [Is Between](#/query/is-between/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isBetween(DateTime1, DateTime2);
    new DateTime().isBetween(DateTime1, DateTime2, String);
</div>

Check if a DateTime is between two other DateTimes, optionally looking at unit scale (minutes, hours, days, etc). The match is exclusive.

    new DateTime('2010-10-20').isBetween(new DateTime('2010-10-19'), new DateTime('2010-10-25')); 

 A `[` indicates inclusion of a value. A `(` indicates exclusion. If the inclusivity parameter is used, both indicators must be passed.

    new DateTime('2016-10-30').isBetween(new DateTime('2016-10-30'), new DateTime('2016-12-30'=, '()'); 
    new DateTime('2016-10-30').isBetween(new DateTime('2016-10-30'), new DateTime('2016-12-30'=, '[)'); 
    new DateTime('2016-10-30').isBetween(new DateTime('2016-01-01'), new DateTime('2016-10-30'=, '()'); 
    new DateTime('2016-10-30').isBetween(new DateTime('2016-01-01'), new DateTime('2016-10-30'=, '(]'); 
    new DateTime('2016-10-30').isBetween(new DateTime('2016-10-30'), new DateTime('2016-10-30'=, '[]'); 

If the inclusivity parameter is not specified, DateTime will default to `[]`.

</div>

</article>




<article class="docs-method"><a class="docs-method-target" id="/query/is-leap-year/" name="/query/is-leap-year/"></a>

### [Is Leap Year](#/query/is-leap-year/) 
<div class="docs-method-prose">

`DateTime#isLeapYear` returns `true` if that year is a leap year, and `false` if it is not.

    new DateTime([2000]).isLeapYear() 
    new DateTime([2001]).isLeapYear() 
    new DateTime([2100]).isLeapYear() 

</div>

</article>


<article class="docs-section"><a class="docs-section-target" id="/i18n/" name="/i18n/"></a>

## [i18n](#/i18n/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/intro/" name="/i18n/intro/"></a>

<div class="docs-method-prose">

DateTime.js has robust support for internationalization.

You can load multiple locales and easily switch between them.

In addition to assigning a global locale, you can assign a locale to a specific DateTime.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/changing-locale/" name="/i18n/changing-locale/"></a>

### [Changing locale globally](#/i18n/changing-locale/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.locale(String);
    DateTime.locale(String[]);
    DateTime.locale(String, Object);

    DateTime.lang(String);
    DateTime.lang(String[]);
    DateTime.lang(String, Object);

</div>

By default, DateTime.js comes with English (United States) locale strings. If you need other locales, you can load them into DateTime.js for later use.

To load a locale, pass the key and the string values to `DateTime.locale`.

More details on each of the parts of the locale bundle can be found in the [customization](#/customization/) section.

    DateTime.locale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : 'e');
        },
        meridiemParse : /PD|MD/,
        isPM : function (input) {
            return input.charAt(0) === 'M';
        },

        meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        week : {
            dow : 1, 
            doy : 4  
        }
    });

Once you load a locale, it becomes the active locale. To change active locales, simply call `DateTime.locale` with the key of a loaded locale.

    DateTime.locale('fr');
    new DateTime(1316116057189).fromNow(); 
    DateTime.locale('en');
    new DateTime(1316116057189).fromNow(); 

changing the global locale doesn't affect existing instances.

    DateTime.locale('fr');
    var m = new DateTime(1316116057189);
    m.fromNow(); 

    DateTime.locale('en');
    m.fromNow(); 
    new DateTime(1316116057189).fromNow(); 

`DateTime.locale` returns the locale used. This is useful because DateTime won't change locales if it doesn't know the one you specify.

    DateTime.locale('fr'); 
    DateTime.locale('tq'); 

You may also specify a list of locales, and DateTime will use the first one it has localizations for.

    DateTime.locale(['tq', 'fr']); 

DateTime will also try locale specifier substrings from most-specific to least-specific until it finds a locale it knows. This is useful when supplying DateTime with a locale string pulled from the user's environment, such as `window.navigator.language`.

    DateTime.locale('en-NZ'); 

Finally, DateTime will search intelligently through an array of locales and their substrings.

    DateTime.locale(['en-NZ', 'en-AU']); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/instance-locale/" name="/i18n/instance-locale/"></a>

### [Changing locales locally](#/i18n/instance-locale/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().locale(String|Boolean);

    new DateTime().lang(String|Boolean);

</div>

A global locale configuration can be problematic when passing around DateTimes that may need to be formatted into different locale.

 we added instance specific locale configurations.

    DateTime.locale('en'); 
    var localLocale = new DateTime();

    localLocale.locale('fr'); 
    localLocale.toString('LLLL'); 
    new DateTime().toString('LLLL'); 

    DateTime.locale('es'); 
    localLocale.toString('LLLL'); 
    new DateTime().toString('LLLL'); 

    localLocale.locale(false); 
    localLocale.toString('LLLL'); 
    new DateTime().toString('LLLL'); 

If you call `DateTime#locale` with no parameters, you get back the locale configuration that would be used for that DateTime.

    var fr = new DateTime().locale('fr');
    fr.localeData().months(new DateTime([2012, 0])) 
    fr.locale('en');
    fr.localeData().months(new DateTime([2012, 0])) 

If you need to access the locale data for a DateTime, this is the preferred way to do so.

you can also specify an array of locale identifiers. It works the same was it does in the [global locale configuration](#/i18n/changing-locale/).

</div>

</article>


<article class="docs-method"><a class="docs-method-target" id="/i18n/loading-into-browser/" name="/i18n/loading-into-browser/"></a>

### [Loading locales in the browser](#/i18n/loading-into-browser/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.locale(String, Object);

    DateTime.lang(String, Object);

</div>

Loading locales in the browser just requires you to include the locale files. Be sure to specify the charset to prevent encoding issues.

    <script src="DateTime.js"></script>
    <script src="locale/fr.js" charset="UTF-8"></script>
    <script src="locale/pt.js" charset="UTF-8"></script>
    <script>
      DateTime.locale('fr');  // Set the default/global locale
      // ...
    </script>

There are minified versions of all locales together:

    <script src="DateTime.js"></script>
    <script src="min/locales.js" charset="UTF-8"></script>

To minimize HTTP requests, use our Grunt task to compile [DateTime](https://github.com/DateTime/DateTime) with a custom list of locales:

    grunt transpile:fr,it

    <script src="min/DateTime-with-locales.custom.js" charset="UTF-8"></script>

If you are using JSPM as plugin manager, you should add the locale in your lib.

    import * as DateTime from 'DateTime';
    import 'DateTime/locale/fr';

**Note:** Locale files are defined in [UMD](https://github.com/umdjs/umd) style, so they should work seamlessly in all environments.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/adding-locale/" name="/i18n/adding-locale/"></a>

### [Adding your locale to DateTime.js](#/i18n/adding-locale/)

<div class="docs-method-prose">

To add your locale to DateTime.js, submit a pull request with both a locale file and a test file. You can find examples in `DateTime/src/locale/fr.js` and `DateTime/src/test/locale/fr.js`.

To run the tests in Node.js, do `npm install`, then `grunt`.

If all the tests pass, submit a pull request, and thank you for contributing!

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/getting-locale/" name="/i18n/getting-locale/"></a>

### [Checking the current DateTime.js locale](#/i18n/getting-locale/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.locale();

    DateTime.lang();

</div>

If you are changing locales frequently, you may want to know what locale is currently being used. This is as simple as calling `DateTime.locale` without any parameters.

    DateTime.locale('en'); 
    DateTime.locale(); 
    DateTime.locale('fr'); 
    DateTime.locale(); 

As of version **2.12.0** it is possible to list all locales that have been loaded and are available to use:

    DateTime.locales()

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/listing-months-weekdays/" name="/i18n/listing-months-weekdays/"></a>

### [Listing the months and weekdays of the current DateTime.js locale](#/i18n/listing-months-weekdays/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.months()
    DateTime.monthsShort()
    DateTime.weekdays()
    DateTime.weekdaysShort()
    DateTime.weekdaysMin()

</div>

It is sometimes useful to get the list of months or weekdays in a locale, for example when populating a dropdown menu.

    DateTime.months();

Returns the list of months in the current locale.

    [ 'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December' ]

Similarly, `DateTime.monthsShort` returns abbreviated month names, and `DateTime.weekdays`, `DateTime.weekdaysShort`, `DateTime.weekdaysMin` return lists of weekdays.

You can pass an integer into each of those functions to get a specific month or weekday.

    DateTime.weekdays(3); 

As of **2.13.0** you can pass a bool as the first parameter of the weekday functions. If true, the weekdays will be returned in locale specific order. For instance, in the Arabic locale, Saturday is the first day of the week, thus:

    DateTime.locale('ar');
    DateTime.weekdays(true); 
    DateTime.weekdays(true, 2); 

**Note:** Absent the locale specific parameter, weekdays always have Sunday as index 0, regardless of the local first day of the week.

Some locales make special considerations into account when formatting month names. For example, Dutch formats month abbreviations without a trailing period, but only if it's formatting the month between dashes. The `months` method supports passing a format in so that the months will be listed in the proper context.

    DateTime.locale('nl');
    DateTime.monthsShort(); 
    DateTime.monthsShort('-MMM-'); 

And finally, you can combine both the format option and the integer option.

    DateTime.monthsShort('-MMM-', 3); 

</div>

</article>



<article class="docs-method"><a class="docs-method-target" id="/i18n/pseudo-locale/" name="/i18n/pseudo-locale/"></a>

### [Pseudo Locale](#/i18n/pseudo-locale/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.locale('x-pseudo')

</div>

DateTime optionally includes a pseudo locale. This locale will populate the dates with very obviously changed data. Pseudo locales can be useful when testing, as they make obvious what data has and has not been localized. Just include the pseudo-locale, and set DateTime's locale to x-pseudo. Text from DateTime will be very easy to spot.

    DateTime.locale('x-pseudo');
    new DateTime().toString('LLL'); 
    new DateTime().fromNow(); 
    new DateTime().calendar(); 

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/customization/" name="/customization/"></a>

## [Customize](#/customization/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/intro/" name="/customization/intro/"></a>

<div class="docs-method-prose">

DateTime.js is very easy to customize. In general, you should create a locale setting with your customizations.

    DateTime.locale('en-my-settings', {

    });

You can remove a previously defined locale by passing `null` as the second argument. The deleted locale will no longer be available for use.

    DateTime.locale('fr'); 
    DateTime.locale('en'); 
    DateTime.locale('fr', null);
    DateTime.locale('fr'); 

it is possible to create a locale that inherits from a parent locale.

    DateTime.defineLocale('en-foo', {
      parentLocale: 'en',

    });

Properties that are not specified in the locale will be inherited from the parent locale.

it is also possible to update a locale's properties.

    DateTime.updateLocale('en', {

    });

Any properties specified will be updated, while others will remain the same. This function does not affect DateTimes that already exist.

To revert an update use:

    DateTime.updateLocale('en', null);

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/month-names/" name="/customization/month-names/"></a>

### [Month Names](#/customization/month-names/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        months : String[]
    });
    DateTime.updateLocale('en', {
        months : Function
    });
    DateTime.updateLocale('en', {
        months : {
            format : String[],
            standalone : String[]
        }
    });

    DateTime.locale('en', {
        months : {
            format : String[],
            standalone : String[]
        }
    });

    DateTime.locale('en', {
        months : String[]
    });
    DateTime.locale('en', {
        months : Function
    });

    DateTime.lang('en', {
        months : String[]
    });
    DateTime.lang('en', {
        months : Function
    });

</div>

`Locale#months` should be an array of the month names.

    DateTime.updateLocale('en', {
        months : [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ]
    });

If you need more processing to calculate the name of the month, (for example, if there is different grammar for different formats), `Locale#months` can be a function with the following signature. It should always return a month name.

    DateTime.updateLocale('en', {
        months : function (DateTimeToFormat, format) {

            if (/^MMMM/.test(format)) { 
                return nominative[DateTimeToFormat.month()];
            } else {
                return subjective[DateTimeToFormat.month()];
            }
        }
    });

From version **2.11.0** months can also be an object, specifying `standalone` and `format` forms (nominative and accusative). The regular expression that is run on the format to check whether to use the `format` form is `/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/`. From version **2.14.0** a different one can be specified with the `isFormat` key.

    DateTime.updateLocale('en', {
        months : {
             format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
             standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
             isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/  
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/month-abbreviations/" name="/customization/month-abbreviations/"></a>

### [Month Abbreviations](#/customization/month-abbreviations/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        monthsShort : String[]
    });
    DateTime.updateLocale('en', {
        monthsShort : Function
    });
    DateTime.updateLocale('en', {
        monthsShort : {
            format: String[],
            standalone : String[]
        }
    });

    DateTime.locale('en', {
        monthsShort : {
            format: String[],
            standalone : String[]
        }
    });

    DateTime.locale('en', {
        monthsShort : String[]
    });
    DateTime.locale('en', {
        monthsShort : Function
    });

    DateTime.lang('en', {
        monthsShort : String[]
    });
    DateTime.lang('en', {
        monthsShort : Function
    });

</div>

`Locale#monthsShort` should be an array of the month abbreviations.

    DateTime.updateLocale('en', {
        monthsShort : [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
    });

Like `Locale#months`, `Locale#monthsShort` can be a callback function as well.

    DateTime.updateLocale('en', {
        monthsShort : function (DateTimeToFormat, format) {
            if (/^MMMM/.test(format)) {
                return nominative[DateTimeToFormat.month()];
            } else {
                return subjective[DateTimeToFormat.month()];
            }
        }
    });

**Note:** like `Locale#months`, `Locale#monthsShort` can be an object with `standalone` and `format` cases.

    DateTime.updateLocale('en', {
        monthsShort : {
            format: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
            standalone: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_')
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/weekday-names/" name="/customization/weekday-names/"></a>

### [Weekday Names](#/customization/weekday-names/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        weekdays : String[]
    });
    DateTime.updateLocale('en', {
        weekdays : Function
    });
    DateTime.updateLocale('en', {
        weekdays : {
            standalone : String[],
            format : String[],
            isFormat : RegExp
        }
    });

    DateTime.locale('en', {
        weekdays : {
            standalone : String[],
            format : String[],
            isFormat : Boolean
        }
    });

    DateTime.locale('en', {
        weekdays : String[]
    });
    DateTime.locale('en', {
        weekdays : Function
    });

    DateTime.lang('en', {
        weekdays : String[]
    });
    DateTime.lang('en', {
        weekdays : Function
    });

</div>

`Locale#weekdays` should be an array of the weekdays names.

    DateTime.updateLocale('en', {
        weekdays : [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ]
    });

`Locale#weekdays` can be a callback function as well.

    DateTime.updateLocale('en', {
        weekdays : function (DateTimeToFormat, format) {
            return weekdays[DateTimeToFormat.day()];
        }
    });

**Note:** From version **2.11.0** format/standalone cases can be passed as well. `isFormat` will be used against the full format string to determine which form to use.

    DateTime.updateLocale('en', {
        weekdays : {
            standalone: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
            format: 'Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/weekday-abbreviations/" name="/customization/weekday-abbreviations/"></a>

### [Weekday Abbreviations](#/customization/weekday-abbreviations/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        weekdaysShort : String[]
    });
    DateTime.updateLocale('en', {
        weekdaysShort : Function
    });

    DateTime.locale('en', {
        weekdaysShort : String[]
    });
    DateTime.locale('en', {
        weekdaysShort : Function
    });

    DateTime.lang('en', {
        weekdaysShort : String[]
    });
    DateTime.lang('en', {
        weekdaysShort : Function
    });

</div>

`Locale#weekdaysShort` should be an array of the weekdays abbreviations.

    DateTime.updateLocale('en', {
        weekdaysShort : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    });

`Locale#weekdaysShort` can be a callback function as well.

    DateTime.updateLocale('en', {
        weekdaysShort : function (DateTimeToFormat, format) {
            return weekdaysShort[DateTimeToFormat.day()];
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/weekday-min/" name="/customization/weekday-min/"></a>

### [Minimal Weekday Abbreviations](#/customization/weekday-min/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        weekdaysMin : String[]
    });
    DateTime.updateLocale('en', {
        weekdaysMin : Function
    });

    DateTime.locale('en', {
        weekdaysMin : String[]
    });
    DateTime.locale('en', {
        weekdaysMin : Function
    });

    DateTime.lang('en', {
        weekdaysMin : String[]
    });
    DateTime.lang('en', {
        weekdaysMin : Function
    });

</div>

`Locale#weekdaysMin` should be an array of two letter weekday abbreviations. The purpose of these is for things like calendar pickers, thus they should be as small as possible.

    DateTime.updateLocale('en', {
        weekdaysMin : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    });

`Locale#weekdaysMin` can be a callback function as well.

    DateTime.updateLocale('en', {
        weekdaysMin : function (DateTimeToFormat, format) {
            return weekdaysMin[DateTimeToFormat.day()];
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/long-date-formats/" name="/customization/long-date-formats/"></a>

### [Long Date Formats](#/customization/long-date-formats/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        weekdaysMin : String[]
    });
    DateTime.updateLocale('en', {
        weekdaysMin : Function
    });

    DateTime.locale('en', {
        longDateFormat : Object
    });

    DateTime.lang('en', {
        longDateFormat : Object
    });

</div>

`Locale#longDateFormat` should be an object containing a key/value pair for each long date format `L LL LLL LLLL LT LTS`. `LT` should be the time format, and is also used for `DateTime#calendar`.

    DateTime.updateLocale('en', {
        longDateFormat : {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            l: "M/D/YYYY",
            LL: "MMMM Do YYYY",
            ll: "MMM D YYYY",
            LLL: "MMMM Do YYYY LT",
            lll: "MMM D YYYY LT",
            LLLL: "dddd, MMMM Do YYYY LT",
            llll: "ddd, MMM D YYYY LT"
        }
    });

You can eliminate the lowercase `l` tokens and they will be created automatically by replacing long tokens with the short token variants.

    DateTime.updateLocale('en', {
        longDateFormat : {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "MMMM Do YYYY",
            LLL: "MMMM Do YYYY LT",
            LLLL: "dddd, MMMM Do YYYY LT"
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/relative-time/" name="/customization/relative-time/"></a>

### [Relative Time](#/customization/relative-time/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        relativeTime : Object
    });

    DateTime.locale('en', {
        relativeTime : Object
    });

    DateTime.lang('en', {
        relativeTime : Object
    });

</div>

`Locale#relativeTime` should be an object of the replacement strings for `DateTime#from`.

    DateTime.updateLocale('en', {
        relativeTime : {
            future: "in %s",
            past:   "%s ago",
            s  : 'a few seconds',
            ss : '%d seconds',
            m:  "a minute",
            mm: "%d minutes",
            h:  "an hour",
            hh: "%d hours",
            d:  "a day",
            dd: "%d days",
            M:  "a month",
            MM: "%d months",
            y:  "a year",
            yy: "%d years"
        }
    });

`Locale#relativeTime.future` refers to the prefix/suffix for future dates, and `Locale#relativeTime.past` refers to the prefix/suffix for past dates. For all others, a single character refers to the singular, and a double character refers to the plural.

If a locale requires additional processing for a token, it can set the token as a function with the following signature. The function should return a string.

    function (number, withoutSuffix, key, isFuture) {
        return string;
    }

The `key` argument refers to the replacement key in the `Locale#relativeTime` object. (eg. `s m mm h`, etc.)

The `number` argument refers to the number of units for that key. For `m`, the number is the number of minutes, etc.

The `withoutSuffix` argument will be true if the token will be displayed without a suffix, and false if it will be displayed with a suffix. (The reason for the inverted logic is because the default behavior is to display with the suffix.)

The `isFuture` argument will be true if it is going to use the future suffix/prefix and false if it is going to use the past prefix/suffix. 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/am-pm/" name="/customization/am-pm/"></a>

### [AM/PM](#/customization/am-pm/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        meridiem : Function
    });

    DateTime.locale('en', {
        meridiem : Function
    });

    DateTime.lang('en', {
        meridiem : Function
    });

</div>

If your locale uses 'am/pm', `Locale#meridiem` can be omitted, as those values are the defaults.

If your locale needs any different computation for am/pm, `Locale#meridiem` should be a callback function that returns the correct string based on hour, minute, and upper/lowercase.

    DateTime.updateLocale('zh-cn', {
        meridiem : function (hour, minute, isLowercase) {
            if (hour < 9) {
                return "早上";
            } else if (hour < 11 && minute < 30) {
                return "上午";
            } else if (hour < 13 && minute < 30) {
                return "中午";
            } else if (hour < 18) {
                return "下午";
            } else {
                return "晚上";
            }
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/am-pm-parsing/" name="/customization/am-pm-parsing/"></a>

### [AM/PM Parsing](#/customization/am-pm-parsing/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        meridiemParse : RegExp
        isPM : Function
    });

    DateTime.locale('en', {
        meridiemParse : RegExp
        isPM : Function
    });

    DateTime.lang('en', {
        meridiemParse : RegExp
        isPM : Function
    });

</div>

`Locale#isPM` should return true if the input string is past 12 noon. This is used in parsing the `a A` tokens.

    DateTime.updateLocale('en', {
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'p');
        }
    });

To configure what strings should be parsed as input, set the `meridiemParse` property.

    DateTime.updateLocale('en', {
        meridiemParse : /[ap]\.?m?\.?/i
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/calendar/" name="/customization/calendar/"></a>

### [Calendar](#/customization/calendar/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.updateLocale('en', {
        calendar : Object
    });

    DateTime.locale('en', {
        calendar : Object
    });

    DateTime.lang('en', {
        calendar : Object
    });

</div>

`Locale#calendar` should have the following formatting strings.

    DateTime.locale('en', {
        calendar : {
            lastDay : '[Yesterday at] LT',
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            lastWeek : '[last] dddd [at] LT',
            nextWeek : 'dddd [at] LT',
            sameElse : 'L'
        }
    });

Each of the `Locale#calendar` keys can also be a callback function with the scope of the current DateTime and first argument a DateTime that depicts now. It should return a formatting string.

    function callback (now) {
        return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
    }

</div>

</article>


<article class="docs-method"><a class="docs-method-target" id="/customization/relative-time-threshold/" name="/customization/relative-time-threshold/"></a>

### [Relative Time Thresholds](#/customization/relative-time-threshold/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.relativeTimeThreshold(unit);  
    DateTime.relativeTimeThreshold(unit, limit);  

</div>

`duration.humanize` has thresholds which define when a unit is considered a minute, an hour and so on. For example, by default more than 45 seconds is considered a minute, more than 22 hours is considered a day and so on. To change those cutoffs use `DateTime.relativeTimeThreshold(unit, limit)` where unit is one of `ss`, `s`, `m`, `h`, `d`, `M`.

<table>

<tbody>

<tr>

<th>unit</th>

<th>meaning</th>

<th>usage</th>

</tr>

<tr>

<td>ss</td>

<td>a few seconds</td>

<td>least number of seconds to be considered seconds. Must be set after setting the `s` unit or without setting the `s` unit.</td>

</tr>

<tr>

<td>s</td>

<td>seconds</td>

<td>least number of seconds to be considered a minute.</td>

</tr>

<tr>

<td>m</td>

<td>minutes</td>

<td>least number of minutes to be considered an hour.</td>

</tr>

<tr>

<td>h</td>

<td>hours</td>

<td>least number of hours to be considered a day.</td>

</tr>

<tr>

<td>d</td>

<td>days</td>

<td>least number of days to be considered a month.</td>

</tr>

<tr>

<td>M</td>

<td>months</td>

<td>least number of months to be considered a year.</td>

</tr>

</tbody>

</table>

      DateTime.relativeTimeThreshold('ss'); 
      DateTime.relativeTimeThreshold('s');  
      DateTime.relativeTimeThreshold('m');  
      DateTime.relativeTimeThreshold('h');  
      DateTime.relativeTimeThreshold('d');  
      DateTime.relativeTimeThreshold('M');  

      DateTime.relativeTimeThreshold('ss', 3);
      DateTime.relativeTimeThreshold('s', 40);
      DateTime.relativeTimeThreshold('m', 40);
      DateTime.relativeTimeThreshold('h', 20);
      DateTime.relativeTimeThreshold('d', 25);
      DateTime.relativeTimeThreshold('M', 10);

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/relative-time-rounding/" name="/customization/relative-time-rounding/"></a>

### [Relative Time Rounding](#/customization/relative-time-rounding/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.relativeTimeRounding();  
    DateTime.relativeTimeRounding(fn);  

</div>

`duration.humanize` rounds a possibly double value before supplying it to the relativeTime format string specified in the locale. To control the rounding you can use `DateTime.relativeTimeRounding`.

    var roundingDefault = DateTime.relativeTimeRounding();

    DateTime.relativeTimeRounding(Math.floor);

    DateTime.relativeTimeThreshold('s', 60);
    DateTime.relativeTimeThreshold('m', 60);
    DateTime.relativeTimeThreshold('h', 24);
    DateTime.relativeTimeThreshold('d', 31);
    DateTime.relativeTimeThreshold('M', 12);

    var a = new DateTime();
    a.subtract({hours: 23, minutes: 59, seconds: 59});
    a.toNow()  

    DateTime.relativeTimeRounding(roundingDefault);

You can even choose to do no rounding at all:

    var retainValue = function (value) {
        return value;
    };
    DateTime.relativeTimeRounding(retainValue);

    var a = new DateTime();
    a.subtract({hours: 39});
    a.toNow() 

</div>

</article>


<article class="docs-section"><a class="docs-section-target" id="/durations/" name="/durations/"></a>

## [Durations](#/durations/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/intro/" name="/durations/intro/"></a>

<div class="docs-method-prose">

DateTime.js also has duration objects. Where a DateTime is defined as single points in time, durations are defined as a length of time.

Durations do not have a defined beginning and end date. They are contextless.

A duration is conceptually more similar to '2 hours' than to 'between 2 and 4 pm today'. As such, they are not a good solution to converting between units that depend on context.

For example, a year can be defined as 366 days, 365 days, 365.25 days, 12 months, or 52 weeks. Trying to convert years to days makes no sense without context. It is much better to use `DateTime#diff` for calculating days or years between two DateTimes than to use `Durations`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/creating/" name="/durations/creating/"></a>

### [Creating](#/durations/creating/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration(Number, String);
    DateTime.duration(Number);
    DateTime.duration(Object);
    DateTime.duration(String);

</div>

To create a duration, call `DateTime.duration()` with the length of time in milliseconds.

    DateTime.duration(100); 

If you want to create a DateTime with a unit of measurement other than milliseconds, you can pass the unit of measurement as well.

    DateTime.duration(2, 'seconds');
    DateTime.duration(2, 'minutes');
    DateTime.duration(2, 'hours');
    DateTime.duration(2, 'days');
    DateTime.duration(2, 'weeks');
    DateTime.duration(2, 'months');
    DateTime.duration(2, 'years');

The same shorthand for `DateTime#add` and `DateTime#subtract` works here as well.

<table class="table table-striped table-bordered">

<tbody>

<tr>

<th>Key</th>

<th>Shorthand</th>

</tr>

<tr>

<td>years</td>

<td>y</td>

</tr>

<tr>

<td>months</td>

<td>M</td>

</tr>

<tr>

<td>weeks</td>

<td>w</td>

</tr>

<tr>

<td>days</td>

<td>d</td>

</tr>

<tr>

<td>hours</td>

<td>h</td>

</tr>

<tr>

<td>minutes</td>

<td>m</td>

</tr>

<tr>

<td>seconds</td>

<td>s</td>

</tr>

<tr>

<td>milliseconds</td>

<td>ms</td>

</tr>

</tbody>

</table>

Much like `DateTime#add`, you can pass an object of values if you need multiple different units of measurement.

    DateTime.duration({
        seconds: 2,
        minutes: 2,
        hours: 2,
        days: 2,
        weeks: 2,
        months: 2,
        years: 2
    });

As of **2.1.0**, DateTime supports parsing ASP.NET style time spans. The following formats are supported.

The format is an hour, minute, second string separated by colons like `23:59:59`. The number of days can be prefixed with a dot separator like so `7.23:59:59`. Partial seconds are supported as well `23:59:59.999`.

    DateTime.duration('23:59:59');
    DateTime.duration('23:59:59.999');
    DateTime.duration('7.23:59:59.999');
    DateTime.duration('23:59'); 

As of **2.3.0**, DateTime also supports parsing [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) durations.

    DateTime.duration('P1Y2M3DT4H5M6S');
    DateTime.duration('P1M');

As of **2.11.0**, duration format strings with a space between days and rest is supported.

    DateTime.duration('7 23:59:59.999');

As of **2.13.0**, mixed negative and positive signs are supported when parsing durations.

    DateTime.duration('PT-6H3M')

As of **2.18.0**, invalid durations are supported, similarly to invalid DateTimes. To create an invalid duration you can pass `NaN` for a value of a unit.

In upcoming releases expect invalid durations to cover more cases (like null values for units).

    DateTime.duration(NaN);
    DateTime.duration(NaN, 'days');
    DateTime.duration.invalid();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/clone/" name="/durations/clone/"></a>

### [Clone](#/durations/clone/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().clone();

</div>

Create a clone of a duration. Durations are mutable, just like DateTime objects, so this lets you get a snapshot, at some point in time.

    var d1 = DateTime.duration();
    var d2 = d1.clone();
    d1.add(1, 'second');
    d1.asMilliseconds() !== d2.asMilliseconds();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/humanize/" name="/durations/humanize/"></a>

### [Humanize](#/durations/humanize/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().humanize();

</div>

Sometimes, you want all the goodness of `DateTime#from` but you don't want to have to create two DateTimes, you just want to display a length of time.

Enter `DateTime.duration().humanize()`.

    DateTime.duration(1, "minutes").humanize(); 
    DateTime.duration(2, "minutes").humanize(); 
    DateTime.duration(24, "hours").humanize();  

By default, the return string is suffixless. If you want a suffix, pass in true as seen below.

    DateTime.duration(1, "minutes").humanize(true); 

For suffixes before now, pass in a negative number.

    DateTime.duration(-1, "minutes").humanize(true); 

Invalid durations are humanized to the localized version of `Invalid Date`.

    DateTime.duration.invalid().humanize(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/milliseconds/" name="/durations/milliseconds/"></a>

### [Milliseconds](#/durations/milliseconds/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().milliseconds();
    DateTime.duration().asMilliseconds();

</div>

To get the number of milliseconds in a duration, use `DateTime.duration().milliseconds()`.

It will return a number between 0 and 999.

    DateTime.duration(500).milliseconds(); 
    DateTime.duration(1500).milliseconds(); 
    DateTime.duration(15000).milliseconds(); 

If you want the length of the duration in milliseconds, use `DateTime.duration().asMilliseconds()` instead.

    DateTime.duration(500).asMilliseconds(); 
    DateTime.duration(1500).asMilliseconds(); 
    DateTime.duration(15000).asMilliseconds(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/seconds/" name="/durations/seconds/"></a>

### [Seconds](#/durations/seconds/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().seconds();
    DateTime.duration().asSeconds();

</div>

To get the number of seconds in a duration, use `DateTime.duration().seconds()`.

It will return a number between 0 and 59.

    DateTime.duration(500).seconds(); 
    DateTime.duration(1500).seconds(); 
    DateTime.duration(15000).seconds(); 

If you want the length of the duration in seconds, use `DateTime.duration().asSeconds()` instead.

    DateTime.duration(500).asSeconds(); 
    DateTime.duration(1500).asSeconds(); 
    DateTime.duration(15000).asSeconds(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/minutes/" name="/durations/minutes/"></a>

### [Minutes](#/durations/minutes/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().minutes();
    DateTime.duration().asMinutes();

</div>

As with the other getters for durations, `DateTime.duration().minutes()` gets the minutes (0 - 59).

`DateTime.duration().asMinutes()` gets the length of the duration in minutes.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/hours/" name="/durations/hours/"></a>

### [Hours](#/durations/hours/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().hours();
    DateTime.duration().asHours();

</div>

As with the other getters for durations, `DateTime.duration().hours()` gets the hours (0 - 23).

`DateTime.duration().asHours()` gets the length of the duration in hours.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/days/" name="/durations/days/"></a>

### [Days](#/durations/days/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().days();
    DateTime.duration().asDays();

</div>

As with the other getters for durations, `DateTime.duration().days()` gets the days (0 - 30).

`DateTime.duration().asDays()` gets the length of the duration in days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/weeks/" name="/durations/weeks/"></a>

### [Weeks](#/durations/weeks/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().weeks();
    DateTime.duration().asWeeks();

</div>

As with the other getters for durations, `DateTime.duration().weeks()` gets the weeks (0 - 4).

`DateTime.duration().asWeeks()` gets the length of the duration in weeks.

Pay attention that unlike the other getters for duration, weeks are counted as a subset of the days, and are not taken off the days count.

**Note:** The length of a duration in weeks is defined as 7 days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/months/" name="/durations/months/"></a>

### [Months](#/durations/months/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().months();
    DateTime.duration().asMonths();

</div>

As with the other getters for durations, `DateTime.duration().months()` gets the months (0 - 11).

`DateTime.duration().asMonths()` gets the length of the duration in months.

**Note:** The length of a duration in months is defined as 30 days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/years/" name="/durations/years/"></a>

### [Years](#/durations/years/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().years();
    DateTime.duration().asYears();

</div>

As with the other getters for durations, `DateTime.duration().years()` gets the years.

`DateTime.duration().asYears()` gets the length of the duration in years.

**Note:** The length of a duration in years is defined as 365 days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/add/" name="/durations/add/"></a>

### [Add Time](#/durations/add/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().add(Number, String);
    DateTime.duration().add(Number);
    DateTime.duration().add(Duration);
    DateTime.duration().add(Object);

</div>

Mutates the original duration by adding time.

The same keys and shorthands used to create durations can be used here as the second argument.

    var a = DateTime.duration(1, 'd');
    var b = DateTime.duration(2, 'd');
    a.add(b).days(); 

Note that adding an invalid duration to any other duration results in an invalid duration.

</div>

</article>


<article class="docs-method"><a class="docs-method-target" id="/durations/as/" name="/durations/as/"></a>

### [As Unit of Time](#/durations/as/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().as(String);

</div>

As an alternate to `Duration#asX`, you can use `Duration#as('x')`. All the [shorthand keys from](#/manipulating/add/) `DateTime#add` apply here as well.

    duration.as('hours');
    duration.as('minutes');
    duration.as('seconds');
    duration.as('milliseconds');

Invalid durations return `NaN` for all units.

</div>

</article>


<article class="docs-method"><a class="docs-method-target" id="/durations/as-json/" name="/durations/as-json/"></a>

### [As JSON](#/durations/as-json/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().toJSON();

</div>

When serializing a duration object to JSON, it will be represented as an ISO8601 string.

    JSON.stringify({
        postDuration : DateTime.duration(5, 'm')
    }); 

Invalid durations return `Invalid Date` as json representation.

</div>

</article>


<article class="docs-method"><a class="docs-method-target" id="/durations/as-iso-string/" name="/durations/as-iso-string/"></a>

### [As ISO 8601 String](#/durations/as-iso-string/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().toISOString();

</div>

Returns duration in string as specified by [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601#Durations).

    DateTime.duration(1, 'd').toISOString() 

Format `PnYnMnDTnHnMnS` description:

<table class="table table-striped table-bordered">

<tbody>

<tr>

<th>Unit</th>

<th>Meaning</th>

</tr>

<tr>

<td>P</td>

<td>_P_ stands for period. Placed at the start of the duration representation.</td>

</tr>

<tr>

<td>Y</td>

<td>Year</td>

</tr>

<tr>

<td>M</td>

<td>Month</td>

</tr>

<tr>

<td>D</td>

<td>Day</td>

</tr>

<tr>

<td>T</td>

<td>Designator that precedes the time components.</td>

</tr>

<tr>

<td>H</td>

<td>Hour</td>

</tr>

<tr>

<td>M</td>

<td>Minute</td>

</tr>

<tr>

<td>S</td>

<td>Second</td>

</tr>

</tbody>

</table>

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/locale/" name="/durations/locale/"></a>

### [Locale](#/durations/locale/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    DateTime.duration().locale();
    DateTime.duration().locale(String);

</div>

You can get or set the locale of a duration using `locale(...)`. The locale will affect the duration's string methods, like `humanize()`. See the [intl](#/i18n/) section for more information on internationalization generally.

    DateTime.duration(1, "minutes").locale("en").humanize(); 
    DateTime.duration(1, "minutes").locale("fr").humanize(); 
    DateTime.duration(1, "minutes").locale("es").humanize(); 

Suffixes in `humanize()` are also internationalized:

    DateTime.duration(1, "minutes").locale("en").humanize(true); 
    DateTime.duration(1, "minutes").locale("fr").humanize(true); 
    DateTime.duration(1, "minutes").locale("es").humanize(true); 

    DateTime.duration(-1, "minutes").locale("en").humanize(true); 
    DateTime.duration(-1, "minutes").locale("fr").humanize(true); 
    DateTime.duration(-1, "minutes").locale("es").humanize(true); 

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/utilities/" name="/utilities/"></a>



<article class="docs-section"><a class="docs-section-target" id="/plugins/" name="/plugins/"></a>



<article class="docs-method"><a class="docs-method-target" id="/plugins/round/" name="/plugins/round/"></a>

### [Round]
<div class="docs-method-prose">

This plugin will round date/time to a given interval.

For example,

    var m = new DateTime(); 
    DateTime.round(5, 'seconds'); 
    DateTime.ceil(3, 'minutes'); 
    DateTime.floor(16, 'hours'); 
    DateTime.ceil(21, 'hours'); 
    DateTime.ceil(20, 'hours'); 

The repository is located at [github.com/WebDevTmas/DateTime-round](https://github.com/WebDevTmas/DateTime-round).

</div>

</article>


</div>
