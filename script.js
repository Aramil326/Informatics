const TLine = {
  fx1: '',
  fy1: '',
  fx2: '',
  fy2: '',
  lenght: '',
  input: '',
};

const Line = Object.create(TLine);

Line.lenght = function () {
  return Math.sqrt((this.fx1 - this.fx2) ** 2 + (this.fy1 - this.fy2) ** 2);
};

Line.input = function () {
  this.fx1 = prompt('x1=');
  this.fy1 = prompt('y1=');
  this.fx2 = prompt('x2=');
  this.fy2 = prompt('y2=');
};

Line.input();

alert(`Длина отрезка = ${Line.lenght()}`);
