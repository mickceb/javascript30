# # Project 6 of 30 of [JavaScript30](https://javascript30.com/)

## What I have learned

With this project, I worked in 3 steps :

1. Fetching the data by using the function `fetch()` and `push()` the data in an array so that it will be easier to access it later.
2. Getting the research by creating a function `findMatches` that filters the array based on what the user typed in the research bar. We use a RegExp to match the result.
3. Displaying the results with a function that injects `` <li>`${result}`</li> `` (thanks to innerHTML) directly in the form.

Moreover, the display of the population has been shape with a function find to [stackoverflow](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript). That function shape numbers with commas, spaces or anything else to separate the thousands.

```
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

### The screenshot of the project

![screenshot](https://github.com/mickceb/javascript30/blob/main/06-ajax-type-ahead/assets/screenshot.png)

#### [🔍 Click here to try it](https://mickceb.github.io/javascript30/06-ajax-type-ahead/)
