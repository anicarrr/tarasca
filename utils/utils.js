export function getDateNow() {
	const dateObj = new Date();
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();

	return `${day}/${month}/${year}`;
}

export function thousandsSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}