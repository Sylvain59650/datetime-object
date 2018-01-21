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

# This Section
-  [toString](#tostring)
    - [String Format](#stringformat)
    - [Localized formats](#localizedformats)
    - [Escaping characters](#escapingcharacters)
    - [Formatting Speed](#formattingspeed)
    - [Other tokens](#othertokens)
    - [Default format](#defaultformat)    

<article class="docs-method">

## toString
<div class="docs-method-prose">

<div class="docs-method-signature">

    new DateTime().toString();
    new DateTime().toString(String);

</div>

This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.

    new DateTime().toString();                                
    new DateTime().toString("dddd, MMMM Do YYYY, h:mm:ss a"); 
    new DateTime().toString("ddd, hA");         

<a name="stringformat"></a>
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
*Note:** This complies with the ISO 8601 standard for dates past the year 9999</td>
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

<a name="localizedformats"></a>
### Localized formats

Because preferred formatting differs based on locale, there are a few tokens that can be used to format a DateTime based on its locale.

There are upper and lower case variations on the same formats. The lowercase version is intended to be the shortened version of its uppercase counterpart.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<td> **Time** </td>
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

<a name="escapingcharacters"></a>
### Escaping characters

To escape characters in format strings, you can wrap the characters in square brackets.

    new DateTime().toString('[today] dddd'); 

#### Similarities and differences with LDML

**Note:** While these date formats are very similar to LDML date formats, there are a few minor differences regarding day of month, day of year, and day of week.

For a breakdown of a few different date formatting tokens across different locales, see [this chart of date formatting tokens.](https://docs.google.com/spreadsheet/ccc?key=0AtgZluze7WMJdDBOLUZfSFIzenIwOHNjaWZoeGFqbWc&hl=en_US#gid=0)

<a name="formattingspeed"></a>
### Formatting speed

To compare DateTime.js formatting speed against other libraries, check out [this comparison against other libraries](https://jsperf.com/date-formatting/49).

<a name="othertokens"></a>
### Other tokens

If you are more comfortable working with strftime instead of LDML-like parsing tokens, you can use Ben Oakes' plugin. [benjaminoakes/DateTime-strftime](https://github.com/benjaminoakes/DateTime-strftime).

<a name="defaultformat"></a>
### Default format

calling `DateTime#toString` without a format will default to `DateTime.defaultFormat`. Out of the box, `DateTime.defaultFormat` is the ISO8601 format `YYYY-MM-DDTHH:mm:ssZ`.

 when in UTC mode, the default format is governed by `DateTime.defaultFormatUtc` which is in the format `YYYY-MM-DDTHH:mm:ss[Z]`. This returns `Z` as the offset, instead of `+00:00`.

In certain instances, a local timezone (such as `Atlantic/Reykjavik`) may have a zero offset, and will be considered to be UTC. In such cases, it may be useful to set `DateTime.defaultFormat` and `DateTime.defaultFormatUtc` to use the same formatting.

</div>
</article>