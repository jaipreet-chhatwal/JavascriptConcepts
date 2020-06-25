
/*
The fact that Math.max() > Math.min() returns false sounds wrong, but it actually makes a lot of sense.
If no arguments are given, Math.min() returns infinity and Math.max() returns -infinity . This is simply part
of the specification for the max() and min() methods, but there is good logic behind the choice. To understand
why, take a look at the following code:  */
Math.min(1) 
// 1
Math.min(1, infinity)
// 1
Math.min(1, -infinity)
// -infinity
/*
If -infinity was considered the default argument of Math.min() , then every result would be -infinity , which is pretty useless! Whereas, if the default argument is infinity , the addition of any other argument would return that number — and that’s the behaviour we want.

*/
