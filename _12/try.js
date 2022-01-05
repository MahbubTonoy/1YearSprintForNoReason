function numberSquares(n) {
	let total = 0;
	while(n > 0) {
		total += Math.pow(n,2);
  console.log(total);
		n--;
	}
	return total;
}
console.log(numberSquares(3));