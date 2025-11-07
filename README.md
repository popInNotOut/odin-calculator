## Description

This is a web-based calculator implemented by myself that performs arithmetic operations.

<table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th>Website</th>
    <th>Link</th>
  </tr>
  <tr>
    <td>GitHub demo</td>
    <td><a href="https://popinnotout.github.io/odin-calculator/">github link</a></td>
  </tr>
</table>

<br><br>

## Usage

To ensure the calculator works correctly, all queries must follow this format:

operand1 operator operand2 =

- `operand1` and `operand2` are numbers (integers or decimals).  
- `operator` is one of the following symbols: `+`, `-`, `x`, `%` or `÷`.  
- The query **must end with an equals sign `=`**.

<br>

Examples of valid queries:

* 3 + 5 =

* 10.5 x 2 =

* 7 - 4 =

* 12 ÷ 3 =

* 88.509 % 7 =

<br>

Examples of invalid queries:

* 3 + 5        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(missing equals sign)

* \+ 5 3 =     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(wrong operand order)

* 3 + 5 + 4 =  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(only one operator per query)

<br>

### Notes

Queries that do not match the required format will not be processed.