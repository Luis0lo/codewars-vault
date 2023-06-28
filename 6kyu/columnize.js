/*
You are given an array of strings that need to be spread among N columns. Each column's width should be the same as the length of the longest string inside it.

Separate columns with " | ", and lines with "\n"; content should be left-justified.

{"1", "12", "123", "1234", "12345", "123456"} should become:

1     
12    
123   
1234  
12345 
123456
for 1 column,

1     | 12    
123   | 1234  
12345 | 123456
for 2 columns,

1     | 12     | 123 | 1234
12345 | 123456
for 4 columns.
*/

function columnize(items, n) {
  let result = '',
    columnWidths = Array(n).fill(0);

  for (let i = 0; i < items.length; i++) {
    let j = i % n;
    columnWidths[j] = Math.max(columnWidths[j], items[i].length);
  }

  for (let i = 0; i < items.length; i++) {
    let j = i % n;
    if (i > 0 && j == 0) {
      result += '\n';
    } else if (i > 0) {
      result += ' | ';
    }
    result += items[i].padEnd(columnWidths[j], ' ');
  }
  return result;
}

function columnize(items, n) {
  let result = '';
  let widths = Array(n).fill(0);

  for (let i = 0; i < items.length; i++)
    widths[i % n] = Math.max(widths[i % n], items[i].length);

  for (let i = 0; i < items.length; i++) {
    result += !i ? '' : i % n ? ' | ' : '\n';
    result += items[i].padEnd(widths[i % n], ' ');
  }

  return result;
}
