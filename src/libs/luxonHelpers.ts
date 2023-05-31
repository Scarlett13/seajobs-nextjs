import {DateTime} from "luxon";

export function calculateDiffDate(date:string){
	const now = DateTime.now();
	const dob = DateTime.fromISO(date);
	const diff = now.diff(dob,['years', 'months', 'days']).toObject();
	return diff;
}