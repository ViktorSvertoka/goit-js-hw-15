const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);
console.log('\n');

items.forEach(item => {
  const title = item.firstElementChild;
  const elements = item.lastElementChild.children;

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
  console.log('\n');
});
