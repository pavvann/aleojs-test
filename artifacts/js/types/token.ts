import { z } from "zod";
import { 
  leoAddressSchema,
  leoPrivateKeySchema,
  leoViewKeySchema,
  leoTxIdSchema,
  leoScalarSchema,
  leoFieldSchema,
  leoBooleanSchema,
  leoU8Schema,
  leoU16Schema,
  leoU32Schema,
  leoU64Schema,
  leoU128Schema,
  leoGroupSchema,
  leoRecordSchema,
  leoTxSchema,
} from "./leo-types";

export interface token {
  owner: string; 
  amount: BigInt; 
}

export const leoTokenSchema = z.object({
  owner: leoAddressSchema, 
  amount: leoU64Schema, 
});
export type tokenLeo = z.infer<typeof leoTokenSchema>;

