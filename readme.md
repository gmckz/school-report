Specification


school reports company
help teachers see how students perform on tests
get a string of comma separated values with test results
would like to generate a simple report

-----------------------
Function/s

report():
arguments: a string of csv values
returns: a string of grades with the number of students who got that grade
side effects: none


-----------------------
Example usage
"Green, Green, Amber, Red, Green"
"Green: 3\nAmber: 1\nRed: 1"

"Green,Dave,Whimsy,Red"
"Green: 1\nRed: 1\nUncounted: 2"

""
"No results have been given"

Given non string type argument
raise argument error: "Input should be a comma separated string"
-----------------------
Test cases

when given green
returns Green: 1

when given amber
returns Amber: 1

when given red
returns Red: 1



when given a string containing words "green", "amber", "red"
function returns a string with counts of each occurence

when given a string containing words other than green amber red, 
function returns a string "uncounted"

when given an empty string
function returns "No results have been given:

when given non-string argument
function raises argument error: "Input should be a comma separated string"

