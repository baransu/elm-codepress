
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

var _elm_lang$lazy$Native_Lazy = function() {

function memoize(thunk)
{
    var value;
    var isForced = false;
    return function(tuple0) {
        if (!isForced) {
            value = thunk(tuple0);
            isForced = true;
        }
        return value;
    };
}

return {
    memoize: memoize
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$lazy$Lazy$force = function (_p0) {
	var _p1 = _p0;
	return _p1._0(
		{ctor: '_Tuple0'});
};
var _elm_lang$lazy$Lazy$Lazy = function (a) {
	return {ctor: 'Lazy', _0: a};
};
var _elm_lang$lazy$Lazy$lazy = function (thunk) {
	return _elm_lang$lazy$Lazy$Lazy(
		_elm_lang$lazy$Native_Lazy.memoize(thunk));
};
var _elm_lang$lazy$Lazy$map = F2(
	function (f, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p2) {
				var _p3 = _p2;
				return f(
					_elm_lang$lazy$Lazy$force(a));
			});
	});
var _elm_lang$lazy$Lazy$map2 = F3(
	function (f, a, b) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p4) {
				var _p5 = _p4;
				return A2(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b));
			});
	});
var _elm_lang$lazy$Lazy$map3 = F4(
	function (f, a, b, c) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p6) {
				var _p7 = _p6;
				return A3(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c));
			});
	});
var _elm_lang$lazy$Lazy$map4 = F5(
	function (f, a, b, c, d) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p8) {
				var _p9 = _p8;
				return A4(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d));
			});
	});
var _elm_lang$lazy$Lazy$map5 = F6(
	function (f, a, b, c, d, e) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p10) {
				var _p11 = _p10;
				return A5(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d),
					_elm_lang$lazy$Lazy$force(e));
			});
	});
var _elm_lang$lazy$Lazy$apply = F2(
	function (f, x) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p12) {
				var _p13 = _p12;
				return A2(
					_elm_lang$lazy$Lazy$force,
					f,
					_elm_lang$lazy$Lazy$force(x));
			});
	});
var _elm_lang$lazy$Lazy$andThen = F2(
	function (callback, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p14) {
				var _p15 = _p14;
				return _elm_lang$lazy$Lazy$force(
					callback(
						_elm_lang$lazy$Lazy$force(a)));
			});
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_community$parser_combinators$Combine$app = function (p) {
	var _p0 = p;
	if (_p0.ctor === 'Parser') {
		return _p0._0;
	} else {
		return _elm_lang$lazy$Lazy$force(_p0._0);
	}
};
var _elm_community$parser_combinators$Combine$InputStream = F3(
	function (a, b, c) {
		return {data: a, input: b, position: c};
	});
var _elm_community$parser_combinators$Combine$initStream = function (s) {
	return A3(_elm_community$parser_combinators$Combine$InputStream, s, s, 0);
};
var _elm_community$parser_combinators$Combine$runParser = F3(
	function (p, st, s) {
		var _p1 = A3(
			_elm_community$parser_combinators$Combine$app,
			p,
			st,
			_elm_community$parser_combinators$Combine$initStream(s));
		if (_p1._2.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		} else {
			return _elm_lang$core$Result$Err(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		}
	});
var _elm_community$parser_combinators$Combine$parse = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine$runParser,
		p,
		{ctor: '_Tuple0'});
};
var _elm_community$parser_combinators$Combine$ParseLocation = F3(
	function (a, b, c) {
		return {source: a, line: b, column: c};
	});
var _elm_community$parser_combinators$Combine$currentLocation = function (stream) {
	var find = F3(
		function (position, currentLine, lines) {
			find:
			while (true) {
				var _p2 = lines;
				if (_p2.ctor === '[]') {
					return A3(_elm_community$parser_combinators$Combine$ParseLocation, '', 1, position);
				} else {
					if (_p2._1.ctor === '[]') {
						return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p2._0, currentLine + 1, position);
					} else {
						var _p3 = _p2._0;
						var length = _elm_lang$core$String$length(_p3);
						if (_elm_lang$core$Native_Utils.cmp(position, length) > -1) {
							var _v3 = (position - length) - 1,
								_v4 = currentLine + 1,
								_v5 = _p2._1;
							position = _v3;
							currentLine = _v4;
							lines = _v5;
							continue find;
						} else {
							if (_elm_lang$core$Native_Utils.eq(currentLine, 0)) {
								return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p3, 1, position);
							} else {
								return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p3, currentLine, position - 1);
							}
						}
					}
				}
			}
		});
	return A3(
		find,
		stream.position,
		0,
		A2(_elm_lang$core$String$split, '\n', stream.data));
};
var _elm_community$parser_combinators$Combine$currentSourceLine = function (_p4) {
	return function (_) {
		return _.source;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p4));
};
var _elm_community$parser_combinators$Combine$currentLine = function (_p5) {
	return function (_) {
		return _.line;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p5));
};
var _elm_community$parser_combinators$Combine$currentColumn = function (_p6) {
	return function (_) {
		return _.column;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p6));
};
var _elm_community$parser_combinators$Combine$RecursiveParser = function (a) {
	return {ctor: 'RecursiveParser', _0: a};
};
var _elm_community$parser_combinators$Combine$lazy = function (t) {
	return _elm_community$parser_combinators$Combine$RecursiveParser(
		_elm_lang$lazy$Lazy$lazy(
			function (_p7) {
				var _p8 = _p7;
				return _elm_community$parser_combinators$Combine$app(
					t(
						{ctor: '_Tuple0'}));
			}));
};
var _elm_community$parser_combinators$Combine$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_community$parser_combinators$Combine$primitive = _elm_community$parser_combinators$Combine$Parser;
var _elm_community$parser_combinators$Combine$bimap = F3(
	function (fok, ferr, p) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p9 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
					if (_p9._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Ok(
								fok(_p9._2._0))
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Err(
								ferr(_p9._2._0))
						};
					}
				}));
	});
var _elm_community$parser_combinators$Combine$map = F2(
	function (f, p) {
		return A3(_elm_community$parser_combinators$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<$>'] = _elm_community$parser_combinators$Combine$map;
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<$'] = function (res) {
	return _elm_community$parser_combinators$Combine$map(
		_elm_lang$core$Basics$always(res));
};
var _elm_community$parser_combinators$Combine$skip = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		p);
};
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['$>'] = _elm_lang$core$Basics$flip(
	F2(
		function (x, y) {
			return A2(_elm_community$parser_combinators$Combine_ops['<$'], x, y);
		}));
var _elm_community$parser_combinators$Combine$mapError = _elm_community$parser_combinators$Combine$bimap(_elm_lang$core$Basics$identity);
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<?>'] = F2(
	function (p, m) {
		return A2(
			_elm_community$parser_combinators$Combine$mapError,
			_elm_lang$core$Basics$always(
				{
					ctor: '::',
					_0: m,
					_1: {ctor: '[]'}
				}),
			p);
	});
var _elm_community$parser_combinators$Combine$withState = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(state),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withLocation = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentLocation(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withLine = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentLine(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withColumn = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentColumn(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$andThen = F2(
	function (f, p) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p10 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
					if (_p10._2.ctor === 'Ok') {
						return A3(
							_elm_community$parser_combinators$Combine$app,
							f(_p10._2._0),
							_p10._0,
							_p10._1);
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p10._0,
							_1: _p10._1,
							_2: _elm_lang$core$Result$Err(_p10._2._0)
						};
					}
				}));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['>>='] = _elm_lang$core$Basics$flip(_elm_community$parser_combinators$Combine$andThen);
var _elm_community$parser_combinators$Combine$andMap = F2(
	function (rp, lp) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['>>='],
			lp,
			A2(_elm_lang$core$Basics$flip, _elm_community$parser_combinators$Combine$map, rp));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<*>'] = _elm_lang$core$Basics$flip(_elm_community$parser_combinators$Combine$andMap);
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<*'] = F2(
	function (lp, rp) {
		return A2(
			_elm_community$parser_combinators$Combine$andMap,
			rp,
			A2(_elm_community$parser_combinators$Combine$map, _elm_lang$core$Basics$always, lp));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['*>'] = F2(
	function (lp, rp) {
		return A2(
			_elm_community$parser_combinators$Combine$andMap,
			rp,
			A2(
				_elm_community$parser_combinators$Combine$map,
				_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
				lp));
	});
var _elm_community$parser_combinators$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(_elm_community$parser_combinators$Combine_ops['*>'], lp, p),
			rp);
	});
var _elm_community$parser_combinators$Combine$sequence = function (parsers) {
	var accumulate = F4(
		function (acc, ps, state, stream) {
			accumulate:
			while (true) {
				var _p11 = ps;
				if (_p11.ctor === '[]') {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$List$reverse(acc))
					};
				} else {
					var _p12 = A3(_elm_community$parser_combinators$Combine$app, _p11._0, state, stream);
					if (_p12._2.ctor === 'Ok') {
						var _v11 = {ctor: '::', _0: _p12._2._0, _1: acc},
							_v12 = _p11._1,
							_v13 = _p12._0,
							_v14 = _p12._1;
						acc = _v11;
						ps = _v12;
						state = _v13;
						stream = _v14;
						continue accumulate;
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p12._0,
							_1: _p12._1,
							_2: _elm_lang$core$Result$Err(_p12._2._0)
						};
					}
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A4(
					accumulate,
					{ctor: '[]'},
					parsers,
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$fail = function (m) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Err(
						{
							ctor: '::',
							_0: m,
							_1: {ctor: '[]'}
						})
				};
			}));
};
var _elm_community$parser_combinators$Combine$emptyErr = _elm_community$parser_combinators$Combine$Parser(
	F2(
		function (state, stream) {
			return {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{ctor: '[]'})
			};
		}));
var _elm_community$parser_combinators$Combine$succeed = function (res) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$putState = function (state) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (_p13, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					_elm_community$parser_combinators$Combine$succeed(
						{ctor: '_Tuple0'}),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$modifyState = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					_elm_community$parser_combinators$Combine$succeed(
						{ctor: '_Tuple0'}),
					f(state),
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$count = F2(
	function (n, p) {
		var accumulate = F2(
			function (x, acc) {
				return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _elm_community$parser_combinators$Combine$succeed(
					_elm_lang$core$List$reverse(acc)) : A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (res) {
						return A2(
							accumulate,
							x - 1,
							{ctor: '::', _0: res, _1: acc});
					},
					p);
			});
		return A2(
			accumulate,
			n,
			{ctor: '[]'});
	});
var _elm_community$parser_combinators$Combine$string = function (s) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				if (A2(_elm_lang$core$String$startsWith, s, stream.input)) {
					var len = _elm_lang$core$String$length(s);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(s)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected ',
									_elm_lang$core$Basics$toString(s)),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$parens = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('('),
	_elm_community$parser_combinators$Combine$string(')'));
var _elm_community$parser_combinators$Combine$braces = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('{'),
	_elm_community$parser_combinators$Combine$string('}'));
var _elm_community$parser_combinators$Combine$brackets = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('['),
	_elm_community$parser_combinators$Combine$string(']'));
var _elm_community$parser_combinators$Combine$regex = function (pat) {
	var pattern = A2(_elm_lang$core$String$startsWith, '^', pat) ? pat : A2(_elm_lang$core$Basics_ops['++'], '^', pat);
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p14 = A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(pattern),
					stream.input);
				if ((_p14.ctor === '::') && (_p14._1.ctor === '[]')) {
					var _p15 = _p14._0;
					var len = _elm_lang$core$String$length(_p15.match);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(_p15.match)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected input matching Regexp /',
									A2(_elm_lang$core$Basics_ops['++'], pattern, '/')),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$whitespace = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine$regex('[ \t\r\n]*'),
	'whitespace');
var _elm_community$parser_combinators$Combine$whitespace1 = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine$regex('[ \t\r\n]+'),
	'whitespace');
var _elm_community$parser_combinators$Combine$while = function (pred) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p16 = _elm_lang$core$String$uncons(stream.input);
				if (_p16.ctor === 'Just') {
					var _p17 = _p16._0._0;
					if (pred(_p17)) {
						var pos = stream.position + 1;
						var c = A2(_elm_lang$core$String$cons, _p17, '');
						var _v17 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
							_v18 = state,
							_v19 = _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p16._0._1, position: pos});
						acc = _v17;
						state = _v18;
						stream = _v19;
						continue accumulate;
					} else {
						return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
					}
				} else {
					return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p18 = A3(accumulate, '', state, stream);
				var rstate = _p18._0;
				var rstream = _p18._1;
				var res = _p18._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$end = _elm_community$parser_combinators$Combine$Parser(
	F2(
		function (state, stream) {
			return _elm_lang$core$Native_Utils.eq(stream.input, '') ? {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Ok(
					{ctor: '_Tuple0'})
			} : {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{
						ctor: '::',
						_0: 'expected end of input',
						_1: {ctor: '[]'}
					})
			};
		}));
var _elm_community$parser_combinators$Combine$lookAhead = function (p) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p19 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p19.ctor === '_Tuple3') && (_p19._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p19._0,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_p19._2._0)
					};
				} else {
					return _p19;
				}
			}));
};
var _elm_community$parser_combinators$Combine$or = F2(
	function (lp, rp) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p20 = A3(_elm_community$parser_combinators$Combine$app, lp, state, stream);
					if (_p20._2.ctor === 'Ok') {
						return _p20;
					} else {
						var _p21 = A3(_elm_community$parser_combinators$Combine$app, rp, state, stream);
						if (_p21._2.ctor === 'Ok') {
							return _p21;
						} else {
							return {
								ctor: '_Tuple3',
								_0: state,
								_1: stream,
								_2: _elm_lang$core$Result$Err(
									A2(_elm_lang$core$Basics_ops['++'], _p20._2._0, _p21._2._0))
							};
						}
					}
				}));
	});
var _elm_community$parser_combinators$Combine$choice = function (xs) {
	return A3(_elm_lang$core$List$foldr, _elm_community$parser_combinators$Combine$or, _elm_community$parser_combinators$Combine$emptyErr, xs);
};
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<|>'] = _elm_community$parser_combinators$Combine$or;
var _elm_community$parser_combinators$Combine$optional = F2(
	function (res, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			p,
			_elm_community$parser_combinators$Combine$succeed(res));
	});
var _elm_community$parser_combinators$Combine$chainl = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<|>'],
				A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (f) {
						return A2(
							_elm_community$parser_combinators$Combine$andThen,
							function (y) {
								return accumulate(
									A2(f, x, y));
							},
							p);
					},
					op),
				_elm_community$parser_combinators$Combine$succeed(x));
		};
		return A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p);
	});
var _elm_community$parser_combinators$Combine$chainr = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<|>'],
				A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (f) {
						return A2(
							_elm_community$parser_combinators$Combine$andThen,
							function (y) {
								return _elm_community$parser_combinators$Combine$succeed(
									A2(f, x, y));
							},
							A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p));
					},
					op),
				_elm_community$parser_combinators$Combine$succeed(x));
		};
		return A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p);
	});
var _elm_community$parser_combinators$Combine$maybe = function (p) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p22 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p22.ctor === '_Tuple3') && (_p22._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p22._0,
						_1: _p22._1,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$Maybe$Just(_p22._2._0))
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing)
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$many = function (p) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p23 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p23.ctor === '_Tuple3') && (_p23._2.ctor === 'Ok')) {
					var _p25 = _p23._1;
					var _p24 = _p23._0;
					if (_elm_lang$core$Native_Utils.eq(stream, _p25)) {
						return {
							ctor: '_Tuple3',
							_0: _p24,
							_1: _p25,
							_2: _elm_lang$core$List$reverse(acc)
						};
					} else {
						var _v25 = {ctor: '::', _0: _p23._2._0, _1: acc},
							_v26 = _p24,
							_v27 = _p25;
						acc = _v25;
						state = _v26;
						stream = _v27;
						continue accumulate;
					}
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$List$reverse(acc)
					};
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p26 = A3(
					accumulate,
					{ctor: '[]'},
					state,
					stream);
				var rstate = _p26._0;
				var rstream = _p26._1;
				var res = _p26._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$many1 = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			p),
		_elm_community$parser_combinators$Combine$many(p));
};
var _elm_community$parser_combinators$Combine$skipMany1 = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_elm_community$parser_combinators$Combine$many1(
			_elm_community$parser_combinators$Combine$skip(p)));
};
var _elm_community$parser_combinators$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				p),
			_elm_community$parser_combinators$Combine$many(
				A2(_elm_community$parser_combinators$Combine_ops['*>'], sep, p)));
	});
var _elm_community$parser_combinators$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			A2(_elm_community$parser_combinators$Combine$sepBy1, sep, p),
			_elm_community$parser_combinators$Combine$succeed(
				{ctor: '[]'}));
	});
var _elm_community$parser_combinators$Combine$sepEndBy1 = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(_elm_community$parser_combinators$Combine$sepBy1, sep, p),
			_elm_community$parser_combinators$Combine$maybe(sep));
	});
var _elm_community$parser_combinators$Combine$sepEndBy = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			A2(_elm_community$parser_combinators$Combine$sepEndBy1, sep, p),
			_elm_community$parser_combinators$Combine$succeed(
				{ctor: '[]'}));
	});
var _elm_community$parser_combinators$Combine$skipMany = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_elm_community$parser_combinators$Combine$many(
			_elm_community$parser_combinators$Combine$skip(p)));
};
var _elm_community$parser_combinators$Combine$manyTill = F2(
	function (p, end) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _p27 = A3(_elm_community$parser_combinators$Combine$app, end, state, stream);
					if (_p27._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p27._0,
							_1: _p27._1,
							_2: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc))
						};
					} else {
						var _p28 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
						if ((_p28.ctor === '_Tuple3') && (_p28._2.ctor === 'Ok')) {
							var _v30 = {ctor: '::', _0: _p28._2._0, _1: acc},
								_v31 = _p28._0,
								_v32 = _p28._1;
							acc = _v30;
							state = _v31;
							stream = _v32;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p27._0,
								_1: _p27._1,
								_2: _elm_lang$core$Result$Err(_p27._2._0)
							};
						}
					}
				}
			});
		return _elm_community$parser_combinators$Combine$Parser(
			accumulate(
				{ctor: '[]'}));
	});

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_community$parser_combinators$Combine_Char$crlf = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	_elm_lang$core$Native_Utils.chr('\n'),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine$regex('\r\n'),
		'expected crlf'));
var _elm_community$parser_combinators$Combine_Char$satisfy = function (pred) {
	return _elm_community$parser_combinators$Combine$primitive(
		F2(
			function (state, stream) {
				var message = 'could not satisfy predicate';
				var _p0 = _elm_lang$core$String$uncons(stream.input);
				if (_p0.ctor === 'Just') {
					var _p1 = _p0._0._0;
					return pred(_p1) ? {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p0._0._1, position: stream.position + 1}),
						_2: _elm_lang$core$Result$Ok(_p1)
					} : {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine_Char$char = function (c) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(c)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected ',
			_elm_lang$core$Basics$toString(c)));
};
var _elm_community$parser_combinators$Combine_Char$anyChar = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		_elm_lang$core$Basics$always(true)),
	'expected any character');
var _elm_community$parser_combinators$Combine_Char$oneOf = function (cs) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected one of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _elm_community$parser_combinators$Combine_Char$noneOf = function (cs) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			function (_p2) {
				return !A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2);
			}),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected none of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _elm_community$parser_combinators$Combine_Char$space = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr(' '))),
	'expected space');
var _elm_community$parser_combinators$Combine_Char$tab = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\t'))),
	'expected tab');
var _elm_community$parser_combinators$Combine_Char$newline = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\n'))),
	'expected newline');
var _elm_community$parser_combinators$Combine_Char$eol = A2(_elm_community$parser_combinators$Combine_ops['<|>'], _elm_community$parser_combinators$Combine_Char$newline, _elm_community$parser_combinators$Combine_Char$crlf);
var _elm_community$parser_combinators$Combine_Char$lower = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
	'expected a lowercase character');
var _elm_community$parser_combinators$Combine_Char$upper = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
	'expected an uppercase character');
var _elm_community$parser_combinators$Combine_Char$digit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
	'expected a digit');
var _elm_community$parser_combinators$Combine_Char$octDigit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
	'expected an octal digit');
var _elm_community$parser_combinators$Combine_Char$hexDigit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
	'expected a hexadecimal digit');

var _Bogdanp$elm_ast$Ast_Helpers$emptyTuple = _elm_community$parser_combinators$Combine$string('()');
var _Bogdanp$elm_ast$Ast_Helpers$name = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(_elm_community$parser_combinators$Combine_ops['<$>'], _elm_lang$core$String$cons, p),
		_elm_community$parser_combinators$Combine$regex('[a-zA-Z0-9-_]*'));
};
var _Bogdanp$elm_ast$Ast_Helpers$upName = _Bogdanp$elm_ast$Ast_Helpers$name(_elm_community$parser_combinators$Combine_Char$upper);
var _Bogdanp$elm_ast$Ast_Helpers$spaces_ = _elm_community$parser_combinators$Combine$regex('[ \\t]+');
var _Bogdanp$elm_ast$Ast_Helpers$initialSymbol = function (k) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		_elm_community$parser_combinators$Combine$string(k),
		_Bogdanp$elm_ast$Ast_Helpers$spaces_);
};
var _Bogdanp$elm_ast$Ast_Helpers$spaces = _elm_community$parser_combinators$Combine$regex('[ \\t]*');
var _Bogdanp$elm_ast$Ast_Helpers$between_ = function (p) {
	return A2(_elm_community$parser_combinators$Combine$between, p, p);
};
var _Bogdanp$elm_ast$Ast_Helpers$symbol_ = function (k) {
	return A2(
		_Bogdanp$elm_ast$Ast_Helpers$between_,
		_elm_community$parser_combinators$Combine$whitespace,
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			_elm_community$parser_combinators$Combine$string(k),
			_elm_community$parser_combinators$Combine$regex('( |\\n)+')));
};
var _Bogdanp$elm_ast$Ast_Helpers$symbol = function (k) {
	return A2(
		_Bogdanp$elm_ast$Ast_Helpers$between_,
		_elm_community$parser_combinators$Combine$whitespace,
		_elm_community$parser_combinators$Combine$string(k));
};
var _Bogdanp$elm_ast$Ast_Helpers$commaSeparated = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine$sepBy1,
		_elm_community$parser_combinators$Combine$string(','),
		A2(_Bogdanp$elm_ast$Ast_Helpers$between_, _elm_community$parser_combinators$Combine$whitespace, p));
};
var _Bogdanp$elm_ast$Ast_Helpers$commaSeparated_ = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine$sepBy,
		_elm_community$parser_combinators$Combine$string(','),
		A2(_Bogdanp$elm_ast$Ast_Helpers$between_, _elm_community$parser_combinators$Combine$whitespace, p));
};
var _Bogdanp$elm_ast$Ast_Helpers$moduleName = A2(
	_Bogdanp$elm_ast$Ast_Helpers$between_,
	_Bogdanp$elm_ast$Ast_Helpers$spaces,
	A2(
		_elm_community$parser_combinators$Combine$sepBy1,
		_elm_community$parser_combinators$Combine$string('.'),
		_Bogdanp$elm_ast$Ast_Helpers$upName));
var _Bogdanp$elm_ast$Ast_Helpers$reservedOperators = {
	ctor: '::',
	_0: '=',
	_1: {
		ctor: '::',
		_0: '.',
		_1: {
			ctor: '::',
			_0: '..',
			_1: {
				ctor: '::',
				_0: '->',
				_1: {
					ctor: '::',
					_0: '--',
					_1: {
						ctor: '::',
						_0: '|',
						_1: {
							ctor: '::',
							_0: ':',
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	}
};
var _Bogdanp$elm_ast$Ast_Helpers$operator = A2(
	_elm_community$parser_combinators$Combine$andThen,
	function (n) {
		return A2(_elm_lang$core$List$member, n, _Bogdanp$elm_ast$Ast_Helpers$reservedOperators) ? _elm_community$parser_combinators$Combine$fail(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'operator \'',
				A2(_elm_lang$core$Basics_ops['++'], n, '\' is reserved'))) : _elm_community$parser_combinators$Combine$succeed(n);
	},
	_elm_community$parser_combinators$Combine$regex('[+\\-\\/*=.$<>:&|^?%#@~!]+|s\b'));
var _Bogdanp$elm_ast$Ast_Helpers$reserved = {
	ctor: '::',
	_0: 'module',
	_1: {
		ctor: '::',
		_0: 'where',
		_1: {
			ctor: '::',
			_0: 'import',
			_1: {
				ctor: '::',
				_0: 'as',
				_1: {
					ctor: '::',
					_0: 'exposing',
					_1: {
						ctor: '::',
						_0: 'type',
						_1: {
							ctor: '::',
							_0: 'alias',
							_1: {
								ctor: '::',
								_0: 'port',
								_1: {
									ctor: '::',
									_0: 'if',
									_1: {
										ctor: '::',
										_0: 'then',
										_1: {
											ctor: '::',
											_0: 'else',
											_1: {
												ctor: '::',
												_0: 'let',
												_1: {
													ctor: '::',
													_0: 'in',
													_1: {
														ctor: '::',
														_0: 'case',
														_1: {
															ctor: '::',
															_0: 'of',
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _Bogdanp$elm_ast$Ast_Helpers$loName = function () {
	var loName_ = A2(
		_elm_community$parser_combinators$Combine$andThen,
		function (n) {
			return A2(_elm_lang$core$List$member, n, _Bogdanp$elm_ast$Ast_Helpers$reserved) ? _elm_community$parser_combinators$Combine$fail(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'name \'',
					A2(_elm_lang$core$Basics_ops['++'], n, '\' is reserved'))) : _elm_community$parser_combinators$Combine$succeed(n);
		},
		_Bogdanp$elm_ast$Ast_Helpers$name(_elm_community$parser_combinators$Combine_Char$lower));
	return A2(
		_elm_community$parser_combinators$Combine_ops['<|>'],
		_elm_community$parser_combinators$Combine$string('_'),
		loName_);
}();
var _Bogdanp$elm_ast$Ast_Helpers$functionName = _Bogdanp$elm_ast$Ast_Helpers$loName;

var _Bogdanp$elm_ast$Ast_BinOp$R = {ctor: 'R'};
var _Bogdanp$elm_ast$Ast_BinOp$L = {ctor: 'L'};
var _Bogdanp$elm_ast$Ast_BinOp$operators = A3(
	_elm_lang$core$Dict$insert,
	'=',
	{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$R, _1: 0},
	A3(
		_elm_lang$core$Dict$insert,
		'|>',
		{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$R, _1: 1},
		A3(
			_elm_lang$core$Dict$insert,
			'<|',
			{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$R, _1: 1},
			A3(
				_elm_lang$core$Dict$insert,
				'>>',
				{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 9},
				A3(
					_elm_lang$core$Dict$insert,
					'<<',
					{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 9},
					A3(
						_elm_lang$core$Dict$insert,
						'^',
						{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 8},
						A3(
							_elm_lang$core$Dict$insert,
							'rem',
							{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7},
							A3(
								_elm_lang$core$Dict$insert,
								'//',
								{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7},
								A3(
									_elm_lang$core$Dict$insert,
									'%',
									{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7},
									A3(
										_elm_lang$core$Dict$insert,
										'/',
										{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7},
										A3(
											_elm_lang$core$Dict$insert,
											'*',
											{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7},
											A3(
												_elm_lang$core$Dict$insert,
												'-',
												{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 6},
												A3(
													_elm_lang$core$Dict$insert,
													'+',
													{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 6},
													A3(
														_elm_lang$core$Dict$insert,
														'::',
														{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$R, _1: 5},
														A3(
															_elm_lang$core$Dict$insert,
															'++',
															{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$R, _1: 5},
															A3(
																_elm_lang$core$Dict$insert,
																'<=',
																{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4},
																A3(
																	_elm_lang$core$Dict$insert,
																	'>=',
																	{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4},
																	A3(
																		_elm_lang$core$Dict$insert,
																		'>',
																		{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4},
																		A3(
																			_elm_lang$core$Dict$insert,
																			'<',
																			{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4},
																			A3(
																				_elm_lang$core$Dict$insert,
																				'/=',
																				{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4},
																				A3(
																					_elm_lang$core$Dict$insert,
																					'==',
																					{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4},
																					A3(
																						_elm_lang$core$Dict$insert,
																						'&&',
																						{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 3},
																						A3(
																							_elm_lang$core$Dict$insert,
																							'||',
																							{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 2},
																							_elm_lang$core$Dict$empty)))))))))))))))))))))));
var _Bogdanp$elm_ast$Ast_BinOp$N = {ctor: 'N'};

var _elm_community$parser_combinators$Combine_Num$digit = function () {
	var toDigit = function (c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'));
	};
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		toDigit,
		A2(_elm_community$parser_combinators$Combine_ops['<?>'], _elm_community$parser_combinators$Combine_Char$digit, 'expected a digit'));
}();
var _elm_community$parser_combinators$Combine_Num$sign = A2(
	_elm_community$parser_combinators$Combine$optional,
	1,
	_elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: A2(
				_elm_community$parser_combinators$Combine_ops['<$'],
				1,
				_elm_community$parser_combinators$Combine$string('+')),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_community$parser_combinators$Combine_ops['<$'],
					-1,
					_elm_community$parser_combinators$Combine$string('-')),
				_1: {ctor: '[]'}
			}
		}));
var _elm_community$parser_combinators$Combine_Num$unwrap = F2(
	function (f, s) {
		var _p0 = f(s);
		if (_p0.ctor === 'Ok') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'Combine.Num',
				{
					start: {line: 23, column: 5},
					end: {line: 28, column: 83}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'impossible state in Combine.Num.unwrap: ',
					_elm_lang$core$Basics$toString(_p0._0)));
		}
	});
var _elm_community$parser_combinators$Combine_Num$toInt = _elm_community$parser_combinators$Combine_Num$unwrap(_elm_lang$core$String$toInt);
var _elm_community$parser_combinators$Combine_Num$int = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		F2(
			function (x, y) {
				return x * y;
			}),
		_elm_community$parser_combinators$Combine_Num$sign),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_community$parser_combinators$Combine_Num$toInt,
			_elm_community$parser_combinators$Combine$regex('(0|[1-9][0-9]*)')),
		'expected an integer'));
var _elm_community$parser_combinators$Combine_Num$toFloat = _elm_community$parser_combinators$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
var _elm_community$parser_combinators$Combine_Num$float = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		function (_p2) {
			return F2(
				function (x, y) {
					return x * y;
				})(
				_elm_lang$core$Basics$toFloat(_p2));
		},
		_elm_community$parser_combinators$Combine_Num$sign),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_community$parser_combinators$Combine_Num$toFloat,
			_elm_community$parser_combinators$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)')),
		'expected a float'));

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$singleton = function (x) {
	return {
		ctor: '::',
		_0: x,
		_1: {ctor: '[]'}
	};
};
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _rtfeldman$hex$Hex$toString = function (num) {
	return _elm_lang$core$String$fromList(
		(_elm_lang$core$Native_Utils.cmp(num, 0) < 0) ? {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: A2(
				_rtfeldman$hex$Hex$unsafePositiveToDigits,
				{ctor: '[]'},
				_elm_lang$core$Basics$negate(num))
		} : A2(
			_rtfeldman$hex$Hex$unsafePositiveToDigits,
			{ctor: '[]'},
			num));
};
var _rtfeldman$hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(num, 16) < 0) {
				return {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(num),
					_1: digits
				};
			} else {
				var _v0 = {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(
						A2(_elm_lang$core$Basics_ops['%'], num, 16)),
					_1: digits
				},
					_v1 = (num / 16) | 0;
				digits = _v0;
				num = _v1;
				continue unsafePositiveToDigits;
			}
		}
	});
var _rtfeldman$hex$Hex$unsafeToDigit = function (num) {
	var _p0 = num;
	switch (_p0) {
		case 0:
			return _elm_lang$core$Native_Utils.chr('0');
		case 1:
			return _elm_lang$core$Native_Utils.chr('1');
		case 2:
			return _elm_lang$core$Native_Utils.chr('2');
		case 3:
			return _elm_lang$core$Native_Utils.chr('3');
		case 4:
			return _elm_lang$core$Native_Utils.chr('4');
		case 5:
			return _elm_lang$core$Native_Utils.chr('5');
		case 6:
			return _elm_lang$core$Native_Utils.chr('6');
		case 7:
			return _elm_lang$core$Native_Utils.chr('7');
		case 8:
			return _elm_lang$core$Native_Utils.chr('8');
		case 9:
			return _elm_lang$core$Native_Utils.chr('9');
		case 10:
			return _elm_lang$core$Native_Utils.chr('a');
		case 11:
			return _elm_lang$core$Native_Utils.chr('b');
		case 12:
			return _elm_lang$core$Native_Utils.chr('c');
		case 13:
			return _elm_lang$core$Native_Utils.chr('d');
		case 14:
			return _elm_lang$core$Native_Utils.chr('e');
		case 15:
			return _elm_lang$core$Native_Utils.chr('f');
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Hex',
				{
					start: {line: 138, column: 5},
					end: {line: 188, column: 84}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Tried to convert ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$hex$Hex$toString(num),
						' to hexadecimal.')));
	}
};
var _rtfeldman$hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		var _p2 = chars;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Result$Ok(accumulated);
		} else {
			var recurse = function (additional) {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					position - 1,
					_p2._1,
					accumulated + (additional * Math.pow(16, position)));
			};
			var _p3 = _p2._0;
			switch (_p3.valueOf()) {
				case '0':
					return recurse(0);
				case '1':
					return recurse(1);
				case '2':
					return recurse(2);
				case '3':
					return recurse(3);
				case '4':
					return recurse(4);
				case '5':
					return recurse(5);
				case '6':
					return recurse(6);
				case '7':
					return recurse(7);
				case '8':
					return recurse(8);
				case '9':
					return recurse(9);
				case 'a':
					return recurse(10);
				case 'b':
					return recurse(11);
				case 'c':
					return recurse(12);
				case 'd':
					return recurse(13);
				case 'e':
					return recurse(14);
				case 'f':
					return recurse(15);
				default:
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p3),
							' is not a valid hexadecimal character.'));
			}
		}
	});
var _rtfeldman$hex$Hex$fromString = function (str) {
	if (_elm_lang$core$String$isEmpty(str)) {
		return _elm_lang$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var formatError = function (err) {
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(str),
					_1: {
						ctor: '::',
						_0: 'is not a valid hexadecimal string because',
						_1: {
							ctor: '::',
							_0: err,
							_1: {ctor: '[]'}
						}
					}
				});
		};
		var result = function () {
			if (A2(_elm_lang$core$String$startsWith, '-', str)) {
				var list = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					_elm_lang$core$List$tail(
						_elm_lang$core$String$toList(str)));
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Basics$negate,
					A3(
						_rtfeldman$hex$Hex$fromStringHelp,
						_elm_lang$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					_elm_lang$core$String$length(str) - 1,
					_elm_lang$core$String$toList(str),
					0);
			}
		}();
		return A2(_elm_lang$core$Result$mapError, formatError, result);
	}
};

var _Bogdanp$elm_ast$Ast_Expression$op = F2(
	function (ops, n) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 9},
			A2(_elm_lang$core$Dict$get, n, ops));
	});
var _Bogdanp$elm_ast$Ast_Expression$assoc = F2(
	function (ops, n) {
		return _elm_lang$core$Tuple$first(
			A2(_Bogdanp$elm_ast$Ast_Expression$op, ops, n));
	});
var _Bogdanp$elm_ast$Ast_Expression$level = F2(
	function (ops, n) {
		return _elm_lang$core$Tuple$second(
			A2(_Bogdanp$elm_ast$Ast_Expression$op, ops, n));
	});
var _Bogdanp$elm_ast$Ast_Expression$hasLevel = F3(
	function (ops, l, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Utils.eq(
			A2(_Bogdanp$elm_ast$Ast_Expression$level, ops, _p1._0),
			l);
	});
var _Bogdanp$elm_ast$Ast_Expression$findAssoc = F3(
	function (ops, l, eops) {
		var lops = A2(
			_elm_lang$core$List$filter,
			A2(_Bogdanp$elm_ast$Ast_Expression$hasLevel, ops, l),
			eops);
		var assocs = A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return A2(
					_Bogdanp$elm_ast$Ast_Expression$assoc,
					ops,
					_elm_lang$core$Tuple$first(_p2));
			},
			lops);
		var error = function (issue) {
			var operators = A2(
				_elm_lang$core$String$join,
				' and ',
				A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, lops));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'conflicting ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					issue,
					A2(_elm_lang$core$Basics_ops['++'], ' for operators ', operators)));
		};
		if (A2(
			_elm_lang$core$List$all,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_Bogdanp$elm_ast$Ast_BinOp$L),
			assocs)) {
			return _elm_community$parser_combinators$Combine$succeed(_Bogdanp$elm_ast$Ast_BinOp$L);
		} else {
			if (A2(
				_elm_lang$core$List$all,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(_Bogdanp$elm_ast$Ast_BinOp$R),
				assocs)) {
				return _elm_community$parser_combinators$Combine$succeed(_Bogdanp$elm_ast$Ast_BinOp$R);
			} else {
				if (A2(
					_elm_lang$core$List$all,
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						})(_Bogdanp$elm_ast$Ast_BinOp$N),
					assocs)) {
					var _p3 = assocs;
					if ((_p3.ctor === '::') && (_p3._1.ctor === '[]')) {
						return _elm_community$parser_combinators$Combine$succeed(_Bogdanp$elm_ast$Ast_BinOp$N);
					} else {
						return _elm_community$parser_combinators$Combine$fail(
							error('precedence'));
					}
				} else {
					return _elm_community$parser_combinators$Combine$fail(
						error('associativity'));
				}
			}
		}
	});
var _Bogdanp$elm_ast$Ast_Expression$Stop = function (a) {
	return {ctor: 'Stop', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$Cont = function (a) {
	return {ctor: 'Cont', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$BinOp = F3(
	function (a, b, c) {
		return {ctor: 'BinOp', _0: a, _1: b, _2: c};
	});
var _Bogdanp$elm_ast$Ast_Expression$Application = F2(
	function (a, b) {
		return {ctor: 'Application', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Expression$Lambda = F2(
	function (a, b) {
		return {ctor: 'Lambda', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Expression$Case = F2(
	function (a, b) {
		return {ctor: 'Case', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Expression$Let = F2(
	function (a, b) {
		return {ctor: 'Let', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Expression$If = F3(
	function (a, b, c) {
		return {ctor: 'If', _0: a, _1: b, _2: c};
	});
var _Bogdanp$elm_ast$Ast_Expression$RecordUpdate = F2(
	function (a, b) {
		return {ctor: 'RecordUpdate', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Expression$Record = function (a) {
	return {ctor: 'Record', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$AccessFunction = function (a) {
	return {ctor: 'AccessFunction', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$accessFunction = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Expression$AccessFunction,
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_elm_community$parser_combinators$Combine$string('.'),
		_Bogdanp$elm_ast$Ast_Helpers$loName));
var _Bogdanp$elm_ast$Ast_Expression$Access = F2(
	function (a, b) {
		return {ctor: 'Access', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Expression$Tuple = function (a) {
	return {ctor: 'Tuple', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$List = function (a) {
	return {ctor: 'List', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$Variable = function (a) {
	return {ctor: 'Variable', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$variable = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Expression$Variable,
	_elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _elm_community$list_extra$List_Extra$singleton, _Bogdanp$elm_ast$Ast_Helpers$emptyTuple),
			_1: {
				ctor: '::',
				_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _elm_community$list_extra$List_Extra$singleton, _Bogdanp$elm_ast$Ast_Helpers$loName),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_community$parser_combinators$Combine$sepBy1,
						_elm_community$parser_combinators$Combine$string('.'),
						_Bogdanp$elm_ast$Ast_Helpers$upName),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_community$parser_combinators$Combine_ops['<$>'],
							_elm_community$list_extra$List_Extra$singleton,
							_elm_community$parser_combinators$Combine$parens(_Bogdanp$elm_ast$Ast_Helpers$operator)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_community$parser_combinators$Combine_ops['<$>'],
								_elm_community$list_extra$List_Extra$singleton,
								_elm_community$parser_combinators$Combine$parens(
									_elm_community$parser_combinators$Combine$regex(',+'))),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}));
var _Bogdanp$elm_ast$Ast_Expression$access = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(_elm_community$parser_combinators$Combine_ops['<$>'], _Bogdanp$elm_ast$Ast_Expression$Access, _Bogdanp$elm_ast$Ast_Expression$variable),
	_elm_community$parser_combinators$Combine$many1(
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$string('.'),
			_Bogdanp$elm_ast$Ast_Helpers$loName)));
var _Bogdanp$elm_ast$Ast_Expression$simplifiedRecord = _elm_community$parser_combinators$Combine$lazy(
	function (_p4) {
		var _p5 = _p4;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_Bogdanp$elm_ast$Ast_Expression$Record,
			_elm_community$parser_combinators$Combine$braces(
				_Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
					A2(
						_elm_community$parser_combinators$Combine_ops['<$>'],
						function (a) {
							return {
								ctor: '_Tuple2',
								_0: a,
								_1: _Bogdanp$elm_ast$Ast_Expression$Variable(
									{
										ctor: '::',
										_0: a,
										_1: {ctor: '[]'}
									})
							};
						},
						_Bogdanp$elm_ast$Ast_Helpers$loName))));
	});
var _Bogdanp$elm_ast$Ast_Expression$joinL = F2(
	function (es, ops) {
		joinL:
		while (true) {
			var _p6 = {ctor: '_Tuple2', _0: es, _1: ops};
			_v3_2:
			do {
				if ((_p6.ctor === '_Tuple2') && (_p6._0.ctor === '::')) {
					if (_p6._0._1.ctor === '[]') {
						if (_p6._1.ctor === '[]') {
							return _elm_community$parser_combinators$Combine$succeed(_p6._0._0);
						} else {
							break _v3_2;
						}
					} else {
						if (_p6._1.ctor === '::') {
							var _v4 = {
								ctor: '::',
								_0: A3(
									_Bogdanp$elm_ast$Ast_Expression$BinOp,
									_Bogdanp$elm_ast$Ast_Expression$Variable(
										{
											ctor: '::',
											_0: _p6._1._0,
											_1: {ctor: '[]'}
										}),
									_p6._0._0,
									_p6._0._1._0),
								_1: _p6._0._1._1
							},
								_v5 = _p6._1._1;
							es = _v4;
							ops = _v5;
							continue joinL;
						} else {
							break _v3_2;
						}
					}
				} else {
					break _v3_2;
				}
			} while(false);
			return _elm_community$parser_combinators$Combine$fail('');
		}
	});
var _Bogdanp$elm_ast$Ast_Expression$joinR = F2(
	function (es, ops) {
		var _p7 = {ctor: '_Tuple2', _0: es, _1: ops};
		_v6_2:
		do {
			if ((_p7.ctor === '_Tuple2') && (_p7._0.ctor === '::')) {
				if (_p7._0._1.ctor === '[]') {
					if (_p7._1.ctor === '[]') {
						return _elm_community$parser_combinators$Combine$succeed(_p7._0._0);
					} else {
						break _v6_2;
					}
				} else {
					if (_p7._1.ctor === '::') {
						return A2(
							_elm_community$parser_combinators$Combine$andThen,
							function (e) {
								return _elm_community$parser_combinators$Combine$succeed(
									A3(
										_Bogdanp$elm_ast$Ast_Expression$BinOp,
										_Bogdanp$elm_ast$Ast_Expression$Variable(
											{
												ctor: '::',
												_0: _p7._1._0,
												_1: {ctor: '[]'}
											}),
										_p7._0._0,
										e));
							},
							A2(
								_Bogdanp$elm_ast$Ast_Expression$joinR,
								{ctor: '::', _0: _p7._0._1._0, _1: _p7._0._1._1},
								_p7._1._1));
					} else {
						break _v6_2;
					}
				}
			} else {
				break _v6_2;
			}
		} while(false);
		return _elm_community$parser_combinators$Combine$fail('');
	});
var _Bogdanp$elm_ast$Ast_Expression$split = F4(
	function (ops, l, e, eops) {
		var _p8 = eops;
		if (_p8.ctor === '[]') {
			return _elm_community$parser_combinators$Combine$succeed(e);
		} else {
			return A2(
				_elm_community$parser_combinators$Combine$andThen,
				function (assoc) {
					return A2(
						_elm_community$parser_combinators$Combine$andThen,
						function (es) {
							var ops_ = A2(
								_elm_lang$core$List$filterMap,
								function (x) {
									return A3(_Bogdanp$elm_ast$Ast_Expression$hasLevel, ops, l, x) ? _elm_lang$core$Maybe$Just(
										_elm_lang$core$Tuple$first(x)) : _elm_lang$core$Maybe$Nothing;
								},
								eops);
							var _p9 = assoc;
							if (_p9.ctor === 'R') {
								return A2(_Bogdanp$elm_ast$Ast_Expression$joinR, es, ops_);
							} else {
								return A2(_Bogdanp$elm_ast$Ast_Expression$joinL, es, ops_);
							}
						},
						_elm_community$parser_combinators$Combine$sequence(
							A4(_Bogdanp$elm_ast$Ast_Expression$splitLevel, ops, l, e, eops)));
				},
				A3(_Bogdanp$elm_ast$Ast_Expression$findAssoc, ops, l, eops));
		}
	});
var _Bogdanp$elm_ast$Ast_Expression$splitLevel = F4(
	function (ops, l, e, eops) {
		var _p10 = A2(
			_elm_community$list_extra$List_Extra$break,
			A2(_Bogdanp$elm_ast$Ast_Expression$hasLevel, ops, l),
			eops);
		if (_p10._1.ctor === '::') {
			return {
				ctor: '::',
				_0: A4(_Bogdanp$elm_ast$Ast_Expression$split, ops, l + 1, e, _p10._0),
				_1: A4(_Bogdanp$elm_ast$Ast_Expression$splitLevel, ops, l, _p10._1._0._1, _p10._1._1)
			};
		} else {
			return {
				ctor: '::',
				_0: A4(_Bogdanp$elm_ast$Ast_Expression$split, ops, l + 1, e, _p10._0),
				_1: {ctor: '[]'}
			};
		}
	});
var _Bogdanp$elm_ast$Ast_Expression$Float = function (a) {
	return {ctor: 'Float', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$float = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _Bogdanp$elm_ast$Ast_Expression$Float, _elm_community$parser_combinators$Combine_Num$float);
var _Bogdanp$elm_ast$Ast_Expression$Integer = function (a) {
	return {ctor: 'Integer', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$integer = A2(_elm_community$parser_combinators$Combine_ops['<$>'], _Bogdanp$elm_ast$Ast_Expression$Integer, _elm_community$parser_combinators$Combine_Num$int);
var _Bogdanp$elm_ast$Ast_Expression$String = function (a) {
	return {ctor: 'String', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$string = function () {
	var multiString = A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		function (_p11) {
			return _Bogdanp$elm_ast$Ast_Expression$String(
				_elm_lang$core$String$concat(_p11));
		},
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$string('\"\"\"'),
				_elm_community$parser_combinators$Combine$many(
					_elm_community$parser_combinators$Combine$regex('[^\"]*'))),
			_elm_community$parser_combinators$Combine$string('\"\"\"')));
	var singleString = A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Expression$String,
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$string('\"'),
				_elm_community$parser_combinators$Combine$regex('(\\\\\\\\|\\\\\"|[^\"\n])*')),
			_elm_community$parser_combinators$Combine$string('\"')));
	return A2(_elm_community$parser_combinators$Combine_ops['<|>'], multiString, singleString);
}();
var _Bogdanp$elm_ast$Ast_Expression$Character = function (a) {
	return {ctor: 'Character', _0: a};
};
var _Bogdanp$elm_ast$Ast_Expression$character = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Expression$Character,
	A2(
		_Bogdanp$elm_ast$Ast_Helpers$between_,
		_elm_community$parser_combinators$Combine$string('\''),
		A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['>>='],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_elm_community$parser_combinators$Combine$string('\\'),
					_elm_community$parser_combinators$Combine$regex('(n|t|r|\\\\|x..)')),
				function (a) {
					var _p12 = _elm_lang$core$String$uncons(a);
					_v10_6:
					do {
						if (_p12.ctor === 'Just') {
							if (_p12._0.ctor === '_Tuple2') {
								switch (_p12._0._0.valueOf()) {
									case 'n':
										if (_p12._0._1 === '') {
											return _elm_community$parser_combinators$Combine$succeed(
												_elm_lang$core$Native_Utils.chr('\n'));
										} else {
											break _v10_6;
										}
									case 't':
										if (_p12._0._1 === '') {
											return _elm_community$parser_combinators$Combine$succeed(
												_elm_lang$core$Native_Utils.chr('\t'));
										} else {
											break _v10_6;
										}
									case 'r':
										if (_p12._0._1 === '') {
											return _elm_community$parser_combinators$Combine$succeed(
												_elm_lang$core$Native_Utils.chr('\r'));
										} else {
											break _v10_6;
										}
									case '\\':
										if (_p12._0._1 === '') {
											return _elm_community$parser_combinators$Combine$succeed(
												_elm_lang$core$Native_Utils.chr('\\'));
										} else {
											break _v10_6;
										}
									case '0':
										if (_p12._0._1 === '') {
											return _elm_community$parser_combinators$Combine$succeed(
												_elm_lang$core$Native_Utils.chr(' '));
										} else {
											break _v10_6;
										}
									case 'x':
										return A2(
											_elm_lang$core$Result$withDefault,
											_elm_community$parser_combinators$Combine$fail('Invalid charcode'),
											A2(
												_elm_lang$core$Result$map,
												_elm_community$parser_combinators$Combine$succeed,
												A2(
													_elm_lang$core$Result$map,
													_elm_lang$core$Char$fromCode,
													_rtfeldman$hex$Hex$fromString(
														_elm_lang$core$String$toLower(_p12._0._1)))));
									default:
										break _v10_6;
								}
							} else {
								break _v10_6;
							}
						} else {
							return _elm_community$parser_combinators$Combine$fail('No character');
						}
					} while(false);
					return _elm_community$parser_combinators$Combine$fail(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'No such character as \\',
							_elm_lang$core$Basics$toString(_p12._0)));
				}),
			_elm_community$parser_combinators$Combine_Char$anyChar)));
var _Bogdanp$elm_ast$Ast_Expression$term = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p13) {
			var _p14 = _p13;
			return _elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _Bogdanp$elm_ast$Ast_Expression$character,
					_1: {
						ctor: '::',
						_0: _Bogdanp$elm_ast$Ast_Expression$string,
						_1: {
							ctor: '::',
							_0: _Bogdanp$elm_ast$Ast_Expression$float,
							_1: {
								ctor: '::',
								_0: _Bogdanp$elm_ast$Ast_Expression$integer,
								_1: {
									ctor: '::',
									_0: _Bogdanp$elm_ast$Ast_Expression$access,
									_1: {
										ctor: '::',
										_0: _Bogdanp$elm_ast$Ast_Expression$accessFunction,
										_1: {
											ctor: '::',
											_0: _Bogdanp$elm_ast$Ast_Expression$variable,
											_1: {
												ctor: '::',
												_0: _Bogdanp$elm_ast$Ast_Expression$list(ops),
												_1: {
													ctor: '::',
													_0: _Bogdanp$elm_ast$Ast_Expression$tuple(ops),
													_1: {
														ctor: '::',
														_0: _Bogdanp$elm_ast$Ast_Expression$recordUpdate(ops),
														_1: {
															ctor: '::',
															_0: _Bogdanp$elm_ast$Ast_Expression$record(ops),
															_1: {
																ctor: '::',
																_0: _Bogdanp$elm_ast$Ast_Expression$simplifiedRecord,
																_1: {
																	ctor: '::',
																	_0: _elm_community$parser_combinators$Combine$parens(
																		A2(
																			_Bogdanp$elm_ast$Ast_Helpers$between_,
																			_elm_community$parser_combinators$Combine$whitespace,
																			_Bogdanp$elm_ast$Ast_Expression$expression(ops))),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				});
		});
};
var _Bogdanp$elm_ast$Ast_Expression$expression = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p15) {
			var _p16 = _p15;
			return _elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _Bogdanp$elm_ast$Ast_Expression$letExpression(ops),
					_1: {
						ctor: '::',
						_0: _Bogdanp$elm_ast$Ast_Expression$caseExpression(ops),
						_1: {
							ctor: '::',
							_0: _Bogdanp$elm_ast$Ast_Expression$ifExpression(ops),
							_1: {
								ctor: '::',
								_0: _Bogdanp$elm_ast$Ast_Expression$lambda(ops),
								_1: {
									ctor: '::',
									_0: _Bogdanp$elm_ast$Ast_Expression$binary(ops),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				});
		});
};
var _Bogdanp$elm_ast$Ast_Expression$binary = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p17) {
			var _p18 = _p17;
			var next = A2(
				_elm_community$parser_combinators$Combine$andThen,
				function (op) {
					return A2(
						_elm_community$parser_combinators$Combine$andThen,
						function (e) {
							var _p19 = e;
							if (_p19.ctor === 'Cont') {
								return A2(
									_elm_community$parser_combinators$Combine_ops['<$>'],
									F2(
										function (x, y) {
											return {ctor: '::', _0: x, _1: y};
										})(
										{ctor: '_Tuple2', _0: op, _1: _p19._0}),
									collect);
							} else {
								return _elm_community$parser_combinators$Combine$succeed(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: op, _1: _p19._0},
										_1: {ctor: '[]'}
									});
							}
						},
						_elm_community$parser_combinators$Combine$choice(
							{
								ctor: '::',
								_0: A2(
									_elm_community$parser_combinators$Combine_ops['<$>'],
									_Bogdanp$elm_ast$Ast_Expression$Cont,
									_Bogdanp$elm_ast$Ast_Expression$application(ops)),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_community$parser_combinators$Combine_ops['<$>'],
										_Bogdanp$elm_ast$Ast_Expression$Stop,
										_Bogdanp$elm_ast$Ast_Expression$expression(ops)),
									_1: {ctor: '[]'}
								}
							}));
				},
				A2(
					_Bogdanp$elm_ast$Ast_Helpers$between_,
					_elm_community$parser_combinators$Combine$whitespace,
					_elm_community$parser_combinators$Combine$choice(
						{
							ctor: '::',
							_0: _Bogdanp$elm_ast$Ast_Helpers$operator,
							_1: {
								ctor: '::',
								_0: _Bogdanp$elm_ast$Ast_Helpers$symbol_('as'),
								_1: {ctor: '[]'}
							}
						})));
			var collect = A2(
				_elm_community$parser_combinators$Combine_ops['<|>'],
				next,
				_elm_community$parser_combinators$Combine$succeed(
					{ctor: '[]'}));
			return A2(
				_elm_community$parser_combinators$Combine$andThen,
				function (e) {
					return A2(
						_elm_community$parser_combinators$Combine$andThen,
						function (eops) {
							return A4(_Bogdanp$elm_ast$Ast_Expression$split, ops, 0, e, eops);
						},
						collect);
				},
				_Bogdanp$elm_ast$Ast_Expression$application(ops));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$application = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p20) {
			var _p21 = _p20;
			return A2(
				_elm_community$parser_combinators$Combine$chainl,
				A2(
					_elm_community$parser_combinators$Combine_ops['<$'],
					_Bogdanp$elm_ast$Ast_Expression$Application,
					_Bogdanp$elm_ast$Ast_Expression$spacesOrIndentedNewline(ops)),
				_Bogdanp$elm_ast$Ast_Expression$term(ops));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$spacesOrIndentedNewline = function (ops) {
	var startsBinding = A2(
		_elm_community$parser_combinators$Combine$or,
		_Bogdanp$elm_ast$Ast_Expression$letBinding(ops),
		_Bogdanp$elm_ast$Ast_Expression$caseBinding(ops));
	var failAtBinding = A2(
		_elm_community$parser_combinators$Combine$andThen,
		function (x) {
			var _p22 = x;
			if (_p22.ctor === 'Just') {
				return _elm_community$parser_combinators$Combine$fail('next line starts a new case or let binding');
			} else {
				return _elm_community$parser_combinators$Combine$succeed('');
			}
		},
		_elm_community$parser_combinators$Combine$maybe(startsBinding));
	return A2(
		_elm_community$parser_combinators$Combine$or,
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(_elm_community$parser_combinators$Combine_ops['*>'], _Bogdanp$elm_ast$Ast_Helpers$spaces, _elm_community$parser_combinators$Combine_Char$newline),
				_Bogdanp$elm_ast$Ast_Helpers$spaces_),
			_elm_community$parser_combinators$Combine$lookAhead(failAtBinding)),
		_Bogdanp$elm_ast$Ast_Helpers$spaces_);
};
var _Bogdanp$elm_ast$Ast_Expression$caseBinding = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p23) {
			var _p24 = _p23;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_elm_community$parser_combinators$Combine$whitespace,
						_Bogdanp$elm_ast$Ast_Expression$expression(ops))),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$symbol('->'),
					_Bogdanp$elm_ast$Ast_Expression$expression(ops)));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$letBinding = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p25) {
			var _p26 = _p25;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					A2(
						_Bogdanp$elm_ast$Ast_Helpers$between_,
						_elm_community$parser_combinators$Combine$whitespace,
						_Bogdanp$elm_ast$Ast_Expression$expression(ops))),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$symbol('='),
					_Bogdanp$elm_ast$Ast_Expression$expression(ops)));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$caseExpression = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p27) {
			var _p28 = _p27;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					_Bogdanp$elm_ast$Ast_Expression$Case,
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_Bogdanp$elm_ast$Ast_Helpers$symbol('case'),
						_Bogdanp$elm_ast$Ast_Expression$expression(ops))),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$symbol('of'),
					_elm_community$parser_combinators$Combine$many1(
						_Bogdanp$elm_ast$Ast_Expression$caseBinding(ops))));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$ifExpression = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p29) {
			var _p30 = _p29;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<*>'],
					A2(
						_elm_community$parser_combinators$Combine_ops['<$>'],
						_Bogdanp$elm_ast$Ast_Expression$If,
						A2(
							_elm_community$parser_combinators$Combine_ops['*>'],
							_Bogdanp$elm_ast$Ast_Helpers$symbol('if'),
							_Bogdanp$elm_ast$Ast_Expression$expression(ops))),
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_Bogdanp$elm_ast$Ast_Helpers$symbol('then'),
						_Bogdanp$elm_ast$Ast_Expression$expression(ops))),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$symbol('else'),
					_Bogdanp$elm_ast$Ast_Expression$expression(ops)));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$lambda = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p31) {
			var _p32 = _p31;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					_Bogdanp$elm_ast$Ast_Expression$Lambda,
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_Bogdanp$elm_ast$Ast_Helpers$symbol('\\'),
						_elm_community$parser_combinators$Combine$many(
							A2(
								_Bogdanp$elm_ast$Ast_Helpers$between_,
								_Bogdanp$elm_ast$Ast_Helpers$spaces,
								_Bogdanp$elm_ast$Ast_Expression$term(ops))))),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$symbol('->'),
					_Bogdanp$elm_ast$Ast_Expression$expression(ops)));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$letExpression = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p33) {
			var _p34 = _p33;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					_Bogdanp$elm_ast$Ast_Expression$Let,
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_Bogdanp$elm_ast$Ast_Helpers$symbol_('let'),
						_elm_community$parser_combinators$Combine$many1(
							_Bogdanp$elm_ast$Ast_Expression$letBinding(ops)))),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$symbol('in'),
					_Bogdanp$elm_ast$Ast_Expression$expression(ops)));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$list = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p35) {
			var _p36 = _p35;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_Bogdanp$elm_ast$Ast_Expression$List,
				_elm_community$parser_combinators$Combine$brackets(
					_Bogdanp$elm_ast$Ast_Helpers$commaSeparated_(
						_Bogdanp$elm_ast$Ast_Expression$expression(ops))));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$record = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p37) {
			var _p38 = _p37;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_Bogdanp$elm_ast$Ast_Expression$Record,
				_elm_community$parser_combinators$Combine$braces(
					_Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
						A2(
							_elm_community$parser_combinators$Combine_ops['<*>'],
							A2(
								_elm_community$parser_combinators$Combine_ops['<$>'],
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_Bogdanp$elm_ast$Ast_Helpers$loName),
							A2(
								_elm_community$parser_combinators$Combine_ops['*>'],
								_Bogdanp$elm_ast$Ast_Helpers$symbol('='),
								_Bogdanp$elm_ast$Ast_Expression$expression(ops))))));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$recordUpdate = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					_Bogdanp$elm_ast$Ast_Expression$RecordUpdate,
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_Bogdanp$elm_ast$Ast_Helpers$symbol('{'),
						_Bogdanp$elm_ast$Ast_Helpers$loName)),
				A2(
					_elm_community$parser_combinators$Combine_ops['<*'],
					A2(
						_elm_community$parser_combinators$Combine_ops['*>'],
						_Bogdanp$elm_ast$Ast_Helpers$symbol('|'),
						_Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
							A2(
								_elm_community$parser_combinators$Combine_ops['<*>'],
								A2(
									_elm_community$parser_combinators$Combine_ops['<$>'],
									F2(
										function (v0, v1) {
											return {ctor: '_Tuple2', _0: v0, _1: v1};
										}),
									_Bogdanp$elm_ast$Ast_Helpers$loName),
								A2(
									_elm_community$parser_combinators$Combine_ops['*>'],
									_Bogdanp$elm_ast$Ast_Helpers$symbol('='),
									_Bogdanp$elm_ast$Ast_Expression$expression(ops))))),
					_Bogdanp$elm_ast$Ast_Helpers$symbol('}')));
		});
};
var _Bogdanp$elm_ast$Ast_Expression$tuple = function (ops) {
	return _elm_community$parser_combinators$Combine$lazy(
		function (_p41) {
			var _p42 = _p41;
			return A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_Bogdanp$elm_ast$Ast_Expression$Tuple,
				A2(
					_elm_community$parser_combinators$Combine_ops['>>='],
					_elm_community$parser_combinators$Combine$parens(
						_Bogdanp$elm_ast$Ast_Helpers$commaSeparated_(
							_Bogdanp$elm_ast$Ast_Expression$expression(ops))),
					function (a) {
						var _p43 = a;
						if ((_p43.ctor === '::') && (_p43._1.ctor === '[]')) {
							return _elm_community$parser_combinators$Combine$fail('No single tuples');
						} else {
							return _elm_community$parser_combinators$Combine$succeed(_p43);
						}
					}));
		});
};

var _Bogdanp$elm_ast$Ast_Statement$TypeExport = F2(
	function (a, b) {
		return {ctor: 'TypeExport', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$FunctionExport = function (a) {
	return {ctor: 'FunctionExport', _0: a};
};
var _Bogdanp$elm_ast$Ast_Statement$functionExport = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Statement$FunctionExport,
	_elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: _Bogdanp$elm_ast$Ast_Helpers$functionName,
			_1: {
				ctor: '::',
				_0: _elm_community$parser_combinators$Combine$parens(_Bogdanp$elm_ast$Ast_Helpers$operator),
				_1: {ctor: '[]'}
			}
		}));
var _Bogdanp$elm_ast$Ast_Statement$SubsetExport = function (a) {
	return {ctor: 'SubsetExport', _0: a};
};
var _Bogdanp$elm_ast$Ast_Statement$constructorSubsetExports = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Statement$SubsetExport,
	_Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
		A2(_elm_community$parser_combinators$Combine_ops['<$>'], _Bogdanp$elm_ast$Ast_Statement$FunctionExport, _Bogdanp$elm_ast$Ast_Helpers$upName)));
var _Bogdanp$elm_ast$Ast_Statement$AllExport = {ctor: 'AllExport'};
var _Bogdanp$elm_ast$Ast_Statement$allExport = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	_Bogdanp$elm_ast$Ast_Statement$AllExport,
	_Bogdanp$elm_ast$Ast_Helpers$symbol('..'));
var _Bogdanp$elm_ast$Ast_Statement$constructorExports = _elm_community$parser_combinators$Combine$maybe(
	_elm_community$parser_combinators$Combine$parens(
		_elm_community$parser_combinators$Combine$choice(
			{
				ctor: '::',
				_0: _Bogdanp$elm_ast$Ast_Statement$allExport,
				_1: {
					ctor: '::',
					_0: _Bogdanp$elm_ast$Ast_Statement$constructorSubsetExports,
					_1: {ctor: '[]'}
				}
			})));
var _Bogdanp$elm_ast$Ast_Statement$typeExport = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$TypeExport,
		A2(_elm_community$parser_combinators$Combine_ops['<*'], _Bogdanp$elm_ast$Ast_Helpers$upName, _Bogdanp$elm_ast$Ast_Helpers$spaces)),
	_Bogdanp$elm_ast$Ast_Statement$constructorExports);
var _Bogdanp$elm_ast$Ast_Statement$subsetExport = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Statement$SubsetExport,
	_Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
		A2(_elm_community$parser_combinators$Combine$or, _Bogdanp$elm_ast$Ast_Statement$typeExport, _Bogdanp$elm_ast$Ast_Statement$functionExport)));
var _Bogdanp$elm_ast$Ast_Statement$exports = _elm_community$parser_combinators$Combine$parens(
	_elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: _Bogdanp$elm_ast$Ast_Statement$allExport,
			_1: {
				ctor: '::',
				_0: _Bogdanp$elm_ast$Ast_Statement$subsetExport,
				_1: {ctor: '[]'}
			}
		}));
var _Bogdanp$elm_ast$Ast_Statement$TypeApplication = F2(
	function (a, b) {
		return {ctor: 'TypeApplication', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$typeApplication = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	_Bogdanp$elm_ast$Ast_Statement$TypeApplication,
	_Bogdanp$elm_ast$Ast_Helpers$symbol('->'));
var _Bogdanp$elm_ast$Ast_Statement$TypeTuple = function (a) {
	return {ctor: 'TypeTuple', _0: a};
};
var _Bogdanp$elm_ast$Ast_Statement$TypeRecord = function (a) {
	return {ctor: 'TypeRecord', _0: a};
};
var _Bogdanp$elm_ast$Ast_Statement$TypeRecordConstructor = F2(
	function (a, b) {
		return {ctor: 'TypeRecordConstructor', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$TypeVariable = function (a) {
	return {ctor: 'TypeVariable', _0: a};
};
var _Bogdanp$elm_ast$Ast_Statement$typeVariable = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Statement$TypeVariable,
	_elm_community$parser_combinators$Combine$regex('[a-z]+(\\w|_)*'));
var _Bogdanp$elm_ast$Ast_Statement$TypeConstructor = F2(
	function (a, b) {
		return {ctor: 'TypeConstructor', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$typeConstant = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$TypeConstructor,
		A2(
			_elm_community$parser_combinators$Combine$sepBy1,
			_elm_community$parser_combinators$Combine$string('.'),
			_Bogdanp$elm_ast$Ast_Helpers$upName)),
	_elm_community$parser_combinators$Combine$succeed(
		{ctor: '[]'}));
var _Bogdanp$elm_ast$Ast_Statement$typeConstructor = _elm_community$parser_combinators$Combine$lazy(
	function (_p0) {
		var _p1 = _p0;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_Bogdanp$elm_ast$Ast_Statement$TypeConstructor,
				A2(
					_elm_community$parser_combinators$Combine$sepBy1,
					_elm_community$parser_combinators$Combine$string('.'),
					_Bogdanp$elm_ast$Ast_Helpers$upName)),
			_elm_community$parser_combinators$Combine$many(_Bogdanp$elm_ast$Ast_Statement$typeParameter));
	});
var _Bogdanp$elm_ast$Ast_Statement$typeParameter = _elm_community$parser_combinators$Combine$lazy(
	function (_p2) {
		var _p3 = _p2;
		return A2(
			_Bogdanp$elm_ast$Ast_Helpers$between_,
			A2(
				_elm_community$parser_combinators$Combine$or,
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					A2(_elm_community$parser_combinators$Combine_ops['*>'], _Bogdanp$elm_ast$Ast_Helpers$spaces, _elm_community$parser_combinators$Combine_Char$newline),
					_Bogdanp$elm_ast$Ast_Helpers$spaces_),
				_Bogdanp$elm_ast$Ast_Helpers$spaces),
			_elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _Bogdanp$elm_ast$Ast_Statement$typeVariable,
					_1: {
						ctor: '::',
						_0: _Bogdanp$elm_ast$Ast_Statement$typeConstant,
						_1: {
							ctor: '::',
							_0: _Bogdanp$elm_ast$Ast_Statement$typeRecordConstructor,
							_1: {
								ctor: '::',
								_0: _Bogdanp$elm_ast$Ast_Statement$typeRecord,
								_1: {
									ctor: '::',
									_0: _Bogdanp$elm_ast$Ast_Statement$typeTuple,
									_1: {
										ctor: '::',
										_0: _elm_community$parser_combinators$Combine$parens(_Bogdanp$elm_ast$Ast_Statement$typeAnnotation),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	});
var _Bogdanp$elm_ast$Ast_Statement$typeAnnotation = _elm_community$parser_combinators$Combine$lazy(
	function (_p4) {
		var _p5 = _p4;
		return A2(_elm_community$parser_combinators$Combine$chainr, _Bogdanp$elm_ast$Ast_Statement$typeApplication, _Bogdanp$elm_ast$Ast_Statement$type_);
	});
var _Bogdanp$elm_ast$Ast_Statement$type_ = _elm_community$parser_combinators$Combine$lazy(
	function (_p6) {
		var _p7 = _p6;
		return A2(
			_Bogdanp$elm_ast$Ast_Helpers$between_,
			_Bogdanp$elm_ast$Ast_Helpers$spaces,
			_elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _Bogdanp$elm_ast$Ast_Statement$typeConstructor,
					_1: {
						ctor: '::',
						_0: _Bogdanp$elm_ast$Ast_Statement$typeVariable,
						_1: {
							ctor: '::',
							_0: _Bogdanp$elm_ast$Ast_Statement$typeRecordConstructor,
							_1: {
								ctor: '::',
								_0: _Bogdanp$elm_ast$Ast_Statement$typeRecord,
								_1: {
									ctor: '::',
									_0: _Bogdanp$elm_ast$Ast_Statement$typeTuple,
									_1: {
										ctor: '::',
										_0: _elm_community$parser_combinators$Combine$parens(_Bogdanp$elm_ast$Ast_Statement$typeAnnotation),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	});
var _Bogdanp$elm_ast$Ast_Statement$typeRecord = _elm_community$parser_combinators$Combine$lazy(
	function (_p8) {
		var _p9 = _p8;
		return _elm_community$parser_combinators$Combine$braces(
			A2(_elm_community$parser_combinators$Combine_ops['<$>'], _Bogdanp$elm_ast$Ast_Statement$TypeRecord, _Bogdanp$elm_ast$Ast_Statement$typeRecordPairs));
	});
var _Bogdanp$elm_ast$Ast_Statement$typeRecordPairs = _elm_community$parser_combinators$Combine$lazy(
	function (_p10) {
		var _p11 = _p10;
		return _Bogdanp$elm_ast$Ast_Helpers$commaSeparated_(_Bogdanp$elm_ast$Ast_Statement$typeRecordPair);
	});
var _Bogdanp$elm_ast$Ast_Statement$typeRecordPair = _elm_community$parser_combinators$Combine$lazy(
	function (_p12) {
		var _p13 = _p12;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				A2(
					_elm_community$parser_combinators$Combine_ops['<*'],
					_Bogdanp$elm_ast$Ast_Helpers$loName,
					_Bogdanp$elm_ast$Ast_Helpers$symbol(':'))),
			_Bogdanp$elm_ast$Ast_Statement$typeAnnotation);
	});
var _Bogdanp$elm_ast$Ast_Statement$typeRecordConstructor = _elm_community$parser_combinators$Combine$lazy(
	function (_p14) {
		var _p15 = _p14;
		return _elm_community$parser_combinators$Combine$braces(
			A2(
				_elm_community$parser_combinators$Combine_ops['<*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['<$>'],
					_Bogdanp$elm_ast$Ast_Statement$TypeRecordConstructor,
					A2(_Bogdanp$elm_ast$Ast_Helpers$between_, _Bogdanp$elm_ast$Ast_Helpers$spaces, _Bogdanp$elm_ast$Ast_Statement$typeVariable)),
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$symbol('|'),
					_Bogdanp$elm_ast$Ast_Statement$typeRecordPairs)));
	});
var _Bogdanp$elm_ast$Ast_Statement$typeTuple = _elm_community$parser_combinators$Combine$lazy(
	function (_p16) {
		var _p17 = _p16;
		return A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_Bogdanp$elm_ast$Ast_Statement$TypeTuple,
			_elm_community$parser_combinators$Combine$parens(
				_Bogdanp$elm_ast$Ast_Helpers$commaSeparated_(_Bogdanp$elm_ast$Ast_Statement$type_)));
	});
var _Bogdanp$elm_ast$Ast_Statement$Comment = function (a) {
	return {ctor: 'Comment', _0: a};
};
var _Bogdanp$elm_ast$Ast_Statement$singleLineComment = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	_Bogdanp$elm_ast$Ast_Statement$Comment,
	A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$string('--'),
			_elm_community$parser_combinators$Combine$regex('.*')),
		_elm_community$parser_combinators$Combine$whitespace));
var _Bogdanp$elm_ast$Ast_Statement$multiLineComment = A2(
	_elm_community$parser_combinators$Combine_ops['<$>'],
	function (_p18) {
		return _Bogdanp$elm_ast$Ast_Statement$Comment(
			_elm_lang$core$String$fromList(_p18));
	},
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_elm_community$parser_combinators$Combine$string('{-'),
		A2(
			_elm_community$parser_combinators$Combine$manyTill,
			_elm_community$parser_combinators$Combine_Char$anyChar,
			_elm_community$parser_combinators$Combine$string('-}'))));
var _Bogdanp$elm_ast$Ast_Statement$comment = A2(_elm_community$parser_combinators$Combine_ops['<|>'], _Bogdanp$elm_ast$Ast_Statement$singleLineComment, _Bogdanp$elm_ast$Ast_Statement$multiLineComment);
var _Bogdanp$elm_ast$Ast_Statement$InfixDeclaration = F3(
	function (a, b, c) {
		return {ctor: 'InfixDeclaration', _0: a, _1: b, _2: c};
	});
var _Bogdanp$elm_ast$Ast_Statement$infixDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_Bogdanp$elm_ast$Ast_Statement$InfixDeclaration,
			_elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: A2(
						_elm_community$parser_combinators$Combine_ops['<$'],
						_Bogdanp$elm_ast$Ast_BinOp$L,
						_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('infixl')),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_community$parser_combinators$Combine_ops['<$'],
							_Bogdanp$elm_ast$Ast_BinOp$R,
							_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('infixr')),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_community$parser_combinators$Combine_ops['<$'],
								_Bogdanp$elm_ast$Ast_BinOp$N,
								_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('infix')),
							_1: {ctor: '[]'}
						}
					}
				})),
		A2(_elm_community$parser_combinators$Combine_ops['*>'], _Bogdanp$elm_ast$Ast_Helpers$spaces, _elm_community$parser_combinators$Combine_Num$int)),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_Bogdanp$elm_ast$Ast_Helpers$spaces,
		A2(_elm_community$parser_combinators$Combine_ops['<|>'], _Bogdanp$elm_ast$Ast_Helpers$loName, _Bogdanp$elm_ast$Ast_Helpers$operator)));
var _Bogdanp$elm_ast$Ast_Statement$infixStatements = function () {
	var statements = A2(
		_elm_community$parser_combinators$Combine_ops['<*'],
		_elm_community$parser_combinators$Combine$many(
			A2(
				_elm_community$parser_combinators$Combine_ops['<*'],
				_elm_community$parser_combinators$Combine$choice(
					{
						ctor: '::',
						_0: A2(_elm_community$parser_combinators$Combine_ops['<$>'], _elm_lang$core$Maybe$Just, _Bogdanp$elm_ast$Ast_Statement$infixDeclaration),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_community$parser_combinators$Combine_ops['<$'],
								_elm_lang$core$Maybe$Nothing,
								_elm_community$parser_combinators$Combine$regex('.*')),
							_1: {ctor: '[]'}
						}
					}),
				_elm_community$parser_combinators$Combine$whitespace)),
		_elm_community$parser_combinators$Combine$end);
	return A2(
		_elm_community$parser_combinators$Combine$andThen,
		function (xs) {
			return _elm_community$parser_combinators$Combine$succeed(
				A2(_elm_lang$core$List$filterMap, _elm_lang$core$Basics$identity, xs));
		},
		statements);
}();
var _Bogdanp$elm_ast$Ast_Statement$opTable = function (ops) {
	var collect = F2(
		function (s, d) {
			var _p19 = s;
			if (_p19.ctor === 'InfixDeclaration') {
				return A3(
					_elm_lang$core$Dict$insert,
					_p19._2,
					{ctor: '_Tuple2', _0: _p19._0, _1: _p19._1},
					d);
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'Ast.Statement',
					{
						start: {line: 414, column: 13},
						end: {line: 419, column: 45}
					},
					_p19)('impossible');
			}
		});
	return A2(
		_elm_community$parser_combinators$Combine$andThen,
		function (xs) {
			return _elm_community$parser_combinators$Combine$succeed(
				A3(_elm_lang$core$List$foldr, collect, ops, xs));
		},
		_Bogdanp$elm_ast$Ast_Statement$infixStatements);
};
var _Bogdanp$elm_ast$Ast_Statement$FunctionDeclaration = F3(
	function (a, b, c) {
		return {ctor: 'FunctionDeclaration', _0: a, _1: b, _2: c};
	});
var _Bogdanp$elm_ast$Ast_Statement$functionDeclaration = function (ops) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_Bogdanp$elm_ast$Ast_Statement$FunctionDeclaration,
				_elm_community$parser_combinators$Combine$choice(
					{
						ctor: '::',
						_0: _Bogdanp$elm_ast$Ast_Helpers$loName,
						_1: {
							ctor: '::',
							_0: _elm_community$parser_combinators$Combine$parens(_Bogdanp$elm_ast$Ast_Helpers$operator),
							_1: {ctor: '[]'}
						}
					})),
			_elm_community$parser_combinators$Combine$many(
				A2(
					_Bogdanp$elm_ast$Ast_Helpers$between_,
					_elm_community$parser_combinators$Combine$whitespace,
					_Bogdanp$elm_ast$Ast_Expression$term(ops)))),
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_Bogdanp$elm_ast$Ast_Helpers$symbol('='),
				_elm_community$parser_combinators$Combine$whitespace),
			_Bogdanp$elm_ast$Ast_Expression$expression(ops)));
};
var _Bogdanp$elm_ast$Ast_Statement$FunctionTypeDeclaration = F2(
	function (a, b) {
		return {ctor: 'FunctionTypeDeclaration', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$functionTypeDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$FunctionTypeDeclaration,
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			_elm_community$parser_combinators$Combine$choice(
				{
					ctor: '::',
					_0: _Bogdanp$elm_ast$Ast_Helpers$loName,
					_1: {
						ctor: '::',
						_0: _elm_community$parser_combinators$Combine$parens(_Bogdanp$elm_ast$Ast_Helpers$operator),
						_1: {ctor: '[]'}
					}
				}),
			_Bogdanp$elm_ast$Ast_Helpers$symbol(':'))),
	_Bogdanp$elm_ast$Ast_Statement$typeAnnotation);
var _Bogdanp$elm_ast$Ast_Statement$PortDeclaration = F3(
	function (a, b, c) {
		return {ctor: 'PortDeclaration', _0: a, _1: b, _2: c};
	});
var _Bogdanp$elm_ast$Ast_Statement$portDeclaration = function (ops) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				_Bogdanp$elm_ast$Ast_Statement$PortDeclaration,
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('port'),
					_Bogdanp$elm_ast$Ast_Helpers$loName)),
			_elm_community$parser_combinators$Combine$many(
				A2(_Bogdanp$elm_ast$Ast_Helpers$between_, _Bogdanp$elm_ast$Ast_Helpers$spaces, _Bogdanp$elm_ast$Ast_Helpers$loName))),
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_Bogdanp$elm_ast$Ast_Helpers$symbol('='),
			_Bogdanp$elm_ast$Ast_Expression$expression(ops)));
};
var _Bogdanp$elm_ast$Ast_Statement$PortTypeDeclaration = F2(
	function (a, b) {
		return {ctor: 'PortTypeDeclaration', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$portTypeDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$PortTypeDeclaration,
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('port'),
			_Bogdanp$elm_ast$Ast_Helpers$loName)),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_Bogdanp$elm_ast$Ast_Helpers$symbol(':'),
		_Bogdanp$elm_ast$Ast_Statement$typeAnnotation));
var _Bogdanp$elm_ast$Ast_Statement$TypeDeclaration = F2(
	function (a, b) {
		return {ctor: 'TypeDeclaration', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$typeDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$TypeDeclaration,
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('type'),
			_Bogdanp$elm_ast$Ast_Statement$type_)),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$whitespace,
			_Bogdanp$elm_ast$Ast_Helpers$symbol('=')),
		A2(
			_elm_community$parser_combinators$Combine$sepBy1,
			_Bogdanp$elm_ast$Ast_Helpers$symbol('|'),
			A2(_Bogdanp$elm_ast$Ast_Helpers$between_, _elm_community$parser_combinators$Combine$whitespace, _Bogdanp$elm_ast$Ast_Statement$typeConstructor))));
var _Bogdanp$elm_ast$Ast_Statement$TypeAliasDeclaration = F2(
	function (a, b) {
		return {ctor: 'TypeAliasDeclaration', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$typeAliasDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$TypeAliasDeclaration,
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('type'),
				_Bogdanp$elm_ast$Ast_Helpers$symbol('alias')),
			_Bogdanp$elm_ast$Ast_Statement$type_)),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$whitespace,
			_Bogdanp$elm_ast$Ast_Helpers$symbol('=')),
		_Bogdanp$elm_ast$Ast_Statement$typeAnnotation));
var _Bogdanp$elm_ast$Ast_Statement$ImportStatement = F3(
	function (a, b, c) {
		return {ctor: 'ImportStatement', _0: a, _1: b, _2: c};
	});
var _Bogdanp$elm_ast$Ast_Statement$importStatement = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_Bogdanp$elm_ast$Ast_Statement$ImportStatement,
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('import'),
				_Bogdanp$elm_ast$Ast_Helpers$moduleName)),
		_elm_community$parser_combinators$Combine$maybe(
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_Bogdanp$elm_ast$Ast_Helpers$symbol('as'),
				_Bogdanp$elm_ast$Ast_Helpers$upName))),
	_elm_community$parser_combinators$Combine$maybe(
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_Bogdanp$elm_ast$Ast_Helpers$symbol('exposing'),
			_Bogdanp$elm_ast$Ast_Statement$exports)));
var _Bogdanp$elm_ast$Ast_Statement$EffectModuleDeclaration = F3(
	function (a, b, c) {
		return {ctor: 'EffectModuleDeclaration', _0: a, _1: b, _2: c};
	});
var _Bogdanp$elm_ast$Ast_Statement$effectModuleDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_Bogdanp$elm_ast$Ast_Statement$EffectModuleDeclaration,
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				A2(
					_elm_community$parser_combinators$Combine_ops['*>'],
					_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('effect'),
					_Bogdanp$elm_ast$Ast_Helpers$symbol('module')),
				_Bogdanp$elm_ast$Ast_Helpers$moduleName)),
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_Bogdanp$elm_ast$Ast_Helpers$symbol('where'),
			_elm_community$parser_combinators$Combine$braces(
				_Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
					A2(
						_elm_community$parser_combinators$Combine_ops['<*>'],
						A2(
							_elm_community$parser_combinators$Combine_ops['<$>'],
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_Bogdanp$elm_ast$Ast_Helpers$loName),
						A2(
							_elm_community$parser_combinators$Combine_ops['*>'],
							_Bogdanp$elm_ast$Ast_Helpers$symbol('='),
							_Bogdanp$elm_ast$Ast_Helpers$upName)))))),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_Bogdanp$elm_ast$Ast_Helpers$symbol('exposing'),
		_Bogdanp$elm_ast$Ast_Statement$exports));
var _Bogdanp$elm_ast$Ast_Statement$PortModuleDeclaration = F2(
	function (a, b) {
		return {ctor: 'PortModuleDeclaration', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$portModuleDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$PortModuleDeclaration,
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('port'),
				_Bogdanp$elm_ast$Ast_Helpers$symbol('module')),
			_Bogdanp$elm_ast$Ast_Helpers$moduleName)),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_Bogdanp$elm_ast$Ast_Helpers$symbol('exposing'),
		_Bogdanp$elm_ast$Ast_Statement$exports));
var _Bogdanp$elm_ast$Ast_Statement$ModuleDeclaration = F2(
	function (a, b) {
		return {ctor: 'ModuleDeclaration', _0: a, _1: b};
	});
var _Bogdanp$elm_ast$Ast_Statement$moduleDeclaration = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		_Bogdanp$elm_ast$Ast_Statement$ModuleDeclaration,
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_Bogdanp$elm_ast$Ast_Helpers$initialSymbol('module'),
			_Bogdanp$elm_ast$Ast_Helpers$moduleName)),
	A2(
		_elm_community$parser_combinators$Combine_ops['*>'],
		_Bogdanp$elm_ast$Ast_Helpers$symbol('exposing'),
		_Bogdanp$elm_ast$Ast_Statement$exports));
var _Bogdanp$elm_ast$Ast_Statement$statement = function (ops) {
	return _elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: _Bogdanp$elm_ast$Ast_Statement$portModuleDeclaration,
			_1: {
				ctor: '::',
				_0: _Bogdanp$elm_ast$Ast_Statement$effectModuleDeclaration,
				_1: {
					ctor: '::',
					_0: _Bogdanp$elm_ast$Ast_Statement$moduleDeclaration,
					_1: {
						ctor: '::',
						_0: _Bogdanp$elm_ast$Ast_Statement$importStatement,
						_1: {
							ctor: '::',
							_0: _Bogdanp$elm_ast$Ast_Statement$typeAliasDeclaration,
							_1: {
								ctor: '::',
								_0: _Bogdanp$elm_ast$Ast_Statement$typeDeclaration,
								_1: {
									ctor: '::',
									_0: _Bogdanp$elm_ast$Ast_Statement$portTypeDeclaration,
									_1: {
										ctor: '::',
										_0: _Bogdanp$elm_ast$Ast_Statement$portDeclaration(ops),
										_1: {
											ctor: '::',
											_0: _Bogdanp$elm_ast$Ast_Statement$functionTypeDeclaration,
											_1: {
												ctor: '::',
												_0: _Bogdanp$elm_ast$Ast_Statement$functionDeclaration(ops),
												_1: {
													ctor: '::',
													_0: _Bogdanp$elm_ast$Ast_Statement$infixDeclaration,
													_1: {
														ctor: '::',
														_0: _Bogdanp$elm_ast$Ast_Statement$comment,
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _Bogdanp$elm_ast$Ast_Statement$statements = function (ops) {
	return A2(
		_elm_community$parser_combinators$Combine$manyTill,
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$whitespace,
				_Bogdanp$elm_ast$Ast_Statement$statement(ops)),
			_elm_community$parser_combinators$Combine$whitespace),
		_elm_community$parser_combinators$Combine$end);
};

var _Bogdanp$elm_ast$Ast$parseModule = function (ops) {
	return _elm_community$parser_combinators$Combine$parse(
		_Bogdanp$elm_ast$Ast_Statement$statements(ops));
};
var _Bogdanp$elm_ast$Ast$parseOpTable = function (ops) {
	return _elm_community$parser_combinators$Combine$parse(
		_Bogdanp$elm_ast$Ast_Statement$opTable(ops));
};
var _Bogdanp$elm_ast$Ast$parse = function (input) {
	var _p0 = A2(_Bogdanp$elm_ast$Ast$parseOpTable, _Bogdanp$elm_ast$Ast_BinOp$operators, input);
	if (_p0.ctor === 'Ok') {
		return A2(_Bogdanp$elm_ast$Ast$parseModule, _p0._0._2, input);
	} else {
		return _elm_lang$core$Result$Err(_p0._0);
	}
};
var _Bogdanp$elm_ast$Ast$parseStatement = function (ops) {
	return _elm_community$parser_combinators$Combine$parse(
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			_Bogdanp$elm_ast$Ast_Statement$statement(ops),
			_elm_community$parser_combinators$Combine$end));
};
var _Bogdanp$elm_ast$Ast$parseExpression = function (ops) {
	return _elm_community$parser_combinators$Combine$parse(
		A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			_Bogdanp$elm_ast$Ast_Expression$expression(ops),
			_elm_community$parser_combinators$Combine$end));
};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$Native_Debug = function() {


// IMPORT / EXPORT

function unsafeCoerce(value)
{
	return value;
}

var upload = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	var element = document.createElement('input');
	element.setAttribute('type', 'file');
	element.setAttribute('accept', 'text/json');
	element.style.display = 'none';
	element.addEventListener('change', function(event)
	{
		var fileReader = new FileReader();
		fileReader.onload = function(e)
		{
			callback(_elm_lang$core$Native_Scheduler.succeed(e.target.result));
		};
		fileReader.readAsText(event.target.files[0]);
		document.body.removeChild(element);
	});
	document.body.appendChild(element);
	element.click();
});

function download(historyLength, json)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
}


// POPOUT

function messageToString(value)
{
	switch (typeof value)
	{
		case 'boolean':
			return value ? 'True' : 'False';
		case 'number':
			return value + '';
		case 'string':
			return '"' + addSlashes(value, false) + '"';
	}
	if (value instanceof String)
	{
		return '\'' + addSlashes(value, true) + '\'';
	}
	if (typeof value !== 'object' || value === null || !('ctor' in value))
	{
		return '…';
	}

	var ctorStarter = value.ctor.substring(0, 5);
	if (ctorStarter === '_Tupl' || ctorStarter === '_Task')
	{
		return '…'
	}
	if (['_Array', '<decoder>', '_Process', '::', '[]', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.ctor) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.ctor;
		case 2:
			return value.ctor + ' ' + messageToString(value._0);
		default:
			return value.ctor + ' … ' + messageToString(value[keys[keys.length - 1]]);
	}
}


function primitive(str)
{
	return { ctor: 'Primitive', _0: str };
}


function init(value)
{
	var type = typeof value;

	if (type === 'boolean')
	{
		return {
			ctor: 'Constructor',
			_0: _elm_lang$core$Maybe$Just(value ? 'True' : 'False'),
			_1: true,
			_2: _elm_lang$core$Native_List.Nil
		};
	}

	if (type === 'number')
	{
		return primitive(value + '');
	}

	if (type === 'string')
	{
		return { ctor: 'S', _0: '"' + addSlashes(value, false) + '"' };
	}

	if (value instanceof String)
	{
		return { ctor: 'S', _0: "'" + addSlashes(value, true) + "'" };
	}

	if (value instanceof Date)
	{
		return primitive('<' + value.toString() + '>');
	}

	if (value === null)
	{
		return primitive('XXX');
	}

	if (type === 'object' && 'ctor' in value)
	{
		var ctor = value.ctor;

		if (ctor === '::' || ctor === '[]')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'ListSeq'},
				_1: true,
				_2: A2(_elm_lang$core$List$map, init, value)
			};
		}

		if (ctor === 'Set_elm_builtin')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'SetSeq'},
				_1: true,
				_2: A3(_elm_lang$core$Set$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		if (ctor === 'RBNode_elm_builtin' || ctor == 'RBEmpty_elm_builtin')
		{
			return {
				ctor: 'Dictionary',
				_0: true,
				_1: A3(_elm_lang$core$Dict$foldr, initKeyValueCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		if (ctor === '_Array')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'ArraySeq'},
				_1: true,
				_2: A3(_elm_lang$core$Array$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		var ctorStarter = value.ctor.substring(0, 5);
		if (ctorStarter === '_Task')
		{
			return primitive('<task>');
		}

		if (ctor === '<decoder>')
		{
			return primitive(ctor);
		}

		if (ctor === '_Process')
		{
			return primitive('<process>');
		}

		var list = _elm_lang$core$Native_List.Nil;
		for (var i in value)
		{
			if (i === 'ctor') continue;
			list = _elm_lang$core$Native_List.Cons(init(value[i]), list);
		}
		return {
			ctor: 'Constructor',
			_0: ctorStarter === '_Tupl' ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(ctor),
			_1: true,
			_2: _elm_lang$core$List$reverse(list)
		};
	}

	if (type === 'object')
	{
		var dict = _elm_lang$core$Dict$empty;
		for (var i in value)
		{
			dict = A3(_elm_lang$core$Dict$insert, i, init(value[i]), dict);
		}
		return { ctor: 'Record', _0: true, _1: dict };
	}

	return primitive('XXX');
}

var initCons = F2(initConsHelp);

function initConsHelp(value, list)
{
	return _elm_lang$core$Native_List.Cons(init(value), list);
}

var initKeyValueCons = F3(initKeyValueConsHelp);

function initKeyValueConsHelp(key, value, list)
{
	return _elm_lang$core$Native_List.Cons(
		_elm_lang$core$Native_Utils.Tuple2(init(key), init(value)),
		list
	);
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	upload: upload,
	download: F2(download),
	unsafeCoerce: unsafeCoerce,
	messageToString: messageToString,
	init: init
}

}();

var _elm_lang$virtual_dom$VirtualDom_Helpers$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom_Helpers$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom_Helpers$onClick = function (msg) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom_Helpers$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom_Helpers$id = _elm_lang$virtual_dom$VirtualDom_Helpers$attribute('id');
var _elm_lang$virtual_dom$VirtualDom_Helpers$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom_Helpers$class = function (name) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$property,
		'className',
		_elm_lang$core$Json_Encode$string(name));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$href = function (name) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$property,
		'href',
		_elm_lang$core$Json_Encode$string(name));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom_Helpers$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom_Helpers$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom_Helpers$div = _elm_lang$virtual_dom$VirtualDom_Helpers$node('div');
var _elm_lang$virtual_dom$VirtualDom_Helpers$span = _elm_lang$virtual_dom$VirtualDom_Helpers$node('span');
var _elm_lang$virtual_dom$VirtualDom_Helpers$a = _elm_lang$virtual_dom$VirtualDom_Helpers$node('a');
var _elm_lang$virtual_dom$VirtualDom_Helpers$h1 = _elm_lang$virtual_dom$VirtualDom_Helpers$node('h1');
var _elm_lang$virtual_dom$VirtualDom_Helpers$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Helpers$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom_Helpers$Property = {ctor: 'Property'};

var _elm_lang$virtual_dom$VirtualDom_Expando$purple = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(136, 19, 145)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$blue = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(28, 0, 207)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$red = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(196, 26, 22)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$leftPad = function (maybeKey) {
	var _p0 = maybeKey;
	if (_p0.ctor === 'Nothing') {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
			{ctor: '[]'});
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '4ch'},
				_1: {ctor: '[]'}
			});
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow = function (arrow) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$span,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'color', _1: '#777'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '2ch'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'width', _1: '2ch'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(arrow),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			var _p1 = maybeIsClosed;
			if (_p1.ctor === 'Nothing') {
				return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('');
			} else {
				if (_p1._0 === true) {
					return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▸');
				} else {
					return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▾');
				}
			}
		}();
		var _p2 = maybeKey;
		if (_p2.ctor === 'Nothing') {
			return {ctor: '::', _0: arrow, _1: description};
		} else {
			return {
				ctor: '::',
				_0: arrow,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p2._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
						_1: description
					}
				}
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		var _p3 = entries;
		if (_p3.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: length + 1,
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p5 = _p3._0;
			var nextLength = (length + _elm_lang$core$String$length(_p5)) + 1;
			if (_elm_lang$core$Native_Utils.cmp(nextLength, 18) > 0) {
				return {
					ctor: '_Tuple2',
					_0: length + 2,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('…}'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p4 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord, nextLength, ',', _p3._1);
				var finalLength = _p4._0;
				var otherNodes = _p4._1;
				return {
					ctor: '_Tuple2',
					_0: finalLength,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p5),
									_1: {ctor: '[]'}
								}),
							_1: otherNodes
						}
					}
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle = function (str) {
	return (_elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$String$length(str),
		18) < 1) ? str : A2(
		_elm_lang$core$Basics_ops['++'],
		A2(_elm_lang$core$String$left, 8, str),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'...',
			A2(_elm_lang$core$String$right, 8, str)));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp = function (str) {
	return {
		ctor: '_Tuple2',
		_0: _elm_lang$core$String$length(str),
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
			_1: {ctor: '[]'}
		}
	};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$updateIndex = F3(
	function (n, func, list) {
		var _p6 = list;
		if (_p6.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p8 = _p6._1;
			var _p7 = _p6._0;
			return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? {
				ctor: '::',
				_0: func(_p7),
				_1: _p8
			} : {
				ctor: '::',
				_0: _p7,
				_1: A3(_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex, n - 1, func, _p8)
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString = F2(
	function (n, seqType) {
		var _p9 = seqType;
		switch (_p9.ctor) {
			case 'ListSeq':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'List(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
			case 'SetSeq':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Set(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Array(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny = function (value) {
	var _p10 = value;
	switch (_p10.ctor) {
		case 'S':
			var str = _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle(_p10._0);
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$String$length(str),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			};
		case 'Primitive':
			var _p11 = _p10._0;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$String$length(_p11),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p11),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			};
		case 'Sequence':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
				A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
					_elm_lang$core$List$length(_p10._2),
					_p10._0));
		case 'Dictionary':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Dict(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_elm_lang$core$List$length(_p10._1)),
						')')));
		case 'Record':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(_p10._1);
		default:
			if (_p10._2.ctor === '[]') {
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					A2(_elm_lang$core$Maybe$withDefault, 'Unit', _p10._0));
			} else {
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					function () {
						var _p12 = _p10._0;
						if (_p12.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'Tuple(',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$List$length(_p10._2)),
									')'));
						} else {
							return A2(_elm_lang$core$Basics_ops['++'], _p12._0, ' …');
						}
					}());
			}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord = function (record) {
	return _elm_lang$core$Dict$isEmpty(record) ? {
		ctor: '_Tuple2',
		_0: 2,
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{}'),
			_1: {ctor: '[]'}
		}
	} : A3(
		_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp,
		0,
		'{ ',
		_elm_lang$core$Dict$toList(record));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		var _p13 = entries;
		if (_p13.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: length + 2,
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' }'),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p16 = _p13._0._0;
			var _p14 = _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p13._0._1);
			var valueLen = _p14._0;
			var valueNodes = _p14._1;
			var fieldLen = _elm_lang$core$String$length(_p16);
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (_elm_lang$core$Native_Utils.cmp(newLength, 60) > 0) {
				return {
					ctor: '_Tuple2',
					_0: length + 4,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', … }'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p15 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp, newLength, ', ', _p13._1);
				var finalLength = _p15._0;
				var otherNodes = _p15._1;
				return {
					ctor: '_Tuple2',
					_0: finalLength,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p16),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$span,
										{ctor: '[]'},
										valueNodes),
									_1: otherNodes
								}
							}
						}
					}
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny = function (value) {
	var _p17 = value;
	if (_p17.ctor === 'Record') {
		return A3(
			_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord,
			0,
			'{',
			_elm_lang$core$Dict$keys(_p17._1));
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny(value);
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$Constructor = F3(
	function (a, b, c) {
		return {ctor: 'Constructor', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Record = F2(
	function (a, b) {
		return {ctor: 'Record', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Dictionary = F2(
	function (a, b) {
		return {ctor: 'Dictionary', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Sequence = F3(
	function (a, b, c) {
		return {ctor: 'Sequence', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$initHelp = F2(
	function (isOuter, expando) {
		var _p18 = expando;
		switch (_p18.ctor) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var _p20 = _p18._0;
				var _p19 = _p18._2;
				return isOuter ? A3(
					_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
					_p20,
					false,
					A2(
						_elm_lang$core$List$map,
						_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
						_p19)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p19),
					8) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p20, false, _p19) : expando);
			case 'Dictionary':
				var _p23 = _p18._1;
				return isOuter ? A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
					false,
					A2(
						_elm_lang$core$List$map,
						function (_p21) {
							var _p22 = _p21;
							return {
								ctor: '_Tuple2',
								_0: _p22._0,
								_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, _p22._1)
							};
						},
						_p23)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p23),
					8) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, false, _p23) : expando);
			case 'Record':
				var _p25 = _p18._1;
				return isOuter ? A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$Record,
					false,
					A2(
						_elm_lang$core$Dict$map,
						F2(
							function (_p24, v) {
								return A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, v);
							}),
						_p25)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Dict$size(_p25),
					4) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, false, _p25) : expando);
			default:
				var _p27 = _p18._0;
				var _p26 = _p18._2;
				return isOuter ? A3(
					_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
					_p27,
					false,
					A2(
						_elm_lang$core$List$map,
						_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
						_p26)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p26),
					4) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p27, false, _p26) : expando);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$init = function (value) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Expando$initHelp,
		true,
		_elm_lang$virtual_dom$Native_Debug.init(value));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp = F2(
	function (old, $new) {
		var _p28 = {ctor: '_Tuple2', _0: old, _1: $new};
		_v12_6:
		do {
			if (_p28.ctor === '_Tuple2') {
				switch (_p28._1.ctor) {
					case 'S':
						return $new;
					case 'Primitive':
						return $new;
					case 'Sequence':
						if (_p28._0.ctor === 'Sequence') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
								_p28._1._0,
								_p28._0._1,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
						} else {
							break _v12_6;
						}
					case 'Dictionary':
						if (_p28._0.ctor === 'Dictionary') {
							return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, _p28._0._0, _p28._1._1);
						} else {
							break _v12_6;
						}
					case 'Record':
						if (_p28._0.ctor === 'Record') {
							return A2(
								_elm_lang$virtual_dom$VirtualDom_Expando$Record,
								_p28._0._0,
								A2(
									_elm_lang$core$Dict$map,
									_elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp(_p28._0._1),
									_p28._1._1));
						} else {
							break _v12_6;
						}
					default:
						if (_p28._0.ctor === 'Constructor') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
								_p28._1._0,
								_p28._0._1,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
						} else {
							break _v12_6;
						}
				}
			} else {
				break _v12_6;
			}
		} while(false);
		return $new;
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _p29 = A2(_elm_lang$core$Dict$get, key, oldDict);
		if (_p29.ctor === 'Nothing') {
			return value;
		} else {
			return A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p29._0, value);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp = F2(
	function (olds, news) {
		var _p30 = {ctor: '_Tuple2', _0: olds, _1: news};
		if (_p30._0.ctor === '[]') {
			return news;
		} else {
			if (_p30._1.ctor === '[]') {
				return news;
			} else {
				return {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p30._0._0, _p30._1._0),
					_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p30._0._1, _p30._1._1)
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$merge = F2(
	function (value, expando) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp,
			expando,
			_elm_lang$virtual_dom$Native_Debug.init(value));
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$update = F2(
	function (msg, value) {
		var _p31 = value;
		switch (_p31.ctor) {
			case 'S':
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.Expando',
					{
						start: {line: 168, column: 3},
						end: {line: 235, column: 50}
					},
					_p31)('No messages for primitives');
			case 'Primitive':
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.Expando',
					{
						start: {line: 168, column: 3},
						end: {line: 235, column: 50}
					},
					_p31)('No messages for primitives');
			case 'Sequence':
				var _p39 = _p31._2;
				var _p38 = _p31._0;
				var _p37 = _p31._1;
				var _p34 = msg;
				switch (_p34.ctor) {
					case 'Toggle':
						return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p38, !_p37, _p39);
					case 'Index':
						if (_p34._0.ctor === 'None') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
								_p38,
								_p37,
								A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
									_p34._1,
									_elm_lang$virtual_dom$VirtualDom_Expando$update(_p34._2),
									_p39));
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 176, column: 7},
									end: {line: 188, column: 46}
								},
								_p34)('No redirected indexes on sequences');
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 176, column: 7},
								end: {line: 188, column: 46}
							},
							_p34)('No field on sequences');
				}
			case 'Dictionary':
				var _p51 = _p31._1;
				var _p50 = _p31._0;
				var _p40 = msg;
				switch (_p40.ctor) {
					case 'Toggle':
						return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, !_p50, _p51);
					case 'Index':
						var _p48 = _p40._2;
						var _p47 = _p40._1;
						var _p41 = _p40._0;
						switch (_p41.ctor) {
							case 'None':
								return _elm_lang$core$Native_Utils.crashCase(
									'VirtualDom.Expando',
									{
										start: {line: 196, column: 11},
										end: {line: 206, column: 81}
									},
									_p41)('must have redirect for dictionaries');
							case 'Key':
								return A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
									_p50,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p47,
										function (_p43) {
											var _p44 = _p43;
											return {
												ctor: '_Tuple2',
												_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p44._0),
												_1: _p44._1
											};
										},
										_p51));
							default:
								return A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
									_p50,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p47,
										function (_p45) {
											var _p46 = _p45;
											return {
												ctor: '_Tuple2',
												_0: _p46._0,
												_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p46._1)
											};
										},
										_p51));
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 191, column: 7},
								end: {line: 209, column: 50}
							},
							_p40)('no field for dictionaries');
				}
			case 'Record':
				var _p55 = _p31._1;
				var _p54 = _p31._0;
				var _p52 = msg;
				switch (_p52.ctor) {
					case 'Toggle':
						return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, !_p54, _p55);
					case 'Index':
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 212, column: 7},
								end: {line: 220, column: 77}
							},
							_p52)('No index for records');
					default:
						return A2(
							_elm_lang$virtual_dom$VirtualDom_Expando$Record,
							_p54,
							A3(
								_elm_lang$core$Dict$update,
								_p52._0,
								_elm_lang$virtual_dom$VirtualDom_Expando$updateField(_p52._1),
								_p55));
				}
			default:
				var _p61 = _p31._2;
				var _p60 = _p31._0;
				var _p59 = _p31._1;
				var _p56 = msg;
				switch (_p56.ctor) {
					case 'Toggle':
						return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p60, !_p59, _p61);
					case 'Index':
						if (_p56._0.ctor === 'None') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
								_p60,
								_p59,
								A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
									_p56._1,
									_elm_lang$virtual_dom$VirtualDom_Expando$update(_p56._2),
									_p61));
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 223, column: 7},
									end: {line: 235, column: 50}
								},
								_p56)('No redirected indexes on sequences');
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 223, column: 7},
								end: {line: 235, column: 50}
							},
							_p56)('No field for constructors');
				}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$updateField = F2(
	function (msg, maybeExpando) {
		var _p62 = maybeExpando;
		if (_p62.ctor === 'Nothing') {
			return _elm_lang$core$Native_Utils.crashCase(
				'VirtualDom.Expando',
				{
					start: {line: 253, column: 3},
					end: {line: 258, column: 32}
				},
				_p62)('key does not exist');
		} else {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, msg, _p62._0));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Primitive = function (a) {
	return {ctor: 'Primitive', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$S = function (a) {
	return {ctor: 'S', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$ArraySeq = {ctor: 'ArraySeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$SetSeq = {ctor: 'SetSeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$ListSeq = {ctor: 'ListSeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Field = F2(
	function (a, b) {
		return {ctor: 'Field', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Index = F3(
	function (a, b, c) {
		return {ctor: 'Index', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Toggle = {ctor: 'Toggle'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Value = {ctor: 'Value'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Key = {ctor: 'Key'};
var _elm_lang$virtual_dom$VirtualDom_Expando$None = {ctor: 'None'};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$map,
			A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, index),
			A2(
				_elm_lang$virtual_dom$VirtualDom_Expando$view,
				_elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$toString(index)),
				value));
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$view = F2(
	function (maybeKey, expando) {
		var _p64 = expando;
		switch (_p64.ctor) {
			case 'S':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}));
			case 'Primitive':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}));
			case 'Sequence':
				return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewSequence, maybeKey, _p64._0, _p64._1, _p64._2);
			case 'Dictionary':
				return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary, maybeKey, _p64._0, _p64._1);
			case 'Record':
				return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewRecord, maybeKey, _p64._0, _p64._1);
			default:
				return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor, maybeKey, _p64._0, _p64._1, _p64._2);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var _p65 = function () {
			var _p66 = valueList;
			if (_p66.ctor === '[]') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Nothing,
					_1: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{ctor: '[]'},
						{ctor: '[]'})
				};
			} else {
				if (_p66._1.ctor === '[]') {
					var _p67 = _p66._0;
					switch (_p67.ctor) {
						case 'S':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Nothing,
								_1: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'})
							};
						case 'Primitive':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Nothing,
								_1: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'})
							};
						case 'Sequence':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(_p67._2))
							};
						case 'Dictionary':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(_p67._1))
							};
						case 'Record':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(_p67._1))
							};
						default:
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(_p67._2))
							};
					}
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Maybe$Just(isClosed),
						_1: isClosed ? A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{ctor: '[]'},
							{ctor: '[]'}) : _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(valueList)
					};
				}
			}
		}();
		var maybeIsClosed = _p65._0;
		var openHtml = _p65._1;
		var tinyArgs = A2(
			_elm_lang$core$List$map,
			function (_p68) {
				return _elm_lang$core$Tuple$second(
					_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p68));
			},
			valueList);
		var description = function () {
			var _p69 = {ctor: '_Tuple2', _0: maybeName, _1: tinyArgs};
			if (_p69._0.ctor === 'Nothing') {
				if (_p69._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('()'),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('( '),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{ctor: '[]'},
								_p69._1._0),
							_1: A3(
								_elm_lang$core$List$foldr,
								F2(
									function (args, rest) {
										return {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$virtual_dom$VirtualDom_Helpers$span,
													{ctor: '[]'},
													args),
												_1: rest
											}
										};
									}),
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' )'),
									_1: {ctor: '[]'}
								},
								_p69._1._1)
						}
					};
				}
			} else {
				if (_p69._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p69._0._0),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(_elm_lang$core$Basics_ops['++'], _p69._0._0, ' ')),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{ctor: '[]'},
								_p69._1._0),
							_1: A3(
								_elm_lang$core$List$foldr,
								F2(
									function (args, rest) {
										return {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' '),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$virtual_dom$VirtualDom_Helpers$span,
													{ctor: '[]'},
													args),
												_1: rest
											}
										};
									}),
								{ctor: '[]'},
								_p69._1._1)
						}
					};
				}
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter, maybeKey, maybeIsClosed, description)),
				_1: {
					ctor: '::',
					_0: openHtml,
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen = function (valueList) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, valueList));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry, keyValuePairs));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry = F2(
	function (index, _p70) {
		var _p71 = _p70;
		var _p74 = _p71._1;
		var _p73 = _p71._0;
		var _p72 = _p73;
		switch (_p72.ctor) {
			case 'S':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
					A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$view,
						_elm_lang$core$Maybe$Just(_p72._0),
						_p74));
			case 'Primitive':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
					A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$view,
						_elm_lang$core$Maybe$Just(_p72._0),
						_p74));
			default:
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$map,
							A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Key, index),
							A2(
								_elm_lang$virtual_dom$VirtualDom_Expando$view,
								_elm_lang$core$Maybe$Just('key'),
								_p73)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$map,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
								A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$view,
									_elm_lang$core$Maybe$Just('value'),
									_p74)),
							_1: {ctor: '[]'}
						}
					});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen = function (record) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(
			_elm_lang$core$List$map,
			_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry,
			_elm_lang$core$Dict$toList(record)));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry = function (_p75) {
	var _p76 = _p75;
	var _p77 = _p76._0;
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$map,
		_elm_lang$virtual_dom$VirtualDom_Expando$Field(_p77),
		A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$view,
			_elm_lang$core$Maybe$Just(_p77),
			_p76._1));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen = function (values) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, values));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = A2(
			_elm_lang$core$Basics_ops['++'],
			'Dict(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$List$length(keyValuePairs)),
				')'));
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {ctor: '[]'}
						})),
				_1: {
					ctor: '::',
					_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(keyValuePairs),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _p78 = isClosed ? {
			ctor: '_Tuple3',
			_0: _elm_lang$core$Tuple$second(
				_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(record)),
			_1: _elm_lang$virtual_dom$VirtualDom_Helpers$text(''),
			_2: _elm_lang$virtual_dom$VirtualDom_Helpers$text('')
		} : {
			ctor: '_Tuple3',
			_0: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{'),
				_1: {ctor: '[]'}
			},
			_1: _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(record),
			_2: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(
						_elm_lang$core$Maybe$Just(
							{ctor: '_Tuple0'})),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
					_1: {ctor: '[]'}
				})
		};
		var start = _p78._0;
		var middle = _p78._1;
		var end = _p78._2;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						start)),
				_1: {
					ctor: '::',
					_0: middle,
					_1: {
						ctor: '::',
						_0: end,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
			_elm_lang$core$List$length(valueList),
			seqType);
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {ctor: '[]'}
						})),
				_1: {
					ctor: '::',
					_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(valueList),
					_1: {ctor: '[]'}
				}
			});
	});

var _elm_lang$virtual_dom$VirtualDom_Report$some = function (list) {
	return !_elm_lang$core$List$isEmpty(list);
};
var _elm_lang$virtual_dom$VirtualDom_Report$TagChanges = F4(
	function (a, b, c, d) {
		return {removed: a, changed: b, added: c, argsMatch: d};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges = function (argsMatch) {
	return A4(
		_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
		{ctor: '[]'},
		{ctor: '[]'},
		{ctor: '[]'},
		argsMatch);
};
var _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges = function (tagChanges) {
	return _elm_lang$core$Native_Utils.eq(
		tagChanges,
		A4(
			_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			true));
};
var _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged = function (a) {
	return {ctor: 'SomethingChanged', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Report$MessageChanged = F2(
	function (a, b) {
		return {ctor: 'MessageChanged', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$VersionChanged = F2(
	function (a, b) {
		return {ctor: 'VersionChanged', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory = {ctor: 'CorruptHistory'};
var _elm_lang$virtual_dom$VirtualDom_Report$UnionChange = F2(
	function (a, b) {
		return {ctor: 'UnionChange', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$AliasChange = function (a) {
	return {ctor: 'AliasChange', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Report$Fine = {ctor: 'Fine'};
var _elm_lang$virtual_dom$VirtualDom_Report$Risky = {ctor: 'Risky'};
var _elm_lang$virtual_dom$VirtualDom_Report$Impossible = {ctor: 'Impossible'};
var _elm_lang$virtual_dom$VirtualDom_Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			var _p0 = statusList;
			if (_p0.ctor === '[]') {
				return status;
			} else {
				switch (_p0._0.ctor) {
					case 'Impossible':
						return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
					case 'Risky':
						var _v1 = _elm_lang$virtual_dom$VirtualDom_Report$Risky,
							_v2 = _p0._1;
						status = _v1;
						statusList = _v2;
						continue worstCase;
					default:
						var _v3 = status,
							_v4 = _p0._1;
						status = _v3;
						statusList = _v4;
						continue worstCase;
				}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange = function (change) {
	var _p1 = change;
	if (_p1.ctor === 'AliasChange') {
		return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
	} else {
		return ((!_p1._1.argsMatch) || (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.changed) || _elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.removed))) ? _elm_lang$virtual_dom$VirtualDom_Report$Impossible : (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.added) ? _elm_lang$virtual_dom$VirtualDom_Report$Risky : _elm_lang$virtual_dom$VirtualDom_Report$Fine);
	}
};
var _elm_lang$virtual_dom$VirtualDom_Report$evaluate = function (report) {
	var _p2 = report;
	switch (_p2.ctor) {
		case 'CorruptHistory':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		case 'VersionChanged':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		case 'MessageChanged':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		default:
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Report$worstCase,
				_elm_lang$virtual_dom$VirtualDom_Report$Fine,
				A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange, _p2._0));
	}
};

var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict = F2(
	function (f, dict) {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Dict$toList(
				A2(
					_elm_lang$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'args',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p1.args))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'tags',
					_1: A2(
						_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict,
						function (_p2) {
							return _elm_lang$core$Json_Encode$list(
								A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p2));
						},
						_p1.tags)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias = function (_p3) {
	var _p4 = _p3;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'args',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p4.args))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'type',
					_1: _elm_lang$core$Json_Encode$string(_p4.tipe)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes = function (_p5) {
	var _p6 = _p5;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'message',
				_1: _elm_lang$core$Json_Encode$string(_p6.message)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'aliases',
					_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias, _p6.aliases)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'unions',
						_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion, _p6.unions)
					},
					_1: {ctor: '[]'}
				}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions = function (_p7) {
	var _p8 = _p7;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'elm',
				_1: _elm_lang$core$Json_Encode$string(_p8.elm)
			},
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encode = function (_p9) {
	var _p10 = _p9;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'versions',
				_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions(_p10.versions)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'types',
					_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes(_p10.types)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTag = F4(
	function (tag, old, $new, changes) {
		return _elm_lang$core$Native_Utils.eq(old, $new) ? changes : _elm_lang$core$Native_Utils.update(
			changes,
			{
				changed: {ctor: '::', _0: tag, _1: changes.changed}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$addTag = F3(
	function (tag, _p11, changes) {
		return _elm_lang$core$Native_Utils.update(
			changes,
			{
				added: {ctor: '::', _0: tag, _1: changes.added}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$removeTag = F3(
	function (tag, _p12, changes) {
		return _elm_lang$core$Native_Utils.update(
			changes,
			{
				removed: {ctor: '::', _0: tag, _1: changes.removed}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion = F4(
	function (name, old, $new, changes) {
		var tagChanges = A6(
			_elm_lang$core$Dict$merge,
			_elm_lang$virtual_dom$VirtualDom_Metadata$removeTag,
			_elm_lang$virtual_dom$VirtualDom_Metadata$checkTag,
			_elm_lang$virtual_dom$VirtualDom_Metadata$addTag,
			old.tags,
			$new.tags,
			_elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges(
				_elm_lang$core$Native_Utils.eq(old.args, $new.args)));
		return _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges(tagChanges) ? changes : {
			ctor: '::',
			_0: A2(_elm_lang$virtual_dom$VirtualDom_Report$UnionChange, name, tagChanges),
			_1: changes
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias = F4(
	function (name, old, $new, changes) {
		return (_elm_lang$core$Native_Utils.eq(old.tipe, $new.tipe) && _elm_lang$core$Native_Utils.eq(old.args, $new.args)) ? changes : {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Report$AliasChange(name),
			_1: changes
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes = F2(
	function (old, $new) {
		return (!_elm_lang$core$Native_Utils.eq(old.message, $new.message)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$MessageChanged, old.message, $new.message) : _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged(
			A6(
				_elm_lang$core$Dict$merge,
				_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
				_elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion,
				_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
				old.unions,
				$new.unions,
				A6(
					_elm_lang$core$Dict$merge,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					_elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					old.aliases,
					$new.aliases,
					{ctor: '[]'})));
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$check = F2(
	function (old, $new) {
		return (!_elm_lang$core$Native_Utils.eq(old.versions.elm, $new.versions.elm)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$VersionChanged, old.versions.elm, $new.versions.elm) : A2(_elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes, old.types, $new.types);
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem = F2(
	function (tipe, _p13) {
		var _p14 = _p13;
		return A2(_elm_lang$core$String$contains, _p14._1, tipe) ? _elm_lang$core$Maybe$Just(_p14._0) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Metadata = F2(
	function (a, b) {
		return {versions: a, types: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Versions = function (a) {
	return {elm: a};
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions = A2(
	_elm_lang$core$Json_Decode$map,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Versions,
	A2(_elm_lang$core$Json_Decode$field, 'elm', _elm_lang$core$Json_Decode$string));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Types = F3(
	function (a, b, c) {
		return {message: a, aliases: b, unions: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Alias = F2(
	function (a, b) {
		return {args: a, tipe: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Alias,
	A2(
		_elm_lang$core$Json_Decode$field,
		'args',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
	A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Union = F2(
	function (a, b) {
		return {args: a, tags: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Union,
	A2(
		_elm_lang$core$Json_Decode$field,
		'args',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'tags',
		_elm_lang$core$Json_Decode$dict(
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string))));
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes = A4(
	_elm_lang$core$Json_Decode$map3,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Types,
	A2(_elm_lang$core$Json_Decode$field, 'message', _elm_lang$core$Json_Decode$string),
	A2(
		_elm_lang$core$Json_Decode$field,
		'aliases',
		_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'unions',
		_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion)));
var _elm_lang$virtual_dom$VirtualDom_Metadata$decoder = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Metadata,
	A2(_elm_lang$core$Json_Decode$field, 'versions', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions),
	A2(_elm_lang$core$Json_Decode$field, 'types', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Error = F2(
	function (a, b) {
		return {message: a, problems: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType = F2(
	function (a, b) {
		return {name: a, problems: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom = {ctor: 'VirtualDom'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Program = {ctor: 'Program'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Request = {ctor: 'Request'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Socket = {ctor: 'Socket'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Process = {ctor: 'Process'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Task = {ctor: 'Task'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder = {ctor: 'Decoder'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Function = {ctor: 'Function'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$problemTable = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Function, _1: '->'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder, _1: 'Json.Decode.Decoder'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Task, _1: 'Task.Task'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Process, _1: 'Process.Id'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Socket, _1: 'WebSocket.LowLevel.WebSocket'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Request, _1: 'Http.Request'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Program, _1: 'Platform.Program'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Node'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Attribute'},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems = function (tipe) {
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem(tipe),
		_elm_lang$virtual_dom$VirtualDom_Metadata$problemTable);
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases = F3(
	function (name, _p15, list) {
		var _p16 = _p15;
		var _p17 = _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems(_p16.tipe);
		if (_p17.ctor === '[]') {
			return list;
		} else {
			return {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p17),
				_1: list
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions = F3(
	function (name, _p18, list) {
		var _p19 = _p18;
		var _p20 = A2(
			_elm_lang$core$List$concatMap,
			_elm_lang$virtual_dom$VirtualDom_Metadata$findProblems,
			_elm_lang$core$List$concat(
				_elm_lang$core$Dict$values(_p19.tags)));
		if (_p20.ctor === '[]') {
			return list;
		} else {
			return {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p20),
				_1: list
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable = function (_p21) {
	var _p22 = _p21;
	var _p24 = _p22.types;
	var badAliases = A3(
		_elm_lang$core$Dict$foldl,
		_elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases,
		{ctor: '[]'},
		_p24.aliases);
	var _p23 = A3(_elm_lang$core$Dict$foldl, _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions, badAliases, _p24.unions);
	if (_p23.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			A2(_elm_lang$virtual_dom$VirtualDom_Metadata$Error, _p24.message, _p23));
	}
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$decode = function (value) {
	var _p25 = A2(_elm_lang$core$Json_Decode$decodeValue, _elm_lang$virtual_dom$VirtualDom_Metadata$decoder, value);
	if (_p25.ctor === 'Err') {
		return _elm_lang$core$Native_Utils.crashCase(
			'VirtualDom.Metadata',
			{
				start: {line: 229, column: 3},
				end: {line: 239, column: 20}
			},
			_p25)('Compiler is generating bad metadata. Report this at <https://github.com/elm-lang/virtual-dom/issues>.');
	} else {
		var _p28 = _p25._0;
		var _p27 = _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable(_p28);
		if (_p27.ctor === 'Nothing') {
			return _elm_lang$core$Result$Ok(_p28);
		} else {
			return _elm_lang$core$Result$Err(_p27._0);
		}
	}
};

var _elm_lang$virtual_dom$VirtualDom_History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _elm_lang$virtual_dom$Native_Debug.messageToString(msg);
		var className = _elm_lang$core$Native_Utils.eq(currentIndex, index) ? 'messages-entry messages-entry-selected' : 'messages-entry';
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$on,
						'click',
						_elm_lang$core$Json_Decode$succeed(index)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$span,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-content'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$virtual_dom$VirtualDom_Helpers$attribute, 'title', messageName),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(messageName),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-index'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								_elm_lang$core$Basics$toString(index)),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_History$consMsg = F3(
	function (currentIndex, msg, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._0;
		return {
			ctor: '_Tuple2',
			_0: _p2 - 1,
			_1: {
				ctor: '::',
				_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewMessage, currentIndex, _p2, msg),
				_1: _p1._1
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot = F3(
	function (currentIndex, index, _p3) {
		var _p4 = _p3;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			_elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$Array$foldl,
					_elm_lang$virtual_dom$VirtualDom_History$consMsg(currentIndex),
					{
						ctor: '_Tuple2',
						_0: index - 1,
						_1: {ctor: '[]'}
					},
					_p4.messages)));
	});
var _elm_lang$virtual_dom$VirtualDom_History$undone = function (getResult) {
	var _p5 = getResult;
	if (_p5.ctor === 'Done') {
		return {ctor: '_Tuple2', _0: _p5._1, _1: _p5._0};
	} else {
		return _elm_lang$core$Native_Utils.crashCase(
			'VirtualDom.History',
			{
				start: {line: 195, column: 3},
				end: {line: 200, column: 39}
			},
			_p5)('Bug in History.get');
	}
};
var _elm_lang$virtual_dom$VirtualDom_History$elmToJs = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
var _elm_lang$virtual_dom$VirtualDom_History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3(
			_elm_lang$core$Array$foldl,
			F2(
				function (elm, msgs) {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_History$elmToJs(elm),
						_1: msgs
					};
				}),
			allMessages,
			snapshot.messages);
	});
var _elm_lang$virtual_dom$VirtualDom_History$encode = function (_p7) {
	var _p8 = _p7;
	var recentJson = A2(
		_elm_lang$core$List$map,
		_elm_lang$virtual_dom$VirtualDom_History$elmToJs,
		_elm_lang$core$List$reverse(_p8.recent.messages));
	return _elm_lang$core$Json_Encode$list(
		A3(_elm_lang$core$Array$foldr, _elm_lang$virtual_dom$VirtualDom_History$encodeHelp, recentJson, _p8.snapshots));
};
var _elm_lang$virtual_dom$VirtualDom_History$jsToElm = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
var _elm_lang$virtual_dom$VirtualDom_History$initialModel = function (_p9) {
	var _p10 = _p9;
	var _p11 = A2(_elm_lang$core$Array$get, 0, _p10.snapshots);
	if (_p11.ctor === 'Just') {
		return _p11._0.model;
	} else {
		return _p10.recent.model;
	}
};
var _elm_lang$virtual_dom$VirtualDom_History$size = function (history) {
	return history.numMessages;
};
var _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize = 64;
var _elm_lang$virtual_dom$VirtualDom_History$consSnapshot = F3(
	function (currentIndex, snapshot, _p12) {
		var _p13 = _p12;
		var _p14 = _p13._0;
		var nextIndex = _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize;
		var currentIndexHelp = ((_elm_lang$core$Native_Utils.cmp(nextIndex, currentIndex) < 1) && (_elm_lang$core$Native_Utils.cmp(currentIndex, _p14) < 0)) ? currentIndex : -1;
		return {
			ctor: '_Tuple2',
			_0: _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize,
			_1: {
				ctor: '::',
				_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot, currentIndexHelp, _p14, snapshot),
				_1: _p13._1
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots = F2(
	function (currentIndex, snapshots) {
		var highIndex = _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize * _elm_lang$core$Array$length(snapshots);
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			_elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$Array$foldr,
					_elm_lang$virtual_dom$VirtualDom_History$consSnapshot(currentIndex),
					{
						ctor: '_Tuple2',
						_0: highIndex,
						_1: {ctor: '[]'}
					},
					snapshots)));
	});
var _elm_lang$virtual_dom$VirtualDom_History$view = F2(
	function (maybeIndex, _p15) {
		var _p16 = _p15;
		var _p17 = function () {
			var _p18 = maybeIndex;
			if (_p18.ctor === 'Nothing') {
				return {ctor: '_Tuple2', _0: -1, _1: 'debugger-sidebar-messages'};
			} else {
				return {ctor: '_Tuple2', _0: _p18._0, _1: 'debugger-sidebar-messages-paused'};
			}
		}();
		var index = _p17._0;
		var className = _p17._1;
		var oldStuff = A3(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy2, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots, index, _p16.snapshots);
		var newStuff = _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				_elm_lang$virtual_dom$VirtualDom_History$consMsg(index),
				{
					ctor: '_Tuple2',
					_0: _p16.numMessages - 1,
					_1: {ctor: '[]'}
				},
				_p16.recent.messages));
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
				_1: {ctor: '[]'}
			},
			{ctor: '::', _0: oldStuff, _1: newStuff});
	});
var _elm_lang$virtual_dom$VirtualDom_History$History = F3(
	function (a, b, c) {
		return {snapshots: a, recent: b, numMessages: c};
	});
var _elm_lang$virtual_dom$VirtualDom_History$RecentHistory = F3(
	function (a, b, c) {
		return {model: a, messages: b, numMessages: c};
	});
var _elm_lang$virtual_dom$VirtualDom_History$empty = function (model) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_History$History,
		_elm_lang$core$Array$empty,
		A3(
			_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
			model,
			{ctor: '[]'},
			0),
		0);
};
var _elm_lang$virtual_dom$VirtualDom_History$Snapshot = F2(
	function (a, b) {
		return {model: a, messages: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$addRecent = F3(
	function (msg, newModel, _p19) {
		var _p20 = _p19;
		var _p23 = _p20.numMessages;
		var _p22 = _p20.model;
		var _p21 = _p20.messages;
		return _elm_lang$core$Native_Utils.eq(_p23, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$virtual_dom$VirtualDom_History$Snapshot,
					_p22,
					_elm_lang$core$Array$fromList(_p21))),
			_1: A3(
				_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
				newModel,
				{
					ctor: '::',
					_0: msg,
					_1: {ctor: '[]'}
				},
				1)
		} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Nothing,
			_1: A3(
				_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
				_p22,
				{ctor: '::', _0: msg, _1: _p21},
				_p23 + 1)
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$add = F3(
	function (msg, model, _p24) {
		var _p25 = _p24;
		var _p28 = _p25.snapshots;
		var _p27 = _p25.numMessages;
		var _p26 = A3(_elm_lang$virtual_dom$VirtualDom_History$addRecent, msg, model, _p25.recent);
		if (_p26._0.ctor === 'Just') {
			return A3(
				_elm_lang$virtual_dom$VirtualDom_History$History,
				A2(_elm_lang$core$Array$push, _p26._0._0, _p28),
				_p26._1,
				_p27 + 1);
		} else {
			return A3(_elm_lang$virtual_dom$VirtualDom_History$History, _p28, _p26._1, _p27 + 1);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				var msg = _elm_lang$virtual_dom$VirtualDom_History$jsToElm(rawMsg);
				return {
					ctor: '_Tuple2',
					_0: A2(update, msg, _p31),
					_1: A3(_elm_lang$virtual_dom$VirtualDom_History$add, msg, _p31, _p30._1)
				};
			});
		var updateModel = function (rawMsgs) {
			return A3(
				_elm_lang$core$List$foldl,
				addMessage,
				{
					ctor: '_Tuple2',
					_0: initialModel,
					_1: _elm_lang$virtual_dom$VirtualDom_History$empty(initialModel)
				},
				rawMsgs);
		};
		return A2(
			_elm_lang$core$Json_Decode$map,
			updateModel,
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
	});
var _elm_lang$virtual_dom$VirtualDom_History$Done = F2(
	function (a, b) {
		return {ctor: 'Done', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$Stepping = F2(
	function (a, b) {
		return {ctor: 'Stepping', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$getHelp = F3(
	function (update, msg, getResult) {
		var _p32 = getResult;
		if (_p32.ctor === 'Done') {
			return getResult;
		} else {
			var _p34 = _p32._0;
			var _p33 = _p32._1;
			return _elm_lang$core$Native_Utils.eq(_p34, 0) ? A2(
				_elm_lang$virtual_dom$VirtualDom_History$Done,
				msg,
				_elm_lang$core$Tuple$first(
					A2(update, msg, _p33))) : A2(
				_elm_lang$virtual_dom$VirtualDom_History$Stepping,
				_p34 - 1,
				_elm_lang$core$Tuple$first(
					A2(update, msg, _p33)));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_History$get = F3(
	function (update, index, _p35) {
		var _p36 = _p35;
		var _p39 = _p36.recent;
		var snapshotMax = _p36.numMessages - _p39.numMessages;
		if (_elm_lang$core$Native_Utils.cmp(index, snapshotMax) > -1) {
			return _elm_lang$virtual_dom$VirtualDom_History$undone(
				A3(
					_elm_lang$core$List$foldr,
					_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
					A2(_elm_lang$virtual_dom$VirtualDom_History$Stepping, index - snapshotMax, _p39.model),
					_p39.messages));
		} else {
			var _p37 = A2(_elm_lang$core$Array$get, (index / _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) | 0, _p36.snapshots);
			if (_p37.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.History',
					{
						start: {line: 165, column: 7},
						end: {line: 171, column: 95}
					},
					_p37)('UI should only let you ask for real indexes!');
			} else {
				return _elm_lang$virtual_dom$VirtualDom_History$undone(
					A3(
						_elm_lang$core$Array$foldr,
						_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
						A2(
							_elm_lang$virtual_dom$VirtualDom_History$Stepping,
							A2(_elm_lang$core$Basics$rem, index, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize),
							_p37._0.model),
						_p37._0.messages));
			}
		}
	});

var _elm_lang$virtual_dom$VirtualDom_Overlay$styles = A3(
	_elm_lang$virtual_dom$VirtualDom_Helpers$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\n.elm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  pointer-events: none;\n  font-family: \'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif;\n}\n\n.elm-overlay-resume {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  text-align: center;\n  pointer-events: auto;\n  background-color: rgba(200, 200, 200, 0.7);\n}\n\n.elm-overlay-resume-words {\n  position: absolute;\n  top: calc(50% - 40px);\n  font-size: 80px;\n  line-height: 80px;\n  height: 80px;\n  width: 100%;\n}\n\n.elm-mini-controls {\n  position: fixed;\n  bottom: 0;\n  right: 6px;\n  border-radius: 4px;\n  background-color: rgb(61, 61, 61);\n  font-family: monospace;\n  pointer-events: auto;\n}\n\n.elm-mini-controls-button {\n  padding: 6px;\n  cursor: pointer;\n  text-align: center;\n  min-width: 24ch;\n}\n\n.elm-mini-controls-import-export {\n  padding: 4px 0;\n  font-size: 0.8em;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message {\n  position: absolute;\n  width: 600px;\n  height: 100%;\n  padding-left: calc(50% - 300px);\n  padding-right: calc(50% - 300px);\n  background-color: rgba(200, 200, 200, 0.7);\n  pointer-events: auto;\n}\n\n.elm-overlay-message-title {\n  font-size: 36px;\n  height: 80px;\n  background-color: rgb(50, 50, 50);\n  padding-left: 22px;\n  vertical-align: middle;\n  line-height: 80px;\n}\n\n.elm-overlay-message-details {\n  padding: 8px 20px;\n  overflow-y: auto;\n  max-height: calc(100% - 156px);\n  background-color: rgb(61, 61, 61);\n}\n\n.elm-overlay-message-details-type {\n  font-size: 1.5em;\n}\n\n.elm-overlay-message-details ul {\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n.elm-overlay-message-details ul ul {\n  list-style-type: disc;\n  padding-left: 2em;\n}\n\n.elm-overlay-message-details li {\n  margin: 8px 0;\n}\n\n.elm-overlay-message-buttons {\n  height: 60px;\n  line-height: 60px;\n  text-align: right;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message-buttons button {\n  margin-right: 20px;\n}\n\n'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$button = F2(
	function (msg, label) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$span,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport = F3(
	function (props, importMsg, exportMsg) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			props,
			{
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, importMsg, 'Import'),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, exportMsg, 'Export'),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.open),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-button'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Explore History (',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(numMsgs),
									')'))),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-import-export'),
							_1: {ctor: '[]'}
						},
						config.importHistory,
						config.exportHistory),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$addCommas = function (items) {
	var _p0 = items;
	if (_p0.ctor === '[]') {
		return '';
	} else {
		if (_p0._1.ctor === '[]') {
			return _p0._0;
		} else {
			if (_p0._1._1.ctor === '[]') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p0._0,
					A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._1._0));
			} else {
				return A2(
					_elm_lang$core$String$join,
					', ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p0._1,
						{
							ctor: '::',
							_0: A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._0),
							_1: {ctor: '[]'}
						}));
			}
		}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString = function (problem) {
	var _p1 = problem;
	switch (_p1.ctor) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode = function (name) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'code',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(name),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMention = F2(
	function (tags, verbed) {
		var _p2 = A2(
			_elm_lang$core$List$map,
			_elm_lang$virtual_dom$VirtualDom_Overlay$viewCode,
			_elm_lang$core$List$reverse(tags));
		if (_p2.ctor === '[]') {
			return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
		} else {
			if (_p2._1.ctor === '[]') {
				return A3(
					_elm_lang$virtual_dom$VirtualDom_Helpers$node,
					'li',
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
						_1: {
							ctor: '::',
							_0: _p2._0,
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
								_1: {ctor: '[]'}
							}
						}
					});
			} else {
				if (_p2._1._1.ctor === '[]') {
					return A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'li',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
							_1: {
								ctor: '::',
								_0: _p2._1._0,
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' and '),
									_1: {
										ctor: '::',
										_0: _p2._0,
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						});
				} else {
					return A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'li',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$List$intersperse,
									_elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
									_elm_lang$core$List$reverse(_p2._1)),
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', and '),
									_1: {
										ctor: '::',
										_0: _p2._0,
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
											_1: {ctor: '[]'}
										}
									}
								})
						});
				}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange = function (change) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'li',
		{ctor: '[]'},
		function () {
			var _p3 = change;
			if (_p3.ctor === 'AliasChange') {
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'ul',
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.removed, 'Removed '),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.changed, 'Changed '),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.added, 'Added '),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: _p3._1.argsMatch ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Helpers$text('This may be due to the fact that the type variable names changed.'),
							_1: {ctor: '[]'}
						}
					}
				};
			}
		}());
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType = function (_p4) {
	var _p5 = _p4;
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'li',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p5.name),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						' can contain ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$virtual_dom$VirtualDom_Overlay$addCommas(
								A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString, _p5.problems)),
							'.'))),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata = function (_p6) {
	var _p7 = _p6;
	return {
		ctor: '::',
		_0: A3(
			_elm_lang$virtual_dom$VirtualDom_Helpers$node,
			'p',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('The '),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p7.message),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' type of your program cannot be reliably serialized for history files.'),
						_1: {ctor: '[]'}
					}
				}
			}),
		_1: {
			ctor: '::',
			_0: A3(
				_elm_lang$virtual_dom$VirtualDom_Helpers$node,
				'p',
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_elm_lang$virtual_dom$VirtualDom_Helpers$node,
					'ul',
					{ctor: '[]'},
					A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType, _p7.problems)),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'p',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$a,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$href('https://guide.elm-lang.org/types/union_types.html'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('union types'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', in your messages. From there, your '),
									_1: {
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode('update'),
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewReport = F2(
	function (isBad, report) {
		var _p8 = report;
		switch (_p8.ctor) {
			case 'CorruptHistory':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Looks like this history file is corrupt. I cannot understand it.'),
					_1: {ctor: '[]'}
				};
			case 'VersionChanged':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'This history was created with Elm ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p8._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									', but you are using Elm ',
									A2(_elm_lang$core$Basics_ops['++'], _p8._1, ' right now.'))))),
					_1: {ctor: '[]'}
				};
			case 'MessageChanged':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
						A2(_elm_lang$core$Basics_ops['++'], 'To import some other history, the overall message type must', ' be the same. The old history has ')),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._0),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages, but the new program works with '),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._1),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages.'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				};
			default:
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'p',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								isBad ? _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad : _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'ul',
							{ctor: '[]'},
							A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange, _p8._0)),
						_1: {ctor: '[]'}
					}
				};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume = function (config) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume'),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.resume),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume-words'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Click to Resume'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder = A3(
	_elm_lang$core$Json_Decode$map2,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}),
	A2(_elm_lang$core$Json_Decode$field, 'metadata', _elm_lang$virtual_dom$VirtualDom_Metadata$decoder),
	A2(_elm_lang$core$Json_Decode$field, 'history', _elm_lang$core$Json_Decode$value));
var _elm_lang$virtual_dom$VirtualDom_Overlay$close = F2(
	function (msg, state) {
		var _p9 = state;
		switch (_p9.ctor) {
			case 'None':
				return _elm_lang$core$Maybe$Nothing;
			case 'BadMetadata':
				return _elm_lang$core$Maybe$Nothing;
			case 'BadImport':
				return _elm_lang$core$Maybe$Nothing;
			default:
				var _p10 = msg;
				if (_p10.ctor === 'Cancel') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$Maybe$Just(_p9._1);
				}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$isBlocking = function (state) {
	var _p11 = state;
	if (_p11.ctor === 'None') {
		return false;
	} else {
		return true;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Config = F5(
	function (a, b, c, d, e) {
		return {resume: a, open: b, importHistory: c, exportHistory: d, wrap: e};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport = F2(
	function (a, b) {
		return {ctor: 'RiskyImport', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport = function (a) {
	return {ctor: 'BadImport', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport = _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(_elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory);
var _elm_lang$virtual_dom$VirtualDom_Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _p12 = A2(_elm_lang$core$Json_Decode$decodeString, _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder, jsonString);
		if (_p12.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport);
		} else {
			var _p14 = _p12._0._1;
			var report = A2(_elm_lang$virtual_dom$VirtualDom_Metadata$check, _p12._0._0, metadata);
			var _p13 = _elm_lang$virtual_dom$VirtualDom_Report$evaluate(report);
			switch (_p13.ctor) {
				case 'Impossible':
					return _elm_lang$core$Result$Err(
						_elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(report));
				case 'Risky':
					return _elm_lang$core$Result$Err(
						A2(_elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport, report, _p14));
				default:
					return _elm_lang$core$Result$Ok(_p14);
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata = function (a) {
	return {ctor: 'BadMetadata', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata = _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata;
var _elm_lang$virtual_dom$VirtualDom_Overlay$None = {ctor: 'None'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$none = _elm_lang$virtual_dom$VirtualDom_Overlay$None;
var _elm_lang$virtual_dom$VirtualDom_Overlay$Proceed = {ctor: 'Proceed'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Cancel = {ctor: 'Cancel'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons = function (buttons) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-buttons'),
			_1: {ctor: '[]'}
		},
		function () {
			var _p15 = buttons;
			if (_p15.ctor === 'Accept') {
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'button',
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'button',
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Cancel),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'button',
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._1),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				};
			}
		}());
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Message = {ctor: 'Message'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$virtual_dom$VirtualDom_Overlay$Message,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-title'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(title),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$div,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details'),
									_1: {ctor: '[]'}
								},
								details),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									config.wrap,
									_elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons(buttons)),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$Pause = {ctor: 'Pause'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Normal = {ctor: 'Normal'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Choose = F2(
	function (a, b) {
		return {ctor: 'Choose', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$Accept = function (a) {
	return {ctor: 'Accept', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		var _p16 = state;
		switch (_p16.ctor) {
			case 'None':
				var miniControls = isOpen ? {ctor: '[]'} : {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls, config, numMsgs),
					_1: {ctor: '[]'}
				};
				return {
					ctor: '_Tuple2',
					_0: isPaused ? _elm_lang$virtual_dom$VirtualDom_Overlay$Pause : _elm_lang$virtual_dom$VirtualDom_Overlay$Normal,
					_1: (isPaused && (!isOpen)) ? {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume(config),
						_1: miniControls
					} : miniControls
				};
			case 'BadMetadata':
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata(_p16._0),
					_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
			case 'BadImport':
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, true, _p16._0),
					_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
			default:
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Warning',
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, false, _p16._0),
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		var _p17 = A5(_elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp, config, isPaused, isOpen, numMsgs, state);
		var block = _p17._0;
		var nodes = _p17._1;
		return {
			ctor: '_Tuple2',
			_0: block,
			_1: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay'),
					_1: {ctor: '[]'}
				},
				{ctor: '::', _0: _elm_lang$virtual_dom$VirtualDom_Overlay$styles, _1: nodes})
		};
	});

var _elm_lang$virtual_dom$VirtualDom_Debug$styles = A3(
	_elm_lang$virtual_dom$VirtualDom_Helpers$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 24px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$button = F2(
	function (msg, label) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$span,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel = function (state) {
	var _p0 = state;
	if (_p0.ctor === 'Running') {
		return _p0._0;
	} else {
		return _p0._2;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata = F2(
	function (model, func) {
		var _p1 = model.metadata;
		if (_p1.ctor === 'Ok') {
			return func(_p1._0);
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata(_p1._0)
					}),
				{ctor: '[]'});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Model = F6(
	function (a, b, c, d, e, f) {
		return {history: a, state: b, expando: c, metadata: d, overlay: e, isDebuggerOpen: f};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Paused = F3(
	function (a, b, c) {
		return {ctor: 'Paused', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Running = function (a) {
	return {ctor: 'Running', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory = F3(
	function (rawHistory, userUpdate, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return _elm_lang$core$Tuple$first(
					A2(userUpdate, msg, userModel));
			});
		var initialUserModel = _elm_lang$virtual_dom$VirtualDom_History$initialModel(model.history);
		var decoder = A2(_elm_lang$virtual_dom$VirtualDom_History$decoder, initialUserModel, pureUserUpdate);
		var _p2 = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, rawHistory);
		if (_p2.ctor === 'Err') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport}),
				{ctor: '[]'});
		} else {
			var _p3 = _p2._0._0;
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						history: _p2._0._1,
						state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p3),
						expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p3),
						overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none
					}),
				{ctor: '[]'});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg = function (a) {
	return {ctor: 'OverlayMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$Upload = function (a) {
	return {ctor: 'Upload', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$upload = A2(_elm_lang$core$Task$perform, _elm_lang$virtual_dom$VirtualDom_Debug$Upload, _elm_lang$virtual_dom$Native_Debug.upload);
var _elm_lang$virtual_dom$VirtualDom_Debug$Export = {ctor: 'Export'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Import = {ctor: 'Import'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Down = {ctor: 'Down'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Up = {ctor: 'Up'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Close = {ctor: 'Close'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Open = {ctor: 'Open'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$Resume = {ctor: 'Resume'};
var _elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig = {resume: _elm_lang$virtual_dom$VirtualDom_Debug$Resume, open: _elm_lang$virtual_dom$VirtualDom_Debug$Open, importHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Import, exportHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Export, wrap: _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewIn = function (_p4) {
	var _p5 = _p4;
	var isPaused = function () {
		var _p6 = _p5.state;
		if (_p6.ctor === 'Running') {
			return false;
		} else {
			return true;
		}
	}();
	return A5(
		_elm_lang$virtual_dom$VirtualDom_Overlay$view,
		_elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig,
		isPaused,
		_p5.isDebuggerOpen,
		_elm_lang$virtual_dom$VirtualDom_History$size(_p5.history),
		_p5.overlay);
};
var _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton = A2(
	_elm_lang$virtual_dom$VirtualDom_Helpers$div,
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Debug$Resume),
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-resume'),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Resume'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton = function (maybeIndex) {
	var _p7 = maybeIndex;
	if (_p7.ctor === 'Nothing') {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Debug$playButton = function (maybeIndex) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton(maybeIndex),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-import-export'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Import, 'Import'),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Export, 'Export'),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar = F2(
	function (state, history) {
		var maybeIndex = function () {
			var _p8 = state;
			if (_p8.ctor === 'Running') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(_p8._0);
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					_elm_lang$virtual_dom$VirtualDom_Debug$Jump,
					A2(_elm_lang$virtual_dom$VirtualDom_History$view, maybeIndex, history)),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Debug$playButton(maybeIndex),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg = function (a) {
	return {ctor: 'ExpandoMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewOut = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('debugger'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Debug$styles,
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar, _p10.state, _p10.history),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$map,
						_elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg,
						A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('values'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$view, _elm_lang$core$Maybe$Nothing, _p10.expando),
								_1: {ctor: '[]'}
							})),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapInit = F2(
	function (metadata, _p11) {
		var _p12 = _p11;
		var _p13 = _p12._0;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			{
				history: _elm_lang$virtual_dom$VirtualDom_History$empty(_p13),
				state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p13),
				expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p13),
				metadata: _elm_lang$virtual_dom$VirtualDom_Metadata$decode(metadata),
				overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none,
				isDebuggerOpen: false
			},
			{
				ctor: '::',
				_0: A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, _p12._1),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs = F2(
	function (userSubscriptions, _p14) {
		var _p15 = _p14;
		return A2(
			_elm_lang$core$Platform_Sub$map,
			_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
			userSubscriptions(
				_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p15.state)));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapView = F2(
	function (userView, _p16) {
		var _p17 = _p16;
		var currentModel = function () {
			var _p18 = _p17.state;
			if (_p18.ctor === 'Running') {
				return _p18._0;
			} else {
				return _p18._1;
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$map,
			_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
			userView(currentModel));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$NoOp = {ctor: 'NoOp'};
var _elm_lang$virtual_dom$VirtualDom_Debug$download = F2(
	function (metadata, history) {
		var json = _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'metadata',
					_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encode(metadata)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'history',
						_1: _elm_lang$virtual_dom$VirtualDom_History$encode(history)
					},
					_1: {ctor: '[]'}
				}
			});
		var historyLength = _elm_lang$virtual_dom$VirtualDom_History$size(history);
		return A2(
			_elm_lang$core$Task$perform,
			function (_p19) {
				return _elm_lang$virtual_dom$VirtualDom_Debug$NoOp;
			},
			A2(_elm_lang$virtual_dom$Native_Debug.download, historyLength, json));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$runIf = F2(
	function (bool, task) {
		return bool ? A2(
			_elm_lang$core$Task$perform,
			_elm_lang$core$Basics$always(_elm_lang$virtual_dom$VirtualDom_Debug$NoOp),
			task) : _elm_lang$core$Platform_Cmd$none;
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg = F4(
	function (userUpdate, scrollTask, userMsg, _p20) {
		var _p21 = _p20;
		var _p25 = _p21.state;
		var _p24 = _p21;
		var userModel = _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p25);
		var newHistory = A3(_elm_lang$virtual_dom$VirtualDom_History$add, userMsg, userModel, _p21.history);
		var _p22 = A2(userUpdate, userMsg, userModel);
		var newUserModel = _p22._0;
		var userCmds = _p22._1;
		var commands = A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, userCmds);
		var _p23 = _p25;
		if (_p23.ctor === 'Running') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					_p24,
					{
						history: newHistory,
						state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(newUserModel),
						expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, newUserModel, _p21.expando)
					}),
				{
					ctor: '::',
					_0: commands,
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, _p24.isDebuggerOpen, scrollTask),
						_1: {ctor: '[]'}
					}
				});
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					_p24,
					{
						history: newHistory,
						state: A3(_elm_lang$virtual_dom$VirtualDom_Debug$Paused, _p23._0, _p23._1, newUserModel)
					}),
				{
					ctor: '::',
					_0: commands,
					_1: {ctor: '[]'}
				});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate = F4(
	function (userUpdate, scrollTask, msg, model) {
		wrapUpdate:
		while (true) {
			var _p26 = msg;
			switch (_p26.ctor) {
				case 'NoOp':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				case 'UserMsg':
					return A4(_elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg, userUpdate, scrollTask, _p26._0, model);
				case 'ExpandoMsg':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p26._0, model.expando)
							}),
						{ctor: '[]'});
				case 'Resume':
					var _p27 = model.state;
					if (_p27.ctor === 'Running') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					} else {
						var _p28 = _p27._2;
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p28),
									expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, _p28, model.expando)
								}),
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, model.isDebuggerOpen, scrollTask),
								_1: {ctor: '[]'}
							});
					}
				case 'Jump':
					var _p30 = _p26._0;
					var _p29 = A3(_elm_lang$virtual_dom$VirtualDom_History$get, userUpdate, _p30, model.history);
					var indexModel = _p29._0;
					var indexMsg = _p29._1;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								state: A3(
									_elm_lang$virtual_dom$VirtualDom_Debug$Paused,
									_p30,
									indexModel,
									_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(model.state)),
								expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, indexModel, model.expando)
							}),
						{ctor: '[]'});
				case 'Open':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isDebuggerOpen: true}),
						{ctor: '[]'});
				case 'Close':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isDebuggerOpen: false}),
						{ctor: '[]'});
				case 'Up':
					var index = function () {
						var _p31 = model.state;
						if (_p31.ctor === 'Paused') {
							return _p31._0;
						} else {
							return _elm_lang$virtual_dom$VirtualDom_History$size(model.history);
						}
					}();
					if (_elm_lang$core$Native_Utils.cmp(index, 0) > 0) {
						var _v17 = userUpdate,
							_v18 = scrollTask,
							_v19 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(index - 1),
							_v20 = model;
						userUpdate = _v17;
						scrollTask = _v18;
						msg = _v19;
						model = _v20;
						continue wrapUpdate;
					} else {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					}
				case 'Down':
					var _p32 = model.state;
					if (_p32.ctor === 'Running') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					} else {
						var _p33 = _p32._0;
						if (_elm_lang$core$Native_Utils.eq(
							_p33,
							_elm_lang$virtual_dom$VirtualDom_History$size(model.history) - 1)) {
							var _v22 = userUpdate,
								_v23 = scrollTask,
								_v24 = _elm_lang$virtual_dom$VirtualDom_Debug$Resume,
								_v25 = model;
							userUpdate = _v22;
							scrollTask = _v23;
							msg = _v24;
							model = _v25;
							continue wrapUpdate;
						} else {
							var _v26 = userUpdate,
								_v27 = scrollTask,
								_v28 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(_p33 + 1),
								_v29 = model;
							userUpdate = _v26;
							scrollTask = _v27;
							msg = _v28;
							model = _v29;
							continue wrapUpdate;
						}
					}
				case 'Import':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (_p34) {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Debug$upload,
									_1: {ctor: '[]'}
								});
						});
				case 'Export':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (metadata) {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$download, metadata, model.history),
									_1: {ctor: '[]'}
								});
						});
				case 'Upload':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (metadata) {
							var _p35 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$assessImport, metadata, _p26._0);
							if (_p35.ctor === 'Err') {
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									_elm_lang$core$Native_Utils.update(
										model,
										{overlay: _p35._0}),
									{ctor: '[]'});
							} else {
								return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p35._0, userUpdate, model);
							}
						});
				default:
					var _p36 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$close, _p26._0, model.overlay);
					if (_p36.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none}),
							{ctor: '[]'});
					} else {
						return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p36._0, userUpdate, model);
					}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrap = F2(
	function (metadata, _p37) {
		var _p38 = _p37;
		return {
			init: A2(_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit, metadata, _p38.init),
			view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p38.view),
			update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p38.update),
			viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
			viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
			subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p38.subscriptions)
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags = F2(
	function (metadata, _p39) {
		var _p40 = _p39;
		return {
			init: function (flags) {
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit,
					metadata,
					_p40.init(flags));
			},
			view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p40.view),
			update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p40.update),
			viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
			viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
			subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p40.subscriptions)
		};
	});

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$keyboard$Keyboard$onSelfMsg = F3(
	function (router, _p0, state) {
		var _p1 = _p0;
		var _p2 = A2(_elm_lang$core$Dict$get, _p1.category, state);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p1.keyCode));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				},
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p2._0.taggers)));
		}
	});
var _elm_lang$keyboard$Keyboard_ops = _elm_lang$keyboard$Keyboard_ops || {};
_elm_lang$keyboard$Keyboard_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p4) {
				return task2;
			},
			task1);
	});
var _elm_lang$keyboard$Keyboard$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$keyboard$Keyboard$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p5 = maybeValues;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p5._0});
		}
	});
var _elm_lang$keyboard$Keyboard$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p6 = subs;
			if (_p6.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p6._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p6._0._0,
					_elm_lang$keyboard$Keyboard$categorizeHelpHelp(_p6._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$keyboard$Keyboard$categorize = function (subs) {
	return A2(_elm_lang$keyboard$Keyboard$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$keyboard$Keyboard$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$keyboard$Keyboard$subscription = _elm_lang$core$Native_Platform.leaf('Keyboard');
var _elm_lang$keyboard$Keyboard$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$keyboard$Keyboard$Msg = F2(
	function (a, b) {
		return {category: a, keyCode: b};
	});
var _elm_lang$keyboard$Keyboard$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(
								A3(
									_elm_lang$dom$Dom_LowLevel$onDocument,
									category,
									_elm_lang$keyboard$Keyboard$keyCode,
									function (_p7) {
										return A2(
											_elm_lang$core$Platform$sendToSelf,
											router,
											A2(_elm_lang$keyboard$Keyboard$Msg, category, _p7));
									})));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p8, taggers, task) {
				var _p9 = _p8;
				return A2(
					_elm_lang$core$Task$map,
					A2(
						_elm_lang$core$Dict$insert,
						category,
						A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, _p9.pid)),
					task);
			});
		var leftStep = F3(
			function (category, _p10, task) {
				var _p11 = _p10;
				return A2(
					_elm_lang$keyboard$Keyboard_ops['&>'],
					_elm_lang$core$Process$kill(_p11.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$keyboard$Keyboard$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$keyboard$Keyboard$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$keyboard$Keyboard$presses = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keypress', tagger));
};
var _elm_lang$keyboard$Keyboard$downs = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keydown', tagger));
};
var _elm_lang$keyboard$Keyboard$ups = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keyup', tagger));
};
var _elm_lang$keyboard$Keyboard$subMap = F2(
	function (func, _p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$keyboard$Keyboard$MySub,
			_p13._0,
			function (_p14) {
				return func(
					_p13._1(_p14));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Keyboard'] = {pkg: 'elm-lang/keyboard', init: _elm_lang$keyboard$Keyboard$init, onEffects: _elm_lang$keyboard$Keyboard$onEffects, onSelfMsg: _elm_lang$keyboard$Keyboard$onSelfMsg, tag: 'sub', subMap: _elm_lang$keyboard$Keyboard$subMap};

var _elm_tools$parser_primitives$Native_ParserPrimitives = function() {


// STRINGS

function isSubString(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var bigLength = bigString.length - offset;

	if (bigLength < smallLength)
	{
		return tuple3(-1, row, col);
	}

	for (var i = 0; i < smallLength; i++)
	{
		var char = smallString[i];

		if (char !== bigString[offset + i])
		{
			return tuple3(-1, row, col);
		}

		// if it is a two word character
		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			i++
			if (smallString[i] !== bigString[offset + i])
			{
				return tuple3(-1, row, col);
			}
			col++;
			continue;
		}

		// if it is a newline
		if (char === '\n')
		{
			row++;
			col = 1;
			continue;
		}

		// if it is a one word character
		col++
	}

	return tuple3(offset + smallLength, row, col);
}

function tuple3(a, b, c)
{
	return { ctor: '_Tuple3', _0: a, _1: b, _2: c };
}


// CHARS

var mkChar = _elm_lang$core$Native_Utils.chr;

function isSubChar(predicate, offset, string)
{
	if (offset >= string.length)
	{
		return -1;
	}

	if ((string.charCodeAt(offset) & 0xF800) === 0xD800)
	{
		return predicate(mkChar(string.substr(offset, 2)))
			? offset + 2
			: -1;
	}

	var char = string[offset];

	return predicate(mkChar(char))
		? ((char === '\n') ? -2 : (offset + 1))
		: -1;
}


// FIND STRING

function findSubString(before, smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);

	if (newOffset === -1)
	{
		return tuple3(-1, row, col);
	}

	var scanTarget = before ? newOffset	: newOffset + smallString.length;

	while (offset < scanTarget)
	{
		var char = bigString[offset];

		if (char === '\n')
		{
			offset++;
			row++;
			col = 1;
			continue;
		}

		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			offset += 2;
			col++;
			continue;
		}

		offset++;
		col++;
	}

	return tuple3(offset, row, col);
}


return {
	isSubString: F5(isSubString),
	isSubChar: F3(isSubChar),
	findSubString: F6(findSubString)
};

}();

var _elm_tools$parser_primitives$ParserPrimitives$findSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.findSubString;
var _elm_tools$parser_primitives$ParserPrimitives$isSubChar = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubChar;
var _elm_tools$parser_primitives$ParserPrimitives$isSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubString;

var _elm_tools$parser$Parser_Internal$isPlusOrMinus = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('+')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _elm_tools$parser$Parser_Internal$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser_Internal$isE = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('e')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('E'));
};
var _elm_tools$parser$Parser_Internal$isDot = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _elm_tools$parser$Parser_Internal$isBadIntEnd = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (_elm_lang$core$Char$isUpper($char) || (_elm_lang$core$Char$isLower($char) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'))));
};
var _elm_tools$parser$Parser_Internal$chomp = F3(
	function (isGood, offset, source) {
		chomp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.cmp(newOffset, 0) < 0) {
				return offset;
			} else {
				var _v0 = isGood,
					_v1 = newOffset,
					_v2 = source;
				isGood = _v0;
				offset = _v1;
				source = _v2;
				continue chomp;
			}
		}
	});
var _elm_tools$parser$Parser_Internal$chompDigits = F3(
	function (isValidDigit, offset, source) {
		var newOffset = A3(_elm_tools$parser$Parser_Internal$chomp, isValidDigit, offset, source);
		return _elm_lang$core$Native_Utils.eq(newOffset, offset) ? _elm_lang$core$Result$Err(newOffset) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, newOffset, source),
			-1)) ? _elm_lang$core$Result$Err(newOffset) : _elm_lang$core$Result$Ok(newOffset));
	});
var _elm_tools$parser$Parser_Internal$chompExp = F2(
	function (offset, source) {
		var eOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isE, offset, source);
		if (_elm_lang$core$Native_Utils.eq(eOffset, -1)) {
			return _elm_lang$core$Result$Ok(offset);
		} else {
			var opOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isPlusOrMinus, eOffset, source);
			var expOffset = _elm_lang$core$Native_Utils.eq(opOffset, -1) ? eOffset : opOffset;
			return (!_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isZero, expOffset, source),
				-1)) ? _elm_lang$core$Result$Err(expOffset) : (_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_lang$core$Char$isDigit, expOffset, source),
				-1) ? _elm_lang$core$Result$Err(expOffset) : A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, expOffset, source));
		}
	});
var _elm_tools$parser$Parser_Internal$chompDotAndExp = F2(
	function (offset, source) {
		var dotOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isDot, offset, source);
		return _elm_lang$core$Native_Utils.eq(dotOffset, -1) ? A2(_elm_tools$parser$Parser_Internal$chompExp, offset, source) : A2(
			_elm_tools$parser$Parser_Internal$chompExp,
			A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, dotOffset, source),
			source);
	});
var _elm_tools$parser$Parser_Internal$State = F6(
	function (a, b, c, d, e, f) {
		return {source: a, offset: b, indent: c, context: d, row: e, col: f};
	});
var _elm_tools$parser$Parser_Internal$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_tools$parser$Parser_Internal$Bad = F2(
	function (a, b) {
		return {ctor: 'Bad', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_Internal$Good = F2(
	function (a, b) {
		return {ctor: 'Good', _0: a, _1: b};
	});

var _elm_tools$parser$Parser$changeContext = F2(
	function (newContext, _p0) {
		var _p1 = _p0;
		return {source: _p1.source, offset: _p1.offset, indent: _p1.indent, context: newContext, row: _p1.row, col: _p1.col};
	});
var _elm_tools$parser$Parser$sourceMap = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p4) {
				var _p5 = _p4;
				var _p6 = _p3._0(_p5);
				if (_p6.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p6._0, _p6._1);
				} else {
					var _p7 = _p6._1;
					var subString = A3(_elm_lang$core$String$slice, _p5.offset, _p7.offset, _p5.source);
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						A2(func, subString, _p6._0),
						_p7);
				}
			});
	});
var _elm_tools$parser$Parser$source = function (parser) {
	return A2(_elm_tools$parser$Parser$sourceMap, _elm_lang$core$Basics$always, parser);
};
var _elm_tools$parser$Parser$badFloatMsg = 'The `Parser.float` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$floatHelp = F3(
	function (offset, zeroOffset, source) {
		if (_elm_lang$core$Native_Utils.cmp(zeroOffset, 0) > -1) {
			return A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, zeroOffset, source);
		} else {
			var dotOffset = A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, offset, source);
			var result = A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, dotOffset, source);
			var _p8 = result;
			if (_p8.ctor === 'Err') {
				return result;
			} else {
				var _p9 = _p8._0;
				return _elm_lang$core$Native_Utils.eq(_p9, offset) ? _elm_lang$core$Result$Err(_p9) : result;
			}
		}
	});
var _elm_tools$parser$Parser$badIntMsg = 'The `Parser.int` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$isX = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('x'));
};
var _elm_tools$parser$Parser$isO = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('o'));
};
var _elm_tools$parser$Parser$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser$intHelp = F3(
	function (offset, zeroOffset, source) {
		return _elm_lang$core$Native_Utils.eq(zeroOffset, -1) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, offset, source) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isX, zeroOffset, source),
			-1)) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isHexDigit, offset + 2, source) : (_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, zeroOffset, source),
			-1) ? _elm_lang$core$Result$Ok(zeroOffset) : _elm_lang$core$Result$Err(zeroOffset)));
	});
var _elm_tools$parser$Parser$token = F2(
	function (makeProblem, str) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p13 = _p11.source;
				var _p12 = A5(_elm_tools$parser_primitives$ParserPrimitives$isSubString, str, _p11.offset, _p11.row, _p11.col, _p13);
				var newOffset = _p12._0;
				var newRow = _p12._1;
				var newCol = _p12._2;
				return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
					_elm_tools$parser$Parser_Internal$Bad,
					makeProblem(str),
					_p11) : A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: _p13, offset: newOffset, indent: _p11.indent, context: _p11.context, row: newRow, col: newCol});
			});
	});
var _elm_tools$parser$Parser$delayedCommitMap = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p18 = _p16._0(state1);
				if (_p18.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p18._0, state1);
				} else {
					var _p22 = _p18._1;
					var _p19 = _p17._0(_p22);
					if (_p19.ctor === 'Good') {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p18._0, _p19._0),
							_p19._1);
					} else {
						var _p21 = _p19._0;
						var _p20 = _p19._1;
						return (_elm_lang$core$Native_Utils.eq(_p22.row, _p20.row) && _elm_lang$core$Native_Utils.eq(_p22.col, _p20.col)) ? A2(_elm_tools$parser$Parser_Internal$Bad, _p21, state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p21, _p20);
					}
				}
			});
	});
var _elm_tools$parser$Parser$delayedCommit = F2(
	function (filler, realStuff) {
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			F2(
				function (_p23, v) {
					return v;
				}),
			filler,
			realStuff);
	});
var _elm_tools$parser$Parser$lazy = function (thunk) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			var _p24 = thunk(
				{ctor: '_Tuple0'});
			var parse = _p24._0;
			return parse(state);
		});
};
var _elm_tools$parser$Parser$andThen = F2(
	function (callback, _p25) {
		var _p26 = _p25;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p27 = _p26._0(state1);
				if (_p27.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p27._0, _p27._1);
				} else {
					var _p28 = callback(_p27._0);
					var parseB = _p28._0;
					return parseB(_p27._1);
				}
			});
	});
var _elm_tools$parser$Parser$apply = F2(
	function (f, a) {
		return f(a);
	});
var _elm_tools$parser$Parser$map2 = F3(
	function (func, _p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p33 = _p31._0(state1);
				if (_p33.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p33._0, _p33._1);
				} else {
					var _p34 = _p32._0(_p33._1);
					if (_p34.ctor === 'Bad') {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _p34._0, _p34._1);
					} else {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p33._0, _p34._0),
							_p34._1);
					}
				}
			});
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|='] = F2(
	function (parseFunc, parseArg) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser$apply, parseFunc, parseArg);
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|.'] = F2(
	function (keepParser, ignoreParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_lang$core$Basics$always, keepParser, ignoreParser);
	});
var _elm_tools$parser$Parser$map = F2(
	function (func, _p35) {
		var _p36 = _p35;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p37 = _p36._0(state1);
				if (_p37.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						func(_p37._0),
						_p37._1);
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p37._0, _p37._1);
				}
			});
	});
var _elm_tools$parser$Parser$succeed = function (a) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(_elm_tools$parser$Parser_Internal$Good, a, state);
		});
};
var _elm_tools$parser$Parser$run = F2(
	function (_p38, source) {
		var _p39 = _p38;
		var initialState = {
			source: source,
			offset: 0,
			indent: 1,
			context: {ctor: '[]'},
			row: 1,
			col: 1
		};
		var _p40 = _p39._0(initialState);
		if (_p40.ctor === 'Good') {
			return _elm_lang$core$Result$Ok(_p40._0);
		} else {
			return _elm_lang$core$Result$Err(
				{row: _p40._1.row, col: _p40._1.col, source: source, problem: _p40._0, context: _p40._1.context});
		}
	});
var _elm_tools$parser$Parser$Error = F5(
	function (a, b, c, d, e) {
		return {row: a, col: b, source: c, problem: d, context: e};
	});
var _elm_tools$parser$Parser$Context = F3(
	function (a, b, c) {
		return {row: a, col: b, description: c};
	});
var _elm_tools$parser$Parser$inContext = F2(
	function (ctx, _p41) {
		var _p42 = _p41;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p43) {
				var _p44 = _p43;
				var _p46 = _p44.context;
				var state1 = A2(
					_elm_tools$parser$Parser$changeContext,
					{
						ctor: '::',
						_0: A3(_elm_tools$parser$Parser$Context, _p44.row, _p44.col, ctx),
						_1: _p46
					},
					_p44);
				var _p45 = _p42._0(state1);
				if (_p45.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						_p45._0,
						A2(_elm_tools$parser$Parser$changeContext, _p46, _p45._1));
				} else {
					return _p45;
				}
			});
	});
var _elm_tools$parser$Parser$Fail = function (a) {
	return {ctor: 'Fail', _0: a};
};
var _elm_tools$parser$Parser$fail = function (message) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$Fail(message),
				state);
		});
};
var _elm_tools$parser$Parser$ExpectingClosing = function (a) {
	return {ctor: 'ExpectingClosing', _0: a};
};
var _elm_tools$parser$Parser$ignoreUntil = function (str) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (_p47) {
			var _p48 = _p47;
			var _p50 = _p48.source;
			var _p49 = A6(_elm_tools$parser_primitives$ParserPrimitives$findSubString, false, str, _p48.offset, _p48.row, _p48.col, _p50);
			var newOffset = _p49._0;
			var newRow = _p49._1;
			var newCol = _p49._2;
			return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$ExpectingClosing(str),
				_p48) : A2(
				_elm_tools$parser$Parser_Internal$Good,
				{ctor: '_Tuple0'},
				{source: _p50, offset: newOffset, indent: _p48.indent, context: _p48.context, row: newRow, col: newCol});
		});
};
var _elm_tools$parser$Parser$ExpectingVariable = {ctor: 'ExpectingVariable'};
var _elm_tools$parser$Parser$ExpectingKeyword = function (a) {
	return {ctor: 'ExpectingKeyword', _0: a};
};
var _elm_tools$parser$Parser$keyword = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingKeyword, str);
};
var _elm_tools$parser$Parser$ExpectingSymbol = function (a) {
	return {ctor: 'ExpectingSymbol', _0: a};
};
var _elm_tools$parser$Parser$symbol = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingSymbol, str);
};
var _elm_tools$parser$Parser$ExpectingEnd = {ctor: 'ExpectingEnd'};
var _elm_tools$parser$Parser$end = _elm_tools$parser$Parser_Internal$Parser(
	function (state) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(state.source),
			state.offset) ? A2(
			_elm_tools$parser$Parser_Internal$Good,
			{ctor: '_Tuple0'},
			state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingEnd, state);
	});
var _elm_tools$parser$Parser$BadRepeat = {ctor: 'BadRepeat'};
var _elm_tools$parser$Parser$repeatExactly = F4(
	function (n, parse, revList, state1) {
		repeatExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1);
			} else {
				var _p51 = parse(state1);
				if (_p51.ctor === 'Good') {
					var _p52 = _p51._1;
					if (_elm_lang$core$Native_Utils.eq(state1.row, _p52.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p52.col)) {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p52);
					} else {
						var _v25 = n - 1,
							_v26 = parse,
							_v27 = {ctor: '::', _0: _p51._0, _1: revList},
							_v28 = _p52;
						n = _v25;
						parse = _v26;
						revList = _v27;
						state1 = _v28;
						continue repeatExactly;
					}
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p51._0, _p51._1);
				}
			}
		}
	});
var _elm_tools$parser$Parser$repeatAtLeast = F4(
	function (n, parse, revList, state1) {
		repeatAtLeast:
		while (true) {
			var _p53 = parse(state1);
			if (_p53.ctor === 'Good') {
				var _p54 = _p53._1;
				if (_elm_lang$core$Native_Utils.eq(state1.row, _p54.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p54.col)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p54);
				} else {
					var _v30 = n - 1,
						_v31 = parse,
						_v32 = {ctor: '::', _0: _p53._0, _1: revList},
						_v33 = _p54;
					n = _v30;
					parse = _v31;
					revList = _v32;
					state1 = _v33;
					continue repeatAtLeast;
				}
			} else {
				var _p55 = _p53._1;
				return (_elm_lang$core$Native_Utils.eq(state1.row, _p55.row) && (_elm_lang$core$Native_Utils.eq(state1.col, _p55.col) && (_elm_lang$core$Native_Utils.cmp(n, 0) < 1))) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p53._0, _p55);
			}
		}
	});
var _elm_tools$parser$Parser$repeat = F2(
	function (count, _p56) {
		var _p57 = _p56;
		var _p59 = _p57._0;
		var _p58 = count;
		if (_p58.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatExactly,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatAtLeast,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		}
	});
var _elm_tools$parser$Parser$ignoreExactly = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
			} else {
				var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
				if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
					return A2(
						_elm_tools$parser$Parser_Internal$Bad,
						_elm_tools$parser$Parser$BadRepeat,
						{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
				} else {
					if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
						var _v36 = n - 1,
							_v37 = predicate,
							_v38 = source,
							_v39 = offset + 1,
							_v40 = indent,
							_v41 = context,
							_v42 = row + 1,
							_v43 = 1;
						n = _v36;
						predicate = _v37;
						source = _v38;
						offset = _v39;
						indent = _v40;
						context = _v41;
						row = _v42;
						col = _v43;
						continue ignoreExactly;
					} else {
						var _v44 = n - 1,
							_v45 = predicate,
							_v46 = source,
							_v47 = newOffset,
							_v48 = indent,
							_v49 = context,
							_v50 = row,
							_v51 = col + 1;
						n = _v44;
						predicate = _v45;
						source = _v46;
						offset = _v47;
						indent = _v48;
						context = _v49;
						row = _v50;
						col = _v51;
						continue ignoreExactly;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignoreAtLeast = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreAtLeast:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				var state = {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
				return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, state);
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v52 = n - 1,
						_v53 = predicate,
						_v54 = source,
						_v55 = offset + 1,
						_v56 = indent,
						_v57 = context,
						_v58 = row + 1,
						_v59 = 1;
					n = _v52;
					predicate = _v53;
					source = _v54;
					offset = _v55;
					indent = _v56;
					context = _v57;
					row = _v58;
					col = _v59;
					continue ignoreAtLeast;
				} else {
					var _v60 = n - 1,
						_v61 = predicate,
						_v62 = source,
						_v63 = newOffset,
						_v64 = indent,
						_v65 = context,
						_v66 = row,
						_v67 = col + 1;
					n = _v60;
					predicate = _v61;
					source = _v62;
					offset = _v63;
					indent = _v64;
					context = _v65;
					row = _v66;
					col = _v67;
					continue ignoreAtLeast;
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignore = F2(
	function (count, predicate) {
		var _p60 = count;
		if (_p60.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p61) {
					var _p62 = _p61;
					return A8(_elm_tools$parser$Parser$ignoreExactly, _p60._0, predicate, _p62.source, _p62.offset, _p62.indent, _p62.context, _p62.row, _p62.col);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p63) {
					var _p64 = _p63;
					return A8(_elm_tools$parser$Parser$ignoreAtLeast, _p60._0, predicate, _p64.source, _p64.offset, _p64.indent, _p64.context, _p64.row, _p64.col);
				});
		}
	});
var _elm_tools$parser$Parser$keep = F2(
	function (count, predicate) {
		return _elm_tools$parser$Parser$source(
			A2(_elm_tools$parser$Parser$ignore, count, predicate));
	});
var _elm_tools$parser$Parser$BadFloat = {ctor: 'BadFloat'};
var _elm_tools$parser$Parser$float = _elm_tools$parser$Parser_Internal$Parser(
	function (_p65) {
		var _p66 = _p65;
		var _p77 = _p66.source;
		var _p76 = _p66.row;
		var _p75 = _p66.offset;
		var _p74 = _p66.indent;
		var _p73 = _p66.context;
		var _p72 = _p66.col;
		var _p67 = A3(
			_elm_tools$parser$Parser$floatHelp,
			_p75,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p75, _p77),
			_p77);
		if (_p67.ctor === 'Err') {
			var _p68 = _p67._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadFloat,
				{source: _p77, offset: _p68, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p68 - _p75)});
		} else {
			var _p71 = _p67._0;
			var _p69 = _elm_lang$core$String$toFloat(
				A3(_elm_lang$core$String$slice, _p75, _p71, _p77));
			if (_p69.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 733, column: 9},
						end: {line: 745, column: 16}
					},
					_p69)(_elm_tools$parser$Parser$badFloatMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p69._0,
					{source: _p77, offset: _p71, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p71 - _p75)});
			}
		}
	});
var _elm_tools$parser$Parser$BadInt = {ctor: 'BadInt'};
var _elm_tools$parser$Parser$int = _elm_tools$parser$Parser_Internal$Parser(
	function (_p78) {
		var _p79 = _p78;
		var _p90 = _p79.source;
		var _p89 = _p79.row;
		var _p88 = _p79.offset;
		var _p87 = _p79.indent;
		var _p86 = _p79.context;
		var _p85 = _p79.col;
		var _p80 = A3(
			_elm_tools$parser$Parser$intHelp,
			_p88,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p88, _p90),
			_p90);
		if (_p80.ctor === 'Err') {
			var _p81 = _p80._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadInt,
				{source: _p90, offset: _p81, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p81 - _p88)});
		} else {
			var _p84 = _p80._0;
			var _p82 = _elm_lang$core$String$toInt(
				A3(_elm_lang$core$String$slice, _p88, _p84, _p90));
			if (_p82.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 638, column: 9},
						end: {line: 650, column: 16}
					},
					_p82)(_elm_tools$parser$Parser$badIntMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p82._0,
					{source: _p90, offset: _p84, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p84 - _p88)});
			}
		}
	});
var _elm_tools$parser$Parser$BadOneOf = function (a) {
	return {ctor: 'BadOneOf', _0: a};
};
var _elm_tools$parser$Parser$oneOfHelp = F3(
	function (state, problems, parsers) {
		oneOfHelp:
		while (true) {
			var _p91 = parsers;
			if (_p91.ctor === '[]') {
				return A2(
					_elm_tools$parser$Parser_Internal$Bad,
					_elm_tools$parser$Parser$BadOneOf(
						_elm_lang$core$List$reverse(problems)),
					state);
			} else {
				var _p92 = _p91._0._0(state);
				if (_p92.ctor === 'Good') {
					return _p92;
				} else {
					if (_elm_lang$core$Native_Utils.eq(state.row, _p92._1.row) && _elm_lang$core$Native_Utils.eq(state.col, _p92._1.col)) {
						var _v79 = state,
							_v80 = {ctor: '::', _0: _p92._0, _1: problems},
							_v81 = _p91._1;
						state = _v79;
						problems = _v80;
						parsers = _v81;
						continue oneOfHelp;
					} else {
						return _p92;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$oneOf = function (parsers) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A3(
				_elm_tools$parser$Parser$oneOfHelp,
				state,
				{ctor: '[]'},
				parsers);
		});
};
var _elm_tools$parser$Parser$Exactly = function (a) {
	return {ctor: 'Exactly', _0: a};
};
var _elm_tools$parser$Parser$AtLeast = function (a) {
	return {ctor: 'AtLeast', _0: a};
};
var _elm_tools$parser$Parser$zeroOrMore = _elm_tools$parser$Parser$AtLeast(0);
var _elm_tools$parser$Parser$oneOrMore = _elm_tools$parser$Parser$AtLeast(1);

var _evancz$elm_markdown$Native_Markdown = function() {


// VIRTUAL-DOM WIDGETS

function toHtml(options, factList, rawMarkdown)
{
	var model = {
		options: options,
		markdown: rawMarkdown
	};
	return _elm_lang$virtual_dom$Native_VirtualDom.custom(factList, model, implementation);
}


// WIDGET IMPLEMENTATION

var implementation = {
	render: render,
	diff: diff
};

function render(model)
{
	var html = marked(model.markdown, formatOptions(model.options));
	var div = document.createElement('div');
	div.innerHTML = html;
	return div;
}

function diff(a, b)
{
	
	if (a.model.markdown === b.model.markdown && a.model.options === b.model.options)
	{
		return null;
	}

	return {
		applyPatch: applyPatch,
		data: marked(b.model.markdown, formatOptions(b.model.options))
	};
}

function applyPatch(domNode, data)
{
	domNode.innerHTML = data;
	return domNode;
}


// ACTUAL MARKDOWN PARSER

var marked = function() {
	// catch the `marked` object regardless of the outer environment.
	// (ex. a CommonJS module compatible environment.)
	// note that this depends on marked's implementation of environment detection.
	var module = {};
	var exports = module.exports = {};

	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 * commit cd2f6f5b7091154c5526e79b5f3bfb4d15995a51
	 */
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

	return module.exports;
}();


// FORMAT OPTIONS FOR MARKED IMPLEMENTATION

function formatOptions(options)
{
	function toHighlight(code, lang)
	{
		if (!lang && options.defaultHighlighting.ctor === 'Just')
		{
			lang = options.defaultHighlighting._0;
		}

		if (typeof hljs !== 'undefined' && lang && hljs.listLanguages().indexOf(lang) >= 0)
		{
			return hljs.highlight(lang, code, true).value;
		}

		return code;
	}

	var gfm = options.githubFlavored;
	if (gfm.ctor === 'Just')
	{
		return {
			highlight: toHighlight,
			gfm: true,
			tables: gfm._0.tables,
			breaks: gfm._0.breaks,
			sanitize: options.sanitize,
			smartypants: options.smartypants
		};
	}

	return {
		highlight: toHighlight,
		gfm: false,
		tables: false,
		breaks: false,
		sanitize: options.sanitize,
		smartypants: options.smartypants
	};
}


// EXPORTS

return {
	toHtml: F3(toHtml)
};

}();

var _evancz$elm_markdown$Markdown$toHtmlWith = _evancz$elm_markdown$Native_Markdown.toHtml;
var _evancz$elm_markdown$Markdown$defaultOptions = {
	githubFlavored: _elm_lang$core$Maybe$Just(
		{tables: false, breaks: false}),
	defaultHighlighting: _elm_lang$core$Maybe$Nothing,
	sanitize: false,
	smartypants: false
};
var _evancz$elm_markdown$Markdown$toHtml = F2(
	function (attrs, string) {
		return A3(_evancz$elm_markdown$Native_Markdown.toHtml, _evancz$elm_markdown$Markdown$defaultOptions, attrs, string);
	});
var _evancz$elm_markdown$Markdown$Options = F4(
	function (a, b, c, d) {
		return {githubFlavored: a, defaultHighlighting: b, sanitize: c, smartypants: d};
	});

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLinesHelp = F5(
	function (maybeHighlight, start, end, index, line) {
		return ((_elm_lang$core$Native_Utils.cmp(index, start) > -1) && (_elm_lang$core$Native_Utils.cmp(index, end) < 0)) ? _elm_lang$core$Native_Utils.update(
			line,
			{highlight: maybeHighlight}) : line;
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLines = F4(
	function (maybeHighlight, start, end, lines) {
		var length = _elm_lang$core$List$length(lines);
		var start_ = (_elm_lang$core$Native_Utils.cmp(start, 0) < 0) ? (length + start) : start;
		var end_ = (_elm_lang$core$Native_Utils.cmp(end, 0) < 0) ? (length + end) : end;
		return A2(
			_elm_lang$core$List$indexedMap,
			A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLinesHelp, maybeHighlight, start_, end_),
			lines);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Line = F2(
	function (a, b) {
		return {fragments: a, highlight: b};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Fragment = F4(
	function (a, b, c, d) {
		return {text: a, color: b, isEmphasis: c, isStrong: d};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Delete = {ctor: 'Delete'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add = {ctor: 'Add'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal = {ctor: 'Normal'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color7 = {ctor: 'Color7'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color6 = {ctor: 'Color6'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color5 = {ctor: 'Color5'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color4 = {ctor: 'Color4'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color3 = {ctor: 'Color3'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color2 = {ctor: 'Color2'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color1 = {ctor: 'Color1'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default = {ctor: 'Default'};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$colorToString = function (color) {
	return A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'elmsh',
		function () {
			var _p0 = color;
			switch (_p0.ctor) {
				case 'Default':
					return '0';
				case 'Color1':
					return '1';
				case 'Color2':
					return '2';
				case 'Color3':
					return '3';
				case 'Color4':
					return '4';
				case 'Color5':
					return '5';
				case 'Color6':
					return '6';
				default:
					return '7';
			}
		}());
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$elementView = function (_p1) {
	var _p2 = _p1;
	var _p6 = _p2.text;
	var _p5 = _p2.isStrong;
	var _p4 = _p2.isEmphasis;
	var _p3 = _p2.color;
	return (_elm_lang$core$Native_Utils.eq(_p3, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default) && ((!_p4) && (!_p5))) ? _elm_lang$html$Html$text(_p6) : A2(
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$classList(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$colorToString(_p3),
						_1: !_elm_lang$core$Native_Utils.eq(_p3, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default)
					},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'elmsh-emphasis', _1: _p4},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'elmsh-strong', _1: _p5},
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(_p6),
			_1: {ctor: '[]'}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toInlineHtml = function (lines) {
	return A2(
		_elm_lang$html$Html$code,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('elmsh'),
			_1: {ctor: '[]'}
		},
		_elm_lang$core$List$concat(
			A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					var _p10 = _p8.highlight;
					var _p9 = _p8.fragments;
					return _elm_lang$core$Native_Utils.eq(_p10, _elm_lang$core$Maybe$Nothing) ? A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$elementView, _p9) : {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$classList(
									{
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'elmsh-hl',
											_1: _elm_lang$core$Native_Utils.eq(
												_p10,
												_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal))
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'elmsh-add',
												_1: _elm_lang$core$Native_Utils.eq(
													_p10,
													_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add))
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'elmsh-del',
													_1: _elm_lang$core$Native_Utils.eq(
														_p10,
														_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Delete))
												},
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							},
							A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$elementView, _p9)),
						_1: {ctor: '[]'}
					};
				},
				lines)));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$lineView = F3(
	function (start, index, _p11) {
		var _p12 = _p11;
		var _p13 = _p12.highlight;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'elmsh-line', _1: true},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'elmsh-hl',
								_1: _elm_lang$core$Native_Utils.eq(
									_p13,
									_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'elmsh-add',
									_1: _elm_lang$core$Native_Utils.eq(
										_p13,
										_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'elmsh-del',
										_1: _elm_lang$core$Native_Utils.eq(
											_p13,
											_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Delete))
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html_Attributes$attribute,
						'data-elmsh-lc',
						_elm_lang$core$Basics$toString(start + index)),
					_1: {ctor: '[]'}
				}
			},
			A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$elementView, _p12.fragments));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toBlockHtml = F2(
	function (maybeStart, lines) {
		var _p14 = maybeStart;
		if (_p14.ctor === 'Nothing') {
			return A2(
				_elm_lang$html$Html$pre,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('elmsh'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toInlineHtml(lines),
					_1: {ctor: '[]'}
				});
		} else {
			return A2(
				_elm_lang$html$Html$pre,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('elmsh'),
					_1: {ctor: '[]'}
				},
				_elm_lang$core$List$singleton(
					A2(
						_elm_lang$html$Html$code,
						{ctor: '[]'},
						A2(
							_elm_lang$core$List$indexedMap,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$lineView(_p14._0),
							lines))));
		}
	});

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$strongEmphasis = F2(
	function (color, text) {
		return {text: text, color: color, isEmphasis: true, isStrong: true};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$strong = F2(
	function (color, text) {
		return {text: text, color: color, isEmphasis: false, isStrong: true};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$emphasis = F2(
	function (color, text) {
		return {text: text, color: color, isEmphasis: true, isStrong: false};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal = F2(
	function (color, text) {
		return {text: text, color: color, isEmphasis: false, isStrong: false};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$newLine = function (fragments) {
	return {fragments: fragments, highlight: _elm_lang$core$Maybe$Nothing};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLinesHelp = F4(
	function (lineBreak, toFragment, _p1, _p0) {
		var _p2 = _p1;
		var _p10 = _p2._1;
		var _p9 = _p2._0;
		var _p3 = _p0;
		var _p8 = _p3._2;
		var _p7 = _p3._0;
		var _p6 = _p3._1;
		if (_elm_lang$core$Native_Utils.eq(_p9, lineBreak)) {
			return {
				ctor: '_Tuple3',
				_0: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$newLine(_p6),
					_1: _p7
				},
				_1: {
					ctor: '::',
					_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p10),
					_1: {ctor: '[]'}
				},
				_2: _elm_lang$core$Maybe$Nothing
			};
		} else {
			if (_elm_lang$core$Native_Utils.eq(
				_elm_lang$core$Maybe$Just(_p9),
				_p8)) {
				var _p4 = _p6;
				if (_p4.ctor === '::') {
					var _p5 = _p4._0;
					return {
						ctor: '_Tuple3',
						_0: _p7,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.update(
								_p5,
								{
									text: A2(_elm_lang$core$Basics_ops['++'], _p10, _p5.text)
								}),
							_1: _p4._1
						},
						_2: _p8
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: _p7,
						_1: {
							ctor: '::',
							_0: toFragment(
								{ctor: '_Tuple2', _0: _p9, _1: _p10}),
							_1: _p6
						},
						_2: _p8
					};
				}
			} else {
				return {
					ctor: '_Tuple3',
					_0: _p7,
					_1: {
						ctor: '::',
						_0: toFragment(
							{ctor: '_Tuple2', _0: _p9, _1: _p10}),
						_1: _p6
					},
					_2: _elm_lang$core$Maybe$Just(_p9)
				};
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines = F3(
	function (lineBreak, toFragment, revSyntaxes) {
		return function (_p11) {
			var _p12 = _p11;
			return {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$newLine(_p12._1),
				_1: _p12._0
			};
		}(
			A3(
				_elm_lang$core$List$foldl,
				A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLinesHelp, lineBreak, toFragment),
				{
					ctor: '_Tuple3',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'},
					_2: _elm_lang$core$Maybe$Nothing
				},
				revSyntaxes));
	});

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$escapableSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('\''),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('\"'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('\\'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('n'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('r'),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('t'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('b'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('f'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('v'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isEscapableChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$escapableSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isEscapable = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\\'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$escapable = A2(
	_elm_tools$parser$Parser$delayedCommit,
	_elm_tools$parser$Parser$symbol('\\'),
	A2(
		_elm_tools$parser$Parser$ignore,
		_elm_tools$parser$Parser$Exactly(1),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isEscapableChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen = F3(
	function (f, list, plist) {
		return A2(
			_elm_tools$parser$Parser$andThen,
			function (n) {
				return f(
					A2(_elm_lang$core$Basics_ops['++'], n, list));
			},
			plist);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen = F3(
	function (f, list, pn) {
		return A2(
			_elm_tools$parser$Parser$andThen,
			function (n) {
				return f(
					{ctor: '::', _0: n, _1: list});
			},
			pn);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore = F3(
	function (count, isNotRelevant, previousParser) {
		return A2(
			_elm_tools$parser$Parser_ops['|.'],
			previousParser,
			A2(_elm_tools$parser$Parser$ignore, count, isNotRelevant));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedUnnestable = F2(
	function (_p0, revAList) {
		var _p1 = _p0;
		var _p5 = _p1;
		var _p4 = _p1.isNotRelevant;
		var _p3 = _p1.end;
		var _p2 = _p1.defaultMap;
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					_elm_lang$core$Basics$always(
						{
							ctor: '::',
							_0: _p2(_p3),
							_1: revAList
						}),
					_elm_tools$parser$Parser$symbol(_p3)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(revAList),
						_elm_tools$parser$Parser$end),
					_1: {
						ctor: '::',
						_0: A3(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedUnnestable(_p5),
							revAList,
							_elm_tools$parser$Parser$oneOf(_p1.innerParsers)),
						_1: {
							ctor: '::',
							_0: A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedUnnestable(_p5),
								revAList,
								_elm_tools$parser$Parser$oneOf(
									{
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											_p2,
											A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _p4)),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												_p2,
												_elm_tools$parser$Parser$source(
													A3(
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
														_elm_tools$parser$Parser$zeroOrMore,
														_p4,
														A2(
															_elm_tools$parser$Parser$ignore,
															_elm_tools$parser$Parser$Exactly(1),
															_elm_lang$core$Basics$always(true))))),
											_1: {ctor: '[]'}
										}
									})),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedNestable = F3(
	function (nestLevel, _p6, revAList) {
		var _p7 = _p6;
		var _p11 = _p7;
		var _p10 = _p7.isNotRelevant;
		var _p9 = _p7.end;
		var _p8 = _p7.defaultMap;
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (n) {
						return _elm_lang$core$Native_Utils.eq(nestLevel, 1) ? _elm_tools$parser$Parser$succeed(n) : A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedNestable, nestLevel - 1, _p11, n);
					},
					A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(
							{
								ctor: '::',
								_0: _p8(_p9),
								_1: revAList
							}),
						_elm_tools$parser$Parser$symbol(_p9))),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
						A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedNestable, nestLevel + 1, _p11),
						revAList,
						A2(
							_elm_tools$parser$Parser$map,
							_p8,
							_elm_tools$parser$Parser$source(
								A3(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
									_elm_tools$parser$Parser$zeroOrMore,
									_p10,
									_elm_tools$parser$Parser$symbol(_p7.start))))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							_elm_lang$core$Basics$always(revAList),
							_elm_tools$parser$Parser$end),
						_1: {
							ctor: '::',
							_0: A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedUnnestable(_p11),
								revAList,
								_elm_tools$parser$Parser$oneOf(_p7.innerParsers)),
							_1: {
								ctor: '::',
								_0: A3(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
									A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedNestable, nestLevel, _p11),
									revAList,
									_elm_tools$parser$Parser$oneOf(
										{
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												_p8,
												A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _p10)),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_tools$parser$Parser$map,
													_p8,
													_elm_tools$parser$Parser$source(
														A3(
															_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
															_elm_tools$parser$Parser$zeroOrMore,
															_p10,
															A2(
																_elm_tools$parser$Parser$ignore,
																_elm_tools$parser$Parser$Exactly(1),
																_elm_lang$core$Basics$always(true))))),
												_1: {ctor: '[]'}
											}
										})),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedHelp = F2(
	function (_p12, revAList) {
		var _p13 = _p12;
		var _p17 = _p13;
		var _p16 = _p13.isNotRelevant;
		var _p14 = {
			ctor: '_Tuple2',
			_0: _elm_lang$core$String$uncons(_p17.start),
			_1: _elm_lang$core$String$uncons(_p17.end)
		};
		if (_p14._0.ctor === 'Nothing') {
			return _elm_tools$parser$Parser$fail('Trying to parse a delimited helper, but the start token cannot be an empty string!');
		} else {
			if (_p14._1.ctor === 'Nothing') {
				return _elm_tools$parser$Parser$fail('Trying to parse a delimited helper, but the end token cannot be an empty string!');
			} else {
				var _p15 = _p14._1._0._0;
				return _p17.isNestable ? A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedNestable,
					1,
					_elm_lang$core$Native_Utils.update(
						_p17,
						{
							isNotRelevant: function (c) {
								return _p16(c) && ((!_elm_lang$core$Native_Utils.eq(c, _p14._0._0._0)) && (!_elm_lang$core$Native_Utils.eq(c, _p15)));
							}
						}),
					revAList) : A2(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedUnnestable,
					_elm_lang$core$Native_Utils.update(
						_p17,
						{
							isNotRelevant: function (c) {
								return _p16(c) && (!_elm_lang$core$Native_Utils.eq(c, _p15));
							}
						}),
					revAList);
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited = function (_p18) {
	var _p19 = _p18;
	var _p20 = _p19.start;
	return A2(
		_elm_tools$parser$Parser$andThen,
		function (n) {
			return A2(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimitedHelp,
				_p19,
				{
					ctor: '::',
					_0: n,
					_1: {ctor: '[]'}
				});
		},
		A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$Basics$always(
				_p19.defaultMap(_p20)),
			_elm_tools$parser$Parser$symbol(_p20)));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isNumber = function (c) {
	return _elm_lang$core$Char$isDigit(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$number = A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isNumber);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\n'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isSpace = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(' ')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\t'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isSpace(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$Delimiter = F6(
	function (a, b, c, d, e, f) {
		return {start: a, end: b, isNestable: c, defaultMap: d, innerParsers: e, isNotRelevant: f};
	});

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toFragment = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._1;
	var _p2 = _p1._0;
	switch (_p2.ctor) {
		case 'Normal':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p3);
		case 'Comment':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color1, _p3);
		case 'String':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color2, _p3);
		case 'BasicSymbol':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color3, _p3);
		case 'GroupSymbol':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color4, _p3);
		case 'Capitalized':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color6, _p3);
		case 'Keyword':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color3, _p3);
		case 'Function':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color5, _p3);
		case 'TypeSignature':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$emphasis, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color4, _p3);
		case 'Space':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p3);
		case 'LineBreak':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p3);
		default:
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color6, _p3);
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('-')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('{'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar = A2(
	_elm_tools$parser$Parser$keep,
	_elm_tools$parser$Parser$Exactly(1),
	_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isStringLiteralChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\"')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\''));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('+'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('/'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('*'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('='),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('.'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('$'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('<'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('>'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr(':'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('&'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('|'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr('^'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('?'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('#'),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Native_Utils.chr('@'),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$core$Native_Utils.chr('~'),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$core$Native_Utils.chr('!'),
																				_1: {
																					ctor: '::',
																					_0: _elm_lang$core$Native_Utils.chr(','),
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isInfixChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbols = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr(','),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('['),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr(']'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('{'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('}'),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isGroupSymbol = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbols);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbol = A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isGroupSymbol);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbols = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('|'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('.'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('='),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('\\'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('/'),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('('),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr(')'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('-'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('>'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr('<'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr(':'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('+'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr('!'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('$'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('&'),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Native_Utils.chr('*'),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isBasicSymbol = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbols);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isBasicSymbol(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isGroupSymbol(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isStringLiteralChar(c))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$capitalized = _elm_tools$parser$Parser$source(
	A3(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
		_elm_tools$parser$Parser$zeroOrMore,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar,
		A2(
			_elm_tools$parser$Parser$ignore,
			_elm_tools$parser$Parser$Exactly(1),
			_elm_lang$core$Char$isUpper)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable = _elm_tools$parser$Parser$source(
	A3(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
		_elm_tools$parser$Parser$zeroOrMore,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar,
		A2(
			_elm_tools$parser$Parser$ignore,
			_elm_tools$parser$Parser$Exactly(1),
			_elm_lang$core$Char$isLower)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$weirdText = A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbol = A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isBasicSymbol);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$keywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'as',
		_1: {
			ctor: '::',
			_0: 'where',
			_1: {
				ctor: '::',
				_0: 'let',
				_1: {
					ctor: '::',
					_0: 'in',
					_1: {
						ctor: '::',
						_0: 'if',
						_1: {
							ctor: '::',
							_0: 'else',
							_1: {
								ctor: '::',
								_0: 'then',
								_1: {
									ctor: '::',
									_0: 'case',
									_1: {
										ctor: '::',
										_0: 'of',
										_1: {
											ctor: '::',
											_0: 'type',
											_1: {
												ctor: '::',
												_0: 'alias',
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$keywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigIsNotRelevant = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('-')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(','))))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpnIsSpecialChar = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar(c) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')'))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpIsNotRelevant = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar(c) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('.')))))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecIsNotRelevant = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('('))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Number = {ctor: 'Number'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$LineBreak = {ctor: 'LineBreak'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreak = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$LineBreak),
	A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$Exactly(1),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreakList = A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreak);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Space = {ctor: 'Space'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$space = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Space),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isSpace));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature = {ctor: 'TypeSignature'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function = {ctor: 'Function'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixParser = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function),
	_elm_tools$parser$Parser$source(
		A2(
			_elm_tools$parser$Parser$delayedCommit,
			_elm_tools$parser$Parser$symbol('('),
			A2(
				_elm_tools$parser$Parser$delayedCommit,
				A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isInfixChar),
				_elm_tools$parser$Parser$symbol(')')))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword = {ctor: 'Keyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized = {ctor: 'Capitalized'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$elmEscapable = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized),
		_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$escapable)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$GroupSymbol = {ctor: 'GroupSymbol'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol = {ctor: 'BasicSymbol'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$String = {ctor: 'String'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter = {
	start: '\"',
	end: '\"',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$String),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreakList,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$elmEscapable,
			_1: {ctor: '[]'}
		}
	},
	isNotRelevant: function (c) {
		return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isEscapable(c));
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$tripleDoubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter,
		{start: '\"\"\"', end: '\"\"\"'}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter,
		{start: '\'', end: '\''}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringLiteral = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$tripleDoubleQuote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$doubleQuote,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$quote,
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Comment = {ctor: 'Comment'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$inlineComment = A2(
	_elm_tools$parser$Parser$map,
	function (_p4) {
		return _elm_lang$core$List$singleton(
			A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Comment,
				_p4));
	},
	_elm_tools$parser$Parser$source(
		A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
			_elm_tools$parser$Parser$zeroOrMore,
			function (_p5) {
				return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(_p5);
			},
			_elm_tools$parser$Parser$symbol('--'))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$multilineComment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	{
		start: '{-',
		end: '-}',
		isNestable: true,
		defaultMap: F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Comment),
		innerParsers: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreakList,
			_1: {ctor: '[]'}
		},
		isNotRelevant: function (c) {
			return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c);
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$comment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$inlineComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$multilineComment,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment = F2(
	function (continueFunction, revSyntaxes) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, continueFunction, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$space),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$checkContext(continueFunction),
						revSyntaxes,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreak),
					_1: {
						ctor: '::',
						_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen, continueFunction, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$comment),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$checkContext = F2(
	function (continueFunction, revSyntaxes) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, continueFunction, revSyntaxes),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
					_1: {ctor: '[]'}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal = {ctor: 'Normal'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest = F2(
	function (nestLevel, revSyntaxes) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest(nestLevel),
					revSyntaxes),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (n) {
							return A2(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest,
								nestLevel + 1,
								{ctor: '::', _0: n, _1: revSyntaxes});
						},
						A2(
							_elm_tools$parser$Parser$map,
							_elm_lang$core$Basics$always(
								{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal, _1: '('}),
							_elm_tools$parser$Parser$symbol('('))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$andThen,
							function (n) {
								return _elm_lang$core$Native_Utils.eq(nestLevel, 0) ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses(
									{ctor: '::', _0: n, _1: revSyntaxes}) : A2(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest,
									nestLevel - 1,
									{ctor: '::', _0: n, _1: revSyntaxes});
							},
							A2(
								_elm_tools$parser$Parser$map,
								_elm_lang$core$Basics$always(
									{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal, _1: ')'}),
								_elm_tools$parser$Parser$symbol(')'))),
						_1: {
							ctor: '::',
							_0: A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest(nestLevel),
								revSyntaxes,
								_elm_tools$parser$Parser$oneOf(
									{
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											F2(
												function (v0, v1) {
													return {ctor: '_Tuple2', _0: v0, _1: v1};
												})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
											_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												F2(
													function (v0, v1) {
														return {ctor: '_Tuple2', _0: v0, _1: v1};
													})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
												A2(
													_elm_tools$parser$Parser$keep,
													_elm_tools$parser$Parser$oneOrMore,
													function (_p6) {
														return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpnIsSpecialChar(_p6);
													})),
											_1: {ctor: '[]'}
										}
									})),
							_1: {
								ctor: '::',
								_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration,
					revSyntaxes,
					A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(
							{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal, _1: ')'}),
						_elm_tools$parser$Parser$symbol(')'))),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses,
						revSyntaxes,
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixParser,
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											F2(
												function (v0, v1) {
													return {ctor: '_Tuple2', _0: v0, _1: v1};
												})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
											A2(
												_elm_tools$parser$Parser$keep,
												_elm_tools$parser$Parser$oneOrMore,
												function (c) {
													return _elm_lang$core$Native_Utils.eq(
														c,
														_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
														c,
														_elm_lang$core$Native_Utils.chr('.'));
												})),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												F2(
													function (v0, v1) {
														return {ctor: '_Tuple2', _0: v0, _1: v1};
													})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature),
												_elm_tools$parser$Parser$source(
													A3(
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
														_elm_tools$parser$Parser$zeroOrMore,
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpIsNotRelevant,
														A2(
															_elm_tools$parser$Parser$ignore,
															_elm_tools$parser$Parser$Exactly(1),
															_elm_lang$core$Char$isUpper)))),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_tools$parser$Parser$map,
													F2(
														function (v0, v1) {
															return {ctor: '_Tuple2', _0: v0, _1: v1};
														})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function),
													A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpIsNotRelevant)),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							})),
					_1: {
						ctor: '::',
						_0: A3(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest(0),
							revSyntaxes,
							A2(
								_elm_tools$parser$Parser$map,
								_elm_lang$core$Basics$always(
									{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal, _1: '('}),
								_elm_tools$parser$Parser$symbol('('))),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses,
					revSyntaxes,
					A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(
							{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal, _1: '('}),
						_elm_tools$parser$Parser$symbol('('))),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration,
						revSyntaxes,
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: A2(
									_elm_tools$parser$Parser$map,
									F2(
										function (v0, v1) {
											return {ctor: '_Tuple2', _0: v0, _1: v1};
										})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										_elm_lang$core$Basics$always(
											{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword, _1: 'exposing'}),
										_elm_tools$parser$Parser$keyword('exposing')),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											_elm_lang$core$Basics$always(
												{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword, _1: 'as'}),
											_elm_tools$parser$Parser$keyword('as')),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												F2(
													function (v0, v1) {
														return {ctor: '_Tuple2', _0: v0, _1: v1};
													})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
												A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecIsNotRelevant)),
											_1: {ctor: '[]'}
										}
									}
								}
							})),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContentHelp = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$Basics$always(
				{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature, _1: '()'}),
			_elm_tools$parser$Parser$symbol('()')),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				_elm_lang$core$Basics$always(
					{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol, _1: '->'}),
				_elm_tools$parser$Parser$symbol('->')),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('-')) || _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(','))));
						})),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature),
						_elm_tools$parser$Parser$source(
							A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
								_elm_tools$parser$Parser$zeroOrMore,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigIsNotRelevant,
								A2(
									_elm_tools$parser$Parser$ignore,
									_elm_tools$parser$Parser$Exactly(1),
									_elm_lang$core$Char$isUpper)))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
							A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigIsNotRelevant)),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContentHelp),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBodyContent = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Number),
			_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$number)),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				_elm_lang$core$Basics$always(
					{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized, _1: '()'}),
				_elm_tools$parser$Parser$symbol('()')),
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixParser,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol),
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbol),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$GroupSymbol),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbol),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser$map,
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$capitalized),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_tools$parser$Parser$map,
									function (n) {
										return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isKeyword(n) ? {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword, _1: n} : {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal, _1: n};
									},
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Normal),
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$weirdText),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringLiteral),
				_1: {
					ctor: '::',
					_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBodyContent),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent,
				revSyntaxes,
				A2(
					_elm_tools$parser$Parser$map,
					_elm_lang$core$Basics$always(
						{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol, _1: ':'}),
					_elm_tools$parser$Parser$symbol(':'))),
			_1: {
				ctor: '::',
				_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature, revSyntaxes),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody(revSyntaxes),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclarationHelp = F2(
	function (revSyntaxes, str) {
		return _elm_lang$core$Native_Utils.eq(str, 'module') ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword, _1: str},
				_1: revSyntaxes
			}) : _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function, _1: str},
				_1: revSyntaxes
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclaration = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclaration, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclarationHelp(revSyntaxes),
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody(revSyntaxes),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStartVariable = F2(
	function (revSyntaxes, n) {
		return (_elm_lang$core$Native_Utils.eq(n, 'module') || _elm_lang$core$Native_Utils.eq(n, 'import')) ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword, _1: n},
				_1: revSyntaxes
			}) : (_elm_lang$core$Native_Utils.eq(n, 'port') ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclaration(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword, _1: n},
				_1: revSyntaxes
			}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isKeyword(n) ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword, _1: n},
				_1: revSyntaxes
			}) : _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function, _1: n},
				_1: revSyntaxes
			})));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStart = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _elm_tools$parser$Parser$succeed, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStartVariable(revSyntaxes),
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable),
				_1: {
					ctor: '::',
					_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringLiteral),
					_1: {
						ctor: '::',
						_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBodyContent),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toSyntax = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p7) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p7));
		},
		A2(
			_elm_tools$parser$Parser$repeat,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStart(
				{ctor: '[]'}))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$parse = function (_p8) {
	return A2(
		_elm_lang$core$Result$map,
		A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$LineBreak, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toFragment),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toSyntax(_p8));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toFragment = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._1;
	var _p2 = _p1._0;
	switch (_p2.ctor) {
		case 'Normal':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p3);
		case 'Comment':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color1, _p3);
		case 'Tag':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color3, _p3);
		case 'Attribute':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color5, _p3);
		case 'AttributeValue':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color2, _p3);
		default:
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p3);
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isStartTagChar = function (c) {
	return _elm_lang$core$Char$isUpper(c) || (_elm_lang$core$Char$isLower(c) || _elm_lang$core$Char$isDigit(c));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isTagChar = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isStartTagChar(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isAttributeChar = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isTagChar(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('_'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$LineBreak = {ctor: 'LineBreak'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreak = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$LineBreak),
	A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$Exactly(1),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreakList = A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreak);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$AttributeValue = {ctor: 'AttributeValue'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter = {
	start: '\"',
	end: '\"',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$AttributeValue),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreakList,
		_1: {ctor: '[]'}
	},
	isNotRelevant: function (_p4) {
		return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(_p4);
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter,
		{start: '\'', end: '\''}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValue = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$quote,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p5) {
						return _elm_lang$core$List$singleton(
							A2(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$AttributeValue,
								_p5));
					},
					_elm_tools$parser$Parser$source(
						A2(
							_elm_tools$parser$Parser$ignore,
							_elm_tools$parser$Parser$oneOrMore,
							function (c) {
								return (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c)) && (!_elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr('>')));
							}))),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Attribute = {ctor: 'Attribute'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Tag = {ctor: 'Tag'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Comment = {ctor: 'Comment'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$comment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter,
		{
			start: '<!--',
			end: '-->',
			defaultMap: F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Comment)
		}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal = {ctor: 'Normal'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$endTag = function (revSyntaxes) {
	return A3(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
		_elm_tools$parser$Parser$succeed,
		revSyntaxes,
		A2(
			_elm_tools$parser$Parser$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal),
			A2(
				_elm_tools$parser$Parser$keep,
				_elm_tools$parser$Parser$oneOrMore,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(
					_elm_lang$core$Native_Utils.chr('>')))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$chompUntilEndTag = function (revSyntaxes) {
	return A3(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
		_elm_tools$parser$Parser$succeed,
		revSyntaxes,
		A2(
			_elm_tools$parser$Parser$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal),
			_elm_tools$parser$Parser$source(
				A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
					_elm_tools$parser$Parser$zeroOrMore,
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						})(
						_elm_lang$core$Native_Utils.chr('>')),
					A2(
						_elm_tools$parser$Parser$ignore,
						_elm_tools$parser$Parser$zeroOrMore,
						function (c) {
							return (!_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('>'))) && (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c));
						})))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal),
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isSpace)),
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreak,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValueLoop = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValueLoop, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValue),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$endTag(revSyntaxes),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeConfirm,
				revSyntaxes,
				A2(
					_elm_tools$parser$Parser$map,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Attribute),
					A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isAttributeChar))),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$endTag(revSyntaxes),
					_1: {
						ctor: '::',
						_0: A3(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop,
							revSyntaxes,
							A2(
								_elm_tools$parser$Parser$map,
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal),
								A2(
									_elm_tools$parser$Parser$keep,
									_elm_tools$parser$Parser$oneOrMore,
									function (c) {
										return (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c)) && (!_elm_lang$core$Native_Utils.eq(
											c,
											_elm_lang$core$Native_Utils.chr('>')));
									}))),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeConfirm = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeConfirm, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
			_1: {
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValueLoop,
					revSyntaxes,
					A2(
						_elm_tools$parser$Parser$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal),
						A2(
							_elm_tools$parser$Parser$keep,
							_elm_tools$parser$Parser$Exactly(1),
							F2(
								function (x, y) {
									return _elm_lang$core$Native_Utils.eq(x, y);
								})(
								_elm_lang$core$Native_Utils.chr('='))))),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$endTag(revSyntaxes),
					_1: {
						ctor: '::',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop(revSyntaxes),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$tag = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop,
				revSyntaxes,
				A2(
					_elm_tools$parser$Parser$map,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Tag),
					_elm_tools$parser$Parser$source(
						A3(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$thenIgnore,
							_elm_tools$parser$Parser$zeroOrMore,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isTagChar,
							A2(
								_elm_tools$parser$Parser$ignore,
								_elm_tools$parser$Parser$Exactly(1),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isStartTagChar))))),
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$chompUntilEndTag(revSyntaxes),
				_1: {ctor: '[]'}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$openTag = function (revSyntaxes) {
	return A3(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$tag,
		revSyntaxes,
		A2(
			_elm_tools$parser$Parser$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal),
			_elm_tools$parser$Parser$source(
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser$ignore,
						_elm_tools$parser$Parser$oneOrMore,
						F2(
							function (x, y) {
								return _elm_lang$core$Native_Utils.eq(x, y);
							})(
							_elm_lang$core$Native_Utils.chr('<'))),
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser$ignore,
								_elm_tools$parser$Parser$Exactly(1),
								function (c) {
									return _elm_lang$core$Native_Utils.eq(
										c,
										_elm_lang$core$Native_Utils.chr('/')) || _elm_lang$core$Native_Utils.eq(
										c,
										_elm_lang$core$Native_Utils.chr('!'));
								}),
							_1: {
								ctor: '::',
								_0: _elm_tools$parser$Parser$succeed(
									{ctor: '_Tuple0'}),
								_1: {ctor: '[]'}
							}
						})))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$mainLoop = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen, _elm_tools$parser$Parser$succeed, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen, _elm_tools$parser$Parser$succeed, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$comment),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
						_elm_tools$parser$Parser$succeed,
						revSyntaxes,
						A2(
							_elm_tools$parser$Parser$map,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Normal),
							A2(
								_elm_tools$parser$Parser$keep,
								_elm_tools$parser$Parser$oneOrMore,
								function (c) {
									return (!_elm_lang$core$Native_Utils.eq(
										c,
										_elm_lang$core$Native_Utils.chr('<'))) && (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c));
								}))),
					_1: {
						ctor: '::',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$openTag(revSyntaxes),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toSyntax = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p6) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p6));
		},
		A2(
			_elm_tools$parser$Parser$repeat,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$mainLoop(
				{ctor: '[]'}))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$parse = function (_p7) {
	return A2(
		_elm_lang$core$Result$map,
		A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$LineBreak, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toFragment),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toSyntax(_p7));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toFragment = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._1;
	var _p2 = _p1._0;
	switch (_p2.ctor) {
		case 'Normal':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p3);
		case 'Comment':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color1, _p3);
		case 'String':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color2, _p3);
		case 'Keyword':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color3, _p3);
		case 'DeclarationKeyword':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$emphasis, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color4, _p3);
		case 'FunctionEval':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color4, _p3);
		case 'Function':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color5, _p3);
		case 'LiteralKeyword':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color6, _p3);
		case 'Param':
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Color7, _p3);
		default:
			return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$normal, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Default, _p3);
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isCommentChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('/'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isStringLiteralChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\"')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\'')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('`')));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$literalKeywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'true',
		_1: {
			ctor: '::',
			_0: 'false',
			_1: {
				ctor: '::',
				_0: 'null',
				_1: {
					ctor: '::',
					_0: 'undefined',
					_1: {
						ctor: '::',
						_0: 'NaN',
						_1: {
							ctor: '::',
							_0: 'Infinity',
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isLiteralKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$literalKeywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('{'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('}'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('('),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr(')'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('['),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr(']'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr(','),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr(';'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isGroupChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('+'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('*'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('/'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('='),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('!'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('<'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('>'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('&'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr('|'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('?'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('^'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr(':'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('~'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('.'),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isOperatorChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$punctuactorSet = A2(_elm_lang$core$Set$union, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorSet, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupSet);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isPunctuaction = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$punctuactorSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$declarationKeywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'var',
		_1: {
			ctor: '::',
			_0: 'const',
			_1: {
				ctor: '::',
				_0: 'let',
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isDeclarationKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$declarationKeywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'break',
		_1: {
			ctor: '::',
			_0: 'do',
			_1: {
				ctor: '::',
				_0: 'instanceof',
				_1: {
					ctor: '::',
					_0: 'typeof',
					_1: {
						ctor: '::',
						_0: 'case',
						_1: {
							ctor: '::',
							_0: 'else',
							_1: {
								ctor: '::',
								_0: 'new',
								_1: {
									ctor: '::',
									_0: 'catch',
									_1: {
										ctor: '::',
										_0: 'finally',
										_1: {
											ctor: '::',
											_0: 'return',
											_1: {
												ctor: '::',
												_0: 'void',
												_1: {
													ctor: '::',
													_0: 'continue',
													_1: {
														ctor: '::',
														_0: 'for',
														_1: {
															ctor: '::',
															_0: 'switch',
															_1: {
																ctor: '::',
																_0: 'while',
																_1: {
																	ctor: '::',
																	_0: 'debugger',
																	_1: {
																		ctor: '::',
																		_0: 'this',
																		_1: {
																			ctor: '::',
																			_0: 'with',
																			_1: {
																				ctor: '::',
																				_0: 'default',
																				_1: {
																					ctor: '::',
																					_0: 'if',
																					_1: {
																						ctor: '::',
																						_0: 'throw',
																						_1: {
																							ctor: '::',
																							_0: 'delete',
																							_1: {
																								ctor: '::',
																								_0: 'in',
																								_1: {
																									ctor: '::',
																									_0: 'try',
																									_1: {
																										ctor: '::',
																										_0: 'enum',
																										_1: {
																											ctor: '::',
																											_0: 'extends',
																											_1: {
																												ctor: '::',
																												_0: 'export',
																												_1: {
																													ctor: '::',
																													_0: 'import',
																													_1: {
																														ctor: '::',
																														_0: 'implements',
																														_1: {
																															ctor: '::',
																															_0: 'private',
																															_1: {
																																ctor: '::',
																																_0: 'public',
																																_1: {
																																	ctor: '::',
																																	_0: 'yield',
																																	_1: {
																																		ctor: '::',
																																		_0: 'interface',
																																		_1: {
																																			ctor: '::',
																																			_0: 'package',
																																			_1: {
																																				ctor: '::',
																																				_0: 'protected',
																																				_1: {ctor: '[]'}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isPunctuaction(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isStringLiteralChar(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isCommentChar(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LineBreak = {ctor: 'LineBreak'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreak = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LineBreak),
	A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$Exactly(1),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList = A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreak);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Param = {ctor: 'Param'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LiteralKeyword = {ctor: 'LiteralKeyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$number = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LiteralKeyword),
	_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$number));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$jsEscapable = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LiteralKeyword),
		_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$escapable)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function = {ctor: 'Function'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$FunctionEval = {ctor: 'FunctionEval'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword = {ctor: 'DeclarationKeyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword = {ctor: 'Keyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorChar = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isOperatorChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$String = {ctor: 'String'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter = {
	start: '\'',
	end: '\'',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$String),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$jsEscapable,
			_1: {ctor: '[]'}
		}
	},
	isNotRelevant: function (c) {
		return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isEscapable(c));
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter,
		{start: '\"', end: '\"'}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$templateString = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter,
		{
			start: '`',
			end: '`',
			innerParsers: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList,
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$jsEscapable,
					_1: {ctor: '[]'}
				}
			},
			isNotRelevant: function (c) {
				return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isEscapable(c));
			}
		}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$stringLiteral = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$doubleQuote,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$templateString,
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Comment = {ctor: 'Comment'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$inlineComment = A2(
	_elm_tools$parser$Parser$map,
	function (_p4) {
		return _elm_lang$core$List$singleton(
			A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Comment,
				_p4));
	},
	_elm_tools$parser$Parser$source(
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			_elm_tools$parser$Parser$symbol('//'),
			A2(
				_elm_tools$parser$Parser$ignore,
				_elm_tools$parser$Parser$zeroOrMore,
				function (_p5) {
					return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(_p5);
				}))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$multilineComment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$delimited(
	{
		start: '/*',
		end: '*/',
		isNestable: false,
		defaultMap: F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Comment),
		innerParsers: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList,
			_1: {ctor: '[]'}
		},
		isNotRelevant: function (c) {
			return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isLineBreak(c);
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$comment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$inlineComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$multilineComment,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal = {ctor: 'Normal'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupChar = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isGroupChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment = F2(
	function (continueFunction, revSyntaxes) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
					continueFunction,
					revSyntaxes,
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser$map,
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal),
								A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isSpace)),
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreak,
								_1: {ctor: '[]'}
							}
						})),
				_1: {
					ctor: '::',
					_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen, continueFunction, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$comment),
					_1: {ctor: '[]'}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionEvalLoop = F3(
	function (identifier, preSyntaxList, postSyntaxList) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment,
					A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionEvalLoop, identifier, preSyntaxList),
					postSyntaxList),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (n) {
							return _elm_tools$parser$Parser$succeed(
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal, _1: '('},
										_1: postSyntaxList
									},
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$FunctionEval, _1: identifier},
										_1: preSyntaxList
									}));
						},
						_elm_tools$parser$Parser$symbol('(')),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(
							A2(
								_elm_lang$core$Basics_ops['++'],
								postSyntaxList,
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal, _1: identifier},
									_1: preSyntaxList
								})),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$classStatementLoop = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$classStatementLoop, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
					_elm_tools$parser$Parser$succeed,
					revSyntaxes,
					A2(
						_elm_tools$parser$Parser$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function),
						A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar))),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$argLoop = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$argLoop, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (n) {
						return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$argLoop(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Param, _1: n},
								_1: revSyntaxes
							});
					},
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isCommentChar(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$isWhitespace(c) || (_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(')')))));
						})),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (n) {
							return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$argLoop(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal, _1: n},
									_1: revSyntaxes
								});
						},
						A2(
							_elm_tools$parser$Parser$keep,
							_elm_tools$parser$Parser$oneOrMore,
							function (c) {
								return _elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr('/')) || _elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr(','));
							})),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$andThen,
							function (_p6) {
								return _elm_tools$parser$Parser$succeed(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal, _1: ')'},
										_1: revSyntaxes
									});
							},
							_elm_tools$parser$Parser$symbol(')')),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionStatementLoop = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionStatementLoop, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (n) {
						return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionStatementLoop(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function, _1: n},
								_1: revSyntaxes
							});
					},
					A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (n) {
							return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$argLoop(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Normal, _1: '('},
									_1: revSyntaxes
								});
						},
						_elm_tools$parser$Parser$symbol('(')),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordParser = F2(
	function (revSyntaxes, n) {
		return (_elm_lang$core$Native_Utils.eq(n, 'function') || _elm_lang$core$Native_Utils.eq(n, 'static')) ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionStatementLoop(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword, _1: n},
				_1: revSyntaxes
			}) : (_elm_lang$core$Native_Utils.eq(n, 'class') ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$classStatementLoop(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword, _1: n},
				_1: revSyntaxes
			}) : ((_elm_lang$core$Native_Utils.eq(n, 'this') || _elm_lang$core$Native_Utils.eq(n, 'super')) ? _elm_tools$parser$Parser$succeed(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Param, _1: n},
				_1: revSyntaxes
			}) : (_elm_lang$core$Native_Utils.eq(n, 'constructor') ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionStatementLoop(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function, _1: n},
				_1: revSyntaxes
			}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isKeyword(n) ? _elm_tools$parser$Parser$succeed(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword, _1: n},
				_1: revSyntaxes
			}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isDeclarationKeyword(n) ? _elm_tools$parser$Parser$succeed(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword, _1: n},
				_1: revSyntaxes
			}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isLiteralKeyword(n) ? _elm_tools$parser$Parser$succeed(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LiteralKeyword, _1: n},
				_1: revSyntaxes
			}) : A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionEvalLoop,
			n,
			revSyntaxes,
			{ctor: '[]'})))))));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$mainLoop = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment, _elm_tools$parser$Parser$succeed, revSyntaxes),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$addThen, _elm_tools$parser$Parser$succeed, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$stringLiteral),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Helpers$consThen,
						_elm_tools$parser$Parser$succeed,
						revSyntaxes,
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorChar,
								_1: {
									ctor: '::',
									_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupChar,
									_1: {
										ctor: '::',
										_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$number,
										_1: {ctor: '[]'}
									}
								}
							})),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$andThen,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordParser(revSyntaxes),
							A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar)),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toSyntax = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p7) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p7));
		},
		A2(
			_elm_tools$parser$Parser$repeat,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$mainLoop(
				{ctor: '[]'}))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$parse = function (_p8) {
	return A2(
		_elm_lang$core$Result$map,
		A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LineBreak, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toFragment),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toSyntax(_p8));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$github = '\n.elmsh {\n    background: white;\n    color: #24292e;\n}\n\n.elmsh-hl {\n    background: #fffbdd;\n}\n\n.elmsh-add {\n    background: #eaffea;\n}\n\n.elmsh-del {\n    background: #ffecec;\n}\n\n.elmsh-strong {\n    font-weight: bold;\n}\n\n.elmsh-emphasis {\n    font-style: italic;\n}\n\n.elmsh1 {\n    color: #969896;\n}\n.elmsh2 {\n    color: #df5000;\n}\n\n.elmsh3 {\n    color: #d73a49;\n}\n\n.elmsh4 {\n    color: #0086b3;\n}\n\n.elmsh5 {\n    color: #63a35c;\n}\n\n.elmsh6 {\n    color: #005cc5;\n}\n\n.elmsh7 {\n    color: #795da3;\n}';
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$monokai = '\n.elmsh {\n    background: #23241f;\n    color: #f8f8f2;\n}\n\n.elmsh-hl {\n    background: #0e0f0d;\n}\n\n.elmsh-add {\n    background: #003800;\n}\n\n.elmsh-del {\n    background: #380000;\n}\n\n.elmsh-strong {\n    font-weight: bold;\n}\n\n.elmsh-emphasis {\n    font-style: italic;\n}\n\n.elmsh1 {\n    color: #75715e;\n}\n.elmsh2 {\n    color: #e6db74;\n}\n\n.elmsh3 {\n    color: #f92672;\n}\n\n.elmsh4 {\n    color: #66d9ef;\n}\n\n.elmsh5 {\n    color: #a6e22e;\n}\n\n.elmsh6 {\n    color: #ae81ff;\n}\n\n.elmsh7 {\n    color: #fd971f;\n}';

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme = function (_p0) {
	var _p1 = _p0;
	return A3(
		_elm_lang$html$Html$node,
		'style',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(_p1._0),
			_1: {ctor: '[]'}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$javascript = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$parse;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$xml = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$parse;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$parse;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toInlineHtml = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toInlineHtml;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toBlockHtml;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme = function (a) {
	return {ctor: 'Theme', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$monokai = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$monokai);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$github = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$github);

var _user$project$Codepress$viewTextarea = F2(
	function (attrs, code) {
		return A2(
			_elm_lang$html$Html$textarea,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$value(code),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'textarea', _1: true},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'textarea-lc', _1: true},
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$spellcheck(false),
							_1: {ctor: '[]'}
						}
					}
				},
				attrs),
			{ctor: '[]'});
	});
var _user$project$Codepress$findHighlight = F2(
	function (pane, state) {
		return A2(
			_elm_community$list_extra$List_Extra$find,
			function (_p0) {
				var _p1 = _p0;
				return _elm_lang$core$Native_Utils.eq(_p1._0, pane);
			},
			state.highlights);
	});
var _user$project$Codepress$findRegion = F2(
	function (pane, state) {
		var _p2 = A2(_user$project$Codepress$findHighlight, pane, state);
		if ((_p2.ctor === 'Just') && (_p2._0.ctor === '_Tuple2')) {
			return _p2._0._1;
		} else {
			return {ctor: '_Tuple2', _0: -1, _1: -1};
		}
	});
var _user$project$Codepress$getStateAt = F2(
	function (states, position) {
		return A2(_elm_community$list_extra$List_Extra$getAt, position, states);
	});
var _user$project$Codepress$viewNote = function (_p3) {
	var _p4 = _p3;
	var _p5 = A2(_user$project$Codepress$getStateAt, _p4.states, _p4.position);
	if (_p5.ctor === 'Just') {
		var _p6 = _p5._0.note;
		return _elm_lang$core$Native_Utils.eq(_p6, '') ? A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{ctor: '[]'}) : A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('note'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_evancz$elm_markdown$Markdown$toHtml,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('markdown-body'),
						_1: {ctor: '[]'}
					},
					_p6),
				_1: {ctor: '[]'}
			});
	} else {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{ctor: '[]'});
	}
};
var _user$project$Codepress$activeStyle = function (active) {
	return _elm_lang$core$Native_Utils.eq(active, true) ? {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: '#eff0eb'},
		_1: {ctor: '[]'}
	} : {ctor: '[]'};
};
var _user$project$Codepress$State = F4(
	function (a, b, c, d) {
		return {highlights: a, code: b, scroll: c, note: d};
	});
var _user$project$Codepress$Scroll = F2(
	function (a, b) {
		return {top: a, left: b};
	});
var _user$project$Codepress$onScroll = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'scroll',
		A2(
			_elm_lang$core$Json_Decode$map,
			msg,
			A3(
				_elm_lang$core$Json_Decode$map2,
				_user$project$Codepress$Scroll,
				A2(
					_elm_lang$core$Json_Decode$at,
					{
						ctor: '::',
						_0: 'target',
						_1: {
							ctor: '::',
							_0: 'scrollTop',
							_1: {ctor: '[]'}
						}
					},
					_elm_lang$core$Json_Decode$int),
				A2(
					_elm_lang$core$Json_Decode$at,
					{
						ctor: '::',
						_0: 'target',
						_1: {
							ctor: '::',
							_0: 'scrollLeft',
							_1: {ctor: '[]'}
						}
					},
					_elm_lang$core$Json_Decode$int))));
};
var _user$project$Codepress$Options = F4(
	function (a, b, c, d) {
		return {states: a, position: b, onScroll: c, onInput: d};
	});
var _user$project$Codepress$Right = {ctor: 'Right'};
var _user$project$Codepress$Left = {ctor: 'Left'};
var _user$project$Codepress$findCodeString = F2(
	function (pane, state) {
		return _elm_lang$core$Native_Utils.eq(pane, _user$project$Codepress$Left) ? _elm_lang$core$Tuple$first(state.code) : _elm_lang$core$Tuple$second(state.code);
	});
var _user$project$Codepress$viewPane = F3(
	function (options, pane, state) {
		var _p7 = function () {
			var _p8 = state;
			if (_p8.ctor === 'Just') {
				var _p9 = _p8._0;
				var region = A2(_user$project$Codepress$findRegion, pane, _p9);
				var str = A2(_user$project$Codepress$findCodeString, pane, _p9);
				return {ctor: '_Tuple3', _0: str, _1: region, _2: _p9.scroll};
			} else {
				return {
					ctor: '_Tuple3',
					_0: '',
					_1: {ctor: '_Tuple2', _0: -1, _1: -1},
					_2: A2(_user$project$Codepress$Scroll, 0, 0)
				};
			}
		}();
		var str = _p7._0;
		var start = _p7._1._0;
		var end = _p7._1._1;
		var scroll = _p7._2;
		return {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('view-container'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'transform',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'translate(',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(0 - scroll.left),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'px, ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(0 - scroll.top),
													'px)'))))
								},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'will-change', _1: 'transform'},
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$monokai),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.eq(
							_elm_lang$core$String$length(str),
							0) ? A2(
							_elm_lang$html$Html$pre,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$code,
									{ctor: '[]'},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							}) : A2(
							_elm_lang$core$Result$withDefault,
							A2(
								_elm_lang$html$Html$pre,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$code,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(str),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}),
							A2(
								_elm_lang$core$Result$map,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml(
									_elm_lang$core$Maybe$Just(1)),
								A2(
									_elm_lang$core$Result$map,
									A3(
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLines,
										_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal),
										start - 1,
										end),
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm(str)))),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.eq(pane, _user$project$Codepress$Left) ? A2(
					_user$project$Codepress$viewTextarea,
					{
						ctor: '::',
						_0: _user$project$Codepress$onScroll(
							options.onScroll(pane)),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onInput(options.onInput),
							_1: {ctor: '[]'}
						}
					},
					str) : A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			}
		};
	});
var _user$project$Codepress$view = function (options) {
	var state = A2(_user$project$Codepress$getStateAt, options.states, options.position);
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('presentation'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('pane left container'),
					_1: {ctor: '[]'}
				},
				A3(_user$project$Codepress$viewPane, options, _user$project$Codepress$Left, state)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('pane right container'),
						_1: {ctor: '[]'}
					},
					A3(_user$project$Codepress$viewPane, options, _user$project$Codepress$Right, state)),
				_1: {
					ctor: '::',
					_0: _user$project$Codepress$viewNote(options),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Codepress$toHtml = _user$project$Codepress$view;

var _wende$elchemy$Helpers_ops = _wende$elchemy$Helpers_ops || {};
_wende$elchemy$Helpers_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _wende$elchemy$Helpers$applicationToList = function (application) {
	var _p0 = application;
	if (_p0.ctor === 'Application') {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_wende$elchemy$Helpers$applicationToList(_p0._0),
			{
				ctor: '::',
				_0: _p0._1,
				_1: {ctor: '[]'}
			});
	} else {
		return {
			ctor: '::',
			_0: _p0,
			_1: {ctor: '[]'}
		};
	}
};
var _wende$elchemy$Helpers$modulePathName = _elm_lang$core$String$join('.');
var _wende$elchemy$Helpers$maybeOr = F2(
	function (m1, m2) {
		var _p1 = m1;
		if (_p1.ctor === 'Just') {
			return m1;
		} else {
			return m2;
		}
	});
var _wende$elchemy$Helpers$reservedWords = {
	ctor: '::',
	_0: 'fn',
	_1: {
		ctor: '::',
		_0: 'do',
		_1: {
			ctor: '::',
			_0: 'end',
			_1: {
				ctor: '::',
				_0: 'cond',
				_1: {
					ctor: '::',
					_0: 'receive',
					_1: {
						ctor: '::',
						_0: 'or',
						_1: {
							ctor: '::',
							_0: 'and',
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	}
};
var _wende$elchemy$Helpers$replaceReserved = function (a) {
	return A2(_elm_lang$core$List$member, a, _wende$elchemy$Helpers$reservedWords) ? A2(_elm_lang$core$Basics_ops['++'], a, '__') : a;
};
var _wende$elchemy$Helpers$isStdModule = function (a) {
	return A2(
		_elm_lang$core$List$member,
		a,
		{
			ctor: '::',
			_0: 'Basics',
			_1: {
				ctor: '::',
				_0: 'Bitwise',
				_1: {
					ctor: '::',
					_0: 'Char',
					_1: {
						ctor: '::',
						_0: 'Date',
						_1: {
							ctor: '::',
							_0: 'Debug',
							_1: {
								ctor: '::',
								_0: 'Dict',
								_1: {
									ctor: '::',
									_0: 'List',
									_1: {
										ctor: '::',
										_0: 'String',
										_1: {
											ctor: '::',
											_0: 'Maybe',
											_1: {
												ctor: '::',
												_0: 'Regex',
												_1: {
													ctor: '::',
													_0: 'Result',
													_1: {
														ctor: '::',
														_0: 'Set',
														_1: {
															ctor: '::',
															_0: 'String',
															_1: {
																ctor: '::',
																_0: 'Tuple',
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _wende$elchemy$Helpers$maybeReplaceStd = function (s) {
	return _wende$elchemy$Helpers$isStdModule(s) ? A2(_elm_lang$core$Basics_ops['++'], 'X', s) : s;
};
var _wende$elchemy$Helpers$ops = A2(
	_elm_lang$core$List$indexedMap,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}),
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('+'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('/'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('*'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('='),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('.'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('$'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('<'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('>'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr(':'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('&'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('|'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr('^'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('?'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('#'),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Native_Utils.chr('@'),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$core$Native_Utils.chr('~'),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$core$Native_Utils.chr('!'),
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _wende$elchemy$Helpers$replaceOp_ = function (op) {
	var _p4 = A2(
		_elm_lang$core$List$filter,
		function (_p2) {
			var _p3 = _p2;
			return _elm_lang$core$Native_Utils.eq(op, _p3._1);
		},
		_wende$elchemy$Helpers$ops);
	if ((_p4.ctor === '::') && (_p4._0.ctor === '_Tuple2')) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'op',
			_elm_lang$core$Basics$toString(_p4._0._0));
	} else {
		return _elm_lang$core$Native_Utils.crashCase(
			'Helpers',
			{
				start: {line: 301, column: 5},
				end: {line: 308, column: 37}
			},
			_p4)('Illegal op');
	}
};
var _wende$elchemy$Helpers$replaceOp = function (op) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'__',
		A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$map,
				_wende$elchemy$Helpers$replaceOp_,
				_elm_lang$core$String$toList(op))));
};
var _wende$elchemy$Helpers$escape = function (s) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('\\\\'),
		_elm_lang$core$Basics$always('\\\\'),
		s);
};
var _wende$elchemy$Helpers$generateArguments_ = F2(
	function (str, n) {
		return A2(
			_elm_lang$core$List$map,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				})(str),
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$toString,
				A2(_elm_lang$core$List$range, 1, n)));
	});
var _wende$elchemy$Helpers$generateArguments = _wende$elchemy$Helpers$generateArguments_('x');
var _wende$elchemy$Helpers$trimIndentations = function (line) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('\\s+\\n'),
		_elm_lang$core$Basics$always('\n'),
		line);
};
var _wende$elchemy$Helpers$operators = A3(
	_elm_lang$core$List$foldl,
	_elm_lang$core$Basics$uncurry(_elm_lang$core$Dict$insert),
	_elm_lang$core$Dict$empty,
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: '||', _1: '||'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: '&&', _1: '&&'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: '==', _1: '=='},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: '/=', _1: '!='},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: '<', _1: '<'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: '>', _1: '>'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: '>=', _1: '>='},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: '<=', _1: '<='},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: '++', _1: '++'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '+', _1: '+'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '-', _1: '-'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '*', _1: '*'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '/', _1: '/'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: '>>', _1: '>>>'},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: '<|', _1: ''},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: '<<', _1: ''},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: '|>', _1: '|>'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: '%', _1: 'rem'},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: '//', _1: 'div'},
																				_1: {
																					ctor: '::',
																					_0: {ctor: '_Tuple2', _0: '^', _1: ''},
																					_1: {
																						ctor: '::',
																						_0: {ctor: '_Tuple2', _0: '::', _1: 'cons'},
																						_1: {
																							ctor: '::',
																							_0: {ctor: '_Tuple2', _0: 'not', _1: '!'},
																							_1: {
																								ctor: '::',
																								_0: {ctor: '_Tuple2', _0: ',', _1: 'tuple2'},
																								_1: {
																									ctor: '::',
																									_0: {ctor: '_Tuple2', _0: ',,', _1: 'tuple3'},
																									_1: {
																										ctor: '::',
																										_0: {ctor: '_Tuple2', _0: ',,,', _1: 'tuple4'},
																										_1: {
																											ctor: '::',
																											_0: {ctor: '_Tuple2', _0: ',,,,', _1: 'tuple5'},
																											_1: {
																												ctor: '::',
																												_0: {ctor: '_Tuple2', _0: 'as', _1: '='},
																												_1: {ctor: '[]'}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _wende$elchemy$Helpers$translateOperator = function (op) {
	var _p6 = A2(_elm_lang$core$Dict$get, op, _wende$elchemy$Helpers$operators);
	if (_p6.ctor === 'Just') {
		if (_p6._0 === '') {
			return _elm_lang$core$Native_Utils.crashCase(
				'Helpers',
				{
					start: {line: 203, column: 5},
					end: {line: 213, column: 25}
				},
				_p6)(
				A2(_elm_lang$core$Basics_ops['++'], op, ' is not a valid or not implemented yet operator'));
		} else {
			return _p6._0;
		}
	} else {
		return _wende$elchemy$Helpers$replaceOp(op);
	}
};
var _wende$elchemy$Helpers$unquoteSplicing = A3(
	_elm_lang$core$Regex$replace,
	_elm_lang$core$Regex$All,
	_elm_lang$core$Regex$regex('(^\\{|\\}$)'),
	function (_p8) {
		return '';
	});
var _wende$elchemy$Helpers$uncons = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Just(_p9._0),
			_1: _p9._1
		};
	} else {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Nothing,
			_1: {ctor: '[]'}
		};
	}
};
var _wende$elchemy$Helpers$lastAndRest = function (list) {
	return A2(
		_elm_lang$core$Tuple$mapSecond,
		_elm_lang$core$List$reverse,
		_wende$elchemy$Helpers$uncons(
			_elm_lang$core$List$reverse(list)));
};
var _wende$elchemy$Helpers$prependAll = F2(
	function ($with, target) {
		return A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				function (line) {
					return _elm_lang$core$Native_Utils.eq(
						_elm_lang$core$String$trim(line),
						'') ? line : A2(_elm_lang$core$Basics_ops['++'], $with, line);
				},
				_elm_lang$core$String$lines(target)));
	});
var _wende$elchemy$Helpers$indNoNewline = function (i) {
	return A2(
		_elm_lang$core$String$join,
		'',
		A2(_elm_lang$core$List$repeat, (i + 1) * 2, ' '));
};
var _wende$elchemy$Helpers$ind = function (i) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'\n',
		_wende$elchemy$Helpers$indNoNewline(i));
};
var _wende$elchemy$Helpers$indAll = F2(
	function (i, s) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n',
			A2(
				_wende$elchemy$Helpers$prependAll,
				A2(
					_elm_lang$core$String$dropLeft,
					1,
					_wende$elchemy$Helpers$ind(i)),
				s));
	});
var _wende$elchemy$Helpers$isCapitilzed = function (s) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		false,
		A2(
			_elm_lang$core$Maybe$map,
			function (a) {
				return _elm_lang$core$Char$isUpper(
					_elm_lang$core$Tuple$first(a));
			},
			_elm_lang$core$String$uncons(s)));
};
var _wende$elchemy$Helpers$capitalize = function (s) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (a) {
				return A2(
					_elm_lang$core$String$cons,
					_elm_lang$core$Char$toUpper(
						_elm_lang$core$Tuple$first(a)),
					_elm_lang$core$Tuple$second(a));
			},
			_elm_lang$core$String$uncons(s)));
};
var _wende$elchemy$Helpers$isUpper = function (string) {
	var _p10 = _elm_lang$core$String$uncons(string);
	if (_p10.ctor === 'Just') {
		return _elm_lang$core$Char$isUpper(_p10._0._0);
	} else {
		return false;
	}
};
var _wende$elchemy$Helpers$toSnakeCase = F2(
	function (isntAtom, s) {
		var string = isntAtom ? _wende$elchemy$Helpers$replaceReserved(s) : s;
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$toUpper(string),
			string) ? _elm_lang$core$String$toLower(string) : _elm_lang$core$String$toLower(
			A2(
				_elm_lang$core$String$join,
				'_',
				A3(
					_elm_lang$core$Regex$split,
					_elm_lang$core$Regex$All,
					_elm_lang$core$Regex$regex('(?=[A-Z])'),
					string)));
	});
var _wende$elchemy$Helpers$atomize = function (s) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		':',
		A2(_wende$elchemy$Helpers$toSnakeCase, false, s));
};
var _wende$elchemy$Helpers$modulePath = function (list) {
	var snakeIfLower = function (a) {
		return _wende$elchemy$Helpers$isUpper(a) ? a : A2(_wende$elchemy$Helpers$toSnakeCase, true, a);
	};
	return A2(
		_elm_lang$core$String$join,
		'.',
		A2(
			_elm_lang$core$List$map,
			_wende$elchemy$Helpers$maybeReplaceStd,
			A2(_elm_lang$core$List$map, snakeIfLower, list)));
};
var _wende$elchemy$Helpers$notImplemented = F2(
	function (feature, value) {
		return _elm_lang$core$Native_Utils.crash(
			'Helpers',
			{
				start: {line: 24, column: 12},
				end: {line: 24, column: 23}
			})(
			A2(
				_elm_lang$core$Basics_ops['++'],
				' ## ERROR: No ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					feature,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' implementation for ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(value),
							A2(_elm_lang$core$Basics_ops['++'], ' yet', '\n'))))));
	});
var _wende$elchemy$Helpers$Lower = function (a) {
	return {ctor: 'Lower', _0: a};
};
var _wende$elchemy$Helpers$Upper = function (a) {
	return {ctor: 'Upper', _0: a};
};
var _wende$elchemy$Helpers$Custom = {ctor: 'Custom'};
var _wende$elchemy$Helpers$Builtin = {ctor: 'Builtin'};
var _wende$elchemy$Helpers$None = {ctor: 'None'};
var _wende$elchemy$Helpers$operatorType = function (name) {
	var is_custom = A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('^[+\\-\\/*=.$<>:&|^?%#@~!]+$'),
		name);
	var is_builtin = A2(
		_elm_lang$core$List$any,
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(name),
		_elm_lang$core$Dict$keys(_wende$elchemy$Helpers$operators));
	var _p11 = {ctor: '_Tuple2', _0: is_builtin, _1: is_custom};
	_v7_2:
	do {
		if (_p11.ctor === '_Tuple2') {
			if (_p11._0 === true) {
				return _wende$elchemy$Helpers$Builtin;
			} else {
				if (_p11._1 === true) {
					return _wende$elchemy$Helpers$Custom;
				} else {
					break _v7_2;
				}
			}
		} else {
			break _v7_2;
		}
	} while(false);
	return _wende$elchemy$Helpers$None;
};
var _wende$elchemy$Helpers$isCustomOperator = function (op) {
	return _elm_lang$core$Native_Utils.eq(
		_wende$elchemy$Helpers$operatorType(op),
		_wende$elchemy$Helpers$Custom);
};

var _wende$elchemy$ExContext$mergeTypes = F3(
	function (set, mod, c) {
		var getFunctionExportName = function (a) {
			var _p0 = a;
			if (_p0.ctor === 'FunctionExport') {
				return _p0._0;
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'ExContext',
					{
						start: {line: 317, column: 13},
						end: {line: 322, column: 78}
					},
					_p0)(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Something went wrong with ',
						_elm_lang$core$Basics$toString(a)));
			}
		};
		var getTypeNames = F2(
			function (aliasName, subset) {
				var _p2 = subset;
				if (_p2.ctor === 'Just') {
					switch (_p2._0.ctor) {
						case 'SubsetExport':
							return A2(_elm_lang$core$List$map, getFunctionExportName, _p2._0._0);
						case 'AllExport':
							return A2(
								_elm_lang$core$Maybe$withDefault,
								{ctor: '[]'},
								A2(
									_elm_lang$core$Maybe$map,
									function (_) {
										return _.types;
									},
									A2(
										_elm_lang$core$Maybe$andThen,
										_elm_lang$core$Dict$get(aliasName),
										A2(_elm_lang$core$Dict$get, c.mod, c.aliases))));
						default:
							return _elm_lang$core$Native_Utils.crashCase(
								'ExContext',
								{
									start: {line: 326, column: 13},
									end: {line: 341, column: 83}
								},
								_p2)(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Something went wrong with ',
									_elm_lang$core$Basics$toString(subset)));
					}
				} else {
					return {ctor: '[]'};
				}
			});
		var importConflict = F4(
			function (key, a, b, _p4) {
				return _elm_lang$core$Native_Utils.crash(
					'ExContext',
					{
						start: {line: 293, column: 13},
						end: {line: 293, column: 24}
					})(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'You can\'t have two same imports for name ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							key,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'\nFirst one (from ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									c.mod,
									A2(
										_elm_lang$core$Basics_ops['++'],
										') is:\n',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(a),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'\n Second one (from ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													mod,
													A2(
														_elm_lang$core$Basics_ops['++'],
														') is:\n',
														_elm_lang$core$Basics$toString(b)))))))))));
			});
		var mergeDicts = F2(
			function (left, right) {
				return A6(_elm_lang$core$Dict$merge, _elm_lang$core$Dict$insert, importConflict, _elm_lang$core$Dict$insert, left, right, _elm_lang$core$Dict$empty);
			});
		var addThese = F3(
			function (name, add, dict) {
				return A3(
					_elm_lang$core$Dict$update,
					name,
					function (_p5) {
						return _elm_lang$core$Maybe$Just(
							A2(
								_elm_lang$core$Maybe$withDefault,
								add,
								A2(
									_elm_lang$core$Maybe$map,
									mergeDicts(add),
									_p5)));
					},
					dict);
			});
		var getAll = F2(
			function (name, dict) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Dict$empty,
					A2(_elm_lang$core$Dict$get, name, dict));
			});
		var getThese = F3(
			function (name, f, dict) {
				return A2(
					_elm_lang$core$Dict$filter,
					function (_p6) {
						return _elm_lang$core$Basics$always(
							f(_p6));
					},
					A2(getAll, name, dict));
			});
		var getAliasWithName = function (aliasName) {
			return A3(
				getThese,
				mod,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(aliasName),
				c.aliases);
		};
		var getTypesInNames = F2(
			function (aliasName, names) {
				return A3(
					getThese,
					mod,
					A2(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$List$member,
						A2(getTypeNames, aliasName, names)),
					c.types);
			});
		var importOne = F2(
			function ($export, c) {
				var _p7 = $export;
				switch (_p7.ctor) {
					case 'TypeExport':
						var _p8 = _p7._0;
						return _elm_lang$core$Native_Utils.update(
							c,
							{
								aliases: A3(
									addThese,
									c.mod,
									getAliasWithName(_p8),
									c.aliases),
								types: A3(
									addThese,
									c.mod,
									A2(getTypesInNames, _p8, _p7._1),
									c.types)
							});
					case 'FunctionExport':
						return c;
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'ExContext',
							{
								start: {line: 350, column: 13},
								end: {line: 361, column: 69}
							},
							_p7)('You can\'t import subset of subsets');
				}
			});
		var _p10 = set;
		switch (_p10.ctor) {
			case 'AllExport':
				return _elm_lang$core$Native_Utils.update(
					c,
					{
						types: A3(
							addThese,
							c.mod,
							A2(getAll, mod, c.types),
							c.types),
						aliases: A3(
							addThese,
							c.mod,
							A2(getAll, mod, c.aliases),
							c.aliases)
					});
			case 'SubsetExport':
				return A3(_elm_lang$core$List$foldl, importOne, c, _p10._0);
			default:
				return _elm_lang$core$Native_Utils.crashCase(
					'ExContext',
					{
						start: {line: 363, column: 9},
						end: {line: 374, column: 77}
					},
					_p10)('You can\'t import something that\'s not a subset');
		}
	});
var _wende$elchemy$ExContext$mergeVariables = F2(
	function (left, right) {
		return _elm_lang$core$Native_Utils.update(
			left,
			{
				variables: A2(_elm_lang$core$Set$union, left.variables, right.variables)
			});
	});
var _wende$elchemy$ExContext$isPrivate = F2(
	function (context, name) {
		var _p12 = context.exports;
		switch (_p12.ctor) {
			case 'SubsetExport':
				return A2(
					_elm_lang$core$List$any,
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						})(
						_Bogdanp$elm_ast$Ast_Statement$FunctionExport(name)),
					_p12._0) ? false : true;
			case 'AllExport':
				return false;
			default:
				return _elm_lang$core$Native_Utils.crashCase(
					'ExContext',
					{
						start: {line: 256, column: 5},
						end: {line: 267, column: 41}
					},
					_p12)('No such export');
		}
	});
var _wende$elchemy$ExContext$inArgs = function (c) {
	return _elm_lang$core$Native_Utils.update(
		c,
		{inArgs: true});
};
var _wende$elchemy$ExContext$hasFlag = F3(
	function (key, value, c) {
		return A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(
				{ctor: '_Tuple2', _0: key, _1: value}),
			c.flags);
	});
var _wende$elchemy$ExContext$getAllFlags = F2(
	function (key, c) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$second,
			A2(
				_elm_lang$core$List$filter,
				function (_p14) {
					return A2(
						F2(
							function (x, y) {
								return _elm_lang$core$Native_Utils.eq(x, y);
							}),
						key,
						_elm_lang$core$Tuple$first(_p14));
				},
				c.flags));
	});
var _wende$elchemy$ExContext$onlyWithoutFlag = F4(
	function (c, key, value, code) {
		return A3(_wende$elchemy$ExContext$hasFlag, key, value, c) ? '' : code;
	});
var _wende$elchemy$ExContext$addFlag = F2(
	function (flag, c) {
		return _elm_lang$core$Native_Utils.update(
			c,
			{
				flags: {ctor: '::', _0: flag, _1: c.flags}
			});
	});
var _wende$elchemy$ExContext$deindent = function (c) {
	return _elm_lang$core$Native_Utils.update(
		c,
		{indent: c.indent - 1});
};
var _wende$elchemy$ExContext$indent = function (c) {
	return _elm_lang$core$Native_Utils.update(
		c,
		{indent: c.indent + 1});
};
var _wende$elchemy$ExContext$getFromContext = F4(
	function (from, mod, name, context) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			_elm_lang$core$Dict$get(name),
			A2(
				_elm_lang$core$Dict$get,
				mod,
				from(context)));
	});
var _wende$elchemy$ExContext$getAlias = _wende$elchemy$ExContext$getFromContext(
	function (_) {
		return _.aliases;
	});
var _wende$elchemy$ExContext$getType = _wende$elchemy$ExContext$getFromContext(
	function (_) {
		return _.types;
	});
var _wende$elchemy$ExContext$addType = F4(
	function (mod, name, arity, context) {
		var t = {arity: arity, parentModule: mod};
		var putType = function (maybeMod) {
			return _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$core$Maybe$withDefault,
					A2(_elm_lang$core$Dict$singleton, name, t),
					A2(
						_elm_lang$core$Maybe$map,
						A2(_elm_lang$core$Dict$insert, name, t),
						maybeMod)));
		};
		return _elm_lang$core$Native_Utils.update(
			context,
			{
				types: A3(_elm_lang$core$Dict$update, mod, putType, context.types)
			});
	});
var _wende$elchemy$ExContext$addAlias = F4(
	function (mod, name, ali, context) {
		var putAlias = function (maybeMod) {
			return _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$core$Maybe$withDefault,
					A2(_elm_lang$core$Dict$singleton, name, ali),
					A2(
						_elm_lang$core$Maybe$map,
						A2(_elm_lang$core$Dict$insert, name, ali),
						maybeMod)));
		};
		return _elm_lang$core$Native_Utils.update(
			context,
			{
				aliases: A3(_elm_lang$core$Dict$update, mod, putAlias, context.aliases)
			});
	});
var _wende$elchemy$ExContext$wrongArityAlias = F3(
	function (arity, list, name) {
		return _elm_lang$core$Native_Utils.crash(
			'ExContext',
			{
				start: {line: 118, column: 5},
				end: {line: 118, column: 16}
			})(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'Expected ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(arity),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' arguments for ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							name,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'. But got ',
								_elm_lang$core$Basics$toString(
									_elm_lang$core$List$length(list))))))));
	});
var _wende$elchemy$ExContext$Alias = F6(
	function (a, b, c, d, e, f) {
		return {parentModule: a, arity: b, aliasType: c, body: d, getTypeBody: e, types: f};
	});
var _wende$elchemy$ExContext$UnionType = F2(
	function (a, b) {
		return {arity: a, parentModule: b};
	});
var _wende$elchemy$ExContext$Definition = F2(
	function (a, b) {
		return {arity: a, def: b};
	});
var _wende$elchemy$ExContext$Context = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {mod: a, exports: b, indent: c, aliases: d, types: e, flags: f, definitions: g, variables: h, inArgs: i, hasModuleDoc: j, lastDoc: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _wende$elchemy$ExContext$empty = F2(
	function (name, exports) {
		return _wende$elchemy$ExContext$Context(name)(exports)(0)(_elm_lang$core$Dict$empty)(_elm_lang$core$Dict$empty)(
			{ctor: '[]'})(_elm_lang$core$Dict$empty)(_elm_lang$core$Set$empty)(false)(false)(_elm_lang$core$Maybe$Nothing);
	});
var _wende$elchemy$ExContext$TypeAlias = {ctor: 'TypeAlias'};
var _wende$elchemy$ExContext$Type = {ctor: 'Type'};

var _wende$elchemy$ExAlias$localAlias = F2(
	function (name, context) {
		return A3(_wende$elchemy$ExContext$getAlias, context.mod, name, context);
	});
var _wende$elchemy$ExAlias$resolveTypes = F3(
	function (expected, given, $return) {
		var expectedName = function (n) {
			var _p0 = n;
			if (_p0.ctor === 'TypeVariable') {
				return _p0._0;
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'ExAlias',
					{
						start: {line: 120, column: 13},
						end: {line: 128, column: 46}
					},
					_p0)(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'type can only take variables. ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p0),
							'is incorrect')));
			}
		};
		var paramsWithResolution = A3(
			_elm_lang$core$List$foldl,
			_elm_lang$core$Basics$uncurry(_elm_lang$core$Dict$insert),
			_elm_lang$core$Dict$empty,
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				A2(_elm_lang$core$List$map, expectedName, expected),
				given));
		var replace = function (t) {
			replace:
			while (true) {
				var _p2 = t;
				switch (_p2.ctor) {
					case 'TypeVariable':
						return A2(
							_elm_lang$core$Maybe$withDefault,
							_p2,
							A2(_elm_lang$core$Dict$get, _p2._0, paramsWithResolution));
					case 'TypeConstructor':
						return A2(
							_Bogdanp$elm_ast$Ast_Statement$TypeConstructor,
							_p2._0,
							A2(_elm_lang$core$List$map, replace, _p2._1));
					case 'TypeRecordConstructor':
						return A2(
							_Bogdanp$elm_ast$Ast_Statement$TypeRecordConstructor,
							replace(_p2._0),
							A2(
								_elm_lang$core$List$map,
								_elm_lang$core$Tuple$mapSecond(replace),
								_p2._1));
					case 'TypeTuple':
						if ((_p2._0.ctor === '::') && (_p2._0._1.ctor === '[]')) {
							var _v2 = _p2._0._0;
							t = _v2;
							continue replace;
						} else {
							return _Bogdanp$elm_ast$Ast_Statement$TypeTuple(
								A2(_elm_lang$core$List$map, replace, _p2._0));
						}
					case 'TypeRecord':
						return _Bogdanp$elm_ast$Ast_Statement$TypeRecord(
							A2(
								_elm_lang$core$List$map,
								_elm_lang$core$Tuple$mapSecond(replace),
								_p2._0));
					default:
						return A2(
							_Bogdanp$elm_ast$Ast_Statement$TypeApplication,
							replace(_p2._0),
							replace(_p2._1));
				}
			}
		};
		return replace($return);
	});
var _wende$elchemy$ExAlias$replaceAliasArgs = F4(
	function (name, expectedArgs, $return, givenArgs) {
		var expected = _elm_lang$core$List$length(expectedArgs);
		var arity = _elm_lang$core$List$length(givenArgs);
		return _elm_lang$core$Native_Utils.eq(arity, expected) ? A3(_wende$elchemy$ExAlias$resolveTypes, expectedArgs, givenArgs, $return) : A3(_wende$elchemy$ExContext$wrongArityAlias, expected, givenArgs, name);
	});
var _wende$elchemy$ExAlias$registerTypes = F2(
	function (types, c) {
		var addType = F2(
			function (t, _p3) {
				var _p4 = _p3;
				var _p5 = t;
				if (((_p5.ctor === 'TypeConstructor') && (_p5._0.ctor === '::')) && (_p5._0._1.ctor === '[]')) {
					var _p6 = _p5._0._0;
					return A2(
						_wende$elchemy$Helpers_ops['=>'],
						{ctor: '::', _0: _p6, _1: _p4._0},
						A4(
							_wende$elchemy$ExContext$addType,
							c.mod,
							_p6,
							_elm_lang$core$List$length(_p5._1),
							_p4._1));
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'ExAlias',
						{
							start: {line: 85, column: 13},
							end: {line: 94, column: 65}
						},
						_p5)('Type can only start with a tag');
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			addType,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: c
			},
			types);
	});
var _wende$elchemy$ExAlias$registerUnionType = F3(
	function (c, tc, types) {
		var _p8 = tc;
		if (((_p8.ctor === 'TypeConstructor') && (_p8._0.ctor === '::')) && (_p8._0._1.ctor === '[]')) {
			var _p10 = _p8._0._0;
			var _p9 = A2(_wende$elchemy$ExAlias$registerTypes, types, c);
			var names = _p9._0;
			var newC = _p9._1;
			var arity = _elm_lang$core$List$length(_p8._1);
			var typeVar = _Bogdanp$elm_ast$Ast_Statement$TypeVariable(
				A2(_elm_lang$core$Basics_ops['++'], '@', _p10));
			var typeBody = _elm_lang$core$Basics$always(typeVar);
			var ali = A6(_wende$elchemy$ExContext$Alias, c.mod, arity, _wende$elchemy$ExContext$Type, typeVar, typeBody, names);
			return A4(_wende$elchemy$ExContext$addAlias, c.mod, _p10, ali, newC);
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'ExAlias',
				{
					start: {line: 57, column: 5},
					end: {line: 78, column: 68}
				},
				_p8)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Wrong type declaration ',
					_elm_lang$core$Basics$toString(_p8)));
		}
	});
var _wende$elchemy$ExAlias$registerTypeAlias = F3(
	function (c, tc, t) {
		var _p12 = tc;
		if (((_p12.ctor === 'TypeConstructor') && (_p12._0.ctor === '::')) && (_p12._0._1.ctor === '[]')) {
			var _p14 = _p12._0._0;
			var _p13 = _p12._1;
			var typeBody = A3(_wende$elchemy$ExAlias$replaceAliasArgs, _p14, _p13, t);
			var arity = _elm_lang$core$List$length(_p13);
			var ali = A6(
				_wende$elchemy$ExContext$Alias,
				c.mod,
				arity,
				_wende$elchemy$ExContext$TypeAlias,
				t,
				typeBody,
				{ctor: '[]'});
			return A4(_wende$elchemy$ExContext$addAlias, c.mod, _p14, ali, c);
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'ExAlias',
				{
					start: {line: 37, column: 5},
					end: {line: 52, column: 74}
				},
				_p12)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Wrong type alias declaration ',
					_elm_lang$core$Basics$toString(_p12)));
		}
	});
var _wende$elchemy$ExAlias$registerAlias = F2(
	function (s, c) {
		var _p16 = s;
		switch (_p16.ctor) {
			case 'TypeAliasDeclaration':
				return A3(_wende$elchemy$ExAlias$registerTypeAlias, c, _p16._0, _p16._1);
			case 'TypeDeclaration':
				return A3(_wende$elchemy$ExAlias$registerUnionType, c, _p16._0, _p16._1);
			default:
				return c;
		}
	});
var _wende$elchemy$ExAlias$getAliases = F2(
	function (c, list) {
		return A3(_elm_lang$core$List$foldl, _wende$elchemy$ExAlias$registerAlias, c, list);
	});

var _wende$elchemy$ExType$constructApplication = function (list) {
	var _p0 = list;
	if (_p0.ctor === '[]') {
		return _elm_lang$core$Native_Utils.crashCase(
			'ExType',
			{
				start: {line: 312, column: 5},
				end: {line: 320, column: 92}
			},
			_p0)('Wrong application');
	} else {
		if (_p0._1.ctor === '[]') {
			return {
				ctor: '::',
				_0: _Bogdanp$elm_ast$Ast_Expression$Variable(
					{
						ctor: '::',
						_0: _p0._0,
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			};
		} else {
			return {
				ctor: '::',
				_0: A3(
					_elm_lang$core$List$foldl,
					F2(
						function (a, acc) {
							return A2(
								_Bogdanp$elm_ast$Ast_Expression$Application,
								acc,
								_Bogdanp$elm_ast$Ast_Expression$Variable(
									{
										ctor: '::',
										_0: a,
										_1: {ctor: '[]'}
									}));
						}),
					_Bogdanp$elm_ast$Ast_Expression$Variable(
						{
							ctor: '::',
							_0: _p0._0,
							_1: {ctor: '[]'}
						}),
					_p0._1),
				_1: {ctor: '[]'}
			};
		}
	}
};
var _wende$elchemy$ExType$typealiasConstructor = F2(
	function (args, _p2) {
		typealiasConstructor:
		while (true) {
			var _p3 = _p2;
			var _p4 = {ctor: '_Tuple2', _0: _p3.aliasType, _1: _p3.body};
			_v2_6:
			do {
				_v2_0:
				do {
					if (_p4.ctor === '_Tuple2') {
						switch (_p4._1.ctor) {
							case 'TypeConstructor':
								if (_p4._0.ctor === 'Type') {
									break _v2_0;
								} else {
									if ((_p4._1._0.ctor === '::') && (_p4._1._0._1.ctor === '[]')) {
										return _elm_lang$core$Maybe$Nothing;
									} else {
										break _v2_6;
									}
								}
							case 'TypeRecord':
								if (_p4._0.ctor === 'Type') {
									break _v2_0;
								} else {
									var _p8 = _p4._1._0;
									var args = A2(
										_elm_lang$core$List$map,
										function (_p5) {
											return A2(
												F2(
													function (x, y) {
														return A2(_elm_lang$core$Basics_ops['++'], x, y);
													}),
												'arg',
												_elm_lang$core$Basics$toString(_p5));
										},
										A2(
											_elm_lang$core$List$range,
											1,
											_elm_lang$core$List$length(_p8)));
									var varargs = A2(
										_elm_lang$core$List$map,
										_elm_lang$core$Tuple$mapSecond(
											function (_p6) {
												return _Bogdanp$elm_ast$Ast_Expression$Variable(
													_elm_lang$core$List$singleton(_p6));
											}),
										A2(
											_elm_lang$core$List$map,
											_elm_lang$core$Tuple$mapFirst(_elm_lang$core$Tuple$first),
											A3(
												_elm_lang$core$List$map2,
												_elm_lang$core$Basics$flip(
													F2(
														function (v0, v1) {
															return {ctor: '_Tuple2', _0: v0, _1: v1};
														})),
												args,
												_p8)));
									return _elm_lang$core$Maybe$Just(
										A2(
											_Bogdanp$elm_ast$Ast_Expression$Lambda,
											A2(
												_elm_lang$core$List$map,
												function (_p7) {
													return _Bogdanp$elm_ast$Ast_Expression$Variable(
														_elm_lang$core$List$singleton(_p7));
												},
												args),
											_Bogdanp$elm_ast$Ast_Expression$Record(varargs)));
								}
							case 'TypeTuple':
								if (_p4._0.ctor === 'Type') {
									break _v2_0;
								} else {
									if ((_p4._1._0.ctor === '::') && (_p4._1._0._1.ctor === '[]')) {
										var _v3 = args,
											_v4 = _elm_lang$core$Native_Utils.update(
											_p3,
											{
												getTypeBody: function (_p9) {
													return _p4._1._0._0;
												}
											});
										args = _v3;
										_p2 = _v4;
										continue typealiasConstructor;
									} else {
										var args = A2(
											_elm_lang$core$List$map,
											function (_p10) {
												return _Bogdanp$elm_ast$Ast_Expression$Variable(
													_elm_lang$core$List$singleton(_p10));
											},
											A2(
												_elm_lang$core$List$map,
												function (_p11) {
													return A2(
														F2(
															function (x, y) {
																return A2(_elm_lang$core$Basics_ops['++'], x, y);
															}),
														'arg',
														_elm_lang$core$Basics$toString(_p11));
												},
												A2(
													_elm_lang$core$List$range,
													1,
													_elm_lang$core$List$length(_p4._1._0))));
										return _elm_lang$core$Maybe$Just(
											A2(
												_Bogdanp$elm_ast$Ast_Expression$Lambda,
												args,
												_Bogdanp$elm_ast$Ast_Expression$Tuple(args)));
									}
								}
							case 'TypeVariable':
								if (_p4._0.ctor === 'Type') {
									break _v2_0;
								} else {
									return _elm_lang$core$Maybe$Just(
										_Bogdanp$elm_ast$Ast_Expression$Variable(
											{
												ctor: '::',
												_0: _p4._1._0,
												_1: {ctor: '[]'}
											}));
								}
							default:
								if (_p4._0.ctor === 'Type') {
									break _v2_0;
								} else {
									break _v2_6;
								}
						}
					} else {
						break _v2_6;
					}
				} while(false);
				return _elm_lang$core$Maybe$Nothing;
			} while(false);
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _wende$elchemy$ExType$filterMaybe = F2(
	function (f, m) {
		return A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Maybe$andThen,
			m,
			function (a) {
				return f(a) ? _elm_lang$core$Maybe$Just(a) : _elm_lang$core$Maybe$Nothing;
			});
	});
var _wende$elchemy$ExType$find = function (f) {
	return A3(
		_elm_lang$core$Basics$flip,
		_elm_lang$core$List$foldl,
		_elm_lang$core$Maybe$Nothing,
		F2(
			function (a, acc) {
				return f(a) ? _elm_lang$core$Maybe$Just(a) : acc;
			}));
};
var _wende$elchemy$ExType$flattenTypeApplication = function (application) {
	var _p12 = application;
	if (_p12.ctor === 'TypeApplication') {
		return {
			ctor: '::',
			_0: _p12._0,
			_1: _wende$elchemy$ExType$flattenTypeApplication(_p12._1)
		};
	} else {
		return {
			ctor: '::',
			_0: _p12,
			_1: {ctor: '[]'}
		};
	}
};
var _wende$elchemy$ExType$elixirT = F3(
	function (flatten, c, t) {
		elixirT:
		while (true) {
			var _p13 = t;
			switch (_p13.ctor) {
				case 'TypeTuple':
					if (_p13._0.ctor === '[]') {
						return 'no_return';
					} else {
						if (_p13._0._1.ctor === '[]') {
							var _v7 = flatten,
								_v8 = c,
								_v9 = _p13._0._0;
							flatten = _v7;
							c = _v8;
							t = _v9;
							continue elixirT;
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'{',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(
										_elm_lang$core$String$join,
										', ',
										A2(
											_elm_lang$core$List$map,
											A2(_wende$elchemy$ExType$elixirT, flatten, c),
											_p13._0)),
									'}'));
						}
					}
				case 'TypeVariable':
					if (_p13._0 === 'number') {
						return 'number';
					} else {
						var _p14 = _elm_lang$core$String$uncons(_p13._0);
						if (((_p14.ctor === 'Just') && (_p14._0.ctor === '_Tuple2')) && (_p14._0._0.valueOf() === '@')) {
							return A2(_wende$elchemy$Helpers$toSnakeCase, true, _p14._0._1);
						} else {
							return 'any';
						}
					}
				case 'TypeConstructor':
					if ((_p13._0.ctor === '::') && (_p13._0._1.ctor === '[]')) {
						return A4(_wende$elchemy$ExType$elixirTypeConstructor, flatten, c, _p13._0._0, _p13._1);
					} else {
						var _p15 = _wende$elchemy$Helpers$lastAndRest(_p13._0);
						if ((_p15.ctor === '_Tuple2') && (_p15._0.ctor === 'Just')) {
							var _p19 = _p15._0._0;
							return _elm_lang$core$Maybe$withDefault(
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_elm_lang$core$String$join, '.', _p15._1),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'.',
										A2(_wende$elchemy$Helpers$toSnakeCase, true, _p19))))(
								A2(
									_elm_lang$core$Maybe$map,
									A2(_wende$elchemy$ExType$elixirT, flatten, c),
									A2(
										_elm_lang$core$Maybe$map,
										function (_p16) {
											var _p17 = _p16;
											return _p17.getTypeBody(_p13._1);
										},
										A2(
											_wende$elchemy$ExType$filterMaybe,
											function (_p18) {
												return A2(
													F2(
														function (x, y) {
															return _elm_lang$core$Native_Utils.eq(x, y);
														}),
													_wende$elchemy$ExContext$TypeAlias,
													function (_) {
														return _.aliasType;
													}(_p18));
											},
											A3(_wende$elchemy$ExContext$getAlias, c.mod, _p19, c)))));
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'ExType',
								{
									start: {line: 81, column: 13},
									end: {line: 94, column: 56}
								},
								_p15)('Shouldn\'t ever happen');
						}
					}
				case 'TypeRecord':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'%{',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_wende$elchemy$Helpers$ind(c.indent + 1),
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$String$join,
									A2(
										_elm_lang$core$Basics_ops['++'],
										',',
										_wende$elchemy$Helpers$ind(c.indent + 1)),
									A2(
										_elm_lang$core$List$map,
										function (_p21) {
											var _p22 = _p21;
											return A2(
												_elm_lang$core$Basics_ops['++'],
												_p22._0,
												A2(
													_elm_lang$core$Basics_ops['++'],
													': ',
													A3(
														_wende$elchemy$ExType$elixirT,
														flatten,
														_wende$elchemy$ExContext$indent(c),
														_p22._1)));
										},
										_p13._0)),
								A2(
									_elm_lang$core$Basics_ops['++'],
									_wende$elchemy$Helpers$ind(c.indent),
									'}'))));
				case 'TypeRecordConstructor':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'%{',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_wende$elchemy$Helpers$ind(c.indent + 1),
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$String$join,
									A2(
										_elm_lang$core$Basics_ops['++'],
										', ',
										_wende$elchemy$Helpers$ind(c.indent + 1)),
									A3(
										_wende$elchemy$ExType$typeRecordFields,
										_wende$elchemy$ExContext$indent(c),
										flatten,
										_p13)),
								A2(
									_elm_lang$core$Basics_ops['++'],
									_wende$elchemy$Helpers$ind(c.indent),
									'}'))));
				default:
					var _p26 = _p13._1;
					var _p25 = _p13._0;
					return flatten ? A2(
						_elm_lang$core$Basics_ops['++'],
						'(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							function (_p23) {
								var _p24 = _p23;
								return A2(
									_elm_lang$core$Basics_ops['++'],
									A2(
										_elm_lang$core$String$join,
										', ',
										A2(
											_elm_lang$core$List$map,
											A2(
												_wende$elchemy$ExType$elixirT,
												flatten,
												_wende$elchemy$ExContext$indent(c)),
											{ctor: '::', _0: _p25, _1: _p24._1})),
									A2(
										_elm_lang$core$Basics_ops['++'],
										' -> ',
										A2(
											_elm_lang$core$Maybe$withDefault,
											'',
											A2(
												_elm_lang$core$Maybe$map,
												A2(_wende$elchemy$ExType$elixirT, flatten, c),
												_p24._0))));
							}(
								_wende$elchemy$Helpers$lastAndRest(
									_wende$elchemy$ExType$flattenTypeApplication(_p26))),
							')')) : A2(
						_elm_lang$core$Basics_ops['++'],
						'(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A3(_wende$elchemy$ExType$elixirT, flatten, c, _p25),
							A2(
								_elm_lang$core$Basics_ops['++'],
								' -> ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A3(_wende$elchemy$ExType$elixirT, flatten, c, _p26),
									')'))));
			}
		}
	});
var _wende$elchemy$ExType$elixirTypeConstructor = F4(
	function (flatten, c, name, args) {
		var _p27 = {ctor: '_Tuple2', _0: name, _1: args};
		_v15_14:
		do {
			if (_p27._1.ctor === '::') {
				if (_p27._1._1.ctor === '::') {
					if ((_p27._0 === 'Dict') && (_p27._1._1._1.ctor === '[]')) {
						return '%{}';
					} else {
						break _v15_14;
					}
				} else {
					switch (_p27._0) {
						case 'List':
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'list(',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A3(_wende$elchemy$ExType$elixirT, flatten, c, _p27._1._0),
									')'));
						case 'Maybe':
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'{',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A3(_wende$elchemy$ExType$elixirT, flatten, c, _p27._1._0),
									'} | nil'));
						case 'Just':
							return A3(_wende$elchemy$ExType$elixirT, flatten, c, _p27._1._0);
						case 'Err':
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'{:error, ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A3(_wende$elchemy$ExType$elixirT, flatten, c, _p27._1._0),
									'}'));
						case 'Ok':
							var _p28 = _p27._1._0;
							return _elm_lang$core$Native_Utils.eq(
								_p28,
								_Bogdanp$elm_ast$Ast_Statement$TypeTuple(
									{ctor: '[]'})) ? 'ok' : A2(
								_elm_lang$core$Basics_ops['++'],
								'{:ok,',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A3(_wende$elchemy$ExType$elixirT, flatten, c, _p28),
									'}'));
						default:
							break _v15_14;
					}
				}
			} else {
				switch (_p27._0) {
					case 'String':
						return 'String.t';
					case 'Char':
						return 'integer';
					case 'Bool':
						return 'boolean';
					case 'Int':
						return 'integer';
					case 'Pid':
						return 'pid';
					case 'Float':
						return 'float';
					case 'Nothing':
						return 'nil';
					default:
						var _p29 = _p27._0;
						return A4(
							_wende$elchemy$ExType$aliasOr,
							c,
							_p29,
							{ctor: '[]'},
							_wende$elchemy$Helpers$atomize(_p29));
				}
			}
		} while(false);
		var _p31 = _p27._0;
		var _p30 = _p27._1;
		return A4(
			_wende$elchemy$ExType$aliasOr,
			c,
			_p31,
			_p30,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'{',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_wende$elchemy$Helpers$atomize(_p31),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$String$join,
								', ',
								A2(
									_elm_lang$core$List$map,
									A2(_wende$elchemy$ExType$elixirT, flatten, c),
									_p30)),
							'}')))));
	});
var _wende$elchemy$ExType$aliasOr = F4(
	function (c, name, args, $default) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			$default,
			_elm_lang$core$Maybe$map(
				function (_p32) {
					var _p33 = _p32;
					var _p36 = _p33.parentModule;
					var _p35 = _p33.getTypeBody;
					if (_elm_lang$core$Native_Utils.eq(_p36, c.mod)) {
						return A2(
							_wende$elchemy$ExType$elixirTNoFlat,
							c,
							_p35(args));
					} else {
						var _p34 = _p33.aliasType;
						if (_p34.ctor === 'Type') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								_p36,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'.',
									A2(
										_wende$elchemy$ExType$elixirTNoFlat,
										c,
										_p35(args))));
						} else {
							return A2(
								_wende$elchemy$ExType$elixirTNoFlat,
								_elm_lang$core$Native_Utils.update(
									c,
									{mod: _p36}),
								_p35(args));
						}
					}
				})(
				A3(_wende$elchemy$ExContext$getAlias, c.mod, name, c)));
	});
var _wende$elchemy$ExType$elixirTNoFlat = _wende$elchemy$ExType$elixirT(false);
var _wende$elchemy$ExType$typeRecordFields = F3(
	function (c, flatten, t) {
		typeRecordFields:
		while (true) {
			var keyValuePair = function (_p37) {
				var _p38 = _p37;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p38._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						': ',
						A3(_wende$elchemy$ExType$elixirT, flatten, c, _p38._1)));
			};
			var _p39 = t;
			_v19_6:
			do {
				switch (_p39.ctor) {
					case 'TypeRecordConstructor':
						switch (_p39._0.ctor) {
							case 'TypeConstructor':
								if ((_p39._0._0.ctor === '::') && (_p39._0._0._1.ctor === '[]')) {
									var inherited = A2(
										_elm_lang$core$Maybe$map,
										A2(_wende$elchemy$ExType$typeRecordFields, c, flatten),
										A2(
											_elm_lang$core$Maybe$map,
											function (_p40) {
												var _p41 = _p40;
												return _p41.getTypeBody(_p39._0._1);
											},
											A3(_wende$elchemy$ExContext$getAlias, c.mod, _p39._0._0._0, c)));
									return A2(
										_elm_lang$core$Basics_ops['++'],
										A2(_elm_lang$core$List$map, keyValuePair, _p39._1),
										A2(
											_elm_lang$core$Maybe$withDefault,
											{
												ctor: '::',
												_0: '',
												_1: {ctor: '[]'}
											},
											inherited));
								} else {
									break _v19_6;
								}
							case 'TypeRecord':
								return A2(
									_elm_lang$core$List$map,
									keyValuePair,
									A2(_elm_lang$core$Basics_ops['++'], _p39._1, _p39._0._0));
							case 'TypeVariable':
								return A2(_elm_lang$core$List$map, keyValuePair, _p39._1);
							case 'TypeTuple':
								if ((_p39._0._0.ctor === '::') && (_p39._0._0._1.ctor === '[]')) {
									var _v21 = c,
										_v22 = flatten,
										_v23 = A2(_Bogdanp$elm_ast$Ast_Statement$TypeRecordConstructor, _p39._0._0._0, _p39._1);
									c = _v21;
									flatten = _v22;
									t = _v23;
									continue typeRecordFields;
								} else {
									break _v19_6;
								}
							case 'TypeRecordConstructor':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_elm_lang$core$List$map, keyValuePair, _p39._1),
									A3(_wende$elchemy$ExType$typeRecordFields, c, flatten, _p39._0));
							default:
								break _v19_6;
						}
					case 'TypeRecord':
						return A2(_elm_lang$core$List$map, keyValuePair, _p39._0);
					default:
						break _v19_6;
				}
			} while(false);
			return _elm_lang$core$Native_Utils.crashCase(
				'ExType',
				{
					start: {line: 140, column: 9},
					end: {line: 168, column: 79}
				},
				_p39)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Wrong type record constructor ',
					_elm_lang$core$Basics$toString(_p39)));
		}
	});
var _wende$elchemy$ExType$elixirTFlat = _wende$elchemy$ExType$elixirT(true);
var _wende$elchemy$ExType$typespec0 = F2(
	function (c, t) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'() :: ',
			A2(_wende$elchemy$ExType$elixirTNoFlat, c, t));
	});
var _wende$elchemy$ExType$uniontype = F2(
	function (c, t) {
		var _p43 = t;
		if (((_p43.ctor === 'TypeConstructor') && (_p43._0.ctor === '::')) && (_p43._0._1.ctor === '[]')) {
			if (_p43._1.ctor === '[]') {
				return _wende$elchemy$Helpers$atomize(_p43._0._0);
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'{',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_wende$elchemy$Helpers$atomize(_p43._0._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							', ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$String$join,
									', ',
									A2(
										_elm_lang$core$List$map,
										_wende$elchemy$ExType$elixirTNoFlat(c),
										_p43._1)),
								'}'))));
			}
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'ExType',
				{
					start: {line: 250, column: 5},
					end: {line: 262, column: 96}
				},
				_p43)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'I am looking for union type constructor. But got ',
					_elm_lang$core$Basics$toString(_p43)));
		}
	});
var _wende$elchemy$ExType$typespec = F2(
	function (c, t) {
		var _p45 = _wende$elchemy$Helpers$lastAndRest(
			_wende$elchemy$ExType$flattenTypeApplication(t));
		if (_p45._0.ctor === 'Just') {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$String$join,
						', ',
						A2(
							_elm_lang$core$List$map,
							_wende$elchemy$ExType$elixirTNoFlat(c),
							_p45._1)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						') :: ',
						A2(_wende$elchemy$ExType$elixirTNoFlat, c, _p45._0._0))));
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'ExType',
				{
					start: {line: 235, column: 5},
					end: {line: 245, column: 37}
				},
				_p45)('impossible');
		}
	});

var _wende$elchemy$ExVariable$extractVariables = function (exp) {
	var none = {ctor: '[]'};
	var one = function ($var) {
		return {
			ctor: '::',
			_0: $var,
			_1: {ctor: '[]'}
		};
	};
	var many = function (vars) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				}),
			{ctor: '[]'},
			A2(_elm_lang$core$List$map, _wende$elchemy$ExVariable$extractVariables, vars));
	};
	var _p0 = exp;
	_v0_8:
	do {
		switch (_p0.ctor) {
			case 'Record':
				return many(
					A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$second, _p0._0));
			case 'Tuple':
				return many(_p0._0);
			case 'Variable':
				if ((_p0._0.ctor === '::') && (_p0._0._1.ctor === '[]')) {
					return one(_p0._0._0);
				} else {
					break _v0_8;
				}
			case 'List':
				return many(_p0._0);
			case 'Application':
				return many(
					{
						ctor: '::',
						_0: _p0._1,
						_1: {ctor: '[]'}
					});
			case 'BinOp':
				if (((_p0._0.ctor === 'Variable') && (_p0._0._0.ctor === '::')) && (_p0._0._0._1.ctor === '[]')) {
					switch (_p0._0._0._0) {
						case '::':
							return many(
								{
									ctor: '::',
									_0: _p0._1,
									_1: {
										ctor: '::',
										_0: _p0._2,
										_1: {ctor: '[]'}
									}
								});
						case 'as':
							if (_p0._2.ctor === 'Variable') {
								if (_p0._1.ctor === 'Variable') {
									return many(
										{
											ctor: '::',
											_0: _p0._1,
											_1: {
												ctor: '::',
												_0: _p0._2,
												_1: {ctor: '[]'}
											}
										});
								} else {
									if ((_p0._2._0.ctor === '::') && (_p0._2._0._1.ctor === '[]')) {
										return one(_p0._2._0._0);
									} else {
										break _v0_8;
									}
								}
							} else {
								break _v0_8;
							}
						default:
							break _v0_8;
					}
				} else {
					break _v0_8;
				}
			default:
				break _v0_8;
		}
	} while(false);
	return none;
};
var _wende$elchemy$ExVariable$varOrNah = F2(
	function (c, $var) {
		return (A2(_elm_lang$core$Set$member, $var, c.variables) || c.inArgs) ? $var : A2(_elm_lang$core$Basics_ops['++'], $var, '()');
	});
var _wende$elchemy$ExVariable$rememberVariables = F2(
	function (list, c) {
		var addToContext = F2(
			function ($var, context) {
				return _elm_lang$core$Native_Utils.update(
					context,
					{
						variables: A2(
							_elm_lang$core$Set$insert,
							A2(_wende$elchemy$Helpers$toSnakeCase, true, $var),
							context.variables)
					});
			});
		return A3(
			_elm_lang$core$List$foldl,
			addToContext,
			c,
			A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				{ctor: '[]'},
				A2(_elm_lang$core$List$map, _wende$elchemy$ExVariable$extractVariables, list)));
	});

var _wende$elchemy$ExOperator$flattenPipes = function (e) {
	var _p0 = e;
	if (((((_p0.ctor === 'BinOp') && (_p0._0.ctor === 'Variable')) && (_p0._0._0.ctor === '::')) && (_p0._0._0._0 === '|>')) && (_p0._0._0._1.ctor === '[]')) {
		if (((((_p0._2.ctor === 'BinOp') && (_p0._2._0.ctor === 'Variable')) && (_p0._2._0._0.ctor === '::')) && (_p0._2._0._0._0 === '|>')) && (_p0._2._0._0._1.ctor === '[]')) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _p0._1,
					_1: {ctor: '[]'}
				},
				_wende$elchemy$ExOperator$flattenPipes(_p0._2));
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _p0._1,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _p0._2,
					_1: {ctor: '[]'}
				});
		}
	} else {
		return {
			ctor: '::',
			_0: _p0,
			_1: {ctor: '[]'}
		};
	}
};
var _wende$elchemy$ExOperator$elixirBinop = F5(
	function (c, elixirE, op, l, r) {
		elixirBinop:
		while (true) {
			var _p1 = op;
			switch (_p1) {
				case '//':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'div(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(elixirE, c, l),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(elixirE, c, r),
									')'))));
				case '%':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'rem(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(elixirE, c, l),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(elixirE, c, r),
									')'))));
				case '^':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						':math.pow(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(elixirE, c, l),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(elixirE, c, r),
									')'))));
				case '::':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'[',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(elixirE, c, l),
							A2(
								_elm_lang$core$Basics_ops['++'],
								' | ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(elixirE, c, r),
									']'))));
				case '<<':
					var _v2 = c,
						_v3 = elixirE,
						_v4 = '>>',
						_v5 = r,
						_v6 = l;
					c = _v2;
					elixirE = _v3;
					op = _v4;
					l = _v5;
					r = _v6;
					continue elixirBinop;
				case '<|':
					var _v7 = c,
						_v8 = elixirE,
						_v9 = '|>',
						_v10 = r,
						_v11 = l;
					c = _v7;
					elixirE = _v8;
					op = _v9;
					l = _v10;
					r = _v11;
					continue elixirBinop;
				case '|>':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						A2(elixirE, c, l),
						A2(
							_elm_lang$core$String$join,
							'',
							A2(
								_elm_lang$core$List$map,
								A2(
									_elm_lang$core$Basics$flip,
									F2(
										function (x, y) {
											return A2(_elm_lang$core$Basics_ops['++'], x, y);
										}),
									').()'),
								A2(
									_elm_lang$core$List$map,
									F2(
										function (x, y) {
											return A2(_elm_lang$core$Basics_ops['++'], x, y);
										})(
										A2(
											_elm_lang$core$Basics_ops['++'],
											_wende$elchemy$Helpers$ind(c.indent),
											'|> (')),
									A2(
										_elm_lang$core$List$map,
										elixirE(c),
										_wende$elchemy$ExOperator$flattenPipes(r))))));
				default:
					var _p4 = _p1;
					var _p2 = _wende$elchemy$Helpers$operatorType(_p4);
					switch (_p2.ctor) {
						case 'Builtin':
							return A2(
								_elm_lang$core$String$join,
								'',
								{
									ctor: '::',
									_0: '(',
									_1: {
										ctor: '::',
										_0: A2(elixirE, c, l),
										_1: {
											ctor: '::',
											_0: ' ',
											_1: {
												ctor: '::',
												_0: _wende$elchemy$Helpers$translateOperator(_p4),
												_1: {
													ctor: '::',
													_0: ' ',
													_1: {
														ctor: '::',
														_0: A2(elixirE, c, r),
														_1: {
															ctor: '::',
															_0: ')',
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								});
						case 'Custom':
							return A2(
								_elm_lang$core$Basics_ops['++'],
								_wende$elchemy$Helpers$translateOperator(_p4),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(elixirE, c, l),
										A2(
											_elm_lang$core$Basics_ops['++'],
											', ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												A2(elixirE, c, r),
												')')))));
						default:
							return _elm_lang$core$Native_Utils.crashCase(
								'ExOperator',
								{
									start: {line: 43, column: 13},
									end: {line: 57, column: 60}
								},
								_p2)(
								A2(_elm_lang$core$Basics_ops['++'], 'Illegal operator ', _p4));
					}
			}
		}
	});

var _wende$elchemy$ExExpression$isTuple = function (a) {
	isTuple:
	while (true) {
		var _p0 = a;
		switch (_p0.ctor) {
			case 'Application':
				var _v1 = _p0._0;
				a = _v1;
				continue isTuple;
			case 'Variable':
				if ((_p0._0.ctor === '::') && (_p0._0._1.ctor === '[]')) {
					if (_p0._0._0 === '()') {
						return true;
					} else {
						return _wende$elchemy$Helpers$isUpper(_p0._0._0);
					}
				} else {
					var _p1 = _wende$elchemy$Helpers$lastAndRest(_p0._0);
					if ((_p1.ctor === '_Tuple2') && (_p1._0.ctor === 'Just')) {
						var _v3 = _Bogdanp$elm_ast$Ast_Expression$Variable(
							{
								ctor: '::',
								_0: _p1._0._0,
								_1: {ctor: '[]'}
							});
						a = _v3;
						continue isTuple;
					} else {
						return _elm_lang$core$Native_Utils.crashCase(
							'ExExpression',
							{
								start: {line: 385, column: 13},
								end: {line: 390, column: 56}
							},
							_p1)('Shouldn\'t ever happen');
					}
				}
			default:
				return false;
		}
	}
};
var _wende$elchemy$ExExpression$typeAliasOnly = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4.aliasType;
	if (_p5.ctor === 'TypeAlias') {
		return _elm_lang$core$Maybe$Just(_p4);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _wende$elchemy$ExExpression$isMacro = function (e) {
	isMacro:
	while (true) {
		var _p6 = e;
		_v6_5:
		do {
			switch (_p6.ctor) {
				case 'Application':
					var _v7 = _p6._0;
					e = _v7;
					continue isMacro;
				case 'Variable':
					if ((_p6._0.ctor === '::') && (_p6._0._1.ctor === '[]')) {
						switch (_p6._0._0) {
							case 'tryFfi':
								return true;
							case 'ffi':
								return true;
							case 'lffi':
								return true;
							case 'flambda':
								return true;
							default:
								break _v6_5;
						}
					} else {
						break _v6_5;
					}
				default:
					break _v6_5;
			}
		} while(false);
		return false;
	}
};
var _wende$elchemy$ExExpression$flattenApplication = function (application) {
	var _p7 = application;
	if (_p7.ctor === 'Application') {
		var _p9 = _p7._1;
		var _p8 = _p7._0;
		return _wende$elchemy$ExExpression$isMacro(application) ? A2(
			_elm_lang$core$Basics_ops['++'],
			_wende$elchemy$ExExpression$flattenApplication(_p8),
			{
				ctor: '::',
				_0: _p9,
				_1: {ctor: '[]'}
			}) : (_wende$elchemy$ExExpression$isTuple(application) ? A2(
			_elm_lang$core$Basics_ops['++'],
			_wende$elchemy$ExExpression$flattenApplication(_p8),
			{
				ctor: '::',
				_0: _p9,
				_1: {ctor: '[]'}
			}) : {
			ctor: '::',
			_0: application,
			_1: {ctor: '[]'}
		});
	} else {
		return {
			ctor: '::',
			_0: _p7,
			_1: {ctor: '[]'}
		};
	}
};
var _wende$elchemy$ExExpression$elixirE = F2(
	function (c, e) {
		var _p10 = e;
		_v9_7:
		do {
			switch (_p10.ctor) {
				case 'Variable':
					return A2(_wende$elchemy$ExExpression$elixirVariable, c, _p10._0);
				case 'Application':
					return A2(_wende$elchemy$ExExpression$tupleOrFunction, c, _p10);
				case 'RecordUpdate':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'%{',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(_wende$elchemy$Helpers$toSnakeCase, true, _p10._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								' | ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(
										_elm_lang$core$String$join,
										', ',
										A2(
											_elm_lang$core$List$map,
											function (_p11) {
												var _p12 = _p11;
												return A2(
													_elm_lang$core$Basics_ops['++'],
													_p12._0,
													A2(
														_elm_lang$core$Basics_ops['++'],
														': ',
														A2(_wende$elchemy$ExExpression$elixirE, c, _p12._1)));
											},
											_p10._1)),
									'}'))));
				case 'Access':
					if (_p10._0.ctor === 'Variable') {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							_wende$elchemy$Helpers$modulePath(_p10._0._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'.',
								A2(
									_elm_lang$core$String$join,
									'.',
									A2(
										_elm_lang$core$List$map,
										_wende$elchemy$Helpers$toSnakeCase(true),
										_p10._1))));
					} else {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							A2(_wende$elchemy$ExExpression$elixirE, c, _p10._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'.',
								A2(_elm_lang$core$String$join, '.', _p10._1)));
					}
				case 'AccessFunction':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'(fn a -> a.',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(_wende$elchemy$Helpers$toSnakeCase, true, _p10._0),
							' end)'));
				case 'BinOp':
					if (((_p10._0.ctor === 'Variable') && (_p10._0._0.ctor === '::')) && (_p10._0._0._1.ctor === '[]')) {
						return A5(_wende$elchemy$ExOperator$elixirBinop, c, _wende$elchemy$ExExpression$elixirE, _p10._0._0._0, _p10._1, _p10._2);
					} else {
						break _v9_7;
					}
				default:
					break _v9_7;
			}
		} while(false);
		return A2(_wende$elchemy$ExExpression$elixirControlFlow, c, _p10);
	});
var _wende$elchemy$ExExpression$elixirControlFlow = F2(
	function (c, e) {
		var _p13 = e;
		switch (_p13.ctor) {
			case 'Case':
				return A3(_wende$elchemy$ExExpression$caseE, c, _p13._0, _p13._1);
			case 'Lambda':
				return A3(_wende$elchemy$ExExpression$lambda, c, _p13._0, _p13._1);
			case 'If':
				if (_p13._2.ctor === 'If') {
					return A2(
						_elm_lang$core$String$join,
						'',
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: 'cond do',
								_1: {ctor: '[]'}
							},
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_wende$elchemy$ExExpression$handleIfExp,
									_wende$elchemy$ExContext$indent(c),
									_p13),
								{
									ctor: '::',
									_0: _wende$elchemy$Helpers$ind(c.indent),
									_1: {
										ctor: '::',
										_0: 'end',
										_1: {ctor: '[]'}
									}
								})));
				} else {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'if ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(_wende$elchemy$ExExpression$elixirE, c, _p13._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								' do ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_wende$elchemy$ExExpression$elixirE, c, _p13._1),
									A2(
										_elm_lang$core$Basics_ops['++'],
										' else ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											A2(_wende$elchemy$ExExpression$elixirE, c, _p13._2),
											' end'))))));
				}
			case 'Let':
				return function (_p14) {
					var _p15 = _p14;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_p15._1,
						A2(_wende$elchemy$ExExpression$elixirE, _p15._0, _p13._1));
				}(
					A3(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$List$foldl,
						{ctor: '_Tuple2', _0: c, _1: ''},
						F2(
							function (_p17, _p16) {
								var _p18 = _p17;
								var _p29 = _p18._1;
								var _p19 = _p16;
								var _p28 = _p19._0;
								return function (_p20) {
									var _p21 = _p20;
									var _p22 = _p21._0;
									return A2(
										_wende$elchemy$Helpers_ops['=>'],
										A2(_wende$elchemy$ExContext$mergeVariables, _p22, _p28),
										A2(
											_elm_lang$core$Basics_ops['++'],
											_p19._1,
											A2(
												_elm_lang$core$Basics_ops['++'],
												_p21._1,
												_wende$elchemy$Helpers$ind(_p22.indent))));
								}(
									function () {
										var _p23 = _wende$elchemy$Helpers$applicationToList(_p18._0);
										_v16_3:
										do {
											if (_p23.ctor === '::') {
												if (((_p23._0.ctor === 'Variable') && (_p23._0._0.ctor === '::')) && (_p23._0._0._1.ctor === '[]')) {
													if (_p23._1.ctor === '[]') {
														var _p24 = _p23._0;
														return A2(
															_wende$elchemy$Helpers_ops['=>'],
															A2(
																_wende$elchemy$ExVariable$rememberVariables,
																{
																	ctor: '::',
																	_0: _p24,
																	_1: {ctor: '[]'}
																},
																_p28),
															A2(
																_elm_lang$core$Basics_ops['++'],
																A2(_wende$elchemy$Helpers$toSnakeCase, true, _p23._0._0._0),
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	' = ',
																	A2(
																		_wende$elchemy$ExExpression$elixirE,
																		A2(
																			_wende$elchemy$ExVariable$rememberVariables,
																			{
																				ctor: '::',
																				_0: _p24,
																				_1: {ctor: '[]'}
																			},
																			_p28),
																		_p29))));
													} else {
														var _p25 = _p23._0;
														return A2(
															_wende$elchemy$Helpers_ops['=>'],
															A2(
																_wende$elchemy$ExVariable$rememberVariables,
																{
																	ctor: '::',
																	_0: _p25,
																	_1: {ctor: '[]'}
																},
																_p28),
															A2(
																_elm_lang$core$Basics_ops['++'],
																A2(_wende$elchemy$Helpers$toSnakeCase, true, _p23._0._0._0),
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	' = ',
																	A3(
																		_wende$elchemy$ExExpression$produceLambda,
																		A2(
																			_wende$elchemy$ExVariable$rememberVariables,
																			{
																				ctor: '::',
																				_0: _p25,
																				_1: {ctor: '[]'}
																			},
																			_p28),
																		_p23._1,
																		_p29))));
													}
												} else {
													if (_p23._1.ctor === '[]') {
														var _p26 = _p23._0;
														return A2(
															_wende$elchemy$Helpers_ops['=>'],
															A2(
																_wende$elchemy$ExVariable$rememberVariables,
																{
																	ctor: '::',
																	_0: _p26,
																	_1: {ctor: '[]'}
																},
																_p28),
															A2(
																_elm_lang$core$Basics_ops['++'],
																A2(
																	_wende$elchemy$ExExpression$elixirE,
																	_wende$elchemy$ExContext$inArgs(_p28),
																	_p26),
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	' = ',
																	A2(_wende$elchemy$ExExpression$elixirE, _p28, _p29))));
													} else {
														break _v16_3;
													}
												}
											} else {
												break _v16_3;
											}
										} while(false);
										return _elm_lang$core$Native_Utils.crashCase(
											'ExExpression',
											{
												start: {line: 89, column: 30},
												end: {line: 109, column: 61}
											},
											_p23)('Impossible');
									}());
							}))(_p13._0));
			default:
				return A2(_wende$elchemy$ExExpression$elixirTypeInstances, c, e);
		}
	});
var _wende$elchemy$ExExpression$caseE = F3(
	function (c, $var, body) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'case ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_wende$elchemy$ExExpression$elixirE, c, $var),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' do',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$String$join,
							'',
							A2(
								_elm_lang$core$List$map,
								_wende$elchemy$ExExpression$caseInstance(
									A2(
										_wende$elchemy$ExVariable$rememberVariables,
										{
											ctor: '::',
											_0: $var,
											_1: {ctor: '[]'}
										},
										c)),
								body)),
						A2(
							_elm_lang$core$Basics_ops['++'],
							_wende$elchemy$Helpers$ind(c.indent),
							'end')))));
	});
var _wende$elchemy$ExExpression$caseInstance = F2(
	function (c, _p30) {
		var _p31 = _p30;
		var _p32 = _p31._0;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$Basics_ops['++'],
				_wende$elchemy$Helpers$ind(c.indent + 1),
				A2(
					_wende$elchemy$ExExpression$elixirE,
					_wende$elchemy$ExContext$inArgs(c),
					_p32)),
			A2(
				_elm_lang$core$Basics_ops['++'],
				' ->',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_wende$elchemy$Helpers$ind(c.indent + 2),
					A2(
						_wende$elchemy$ExExpression$elixirE,
						A2(
							_wende$elchemy$ExVariable$rememberVariables,
							{
								ctor: '::',
								_0: _p32,
								_1: {ctor: '[]'}
							},
							_wende$elchemy$ExContext$indent(
								_wende$elchemy$ExContext$indent(c))),
						_p31._1))));
	});
var _wende$elchemy$ExExpression$elixirTypeInstances = F2(
	function (c, e) {
		var _p33 = e;
		switch (_p33.ctor) {
			case 'Integer':
				return _elm_lang$core$Basics$toString(_p33._0);
			case 'Float':
				var name = _elm_lang$core$Basics$toString(_p33._0);
				return A2(_elm_lang$core$String$contains, '.', name) ? name : A2(_elm_lang$core$Basics_ops['++'], name, '.0');
			case 'Character':
				var _p34 = _p33._0;
				switch (_p34.valueOf()) {
					case ' ':
						return '?\\s';
					case '\n':
						return '?\\n';
					case '\r':
						return '?\\r';
					case '\t':
						return '?\\t';
					case '\\':
						return '?\\\\';
					case ' ':
						return '?\\0';
					default:
						return A2(
							_elm_lang$core$Basics_ops['++'],
							'?',
							_elm_lang$core$String$fromChar(_p34));
				}
			case 'String':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'\"',
					A2(_elm_lang$core$Basics_ops['++'], _p33._0, '\"'));
			case 'List':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'[',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$String$join,
							', ',
							A2(
								_elm_lang$core$List$map,
								_wende$elchemy$ExExpression$elixirE(c),
								_p33._0)),
						']'));
			case 'Tuple':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'{',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$String$join,
							', ',
							A2(
								_elm_lang$core$List$map,
								_wende$elchemy$ExExpression$elixirE(c),
								_p33._0)),
						'}'));
			case 'Record':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'%{',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$String$join,
							', ',
							A2(
								_elm_lang$core$List$map,
								function (_p35) {
									var _p36 = _p35;
									return A2(
										_elm_lang$core$Basics_ops['++'],
										_p36._0,
										A2(
											_elm_lang$core$Basics_ops['++'],
											': ',
											A2(_wende$elchemy$ExExpression$elixirE, c, _p36._1)));
								},
								_p33._0)),
						'}'));
			default:
				return A2(_wende$elchemy$Helpers$notImplemented, 'expression', e);
		}
	});
var _wende$elchemy$ExExpression$handleIfExp = F2(
	function (c, e) {
		var _p37 = e;
		if (_p37.ctor === 'If') {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _wende$elchemy$Helpers$ind(c.indent),
					_1: {
						ctor: '::',
						_0: A2(
							_wende$elchemy$ExExpression$elixirE,
							_wende$elchemy$ExContext$indent(c),
							_p37._0),
						_1: {
							ctor: '::',
							_0: ' -> ',
							_1: {
								ctor: '::',
								_0: A2(
									_wende$elchemy$ExExpression$elixirE,
									_wende$elchemy$ExContext$indent(c),
									_p37._1),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				A2(_wende$elchemy$ExExpression$handleIfExp, c, _p37._2));
		} else {
			return {
				ctor: '::',
				_0: _wende$elchemy$Helpers$ind(c.indent),
				_1: {
					ctor: '::',
					_0: 'true -> ',
					_1: {
						ctor: '::',
						_0: A2(
							_wende$elchemy$ExExpression$elixirE,
							_wende$elchemy$ExContext$indent(c),
							e),
						_1: {ctor: '[]'}
					}
				}
			};
		}
	});
var _wende$elchemy$ExExpression$lambda = F3(
	function (c, args, body) {
		var _p38 = args;
		if (_p38.ctor === '::') {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'fn(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_wende$elchemy$ExExpression$elixirE,
						_wende$elchemy$ExContext$inArgs(c),
						_p38._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						') -> ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A3(
								_wende$elchemy$ExExpression$lambda,
								A2(_wende$elchemy$ExVariable$rememberVariables, args, c),
								_p38._1,
								body),
							' end'))));
		} else {
			return A2(_wende$elchemy$ExExpression$elixirE, c, body);
		}
	});
var _wende$elchemy$ExExpression$produceLambda = F3(
	function (c, args, body) {
		var _p39 = args;
		if (_p39.ctor === '::') {
			var _p40 = _p39._0;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'fn(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_wende$elchemy$ExExpression$elixirE,
						_wende$elchemy$ExContext$inArgs(c),
						_p40),
					A2(
						_elm_lang$core$Basics_ops['++'],
						') -> ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A3(
								_wende$elchemy$ExExpression$produceLambda,
								A2(
									_wende$elchemy$ExVariable$rememberVariables,
									{
										ctor: '::',
										_0: _p40,
										_1: {ctor: '[]'}
									},
									c),
								_p39._1,
								body),
							' end'))));
		} else {
			return A2(_wende$elchemy$ExExpression$elixirE, c, body);
		}
	});
var _wende$elchemy$ExExpression$elixirVariable = F2(
	function (c, $var) {
		var _p41 = $var;
		if (_p41.ctor === '[]') {
			return '';
		} else {
			if (_p41._1.ctor === '[]') {
				switch (_p41._0) {
					case '()':
						return '{}';
					case 'Nothing':
						return 'nil';
					case 'Just':
						return 'fn x1 -> {x1} end';
					case 'Err':
						return 'fn x1 -> {:error, x1} end';
					case 'Ok':
						return 'fn x1 -> {:ok, x1} end';
					case 'curry':
						return 'curried()';
					case 'uncurry':
						return 'uncurried()';
					default:
						var _p43 = _p41._0;
						if (_wende$elchemy$Helpers$isCapitilzed(_p43)) {
							return A2(
								_elm_lang$core$Maybe$withDefault,
								_wende$elchemy$Helpers$atomize(_p43),
								A3(
									_wende$elchemy$ExExpression$aliasFor,
									c,
									_p43,
									{ctor: '[]'}));
						} else {
							if (A2(_elm_lang$core$String$startsWith, '@', _p43)) {
								return _wende$elchemy$Helpers$atomize(
									A2(_elm_lang$core$String$dropLeft, 1, _p43));
							} else {
								var _p42 = _wende$elchemy$Helpers$operatorType(_p43);
								switch (_p42.ctor) {
									case 'Builtin':
										return _elm_lang$core$Native_Utils.eq(_p43, '<|') ? 'flip.((&|>/0).())' : A2(
											_elm_lang$core$Basics_ops['++'],
											'(&',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_wende$elchemy$Helpers$translateOperator(_p43),
												'/0).()'));
									case 'Custom':
										return _wende$elchemy$Helpers$translateOperator(_p43);
									default:
										return A2(
											_wende$elchemy$ExVariable$varOrNah,
											c,
											A2(_wende$elchemy$Helpers$toSnakeCase, true, _p43));
								}
							}
						}
				}
			} else {
				var _p46 = _p41;
				var _p44 = _wende$elchemy$Helpers$lastAndRest(_p46);
				if ((_p44.ctor === '_Tuple2') && (_p44._0.ctor === 'Just')) {
					return A2(
						_wende$elchemy$ExExpression$elixirE,
						c,
						_Bogdanp$elm_ast$Ast_Expression$Variable(
							{
								ctor: '::',
								_0: _p44._0._0,
								_1: {ctor: '[]'}
							}));
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'ExExpression',
						{
							start: {line: 478, column: 13},
							end: {line: 485, column: 52}
						},
						_p44)(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Shouldn\'t ever happen ',
							A2(_elm_lang$core$String$join, '.', _p46)));
				}
			}
		}
	});
var _wende$elchemy$ExExpression$aliasFor = F3(
	function (c, name, rest) {
		return A2(
			_wende$elchemy$Helpers$maybeOr,
			A3(_wende$elchemy$ExExpression$getAlias, c, name, rest),
			A3(_wende$elchemy$ExExpression$getType, c, name, rest));
	});
var _wende$elchemy$ExExpression$getAlias = F3(
	function (c, name, rest) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (_p47) {
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					A2(_wende$elchemy$ExExpression$restOfParams, c, rest),
					A2(
						F2(
							function (x, y) {
								return A2(_elm_lang$core$Basics_ops['++'], x, y);
							}),
						'(',
						A2(_wende$elchemy$ExExpression$elixirE, c, _p47)));
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				_wende$elchemy$ExType$typealiasConstructor(
					{ctor: '[]'}),
				A2(
					_elm_lang$core$Maybe$andThen,
					_wende$elchemy$ExExpression$typeAliasOnly,
					A3(_wende$elchemy$ExContext$getAlias, c.mod, name, c))));
	});
var _wende$elchemy$ExExpression$restOfParams = F2(
	function (c, params) {
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				}),
			')',
			A2(
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				').(',
				A2(
					_elm_lang$core$String$join,
					').(',
					A2(
						_elm_lang$core$List$map,
						_wende$elchemy$ExExpression$elixirE(c),
						params))));
	});
var _wende$elchemy$ExExpression$getType = F3(
	function (c, name, rest) {
		return _elm_lang$core$Maybe$map(
			function (_p48) {
				var _p49 = _p48;
				var _p51 = _p49.arity;
				var len = _elm_lang$core$List$length(rest);
				var dif = _p51 - len;
				var $arguments = _wende$elchemy$Helpers$generateArguments(dif);
				var varArgs = A2(
					_elm_lang$core$List$map,
					function (_p50) {
						return _Bogdanp$elm_ast$Ast_Expression$Variable(
							_elm_lang$core$List$singleton(_p50));
					},
					$arguments);
				return _elm_lang$core$Native_Utils.eq(_p51, 0) ? _wende$elchemy$Helpers$atomize(name) : ((_elm_lang$core$Native_Utils.cmp(dif, 0) > -1) ? A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					A2(_elm_lang$core$String$repeat, dif, ' end '),
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$String$join,
							'',
							A2(
								_elm_lang$core$List$map,
								A2(
									_elm_lang$core$Basics$flip,
									F2(
										function (x, y) {
											return A2(_elm_lang$core$Basics_ops['++'], x, y);
										}),
									' ->'),
								A2(
									_elm_lang$core$List$map,
									F2(
										function (x, y) {
											return A2(_elm_lang$core$Basics_ops['++'], x, y);
										})(' fn '),
									$arguments))),
						A2(
							_elm_lang$core$Basics_ops['++'],
							' {',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_wende$elchemy$Helpers$atomize(name),
								A2(
									_elm_lang$core$Basics_ops['++'],
									', ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(
											_elm_lang$core$String$join,
											', ',
											A2(
												_elm_lang$core$List$map,
												_wende$elchemy$ExExpression$elixirE(
													A2(
														_wende$elchemy$ExVariable$rememberVariables,
														A2(_elm_lang$core$Basics_ops['++'], rest, varArgs),
														c)),
												A2(_elm_lang$core$Basics_ops['++'], rest, varArgs))),
										'}')))))) : _elm_lang$core$Native_Utils.crash(
					'ExExpression',
					{
						start: {line: 362, column: 29},
						end: {line: 362, column: 40}
					})(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Expected ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p51),
							A2(
								_elm_lang$core$Basics_ops['++'],
								' arguments for \'',
								A2(
									_elm_lang$core$Basics_ops['++'],
									name,
									A2(
										_elm_lang$core$Basics_ops['++'],
										'\'. Got: ',
										_elm_lang$core$Basics$toString(
											_elm_lang$core$List$length(rest)))))))));
			})(
			A3(_wende$elchemy$ExContext$getType, c.mod, name, c));
	});
var _wende$elchemy$ExExpression$tupleOrFunction = F2(
	function (c, a) {
		var _p52 = _wende$elchemy$ExExpression$flattenApplication(a);
		_v28_9:
		do {
			_v28_8:
			do {
				if (_p52.ctor === '::') {
					switch (_p52._0.ctor) {
						case 'Application':
							if (_p52._1.ctor === '[]') {
								return A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_wende$elchemy$ExExpression$elixirE, c, _p52._0._0),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'.(',
										A2(
											_elm_lang$core$Basics_ops['++'],
											A2(_wende$elchemy$ExExpression$elixirE, c, _p52._0._1),
											')')));
							} else {
								break _v28_9;
							}
						case 'Variable':
							if ((_p52._0._0.ctor === '::') && (_p52._0._0._1.ctor === '[]')) {
								switch (_p52._0._0._0) {
									case 'ffi':
										return _elm_lang$core$Native_Utils.crashCase(
											'ExExpression',
											{
												start: {line: 248, column: 5},
												end: {line: 292, column: 70}
											},
											_p52)('Ffi inside function body is deprecated since Elchemy 0.3');
									case 'tryFfi':
										return _elm_lang$core$Native_Utils.crashCase(
											'ExExpression',
											{
												start: {line: 248, column: 5},
												end: {line: 292, column: 70}
											},
											_p52)('tryFfi inside function body is deprecated since Elchemy 0.3');
									case 'lffi':
										return _elm_lang$core$Native_Utils.crashCase(
											'ExExpression',
											{
												start: {line: 248, column: 5},
												end: {line: 292, column: 70}
											},
											_p52)('Lffi inside function body is deprecated since Elchemy 0.3');
									case 'flambda':
										return _elm_lang$core$Native_Utils.crashCase(
											'ExExpression',
											{
												start: {line: 248, column: 5},
												end: {line: 292, column: 70}
											},
											_p52)('Flambda is deprecated since Elchemy 0.3');
									case 'Just':
										if ((_p52._1.ctor === '::') && (_p52._1._1.ctor === '[]')) {
											return A2(
												_elm_lang$core$Basics_ops['++'],
												'{',
												A2(
													_elm_lang$core$Basics_ops['++'],
													A2(_wende$elchemy$ExExpression$elixirE, c, _p52._1._0),
													'}'));
										} else {
											break _v28_8;
										}
									case 'Ok':
										if ((_p52._1.ctor === '::') && (_p52._1._1.ctor === '[]')) {
											var _p57 = _p52._1._0;
											return _elm_lang$core$Native_Utils.eq(
												_p57,
												_Bogdanp$elm_ast$Ast_Expression$Variable(
													{
														ctor: '::',
														_0: '()',
														_1: {ctor: '[]'}
													})) ? ':ok' : A2(
												_elm_lang$core$Basics_ops['++'],
												'{:ok, ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													A2(_wende$elchemy$ExExpression$elixirE, c, _p57),
													'}'));
										} else {
											break _v28_8;
										}
									case 'Err':
										if ((_p52._1.ctor === '::') && (_p52._1._1.ctor === '[]')) {
											return A2(
												_elm_lang$core$Basics_ops['++'],
												'{:error, ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													A2(_wende$elchemy$ExExpression$elixirE, c, _p52._1._0),
													'}'));
										} else {
											break _v28_8;
										}
									default:
										break _v28_8;
								}
							} else {
								break _v28_8;
							}
						default:
							break _v28_9;
					}
				} else {
					break _v28_9;
				}
			} while(false);
			var _p61 = _p52._1;
			var _p58 = _wende$elchemy$Helpers$lastAndRest(_p52._0._0);
			if ((_p58.ctor === '_Tuple2') && (_p58._0.ctor === 'Just')) {
				var _p59 = _p58._0._0;
				return _elm_lang$core$Maybe$withDefault(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'{',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_wende$elchemy$ExExpression$elixirE,
								c,
								_Bogdanp$elm_ast$Ast_Expression$Variable(
									{
										ctor: '::',
										_0: _p59,
										_1: {ctor: '[]'}
									})),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(
										_elm_lang$core$String$join,
										', ',
										A2(
											_elm_lang$core$List$map,
											_wende$elchemy$ExExpression$elixirE(c),
											_p61)),
									'}')))))(
					A3(_wende$elchemy$ExExpression$aliasFor, c, _p59, _p61));
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'ExExpression',
					{
						start: {line: 277, column: 13},
						end: {line: 289, column: 52}
					},
					_p58)('Won\'t ever happen');
			}
		} while(false);
		return _elm_lang$core$Native_Utils.crashCase(
			'ExExpression',
			{
				start: {line: 248, column: 5},
				end: {line: 292, column: 70}
			},
			_p52)(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'Shouldn\'t ever work for',
				_elm_lang$core$Basics$toString(_p52)));
	});

var _wende$elchemy$ExFunction$flattenCommas = function (e) {
	var _p0 = e;
	if (_p0.ctor === 'Tuple') {
		return _p0._0;
	} else {
		return {
			ctor: '::',
			_0: _p0,
			_1: {ctor: '[]'}
		};
	}
};
var _wende$elchemy$ExFunction$combineComas = F3(
	function (c, elixirE, e) {
		return A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				elixirE(c),
				_wende$elchemy$ExFunction$flattenCommas(e)));
	});
var _wende$elchemy$ExFunction$privateOrPublic = F2(
	function (context, name) {
		return A2(_wende$elchemy$ExContext$isPrivate, context, name) ? 'p' : '';
	});
var _wende$elchemy$ExFunction$functionCurry = F4(
	function (c, elixirE, name, arity) {
		var _p1 = {
			ctor: '_Tuple2',
			_0: arity,
			_1: A3(_wende$elchemy$ExContext$hasFlag, 'nocurry', name, c)
		};
		_v1_0:
		do {
			if (_p1._1 === true) {
				if (_p1._0 === 0) {
					break _v1_0;
				} else {
					return '';
				}
			} else {
				if (_p1._0 === 0) {
					break _v1_0;
				} else {
					var resolvedName = _wende$elchemy$Helpers$isCustomOperator(name) ? _wende$elchemy$Helpers$translateOperator(name) : A2(_wende$elchemy$Helpers$toSnakeCase, true, name);
					return A2(
						_elm_lang$core$String$join,
						'',
						{
							ctor: '::',
							_0: _wende$elchemy$Helpers$ind(c.indent),
							_1: {
								ctor: '::',
								_0: 'curry',
								_1: {
									ctor: '::',
									_0: A2(_wende$elchemy$ExFunction$privateOrPublic, c, name),
									_1: {
										ctor: '::',
										_0: ' ',
										_1: {
											ctor: '::',
											_0: resolvedName,
											_1: {
												ctor: '::',
												_0: '/',
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Basics$toString(_p1._0),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						});
				}
			}
		} while(false);
		return '';
	});
var _wende$elchemy$ExFunction$genElixirFunc = F6(
	function (c, elixirE, name, args, missingArgs, body) {
		var _p2 = {
			ctor: '_Tuple2',
			_0: _wende$elchemy$Helpers$operatorType(name),
			_1: args
		};
		switch (_p2._0.ctor) {
			case 'Custom':
				return A2(
					_elm_lang$core$String$join,
					'',
					{
						ctor: '::',
						_0: _wende$elchemy$Helpers$ind(c.indent),
						_1: {
							ctor: '::',
							_0: 'def',
							_1: {
								ctor: '::',
								_0: A2(_wende$elchemy$ExFunction$privateOrPublic, c, name),
								_1: {
									ctor: '::',
									_0: ' ',
									_1: {
										ctor: '::',
										_0: _wende$elchemy$Helpers$translateOperator(name),
										_1: {
											ctor: '::',
											_0: '(',
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$core$String$join,
													', ',
													A3(
														_elm_lang$core$Basics$flip,
														F2(
															function (x, y) {
																return A2(_elm_lang$core$Basics_ops['++'], x, y);
															}),
														_wende$elchemy$Helpers$generateArguments(missingArgs),
														A2(
															_elm_lang$core$List$map,
															elixirE(
																A2(_wende$elchemy$ExVariable$rememberVariables, args, c)),
															args))),
												_1: {
													ctor: '::',
													_0: ') do',
													_1: {
														ctor: '::',
														_0: _wende$elchemy$Helpers$ind(c.indent + 1),
														_1: {
															ctor: '::',
															_0: A2(
																elixirE,
																A2(
																	_wende$elchemy$ExVariable$rememberVariables,
																	args,
																	_wende$elchemy$ExContext$indent(c)),
																body),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$core$String$join,
																	'',
																	A2(
																		_elm_lang$core$List$map,
																		function (a) {
																			return A2(
																				_elm_lang$core$Basics_ops['++'],
																				'.(',
																				A2(_elm_lang$core$Basics_ops['++'], a, ')'));
																		},
																		_wende$elchemy$Helpers$generateArguments(missingArgs))),
																_1: {
																	ctor: '::',
																	_0: _wende$elchemy$Helpers$ind(c.indent),
																	_1: {
																		ctor: '::',
																		_0: 'end',
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					});
			case 'Builtin':
				if (((_p2._1.ctor === '::') && (_p2._1._1.ctor === '::')) && (_p2._1._1._1.ctor === '[]')) {
					var _p4 = _p2._1._1._0;
					var _p3 = _p2._1._0;
					return A2(
						_elm_lang$core$String$join,
						'',
						{
							ctor: '::',
							_0: _wende$elchemy$Helpers$ind(c.indent),
							_1: {
								ctor: '::',
								_0: 'def',
								_1: {
									ctor: '::',
									_0: A2(_wende$elchemy$ExFunction$privateOrPublic, c, name),
									_1: {
										ctor: '::',
										_0: ' ',
										_1: {
											ctor: '::',
											_0: A2(
												elixirE,
												A2(
													_wende$elchemy$ExVariable$rememberVariables,
													{
														ctor: '::',
														_0: _p3,
														_1: {ctor: '[]'}
													},
													c),
												_p3),
											_1: {
												ctor: '::',
												_0: ' ',
												_1: {
													ctor: '::',
													_0: _wende$elchemy$Helpers$translateOperator(name),
													_1: {
														ctor: '::',
														_0: ' ',
														_1: {
															ctor: '::',
															_0: A2(
																elixirE,
																A2(
																	_wende$elchemy$ExVariable$rememberVariables,
																	{
																		ctor: '::',
																		_0: _p4,
																		_1: {ctor: '[]'}
																	},
																	c),
																_p4),
															_1: {
																ctor: '::',
																_0: ' do',
																_1: {
																	ctor: '::',
																	_0: _wende$elchemy$Helpers$ind(c.indent + 1),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			elixirE,
																			A2(
																				_wende$elchemy$ExVariable$rememberVariables,
																				args,
																				_wende$elchemy$ExContext$indent(c)),
																			body),
																		_1: {
																			ctor: '::',
																			_0: _wende$elchemy$Helpers$ind(c.indent),
																			_1: {
																				ctor: '::',
																				_0: 'end',
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						});
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'ExFunction',
						{
							start: {line: 19, column: 5},
							end: {line: 101, column: 38}
						},
						_p2)(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'operator ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								name,
								A2(
									_elm_lang$core$Basics_ops['++'],
									' has to have 2 arguments but has ',
									_elm_lang$core$Basics$toString(args)))));
				}
			default:
				var missing = _wende$elchemy$Helpers$generateArguments(missingArgs);
				var wrapIfMiss = function (s) {
					return (_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$List$length(missing),
						0) > 0) ? s : '';
				};
				var missingVarargs = A2(
					_elm_lang$core$List$map,
					function (_p6) {
						return _Bogdanp$elm_ast$Ast_Expression$Variable(
							_elm_lang$core$List$singleton(_p6));
					},
					missing);
				return A2(
					_elm_lang$core$String$join,
					'',
					{
						ctor: '::',
						_0: _wende$elchemy$Helpers$ind(c.indent),
						_1: {
							ctor: '::',
							_0: 'def',
							_1: {
								ctor: '::',
								_0: A2(_wende$elchemy$ExFunction$privateOrPublic, c, name),
								_1: {
									ctor: '::',
									_0: ' ',
									_1: {
										ctor: '::',
										_0: A2(_wende$elchemy$Helpers$toSnakeCase, true, name),
										_1: {
											ctor: '::',
											_0: '(',
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$core$String$join,
													', ',
													A2(
														_elm_lang$core$List$map,
														elixirE(
															_wende$elchemy$ExContext$inArgs(c)),
														A2(_elm_lang$core$Basics_ops['++'], args, missingVarargs))),
												_1: {
													ctor: '::',
													_0: ') do',
													_1: {
														ctor: '::',
														_0: _wende$elchemy$Helpers$ind(c.indent + 1),
														_1: {
															ctor: '::',
															_0: wrapIfMiss('('),
															_1: {
																ctor: '::',
																_0: A2(
																	elixirE,
																	A2(
																		_wende$elchemy$ExVariable$rememberVariables,
																		A2(_elm_lang$core$Basics_ops['++'], args, missingVarargs),
																		_wende$elchemy$ExContext$indent(c)),
																	body),
																_1: {
																	ctor: '::',
																	_0: wrapIfMiss(')'),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_elm_lang$core$String$join,
																			'',
																			A2(
																				_elm_lang$core$List$map,
																				function (a) {
																					return A2(
																						_elm_lang$core$Basics_ops['++'],
																						'.(',
																						A2(_elm_lang$core$Basics_ops['++'], a, ')'));
																				},
																				missing)),
																		_1: {
																			ctor: '::',
																			_0: _wende$elchemy$Helpers$ind(c.indent),
																			_1: {
																				ctor: '::',
																				_0: 'end',
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					});
		}
	});
var _wende$elchemy$ExFunction$genFunctionDefinition = F5(
	function (c, elixirE, name, args, body) {
		var typeDef = A2(_elm_lang$core$Dict$get, name, c.definitions);
		var arity = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.arity;
				},
				typeDef));
		return A3(_wende$elchemy$ExContext$hasFlag, 'nodef', name, c) ? A4(_wende$elchemy$ExFunction$functionCurry, c, elixirE, name, arity) : A2(
			_elm_lang$core$Basics_ops['++'],
			A4(_wende$elchemy$ExFunction$functionCurry, c, elixirE, name, arity),
			A2(
				_elm_lang$core$Basics_ops['++'],
				A6(
					_wende$elchemy$ExFunction$genElixirFunc,
					c,
					elixirE,
					name,
					args,
					arity - _elm_lang$core$List$length(args),
					body),
				'\n'));
	});
var _wende$elchemy$ExFunction$genOverloadedFunctionDefinition = F6(
	function (c, elixirE, name, args, body, expressions) {
		var typeDef = A2(_elm_lang$core$Dict$get, name, c.definitions);
		var arity = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.arity;
				},
				typeDef));
		return A3(_wende$elchemy$ExContext$hasFlag, 'nodef', name, c) ? A4(_wende$elchemy$ExFunction$functionCurry, c, elixirE, name, arity) : A2(
			_elm_lang$core$Basics_ops['++'],
			A4(_wende$elchemy$ExFunction$functionCurry, c, elixirE, name, arity),
			A3(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				'\n',
				A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					'',
					A2(
						_elm_lang$core$List$map,
						function (_p7) {
							var _p8 = _p7;
							return A6(
								_wende$elchemy$ExFunction$genElixirFunc,
								c,
								elixirE,
								name,
								{
									ctor: '::',
									_0: _p8._0,
									_1: {ctor: '[]'}
								},
								arity - 1,
								_p8._1);
						},
						expressions))));
	});

var _wende$elchemy$ExFfi$resolveFfi = F3(
	function (c, elixirE, ffi) {
		var _p0 = ffi;
		_v0_7:
		do {
			switch (_p0.ctor) {
				case 'TryFfi':
					if ((_p0._0.ctor === 'String') && (_p0._1.ctor === 'String')) {
						if (_p0._2.ctor === 'Tuple') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'try_catch fn _ -> ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p0._0._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										'.',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_p0._1._0,
											A2(
												_elm_lang$core$Basics_ops['++'],
												'(',
												A2(
													_elm_lang$core$Basics_ops['++'],
													A3(_wende$elchemy$ExFunction$combineComas, c, elixirE, _p0._2),
													A2(_elm_lang$core$Basics_ops['++'], ')', ' end')))))));
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'try_catch fn _ -> ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p0._0._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										'.',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_p0._1._0,
											A2(
												_elm_lang$core$Basics_ops['++'],
												'(',
												A2(
													_elm_lang$core$Basics_ops['++'],
													A2(elixirE, c, _p0._2),
													A2(_elm_lang$core$Basics_ops['++'], ')', ' end')))))));
						}
					} else {
						break _v0_7;
					}
				case 'Ffi':
					if ((_p0._0.ctor === 'String') && (_p0._1.ctor === 'String')) {
						if (_p0._2.ctor === 'Tuple') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								_p0._0._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'.',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p0._1._0,
										A2(
											_elm_lang$core$Basics_ops['++'],
											'(',
											A2(
												_elm_lang$core$Basics_ops['++'],
												A3(_wende$elchemy$ExFunction$combineComas, c, elixirE, _p0._2),
												')')))));
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								_p0._0._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'.',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p0._1._0,
										A2(
											_elm_lang$core$Basics_ops['++'],
											'(',
											A2(
												_elm_lang$core$Basics_ops['++'],
												A2(elixirE, c, _p0._2),
												')')))));
						}
					} else {
						break _v0_7;
					}
				case 'Lffi':
					if (_p0._0.ctor === 'String') {
						if (_p0._1.ctor === 'Tuple') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								_p0._0._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A3(_wende$elchemy$ExFunction$combineComas, c, elixirE, _p0._1),
										')')));
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								_p0._0._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(elixirE, c, _p0._1),
										')')));
						}
					} else {
						break _v0_7;
					}
				default:
					var args = _wende$elchemy$Helpers$generateArguments(_p0._0);
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'fn (',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(_elm_lang$core$String$join, ',', args),
							A2(
								_elm_lang$core$Basics_ops['++'],
								') -> ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(elixirE, c, _p0._1),
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(
											_elm_lang$core$String$join,
											'',
											A2(
												_elm_lang$core$List$map,
												function (a) {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'.(',
														A2(_elm_lang$core$Basics_ops['++'], a, ')'));
												},
												args)),
										' end')))));
			}
		} while(false);
		return _elm_lang$core$Native_Utils.crashCase(
			'ExFfi',
			{
				start: {line: 142, column: 5},
				end: {line: 195, column: 41}
			},
			_p0)('Wrong ffi call');
	});
var _wende$elchemy$ExFfi$Flambda = F2(
	function (a, b) {
		return {ctor: 'Flambda', _0: a, _1: b};
	});
var _wende$elchemy$ExFfi$flambdify = F3(
	function (c, elixirE, argTypes) {
		var arity = _elm_lang$core$List$length(argTypes) - 1;
		var indexes = A2(_elm_lang$core$List$range, 1, arity);
		return A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					var _p6 = _p3._0;
					var _p4 = _p3._1;
					if (_p4.ctor === '[]') {
						return _elm_lang$core$Native_Utils.crashCase(
							'ExFfi',
							{
								start: {line: 113, column: 21},
								end: {line: 128, column: 71}
							},
							_p4)('Impossible');
					} else {
						if (_p4._1.ctor === '[]') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'a',
								_elm_lang$core$Basics$toString(_p6));
						} else {
							var makeFlambda = _wende$elchemy$ExFfi$Flambda(
								_elm_lang$core$List$length(_p4) - 1);
							var $var = _Bogdanp$elm_ast$Ast_Expression$Variable(
								{
									ctor: '::',
									_0: A2(
										_elm_lang$core$Basics_ops['++'],
										'a',
										_elm_lang$core$Basics$toString(_p6)),
									_1: {ctor: '[]'}
								});
							return A3(
								_wende$elchemy$ExFfi$resolveFfi,
								c,
								elixirE,
								makeFlambda($var));
						}
					}
				},
				A3(
					_elm_lang$core$List$map2,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					indexes,
					argTypes)));
	});
var _wende$elchemy$ExFfi$generateFfi = F5(
	function (c, elixirE, name, argTypes, e) {
		var wrapAllInVar = _elm_lang$core$List$map(
			function (_p7) {
				return _Bogdanp$elm_ast$Ast_Expression$Variable(
					_elm_lang$core$List$singleton(_p7));
			});
		var flambdaArguments = function (c) {
			return A3(_wende$elchemy$ExFfi$flambdify, c, elixirE, argTypes);
		};
		var appList = _wende$elchemy$Helpers$applicationToList(e);
		var typeDef = A2(_elm_lang$core$Dict$get, name, c.definitions);
		var _p8 = {
			ctor: '_Tuple2',
			_0: typeDef,
			_1: _wende$elchemy$Helpers$applicationToList(e)
		};
		_v3_3:
		do {
			if (_p8.ctor === '_Tuple2') {
				if (_p8._0.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.crashCase(
						'ExFfi',
						{
							start: {line: 33, column: 9},
							end: {line: 98, column: 51}
						},
						_p8)('Ffi requires type definition');
				} else {
					if (((((((((_p8._1.ctor === '::') && (_p8._1._0.ctor === 'Variable')) && (_p8._1._0._0.ctor === '::')) && (_p8._1._0._0._1.ctor === '[]')) && (_p8._1._1.ctor === '::')) && (_p8._1._1._0.ctor === 'String')) && (_p8._1._1._1.ctor === '::')) && (_p8._1._1._1._0.ctor === 'String')) && (_p8._1._1._1._1.ctor === '[]')) {
						switch (_p8._1._0._0._0) {
							case 'ffi':
								var _p12 = _p8._1._1._0._0;
								var _p11 = _p8._1._1._1._0._0;
								var _p10 = _p8._0._0;
								var $arguments = A2(_wende$elchemy$Helpers$generateArguments_, 'a', _p10.arity);
								return A2(
									_elm_lang$core$Basics_ops['++'],
									A4(_wende$elchemy$ExFunction$functionCurry, c, elixirE, name, _p10.arity),
									A2(
										_elm_lang$core$Basics_ops['++'],
										A4(
											_wende$elchemy$ExContext$onlyWithoutFlag,
											c,
											'noverify',
											name,
											A2(
												_elm_lang$core$Basics_ops['++'],
												_wende$elchemy$Helpers$ind(c.indent),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'verify as: ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														_p12,
														A2(
															_elm_lang$core$Basics_ops['++'],
															'.',
															A2(
																_elm_lang$core$Basics_ops['++'],
																_p11,
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	'/',
																	_elm_lang$core$Basics$toString(_p10.arity)))))))),
										A2(
											_elm_lang$core$Basics_ops['++'],
											_wende$elchemy$Helpers$ind(c.indent),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'def',
												A2(
													_elm_lang$core$Basics_ops['++'],
													A2(_wende$elchemy$ExFunction$privateOrPublic, c, name),
													A2(
														_elm_lang$core$Basics_ops['++'],
														' ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															A2(_wende$elchemy$Helpers$toSnakeCase, true, name),
															A2(
																_elm_lang$core$Basics_ops['++'],
																'(',
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	A2(_elm_lang$core$String$join, ', ', $arguments),
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		')',
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			', do: ',
																			A2(
																				_elm_lang$core$Basics_ops['++'],
																				_p12,
																				A2(
																					_elm_lang$core$Basics_ops['++'],
																					'.',
																					A2(
																						_elm_lang$core$Basics_ops['++'],
																						_p11,
																						A2(
																							_elm_lang$core$Basics_ops['++'],
																							'(',
																							A2(
																								_elm_lang$core$Basics_ops['++'],
																								flambdaArguments(
																									A2(
																										_wende$elchemy$ExVariable$rememberVariables,
																										wrapAllInVar($arguments),
																										c)),
																								')'))))))))))))))));
							case 'tryFfi':
								var _p13 = _p8._0._0;
								var $arguments = A2(_wende$elchemy$Helpers$generateArguments_, 'a', _p13.arity);
								return A2(
									_elm_lang$core$Basics_ops['++'],
									A4(_wende$elchemy$ExFunction$functionCurry, c, elixirE, name, _p13.arity),
									A2(
										_elm_lang$core$Basics_ops['++'],
										_wende$elchemy$Helpers$ind(c.indent),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'def',
											A2(
												_elm_lang$core$Basics_ops['++'],
												A2(_wende$elchemy$ExFunction$privateOrPublic, c, name),
												A2(
													_elm_lang$core$Basics_ops['++'],
													' ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														A2(_wende$elchemy$Helpers$toSnakeCase, true, name),
														A2(
															_elm_lang$core$Basics_ops['++'],
															'(',
															A2(
																_elm_lang$core$Basics_ops['++'],
																A2(
																	_elm_lang$core$String$join,
																	', ',
																	A2(_wende$elchemy$Helpers$generateArguments_, 'a', _p13.arity)),
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	')',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		' do ',
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			_wende$elchemy$Helpers$ind(c.indent + 1),
																			A2(
																				_elm_lang$core$Basics_ops['++'],
																				'try_catch fn -> ',
																				A2(
																					_elm_lang$core$Basics_ops['++'],
																					_wende$elchemy$Helpers$ind(c.indent + 2),
																					A2(
																						_elm_lang$core$Basics_ops['++'],
																						_p8._1._1._0._0,
																						A2(
																							_elm_lang$core$Basics_ops['++'],
																							'.',
																							A2(
																								_elm_lang$core$Basics_ops['++'],
																								_p8._1._1._1._0._0,
																								A2(
																									_elm_lang$core$Basics_ops['++'],
																									'(',
																									A2(
																										_elm_lang$core$Basics_ops['++'],
																										flambdaArguments(
																											A2(
																												_wende$elchemy$ExVariable$rememberVariables,
																												wrapAllInVar($arguments),
																												c)),
																										A2(
																											_elm_lang$core$Basics_ops['++'],
																											')',
																											A2(
																												_elm_lang$core$Basics_ops['++'],
																												_wende$elchemy$Helpers$ind(c.indent + 1),
																												A2(
																													_elm_lang$core$Basics_ops['++'],
																													'end',
																													A2(
																														_elm_lang$core$Basics_ops['++'],
																														_wende$elchemy$Helpers$ind(c.indent),
																														'end'))))))))))))))))))))));
							default:
								break _v3_3;
						}
					} else {
						break _v3_3;
					}
				}
			} else {
				break _v3_3;
			}
		} while(false);
		return _elm_lang$core$Native_Utils.crashCase(
			'ExFfi',
			{
				start: {line: 33, column: 9},
				end: {line: 98, column: 51}
			},
			_p8)('Wrong ffi definition');
	});
var _wende$elchemy$ExFfi$TryFfi = F3(
	function (a, b, c) {
		return {ctor: 'TryFfi', _0: a, _1: b, _2: c};
	});
var _wende$elchemy$ExFfi$Ffi = F3(
	function (a, b, c) {
		return {ctor: 'Ffi', _0: a, _1: b, _2: c};
	});
var _wende$elchemy$ExFfi$Lffi = F2(
	function (a, b) {
		return {ctor: 'Lffi', _0: a, _1: b};
	});

var _wende$elchemy$ExStatement$typeAplicationToList = function (application) {
	var _p0 = application;
	if (_p0.ctor === 'TypeApplication') {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: _p0._0,
				_1: {ctor: '[]'}
			},
			_wende$elchemy$ExStatement$typeAplicationToList(_p0._1));
	} else {
		return {
			ctor: '::',
			_0: _p0,
			_1: {ctor: '[]'}
		};
	}
};
var _wende$elchemy$ExStatement$addTypeDefinition = F3(
	function (c, name, d) {
		return _elm_lang$core$Native_Utils.update(
			c,
			{
				definitions: A3(_elm_lang$core$Dict$insert, name, d, c.definitions)
			});
	});
var _wende$elchemy$ExStatement$getTypeDefinition = function (a) {
	var _p1 = a;
	if (_p1.ctor === 'FunctionTypeDeclaration') {
		var _p2 = _p1._1;
		var arity = _elm_lang$core$List$length(
			_wende$elchemy$ExStatement$typeAplicationToList(_p2));
		return A2(_wende$elchemy$ExContext$Definition, arity - 1, _p2);
	} else {
		return _elm_lang$core$Native_Utils.crashCase(
			'ExStatement',
			{
				start: {line: 357, column: 5},
				end: {line: 366, column: 54}
			},
			_p1)('It\'s not a type declaration');
	}
};
var _wende$elchemy$ExStatement$maybeDoctest = F2(
	function (c, line) {
		if (A2(
			_elm_lang$core$String$startsWith,
			_wende$elchemy$Helpers$ind(c.indent + 1),
			A2(_elm_lang$core$Basics_ops['++'], '\n', line))) {
			var _p4 = A2(
				_Bogdanp$elm_ast$Ast$parseExpression,
				_Bogdanp$elm_ast$Ast_BinOp$operators,
				_elm_lang$core$String$trim(line));
			if (((((((_p4.ctor === 'Ok') && (_p4._0.ctor === '_Tuple3')) && (_p4._0._2.ctor === 'BinOp')) && (_p4._0._2._0.ctor === 'Variable')) && (_p4._0._2._0._0.ctor === '::')) && (_p4._0._2._0._0._0 === '==')) && (_p4._0._2._0._0._1.ctor === '[]')) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_wende$elchemy$Helpers$indNoNewline(c.indent + 1),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'iex> import ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							c.mod,
							A2(
								_elm_lang$core$Basics_ops['++'],
								_wende$elchemy$Helpers$ind(c.indent + 2),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'iex> ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(_wende$elchemy$ExExpression$elixirE, c, _p4._0._2._1),
										A2(
											_elm_lang$core$Basics_ops['++'],
											_wende$elchemy$Helpers$ind(c.indent + 2),
											A2(
												_elm_lang$core$Basics_ops['++'],
												A2(_wende$elchemy$ExExpression$elixirE, c, _p4._0._2._2),
												'\n'))))))));
			} else {
				return line;
			}
		} else {
			return line;
		}
	});
var _wende$elchemy$ExStatement$subsetExport = function (exp) {
	var _p5 = exp;
	switch (_p5.ctor) {
		case 'TypeExport':
			return {ctor: '[]'};
		case 'FunctionExport':
			var _p6 = _p5._0;
			return _wende$elchemy$Helpers$isCustomOperator(_p6) ? {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Basics_ops['++'],
					'{:\'',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_wende$elchemy$Helpers$translateOperator(_p6),
						'\', 0}')),
				_1: {ctor: '[]'}
			} : {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Basics_ops['++'],
					'{:\'',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_wende$elchemy$Helpers$toSnakeCase, true, _p6),
						'\', 0}')),
				_1: {ctor: '[]'}
			};
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'ExStatement',
				{
					start: {line: 319, column: 5},
					end: {line: 330, column: 62}
				},
				_p5)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'You can\'t export ',
					_elm_lang$core$Basics$toString(exp)));
	}
};
var _wende$elchemy$ExStatement$verifyFlag = function (flag) {
	var _p8 = flag;
	_v4_2:
	do {
		if (_p8.ctor === '::') {
			if (_p8._1.ctor === '::') {
				if (_p8._1._1.ctor === '[]') {
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p8._0, _1: _p8._1._0});
				} else {
					break _v4_2;
				}
			} else {
				if (_p8._0 === '') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					break _v4_2;
				}
			}
		} else {
			break _v4_2;
		}
	} while(false);
	return _elm_lang$core$Native_Utils.crashCase(
		'ExStatement',
		{
			start: {line: 214, column: 5},
			end: {line: 222, column: 62}
		},
		_p8)(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'Wrong flag format ',
			_elm_lang$core$Basics$toString(_p8)));
};
var _wende$elchemy$ExStatement$moduleStatement = function (s) {
	var _p10 = s;
	if (_p10.ctor === 'ModuleDeclaration') {
		return A2(
			_wende$elchemy$ExContext$empty,
			_wende$elchemy$Helpers$modulePathName(_p10._0),
			_p10._1);
	} else {
		return _elm_lang$core$Native_Utils.crashCase(
			'ExStatement',
			{
				start: {line: 33, column: 5},
				end: {line: 38, column: 69}
			},
			_p10)('First statement must be module declaration');
	}
};
var _wende$elchemy$ExStatement$Flag = function (a) {
	return {ctor: 'Flag', _0: a};
};
var _wende$elchemy$ExStatement$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _wende$elchemy$ExStatement$findCommentType = F3(
	function (regex, commentType, acc) {
		var _p12 = acc;
		if (_p12.ctor === 'Normal') {
			var _p13 = _p12._0;
			return A2(_elm_lang$core$Regex$contains, regex, _p13) ? commentType(
				A4(
					_elm_lang$core$Regex$replace,
					_elm_lang$core$Regex$AtMost(1),
					regex,
					_elm_lang$core$Basics$always(''),
					_p13)) : _wende$elchemy$ExStatement$Normal(_p13);
		} else {
			return _p12;
		}
	});
var _wende$elchemy$ExStatement$Ex = function (a) {
	return {ctor: 'Ex', _0: a};
};
var _wende$elchemy$ExStatement$Doc = function (a) {
	return {ctor: 'Doc', _0: a};
};
var _wende$elchemy$ExStatement$getCommentType = function (comment) {
	return A3(
		_elm_lang$core$List$foldl,
		_elm_lang$core$Basics$uncurry(_wende$elchemy$ExStatement$findCommentType),
		_wende$elchemy$ExStatement$Normal(comment),
		A2(
			_elm_lang$core$List$map,
			function (_p14) {
				var _p15 = _p14;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Regex$regex(_p15._0),
					_1: _p15._1
				};
			},
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: '^\\sex\\b', _1: _wende$elchemy$ExStatement$Ex},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: '^\\|', _1: _wende$elchemy$ExStatement$Doc},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: '^\\sflag\\b', _1: _wende$elchemy$ExStatement$Flag},
						_1: {ctor: '[]'}
					}
				}
			}));
};
var _wende$elchemy$ExStatement$ModuleDoc = {ctor: 'ModuleDoc'};
var _wende$elchemy$ExStatement$Typedoc = {ctor: 'Typedoc'};
var _wende$elchemy$ExStatement$Fundoc = {ctor: 'Fundoc'};
var _wende$elchemy$ExStatement$elixirDoc = F3(
	function (c, doctype, content) {
		var prefix = (!c.hasModuleDoc) ? '@moduledoc' : (_elm_lang$core$Native_Utils.eq(doctype, _wende$elchemy$ExStatement$Fundoc) ? '@doc' : '@typedoc');
		return A2(
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$core$Native_Utils.update(
				c,
				{hasModuleDoc: true, lastDoc: _elm_lang$core$Maybe$Nothing}),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_wende$elchemy$Helpers$ind(c.indent),
				A2(
					_elm_lang$core$Basics_ops['++'],
					prefix,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' \"\"\"\n ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$String$join,
								_wende$elchemy$Helpers$ind(c.indent),
								A2(
									_elm_lang$core$List$map,
									A3(
										_elm_lang$core$Regex$replace,
										_elm_lang$core$Regex$All,
										_elm_lang$core$Regex$regex('\"\"\"'),
										_elm_lang$core$Basics$always('\\\"\\\"\\\"')),
									A2(
										_elm_lang$core$List$map,
										_wende$elchemy$Helpers$escape,
										A2(
											_elm_lang$core$List$map,
											_wende$elchemy$ExStatement$maybeDoctest(c),
											_elm_lang$core$String$lines(content))))),
							A2(
								_elm_lang$core$Basics_ops['++'],
								_wende$elchemy$Helpers$ind(c.indent),
								'\"\"\"'))))));
	});
var _wende$elchemy$ExStatement$elixirComment = F2(
	function (c, content) {
		var _p16 = _wende$elchemy$ExStatement$getCommentType(content);
		switch (_p16.ctor) {
			case 'Doc':
				var _p17 = _p16._0;
				return c.hasModuleDoc ? A2(
					_wende$elchemy$Helpers_ops['=>'],
					_elm_lang$core$Native_Utils.update(
						c,
						{
							lastDoc: _elm_lang$core$Maybe$Just(_p17)
						}),
					'') : A3(_wende$elchemy$ExStatement$elixirDoc, c, _wende$elchemy$ExStatement$ModuleDoc, _p17);
			case 'Ex':
				return A2(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					c,
					A2(
						_wende$elchemy$Helpers$indAll,
						c.indent,
						A2(
							_elm_lang$core$String$join,
							'\n',
							A2(
								_elm_lang$core$List$map,
								_elm_lang$core$String$trim,
								A2(_elm_lang$core$String$split, '\n', _p16._0)))));
			case 'Flag':
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					'',
					A3(
						_elm_lang$core$List$foldl,
						_wende$elchemy$ExContext$addFlag,
						c,
						A2(
							_elm_lang$core$List$filterMap,
							_wende$elchemy$ExStatement$verifyFlag,
							A2(
								_elm_lang$core$List$map,
								_elm_lang$core$String$split(':+'),
								A3(
									_elm_lang$core$Regex$split,
									_elm_lang$core$Regex$All,
									_elm_lang$core$Regex$regex('\\s+'),
									_p16._0)))));
			default:
				return A2(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					c,
					A2(
						_wende$elchemy$Helpers$indAll,
						c.indent,
						A2(_wende$elchemy$Helpers$prependAll, '# ', _p16._0)));
		}
	});
var _wende$elchemy$ExStatement$elixirS = F2(
	function (c, s) {
		var _p18 = s;
		_v9_12:
		do {
			switch (_p18.ctor) {
				case 'InfixDeclaration':
					return {ctor: '_Tuple2', _0: c, _1: ''};
				case 'TypeDeclaration':
					if (((_p18._0.ctor === 'TypeConstructor') && (_p18._0._0.ctor === '::')) && (_p18._0._0._1.ctor === '[]')) {
						var _p19 = A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '_Tuple2', _0: c, _1: ''},
							A2(
								_elm_lang$core$Maybe$map,
								A2(_wende$elchemy$ExStatement$elixirDoc, c, _wende$elchemy$ExStatement$Typedoc),
								c.lastDoc));
						var newC = _p19._0;
						var code = _p19._1;
						return A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							newC,
							A2(
								_elm_lang$core$Basics_ops['++'],
								code,
								A2(
									_elm_lang$core$Basics_ops['++'],
									_wende$elchemy$Helpers$ind(c.indent),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'@type ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											A2(_wende$elchemy$Helpers$toSnakeCase, true, _p18._0._0._0),
											A2(
												_elm_lang$core$Basics_ops['++'],
												' :: ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													A2(
														_elm_lang$core$String$join,
														' | ',
														A2(
															_elm_lang$core$List$map,
															_wende$elchemy$ExType$uniontype(c),
															_p18._1)),
													'\n')))))));
					} else {
						break _v9_12;
					}
				case 'TypeAliasDeclaration':
					return {ctor: '_Tuple2', _0: c, _1: ''};
				case 'FunctionTypeDeclaration':
					if (_p18._1.ctor === 'TypeApplication') {
						var _p23 = _p18._1;
						var _p22 = _p18._0;
						var _p20 = A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '_Tuple2', _0: c, _1: ''},
							A2(
								_elm_lang$core$Maybe$map,
								A2(_wende$elchemy$ExStatement$elixirDoc, c, _wende$elchemy$ExStatement$Fundoc),
								c.lastDoc));
						var newC = _p20._0;
						var code = _p20._1;
						var definition = _wende$elchemy$ExStatement$getTypeDefinition(_p18);
						return A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							A3(_wende$elchemy$ExStatement$addTypeDefinition, newC, _p22, definition),
							A2(
								_elm_lang$core$Basics_ops['++'],
								A4(_wende$elchemy$ExContext$onlyWithoutFlag, newC, 'nodef', _p22, code),
								function () {
									var _p21 = _wende$elchemy$Helpers$operatorType(_p22);
									switch (_p21.ctor) {
										case 'Builtin':
											return '';
										case 'Custom':
											return A4(
												_wende$elchemy$ExContext$onlyWithoutFlag,
												newC,
												'nospec',
												_p22,
												A2(
													_elm_lang$core$Basics_ops['++'],
													_wende$elchemy$Helpers$ind(newC.indent),
													A2(
														_elm_lang$core$Basics_ops['++'],
														'@spec ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_wende$elchemy$Helpers$translateOperator(_p22),
															A2(_wende$elchemy$ExType$typespec, newC, _p23)))));
										default:
											return A4(
												_wende$elchemy$ExContext$onlyWithoutFlag,
												newC,
												'nospec',
												_p22,
												A2(
													_elm_lang$core$Basics_ops['++'],
													_wende$elchemy$Helpers$ind(newC.indent),
													A2(
														_elm_lang$core$Basics_ops['++'],
														'@spec ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															A2(_wende$elchemy$Helpers$toSnakeCase, true, _p22),
															A2(_wende$elchemy$ExType$typespec, newC, _p23)))));
									}
								}()));
					} else {
						var _p27 = _p18._1;
						var _p26 = _p18._0;
						var _p24 = A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '_Tuple2', _0: c, _1: ''},
							A2(
								_elm_lang$core$Maybe$map,
								A2(_wende$elchemy$ExStatement$elixirDoc, c, _wende$elchemy$ExStatement$Fundoc),
								c.lastDoc));
						var newC = _p24._0;
						var code = _p24._1;
						var definition = _wende$elchemy$ExStatement$getTypeDefinition(_p18);
						return A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							A3(_wende$elchemy$ExStatement$addTypeDefinition, newC, _p26, definition),
							A2(
								_elm_lang$core$Basics_ops['++'],
								code,
								function () {
									var _p25 = _wende$elchemy$Helpers$operatorType(_p26);
									switch (_p25.ctor) {
										case 'Builtin':
											return '';
										case 'Custom':
											return A4(
												_wende$elchemy$ExContext$onlyWithoutFlag,
												newC,
												_p26,
												'nospec',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_wende$elchemy$Helpers$ind(c.indent),
													A2(
														_elm_lang$core$Basics_ops['++'],
														'@spec ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_wende$elchemy$Helpers$translateOperator(_p26),
															A2(_wende$elchemy$ExType$typespec, newC, _p27)))));
										default:
											return A4(
												_wende$elchemy$ExContext$onlyWithoutFlag,
												newC,
												_p26,
												'nospec',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_wende$elchemy$Helpers$ind(c.indent),
													A2(
														_elm_lang$core$Basics_ops['++'],
														'@spec ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															A2(_wende$elchemy$Helpers$toSnakeCase, true, _p26),
															A2(_wende$elchemy$ExType$typespec, newC, _p27)))));
									}
								}()));
					}
				case 'FunctionDeclaration':
					var _p32 = _p18._0;
					var _p31 = _p18._2;
					var _p30 = _p18._1;
					var genFfi = A4(
						_wende$elchemy$ExFfi$generateFfi,
						c,
						_wende$elchemy$ExExpression$elixirE,
						_p32,
						A2(
							_elm_lang$core$List$map,
							_wende$elchemy$ExStatement$typeAplicationToList,
							A2(
								_elm_lang$core$Maybe$withDefault,
								{ctor: '[]'},
								A2(
									_elm_lang$core$Maybe$map,
									function (_p28) {
										return _wende$elchemy$ExStatement$typeAplicationToList(
											function (_) {
												return _.def;
											}(_p28));
									},
									A2(_elm_lang$core$Dict$get, _p32, c.definitions)))));
					return A2(
						_wende$elchemy$Helpers_ops['=>'],
						c,
						function () {
							if (_elm_lang$core$Native_Utils.eq(
								A2(_elm_lang$core$Dict$get, _p32, c.definitions),
								_elm_lang$core$Maybe$Nothing) && (!A2(_wende$elchemy$ExContext$isPrivate, c, _p32))) {
								return _elm_lang$core$Native_Utils.crash(
									'ExStatement',
									{
										start: {line: 148, column: 25},
										end: {line: 148, column: 36}
									})(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'To be able to export it, you need to provide function type for `',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_p32,
											A2(
												_elm_lang$core$Basics_ops['++'],
												'` function in module ',
												_elm_lang$core$Basics$toString(c.mod)))));
							} else {
								var _p29 = _p31;
								_v12_3:
								do {
									switch (_p29.ctor) {
										case 'Application':
											if ((((_p29._0.ctor === 'Application') && (_p29._0._0.ctor === 'Variable')) && (_p29._0._0._0.ctor === '::')) && (_p29._0._0._0._1.ctor === '[]')) {
												switch (_p29._0._0._0._0) {
													case 'ffi':
														return genFfi(_p29);
													case 'tryFfi':
														return genFfi(_p29);
													default:
														break _v12_3;
												}
											} else {
												break _v12_3;
											}
										case 'Case':
											return _elm_lang$core$Native_Utils.eq(
												_wende$elchemy$ExFunction$flattenCommas(_p29._0),
												_p30) ? A6(_wende$elchemy$ExFunction$genOverloadedFunctionDefinition, c, _wende$elchemy$ExExpression$elixirE, _p32, _p30, _p31, _p29._1) : A5(_wende$elchemy$ExFunction$genFunctionDefinition, c, _wende$elchemy$ExExpression$elixirE, _p32, _p30, _p31);
										default:
											break _v12_3;
									}
								} while(false);
								return A5(_wende$elchemy$ExFunction$genFunctionDefinition, c, _wende$elchemy$ExExpression$elixirE, _p32, _p30, _p31);
							}
						}());
				case 'Comment':
					return A2(_wende$elchemy$ExStatement$elixirComment, c, _p18._0);
				case 'ImportStatement':
					if (_p18._1.ctor === 'Just') {
						if (_p18._2.ctor === 'Nothing') {
							return A2(
								_wende$elchemy$Helpers_ops['=>'],
								c,
								A2(
									_elm_lang$core$Basics_ops['++'],
									_wende$elchemy$Helpers$ind(c.indent),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'alias ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_wende$elchemy$Helpers$modulePath(_p18._0),
											A2(_elm_lang$core$Basics_ops['++'], ', as: ', _p18._1._0)))));
						} else {
							break _v9_12;
						}
					} else {
						if (_p18._2.ctor === 'Nothing') {
							return A2(
								_wende$elchemy$Helpers_ops['=>'],
								c,
								A2(
									_elm_lang$core$Basics_ops['++'],
									_wende$elchemy$Helpers$ind(c.indent),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'alias ',
										_wende$elchemy$Helpers$modulePath(_p18._0))));
						} else {
							switch (_p18._2._0.ctor) {
								case 'SubsetExport':
									var _p33 = _p18._0;
									return A2(
										_wende$elchemy$Helpers_ops['=>'],
										A3(
											_wende$elchemy$ExContext$mergeTypes,
											_p18._2._0,
											_wende$elchemy$Helpers$modulePathName(_p33),
											c),
										A2(
											_elm_lang$core$Basics_ops['++'],
											_wende$elchemy$Helpers$ind(c.indent),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'import ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_wende$elchemy$Helpers$modulePath(_p33),
													A2(
														_elm_lang$core$Basics_ops['++'],
														', only: [',
														A2(
															_elm_lang$core$Basics_ops['++'],
															A2(
																_elm_lang$core$String$join,
																',',
																A3(
																	_elm_lang$core$List$foldr,
																	F2(
																		function (x, y) {
																			return A2(_elm_lang$core$Basics_ops['++'], x, y);
																		}),
																	{ctor: '[]'},
																	A2(_elm_lang$core$List$map, _wende$elchemy$ExStatement$subsetExport, _p18._2._0._0))),
															']'))))));
								case 'AllExport':
									if (((_p18._0.ctor === '::') && (_p18._0._0 === 'Elchemy')) && (_p18._0._1.ctor === '[]')) {
										return {ctor: '_Tuple2', _0: c, _1: ''};
									} else {
										var _p34 = _p18._0;
										return A2(
											_wende$elchemy$Helpers_ops['=>'],
											A3(
												_wende$elchemy$ExContext$mergeTypes,
												_Bogdanp$elm_ast$Ast_Statement$AllExport,
												_wende$elchemy$Helpers$modulePathName(_p34),
												c),
											A2(
												_elm_lang$core$Basics_ops['++'],
												_wende$elchemy$Helpers$ind(c.indent),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'import ',
													_wende$elchemy$Helpers$modulePath(_p34))));
									}
								default:
									break _v9_12;
							}
						}
					}
				default:
					break _v9_12;
			}
		} while(false);
		return A2(
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			c,
			A2(_wende$elchemy$Helpers$notImplemented, 'statement', _p18));
	});

var _wende$elchemy$Compiler$crunchSplitLines = A3(
	_elm_lang$core$Regex$replace,
	_elm_lang$core$Regex$All,
	_elm_lang$core$Regex$regex('(?:({-(?:\\n|.)*?-})|([\\w\\])}\"][\\t ]*)\\n[\\t ]+((?!.*\\s->\\s)(?!.*=)(?!.*\\bin\\b)[\\w[({\"]))'),
	function (m) {
		return A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filterMap,
				_elm_lang$core$Basics$identity,
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Maybe$map(
						A2(
							_elm_lang$core$Basics$flip,
							F2(
								function (x, y) {
									return A2(_elm_lang$core$Basics_ops['++'], x, y);
								}),
							' ')),
					m.submatches)));
	});
var _wende$elchemy$Compiler$removeComments = function (_p0) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('\n +\\w+ : .*'),
		_elm_lang$core$Basics$always(''),
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s--.*\n'),
			_elm_lang$core$Basics$always(''),
			_p0));
};
var _wende$elchemy$Compiler$prepare = function (codebase) {
	return _wende$elchemy$Compiler$removeComments(codebase);
};
var _wende$elchemy$Compiler$parse = F2(
	function (fileName, m) {
		var _p1 = _Bogdanp$elm_ast$Ast$parse(
			_wende$elchemy$Compiler$prepare(m));
		_v0_2:
		do {
			if (_p1.ctor === 'Ok') {
				if (_p1._0.ctor === '_Tuple3') {
					return _p1._0._2;
				} else {
					break _v0_2;
				}
			} else {
				if ((((_p1._0.ctor === '_Tuple3') && (_p1._0._0.ctor === '_Tuple0')) && (_p1._0._2.ctor === '::')) && (_p1._0._2._1.ctor === '[]')) {
					return _elm_lang$core$Native_Utils.crashCase(
						'Compiler',
						{
							start: {line: 201, column: 5},
							end: {line: 218, column: 39}
						},
						_p1)(
						A2(
							_elm_lang$core$Basics_ops['++'],
							']ERR> Compilation error in:\n ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								fileName,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\nat:\n ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(
											_elm_lang$core$String$join,
											'\n',
											A2(
												_elm_lang$core$List$take,
												30,
												_elm_lang$core$String$lines(_p1._0._1.input))),
										'\n')))));
				} else {
					break _v0_2;
				}
			}
		} while(false);
		return _elm_lang$core$Native_Utils.crashCase(
			'Compiler',
			{
				start: {line: 201, column: 5},
				end: {line: 218, column: 39}
			},
			_p1)(
			_elm_lang$core$Basics$toString(_p1));
	});
var _wende$elchemy$Compiler$aggregateStatements = F2(
	function (s, _p4) {
		var _p5 = _p4;
		var _p6 = A2(_wende$elchemy$ExStatement$elixirS, _p5._0, s);
		var newC = _p6._0;
		var newCode = _p6._1;
		return {
			ctor: '_Tuple2',
			_0: newC,
			_1: A2(_elm_lang$core$Basics_ops['++'], _p5._1, newCode)
		};
	});
var _wende$elchemy$Compiler$getContext = function (statements) {
	var _p7 = statements;
	if (_p7.ctor === '[]') {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Nothing,
			_1: {ctor: '[]'}
		};
	} else {
		var _p8 = _p7._1;
		var base = _wende$elchemy$ExStatement$moduleStatement(_p7._0);
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Just(
				A2(_wende$elchemy$ExAlias$getAliases, base, _p8)),
			_1: _p8
		};
	}
};
var _wende$elchemy$Compiler$typeAliasDuplicate = F3(
	function (k, v, v2) {
		return (!_elm_lang$core$Native_Utils.eq(v, v2)) ? _elm_lang$core$Native_Utils.crash(
			'Compiler',
			{
				start: {line: 153, column: 9},
				end: {line: 153, column: 20}
			})(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'You can\'t have two different type aliases for ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(k),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\nThese are: ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(v),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'\nand\n',
								_elm_lang$core$Basics$toString(v2))))))) : A2(_elm_lang$core$Dict$insert, k, v);
	});
var _wende$elchemy$Compiler$getCommonImports = function (a) {
	var merge = F2(
		function (aliases, acc) {
			return A6(_elm_lang$core$Dict$merge, _elm_lang$core$Dict$insert, _wende$elchemy$Compiler$typeAliasDuplicate, _elm_lang$core$Dict$insert, acc, aliases, _elm_lang$core$Dict$empty);
		});
	return A3(_elm_lang$core$List$foldl, merge, _elm_lang$core$Dict$empty, a);
};
var _wende$elchemy$Compiler$getName = function (file) {
	var _p9 = A2(_elm_lang$core$String$split, '\n', file);
	if (_p9.ctor === '::') {
		return {
			ctor: '_Tuple2',
			_0: _p9._0,
			_1: A2(_elm_lang$core$String$join, '\n', _p9._1)
		};
	} else {
		return {ctor: '_Tuple2', _0: '', _1: ''};
	}
};
var _wende$elchemy$Compiler$glueEnd = A2(
	_elm_lang$core$Basics_ops['++'],
	'\n',
	A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$String$trim('\n         end\n\n         '),
		'\n'));
var _wende$elchemy$Compiler$glueStart = A2(
	_elm_lang$core$Basics_ops['++'],
	_wende$elchemy$Helpers$ind(0),
	A2(_elm_lang$core$Basics_ops['++'], 'use Elchemy', '\n'));
var _wende$elchemy$Compiler$version = '0.4.34';
var _wende$elchemy$Compiler$getCode = F2(
	function (context, statements) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$Basics_ops['++'], '# Compiled using Elchemy v', _wende$elchemy$Compiler$version),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\n',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$Basics_ops['++'],
						'defmodule ',
						A2(_elm_lang$core$Basics_ops['++'], context.mod, ' do')),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_wende$elchemy$Compiler$glueStart,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Tuple$second(
								A3(
									_elm_lang$core$List$foldl,
									_wende$elchemy$Compiler$aggregateStatements,
									{ctor: '_Tuple2', _0: context, _1: ''},
									statements)),
							_wende$elchemy$Compiler$glueEnd)))));
	});
var _wende$elchemy$Compiler$tree = function (m) {
	var _p10 = A2(
		_elm_lang$core$String$split,
		A2(_elm_lang$core$Basics_ops['++'], '>>', '>>'),
		m);
	if ((_p10.ctor === '::') && (_p10._1.ctor === '[]')) {
		return function (_p11) {
			var _p12 = _p11;
			var _p13 = _p12._0;
			if (_p13.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Compiler',
					{
						start: {line: 63, column: 25},
						end: {line: 68, column: 44}
					},
					_p13)('Failed getting context');
			} else {
				return A2(_wende$elchemy$Compiler$getCode, _p13._0, _p12._1);
			}
		}(
			_wende$elchemy$Compiler$getContext(
				A2(_wende$elchemy$Compiler$parse, 'NoName.elm', _p10._0)));
	} else {
		var _p32 = _p10;
		var count = A2(
			_elm_lang$core$Debug$log,
			'Number of files',
			_elm_lang$core$List$length(_p32));
		var files = A2(
			_elm_lang$core$List$map,
			function (_p15) {
				var _p16 = _p15;
				var _p18 = _p16._1._0;
				var _p17 = A3(
					_elm_lang$core$Basics$flip,
					_elm_lang$core$Debug$log,
					_p18,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Parsing ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(count - _p16._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'/',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(count),
									' # ')))));
				return {
					ctor: '_Tuple2',
					_0: _p18,
					_1: A2(_wende$elchemy$Compiler$parse, _p18, _p16._1._1)
				};
			},
			A2(
				_elm_lang$core$List$indexedMap,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				A2(_elm_lang$core$List$map, _wende$elchemy$Compiler$getName, _p32)));
		var wContexts = A2(
			_elm_lang$core$List$filterMap,
			function (a) {
				var _p19 = a;
				if (_p19._1._0.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple3', _0: _p19._0, _1: _p19._1._0._0, _2: _p19._1._1});
				}
			},
			A2(
				_elm_lang$core$List$map,
				function (_p20) {
					var _p21 = _p20;
					return {
						ctor: '_Tuple2',
						_0: _p21._0,
						_1: _wende$elchemy$Compiler$getContext(_p21._1)
					};
				},
				files));
		var commonAliases = _wende$elchemy$Compiler$getCommonImports(
			A2(
				_elm_lang$core$List$map,
				function (_p22) {
					var _p23 = _p22;
					return _p23._1.aliases;
				},
				wContexts));
		var commonTypes = _wende$elchemy$Compiler$getCommonImports(
			A2(
				_elm_lang$core$List$map,
				function (_p24) {
					var _p25 = _p24;
					return _p25._1.types;
				},
				wContexts));
		var updateWithCommon = function (_p26) {
			var _p27 = _p26;
			return {
				ctor: '_Tuple3',
				_0: _p27._0,
				_1: _elm_lang$core$Native_Utils.update(
					_p27._1,
					{aliases: commonAliases, types: commonTypes}),
				_2: _p27._2
			};
		};
		var wTrueContexts = A2(_elm_lang$core$List$map, updateWithCommon, wContexts);
		var compileWithIndex = function (_p28) {
			var _p29 = _p28;
			var _p31 = _p29._1._0;
			var _p30 = A3(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$Debug$log,
				_p31,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Compiling ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(count - _p29._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'/',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(count),
								' # ')))));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'>>',
				A2(
					_elm_lang$core$Basics_ops['++'],
					'>>',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p31,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'\n',
							A2(_wende$elchemy$Compiler$getCode, _p29._1._1, _p29._1._2)))));
		};
		return A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				compileWithIndex,
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					wTrueContexts)));
	}
};

var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{ctor: '[]'});
};
var _user$project$Main$updateStateContent = F2(
	function (_p0, str) {
		var _p1 = _p0;
		var updateState = function (state) {
			return _elm_lang$core$Native_Utils.update(
				state,
				{
					code: {
						ctor: '_Tuple2',
						_0: str,
						_1: _wende$elchemy$Compiler$tree(str)
					}
				});
		};
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A3(_elm_community$list_extra$List_Extra$updateAt, _p1.position, updateState, _p1.states));
	});
var _user$project$Main$updateStateScroll = F3(
	function (_p2, pane, scroll) {
		var _p3 = _p2;
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A3(
				_elm_community$list_extra$List_Extra$updateAt,
				_p3.position,
				function (a) {
					return _elm_lang$core$Native_Utils.update(
						a,
						{scroll: scroll});
				},
				_p3.states));
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p4 = msg;
		switch (_p4.ctor) {
			case 'OnScroll':
				var states = A3(_user$project$Main$updateStateScroll, model, _p4._0, _p4._1);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{states: states}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'OnInput':
				var states = A2(_user$project$Main$updateStateContent, model, _p4._0);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{states: states}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'PrevState':
				var position = (_elm_lang$core$Native_Utils.cmp(model.position, 0) > 0) ? (model.position - 1) : model.position;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{position: position}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				var position = (_elm_lang$core$Native_Utils.cmp(
					model.position,
					_elm_lang$core$List$length(model.states) - 1) < 0) ? (model.position + 1) : model.position;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{position: position}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});
var _user$project$Main$defaultScroll = A2(_user$project$Codepress$Scroll, 0, 0);
var _user$project$Main_ops = _user$project$Main_ops || {};
_user$project$Main_ops['>>'] = F2(
	function (a, b) {
		return {ctor: '_Tuple2', _0: a, _1: b};
	});
var _user$project$Main$left = 'module FizzBuzz exposing (fizzbuzz)\n\n\nfizzbuzz : Int -> Int -> String\nfizzbuzz from to =\n  let\n    fizzBuzz n =\n        case (n % 3, n % 5) of\n            (0, 0) -> \"FizzBuzz\"\n            (0, _) -> \"Fizz\"\n            (_, 0) -> \"Buzz\"\n            _      -> toString n\n  in List.range from to |> map (fizzBuzz >> toString) |> joinWords\n\n\njoinWords : List String -> String\njoinWords a = String.join \" \" a';
var _user$project$Main$states = {
	ctor: '::',
	_0: A4(
		_user$project$Codepress$State,
		{
			ctor: '::',
			_0: A2(
				_user$project$Main_ops['>>'],
				_user$project$Codepress$Left,
				{ctor: '_Tuple2', _0: 0, _1: 0}),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Main_ops['>>'],
					_user$project$Codepress$Right,
					{ctor: '_Tuple2', _0: 1, _1: 1}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '_Tuple2',
			_0: _user$project$Main$left,
			_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
		},
		_user$project$Main$defaultScroll,
		''),
	_1: {
		ctor: '::',
		_0: A4(
			_user$project$Codepress$State,
			{
				ctor: '::',
				_0: A2(
					_user$project$Main_ops['>>'],
					_user$project$Codepress$Left,
					{ctor: '_Tuple2', _0: 0, _1: 0}),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Main_ops['>>'],
						_user$project$Codepress$Right,
						{ctor: '_Tuple2', _0: 1, _1: 1}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '_Tuple2',
				_0: _user$project$Main$left,
				_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
			},
			_user$project$Main$defaultScroll,
			'Fancy module transpilation'),
		_1: {
			ctor: '::',
			_0: A4(
				_user$project$Codepress$State,
				{
					ctor: '::',
					_0: A2(
						_user$project$Main_ops['>>'],
						_user$project$Codepress$Left,
						{ctor: '_Tuple2', _0: 3, _1: 3}),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$Main_ops['>>'],
							_user$project$Codepress$Right,
							{ctor: '_Tuple2', _0: 4, _1: 4}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '_Tuple2',
					_0: _user$project$Main$left,
					_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
				},
				_user$project$Main$defaultScroll,
				'As you can see, there is awesome `Elchemy` -> `Elixir` type transpilation'),
			_1: {
				ctor: '::',
				_0: A4(
					_user$project$Codepress$State,
					{
						ctor: '::',
						_0: A2(
							_user$project$Main_ops['>>'],
							_user$project$Codepress$Left,
							{ctor: '_Tuple2', _0: 4, _1: 4}),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$Main_ops['>>'],
								_user$project$Codepress$Right,
								{ctor: '_Tuple2', _0: 5, _1: 6}),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '_Tuple2',
						_0: _user$project$Main$left,
						_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
					},
					_user$project$Main$defaultScroll,
					'Every outputed function is curried thanks to curry macro'),
				_1: {
					ctor: '::',
					_0: A4(
						_user$project$Codepress$State,
						{
							ctor: '::',
							_0: A2(
								_user$project$Main_ops['>>'],
								_user$project$Codepress$Left,
								{ctor: '_Tuple2', _0: 5, _1: 12}),
							_1: {
								ctor: '::',
								_0: A2(
									_user$project$Main_ops['>>'],
									_user$project$Codepress$Right,
									{ctor: '_Tuple2', _0: 7, _1: 20}),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '_Tuple2',
							_0: _user$project$Main$left,
							_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
						},
						_user$project$Main$defaultScroll,
						''),
					_1: {
						ctor: '::',
						_0: A4(
							_user$project$Codepress$State,
							{
								ctor: '::',
								_0: A2(
									_user$project$Main_ops['>>'],
									_user$project$Codepress$Left,
									{ctor: '_Tuple2', _0: 15, _1: 15}),
								_1: {
									ctor: '::',
									_0: A2(
										_user$project$Main_ops['>>'],
										_user$project$Codepress$Right,
										{ctor: '_Tuple2', _0: 7, _1: 20}),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '_Tuple2',
								_0: _user$project$Main$left,
								_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
							},
							_user$project$Main$defaultScroll,
							''),
						_1: {
							ctor: '::',
							_0: A4(
								_user$project$Codepress$State,
								{
									ctor: '::',
									_0: A2(
										_user$project$Main_ops['>>'],
										_user$project$Codepress$Left,
										{ctor: '_Tuple2', _0: 16, _1: 16}),
									_1: {
										ctor: '::',
										_0: A2(
											_user$project$Main_ops['>>'],
											_user$project$Codepress$Left,
											{ctor: '_Tuple2', _0: 23, _1: 26}),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '_Tuple2',
									_0: _user$project$Main$left,
									_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
								},
								_user$project$Main$defaultScroll,
								'### Do you know that:\n* I\'m markdown note\n* `with code`\n* [links](http://google.com)\n\n```elixir\n# and code snippets\ndef add(a, b), do: a + b\n```\n```elm\nadd : Int -> Int -> Int\nadd =\n    (+)\n```'),
							_1: {
								ctor: '::',
								_0: A4(
									_user$project$Codepress$State,
									{
										ctor: '::',
										_0: A2(
											_user$project$Main_ops['>>'],
											_user$project$Codepress$Left,
											{ctor: '_Tuple2', _0: 3, _1: 12}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '_Tuple2',
										_0: _user$project$Main$left,
										_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
									},
									_user$project$Main$defaultScroll,
									'And you can create single pane highlights'),
								_1: {
									ctor: '::',
									_0: A4(
										_user$project$Codepress$State,
										{
											ctor: '::',
											_0: A2(
												_user$project$Main_ops['>>'],
												_user$project$Codepress$Left,
												{ctor: '_Tuple2', _0: 3, _1: 12}),
											_1: {ctor: '[]'}
										},
										{
											ctor: '_Tuple2',
											_0: _user$project$Main$left,
											_1: _wende$elchemy$Compiler$tree(_user$project$Main$left)
										},
										_user$project$Main$defaultScroll,
										'left'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _user$project$Main$Model = F2(
	function (a, b) {
		return {position: a, states: b};
	});
var _user$project$Main$init = {
	ctor: '_Tuple2',
	_0: A2(_user$project$Main$Model, 0, _user$project$Main$states),
	_1: _elm_lang$core$Platform_Cmd$none
};
var _user$project$Main$OnInput = function (a) {
	return {ctor: 'OnInput', _0: a};
};
var _user$project$Main$OnScroll = F2(
	function (a, b) {
		return {ctor: 'OnScroll', _0: a, _1: b};
	});
var _user$project$Main$options = function (_p5) {
	var _p6 = _p5;
	return {position: _p6.position, states: _p6.states, onScroll: _user$project$Main$OnScroll, onInput: _user$project$Main$OnInput};
};
var _user$project$Main$NextState = {ctor: 'NextState'};
var _user$project$Main$PrevState = {ctor: 'PrevState'};
var _user$project$Main$viewNavigation = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('navigation'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$Main$PrevState),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('previous'),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$button,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(_user$project$Main$NextState),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('next'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		}
	});
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('app'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Main$viewNavigation,
			_1: {
				ctor: '::',
				_0: function (_p7) {
					return _user$project$Codepress$toHtml(
						_user$project$Main$options(_p7));
				}(model),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Main$main = _elm_lang$html$Html$program(
	{init: _user$project$Main$init, update: _user$project$Main$update, view: _user$project$Main$view, subscriptions: _user$project$Main$subscriptions})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', {"types":{"unions":{"Main.Msg":{"args":[],"tags":{"OnScroll":["Codepress.Pane","Codepress.Scroll"],"OnInput":["String"],"NextState":[],"PrevState":[]}},"Codepress.Pane":{"args":[],"tags":{"Left":[],"Right":[]}}},"aliases":{"Codepress.Scroll":{"args":[],"type":"{ top : Int, left : Int }"}},"message":"Main.Msg"},"versions":{"elm":"0.18.0"}});
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

