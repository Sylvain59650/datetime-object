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
  - [Locale](#/locale/)


<article class="docs-section"> 

# [Locale](#/locale/)

## [i18n](#/i18n/)

</article>

<article class="docs-method">

<div class="docs-method-prose">

This API has robust support for internationalization.

You can load multiple locales and easily switch between them.

In addition to assigning a global locale, you can assign a locale to a specific DateTime.

</div>

</article>

<article class="docs-method">

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

<article class="docs-method">

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


<article class="docs-method">

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

<article class="docs-method">

### [Adding your locale to DateTime.js](#/i18n/adding-locale/)

<div class="docs-method-prose">

To add your locale to DateTime.js, submit a pull request with both a locale file and a test file. You can find examples in `DateTime/src/locale/fr.js` and `DateTime/src/test/locale/fr.js`.

To run the tests in Node.js, do `npm install`, then `grunt`.

If all the tests pass, submit a pull request, and thank you for contributing!

</div>

</article>

<article class="docs-method">

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

<article class="docs-method">

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



<article class="docs-method">

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

<article class="docs-section">

## [Customize](#/customization/)

</article>

<article class="docs-method">

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

<article class="docs-method">

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

<article class="docs-method">

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

<article class="docs-method">

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

<article class="docs-method">

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

<article class="docs-method">

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

<article class="docs-method">

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

<article class="docs-method">

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

<article class="docs-method">

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
