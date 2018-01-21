<div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > datetime-object](https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
</div>

 <div class="docs-content">

# Main Contents
- [Installation](README.md)
- [Constructors](DateTime-Constructors.md)
- [Parsing](DateTime-Parsing.md)
- [Converters](DateTime-Converters.md)
- [Displays](DateTime-Displays.md)
- [Others API](#/api/)
- [Annex Classes]()
  - [TimeSpan](#/timespan/)
  - [Locale](DateTime-Locale.md)

<article class="docs-section"> 

# TimeSpan Section
- [Constructors](#constructors)
- [Parsing](#parsing)
- [Locale](#locale)
- [Others APIs]()
    - [clone](#clone)
    - [humanize](#humanize)
    - [milliseconds](#milliseconds)
    - [asMilliseconds](#asmilliseconds)
    - [Locale](#locale)
    - [totalSeconds](#totalseconds)
    - [totalMinutes](#totalMinutes)
    - [totalHours](#totalhours)
    - [totalYears](#totalyears)

<article class="docs-section"><a name="timespan"></a>

<div class="docs-method-prose">

dateTime-object also has TimeSPan objects. Where a DateTime is defined as single points in time, durations are defined as a length of time.

TimeSpans do not have a defined beginning and end date. They are contextless.

A TimeSpan is conceptually more similar to '2 hours' than to 'between 2 and 4 pm today'. As such, they are not a good solution to converting between units that depend on context.
</div>

</article>

<article class="docs-method"><a  name="constructors"></a>

## Constructors
<div class="docs-method-prose">

<div class="docs-method-signature">

    new TimeSpan(number);
    new TimeSpan(number, unitString);
</div>

To create a duration, call `new TimeSpan()` with the length of time in milliseconds.

    new TimeSpan(100); 

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

<a name="parsing"></a>
## Parsing

The format is an hour, minute, second string separated by colons like `23:59:59`. The number of days can be prefixed with a dot separator like so `7.23:59:59`. Partial seconds are supported as well `23:59:59.999`.

    TimeSpan.parse('23:59:59');
    TimeSpan.parse('23:59:59.999');
    TimeSpan.parse('7.23:59:59.999');
    TimeSpan.parse('23:59'); 

This API also supports parsing [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) durations.

    TimeSpan.parse('P1Y2M3DT4H5M6S');
    TimeSpan.parse('P1M');

duration format strings with a space between days and rest is supported.

    TimeSpan.parse('7 23:59:59.999');

mixed negative and positive signs are supported when parsing durations.

    TimeSpan.parse('PT-6H3M')

</article>

<article class="docs-method"><a class="docs-method-target" id="/durations/clone/" name="/durations/clone/"></a>

## Clone
<div class="docs-method-prose">
Create a clone of a duration.
<div class="docs-method-signature">

    new TimeSpan().clone();

</div>

    var d1 = new TimeSpan();
    var d2 = d1.clone();
    d1.add(1, 'second');
    d1.asMilliseconds() !== d2.asMilliseconds();
</div>
</article>

<article class="docs-method"><a name="humanize"></a>

## Humanize
<div class="docs-method-prose">

<div class="docs-method-signature">

    new TimeSpan().humanize();
    new TimeSpan().humanize(relativeBoolean);
</div>

    new TimeSpan(1, "minutes").humanize(); 
    new TimeSpan(2, "minutes").humanize(); 
    new TimeSpan(24, "hours").humanize();  

By default, the return string is suffixless. If you want a suffix, pass in true as seen below.

    new TimeSpan(1, "minutes").humanize(true); 

For suffixes before now, pass in a negative number.

    new TimeSpan(-1, "minutes").humanize(true); 
</div>
</article>

<article class="docs-method">

## milliseconds
<div class="docs-method-prose">
get the number of milliseconds in a duration
<div class="docs-method-signature">

    new TimeSpan().milliseconds();
</div>

 return a number between 0 and 999.

    new TimeSpan(1500).milliseconds(); 

If you want the length of the duration in milliseconds, use `asMilliseconds()` instead.

    new TimeSpan(500).asMilliseconds(); 

</div>

</article>



<article class="docs-method">

## Locale
<div class="docs-method-prose">
You can get or set the locale of a duration using `locale(...)`. The locale will affect the duration's string methods, like `humanize()`. See the [intl](#/i18n/) section for more information on internationalization generally.

<div class="docs-method-signature">

    new TimeSpan().locale();
    new TimeSpan().locale(String);
</div>

    new TimeSpan(1, "minutes").locale("en").humanize(); 
    new TimeSpan(1, "minutes").locale("fr").humanize(); 
    new TimeSpan(1, "minutes").locale("es").humanize(); 

Suffixes in `humanize()` are also internationalized:

    new TimeSpan(1, "minutes").locale("en").humanize(true); 
    new TimeSpan(1, "minutes").locale("fr").humanize(true); 
    new TimeSpan(1, "minutes").locale("es").humanize(true); 

    new TimeSpan(-1, "minutes").locale("en").humanize(true); 
    new TimeSpan(-1, "minutes").locale("fr").humanize(true); 
    new TimeSpan(-1, "minutes").locale("es").humanize(true); 
</div>
</article>

<article>
<a name="totalseconds"></a>

## totalSeconds

Get the length of the duration in seconds
<code>

    new TimeSpan(500).totalSeconds(); 

</code>
</article>

<article>

<a name="totalminutes"></a>

## totalMinutes

Get the length of the duration in minutes
<code>

    new TimeSpan(500).totalMinutes(); 

</code>
</article>



## totalHours

Get the length of the duration in hours
<code>

    new TimeSpan(500).totalHours(); 
</code>
</article>

## totalDays

Get the length of the duration in days
<code>

    new TimeSpan(5500).totalDays(); 
</code>
</article>

## totalYears

Get the length of the duration in years
<code>

    new TimeSpan(550000).totalYears(); 
</code>
</article>


<article class="docs-method"><a name="addMiliseconds"></a>

## addMiliseconds

<div class="docs-method-prose">
Return a new TimeSpan adding miliseconds to a TimeSpan
</div>
<div class="docs-method-signature">

    new TimeSpan().addMiliseconds(Number);
</div>
</article>


<article class="docs-method"><a class="docs-method-target" id="/durations/as/" name="/durations/as/"></a>



<article class="docs-method">
<a name="toJson"></a>

## toJSON
<div class="docs-method-prose">

<div class="docs-method-signature">

    new TimeSpan().toJSON();

</div>

When serializing a duration object to JSON, it will be represented as an ISO8601 string.

    JSON.stringify({
        postDuration : new TimeSpan(5, 'm')
    }); 

</div>
</article>


<article class="docs-method"><a class="docs-method-target" id="/durations/as-iso-string/" name="/durations/as-iso-string/"></a>

### [As ISO 8601 String](#/durations/as-iso-string/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new TimeSpan().toISOString();

</div>

Returns duration in string as specified by [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601#Durations).

    new TimeSpan(1, 'd').toISOString() 

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