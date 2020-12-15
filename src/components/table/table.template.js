const CODES = {
  A: 65,
  Z: 90
};

function toCell() {
  return `
   <div class="table-cell" contenteditable></div>
   `;
}

function toColumn(col) {
  return `
   <div class="table-column">${col}</div>
   `;
}

function createRow(index, content) {
  return `
    <div class="table-row">
        <div class="table-row-info">${index ? index : ''}</div>
        <div class="table-row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCounts = 150) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');
  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCounts; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(i + 1, cells));
  }
  return rows.join('');
}