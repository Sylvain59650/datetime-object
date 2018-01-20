 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > datetime-object](https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
</div>

 <div class="docs-content">

# Main Contents
- [Installation](Installation.md#/use-it/)
- [Constructors](#/constructors/)
- [Parsing](DateTime-Parsing.md)
- [Converters](DateTime-Converters.md)
- [Displays](DateTime-Displays.md)
- [Others API](DateTime-OthersAPI.md)
- [Annex Classes]()
  - [TimeSpan](TimeSpan.md)
  - [Locale](DateTime-Locale.md)



<article class="docs-section">

# [Converters Section](#/converters)]()

- [fromDate](#/parsing/fromDate/)
- [fromMoment](#/parsing/fromMoment/)
- [fromObject](#/parsing/fromObject/)
- [fromUnixEpoch](#/parsing/fromUnixEpoch/)
- [toUnixEpoch](#/parsing/toUnixEpoch/)
- [toDate](#/displaying/toDate/) 
- [toJSON](#/displaying/toJSON/)
- [toISOString](#/displaying/toISOString/)
- [toObject](#/displaying/toObject/) 
<article>

## [fromDate](#/parsing/fromDate/)

<code>

    var date=new Date();
    var dt=DateTime.fromDate(date);
</code>
</article>

<article>

## [DateTime.fromMoment](#/parsing/fromMoment/)
  Create a DateTime from a moment object
<code>

    var mmt=moment();
    var dt=DateTime.fromMoment(mmt);
</code>
</article>


## [DateTime.fromObject](#/parsing/fromObject/)
<div class="docs-method-prose">
<div class="docs-method-signature">

    DateTime.fromObject{unit: value, ...});
</div>
<code>

    DateTime.fromObject({ hour:15, minute:10 });
    DateTime.fromObject({ y    :2010, M     :3, d   :5, h    :15, m      :10, s      :3, ms          :123});
    DateTime.fromObject({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
    DateTime.fromObject({ years:2010, months:3, days:5, hours:15, minutes:10, seconds:3, milliseconds:123});
    DateTime.fromObject({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123});
    DateTime.fromObject({ years:'2010', months:'3', date:'5', hours:'15', minutes:'10', seconds:'3', milliseconds:'123'});  
</code>
You can create a DateTime by specifying some of the units in an object.

Omitted units default to 0 or the current date, month, and year.

`day` and `date` key both mean day-of-the-month.


Note that  `new Date(year, month, date)`, months are 0 indexed.
</div>
</article>



<article>

## [fromUnixEpoch](#/parsing/fromUnixEpoch/)
<code>

    var timestamp=DateTime.fromUnixEpoch();
</code>
</article>

<article>

## [toUnixEpoch](#/parsing/toUnixEpoch/)

<code>

    var timestamp=DateTime.now().toUnixEpoch();
</code>
</article>

<article class="docs-method">

## [toDate](#/displaying/toDate/) 
<div class="docs-method-prose">

This will return a copy of the `Date` that the DateTime uses, so any changes to that `Date` will not cause DateTime to change. If you want to change the DateTime `Date`, see `DateTime#manipulate` or `DateTime#set`.
</div>
</article>


<article class="docs-method">

## [toJSON](#/displaying/toJSON/) 
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

<article class="docs-method">

## [toISOString](#/displaying/toISOString/)
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().toISOString();
    new DateTime().toISOString(keepOffset); 

</div>

Formats a string to the ISO8601 standard.

    new DateTime().toISOString() 

Note that `.toISOString()` returns a timestamp in UTC, even if the DateTime in question is in local mode. This is done to provide consistency with the specification for native JavaScript Date `.toISOString()`, as outlined in [the ES2015 specification](https://www.ecma-international.org/ecma-262/6.0/#sec-date.prototype.toisostring).
</div>
</article>

<article class="docs-method">

## [toObject](#/displaying/toObject/) 
<div class="docs-method-prose">

This returns an object containing year, month, day-of-month, hour, minute, seconds, milliseconds.

    new DateTime().toObject()  

</div>

</article>

<article class="docs-method">

## [toMoment](#/displaying/toMoment/) 

    DateTime#toMoment()
<div class="docs-method-signature">

    var dt=new DateTime().toMoment();
</div>
<div class="docs-method-prose">

This returns an moment.

    new DateTime().toMoment()  

</div>

</article>