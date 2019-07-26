//Modulo de nodejs

const math = {};

function add(x1, x2) {

    return x1 + x2;

}

function sub(x1, x2) {

    return x1 - x2;

}

function div(x1, x2) {

    if (x2 == 0) {
        return null;
    }
    else {
        return x1 / x2;
    }

}

function mul(x1, x2) {

    return x1 * x2;

}

//exportar
math.add = add;
math.sub = sub;
math.mul = mul;
math.div = div;

module.exports = math;