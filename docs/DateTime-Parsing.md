<div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > datetime-object](https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
</div>

 <div class="docs-content">

# Main Contents
- [Installation](README.md)
- [Constructors](DateTime-Constructors.md)
- [Parsing](#/parsing/)
- [Converters](DateTime-Converters.md)
- [Displays](DateTime-Displays.md)
- [Others API](DateTime-OthersAPI.md)
- [Annex Classes]()
  - [TimeSpan](TimeSpan.md)
  - [Locale](DateTime-Locale.md)

<article class="docs-section"> 

# [Section Parsing]()
- [parse](#parse)
- [parseZone](#parsezone)
- [Supported ISO 8601 strings](#supportediso)
- [The RFC 2822 date time format](#rfc2822)

<article class="docs-method">

# parse

<div class="docs-method-prose">
<code>

    DateTime.parse(string);
    DateTime.parse(string,format);
    DateTime.parse(string,[formats]);
    DateTime.parse(string,[formats],parseExact);
    DateTime.parse(string,[formats],parseExact,utcMode);
</code>
</div>
</article>

<article class="docs-method">

<div class="docs-method-prose">

When creating a DateTime from a string, we first check if the string matches known [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formats, we then check if the string matches the [RFC 2822 Date time](https://tools.ietf.org/html/rfc2822#section-3.3) format before dropping to the fall back of `new Date(string)` if a known format is not found.

    var day = new DateTime("1995-12-25");

**Warning:** Browser support for parsing strings [is inconsistent](http://dygraphs.com/date-formats.html). Because there is no specification on which formats should be supported, what works in some browsers will not work in other browsers.

<a name="supportediso"></a>

## Supported ISO 8601 strings

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


If a string does not match any of the above formats and is not able to be parsed with `Date.parse`, `DateTime#isValid` will return false.

<a name="rfc2822"></a>
## The RFC 2822 date time format

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


<article>


<article class="docs-method">

## parseZone

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



<article class="docs-method">
<a name="invalidparsing"></a>

## Invalid Parsing
<div class="docs-method-prose">

If the parsing fails, the function returns `null` and logs a message on the console to explain the reason for the failure

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

</article>
</article>