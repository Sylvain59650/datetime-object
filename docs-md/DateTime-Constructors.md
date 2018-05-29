 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > datetime-object](https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
</div>

 <div class="docs-content">

# Contents
- [Installation](README.md)
- [Constructors](#constructors)
- [Parsing](DateTime-Parsing.md)
- [Converters](DateTime-Converters.md)
- [Displays](DateTime-Displays.md)
- [Others API](DateTime-OthersAPI.md)
- [Annex Classes]()
  - [TimeSpan](TimeSpan.md)
  - [Locale](DateTime-Locale.md)



<article class="docs-section">

# Constructors

<article class="docs-method">

<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime(stringDate, format);

    new DateTime(stringDate, format,lang);

    new DateTime(year, month, day, hours, minutes, seconds, milliseconds);   
</div>

If you know the format of an input stringDate, you can use format to parse stringDate.

    new DateTime("12-25-1995", "MM-DD-YYYY");

The parser ignores non-alphanumeric characters, so both of the following will return the same thing.

    new DateTime("12-25-1995", "MM-DD-YYYY");
    new DateTime("12/25/1995", "MM-DD-YYYY");

Unless you specify a time zone offset, parsing a string will create a date in the current time zone.


The parsing tokens are similar to the formatting tokens used in `DateTime#toString`.

## Year, month, and day tokens

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

`Y` will match any number, signed or unsigned. It is useful for years that are not 4 digits or are before the common era. It can be used for any year.

## Week year, week, and weekday tokens

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

## Hour, minute, second, millisecond, and offset tokens

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

Locale aware date and time formats are also available using `LT LTS L LL LLL LLLL`. 

 a locale key can be passed as the third parameter to `new DateTime()` and `DateTime.utc()`.

    new DateTime('2012 juillet', 'YYYY MMM', 'fr');
    new DateTime('2012 July',    'YYYY MMM', 'en');

</article>