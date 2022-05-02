const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) { let canvas = new Array(matrix.length);
  for (let i = 0; i < canvas.length; i++) {
      canvas[i] = new Array(matrix[0].length);
  }

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] == true) {
              canvas[i][j] = 'm';
          } else canvas[i][j] = 0;
      }
  }

  for (let i = 0; i < canvas.length; i++) {
      for (let j = 0; j < canvas[0].length; j++) {
          if (canvas[i][j] == 'm') {
              if (typeof canvas[i - 1] != 'undefined' && typeof canvas[i - 1][j] != 'undefined' && canvas[i - 1][j] != 'm') canvas[i - 1][j]++;
              if (typeof canvas[i + 1] != 'undefined' && typeof canvas[i + 1][j] != 'undefined' && canvas[i + 1][j] != 'm') canvas[i + 1][j]++;
              if (typeof canvas[i] != 'undefined' && typeof canvas[i][j - 1] != 'undefined' && canvas[i][j - 1] != 'm') canvas[i][j - 1]++;
              if (typeof canvas[i] != 'undefined' && typeof canvas[i][j + 1] != 'undefined' && canvas[i][j + 1] != 'm') canvas[i][j + 1]++;
              if (typeof canvas[i + 1] != 'undefined' && typeof canvas[i + 1][j + 1] != 'undefined' && canvas[i + 1][j + 1] != 'm') canvas[i + 1][j + 1]++;
              if (typeof canvas[i - 1] != 'undefined' && typeof canvas[i - 1][j + 1] != 'undefined' && canvas[i - 1][j + 1] != 'm') canvas[i - 1][j + 1]++;
              if (typeof canvas[i + 1] != 'undefined' && typeof canvas[i + 1][j - 1] != 'undefined' && canvas[i + 1][j - 1] != 'm') canvas[i + 1][j - 1]++;
              if (typeof canvas[i - 1] != 'undefined' && typeof canvas[i - 1][j - 1] != 'undefined' && canvas[i - 1][j - 1] != 'm') canvas[i - 1][j - 1]++;
          }
      }
  }
  for (let i = 0; i < canvas.length; i++) {
      for (let j = 0; j < canvas[0].length; j++) {
          if (canvas[i][j] == 'm') canvas[i][j] = 1;
      }
  }
  return canvas;
}
module.exports = {
    minesweeper,
};
