<div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > datetime-object](https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
</div>

 <div class="docs-content">

# Main Contents
- [Installation](Installation.md#/use-it/)
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

dateTime-object was designed to work both with all browsers and with Node.js.
It's a refactoring of [momentjs](https://momentjs.com/) for clean API and working with Objects.

# [Installation](#/use-it/) 


## download
<code>

    npm install datetime-object --save

OR

    bower install datetime-object --save
</code>


## references

### in browser

<code>

    <script src="datetime-object.min.js"></script>;
</code>

### in Node.js
    
    require('datetime-object');    
</code>

## usage
<code>

     var dt=new DateTime();
     console.log(dt.toString());
</code>
</article>