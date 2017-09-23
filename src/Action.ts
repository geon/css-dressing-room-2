
export interface Action <Ttype, Tpayload> {
	type: Ttype;
	payload: Tpayload;
}
