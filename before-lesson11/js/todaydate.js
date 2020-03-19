var today = new Date();
var formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.write(today.toLocaleDateString('en-US', formatOptions));
