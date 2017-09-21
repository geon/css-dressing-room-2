
export function set<T extends Object, S extends keyof T> (state: T, propertyName: S, value: T[S]): T {

	return Object.assign(
		{},
		state,
		{
			[propertyName ]: value
		}
	);
}

export function add<T> (array: Array<T>, element: T) {

	return [...array, element];
}

export function remove<T> (array: Array<T>, element: T) {

	return array.filter(x => x != element);
}

export function replace<T> (array: Array<T>, element: T, newElement: T) {

	const index = array.indexOf(element);
	if (index == -1) {
		return array;
	}

	const newArray = array.slice();
	newArray.splice(index, 1, newElement);
	return newArray;
}
