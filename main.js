const data = [1,2,3,4,5];

d3.select('body')
  .selectAll('p')
  .data(data)
  .enter()
  .append('p')
  // .text('D3 is awesome!');
  .text(function(d) {return d * 2; });
