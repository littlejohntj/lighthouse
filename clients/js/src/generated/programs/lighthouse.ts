/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { getU8Encoder } from '@solana/codecs-numbers';
import { Program, ProgramWithErrors } from '@solana/programs';
import {
  LighthouseProgramError,
  LighthouseProgramErrorCode,
  getLighthouseProgramErrorFromCode,
} from '../errors';
import { memcmp } from '../shared';

export const LIGHTHOUSE_PROGRAM_ADDRESS =
  'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'>;

export type LighthouseProgram =
  Program<'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'> &
    ProgramWithErrors<LighthouseProgramErrorCode, LighthouseProgramError>;

export function getLighthouseProgram(): LighthouseProgram {
  return {
    name: 'lighthouse',
    address: LIGHTHOUSE_PROGRAM_ADDRESS,
    getErrorFromCode(code: LighthouseProgramErrorCode, cause?: Error) {
      return getLighthouseProgramErrorFromCode(code, cause);
    },
  };
}

export enum LighthouseInstruction {
  MemoryWrite,
  MemoryClose,
  AssertAccountData,
  AssertAccountDelta,
  AssertAccountInfo,
  AssertAccountInfoMulti,
  AssertMintAccount,
  AssertMintAccountMulti,
  AssertTokenAccount,
  AssertTokenAccountMulti,
  AssertStakeAccount,
  AssertStakeAccountMulti,
  AssertUpgradeableLoaderAccount,
  AssertUpgradeableLoaderAccountMulti,
  AssertSysvarClock,
  AssertMerkleTreeAccount,
}

export function identifyLighthouseInstruction(
  instruction: { data: Uint8Array } | Uint8Array
): LighthouseInstruction {
  const data =
    instruction instanceof Uint8Array ? instruction : instruction.data;
  if (memcmp(data, getU8Encoder().encode(0), 0)) {
    return LighthouseInstruction.MemoryWrite;
  }
  if (memcmp(data, getU8Encoder().encode(1), 0)) {
    return LighthouseInstruction.MemoryClose;
  }
  if (memcmp(data, getU8Encoder().encode(2), 0)) {
    return LighthouseInstruction.AssertAccountData;
  }
  if (memcmp(data, getU8Encoder().encode(3), 0)) {
    return LighthouseInstruction.AssertAccountDelta;
  }
  if (memcmp(data, getU8Encoder().encode(4), 0)) {
    return LighthouseInstruction.AssertAccountInfo;
  }
  if (memcmp(data, getU8Encoder().encode(5), 0)) {
    return LighthouseInstruction.AssertAccountInfoMulti;
  }
  if (memcmp(data, getU8Encoder().encode(6), 0)) {
    return LighthouseInstruction.AssertMintAccount;
  }
  if (memcmp(data, getU8Encoder().encode(7), 0)) {
    return LighthouseInstruction.AssertMintAccountMulti;
  }
  if (memcmp(data, getU8Encoder().encode(8), 0)) {
    return LighthouseInstruction.AssertTokenAccount;
  }
  if (memcmp(data, getU8Encoder().encode(9), 0)) {
    return LighthouseInstruction.AssertTokenAccountMulti;
  }
  if (memcmp(data, getU8Encoder().encode(10), 0)) {
    return LighthouseInstruction.AssertStakeAccount;
  }
  if (memcmp(data, getU8Encoder().encode(11), 0)) {
    return LighthouseInstruction.AssertStakeAccountMulti;
  }
  if (memcmp(data, getU8Encoder().encode(12), 0)) {
    return LighthouseInstruction.AssertUpgradeableLoaderAccount;
  }
  if (memcmp(data, getU8Encoder().encode(13), 0)) {
    return LighthouseInstruction.AssertUpgradeableLoaderAccountMulti;
  }
  if (memcmp(data, getU8Encoder().encode(14), 0)) {
    return LighthouseInstruction.AssertSysvarClock;
  }
  if (memcmp(data, getU8Encoder().encode(15), 0)) {
    return LighthouseInstruction.AssertMerkleTreeAccount;
  }
  throw new Error(
    'The provided instruction could not be identified as a lighthouse instruction.'
  );
}
