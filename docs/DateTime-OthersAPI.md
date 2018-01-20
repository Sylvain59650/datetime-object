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
- [Others API](DateTime-OthersAPI.md)
- [Annex Classes]()
  - [TimeSpan](TimeSpan.md)
  - [Locale](DateTime-Locale.md)

<article class="docs-section"> 

# [Others API](#/api/)
- [now](#/manipulating/now/)
- [today](#/manipulating/today/) 
- [add](#/manipulating/add/)
- [round](#/round/)
- [ceil](#/ceil/)
- [floor](#/floor/)
- [isBefore](#/query/isBefore/) 
- [isAfter](#/query/isAfter/) 
- [isSame](#/query/isSame/) 
- [isSameOrBefore](#/query/isSameOrBefore/) 
- [isSameOrAfter](#/query/isSameOrAfter/) 
- [isBetween](#/query/isBetween/) 
- [seconds()](#/get-set/second/)
- [milliseconds](#/get-set/milliseconds/) 
- [minutes](#/get-set/minutes/)
- [hours](#/get-set/hours/) 
- [weekday (Locale Aware)](#/get-set/weekday/)
- [isoWeekday](#/get-set/isoWeekday/)
- [dayOfYear](#/get-set/dayOfYear/)
- [week](#/get-set/week/)
- [isoWeek](#/get-set/isoWeek/)
- [month](#/get-set/month/) 
- [year](#/get-set/year/) 
- [weekYear](#/get-set/weekYear/)
- [isoWeekYear](#/get-set/isoWeekYear/) 
- [weeksInYear](#/get-set/weeksInYear/) 
- [isoWeeksInYear](#/get-set/isoWeeksInYear/)
- [addYears](#/manipulating/addYears/)
- [addMonths](#/manipulating/addMonths/)
- [addDays](#/manipulating/addDays/) 
- [addHours](#/manipulating/addHours/) 
- [addMinutes](#/manipulating/addMinutes/) 
- [addSeconds](#/manipulating/addSeconds/) 
- [diff](#/displaying/diff/)
<article>

## [now](#/manipulating/now/) 
<code>

    var dt=DateTime.now();
</code>
</article>

<article>

## [today](#/manipulating/today/) 
<code>

    var dt=DateTime.today();
</code>
</article>

<article>

## [round](#/round/)
<div class="method-prototype">

    DateTime.prototype.round(integer,interval)
where interval can be "seconds","minutes","hours"
</div>
<div class="docs-method-prose">

round the instance DateTime to a given interval.
</div>
<div class="usage">

    var m = new DateTime(); 
    m.round(5, 'seconds'); 
    m.round(3, 'minutes'); 
    m.round(16, 'hours'); 
</div>
</article>

<article>

## [ceil](#/ceil/)
<div class="method-prototype">

    DateTime.prototype.ceil(integer,interval)
where interval can be "seconds","minutes","hours"
</div>
<div class="docs-method-prose">

set the instance DateTime to the near ceil according a given interval.
</div>
<div class="usage">
    var m = new DateTime(); 
    m.ceil(5, 'seconds'); 
    m.ceil(3, 'minutes'); 
    m.ceil(16, 'hours'); 
</div>
</article>


<article>

## [floor](#/floor/)
<div class="method-prototype">

    DateTime.prototype.floor(integer,interval)
where interval can be "seconds","minutes","hours"
</div>
<div class="docs-method-prose">

set the instance DateTime to the near floor according a given interval.
</div>
<div class="usage">

    var m = new DateTime(); 
    m.floor(5, 'seconds'); 
    m.floor(3, 'minutes'); 
    m.floor(16, 'hours'); 
</div>
</article>

<article class="docs-method">

## [isBefore](#/query/isBefore/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isBefore(DateTime);
 
</div>

Check if a DateTime is before another DateTime.

    new DateTime('2010-10-20').isBefore(new DateTime('2010-10-21')); 

</div>

</article>

<article class="docs-method">

## [isSame](#/query/isSame/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isSame(DateTime);

</div>

Check if a DateTime is the same as another DateTime.
<code>

    new DateTime('2010-10-20').isSame(new DateTime('2010-10-20')); 
</code>
</div>

</article>

<article class="docs-method">

## [isAfter](#/query/isAfter/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isAfter(DateTime);

</div>

Check if a DateTime is after another DateTime.
<code>

    new DateTime('2010-10-20').isAfter(new DateTime('2010-10-19')); 
</code>
</div>

</article>

<article class="docs-method">

## [isSameOrBefore](#/query/isSameOrBefore/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isSameOrBefore(DateTime);
</div>

</div>

</article>

<article class="docs-method">

## [isSameOrAfter](#/query/isSameOrAfter/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isSameOrAfter(DateTime);

</div>

Check if a DateTime is after or the same as another DateTime.

    new DateTime('2010-10-20').isSameOrAfter(new DateTime('2010-10-19'));
</div>

</article>

<article class="docs-method">

## [isBetween](#/query/isBetween/) 
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




<article class="docs-method">

## [isLeapYear](#/query/isLeapYear/) 
<div class="docs-method-prose">

`DateTime#isLeapYear` returns `true` if that year is a leap year, and `false` if it is not.
<code>

    DateTime.isLeapYear(year)
</code>
</div>

</article>



<article class="docs-method">

## [seconds](#/get-set/second/)
### Set
<div class="docs-method-signature">

    DateTime.prototype.seconds(integer)
</div>
<div class="docs-method-prose">
  Set seconds of the instance DateTime to a value

  Accepts numbers from 0 to 59\. If the range is exceeded, it will bubble up to the minutes.
</div>

### Get
<div class="docs-method-signature">

    DateTime.prototype.seconds()
</div>
<div class="docs-method-prose">
  Get the seconds of the instance DateTime
</div>
</article>



<article class="docs-method">

## [milliseconds](#/get-set/milliseconds/) 
### [Set]()
<div class="docs-method-signature">

    DateTime.prototype.milliseconds(integer)
</div>
<div class="docs-method-prose">
  Set milliseconds of the instance DateTime to a value
  
Accepts numbers from 0 to 999\. If the range is exceeded, it will bubble up to the seconds.
<div class="usage">

    var in500milliseconds=new DateTime().milliseconds(500);
</div>
</div>

### [Get]()
<div class="docs-method-signature">

    DateTime.prototype.milliseconds()
</div>
<div class="docs-method-prose">
  Get the milliseconds of the instance DateTime
</div>

<div class="usage">
    
    var dt=new DateTime().milliseconds();
</div>
</article>



<article class="docs-method">

## [minutes](#/get-set/minutes/)
### [Set]()
<div class="docs-method-signature">

    DateTime.prototype.minutes(integer)
</div>
<div class="docs-method-prose">
  Set minutes of the instance DateTime to a value
  
Accepts numbers from 0 to 59\. If the range is exceeded, it will bubble up to the hour.
<div class="usage">

    var in50minutes=new DateTime().minutes(50);
</div>
</div>

### [Get]()
<div class="docs-method-signature">

    DateTime.prototype.minutes()
</div>
<div class="docs-method-prose">
  Get the minutes of the instance DateTime
</div>

<div class="usage">

    var currentMinutes=new DateTime().minutes();
</div>
</article>



<article class="docs-method">

## [hours](#/get-set/hours/) 
### [Set]()
<div class="docs-method-signature">

    DateTime.prototype.hours(integer)
</div>
<div class="docs-method-prose">
  Set hours of the instance DateTime to a value
  
Accepts numbers from 0 to 23\. If the range is exceeded, it will bubble up to the day.

<div class="usage">

    var in12Hours=new DateTime().hours(12);
</div>
</div>

### [Get]()
<div class="docs-method-signature">

    DateTime.prototype.hours()
</div>
<div class="docs-method-prose">
  Get the hours of the instance DateTime
</div>

<div class="usage">

    var currentHour=new DateTime().hours();
</div>
</article>



## [dayOfWeek](#/get-set/dayOfWeek/) 
### [Set]()
<div class="docs-method-signature">

    DateTime.prototype.dayOfWeek(integer)
</div>
<div class="docs-method-prose">
This method can be used to set the day of the week, with Sunday as 0 and Saturday as 6.

If the range is exceeded, it will bubble up to other weeks.

<div class="usage">

    var nextMonday=new DateTime().dayOfWeek(1);
</div>
</div>

### [Get]()
<div class="docs-method-signature">

    DateTime.prototype.dayOfWeek()
</div>
<div class="docs-method-prose">
  Get the dayOfWeek of the instance DateTime

    new DateTime().day(-7); 
    new DateTime().day(7); 
    new DateTime().day(10); 
    new DateTime().day(24); 
</div>

<div class="usage">

    var currentDay=new DateTime().dayOfWeek();
</div>
</article>



<article class="docs-method">

## [weekday (Locale Aware)](#/get-set/weekday/)
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

<article class="docs-method">

## [isoWeekday](#/get-set/isoWeekday/)
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

<article class="docs-method">

## [dayOfYear](#/get-set/dayOfYear/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().dayOfYear(Number);
    new DateTime().dayOfYear(); 

</div>

Gets or sets the day of the year.

Accepts numbers from 1 to 366\. If the range is exceeded, it will bubble up to the years.

</div>

</article>

<article class="docs-method">

## [week](#/get-set/week/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().week(Number);
    new DateTime().week(); 

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

<article class="docs-method">

## [isoWeek](#/get-set/isoWeek/) 
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

<article class="docs-method">

## [month](#/get-set/month/)
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



<article class="docs-method">

## [year](#/get-set/year/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().year(Number);
    new DateTime().year(); 
 
</div>

Gets or sets the year.

Accepts numbers from -270,000 to 270,000.

</div>

</article>

<article class="docs-method">

### [weekYear](#/get-set/weekYear/)
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

<article class="docs-method">

## [isoWeekYear](#/get-set/isoWeekYear/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isoWeekYear(Number);
    new DateTime().isoWeekYear(); 

</div>

Gets or sets the [ISO week-year](https://en.wikipedia.org/wiki/ISO_week_date).

</div>

</article>

<article class="docs-method">

## [weeksInYear](#/get-set/weeksInYear/) 
<div class="docs-method-prose">

Gets the number of weeks according to locale in the current DateTime's year.

</div>

</article>

<article class="docs-method">

## [isoWeeksInYear](#/get-set/isoWeeksInYear/) 
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().isoWeeksInYear();

</div>

Gets the number of weeks in the current DateTime's year, according to [ISO weeks](https://en.wikipedia.org/wiki/ISO_week_date).

</div>

</article>

<article class="docs-method">

## [addYears](#/manipulating/addYears/) 

<div class="docs-method-signature">

    new DateTime().addYears(number)   
</div>
<code>

    var dt1=DateTime.now();
    var dt2=dt1.addYears(5);
</code>
This method returns a new DateTime.
</article>

<article class="docs-method">

## [addMonths](#/manipulating/addMonths/) 

<div class="docs-method-signature">

    new DateTime().addMonths(number)   
</div>
<code>

    var dt1=DateTime.now();
    var dt2=dt1.addMonths(5);
</code>
This method returns a new DateTime.
</article>



<article class="docs-method">

## [addDays](#/manipulating/addDays/) 

<div class="docs-method-signature">

    new DateTime().addDays(number)   
</div>
<code>

    var dt1=DateTime.now();
    var dt2=dt1.addDays(5);
</code>
This method returns a new DateTime.
</article>


<article class="docs-method">

## [addHours](#/manipulating/addHours/) 

<div class="docs-method-signature">

    new DateTime().addHours(number)   
</div>
<code>

    var dt1=DateTime.now();
    var dt2=dt1.addHours(5);
</code>
This method returns a new DateTime.
</article>

<article class="docs-method">

## [addMinutes](#/manipulating/addMinutes/) 

<div class="docs-method-signature">

    new DateTime().addMinutes(number)   
</div>
<code>

    var dt1=DateTime.now();
    var dt2=dt1.addMinutes(5);
</code>
This method returns a new DateTime.
</article>

<article class="docs-method">

## [addSeconds](#/manipulating/addSeconds/) 

<div class="docs-method-signature">

    new DateTime().addSeconds(number)   
</div>
<code>

    var dt1=DateTime.now();
    var dt2=dt1.addSeconds(5);
</code>
This method returns a new DateTime.
</article>


<article class="docs-method">

## [add](#/manipulating/add/) 

<div class="docs-method-signature">

    new DateTime().add(years, months, days, hours, minutes, seconds)   
</div>

    var dt1=DateTime.now();
    var dt2=dt1.add(0, 1, 2, 3, 4, 5);
This method returns a new DateTime.
</article>


#### Special considerations for months and years

If the day of the month on the original date is greater than the number of days in the final month, the day of the month will change to the last day in the final month.

    new DateTime(2010, 0, 31);                  
    new DateTime(2010, 0, 31).addMonths(1); 

There are also special considerations to keep in mind when adding time that crosses over daylight saving time. If you are adding years, months, weeks, or days, the original hour will always match the added hour.

Alternatively, you can use [durations](#/durations/) to add to DateTimes.

    var duration = DateTime.duration({'days' : 1});
    new DateTime([2012, 0, 31]).add(duration); 


 when decimal values are passed for days and months, they are rounded to the nearest integer. Weeks, quarters, and years are converted to days or months, and then rounded to the nearest integer.

    new DateTime().add(1.5, 'months') == new DateTime().add(2, 'months')
    new DateTime().add(.7, 'years') == new DateTime().add(8, 'months') 

</div>

</article>


<article class="docs-method">

## [diff](#/displaying/diff/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().diff(DateTime|String|Number|Date|Array);
    new DateTime().diff(DateTime|String|Number|Date|Array, String);
    new DateTime().diff(DateTime|String|Number|Date|Array, String, Boolean);

</div>

To get the difference in milliseconds, use `DateTime#diff` like you would use `DateTime#from`.

    var a = new DateTime(2007, 0, 29);
    var b = new DateTime(2007, 0, 28);
    a.diff(b) 

To get the difference in another unit of measurement, pass that measurement as the second argument.

    var a = new DateTime(2007, 0, 29);
    var b = new DateTime(2007, 0, 28);
    a.diff(b, 'days') 

The supported measurements are `years`, `months`, `weeks`, `days`, `hours`, `minutes`, and `seconds`. For ease of development, the singular forms are supported. Units of measurement other than milliseconds are available.

By default, `DateTime#diff` will truncate the result to zero decimal places, returning an integer. If you want a floating point number, pass `true` as the third argument. 

    var a = new DateTime(2008, 9);
    var b = new DateTime(2007, 0);
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

 diff also support quarter unit.

</div>

</article>

