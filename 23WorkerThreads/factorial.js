module.exports = function factorinal(n){
    if (n == 0 || n == 1) return 1;
    else return factorinal(n -1) * n;
}