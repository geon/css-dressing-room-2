export interface Dispatch<TActionUnionType> {
	(action: TActionUnionType): void
}
