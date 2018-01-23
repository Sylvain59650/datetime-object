<div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > datetime-object](https://github.com/Sylvain59650/datetime-object/blob/master/README.md)
</div>

 <div class="docs-content">

# Main Contents
- [Installation](#install)
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
It requires moment and moment-round.

# [Installation](#install) 


## download
<code>

    npm install moment moment-round datetime-object --save

OR

    bower install moment moment-round datetime-object --save
</code>


## references

### in browser

<code>

    <script src="../node_modules/moment/min/moment.min.js"></script>
    <script src="../node_modules/moment-round/dist/moment-round.min.js"></script>
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