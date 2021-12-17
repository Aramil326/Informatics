var items = [4, 2, 6, 5, 3, 9];


/**
 * Функция разбиения массива
 * @param {array} items - массив для сортировки
 * @param {number} firstIndex - первый идекс массива
 * @param {number} secondIndex - последний индекс массива
 */
function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

/**
 * Функция разделитель
 * @param {array} items - массив для сортировки
 * @param {number} firstIndex - первый идекс массива
 * @param {number} secondIndex - последний индекс массива
 */
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}


/**
 * 
 * @param {array} items - массив для сортировки,
 * @param {number} left - индекс, устанавливающий левый указатель
 * @param {number} right - индекс, устанавливающий правый указатель
 * @returns 
 */
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call
console.log(items);
var result = quickSort(items, 0, items.length - 1);
console.log(result);