
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


<article class="docs-method"><a class="docs-method-target" id="/durations/seconds/" name="/durations/seconds/"></a>

### [seconds](#/durations/seconds/) 
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

### [weeks](#/durations/weeks/) 
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

### [years](#/durations/years/) 
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