 <div class="docs-content">

<article class="docs-section"><a class="docs-section-target" id="/use-it/" name="/use-it/"></a>

## [Where to use it](#/use-it/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/intro/" name="/use-it/intro/"></a>

<div class="docs-method-prose">

Moment was designed to work both in the browser and in Node.js.

All code should work in both of these environments, and all unit tests are run in both of these environments.

Currently the following browsers are used for the ci system: Chrome on Windows XP, IE 8, 9, and 10 on Windows 7, IE 11 on Windows 10, latest Firefox on Linux, and latest Safari on OSX 10.8 and 10.11.

If you want to try the sample codes below, just open your browser's console and enter them.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/node-js/" name="/use-it/node-js/"></a>

### [Node.js](#/use-it/node-js/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/01-node-js.md)

<div class="docs-method-prose">

    npm install moment

    var moment = require('moment');
    moment().format();

**Note:** In **2.4.0**, the globally exported moment object was **deprecated**. It will be removed in next major release.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/browser/" name="/use-it/browser/"></a>

### [Browser](#/use-it/browser/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/02-browser.md)

<div class="docs-method-prose">

    <script src="moment.js"></script>
    <script>
        moment().format();
    </script>

Moment.js is available on [cdnjs.com](https://cdnjs.com/libraries/moment.js) and on [jsDelivr](https://www.jsdelivr.com/package/npm/moment).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/bower/" name="/use-it/bower/"></a>

### [Bower](#/use-it/bower/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/03-bower.md)

<div class="docs-method-prose">

[bower](https://bower.io/)

    bower install --save moment

Notable files are `moment.js`, `locale/*.js` and `min/moment-with-locales.js`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/require-js/" name="/use-it/require-js/"></a>

### [Require.js](#/use-it/require-js/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/04-require-js.md)

<div class="docs-method-prose">

We strongly recommend reading [this](https://github.com/requirejs/requirejs/issues/1554#issuecomment-226269905) if you plan to use moment with Require.js. Also upgrade to **2.14.0** or above for best experience.

As a start, you might have aquired moment through bower or node_modules or anything else that places moment.js together with a locales directory in a base folder. Then you should use a tool like [adapt-pkg-main](https://github.com/jrburke/adapt-pkg-main), or manually -- using [packages config](http://requirejs.org/docs/api.html#packages).

    requirejs.config({
      packages: [{
        name: 'moment',

        location: '[bower_components|node_modules]/moment'
        main: 'moment'
      }]
    });

With the above setup, you can require the core with `moment` and `de` locale with `moment/locale/de`.

    define(['moment'], function (moment) {
        console.log(moment().format('LLLL'));  
    });

    define(['moment', 'moment/locale/de'], function (moment) {
        moment.locale('de');
        console.log(moment().format('LLLL')); 
    });

    define(['moment/min/moment-with-locales'], function (moment) {
        moment.locale('de');
        console.log(moment().format('LLLL')); 
    });

    define(['require', 'moment'], function(require, moment) {

      require(['moment/locale/de'], function(localeModule) {

        console.log(moment().format('LLLL'));  

        moment.locale('de');

        console.log(moment().format('LLLL')); 
      })
    });

For more complicated use cases please read [excellent explanation by @jrburke](https://github.com/requirejs/requirejs/issues/1554#issuecomment-226269905).

Moment will still create a `moment` global, which is useful to plugins and other third-party code. If you wish to squash that global, use the `noGlobal` option on the module config.

    require.config({
        config: {
            moment: {
                noGlobal: true
            }
        }
    });

If you don't specify `noGlobal` then the globally exported moment will print a deprecation warning. From next major release you'll have to export it yourself if you want that behavior.

For version **2.5.x**, in case you use other plugins that rely on Moment but are not AMD-compatible you may need to add [`wrapShim: true`](https://github.com/jrburke/r.js/blob/b8a6982d2923ae8389355edaa50d2b7f8065a01a/build/example.build.js#L68-L78) to your r.js config.

**Note:** To allow moment.js plugins to be loaded in requirejs environments, moment is created as a named module. Because of this, moment **must** be loaded exactly as as `"moment"`, using `paths` to determine the directory. Requiring moment with a path like `"vendor\moment"` will return `undefined`.

**Note:** From version **2.9.0** moment exports itself as an anonymous module, so if you're using only the core (no locales / plugins), then you don't need config if you put it on a non-standard location.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/nuget/" name="/use-it/nuget/"></a>

### [NuGet](#/use-it/nuget/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/05-nuget.md)</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/meteor/" name="/use-it/meteor/"></a>

### [meteor](#/use-it/meteor/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/06-meteor.md)</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/browserify/" name="/use-it/browserify/"></a>

### [Browserify](#/use-it/browserify/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/07-browserify.md)

<div class="docs-method-prose">

    npm install moment

    var moment = require('moment');
    moment().format();

**Note:** There is a bug that prevents `moment.locale` from being loaded.

    var moment = require('moment');
    moment.locale('cs');
    console.log(moment.locale()); 

Use the workaround below

    var moment = require('moment');
    require('moment/locale/cs');
    console.log(moment.locale()); 

In order to include all the locales

    var moment = require('moment');
    require("moment/min/locales.min");
    moment.locale('cs');
    console.log(moment.locale()); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/typescript/" name="/use-it/typescript/"></a>

### [Typescript](#/use-it/typescript/) <span>2.13.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/08-typescript.md)

<div class="docs-method-prose">

As of version **2.13.0**, Moment includes a typescript definition file.

Install via NPM

    npm install moment

Import and use in your Typescript file

    import * as moment from 'moment';

    let now = moment().format('LLLL');

**Note:** If you have trouble importing moment, try adding `"allowSyntheticDefaultImports": true` in `compilerOptions` in your `tsconfig.json` file and then use the syntax

    import moment from 'moment';

**Locale Import**

To use `moment.locale` you first need to import the language you are targeting.

    import * as moment from 'moment';
    import 'moment/locale/pt-br';

    console.log(moment.locale()); 
    moment.locale('fr');
    console.log(moment.locale()); 
    moment.locale('pt-BR');
    console.log(moment.locale()); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/system-js/" name="/use-it/system-js/"></a>

### [System.js](#/use-it/system-js/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/09-system-js.md)

<div class="docs-method-prose">

To load moment, place it in the path specified by your System.config in the baseURL configuration. Then import it into your page.

    <script src="system.js"></script>
    <script>
      System.config({
        baseURL: '/app'
      });

      System.import('moment.js');
     </script>

If you need moment to be loaded as global, you can do this with the meta configuration:

    System.config({
      meta: {
        'moment': { format: 'global' }
      }
    });

Alternatively, to provide Moment as a global to only a specific dependency, you can do this:

    System.config({
      meta: {
        'path/to/global-file.js': {
          globals: {
            moment: 'moment'
          }
        }
      }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/other/" name="/use-it/other/"></a>

### [Other](#/use-it/other/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/10-other.md)</article>

<article class="docs-method"><a class="docs-method-target" id="/use-it/troubleshooting/" name="/use-it/troubleshooting/"></a>

### [Troubleshooting](#/use-it/troubleshooting/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/00-use-it/11-troubleshooting.md)

<div class="docs-method-prose">

If you are having any troubles, the first place to check is the [guides](https://momentjs.com/guides).

If you don't find what you are looking for there, try asking a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/momentjs) with the `momentjs` tag.

Note: More than half of the issues seen on Stack Overflow can be answered by [this blog post](https://maggiepint.com/2016/05/14/moment-js-shows-the-wrong-date/).

You can also use the [GitHub issue tracker](https://github.com/moment/moment/issues) to find related issues or open a new issue.

In addition, Moment has a [Gitter](https://gitter.im/moment/moment) where the internal team is frequently available.

For general troubleshooting help, [Stack Overflow](https://stackoverflow.com/questions/tagged/momentjs) is the preferred forum. Moment's maintainers are very active on Stack Overflow, as are several other knowledgeable users. The fastest response will be there.

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/parsing/" name="/parsing/"></a>

## [Parse](#/parsing/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/intro/" name="/parsing/intro/"></a>

<div class="docs-method-prose">

Instead of modifying the native `Date.prototype`, Moment.js creates a wrapper for the `Date` object. To get this wrapper object, simply call `moment()` with one of the supported input types.

The `Moment` prototype is exposed through `moment.fn`. If you want to add your own functions, that is where you would put them.

For ease of reference, any method on the `Moment.prototype` will be referenced in the docs as `moment#method`. So `Moment.prototype.format` == `moment.fn.format` == `moment#format`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/now/" name="/parsing/now/"></a>

### [Now](#/parsing/now/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/01-now.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment();

    moment([]);
    moment({});

</div>

To get the current date and time, just call `moment()` with no parameters.

    var now = moment();

This is essentially the same as calling `moment(new Date())`.

**Note:** From version **2.14.0**, `moment([])` and `moment({})` also return now. They used to default to start-of-today before 2.14.0, but that was arbitrary so it was changed.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/string/" name="/parsing/string/"></a>

### [String](#/parsing/string/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/02-string.md)

<div class="docs-method-prose">

When creating a moment from a string, we first check if the string matches known [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formats, we then check if the string matches the [RFC 2822 Date time](https://tools.ietf.org/html/rfc2822#section-3.3) format before dropping to the fall back of `new Date(string)` if a known format is not found.

    var day = moment("1995-12-25");

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

If a string does not match any of the above formats and is not able to be parsed with `Date.parse`, `moment#isValid` will return false.

    moment("not a real date").isValid(); 

#### The RFC 2822 date time format

Before parsing a RFC 2822 date time the string is cleansed to remove any comments and/or newline characters. The additional characters are legal in the format but add nothing to creating a valid moment instance.

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

### [String + Format](#/parsing/string-format/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/03-string-format.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment(String, String);
    moment(String, String, String);
    moment(String, String, Boolean);
    moment(String, String, String, Boolean);

</div>

If you know the format of an input string, you can use that to parse a moment.

    moment("12-25-1995", "MM-DD-YYYY");

The parser ignores non-alphanumeric characters, so both of the following will return the same thing.

    moment("12-25-1995", "MM-DD-YYYY");
    moment("12/25/1995", "MM-DD-YYYY");

The parsing tokens are similar to the formatting tokens used in `moment#format`.

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

<td>Month name in locale set by `moment.locale()`</td>

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

<td>Day name in locale set by `moment.locale()`</td>

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

From version **2.10.5**: fractional second tokens length 4 up to 9 can parse any number of digits, but will only consider the top 3 (milliseconds). Use if you have the time printed with many fractional digits and want to consume the input.

Note that the number of `S` characters provided is only relevant when parsing in strict mode. In standard mode, `S`, `SS`, `SSS`, `SSSS` are all equivalent, and interpreted as fractions of a second. For example, `.12` is always 120 milliseconds, passing `SS` will not cause it to be interpreted as 12 milliseconds.

Locale aware date and time formats are also available using `LT LTS L LL LLL LLLL`. They were added in version **2.2.1**, except `LTS` which was added **2.8.4**.

`Z ZZ` were added in version **1.2.0**.

`S SS SSS` were added in version **1.6.0**.

`X` was added in version **2.0.0**.

`k kk` was added in version **2.18.0**

Unless you specify a time zone offset, parsing a string will create a date in the current time zone.

    moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm");   
    moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"); 

If the moment that results from the parsed input does not exist, `moment#isValid` will return false.

    moment("2010 13",           "YYYY MM").isValid();     
    moment("2010 11 31",        "YYYY MM DD").isValid();  
    moment("2010 2 29",         "YYYY MM DD").isValid();  
    moment("2010 notamonth 29", "YYYY MMM DD").isValid(); 

As of version **2.0.0**, a locale key can be passed as the third parameter to `moment()` and `moment.utc()`.

    moment('2012 juillet', 'YYYY MMM', 'fr');
    moment('2012 July',    'YYYY MMM', 'en');

Moment's parser is very forgiving, and this can lead to undesired/unexpected behavior.

For example, the following behavior can be observed:

    moment('2016 is a date', 'YYYY-MM-DD').isValid() 

Previous to **2.13.0** the parser exhibited the following behavior. This has been corrected.

    moment('I am spartacus', 'h:hh A').isValid();     

As of version **2.3.0**, you may specify a boolean for the last argument to make Moment use strict parsing. Strict parsing requires that the format and input match exactly, _including delimeters_.

    moment('It is 2012-05-25', 'YYYY-MM-DD').isValid();       
    moment('It is 2012-05-25', 'YYYY-MM-DD', true).isValid(); 
    moment('2012-05-25',       'YYYY-MM-DD', true).isValid(); 
    moment('2012.05.25',       'YYYY-MM-DD', true).isValid(); 

You can use both locale and strictness.

    moment('2012-10-14', 'YYYY-MM-DD', 'fr', true);

Strict parsing is frequently the best parsing option. For more information about choosing strict vs forgiving parsing, see the [parsing guide.](https://momentjs.com/guides/#/parsing/)

#### Parsing two digit years

By default, two digit years above 68 are assumed to be in the 1900's and years 68 or below are assumed to be in the 2000's. This can be changed by replacing the `moment.parseTwoDigitYear` method. The only argument of this method is a string containing the two years input by the user, and should return the year as an integer.

    moment.parseTwoDigitYear = function(yearString) {
        return parseInt(yearString) + 2000;
    }

#### Parsing glued hour and minutes

From version **2.11.0** parsing `hmm`, `Hmm`, `hmmss` and `Hmmss` is supported:

    moment("123", "hmm").format("HH:mm") === "01:23"
    moment("1234", "hmm").format("HH:mm") === "12:34"

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/string-formats/" name="/parsing/string-formats/"></a>

### [String + Formats](#/parsing/string-formats/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/04-string-formats.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment(String, String[], String, Boolean);

</div>

If you don't know the exact format of an input string, but know it could be one of many, you can use an array of formats.

This is the same as [String + Format](#/parsing/string-format/), only it will try to match the input to multiple formats.

    moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);

Starting in version **2.3.0**, Moment uses some simple heuristics to determine which format to use. In order:

*   Prefer formats resulting in [valid](#/parsing/is-valid/) dates over invalid ones.
*   Prefer formats that parse more of the string than less and use more of the format than less, i.e. prefer stricter parsing.
*   Prefer formats earlier in the array than later.

    moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"]); 
    moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]);          

You may also specify a locale and strictness argument. They work the same as the single format case.

    moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr');       
    moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], true);       
    moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', true); 

**Note:** Parsing multiple formats is considerably slower than parsing a single format. If you can avoid it, it is much faster to parse a single format.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/special-formats/" name="/parsing/special-formats/"></a>

### [Special Formats](#/parsing/special-formats/) <span>2.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/05-special-formats.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment(String, moment.CUSTOM_FORMAT, [String], [Boolean]);
    moment(String, moment.HTML_FMT.DATETIME_LOCAL, [String], [Boolean]); 
    moment(String, [..., moment.ISO_8601, ...], [String], [Boolean]);

</div>

[ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) is a standard for time and duration display. Moment already supports parsing iso-8601 strings, but this can be specified explicitly in the format/list of formats when constructing a moment.

To specify iso-8601 parsing use `moment.ISO_8601` constant.

    moment("2010-01-01T05:06:07", moment.ISO_8601);
    moment("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601]);

As of version **2.20.0**, the following HTML5 formats are available:

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

<td>`moment.HTML5_FMT.DATETIME_LOCAL`</td>

<td>`YYYY-MM-DDTHH:mm`</td>

<td>2017-12-14T16:34</td>

<td>`<input type="datetime-local" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.DATETIME_LOCAL_SECONDS`</td>

<td>`YYYY-MM-DDTHH:mm:ss`</td>

<td>2017-12-14T16:34:10</td>

<td>`<input type="datetime-local" step="1" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.DATETIME_LOCAL_MS`</td>

<td>`YYYY-MM-DDTHH:mm:ss.SSS`</td>

<td>2017-12-14T16:34:10.234</td>

<td>`<input type="datetime-local" step="0.001" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.DATE`</td>

<td>`YYYY-MM-DD`</td>

<td>2017-12-14</td>

<td>`<input type="date" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.TIME`</td>

<td>`HH:mm`</td>

<td>16:34</td>

<td>`<input type="time" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.TIME_SECONDS`</td>

<td>`HH:mm:ss`</td>

<td>16:34:10</td>

<td>`<input type="time" step="1" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.TIME_MS`</td>

<td>`HH:mm:ss.SSS`</td>

<td>16:34:10.234</td>

<td>`<input type="time" step="0.001" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.WEEK`</td>

<td>`YYYY-[W]WW`</td>

<td>2017-W50</td>

<td>`<input type="week" />`</td>

</tr>

<tr>

<td>`moment.HTML5_FMT.MONTH`</td>

<td>`YYYY-MM`</td>

<td>2017-12</td>

<td>`<input type="month" />`</td>

</tr>

</tbody>

</table>

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/object/" name="/parsing/object/"></a>

### [Object](#/parsing/object/) <span>2.2.1+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/06-object.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment({unit: value, ...});

</div>

    moment({ hour:15, minute:10 });
    moment({ y    :2010, M     :3, d   :5, h    :15, m      :10, s      :3, ms          :123});
    moment({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
    moment({ years:2010, months:3, days:5, hours:15, minutes:10, seconds:3, milliseconds:123});
    moment({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123});
    moment({ years:'2010', months:'3', date:'5', hours:'15', minutes:'10', seconds:'3', milliseconds:'123'});  

You can create a moment by specifying some of the units in an object.

Omitted units default to 0 or the current date, month, and year.

`day` and `date` key both mean day-of-the-month.

`date` was added in **2.8.4**.

String values (as shown on the last line) are supported from version **2.11.0**.

Note that like `moment(Array)` and `new Date(year, month, date)`, months are 0 indexed.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/unix-timestamp-milliseconds/" name="/parsing/unix-timestamp-milliseconds/"></a>

### [Unix Timestamp (milliseconds)](#/parsing/unix-timestamp-milliseconds/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/07-unix-timestamp-milliseconds.md)

<div class="docs-method-prose">

Similar to `new Date(Number)`, you can create a moment by passing an integer value representing the number of _milliseconds_ since the Unix Epoch (Jan 1 1970 12AM UTC).

    var day = moment(1318781876406);

[Note: ECMAScript calls this a "Time Value"](https://www.ecma-international.org/ecma-262/6.0/#sec-time-values-and-time-range)

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/unix-timestamp/" name="/parsing/unix-timestamp/"></a>

### [Unix Timestamp (seconds)](#/parsing/unix-timestamp/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/08-unix-timestamp.md)

<div class="docs-method-prose">

To create a moment from a Unix timestamp (_seconds_ since the Unix Epoch), use `moment.unix(Number)`.

    var day = moment.unix(1318781876);

This is implemented as `moment(timestamp * 1000)`, so partial seconds in the input timestamp are included.

    var day = moment.unix(1318781876.721);

**Note:** Despite Unix timestamps being UTC-based, this function creates a moment object in _local_ mode. If you need UTC, then subsequently call `.utc()`, as in:

    var day = moment.unix(1318781876).utc();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/date/" name="/parsing/date/"></a>

### [Date](#/parsing/date/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/09-date.md)

<div class="docs-method-prose">

You can create a `Moment` with a pre-existing native Javascript `Date` object.

    var day = new Date(2011, 9, 16);
    var dayWrapper = moment(day);

This clones the `Date` object; further changes to the `Date` won't affect the `Moment`, and vice-versa.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/array/" name="/parsing/array/"></a>

### [Array](#/parsing/array/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/10-array.md)

<div class="docs-method-prose">

You can create a moment with an array of numbers that mirror the parameters passed to [new Date()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date)

`[year, month, day, hour, minute, second, millisecond]`

    moment([2010, 1, 14, 15, 25, 50, 125]); 

Any value past the year is optional, and will default to the lowest possible number.

    moment([2010]);        
    moment([2010, 6]);     
    moment([2010, 6, 10]); 

Construction with an array will create a date in the current time zone. To create a date from an array at UTC, use `moment.utc(Number[])`.

    moment.utc([2010, 1, 14, 15, 25, 50, 125]);

**Note:** Because this mirrors the native `Date` parameters, months, hours, minutes, seconds, and milliseconds are all zero indexed. Years and days of the month are 1 indexed.

This is often the cause of frustration, especially with months, so take note!

If the date represented by the array does not exist, `moment#isValid` will return false.

    moment([2010, 12]).isValid();     
    moment([2010, 10, 31]).isValid(); 
    moment([2010, 1, 29]).isValid();  

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/asp-net-json-date/" name="/parsing/asp-net-json-date/"></a>

### [ASP.NET JSON Date](#/parsing/asp-net-json-date/) <span>1.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/11-asp-net-json-date.md)

<div class="docs-method-prose">

Microsoft Web API returns JSON dates in proper ISO-8601 format by default, but older ASP.NET technologies may return dates in JSON as `/Date(1198908717056)/` or `/Date(1198908717056-0700)/`

If a string that matches this format is passed in, it will be parsed correctly.

    moment("/Date(1198908717056-0700)/"); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/moment-clone/" name="/parsing/moment-clone/"></a>

### [Moment Clone](#/parsing/moment-clone/) <span>1.2.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/12-moment-clone.md)

<div class="docs-method-prose">

All moments are mutable. If you want a clone of a moment, you can do so implicitly or explicitly.

Calling `moment()` on a moment will clone it.

    var a = moment([2012]);
    var b = moment(a);
    a.year(2000);
    b.year(); 

Additionally, you can call `moment#clone` to clone a moment.

    var a = moment([2012]);
    var b = a.clone();
    a.year(2000);
    b.year(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/utc/" name="/parsing/utc/"></a>

### [UTC](#/parsing/utc/) <span>1.5.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/13-utc.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.utc();
    moment.utc(Number);
    moment.utc(Number[]);
    moment.utc(String);
    moment.utc(String, String);
    moment.utc(String, String[]);
    moment.utc(String, String, String);
    moment.utc(String, String, Boolean);
    moment.utc(String, String, String, Boolean);
    moment.utc(Moment);
    moment.utc(Date);

</div>

By default, moment parses and displays in local time.

If you want to parse or display a moment in UTC, you can use `moment.utc()` instead of `moment()`.

This brings us to an interesting feature of Moment.js. UTC mode.

While in UTC mode, all display methods will display in UTC time instead of local time.

    moment().format();     
    moment.utc().format(); 

Additionally, while in UTC mode, all getters and setters will internally use the `Date#getUTC*` and `Date#setUTC*` methods instead of the `Date#get*` and `Date#set*` methods.

    moment.utc().seconds(30).valueOf() === new Date().setUTCSeconds(30);
    moment.utc().seconds()   === new Date().getUTCSeconds();

It is important to note that though the displays differ above, they are both the same moment in time.

    var a = moment();
    var b = moment.utc();
    a.format();  
    b.format();  
    a.valueOf(); 
    b.valueOf(); 

Any moment created with `moment.utc()` will be in UTC mode, and any moment created with `moment()` will not.

To switch from UTC to local time, you can use [moment#utc](#/manipulating/utc/) or [moment#local](#/manipulating/local/).

    var a = moment.utc([2011, 0, 1, 8]);
    a.hours(); 
    a.local();
    a.hours(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/parse-zone/" name="/parsing/parse-zone/"></a>

### [parseZone](#/parsing/parse-zone/) <span>2.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/14-parse-zone.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.parseZone()
    moment.parseZone(String)
    moment.parseZone(String, String)
    moment.parseZone(String, [String])
    moment.parseZone(String, String, Boolean)
    moment.parseZone(String, String, String, Boolean)

</div>

Moment's string parsing functions like `moment(string)` and `moment.utc(string)` accept offset information if provided, but convert the resulting Moment object to local or UTC time. In contrast, `moment.parseZone()` parses the string but keeps the resulting Moment object in a fixed-offset timezone with the provided offset in the string.

    moment.parseZone("2013-01-01T00:00:00-13:00").utcOffset(); 
    moment.parseZone('2013 01 01 05 -13:00', 'YYYY MM DD HH ZZ').utcOffset(); 
    moment.parseZone('2013-01-01-13:00', ['DD MM YYYY ZZ', 'YYYY MM DD ZZ']).utcOffset(); 

It also allows you to pass locale and strictness arguments.

    moment.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', true).utcOffset(); 
    moment.parseZone("2013-01-01-13:00", 'YYYY MM DD ZZ', true).utcOffset(); 
    moment.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', 'fr', true).utcOffset(); 
    moment.parseZone("2013 01 01 -13:00", ['DD MM YYYY ZZ', 'YYYY MM DD ZZ'], 'fr', true).utcOffset(); 

`moment.parseZone` is equivalent to parsing the string and using `moment#utcOffset` to parse the zone.

    var s = "2013-01-01T00:00:00-13:00";
    moment(s).utcOffset(s);

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/is-valid/" name="/parsing/is-valid/"></a>

### [Validation](#/parsing/is-valid/) <span>1.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/15-is-valid.md)

<div class="docs-method-prose">

Moment applies stricter initialization rules than the `Date` constructor.

    new Date(2013, 25, 14).toString(); 
    moment([2015, 25, 35]).format();   

You can check whether the Moment considers the date invalid using `moment#isValid`. You can check the metrics used by `#isValid` using `moment#parsingFlags`, which returns an object.

The following parsing flags result in an invalid date:

*   `overflow`: An overflow of a date field, such as a 13th month, a 32nd day of the month (or a 29th of February on non-leap years), a 367th day of the year, etc. `overflow` contains the index of the invalid unit to match `#invalidAt` (see below); `-1` means no overflow.
*   `invalidMonth`: An invalid month name, such as `moment('Marbruary', 'MMMM');`. Contains the invalid month string itself, or else null.
*   `empty`: An input string that contains nothing parsable, such as `moment('this is nonsense');`. Boolean.
*   `nullInput`: A `null` input, like `moment(null);`. Boolean.
*   `invalidFormat`: An empty list of formats, such as `moment('2013-05-25', [])`. Boolean.
*   `userInvalidated`: A date created explicitly as invalid, such as `moment.invalid()`. Boolean.

    In addition to the above, As of **2.13.0** the meridiem and parsedDateParts flags work together to determine date validity.

*   `meridiem`: Indicates what meridiem (AM/PM) was parsed, if any. String.
*   `parsedDateParts`: Returns an array of date parts parsed in descending order - i.e. parsedDateParts[0] === year. If no parts are present, but meridiem has value, date is invalid. Array.

Additionally, if the Moment is parsed in strict mode, these flags must be empty for the Moment to be valid:

*   `unusedTokens`: array of format substrings not found in the input string
*   `unusedInput`: array of input substrings not matched to the format string

**Note:** Moment's concept of validity became more strict and consistent between **2.2** and **2.3**.

Additionally, you can use `moment#invalidAt` to determine which date unit overflowed.

    var m = moment("2011-10-10T10:20:90");
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

If a moment is invalid, it behaves like a NaN in floating point operations.

All of the following produce invalid moments:

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

*   `invalid.format(anyFmt)` results in `'Invalid Date'` in the current locale
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

<article class="docs-method"><a class="docs-method-target" id="/parsing/creation-data/" name="/parsing/creation-data/"></a>

### [Creation Data](#/parsing/creation-data/) <span>2.11.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/16-creation-data.md)

<div class="docs-method-prose">

After a moment object is created, all of the inputs can be accessed with `creationData()` method:

    moment("2013-01-02", "YYYY-MM-DD", true).creationData() === {
        input: "2013-01-02",
        format: "YYYY-MM-DD",
        locale: Locale obj,
        isUTC: false,
        strict: true
    }

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/parsing/defaults/" name="/parsing/defaults/"></a>

### [Defaults](#/parsing/defaults/) <span>2.2.1+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/01-parsing/17-defaults.md)

<div class="docs-method-prose">

You can create a moment object specifying only some of the units, and the rest will be defaulted to the current day, month or year, or 0 for hours, minutes, seconds and milliseconds.

Defaulting to now, when nothing is passed:

    moment();  

Defaulting to today, when only hours, minutes, seconds and milliseconds are passed:

    moment(5, "HH");  
    moment({hour: 5});  
    moment({hour: 5, minute: 10});  
    moment({hour: 5, minute: 10, seconds: 20});  
    moment({hour: 5, minute: 10, seconds: 20, milliseconds: 300});  

Defaulting to this month and year, when only days and smaller units are passed:

    moment(5, "DD");  
    moment("4 05:06:07", "DD hh:mm:ss");  

Defaulting to this year, if year is not specified:

    moment(3, "MM");  
    moment("Apr 4 05:06:07", "MMM DD hh:mm:ss");  

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/get-set/" name="/get-set/"></a>

## [Get + Set](#/get-set/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/intro/" name="/get-set/intro/"></a>

<div class="docs-method-prose">

Moment.js uses overloaded getters and setters. You may be familiar with this pattern from its use in jQuery.

Calling these methods without parameters acts as a getter, and calling them with a parameter acts as a setter.

These map to the corresponding function on the native `Date` object.

    moment().seconds(30).valueOf() === new Date().setSeconds(30);
    moment().seconds()   === new Date().getSeconds();

If you are in [UTC mode](#/manipulating/utc/), they will map to the UTC equivalent.

    moment.utc().seconds(30).valueOf() === new Date().setUTCSeconds(30);
    moment.utc().seconds()   === new Date().getUTCSeconds();

For convenience, both singular and plural method names exist as of version **2.0.0**.

**Note:** All of these methods mutate the original moment when used as setters.

**Note:** From **2.19.0** passing `NaN` to any setter is a no-op. Before **2.19.0** it was invalidating the moment in a wrong way.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/millisecond/" name="/get-set/millisecond/"></a>

### [Millisecond](#/get-set/millisecond/) <span>1.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/01-millisecond.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().millisecond(Number);
    moment().millisecond(); 
    moment().milliseconds(Number);
    moment().milliseconds(); 

</div>

Gets or sets the milliseconds.

Accepts numbers from 0 to 999\. If the range is exceeded, it will bubble up to the seconds.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/second/" name="/get-set/second/"></a>

### [Second](#/get-set/second/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/02-second.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().second(Number);
    moment().second(); 
    moment().seconds(Number);
    moment().seconds(); 

</div>

Gets or sets the seconds.

Accepts numbers from 0 to 59\. If the range is exceeded, it will bubble up to the minutes.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/minute/" name="/get-set/minute/"></a>

### [Minute](#/get-set/minute/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/03-minute.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().minute(Number);
    moment().minute(); 
    moment().minutes(Number);
    moment().minutes(); 

</div>

Gets or sets the minutes.

Accepts numbers from 0 to 59\. If the range is exceeded, it will bubble up to the hour.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/hour/" name="/get-set/hour/"></a>

### [Hour](#/get-set/hour/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/04-hour.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().hour(Number);
    moment().hour(); 
    moment().hours(Number);
    moment().hours(); 

</div>

Gets or sets the hour.

Accepts numbers from 0 to 23\. If the range is exceeded, it will bubble up to the day.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/date/" name="/get-set/date/"></a>

### [Date of Month](#/get-set/date/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/05-date.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().date(Number);
    moment().date(); 
    moment().dates(Number);
    moment().dates(); 

</div>

Gets or sets the day of the month.

Accepts numbers from 1 to 31\. If the range is exceeded, it will bubble up to the months.

**Note:** `Moment#date` is for the date of the month, and `Moment#day` is for the day of the week.

**Note:** if you chain multiple actions to construct a date, you should start from a year, then a month, then a day etc. Otherwise you may get unexpected results, like when `day=31` and current month has only 30 days (the same applies to native JavaScript `Date` manipulation), the returned date will be 1st of the following month.

Bad: `moment().date(day).month(month).year(year)`

Good: `moment().year(year).month(month).date(day)`

**2.16.0** deprecated using `moment().dates()`. Use `moment().date()` instead.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/day/" name="/get-set/day/"></a>

### [Day of Week](#/get-set/day/) <span>1.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/06-day.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().day(Number|String);
    moment().day(); 
    moment().days(Number|String);
    moment().days(); 

</div>

Gets or sets the day of the week.

This method can be used to set the day of the week, with Sunday as 0 and Saturday as 6.

If the range is exceeded, it will bubble up to other weeks.

    moment().day(-7); 
    moment().day(7); 
    moment().day(10); 
    moment().day(24); 

**Note:** `Moment#date` is for the date of the month, and `Moment#day` is for the day of the week.

As of **2.1.0**, a day name is also supported. This is parsed in the moment's current locale.

    moment().day("Sunday");
    moment().day("Monday");

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/weekday/" name="/get-set/weekday/"></a>

### [Day of Week (Locale Aware)](#/get-set/weekday/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/07-weekday.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().weekday(Number);
    moment().weekday(); 

</div>

Gets or sets the day of the week according to the locale.

If the locale assigns Monday as the first day of the week, `moment().weekday(0)` will be Monday. If Sunday is the first day of the week, `moment().weekday(0)` will be Sunday.

As with `moment#day`, if the range is exceeded, it will bubble up to other weeks.

    moment().weekday(-7); 
    moment().weekday(7); 

    moment().weekday(-7); 
    moment().weekday(7); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-weekday/" name="/get-set/iso-weekday/"></a>

### [ISO Day of Week](#/get-set/iso-weekday/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/08-iso-weekday.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isoWeekday(Number);
    moment().isoWeekday(); 

</div>

Gets or sets the [ISO day of the week](https://en.wikipedia.org/wiki/ISO_week_date) with `1` being Monday and `7` being Sunday.

As with `moment#day`, if the range is exceeded, it will bubble up to other weeks.

    moment().isoWeekday(1); 
    moment().isoWeekday(7); 

A day name is also supported. This is parsed in the moment's current locale.

    moment().isoWeekday("Sunday");
    moment().isoWeekday("Monday");

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/day-of-year/" name="/get-set/day-of-year/"></a>

### [Day of Year](#/get-set/day-of-year/) <span>2.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/09-day-of-year.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().dayOfYear(Number);
    moment().dayOfYear(); 

</div>

Gets or sets the day of the year.

Accepts numbers from 1 to 366\. If the range is exceeded, it will bubble up to the years.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/week/" name="/get-set/week/"></a>

### [Week of Year](#/get-set/week/) <span>2.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/10-week.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().week(Number);
    moment().week(); 
    moment().weeks(Number);
    moment().weeks(); 

</div>

Gets or sets the week of the year.

Because different locales define week of year numbering differently, Moment.js added `moment#week` to get/set the localized week of the year.

The week of the year varies depending on which day is the first day of the week (Sunday, Monday, etc), and which week is the first week of the year.

For example, in the United States, Sunday is the first day of the week. The week with January 1st in it is the first week of the year.

In France, Monday is the first day of the week, and the week with January 4th is the first week of the year.

The output of `moment#week` will depend on the [locale](#/i18n) for that moment.

When setting the week of the year, the day of the week is retained.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-week/" name="/get-set/iso-week/"></a>

### [Week of Year (ISO)](#/get-set/iso-week/) <span>2.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/11-iso-week.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isoWeek(Number);
    moment().isoWeek(); 
    moment().isoWeeks(Number);
    moment().isoWeeks(); 

</div>

Gets or sets the [ISO week of the year](https://en.wikipedia.org/wiki/ISO_week_date).

When setting the week of the year, the day of the week is retained.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/month/" name="/get-set/month/"></a>

### [Month](#/get-set/month/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/12-month.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().month(Number|String);
    moment().month(); 
    moment().months(Number|String);
    moment().months(); 

</div>

Gets or sets the month.

Accepts numbers from 0 to 11\. If the range is exceeded, it will bubble up to the year.

**Note:** Months are zero indexed, so January is month 0.

As of **2.1.0**, a month name is also supported. This is parsed in the moment's current locale.

    moment().month("January");
    moment().month("Feb");

Before version **2.1.0**, if a moment changed months and the new month did not have enough days to keep the current day of month, it would overflow to the next month.

As of version **2.1.0**, this was changed to be clamped to the end of the target month.

    moment([2012, 0, 31]).month(1).format("YYYY-MM-DD"); 

    moment([2012, 0, 31]).month(1).format("YYYY-MM-DD"); 

**2.16.0** deprecated using `moment().months()`. Use `moment().month()` instead.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/quarter/" name="/get-set/quarter/"></a>

### [Quarter](#/get-set/quarter/) <span>2.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/13-quarter.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().quarter(); 
    moment().quarter(Number);
    moment().quarters(); 
    moment().quarters(Number);

</div>

Gets the quarter (1 to 4).

    moment('2013-01-01T00:00:00.000').quarter() 
    moment('2013-04-01T00:00:00.000').subtract(1, 'ms').quarter() 
    moment('2013-04-01T00:00:00.000').quarter() 
    moment('2013-07-01T00:00:00.000').subtract(1, 'ms').quarter() 
    moment('2013-07-01T00:00:00.000').quarter() 
    moment('2013-10-01T00:00:00.000').subtract(1, 'ms').quarter() 
    moment('2013-10-01T00:00:00.000').quarter() 
    moment('2014-01-01T00:00:00.000').subtract(1, 'ms').quarter() 

Sets the quarter (1 to 4).

    moment('2013-01-01T00:00:00.000').quarter(2) 
    moment('2013-02-05T05:06:07.000').quarter(2).format() 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/year/" name="/get-set/year/"></a>

### [Year](#/get-set/year/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/14-year.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().year(Number);
    moment().year(); 
    moment().years(Number);
    moment().years(); 

</div>

Gets or sets the year.

Accepts numbers from -270,000 to 270,000.

**2.16.0** deprecated using `moment().years()`. Use `moment().year()` instead.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/week-year/" name="/get-set/week-year/"></a>

### [Week Year](#/get-set/week-year/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/15-week-year.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().weekYear(Number);
    moment().weekYear(); 

</div>

Gets or sets the week-year according to the locale.

Because the first day of the first week does not always fall on the first day of the year, sometimes the week-year will differ from the month year.

For example, in the US, the week that contains Jan 1 is always the first week. In the US, weeks also start on Sunday. If Jan 1 was a Monday, Dec 31 would belong to the same week as Jan 1, and thus the same week-year as Jan 1\. Dec 30 would have a different week-year than Dec 31.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-week-year/" name="/get-set/iso-week-year/"></a>

### [Week Year (ISO)](#/get-set/iso-week-year/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/16-iso-week-year.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isoWeekYear(Number);
    moment().isoWeekYear(); 

</div>

Gets or sets the [ISO week-year](https://en.wikipedia.org/wiki/ISO_week_date).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/weeks-in-year/" name="/get-set/weeks-in-year/"></a>

### [Weeks In Year](#/get-set/weeks-in-year/) <span>2.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/17-weeks-in-year.md)

<div class="docs-method-prose">

Gets the number of weeks according to locale in the current moment's year.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/iso-weeks-in-year/" name="/get-set/iso-weeks-in-year/"></a>

### [Weeks In Year (ISO)](#/get-set/iso-weeks-in-year/) <span>2.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/18-iso-weeks-in-year.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isoWeeksInYear();

</div>

Gets the number of weeks in the current moment's year, according to [ISO weeks](https://en.wikipedia.org/wiki/ISO_week_date).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/get/" name="/get-set/get/"></a>

### [Get](#/get-set/get/) <span>2.2.1+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/19-get.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().get('year');
    moment().get('month');  
    moment().get('date');
    moment().get('hour');
    moment().get('minute');
    moment().get('second');
    moment().get('millisecond');

</div>

String getter. In general

    moment().get(unit) === moment()[unit]()

Units are case insensitive, and support plural and short forms: year (years, y), month (months, M), date (dates, D), hour (hours, h), minute (minutes, m), second (seconds, s), millisecond (milliseconds, ms).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/set/" name="/get-set/set/"></a>

### [Set](#/get-set/set/) <span>2.2.1+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/20-set.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().set(String, Int);
    moment().set(Object(String, Int));

</div>

Generic setter, accepting unit as first argument, and value as second:

    moment().set('year', 2013);
    moment().set('month', 3);  
    moment().set('date', 1);
    moment().set('hour', 13);
    moment().set('minute', 20);
    moment().set('second', 30);
    moment().set('millisecond', 123);

    moment().set({'year': 2013, 'month': 3});

Units are case insensitive, and support plural and short forms: year (years, y), month (months, M), date (dates, D), hour (hours, h), minute (minutes, m), second (seconds, s), millisecond (milliseconds, ms).

Object parsing was added in **2.9.0**

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/max/" name="/get-set/max/"></a>

### [Maximum](#/get-set/max/) <span>2.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/21-max.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.max(Moment[,Moment...]);
    moment.max(Moment[]);

</div>

Returns the maximum (most distant future) of the given moment instances.

For example:

    var a = moment().subtract(1, 'day');
    var b = moment().add(1, 'day');
    moment.max(a, b);  

    var friends = fetchFriends(); 
    var friendsBirthDays = friends.map(function(friend){
        return moment(friend.birthday, 'DD.MM.YYYY');
    });
    moment.max(friendsBirthDays);  

With no arguments the function returns a moment instance with the current time.

From version **2.10.5**, if an invalid moment is one of the arguments, the result is an invalid moment.

    moment.max(moment(), moment.invalid()).isValid() === false
    moment.max(moment.invalid(), moment()).isValid() === false
    moment.max([moment(), moment.invalid()]).isValid() === false
    moment.max([moment.invalid(), moment()]).isValid() === false

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/get-set/min/" name="/get-set/min/"></a>

### [Minimum](#/get-set/min/) <span>2.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/02-get-set/22-min.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.min(Moment[,Moment...]);
    moment.min(Moment[]);

</div>

Returns the minimum (most distant past) of the given moment instances.

For example:

    var a = moment().subtract(1, 'day');
    var b = moment().add(1, 'day');
    moment.min(a, b);  
    moment.min([a, b]); 

With no arguments the function returns a moment instance with the current time.

From version **2.10.5**, if an invalid moment is one of the arguments, the result is an invalid moment.

    moment.min(moment(), moment.invalid()).isValid() === false
    moment.min(moment.invalid(), moment()).isValid() === false
    moment.min([moment(), moment.invalid()]).isValid() === false
    moment.min([moment.invalid(), moment()]).isValid() === false

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/manipulating/" name="/manipulating/"></a>

## [Manipulate](#/manipulating/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/intro/" name="/manipulating/intro/"></a>

<div class="docs-method-prose">

Once you have a `Moment`, you may want to manipulate it in some way. There are a number of methods to help with this.

Moment.js uses the [fluent interface pattern](https://en.wikipedia.org/wiki/Fluent_interface), also known as [method chaining](https://en.wikipedia.org/wiki/Method_chaining). This allows you to do crazy things like the following.

    moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);

**Note:** It should be noted that moments are mutable. Calling any of the manipulation methods will change the original moment.

If you want to create a copy and manipulate it, you should use `moment#clone` before manipulating the moment. [More info on cloning.](#/parsing/moment-clone/)

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/add/" name="/manipulating/add/"></a>

### [Add](#/manipulating/add/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/01-add.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().add(Number, String);
    moment().add(Duration);
    moment().add(Object);

</div>

Mutates the original moment by adding time.

This is a pretty robust function for adding time to an existing moment. To add time, pass the key of what time you want to add, and the amount you want to add.

    moment().add(7, 'days');

There are some shorthand keys as well if you're into that whole brevity thing.

    moment().add(7, 'd');

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

    moment().add(7, 'days').add(1, 'months'); 
    moment().add({days:7,months:1}); 

There are no upper limits for the amounts, so you can overload any of the parameters.

    moment().add(1000000, 'milliseconds'); 
    moment().add(360, 'days'); 

#### Special considerations for months and years

If the day of the month on the original date is greater than the number of days in the final month, the day of the month will change to the last day in the final month.

    moment([2010, 0, 31]);                  
    moment([2010, 0, 31]).add(1, 'months'); 

There are also special considerations to keep in mind when adding time that crosses over daylight saving time. If you are adding years, months, weeks, or days, the original hour will always match the added hour.

    var m = moment(new Date(2011, 2, 12, 5, 0, 0)); 
    m.hours(); 
    m.add(1, 'days').hours(); 

If you are adding hours, minutes, seconds, or milliseconds, the assumption is that you want precision to the hour, and will result in a different hour.

    var m = moment(new Date(2011, 2, 12, 5, 0, 0)); 
    m.hours(); 
    m.add(24, 'hours').hours(); 

Alternatively, you can use [durations](#/durations/) to add to moments.

    var duration = moment.duration({'days' : 1});
    moment([2012, 0, 31]).add(duration); 

Before version **2.8.0**, the `moment#add(String, Number)` syntax was also supported. It has been deprecated in favor of `moment#add(Number, String)`.

    moment().add('seconds', 1); 
    moment().add(1, 'seconds');

As of **2.12.0** when decimal values are passed for days and months, they are rounded to the nearest integer. Weeks, quarters, and years are converted to days or months, and then rounded to the nearest integer.

    moment().add(1.5, 'months') == moment().add(2, 'months')
    moment().add(.7, 'years') == moment().add(8, 'months') 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/subtract/" name="/manipulating/subtract/"></a>

### [Subtract](#/manipulating/subtract/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/02-subtract.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().subtract(Number, String);
    moment().subtract(Duration);
    moment().subtract(Object);

</div>

Mutates the original moment by subtracting time.

This is exactly the same as `moment#add`, only instead of adding time, it subtracts time.

    moment().subtract(7, 'days');

Before version **2.8.0**, the `moment#subtract(String, Number)` syntax was also supported. It has been deprecated in favor of `moment#subtract(Number, String)`.

    moment().subtract('seconds', 1); 
    moment().subtract(1, 'seconds');

As of **2.12.0** when decimal values are passed for days and months, they are rounded to the nearest integer. Weeks, quarters, and years are converted to days or months, and then rounded to the nearest integer.

    moment().subtract(1.5, 'months') == moment().subtract(2, 'months')
    moment().subtract(.7, 'years') == moment().subtract(8, 'months') 

Note that in order to make the operations `moment.add(-.5, 'days')` and `moment.subtract(.5, 'days')` equivalent, -.5, -1.5, -2.5, etc are rounded down.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/start-of/" name="/manipulating/start-of/"></a>

### [Start of Time](#/manipulating/start-of/) <span>1.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/03-start-of.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().startOf(String);

</div>

Mutates the original moment by setting it to the start of a unit of time.

    moment().startOf('year');    
    moment().startOf('month');   
    moment().startOf('quarter');  
    moment().startOf('week');    
    moment().startOf('isoWeek'); 
    moment().startOf('day');     
    moment().startOf('date');     
    moment().startOf('hour');    
    moment().startOf('minute');  
    moment().startOf('second');  

These shortcuts are essentially the same as the following.

    moment().startOf('year');
    moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);

    moment().startOf('hour');
    moment().minutes(0).seconds(0).milliseconds(0)

As of version **2.0.0**, `moment#startOf('day')` replaced `moment#sod`.

**Note:** `moment#startOf('week')` was added in version **2.0.0**.

As of version **2.1.0**, `moment#startOf('week')` uses the locale aware week start day.

**Note:** `moment#startOf('isoWeek')` was added in version **2.2.0**.

**Note:** `moment#startOf('date')` was added as an alias for day in **2.13.0**

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/end-of/" name="/manipulating/end-of/"></a>

### [End of Time](#/manipulating/end-of/) <span>1.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/04-end-of.md)

<div class="docs-method-prose">

Mutates the original moment by setting it to the end of a unit of time.

This is the same as `moment#startOf`, only instead of setting to the start of a unit of time, it sets to the end of a unit of time.

    moment().endOf("year"); 

As of version **2.0.0**, `moment#endOf('day')` replaced `moment#eod`.

**Note:** `moment#endOf('week')` was added in version **2.0.0**.

As of version **2.1.0**, `moment#endOf('week')` uses the locale aware week start day.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/max/" name="/manipulating/max/"></a>

### [Maximum](#/manipulating/max/) <span>From 2.1.0, Deprecated 2.7.0</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/05-max.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().max(Moment|String|Number|Date|Array);

</div>

**Note:** This function has been **deprecated** in **2.7.0**. Consider [`moment.min`](https://momentjs.com/docs/#/get-set/min/) instead.

* * *

Limits the moment to a maximum of another moment value. So `a.max(b)` is the same as `a = moment.min(a, b)` (note that `max` is converted to `min`).

Sometimes, server clocks are not quite in sync with client clocks. This ends up displaying humanized strings such as "in a few seconds" rather than "a few seconds ago". You can prevent that with `moment#max()`:

This is the counterpart for `moment#min`.

    var momentFromServer = moment(input);
    var clampedMoment = momentFromServer.max();

You can pass anything to `moment#max` that you would pass to `moment()`.

    moment().max(moment().add(1, 'd'));
    moment().max("2013-04-20T20:00:00+0800");
    moment().max("Jan 1 2001", "MMM D YYYY");
    moment().max(new Date(2012, 1, 8));

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/min/" name="/manipulating/min/"></a>

### [Minimum](#/manipulating/min/) <span>From 2.1.0, Deprecated 2.7.0</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/06-min.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().min(Moment|String|Number|Date|Array);

</div>

**Note:** This function has been **deprecated** in **2.7.0**. Consider [`moment.max`](https://momentjs.com/docs/#/get-set/max/) instead.

* * *

Limits the moment to a minimum of another moment value. So `a.min(b)` is the same as `a = moment.max(a, b)` (note that `min` is converted to `max`).

This is the counterpart for `moment#max`.

    moment().min("2013-04-20T20:00:00+0800");

This can be used in conjunction with `moment#max` to clamp a moment to a range.

    var start  = moment().startOf('week');
    var end    = moment().endOf('week');
    var actual = moment().min(start).max(end);

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/local/" name="/manipulating/local/"></a>

### [Local](#/manipulating/local/) <span>1.5.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/07-local.md)

<div class="docs-method-prose">

Sets a flag on the original moment to use local time to display a moment instead of the original moment's time.

    var a = moment.utc([2011, 0, 1, 8]);
    a.hours(); 
    a.local();
    a.hours(); 

Local can also be used to convert out of a fixed offset mode:

    moment.parseZone('2016-05-03T22:15:01+02:00').local().format(); 

See [moment.utc()](#/parsing/utc/) for more information on UTC mode.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/utc/" name="/manipulating/utc/"></a>

### [UTC](#/manipulating/utc/) <span>1.5.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/08-utc.md)

<div class="docs-method-prose">

Sets a flag on the original moment to use UTC to display a moment instead of the original moment's time.

    var a = moment([2011, 0, 1, 8]);
    a.hours(); 
    a.utc();
    a.hours(); 

UTC can also be used to convert out of a fixed offset mode:

    moment.parseZone('2016-05-03T22:15:01+02:00').utc().format(); 

See [moment.utc()](#/parsing/utc/) for more information on UTC mode.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/utc-offset/" name="/manipulating/utc-offset/"></a>

### [UTC offset](#/manipulating/utc-offset/) <span>2.9.0++</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/09-utc-offset.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().utcOffset();
    moment().utcOffset(Number|String);
    moment().utcOffset(Number|String, Boolean);

</div>

Get the UTC offset in minutes.

**Note:** Unlike [`moment.fn.zone`](https://momentjs.com/docs/#/manipulating/timezone-offset/) this function returns the real offset from UTC, not the reverse offset (as returned by `Date.prototype.getTimezoneOffset`).

Getting the `utcOffset` of the current object:

    moment().utcOffset(); 

Setting the UTC offset by supplying minutes. Note that once you set an offset, it's fixed and won't change on its own (i.e there are no DST rules). If you want an actual time zone -- time in a particular location, like `America/Los_Angeles`, consider [moment-timezone](https://momentjs.com/timezone/).

    moment().utcOffset(120);

If the input is less than `16` and greater than `-16`, it will interpret your input as hours instead.

    moment().utcOffset(8);  
    moment().utcOffset(480);  

It is also possible to set the UTC offset from a string.

    moment().utcOffset("+08:00");
    moment().utcOffset(8);
    moment().utcOffset(480);

`moment#utcOffset` will search the string for the first match of `+00:00 +0000 -00:00 -0000 Z`, so you can even pass an ISO8601 formatted string and the moment will be changed to that UTC offset.

Note that the string, if not 'Z', is required to start with the `+` or `-` character.

    moment().utcOffset("2013-03-07T07:00:00+08:00");

The `utcOffset` function has an optional second parameter which accepts a boolean value indicating whether to keep the existing time of day.

*   Passing `false` (the default) will keep the same instant in Universal Time, but the local time will change.

*   Passing `true` will keep the same local time, but at the expense of choosing a different point in Universal Time.

One use of this feature is if you want to construct a moment with a specific time zone offset using only numeric input values:

    moment([2016, 0, 1, 0, 0, 0]).utcOffset(-5, true) 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/manipulating/timezone-offset/" name="/manipulating/timezone-offset/"></a>

### [Time zone Offset](#/manipulating/timezone-offset/) <span>From 1.2.0, deprecated 2.9.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/03-manipulating/10-timezone-offset.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().zone();
    moment().zone(Number|String);

</div>

**Note:** This function has been **deprecated** in **2.9.0**. Consider [`moment.fn.utcOffset`](https://momentjs.com/docs/#/manipulating/utc-offset/) instead.

Get the time zone offset in minutes.

    moment().zone(); 

As of version **2.1.0**, it is possible to set the offset by passing in the number of minutes offset from GMT.

    moment().zone(120);

If the input is less than `16` and greater than `-16`, it will interpret your input as hours instead.

    moment().zone(480);
    moment().zone(8);

It is also possible to set the zone from a string.

    moment().zone("-08:00");

`moment#zone` will search the string for the first match of `+00:00 +0000 -00:00 -0000`, so you can even pass an ISO8601 formatted string and the moment will be changed to that zone.

    moment().zone("2013-03-07T07:00:00-08:00");

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/displaying/" name="/displaying/"></a>

## [Display](#/displaying/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/intro/" name="/displaying/intro/"></a>

Once parsing and manipulation are done, you need some way to display the moment.

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/format/" name="/displaying/format/"></a>

### [Format](#/displaying/format/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/01-format.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().format();
    moment().format(String);

</div>

This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.

    moment().format();                                
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
    moment().format("ddd, hA");                       
    moment('gibberish').format('YYYY MM DD');         

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
**Note:** as of **1.6.0**, the z/zz format tokens have been deprecated from plain moment objects. [Read more about it here.](https://github.com/moment/moment/issues/162) However, they _do_ work if you are using a specific time zone with the moment-timezone addon.</td>

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

`Z ZZ` were added in **1.2.0**.

`S SS SSS` were added in **1.6.0**.

`X` was added in **2.0.0**.

`e E gg gggg GG GGGG` were added in **2.1.0**.

`x` was added in **2.8.4**.

`SSSS` to `SSSSSSSSS` were added in **2.10.5**. They display 3 significant digits and the rest is filled with zeros.

`k` and `kk` were added in **2.13.0**.

#### Localized formats

Because preferred formatting differs based on locale, there are a few tokens that can be used to format a moment based on its locale.

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

    moment().format('[today] dddd'); 

#### Similarities and differences with LDML

**Note:** While these date formats are very similar to LDML date formats, there are a few minor differences regarding day of month, day of year, and day of week.

For a breakdown of a few different date formatting tokens across different locales, see [this chart of date formatting tokens.](https://docs.google.com/spreadsheet/ccc?key=0AtgZluze7WMJdDBOLUZfSFIzenIwOHNjaWZoeGFqbWc&hl=en_US#gid=0)

#### Formatting speed

To compare Moment.js formatting speed against other libraries, check out [this comparison against other libraries](https://jsperf.com/date-formatting/49).

#### Other tokens

If you are more comfortable working with strftime instead of LDML-like parsing tokens, you can use Ben Oakes' plugin. [benjaminoakes/moment-strftime](https://github.com/benjaminoakes/moment-strftime).

#### Default format

As of version **1.5.0**, calling `moment#format` without a format will default to `moment.defaultFormat`. Out of the box, `moment.defaultFormat` is the ISO8601 format `YYYY-MM-DDTHH:mm:ssZ`.

As of version **2.13.0**, when in UTC mode, the default format is governed by `moment.defaultFormatUtc` which is in the format `YYYY-MM-DDTHH:mm:ss[Z]`. This returns `Z` as the offset, instead of `+00:00`.

In certain instances, a local timezone (such as `Atlantic/Reykjavik`) may have a zero offset, and will be considered to be UTC. In such cases, it may be useful to set `moment.defaultFormat` and `moment.defaultFormatUtc` to use the same formatting.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/fromnow/" name="/displaying/fromnow/"></a>

### [Time from now](#/displaying/fromnow/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/02-fromnow.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().fromNow();
    moment().fromNow(Boolean);

</div>

A common way of displaying time is handled by `moment#fromNow`. This is sometimes called timeago or relative time.

    moment([2007, 0, 29]).fromNow(); 

If you pass `true`, you can get the value without the suffix.

    moment([2007, 0, 29]).fromNow();     
    moment([2007, 0, 29]).fromNow(true); 

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

<td>a few seconds ago</td>

</tr>

<tr>

<td>44 to 44 seconds</td>

<td>ss</td>

<td>44 seconds ago</td>

</tr>

<tr>

<td>45 to 89 seconds</td>

<td>m</td>

<td>a minute ago</td>

</tr>

<tr>

<td>90 seconds to 44 minutes</td>

<td>mm</td>

<td>2 minutes ago ... 44 minutes ago</td>

</tr>

<tr>

<td>45 to 89 minutes</td>

<td>h</td>

<td>an hour ago</td>

</tr>

<tr>

<td>90 minutes to 21 hours</td>

<td>hh</td>

<td>2 hours ago ... 21 hours ago</td>

</tr>

<tr>

<td>22 to 35 hours</td>

<td>d</td>

<td>a day ago</td>

</tr>

<tr>

<td>36 hours to 25 days</td>

<td>dd</td>

<td>2 days ago ... 25 days ago</td>

</tr>

<tr>

<td>26 to 45 days</td>

<td>M</td>

<td>a month ago</td>

</tr>

<tr>

<td>45 to 319 days</td>

<td>MM</td>

<td>2 months ago ... 10 months ago</td>

</tr>

<tr>

<td>320 to 547 days (1.5 years)</td>

<td>y</td>

<td>a year ago</td>

</tr>

<tr>

<td>548 days+</td>

<td>yy</td>

<td>2 years ago ... 20 years ago</td>

</tr>

</tbody>

</table>

**Note:** From version **2.10.3**, if the target moment object is invalid the result is the localized Invalid date string.

**Note:** The `ss` key was added in **2.18.0**.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/from/" name="/displaying/from/"></a>

### [Time from X](#/displaying/from/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/03-from.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().from(Moment|String|Number|Date|Array);
    moment().from(Moment|String|Number|Date|Array, Boolean);

</div>

You may want to display a moment in relation to a time other than now. In that case, you can use `moment#from`.

    var a = moment([2007, 0, 28]);
    var b = moment([2007, 0, 29]);
    a.from(b) 

The first parameter is anything you can pass to `moment()` or an actual `Moment`.

    var a = moment([2007, 0, 28]);
    var b = moment([2007, 0, 29]);
    a.from(b);                     
    a.from([2007, 0, 29]);         
    a.from(new Date(2007, 0, 29)); 
    a.from("2007-01-29");          

Like `moment#fromNow`, passing `true` as the second parameter returns value without the suffix. This is useful wherever you need to have a human readable length of time.

    var start = moment([2007, 0, 5]);
    var end   = moment([2007, 0, 10]);
    end.from(start);       
    end.from(start, true); 

From version **2.10.3**, if any of the endpoints are invalid the result is the localized Invalid date string.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/tonow/" name="/displaying/tonow/"></a>

### [Time to now](#/displaying/tonow/) <span>2.10.3+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/04-tonow.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().toNow();
    moment().toNow(Boolean);

</div>

A common way of displaying time is handled by `moment#toNow`. This is sometimes called timeago or relative time.

This is similar to [`moment.fromNow`](https://momentjs.com/docs/#/displaying/fromnow/), but gives the opposite interval: `a.fromNow() = - a.toNow()`.

This is similar to [`moment.to`](https://momentjs.com/docs/#/displaying/to/), but is special-cased for the current time. Use `moment.to`, if you want to control the two end points of the interval.

    moment([2007, 0, 29]).toNow(); 

If you pass `true`, you can get the value without the prefix.

    moment([2007, 0, 29]).toNow();     
    moment([2007, 0, 29]).toNow(true); 

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

From version **2.10.3**, if the target moment object is invalid the result is the localized Invalid date string.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/to/" name="/displaying/to/"></a>

### [Time to X](#/displaying/to/) <span>2.10.3+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/05-to.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().to(Moment|String|Number|Date|Array);
    moment().to(Moment|String|Number|Date|Array, Boolean);

</div>

You may want to display a moment in relation to a time other than now. In that case, you can use `moment#to`.

    var a = moment([2007, 0, 28]);
    var b = moment([2007, 0, 29]);
    a.to(b) 

The first parameter is anything you can pass to `moment()` or an actual `Moment`.

    var a = moment([2007, 0, 28]);
    var b = moment([2007, 0, 29]);
    a.to(b);                     
    a.to([2007, 0, 29]);         
    a.to(new Date(2007, 0, 29)); 
    a.to("2007-01-29");          

Like `moment#toNow`, passing `true` as the second parameter returns value without the suffix. This is useful wherever you need to have a human readable length of time.

    var start = moment([2007, 0, 5]);
    var end   = moment([2007, 0, 10]);
    end.to(start);       
    end.to(start, true); 

From version **2.10.3**, if any of the endpoints are invalid the result is the localized Invalid date string.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/calendar-time/" name="/displaying/calendar-time/"></a>

### [Calendar Time](#/displaying/calendar-time/) <span>1.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/06-calendar-time.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().calendar();
    moment().calendar(referenceTime);
    moment().calendar(referenceTime, formats);  

</div>

Calendar time displays time relative to a given `referenceTime` (defaults to now), but does so slightly differently than `moment#fromNow`.

`moment#calendar` will format a date with different strings depending on how close to `referenceTime`'s date (today by default) the date is.

<table class="table table-striped table-bordered">

<tbody>

<tr>

<td>Last week</td>

<td>Last Monday at 2:30 AM</td>

</tr>

<tr>

<td>The day before</td>

<td>Yesterday at 2:30 AM</td>

</tr>

<tr>

<td>The same day</td>

<td>Today at 2:30 AM</td>

</tr>

<tr>

<td>The next day</td>

<td>Tomorrow at 2:30 AM</td>

</tr>

<tr>

<td>The next week</td>

<td>Sunday at 2:30 AM</td>

</tr>

<tr>

<td>Everything else</td>

<td>7/10/2011</td>

</tr>

</tbody>

</table>

These strings are localized, and [can be customized](#/customization/calendar/).

From **2.10.5** moment supports specifying calendar output formats per invocation:

    moment().calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
    });

`sameElse` is used as the format when the moment is more than a week away from the `referenceTime`

**Note:** From version **2.14.0** the formats argument to calendar can be a callback that is executed within the moment context with a single argument now:

    moment().calendar(null, {
      sameDay: function (now) {
        if (this.isBefore(now)) {
          return '[Will Happen Today]';
        } else {
          return '[Happened Today]';
        }

      }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/difference/" name="/displaying/difference/"></a>

### [Difference](#/displaying/difference/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/07-difference.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().diff(Moment|String|Number|Date|Array);
    moment().diff(Moment|String|Number|Date|Array, String);
    moment().diff(Moment|String|Number|Date|Array, String, Boolean);

</div>

To get the difference in milliseconds, use `moment#diff` like you would use `moment#from`.

    var a = moment([2007, 0, 29]);
    var b = moment([2007, 0, 28]);
    a.diff(b) 

To get the difference in another unit of measurement, pass that measurement as the second argument.

    var a = moment([2007, 0, 29]);
    var b = moment([2007, 0, 28]);
    a.diff(b, 'days') 

The supported measurements are `years`, `months`, `weeks`, `days`, `hours`, `minutes`, and `seconds`. For ease of development, the singular forms are supported as of **2.0.0**. Units of measurement other than milliseconds are available in version **1.1.1**.

By default, `moment#diff` will truncate the result to zero decimal places, returning an integer. If you want a floating point number, pass `true` as the third argument. Before **2.0.0**, `moment#diff` returned a number rounded to the nearest integer, not a truncated number.

    var a = moment([2008, 9]);
    var b = moment([2007, 0]);
    a.diff(b, 'years');       
    a.diff(b, 'years', true); 

If the moment is earlier than the moment you are passing to `moment.fn.diff`, the return value will be negative.

    var a = moment();
    var b = moment().add(1, 'seconds');
    a.diff(b) 
    b.diff(a) 

An easy way to think of this is by replacing `.diff(` with a minus operator.

    a.diff(b) 
    b.diff(a) 

#### Month and year diffs

`moment#diff` has some special handling for month and year diffs. It is optimized to ensure that two months with the same date are always a whole number apart.

So Jan 15 to Feb 15 should be exactly 1 month.

Feb 28 to Mar 28 should be exactly 1 month.

Feb 28 2011 to Feb 28 2012 should be exactly 1 year.

[See more discussion on the month and year diffs here](https://github.com/moment/moment/pull/571)

This change to month and year diffs was made in **2.0.0**. As of version **2.9.0** diff also support quarter unit.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/unix-timestamp-milliseconds/" name="/displaying/unix-timestamp-milliseconds/"></a>

### [Unix Timestamp (milliseconds)](#/displaying/unix-timestamp-milliseconds/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/08-unix-timestamp-milliseconds.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().valueOf();
    +moment();

</div>

`moment#valueOf` simply outputs the number of milliseconds since the Unix Epoch, just like `Date#valueOf`.

    moment(1318874398806).valueOf(); 
    +moment(1318874398806); 

To get a Unix timestamp (the number of seconds since the epoch) from a `Moment`, use `moment#unix`.

[Note: ECMAScript calls this a "Time Value"](https://www.ecma-international.org/ecma-262/6.0/#sec-time-values-and-time-range)

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/unix-timestamp/" name="/displaying/unix-timestamp/"></a>

### [Unix Timestamp (seconds)](#/displaying/unix-timestamp/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/09-unix-timestamp.md)

<div class="docs-method-prose">

`moment#unix` outputs a Unix timestamp (the number of seconds since the Unix Epoch).

    moment(1318874398806).unix(); 

This value is floored to the nearest second, and does not include a milliseconds component.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/days-in-month/" name="/displaying/days-in-month/"></a>

### [Days in Month](#/displaying/days-in-month/) <span>1.5.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/10-days-in-month.md)

<div class="docs-method-prose">

Get the number of days in the current month.

    moment("2012-02", "YYYY-MM").daysInMonth() 
    moment("2012-01", "YYYY-MM").daysInMonth() 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-javascript-date/" name="/displaying/as-javascript-date/"></a>

### [As Javascript Date](#/displaying/as-javascript-date/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/11-as-javascript-date.md)

<div class="docs-method-prose">

To get a copy of the native Date object that Moment.js wraps, use `moment#toDate`.

This will return a copy of the `Date` that the moment uses, so any changes to that `Date` will not cause moment to change. If you want to change the moment `Date`, see `moment#manipulate` or `moment#set`.

`moment#native` has been replaced by `moment#toDate` and has been deprecated as of **1.6.0**.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-array/" name="/displaying/as-array/"></a>

### [As Array](#/displaying/as-array/) <span>1.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/12-as-array.md)

<div class="docs-method-prose">

This returns an array that mirrors the parameters from `new Date()`.

    moment().toArray(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-json/" name="/displaying/as-json/"></a>

### [As JSON](#/displaying/as-json/) <span>2.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/13-as-json.md)

<div class="docs-method-prose">

When serializing an object to JSON, if there is a `Moment` object, it will be represented as an ISO8601 string, adjusted to UTC.

    JSON.stringify({
        postDate : moment()
    }); 

If instead you would like an ISO8601 string that reflects the moment's `utcOffset()`, then you can modify the `toJSON` function like this:

    moment.fn.toJSON = function() { return this.format(); }

This changes the behavior as follows:

    JSON.stringify({
        postDate : moment()
    }); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-iso-string/" name="/displaying/as-iso-string/"></a>

### [As ISO 8601 String](#/displaying/as-iso-string/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/14-as-iso-string.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().toISOString();
    moment().toISOString(keepOffset); 

</div>

Formats a string to the ISO8601 standard.

    moment().toISOString() 

Note that `.toISOString()` returns a timestamp in UTC, even if the moment in question is in local mode. This is done to provide consistency with the specification for native JavaScript Date `.toISOString()`, as outlined in [the ES2015 specification](https://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.toisostring). From version **2.20.0**, you may call `.toISOString(true)` to prevent UTC conversion.

From version **2.8.4** the native `Date.prototype.toISOString` is used if available, for performance reasons.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-object/" name="/displaying/as-object/"></a>

### [As Object](#/displaying/as-object/) <span>2.10.5+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/15-as-object.md)

<div class="docs-method-prose">

This returns an object containing year, month, day-of-month, hour, minute, seconds, milliseconds.

    moment().toObject()  

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/as-string/" name="/displaying/as-string/"></a>

### [As String](#/displaying/as-string/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/16-as-string.md)

<div class="docs-method-prose">

Returns an english string in a similar format to JS Date's `.toString()`.

    moment().toString() 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/displaying/inspect/" name="/displaying/inspect/"></a>

### [Inspect](#/displaying/inspect/) <span>2.16.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/04-displaying/17-inspect.md)

<div class="docs-method-prose">

Returns a machine readable string, that can be evaluated to produce the same moment. Because of the name its also used in node interactive shell to display objects.

    moment().inspect() 
    moment.utc().inspect() 
    moment.parseZone('2016-11-10T06:24:12.958+05:00').inspect() 
    moment(new Date('nope')).inspect() 
    moment('blah', 'YYYY').inspect() 

**Note:** This function is mostly intended for debugging, not all cases are handled precisely.

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/query/" name="/query/"></a>

## [Query](#/query/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/intro/" name="/query/intro/"></a></article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-before/" name="/query/is-before/"></a>

### [Is Before](#/query/is-before/) <span>2.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/01-is-before.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isBefore(Moment|String|Number|Date|Array);
    moment().isBefore(Moment|String|Number|Date|Array, String);

</div>

Check if a moment is before another moment.

    moment('2010-10-20').isBefore('2010-10-21'); 

If you want to limit the granularity to a unit other than milliseconds, pass the units as the second parameter.

As the second parameter determines the precision, and not just a single value to check, using day will check for year, month and day.

    moment('2010-10-20').isBefore('2010-12-31', 'year'); 
    moment('2010-10-20').isBefore('2011-01-01', 'year'); 

Like `moment#isAfter` and `moment#isSame`, any of the units of time that are supported for `moment#startOf` are supported for `moment#isBefore`.

    year month week day hour minute second

If nothing is passed to `moment#isBefore`, it will default to the current time.

_NOTE_: `moment().isBefore()` has undefined behavior and should not be used! If the code runs fast the initial created moment would be the same as the one created in isBefore to perform the check, so the result would be `false`. But if the code runs slower it's possible that the moment created in isBefore is measurably after the one created in `moment()`, so the call would return `true`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-same/" name="/query/is-same/"></a>

### [Is Same](#/query/is-same/) <span>2.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/02-is-same.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isSame(Moment|String|Number|Date|Array);
    moment().isSame(Moment|String|Number|Date|Array, String);

</div>

Check if a moment is the same as another moment.

    moment('2010-10-20').isSame('2010-10-20'); 

If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.

    moment('2010-10-20').isSame('2009-12-31', 'year');  
    moment('2010-10-20').isSame('2010-01-01', 'year');  
    moment('2010-10-20').isSame('2010-12-31', 'year');  
    moment('2010-10-20').isSame('2011-01-01', 'year');  

When including a second parameter, it will match all units equal or larger. Passing in `month` will check `month` and `year`. Passing in `day` will check `day`, `month`, and `year`.

    moment('2010-01-01').isSame('2011-01-01', 'month'); 
    moment('2010-01-01').isSame('2010-02-01', 'day');   

Like `moment#isAfter` and `moment#isBefore`, any of the units of time that are supported for `moment#startOf` are supported for `moment#isSame`.

    year month week day hour minute second

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-after/" name="/query/is-after/"></a>

### [Is After](#/query/is-after/) <span>2.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/03-is-after.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isAfter(Moment|String|Number|Date|Array);
    moment().isAfter(Moment|String|Number|Date|Array, String);

</div>

Check if a moment is after another moment.

    moment('2010-10-20').isAfter('2010-10-19'); 

If you want to limit the granularity to a unit other than milliseconds, pass the units as the second parameter.

As the second parameter determines the precision, and not just a single value to check, using day will check for year, month and day.

    moment('2010-10-20').isAfter('2010-01-01', 'year'); 
    moment('2010-10-20').isAfter('2009-12-31', 'year'); 

Like `moment#isSame` and `moment#isBefore`, any of the units of time that are supported for `moment#startOf` are supported for `moment#isAfter`.

    year month week day hour minute second

If nothing is passed to `moment#isAfter`, it will default to the current time.

    moment().isAfter(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-same-or-before/" name="/query/is-same-or-before/"></a>

### [Is Same or Before](#/query/is-same-or-before/) <span>2.11.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/04-is-same-or-before.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isSameOrBefore(Moment|String|Number|Date|Array);
    moment().isSameOrBefore(Moment|String|Number|Date|Array, String);

</div>

Check if a moment is before or the same as another moment.

    moment('2010-10-20').isSameOrBefore('2010-10-21');  
    moment('2010-10-20').isSameOrBefore('2010-10-20');  
    moment('2010-10-20').isSameOrBefore('2010-10-19');  

If you want to limit the granularity to a unit other than milliseconds, pass the units as the second parameter.

As the second parameter determines the precision, and not just a single value to check, using day will check for year, month and day.

    moment('2010-10-20').isSameOrBefore('2009-12-31', 'year'); 
    moment('2010-10-20').isSameOrBefore('2010-12-31', 'year'); 
    moment('2010-10-20').isSameOrBefore('2011-01-01', 'year'); 

Like `moment#isAfter` and `moment#isSame`, any of the units of time that are supported for `moment#startOf` are supported for `moment#isSameOrBefore`:

    year month week day hour minute second

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-same-or-after/" name="/query/is-same-or-after/"></a>

### [Is Same or After](#/query/is-same-or-after/) <span>2.11.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/05-is-same-or-after.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isSameOrAfter(Moment|String|Number|Date|Array);
    moment().isSameOrAfter(Moment|String|Number|Date|Array, String);

</div>

Check if a moment is after or the same as another moment.

    moment('2010-10-20').isSameOrAfter('2010-10-19'); 
    moment('2010-10-20').isSameOrAfter('2010-10-20'); 
    moment('2010-10-20').isSameOrAfter('2010-10-21'); 

If you want to limit the granularity to a unit other than milliseconds, pass the units as the second parameter.

As the second parameter determines the precision, and not just a single value to check, using day will check for year, month and day.

    moment('2010-10-20').isSameOrAfter('2011-12-31', 'year'); 
    moment('2010-10-20').isSameOrAfter('2010-01-01', 'year'); 
    moment('2010-10-20').isSameOrAfter('2009-12-31', 'year'); 

Like `moment#isSame` and `moment#isBefore`, any of the units of time that are supported for `moment#startOf` are supported for `moment#isSameOrAfter`:

    year month week day hour minute second

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-between/" name="/query/is-between/"></a>

### [Is Between](#/query/is-between/) <span>2.9.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/06-is-between.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().isBetween(moment-like, moment-like);
    moment().isBetween(moment-like, moment-like, String);
    moment().isBetween(moment-like, moment-like, String, String);

    moment().isBetween(moment-like, moment-like);
    moment().isBetween(moment-like, moment-like, String);

</div>

Check if a moment is between two other moments, optionally looking at unit scale (minutes, hours, days, etc). The match is exclusive.

    moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); 

If you want to limit the granularity to a unit other than milliseconds, pass the units as the third parameter.

    moment('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year'); 
    moment('2010-10-20').isBetween('2009-12-31', '2012-01-01', 'year'); 

Like `moment#isSame`, `moment#isBefore`, `moment#isAfter` any of the units of time that are supported for `moment#startOf` are supported for `moment#isBetween`. Year, month, week, day, hour, minute, and second.

Version **2.13.0** introduces inclusivity. A `[` indicates inclusion of a value. A `(` indicates exclusion. If the inclusivity parameter is used, both indicators must be passed.

    moment('2016-10-30').isBetween('2016-10-30', '2016-12-30', null, '()'); 
    moment('2016-10-30').isBetween('2016-10-30', '2016-12-30', null, '[)'); 
    moment('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '()'); 
    moment('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '(]'); 
    moment('2016-10-30').isBetween('2016-10-30', '2016-10-30', null, '[]'); 

Note that in the event that the `from` and `to` parameters are the same, but the inclusivity parameters are different, false will preside.

    moment('2016-10-30').isBetween('2016-10-30', '2016-10-30', null, '(]'); 

If the inclusivity parameter is not specified, Moment will default to `()`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-daylight-saving-time/" name="/query/is-daylight-saving-time/"></a>

### [Is Daylight Saving Time](#/query/is-daylight-saving-time/) <span>1.2.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/07-is-daylight-saving-time.md)

<div class="docs-method-prose">

`moment#isDST` checks if the current moment is in daylight saving time.

    moment([2011, 2, 12]).isDST(); 
    moment([2011, 2, 14]).isDST(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-dst-shifted/" name="/query/is-dst-shifted/"></a>

### [Is DST Shifted](#/query/is-dst-shifted/) <span>From 2.3.0, Deprecated 2.14.0</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/08-is-dst-shifted.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment('2013-03-10 2:30', 'YYYY-MM-DD HH:mm').isDSTShifted()

</div>

**Note:** As of version **2.14.0** this function is **deprecated**. It doesn't give the right answer after modifying the moment object. For more information refer to [moment/3160](https://github.com/moment/moment/pull/3160)

Another important piece of validation is to know if the date has been moved by a DST. For example, in most of the United States:

    moment('2013-03-10 2:30', 'YYYY-MM-DD HH:mm').format(); 

This is because daylight saving time shifts the time from 2:00 to 3:00, so 2:30 isn't a real time. The resulting time is browser-dependent, either adjusting the time forward or backwards. Use `moment#isDSTShifted` to test for this condition.

**Note:** before **2.3.0**, Moment objects in this condition always returned `false` for `moment#isValid`; they now return `true`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-leap-year/" name="/query/is-leap-year/"></a>

### [Is Leap Year](#/query/is-leap-year/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/09-is-leap-year.md)

<div class="docs-method-prose">

`moment#isLeapYear` returns `true` if that year is a leap year, and `false` if it is not.

    moment([2000]).isLeapYear() 
    moment([2001]).isLeapYear() 
    moment([2100]).isLeapYear() 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-a-moment/" name="/query/is-a-moment/"></a>

### [Is a Moment](#/query/is-a-moment/) <span>1.5.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/10-is-a-moment.md)

<div class="docs-method-prose">

To check if a variable is a moment object, use `moment.isMoment()`.

    moment.isMoment() 
    moment.isMoment(new Date()) 
    moment.isMoment(moment()) 

From version **2.11.0**, you can also test for a moment object by `instanceof` operator:

    moment() instanceof moment 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/query/is-a-date/" name="/query/is-a-date/"></a>

### [Is a Date](#/query/is-a-date/) <span>2.9.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/05-query/11-is-a-date.md)

<div class="docs-method-prose">

To check if a variable is a native js Date object, use `moment.isDate()`.

    moment.isDate(); 
    moment.isDate(new Date()); 
    moment.isDate(moment()); 

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/i18n/" name="/i18n/"></a>

## [i18n](#/i18n/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/intro/" name="/i18n/intro/"></a>

<div class="docs-method-prose">

Moment.js has robust support for internationalization.

You can load multiple locales and easily switch between them.

In addition to assigning a global locale, you can assign a locale to a specific moment.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/changing-locale/" name="/i18n/changing-locale/"></a>

### [Changing locale globally](#/i18n/changing-locale/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/01-changing-locale.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.locale(String);
    moment.locale(String[]);
    moment.locale(String, Object);

    moment.lang(String);
    moment.lang(String[]);
    moment.lang(String, Object);

</div>

By default, Moment.js comes with English (United States) locale strings. If you need other locales, you can load them into Moment.js for later use.

To load a locale, pass the key and the string values to `moment.locale`.

More details on each of the parts of the locale bundle can be found in the [customization](#/customization/) section.

    moment.locale('fr', {
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

Once you load a locale, it becomes the active locale. To change active locales, simply call `moment.locale` with the key of a loaded locale.

    moment.locale('fr');
    moment(1316116057189).fromNow(); 
    moment.locale('en');
    moment(1316116057189).fromNow(); 

As of **2.8.0**, changing the global locale doesn't affect existing instances.

    moment.locale('fr');
    var m = moment(1316116057189);
    m.fromNow(); 

    moment.locale('en');
    m.fromNow(); 
    moment(1316116057189).fromNow(); 

`moment.locale` returns the locale used. This is useful because Moment won't change locales if it doesn't know the one you specify.

    moment.locale('fr'); 
    moment.locale('tq'); 

You may also specify a list of locales, and Moment will use the first one it has localizations for.

    moment.locale(['tq', 'fr']); 

Moment will also try locale specifier substrings from most-specific to least-specific until it finds a locale it knows. This is useful when supplying Moment with a locale string pulled from the user's environment, such as `window.navigator.language`.

    moment.locale('en-NZ'); 

Finally, Moment will search intelligently through an array of locales and their substrings.

    moment.locale(['en-NZ', 'en-AU']); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/instance-locale/" name="/i18n/instance-locale/"></a>

### [Changing locales locally](#/i18n/instance-locale/) <span>1.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/02-instance-locale.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment().locale(String|Boolean);

    moment().lang(String|Boolean);

</div>

A global locale configuration can be problematic when passing around moments that may need to be formatted into different locale.

In **1.7.0** we added instance specific locale configurations.

    moment.locale('en'); 
    var localLocale = moment();

    localLocale.locale('fr'); 
    localLocale.format('LLLL'); 
    moment().format('LLLL'); 

    moment.locale('es'); 
    localLocale.format('LLLL'); 
    moment().format('LLLL'); 

    localLocale.locale(false); 
    localLocale.format('LLLL'); 
    moment().format('LLLL'); 

If you call `moment#locale` with no parameters, you get back the locale configuration that would be used for that moment.

    var fr = moment().locale('fr');
    fr.localeData().months(moment([2012, 0])) 
    fr.locale('en');
    fr.localeData().months(moment([2012, 0])) 

If you need to access the locale data for a moment, this is the preferred way to do so.

As of **2.3.0**, you can also specify an array of locale identifiers. It works the same was it does in the [global locale configuration](#/i18n/changing-locale/).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/loading-into-nodejs/" name="/i18n/loading-into-nodejs/"></a>

### [Loading locales in NodeJS](#/i18n/loading-into-nodejs/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/03-loading-into-nodejs.md)

<div class="docs-method-prose">

Loading locales in NodeJS is super easy. If there is a locale file in `moment-root/locale/` named after that key, the first call to `moment.locale` will load it.

    var moment = require('moment');
    moment.locale('fr');
    moment(1316116057189).fromNow(); 

If you want your locale supported, create a pull request to the `develop` branch with the [required locale and unit test files](#/i18n/adding-locale/).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/loading-into-browser/" name="/i18n/loading-into-browser/"></a>

### [Loading locales in the browser](#/i18n/loading-into-browser/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/04-loading-into-browser.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.locale(String, Object);

    moment.lang(String, Object);

</div>

Loading locales in the browser just requires you to include the locale files. Be sure to specify the charset to prevent encoding issues.

    <script src="moment.js"></script>
    <script src="locale/fr.js" charset="UTF-8"></script>
    <script src="locale/pt.js" charset="UTF-8"></script>
    <script>
      moment.locale('fr');  // Set the default/global locale
      // ...
    </script>

There are minified versions of all locales together:

    <script src="moment.js"></script>
    <script src="min/locales.js" charset="UTF-8"></script>

To minimize HTTP requests, use our Grunt task to compile [Moment](https://github.com/moment/moment) with a custom list of locales:

    grunt transpile:fr,it

    <script src="min/moment-with-locales.custom.js" charset="UTF-8"></script>

If you are using JSPM as plugin manager, you should add the locale in your lib.

    import * as moment from 'moment';
    import 'moment/locale/fr';

**Note:** Locale files are defined in [UMD](https://github.com/umdjs/umd) style, so they should work seamlessly in all environments.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/adding-locale/" name="/i18n/adding-locale/"></a>

### [Adding your locale to Moment.js](#/i18n/adding-locale/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/05-adding-locale.md)

<div class="docs-method-prose">

To add your locale to Moment.js, submit a pull request with both a locale file and a test file. You can find examples in `moment/src/locale/fr.js` and `moment/src/test/locale/fr.js`.

To run the tests in Node.js, do `npm install`, then `grunt`.

If all the tests pass, submit a pull request, and thank you for contributing!

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/getting-locale/" name="/i18n/getting-locale/"></a>

### [Checking the current Moment.js locale](#/i18n/getting-locale/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/06-getting-locale.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.locale();

    moment.lang();

</div>

If you are changing locales frequently, you may want to know what locale is currently being used. This is as simple as calling `moment.locale` without any parameters.

    moment.locale('en'); 
    moment.locale(); 
    moment.locale('fr'); 
    moment.locale(); 

As of version **2.12.0** it is possible to list all locales that have been loaded and are available to use:

    moment.locales()

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/listing-months-weekdays/" name="/i18n/listing-months-weekdays/"></a>

### [Listing the months and weekdays of the current Moment.js locale](#/i18n/listing-months-weekdays/) <span>2.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/07-listing-months-weekdays.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.months()
    moment.monthsShort()
    moment.weekdays()
    moment.weekdaysShort()
    moment.weekdaysMin()

</div>

It is sometimes useful to get the list of months or weekdays in a locale, for example when populating a dropdown menu.

    moment.months();

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

Similarly, `moment.monthsShort` returns abbreviated month names, and `moment.weekdays`, `moment.weekdaysShort`, `moment.weekdaysMin` return lists of weekdays.

You can pass an integer into each of those functions to get a specific month or weekday.

    moment.weekdays(3); 

As of **2.13.0** you can pass a bool as the first parameter of the weekday functions. If true, the weekdays will be returned in locale specific order. For instance, in the Arabic locale, Saturday is the first day of the week, thus:

    moment.locale('ar');
    moment.weekdays(true); 
    moment.weekdays(true, 2); 

**Note:** Absent the locale specific parameter, weekdays always have Sunday as index 0, regardless of the local first day of the week.

Some locales make special considerations into account when formatting month names. For example, Dutch formats month abbreviations without a trailing period, but only if it's formatting the month between dashes. The `months` method supports passing a format in so that the months will be listed in the proper context.

    moment.locale('nl');
    moment.monthsShort(); 
    moment.monthsShort('-MMM-'); 

And finally, you can combine both the format option and the integer option.

    moment.monthsShort('-MMM-', 3); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/locale-data/" name="/i18n/locale-data/"></a>

### [Accessing locale specific functionality](#/i18n/locale-data/) <span>2.8.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/08-locale-data.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    localeData = moment.localeData()
    localeData.months()
    localeData.monthsShort()
    localeData.monthsParse()
    localeData.weekdays()
    localeData.weekdaysShort()
    localeData.weekdaysMin()
    localeData.weekdaysParse()
    localeData.longDateFormat()
    localeData.isPM()
    localeData.meridiem()
    localeData.calendar()
    localeData.relativeTime()
    localeData.pastFuture()
    localeData.ordinal()
    localeData.preparse()
    localeData.postformat()
    localeData.week()
    localeData.invalidDate()
    localeData.firstDayOfWeek()
    localeData.firstDayOfYear()

</div>

You can access the properties of the currently loaded locale through the `moment.localeData(key)` function. It returns the current locale or a locale with the given key:

    var currentLocaleData = moment.localeData();
    var frLocaleData = moment.localeData('fr');

The returned object has the following methods:

    localeData.months(aMoment);  
    localeData.monthsShort(aMoment);  
    localeData.monthsParse(longOrShortMonthString);  
    localeData.weekdays(aMoment);  
    localeData.weekdaysShort(aMoment);  
    localeData.weekdaysMin(aMoment);  
    localeData.weekdaysParse(minShortOrLongWeekdayString);  
    localeData.longDateFormat(dateFormat);  
    localeData.isPM(amPmString);  
    localeData.meridiem(hours, minutes, isLower);  
    localeData.calendar(key, aMoment);  
    localeData.relativeTime(number, withoutSuffix, key, isFuture);  
    localeData.pastFuture(diff, relTime);  
    localeData.ordinal(number);  
    localeData.preparse(str);  
    localeData.postformat(str);  
    localeData.week(aMoment);  
    localeData.invalidDate();  
    localeData.firstDayOfWeek();  
    localeData.firstDayOfYear();  

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/i18n/pseudo-locale/" name="/i18n/pseudo-locale/"></a>

### [Pseudo Locale](#/i18n/pseudo-locale/) <span>2.13.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/06-i18n/09-pseudo-locale.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.locale('x-pseudo')

</div>

As of version **2.13.0** moment optionally includes a pseudo locale. This locale will populate the dates with very obviously changed data. Pseudo locales can be useful when testing, as they make obvious what data has and has not been localized. Just include the pseudo-locale, and set moment's locale to x-pseudo. Text from Moment will be very easy to spot.

    moment.locale('x-pseudo');
    moment().format('LLL'); 
    moment().fromNow(); 
    moment().calendar(); 

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/customization/" name="/customization/"></a>

## [Customize](#/customization/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/intro/" name="/customization/intro/"></a>

<div class="docs-method-prose">

Moment.js is very easy to customize. In general, you should create a locale setting with your customizations.

    moment.locale('en-my-settings', {

    });

You can remove a previously defined locale by passing `null` as the second argument. The deleted locale will no longer be available for use.

    moment.locale('fr'); 
    moment.locale('en'); 
    moment.locale('fr', null);
    moment.locale('fr'); 

As of **2.12.0** it is possible to create a locale that inherits from a parent locale.

    moment.defineLocale('en-foo', {
      parentLocale: 'en',

    });

Properties that are not specified in the locale will be inherited from the parent locale.

As of **2.12.0** it is also possible to update a locale's properties.

    moment.updateLocale('en', {

    });

Any properties specified will be updated, while others will remain the same. This function does not affect moments that already exist.

To revert an update use:

    moment.updateLocale('en', null);

**2.12.0** deprecated using `moment.locale()` to change an existing locale. Use `moment.updateLocale()` instead.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/month-names/" name="/customization/month-names/"></a>

### [Month Names](#/customization/month-names/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/01-month-names.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        months : String[]
    });
    moment.updateLocale('en', {
        months : Function
    });
    moment.updateLocale('en', {
        months : {
            format : String[],
            standalone : String[]
        }
    });

    moment.locale('en', {
        months : {
            format : String[],
            standalone : String[]
        }
    });

    moment.locale('en', {
        months : String[]
    });
    moment.locale('en', {
        months : Function
    });

    moment.lang('en', {
        months : String[]
    });
    moment.lang('en', {
        months : Function
    });

</div>

`Locale#months` should be an array of the month names.

    moment.updateLocale('en', {
        months : [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ]
    });

If you need more processing to calculate the name of the month, (for example, if there is different grammar for different formats), `Locale#months` can be a function with the following signature. It should always return a month name.

    moment.updateLocale('en', {
        months : function (momentToFormat, format) {

            if (/^MMMM/.test(format)) { 
                return nominative[momentToFormat.month()];
            } else {
                return subjective[momentToFormat.month()];
            }
        }
    });

From version **2.11.0** months can also be an object, specifying `standalone` and `format` forms (nominative and accusative). The regular expression that is run on the format to check whether to use the `format` form is `/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/`. From version **2.14.0** a different one can be specified with the `isFormat` key.

    moment.updateLocale('en', {
        months : {
             format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
             standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
             isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/  
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/month-abbreviations/" name="/customization/month-abbreviations/"></a>

### [Month Abbreviations](#/customization/month-abbreviations/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/02-month-abbreviations.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        monthsShort : String[]
    });
    moment.updateLocale('en', {
        monthsShort : Function
    });
    moment.updateLocale('en', {
        monthsShort : {
            format: String[],
            standalone : String[]
        }
    });

    moment.locale('en', {
        monthsShort : {
            format: String[],
            standalone : String[]
        }
    });

    moment.locale('en', {
        monthsShort : String[]
    });
    moment.locale('en', {
        monthsShort : Function
    });

    moment.lang('en', {
        monthsShort : String[]
    });
    moment.lang('en', {
        monthsShort : Function
    });

</div>

`Locale#monthsShort` should be an array of the month abbreviations.

    moment.updateLocale('en', {
        monthsShort : [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
    });

Like `Locale#months`, `Locale#monthsShort` can be a callback function as well.

    moment.updateLocale('en', {
        monthsShort : function (momentToFormat, format) {
            if (/^MMMM/.test(format)) {
                return nominative[momentToFormat.month()];
            } else {
                return subjective[momentToFormat.month()];
            }
        }
    });

**Note:** From version **2.11.0**, like `Locale#months`, `Locale#monthsShort` can be an object with `standalone` and `format` cases.

    moment.updateLocale('en', {
        monthsShort : {
            format: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
            standalone: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_')
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/weekday-names/" name="/customization/weekday-names/"></a>

### [Weekday Names](#/customization/weekday-names/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/03-weekday-names.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        weekdays : String[]
    });
    moment.updateLocale('en', {
        weekdays : Function
    });
    moment.updateLocale('en', {
        weekdays : {
            standalone : String[],
            format : String[],
            isFormat : RegExp
        }
    });

    moment.locale('en', {
        weekdays : {
            standalone : String[],
            format : String[],
            isFormat : Boolean
        }
    });

    moment.locale('en', {
        weekdays : String[]
    });
    moment.locale('en', {
        weekdays : Function
    });

    moment.lang('en', {
        weekdays : String[]
    });
    moment.lang('en', {
        weekdays : Function
    });

</div>

`Locale#weekdays` should be an array of the weekdays names.

    moment.updateLocale('en', {
        weekdays : [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ]
    });

`Locale#weekdays` can be a callback function as well.

    moment.updateLocale('en', {
        weekdays : function (momentToFormat, format) {
            return weekdays[momentToFormat.day()];
        }
    });

**Note:** From version **2.11.0** format/standalone cases can be passed as well. `isFormat` will be used against the full format string to determine which form to use.

    moment.updateLocale('en', {
        weekdays : {
            standalone: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
            format: 'Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/weekday-abbreviations/" name="/customization/weekday-abbreviations/"></a>

### [Weekday Abbreviations](#/customization/weekday-abbreviations/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/04-weekday-abbreviations.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        weekdaysShort : String[]
    });
    moment.updateLocale('en', {
        weekdaysShort : Function
    });

    moment.locale('en', {
        weekdaysShort : String[]
    });
    moment.locale('en', {
        weekdaysShort : Function
    });

    moment.lang('en', {
        weekdaysShort : String[]
    });
    moment.lang('en', {
        weekdaysShort : Function
    });

</div>

`Locale#weekdaysShort` should be an array of the weekdays abbreviations.

    moment.updateLocale('en', {
        weekdaysShort : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    });

`Locale#weekdaysShort` can be a callback function as well.

    moment.updateLocale('en', {
        weekdaysShort : function (momentToFormat, format) {
            return weekdaysShort[momentToFormat.day()];
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/weekday-min/" name="/customization/weekday-min/"></a>

### [Minimal Weekday Abbreviations](#/customization/weekday-min/) <span>1.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/05-weekday-min.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        weekdaysMin : String[]
    });
    moment.updateLocale('en', {
        weekdaysMin : Function
    });

    moment.locale('en', {
        weekdaysMin : String[]
    });
    moment.locale('en', {
        weekdaysMin : Function
    });

    moment.lang('en', {
        weekdaysMin : String[]
    });
    moment.lang('en', {
        weekdaysMin : Function
    });

</div>

`Locale#weekdaysMin` should be an array of two letter weekday abbreviations. The purpose of these is for things like calendar pickers, thus they should be as small as possible.

    moment.updateLocale('en', {
        weekdaysMin : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    });

`Locale#weekdaysMin` can be a callback function as well.

    moment.updateLocale('en', {
        weekdaysMin : function (momentToFormat, format) {
            return weekdaysMin[momentToFormat.day()];
        }
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/long-date-formats/" name="/customization/long-date-formats/"></a>

### [Long Date Formats](#/customization/long-date-formats/) <span>1.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/06-long-date-formats.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        weekdaysMin : String[]
    });
    moment.updateLocale('en', {
        weekdaysMin : Function
    });

    moment.locale('en', {
        longDateFormat : Object
    });

    moment.lang('en', {
        longDateFormat : Object
    });

</div>

`Locale#longDateFormat` should be an object containing a key/value pair for each long date format `L LL LLL LLLL LT LTS`. `LT` should be the time format, and is also used for `moment#calendar`.

    moment.updateLocale('en', {
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

    moment.updateLocale('en', {
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

### [Relative Time](#/customization/relative-time/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/07-relative-time.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        relativeTime : Object
    });

    moment.locale('en', {
        relativeTime : Object
    });

    moment.lang('en', {
        relativeTime : Object
    });

</div>

`Locale#relativeTime` should be an object of the replacement strings for `moment#from`.

    moment.updateLocale('en', {
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

The `isFuture` argument will be true if it is going to use the future suffix/prefix and false if it is going to use the past prefix/suffix. The `isFuture` argument was added in version **1.6.0**.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/am-pm/" name="/customization/am-pm/"></a>

### [AM/PM](#/customization/am-pm/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/08-am-pm.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        meridiem : Function
    });

    moment.locale('en', {
        meridiem : Function
    });

    moment.lang('en', {
        meridiem : Function
    });

</div>

If your locale uses 'am/pm', `Locale#meridiem` can be omitted, as those values are the defaults.

If your locale needs any different computation for am/pm, `Locale#meridiem` should be a callback function that returns the correct string based on hour, minute, and upper/lowercase.

    moment.updateLocale('zh-cn', {
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

Before version **1.6.0**, `Locale#meridiem` was a map of upper and lowercase versions of am/pm.

    moment.updateLocale('en', {
        meridiem : {
            am : 'am',
            AM : 'AM',
            pm : 'pm',
            PM : 'PM'
        }
    });

This has been deprecated. The **1.6.0** callback function syntax is now used instead.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/am-pm-parsing/" name="/customization/am-pm-parsing/"></a>

### [AM/PM Parsing](#/customization/am-pm-parsing/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/09-am-pm-parsing.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        meridiemParse : RegExp
        isPM : Function
    });

    moment.locale('en', {
        meridiemParse : RegExp
        isPM : Function
    });

    moment.lang('en', {
        meridiemParse : RegExp
        isPM : Function
    });

</div>

`Locale#isPM` should return true if the input string is past 12 noon. This is used in parsing the `a A` tokens.

    moment.updateLocale('en', {
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'p');
        }
    });

To configure what strings should be parsed as input, set the `meridiemParse` property.

    moment.updateLocale('en', {
        meridiemParse : /[ap]\.?m?\.?/i
    });

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/calendar/" name="/customization/calendar/"></a>

### [Calendar](#/customization/calendar/) <span>1.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/10-calendar.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        calendar : Object
    });

    moment.locale('en', {
        calendar : Object
    });

    moment.lang('en', {
        calendar : Object
    });

</div>

`Locale#calendar` should have the following formatting strings.

    moment.locale('en', {
        calendar : {
            lastDay : '[Yesterday at] LT',
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            lastWeek : '[last] dddd [at] LT',
            nextWeek : 'dddd [at] LT',
            sameElse : 'L'
        }
    });

Each of the `Locale#calendar` keys can also be a callback function with the scope of the current moment and first argument a moment that depicts now. It should return a formatting string.

    function callback (now) {
        return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
    }

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/calendar-format/" name="/customization/calendar-format/"></a>

### [Calendar Format](#/customization/calendar-format/) <span>2.14.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/11-calendar-format.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.calendarFormat = Function

</div>

This lets you modify the tokens used by [calendar](#/customization/calendar/).

    moment.calendarFormat = function (myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        var nextMonth = now.clone().add(1, 'month');

        var retVal =  diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' :

            (myMoment.month() === now.month() && myMoment.year() === now.year()) ? 'thisMonth' :
            (nextMonth.month() === myMoment.month() && nextMonth.year() === myMoment.year()) ? 'nextMonth' : 'sameElse';
        return retVal;
    };

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/ordinal/" name="/customization/ordinal/"></a>

### [Ordinal](#/customization/ordinal/) <span>1.0.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/12-ordinal.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.updateLocale('en', {
        ordinal : Function
    });

    moment.locale('en', {
        ordinal : Function
    });

    moment.lang('en', {
        ordinal : Function
    });

</div>

`Locale#ordinal` should be a function that returns the ordinal for a given number.

    moment.updateLocale('en', {
        ordinal : function (number, token) {
            var b = number % 10;
            var output = (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

As of **2.0.0**, the ordinal function should return both the number and the ordinal. Previously, only the ordinal was returned.

As of **2.1.0**, the token parameter was added. It is a string of the token that is being ordinalized, for example: `M` or `d`.

For more information on ordinal numbers, see [Wikipedia](https://en.wikipedia.org/wiki/Ordinal_number_%28linguistics%29).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/relative-time-threshold/" name="/customization/relative-time-threshold/"></a>

### [Relative Time Thresholds](#/customization/relative-time-threshold/) <span>2.7.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/13-relative-time-threshold.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.relativeTimeThreshold(unit);  
    moment.relativeTimeThreshold(unit, limit);  

</div>

`duration.humanize` has thresholds which define when a unit is considered a minute, an hour and so on. For example, by default more than 45 seconds is considered a minute, more than 22 hours is considered a day and so on. To change those cutoffs use `moment.relativeTimeThreshold(unit, limit)` where unit is one of `ss`, `s`, `m`, `h`, `d`, `M`.

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

      moment.relativeTimeThreshold('ss'); 
      moment.relativeTimeThreshold('s');  
      moment.relativeTimeThreshold('m');  
      moment.relativeTimeThreshold('h');  
      moment.relativeTimeThreshold('d');  
      moment.relativeTimeThreshold('M');  

      moment.relativeTimeThreshold('ss', 3);
      moment.relativeTimeThreshold('s', 40);
      moment.relativeTimeThreshold('m', 40);
      moment.relativeTimeThreshold('h', 20);
      moment.relativeTimeThreshold('d', 25);
      moment.relativeTimeThreshold('M', 10);

**Note:** Retrieving thresholds was added in **2.8.1**.

**Note:** Retrieving and setting `ss` threshold was added in **2.18.0**.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/relative-time-rounding/" name="/customization/relative-time-rounding/"></a>

### [Relative Time Rounding](#/customization/relative-time-rounding/) <span>2.14.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/14-relative-time-rounding.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.relativeTimeRounding();  
    moment.relativeTimeRounding(fn);  

</div>

`duration.humanize` rounds a possibly double value before supplying it to the relativeTime format string specified in the locale. To control the rounding you can use `moment.relativeTimeRounding`.

    var roundingDefault = moment.relativeTimeRounding();

    moment.relativeTimeRounding(Math.floor);

    moment.relativeTimeThreshold('s', 60);
    moment.relativeTimeThreshold('m', 60);
    moment.relativeTimeThreshold('h', 24);
    moment.relativeTimeThreshold('d', 31);
    moment.relativeTimeThreshold('M', 12);

    var a = moment();
    a.subtract({hours: 23, minutes: 59, seconds: 59});
    a.toNow()  

    moment.relativeTimeRounding(roundingDefault);

You can even choose to do no rounding at all:

    var retainValue = function (value) {
        return value;
    };
    moment.relativeTimeRounding(retainValue);

    var a = moment();
    a.subtract({hours: 39});
    a.toNow() 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/customization/now/" name="/customization/now/"></a>

### [Changing Time Source](#/customization/now/) <span>2.11.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/07-customization/15-now.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.now = function () { return +new Date(); }

</div>

If you want to change the time that Moment sees, you can specify a method that returns the number of milliseconds since the Unix epoch (January 1, 1970).

The default is:

    moment.now = function () {
        return +new Date();
    }

This will be used when calling `moment()`, and the current date used when tokens are omitted from `format()`. In general, any method that needs the current time uses this under the hood.

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/durations/" name="/durations/"></a>

## [Durations](#/durations/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/intro/" name="/durations/intro/"></a>

<div class="docs-method-prose">

Moment.js also has duration objects. Where a moment is defined as single points in time, durations are defined as a length of time.

Durations do not have a defined beginning and end date. They are contextless.

A duration is conceptually more similar to '2 hours' than to 'between 2 and 4 pm today'. As such, they are not a good solution to converting between units that depend on context.

For example, a year can be defined as 366 days, 365 days, 365.25 days, 12 months, or 52 weeks. Trying to convert years to days makes no sense without context. It is much better to use `moment#diff` for calculating days or years between two moments than to use `Durations`.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/creating/" name="/durations/creating/"></a>

### [Creating](#/durations/creating/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/01-creating.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration(Number, String);
    moment.duration(Number);
    moment.duration(Object);
    moment.duration(String);

</div>

To create a duration, call `moment.duration()` with the length of time in milliseconds.

    moment.duration(100); 

If you want to create a moment with a unit of measurement other than milliseconds, you can pass the unit of measurement as well.

    moment.duration(2, 'seconds');
    moment.duration(2, 'minutes');
    moment.duration(2, 'hours');
    moment.duration(2, 'days');
    moment.duration(2, 'weeks');
    moment.duration(2, 'months');
    moment.duration(2, 'years');

The same shorthand for `moment#add` and `moment#subtract` works here as well.

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

Much like `moment#add`, you can pass an object of values if you need multiple different units of measurement.

    moment.duration({
        seconds: 2,
        minutes: 2,
        hours: 2,
        days: 2,
        weeks: 2,
        months: 2,
        years: 2
    });

As of **2.1.0**, moment supports parsing ASP.NET style time spans. The following formats are supported.

The format is an hour, minute, second string separated by colons like `23:59:59`. The number of days can be prefixed with a dot separator like so `7.23:59:59`. Partial seconds are supported as well `23:59:59.999`.

    moment.duration('23:59:59');
    moment.duration('23:59:59.999');
    moment.duration('7.23:59:59.999');
    moment.duration('23:59'); 

As of **2.3.0**, moment also supports parsing [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) durations.

    moment.duration('P1Y2M3DT4H5M6S');
    moment.duration('P1M');

As of **2.11.0**, duration format strings with a space between days and rest is supported.

    moment.duration('7 23:59:59.999');

As of **2.13.0**, mixed negative and positive signs are supported when parsing durations.

    moment.duration('PT-6H3M')

As of **2.18.0**, invalid durations are supported, similarly to invalid moments. To create an invalid duration you can pass `NaN` for a value of a unit.

In upcoming releases expect invalid durations to cover more cases (like null values for units).

    moment.duration(NaN);
    moment.duration(NaN, 'days');
    moment.duration.invalid();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/clone/" name="/durations/clone/"></a>

### [Clone](#/durations/clone/) <span>2.19.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/02-clone.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().clone();

</div>

Create a clone of a duration. Durations are mutable, just like moment objects, so this lets you get a snapshot, at some point in time.

    var d1 = moment.duration();
    var d2 = d1.clone();
    d1.add(1, 'second');
    d1.asMilliseconds() !== d2.asMilliseconds();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/humanize/" name="/durations/humanize/"></a>

### [Humanize](#/durations/humanize/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/03-humanize.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().humanize();

</div>

Sometimes, you want all the goodness of `moment#from` but you don't want to have to create two moments, you just want to display a length of time.

Enter `moment.duration().humanize()`.

    moment.duration(1, "minutes").humanize(); 
    moment.duration(2, "minutes").humanize(); 
    moment.duration(24, "hours").humanize();  

By default, the return string is suffixless. If you want a suffix, pass in true as seen below.

    moment.duration(1, "minutes").humanize(true); 

For suffixes before now, pass in a negative number.

    moment.duration(-1, "minutes").humanize(true); 

Invalid durations are humanized to the localized version of `Invalid Date`.

    moment.duration.invalid().humanize(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/milliseconds/" name="/durations/milliseconds/"></a>

### [Milliseconds](#/durations/milliseconds/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/04-milliseconds.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().milliseconds();
    moment.duration().asMilliseconds();

</div>

To get the number of milliseconds in a duration, use `moment.duration().milliseconds()`.

It will return a number between 0 and 999.

    moment.duration(500).milliseconds(); 
    moment.duration(1500).milliseconds(); 
    moment.duration(15000).milliseconds(); 

If you want the length of the duration in milliseconds, use `moment.duration().asMilliseconds()` instead.

    moment.duration(500).asMilliseconds(); 
    moment.duration(1500).asMilliseconds(); 
    moment.duration(15000).asMilliseconds(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/seconds/" name="/durations/seconds/"></a>

### [Seconds](#/durations/seconds/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/05-seconds.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().seconds();
    moment.duration().asSeconds();

</div>

To get the number of seconds in a duration, use `moment.duration().seconds()`.

It will return a number between 0 and 59.

    moment.duration(500).seconds(); 
    moment.duration(1500).seconds(); 
    moment.duration(15000).seconds(); 

If you want the length of the duration in seconds, use `moment.duration().asSeconds()` instead.

    moment.duration(500).asSeconds(); 
    moment.duration(1500).asSeconds(); 
    moment.duration(15000).asSeconds(); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/minutes/" name="/durations/minutes/"></a>

### [Minutes](#/durations/minutes/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/06-minutes.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().minutes();
    moment.duration().asMinutes();

</div>

As with the other getters for durations, `moment.duration().minutes()` gets the minutes (0 - 59).

`moment.duration().asMinutes()` gets the length of the duration in minutes.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/hours/" name="/durations/hours/"></a>

### [Hours](#/durations/hours/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/07-hours.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().hours();
    moment.duration().asHours();

</div>

As with the other getters for durations, `moment.duration().hours()` gets the hours (0 - 23).

`moment.duration().asHours()` gets the length of the duration in hours.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/days/" name="/durations/days/"></a>

### [Days](#/durations/days/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/08-days.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().days();
    moment.duration().asDays();

</div>

As with the other getters for durations, `moment.duration().days()` gets the days (0 - 30).

`moment.duration().asDays()` gets the length of the duration in days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/weeks/" name="/durations/weeks/"></a>

### [Weeks](#/durations/weeks/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/09-weeks.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().weeks();
    moment.duration().asWeeks();

</div>

As with the other getters for durations, `moment.duration().weeks()` gets the weeks (0 - 4).

`moment.duration().asWeeks()` gets the length of the duration in weeks.

Pay attention that unlike the other getters for duration, weeks are counted as a subset of the days, and are not taken off the days count.

**Note:** The length of a duration in weeks is defined as 7 days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/months/" name="/durations/months/"></a>

### [Months](#/durations/months/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/10-months.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().months();
    moment.duration().asMonths();

</div>

As with the other getters for durations, `moment.duration().months()` gets the months (0 - 11).

`moment.duration().asMonths()` gets the length of the duration in months.

**Note:** The length of a duration in months is defined as 30 days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/years/" name="/durations/years/"></a>

### [Years](#/durations/years/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/11-years.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().years();
    moment.duration().asYears();

</div>

As with the other getters for durations, `moment.duration().years()` gets the years.

`moment.duration().asYears()` gets the length of the duration in years.

**Note:** The length of a duration in years is defined as 365 days.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/add/" name="/durations/add/"></a>

### [Add Time](#/durations/add/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/12-add.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().add(Number, String);
    moment.duration().add(Number);
    moment.duration().add(Duration);
    moment.duration().add(Object);

</div>

Mutates the original duration by adding time.

The same keys and shorthands used to create durations can be used here as the second argument.

    var a = moment.duration(1, 'd');
    var b = moment.duration(2, 'd');
    a.add(b).days(); 

Note that adding an invalid duration to any other duration results in an invalid duration.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/subtract/" name="/durations/subtract/"></a>

### [Subtract Time](#/durations/subtract/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/13-subtract.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().subtract(Number, String);
    moment.duration().subtract(Number);
    moment.duration().subtract(Duration);
    moment.duration().subtract(Object);

</div>

Mutates the original duration by subtracting time.

The same keys and shorthands used to create durations can be used here as the second argument.

    var a = moment.duration(3, 'd');
    var b = moment.duration(2, 'd');
    a.subtract(b).days(); 

Note that adding an invalid duration to any other duration results in an invalid duration.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/as/" name="/durations/as/"></a>

### [As Unit of Time](#/durations/as/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/14-as.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().as(String);

</div>

As an alternate to `Duration#asX`, you can use `Duration#as('x')`. All the [shorthand keys from](#/manipulating/add/) `moment#add` apply here as well.

    duration.as('hours');
    duration.as('minutes');
    duration.as('seconds');
    duration.as('milliseconds');

Invalid durations return `NaN` for all units.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/get/" name="/durations/get/"></a>

### [Get Unit of Time](#/durations/get/) <span>2.1.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/15-get.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().get(String);

</div>

As an alternate to `Duration#x()` getters, you can use `Duration#get('x')`. All the [shorthand keys from](#/manipulating/add/) `moment#add` apply here as well.

    duration.get('hours');
    duration.get('minutes');
    duration.get('seconds');
    duration.get('milliseconds');

Invalid durations return `NaN` for all units.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/as-json/" name="/durations/as-json/"></a>

### [As JSON](#/durations/as-json/) <span>2.9.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/16-as-json.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().toJSON();

</div>

When serializing a duration object to JSON, it will be represented as an ISO8601 string.

    JSON.stringify({
        postDuration : moment.duration(5, 'm')
    }); 

Invalid durations return `Invalid Date` as json representation.

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/is-a-duration/" name="/durations/is-a-duration/"></a>

### [Is a Duration](#/durations/is-a-duration/) <span>1.6.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/17-is-a-duration.md)

<div class="docs-method-prose">

To check if a variable is a moment duration object, use `moment.isDuration()`.

    moment.isDuration() 
    moment.isDuration(new Date()) 
    moment.isDuration(moment()) 
    moment.isDuration(moment.duration()) 
    moment.isDuration(moment.duration(2, 'minutes')) 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/as-iso-string/" name="/durations/as-iso-string/"></a>

### [As ISO 8601 String](#/durations/as-iso-string/) <span>2.8.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/18-as-iso-string.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().toISOString();

</div>

Returns duration in string as specified by [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601#Durations).

    moment.duration(1, 'd').toISOString() 

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

### [Locale](#/durations/locale/) <span>2.17.1+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/08-durations/18-locale.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.duration().locale();
    moment.duration().locale(String);

</div>

You can get or set the locale of a duration using `locale(...)`. The locale will affect the duration's string methods, like `humanize()`. See the [intl](#/i18n/) section for more information on internationalization generally.

    moment.duration(1, "minutes").locale("en").humanize(); 
    moment.duration(1, "minutes").locale("fr").humanize(); 
    moment.duration(1, "minutes").locale("es").humanize(); 

Suffixes in `humanize()` are also internationalized:

    moment.duration(1, "minutes").locale("en").humanize(true); 
    moment.duration(1, "minutes").locale("fr").humanize(true); 
    moment.duration(1, "minutes").locale("es").humanize(true); 

    moment.duration(-1, "minutes").locale("en").humanize(true); 
    moment.duration(-1, "minutes").locale("fr").humanize(true); 
    moment.duration(-1, "minutes").locale("es").humanize(true); 

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/utilities/" name="/utilities/"></a>

## [Utilities](#/utilities/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/utilities/intro/" name="/utilities/intro/"></a>

Moment exposes some methods which may be useful to people extending the library or writing custom parsers.

</article>

<article class="docs-method"><a class="docs-method-target" id="/utilities/normalize-units/" name="/utilities/normalize-units/"></a>

### [Normalize Units](#/utilities/normalize-units/) <span>2.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/09-utilities/01-normalize-units.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    moment.normalizeUnits(String);

</div>

Many of Moment's functions allow the caller to pass in aliases for unit enums. For example, all of the `get`s below are equivalent.

    var m = moment();
    m.get('y');
    m.get('year');
    m.get('years');

If you're extending the library, you may want access to Moment's facilities for that in order to better align your functionality with Moment's.

    moment.normalizeUnits('y');      
    moment.normalizeUnits('Y');      
    moment.normalizeUnits('year');   
    moment.normalizeUnits('years');  
    moment.normalizeUnits('YeARS');  

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/utilities/invalid/" name="/utilities/invalid/"></a>

### [Invalid](#/utilities/invalid/) <span>2.3.0+</span>

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/09-utilities/02-invalid.md)

<div class="docs-method-prose">

You can create your own invalid Moment objects, which is useful in making your own parser.

    var m = moment.invalid();
    m.isValid();                      
    m.format();                       
    m.parsingFlags().userInvalidated; 

`invalid` also accepts an object which specifies which parsing flags to set. This will _not_ set the `userInvalidated` parsing flag unless it's one of the properties specified.

    var m = moment.invalid({invalidMonth: 'Actober'});
    m.parsingFlags().invalidMonth; 

You need not specify parsing flags recognized by Moment; the Moment will be invalid nonetheless, and the parsing flags will be returned by `parsingFlags()`.

</div>

</article>

<article class="docs-section"><a class="docs-section-target" id="/plugins/" name="/plugins/"></a>

## [Plugins](#/plugins/)

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/intro/" name="/plugins/intro/"></a>

Some other people have made plugins for Moment.js that may be useful to you.

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/strftime/" name="/plugins/strftime/"></a>

### [Strftime](#/plugins/strftime/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/01-strftime.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-strftime

</div>

If you are more comfortable working with strftime instead of LDML-like parsing tokens, you can use Ben Oakes' plugin `moment-strftime`.

The repository is located at [github.com/benjaminoakes/moment-strftime](https://github.com/benjaminoakes/moment-strftime).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/msdate/" name="/plugins/msdate/"></a>

### [MSDate](#/plugins/msdate/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/02-msdate.md)

<div class="docs-method-prose">

If you are using OLE Automation dates in .NET check out Markit On Demand's `moment-msdate`. Using this plugin allows you to format OA dates into JavaScript dates and vice-versa.

Convert a `moment` to an OA date:

    moment().toOADate(); 

Or, convert an OA date to a `moment`:

    moment.fromOADate(41493); 

More information and detailed docs can be found on GitHub at [](http://markitondemand.github.io/moment-msdate/)[http://markitondemand.github.io/moment-msdate/](http://markitondemand.github.io/moment-msdate/).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/jdateformatparser/" name="/plugins/jdateformatparser/"></a>

### [Java DateFormat Parser](#/plugins/jdateformatparser/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/03-jdateformatparser.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-jdateformatparser

</div>

If you want to work with the `java.text.DateFormat` you can use this plugin.

For example,

    moment("2013-12-24 14:30").formatWithJDF("dd.MM.yyyy");  
    moment().toJDFString("DD.MM.YYYY");  

The repository is located at [github.com/MadMG/moment-jdateformatparser](https://github.com/MadMG/moment-jdateformatparser).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/range/" name="/plugins/range/"></a>

### [Date Ranges](#/plugins/range/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/04-range.md)</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/twix/" name="/plugins/twix/"></a>

### [Twix](#/plugins/twix/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/05-twix.md)

<div class="docs-method-prose">

Another range plugin is Isaac Cambron's library `Twix`. It has many range-related features and excels at formatting ranges readably. For example,

    var t = moment("1/25/1982 9:30 AM").twix("1/25/1982 1:30 PM");
    t.isCurrent(); 
    t.count('minutes'); 
    t.format();  
    t.simpleFormat("h:m"); 

Full documentation of all the options and features is [here](http://icambron.github.io/twix.js).

It's available on npm like so:

    npm install twix

Or just grab the JS file from [here](https://raw.github.com/icambron/twix.js/master/bin/twix.js).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/preciserange/" name="/plugins/preciserange/"></a>

### [Precise Range](#/plugins/preciserange/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/06-preciserange.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-precise-range-plugin

</div>

The [Precise Range](https://codebox.org.uk/pages/moment-date-range-plugin) plugin, written by [Rob Dawson](https://github.com/codebox), can be used to display exact, human-readable representations of date/time ranges:

    moment("2014-01-01 12:00:00").preciseDiff("2015-03-04 16:05:06");

    moment.preciseDiff("2014-01-01 12:00:00", "2014-04-20 12:00:00");

To obtain the raw numeric values rather than a string, pass the value `true` as the third argument to the method:

    moment.preciseDiff(m1, m2, true); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/isocalendar/" name="/plugins/isocalendar/"></a>

### [ISO Calendar](#/plugins/isocalendar/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/07-isocalendar.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-isocalendar

</div>

If you are looking for a Python-like isocalendar method, you can use Rocky Meza's plugin

`moment-isocalendar`

Calling the isocalendar method on a moment will return an array like the following:

`[year, week_of_year, day_of_week, minutes_since_midnight]`

    moment().isocalendar(); 

You can also reconstruct a moment from a isocalendar array.

    moment.fromIsocalendar([2011, 51, 5, 870]).format('LLLL');

The repository is located at [github.com/fusionbox/moment-isocalendar](https://github.com/fusionbox/moment-isocalendar).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/jalaali/" name="/plugins/jalaali/"></a>

### [Jalaali Calendar](#/plugins/jalaali/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/08-jalaali.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-jalaali

</div>

If you want to work with Jalaali calendar system (Jalali, Persian, Khorshidi or Shamsi), you can use Behrang Noruzi Niya's plugin `moment-jalaali`.

When installed, it will wrap `moment` and moment will be able to format and parse Jalaali years and months. Here is a short example:

    var m = moment('1360/5/26', 'jYYYY/jM/jD'); 
    m.format('jYYYY/jM/jD [is] YYYY/M/D'); 

The repository is located at [github.com/behrang/moment-jalaali](https://github.com/behrang/moment-jalaali).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/hijri/" name="/plugins/hijri/"></a>

### [Hijri Calendar](#/plugins/hijri/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/09-hijri.md)

<div class="docs-method-prose">

If you want to work with Hijri calendar then you can use `moment-hijri` plugin. `moment-hijri` is a moment plugin for the Hijri lunar calendar based on [Umm al-Qura](http://www.ummulqura.org.sa/) calculations. This plugin is developed by [Suhail Alkowaileet](https://github.com/xsoh).

When you install it, it will wrap `moment` and you will be able to parse Hijri dates. Here is a short example:

    m = moment('1410/8/28', 'iYYYY/iM/iD'); 
    m.format('iYYYY/iM/iD [is] YYYY/M/D'); 

The repository is located at [github.com/xsoh/moment-hijri](https://github.com/xsoh/moment-hijri).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/recur/" name="/plugins/recur/"></a>

### [Recur](#/plugins/recur/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/10-recur.md)

<div class="docs-method-prose">

If you need to work with recurring dates, you can use Casey Trimm's plugin `moment-recur`.

This plugin will allow you to create length-based intervals (days, weeks, etc.) and calendar-based intervals (daysOfMonth, monthsOfYear, etc.).

It provides a `matches` function to test whether a date recurs according to the rules set, as well as generator functions to get the next and previous dates in a series.

The repository, documentation, and many more examples can be found at [github.com/c-trimm/moment-recur](https://github.com/c-trimm/moment-recur)

    var interval = moment( "01/01/2014" ).recur().every(2).days(); 
    interval.matches( "01/03/2014" ); 
    interval.next( 2, "L" ); 
    interval.forget( "days" ); 
    interval.dayOfMonth( 10 ); 
    interval.matches( "05/10/2014" ); 
    interval.previous( 2, "L" ); 

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/twitter/" name="/plugins/twitter/"></a>

### [Twitter](#/plugins/twitter/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/11-twitter.md)

<div class="docs-method-prose">

If you're trying to format times for tweets like the way Twitter does, you can use the [moment.twitter](https://github.com/hijonathan/moment.twitter) plugin by [@hijonathan](https://github.com/hijonathan).

It's a simple way to display both short and long versions of human-readable timestamps.

    moment().subtract(5, 'hours').twitterLong();

Yes, it does smart pluralization.

    moment().subtract(1, 'hour').twitterLong();

Not short enough for you?

    moment().subtract(6, 'days').twitterShort();

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/fquarter/" name="/plugins/fquarter/"></a>

### [Fiscal Quarters](#/plugins/fquarter/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/12-fquarter.md)

<div class="docs-method-prose">

If you ever have need for [Fiscal](https://en.wikipedia.org/wiki/Fiscal_year), Calendar or Academic quarters, you can use the [moment-fquarter](https://github.com/robgallen/moment-fquarter) plugin by [@robgallen](https://github.com/robgallen).

At its simplest, just call the fquarter method on any moment object. It returns a formatted string with April being the first quarter.

    moment("2013-01-01").fquarter();

You can pass in any month as the starting quarter, e.g. July

    moment("2013-01-01").fquarter(7);

If you want calendar quarters, start in January

    moment("2013-01-01").fquarter(1);

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/parseformat/" name="/plugins/parseformat/"></a>

### [Parse Date Format](#/plugins/parseformat/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/13-parseformat.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-parseformat

</div>

This plugin extracts the format of a date/time string.

    var format = moment.parseFormat('Thursday, February 6th, 2014 9:20pm');

    moment().format(format); 

That allows to create smart date inputs that let your users set a Date/Time and lets you extract the user's preferred format for future usage. Find an example usage of it at [minutes.io](https://minutes.io/new/Meeting).

The Plugin has been authored by [@gr2m](https://github.com/gr2m). Links: [Demo](http://gr2m.github.io/moment-parseformat/) | [Source](https://github.com/gr2m/moment.parseFormat)

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/round/" name="/plugins/round/"></a>

### [Round](#/plugins/round/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/14-round.md)

<div class="docs-method-prose">

This plugin will round date/time to a given interval.

For example,

    var m = new moment(); 
    moment.round(5, 'seconds'); 
    moment.ceil(3, 'minutes'); 
    moment.floor(16, 'hours'); 
    moment.ceil(21, 'hours'); 
    moment.ceil(20, 'hours'); 

The repository is located at [github.com/WebDevTmas/moment-round](https://github.com/WebDevTmas/moment-round).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/transform/" name="/plugins/transform/"></a>

### [Transform](#/plugins/transform/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/15-transform.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    bower install moment-transform

</div>

[`moment-transform`](https://a----.github.io/moment-transform/) is a plugin that manipulated dates through patterns. You can use basic operations –set/add/subtract– on individual parts (hours, month, …) of a Moment instance.

    moment().transform('YYYY-MM-+01 00:00:00.000'); 
    moment().transform('14:30:00.000'); 
    moment().transform('YYYY-MM--30 00:00:00.000'); 

Optional parameters lets you specify custom patterns and force strict pattern usage (non-alphabetic characters are not mandatory in passed string by default).

    moment().transform('+01MMYYYY', 'DD/MM/YYYY', false); 
    moment().transform('+01MMYYYY', 'DD/MM/YYYY', true); 

You can see it live [there](https://a----.github.io/moment-transform/) while the repository is [here](https://github.com/A----/moment-transform).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/taiwan/" name="/plugins/taiwan/"></a>

### [Taiwan Calendar](#/plugins/taiwan/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/16-taiwan.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-taiwan

</div>

If you want to work with Taiwan calendar system , you can use Bradwoo8621's plugin `moment-taiwan`.

When installed, it will wrap `moment` and moment will be able to format and parse Taiwan years. Here is a short example:

    m = moment('104/01/01', 'tYY/MM/DD') 
    m.format('tYY/MM/DD [is] YYYY/M/D') 

    m.twYear() 

The repository is located at [github.com/bradwoo8621/moment-taiwan](https://github.com/bradwoo8621/moment-taiwan).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/duration-format/" name="/plugins/duration-format/"></a>

### [Duration Format](#/plugins/duration-format/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/17-duration-format.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-duration-format

</div>

This is a plugin that will allow comprehensive formatting of Moment Durations.

For example,

    moment.duration(123, "minutes").format("h:mm");

The repository is located at [github.com/jsmreese/moment-duration-format](https://github.com/jsmreese/moment-duration-format).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/timer/" name="/plugins/timer/"></a>

### [Timer](#/plugins/timer/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/18-timer.md)

<div class="docs-method-prose">

This is a Moment.js plugin that allows the use of timers, which offer much more control than the native JavaScript timers. It's basically a rewrite of JavaScripts own setInterval and setTimeout.

For example,

    var timer = moment.duration(5, "seconds").timer({loop: true}, function() {

    });

The repository is located at [github.com/SeverinDK/moment-timer](https://github.com/SeverinDK/moment-timer).

</div>

</article>

<article class="docs-method"><a class="docs-method-target" id="/plugins/moment-business/" name="/plugins/moment-business/"></a>

### [Business](#/plugins/moment-business/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/19-moment-business.md)

<div class="docs-method-prose">

<div class="docs-method-signature">

    npm install moment-business

</div>

This is a Moment.js library that allows Moment operations for Western work weeks: 7 day weeks where Saturday and Sunday are non-work days.

For example,

    import business from 'moment-business';

    business.isWeekDay(someMoment);

    business.addWeekDays(someMoment, 5);

The repository is located at [github.com/jmeas/moment-business](https://github.com/jmeas/moment-business).

</div>

</article> 

<article class="docs-method"><a class="docs-method-target" id="/plugins/shortformat/" name="/plugins/shortformat/"></a>

### [Short Date Formatter](#/plugins/shortformat/)

[edit](https://github.com/moment/momentjs.com/blob/master/docs/moment/10-plugins/20-shortformat.md)

<div class="docs-method-prose">

If you want to format times in a short way, you can use the [moment-shortformat](https://github.com/researchgate/moment-shortformat) plugin by [@researchgate](https://github.com/researchgate).

It is based on and similar to the moment.twitter plugin but has a different output.

    moment().subtract(5, 'hours').short();

    moment().add(5, 'hours').short();

You can also disable the use of the [relative time templates](#/customization/relative-time/)

    moment().subtract(1, 'hour').short(false);

If the date is too far in the future or the past it will display like that

    moment().subtract(500, 'days').short();

</div>

</article>

</div>