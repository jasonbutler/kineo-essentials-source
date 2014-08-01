adapt-clickstyle
================

Extension for styling clickable items by their click count

Add the class "clickstyle" to your element.


```
<div id="element" class="clickstyle"> Test </div>
```

With a style: 

```
#element {
	color: blue;
}
#element.clickstyle {
	color: red;
}
```

On each subsequent click the element's class will change as follows:

```
.clickstyle-1 
.clickstyle-2
.clickstyle-3
.clickstyle-.... etc
```

So... with:

```
<div id="element" class="clickstyle"> Test </div>
```

And:

```
#element {
	color: blue;
}
#element.clickstyle {
	color: red;
}
#element.clickstyle-2
{
	color: green;
}
#element.clickstyle-10
{
	color: pink;
}
```

Your element would be red on 0 clicks, green on the second click, pink on the tenth click and blue otherwise.


You can listen to the click event using:

```
Adapt.on("clickstyle:clicked", function(event, clicks) {
	
	
});
```