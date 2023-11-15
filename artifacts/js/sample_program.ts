import {

} from "./types";
import { u8, u16, u32, u128, u64, i8, i16, i32, i64, i128, field, scalar, group, boolean, address } from "./js2leo/common";
import {

} from './js2leo';

import { zkRun } from './utils'; 
const PRIVATE_KEY = 'APrivateKey1zkpDWg3pXyaXMc4ULM9XD2G6ydypGT1u77fy9hvyf5btMmm';
const VIEW_KEY = 'APrivateKey1zkpDWg3pXyaXMc4ULM9XD2G6ydypGT1u77fy9hvyf5btMmm';
const APP_NAME = 'sample_program';
const CONTRACT_PATH = 'artifacts/leo/sample_program';
const FEE = '0.01';

export async function main(r0: number, r1: number)  {
	const r0Leo = u32(r0);
	const r1Leo = u32(r1);

	const params = [r0Leo, r1Leo]
	await zkRun({
      /*privateKey: PRIVATE_KEY,
      viewKey: VIEW_KEY,
      appName: APP_NAME,*/
      contractPath: CONTRACT_PATH,
      transition: 'main',
      params,
      /*fee: FEE*/
    });
}

