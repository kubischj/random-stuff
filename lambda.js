const zero = f => x => x;
const one = f => x => f(x);
const two = f => x => f(f(x));
const three = f => x => f(f(f(x)));
const four = f => x => f(f(f(f(x))));

const toInt = n => n(i => i+1)(0);

const succ = n => f => x => f(n(f)(x));

const five = succ(four);
const seven = succ(succ(five));

const add = n => m => f => x => m(f)(n(f)(x));

const six = add(three)(three);
const eight = add(five)(three);
const ten = add(eight)(two);

const mul = n => m => f => x => m(n(f))(x);

const pow = n => m => m(n);

const ifthenelse = f => a => b => f(a)(b);
const toBool = f => f(true)(false);
const troo = x => y => x;
const falz = x => y => y;

const not = f => a => b => f(b)(a);

const isZero = n => n(_ => falz)(troo);
const isEven = n => n(not)(troo);
const isOdd = n => n(not)(falz);

const and = a => b => a(b)(a);
const or = a => b => a(a)(b);

const list = f => a => b => f(a)(b);
const left = pair => pair(troo);
const right = pair => pair(falz);
const nil = list(troo)(troo);
const isEmpty = left;
const shift = item => l => list(falz)(list(item)(l));
const head = list => left(right(list));
const tail = list => right(right(list));

console.log("breakpoint");