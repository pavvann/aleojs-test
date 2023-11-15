import {
	token,
} from "./types";
import { u8, u16, u32, u128, u64, i8, i16, i32, i64, i128, field, scalar, group, boolean, address } from "./js2leo/common";
import {
	gettokenLeo,
} from './js2leo';

import { zkRun } from './utils'; 
const PRIVATE_KEY = 'APrivateKey1zkpGTpuxddGhH27m15FRUAJyJrrpASQ46hLMnnJkUrv44E9';
const VIEW_KEY = 'APrivateKey1zkpGTpuxddGhH27m15FRUAJyJrrpASQ46hLMnnJkUrv44E9';
const APP_NAME = 'token';
const CONTRACT_PATH = 'artifacts/leo/token';
const FEE = '0.01';

export async function mint_private(r0: string, r1: BigInt)  {
	const r0Leo = address(r0);
	const r1Leo = u64(r1);

	const params = [r0Leo, r1Leo]
	await zkRun({
      /*privateKey: PRIVATE_KEY,
      viewKey: VIEW_KEY,
      appName: APP_NAME,*/
      contractPath: CONTRACT_PATH,
      transition: 'mint_private',
      params,
      /*fee: FEE*/
    });
}

export async function transfer_public(r0: string, r1: BigInt)  {
	const r0Leo = address(r0);
	const r1Leo = u64(r1);

	const params = [r0Leo, r1Leo]
	await zkRun({
      /*privateKey: PRIVATE_KEY,
      viewKey: VIEW_KEY,
      appName: APP_NAME,*/
      contractPath: CONTRACT_PATH,
      transition: 'transfer_public',
      params,
      /*fee: FEE*/
    });
}

export async function transfer_private(r0: token, r1: string, r2: BigInt)  {
	const r0Leo = JSON.stringify(gettokenLeo(r0));
	const r1Leo = address(r1);
	const r2Leo = u64(r2);

	const params = [r0Leo, r1Leo, r2Leo]
	await zkRun({
      /*privateKey: PRIVATE_KEY,
      viewKey: VIEW_KEY,
      appName: APP_NAME,*/
      contractPath: CONTRACT_PATH,
      transition: 'transfer_private',
      params,
      /*fee: FEE*/
    });
}

export async function transfer_private_to_public(r0: token, r1: string, r2: BigInt)  {
	const r0Leo = JSON.stringify(gettokenLeo(r0));
	const r1Leo = address(r1);
	const r2Leo = u64(r2);

	const params = [r0Leo, r1Leo, r2Leo]
	await zkRun({
      /*privateKey: PRIVATE_KEY,
      viewKey: VIEW_KEY,
      appName: APP_NAME,*/
      contractPath: CONTRACT_PATH,
      transition: 'transfer_private_to_public',
      params,
      /*fee: FEE*/
    });
}

export async function transfer_public_to_private(r0: string, r1: BigInt)  {
	const r0Leo = address(r0);
	const r1Leo = u64(r1);

	const params = [r0Leo, r1Leo]
	await zkRun({
      /*privateKey: PRIVATE_KEY,
      viewKey: VIEW_KEY,
      appName: APP_NAME,*/
      contractPath: CONTRACT_PATH,
      transition: 'transfer_public_to_private',
      params,
      /*fee: FEE*/
    });
}

