<div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > datetime-object](https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
</div>

 <div class="docs-content">

# Main Contents
- [Constructors](DateTime-Constructors.md)
- [Parsing](TimeSpan-Parsing.md)
- [Converters](#converters)
- [Displays](TimeSpan-Displays.md)
- [Others API](#/api/)
- [Annex Classes]()
  - [TimeSpan](#/timespan/)
  - [Locale](DateTime-Locale.md)

<article class="docs-section"> 
<a name="converters"></a>

# Converters Section

<article>
Much like `DateTime#fromObject`, you can pass an object of values if you need multiple different units of measurement.

    TimeSpan.fromObject({
        seconds: 2,
        minutes: 2,
        hours: 2,
        days: 2,
        weeks: 2,
        months: 2,
        years: 2
    });
</article>    