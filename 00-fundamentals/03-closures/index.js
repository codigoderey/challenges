// What will be the output of this code related to closures?
function decrementCount(initialValue) {
	let count = initialValue;

	return {
		decrememt() {
			if (count > -0) {
				count--;
				return count;
			} else {
				return (count = 0);
			}
		},
		getValue() {
			return count;
		}
	};
}

module.exports = decrementCount;
