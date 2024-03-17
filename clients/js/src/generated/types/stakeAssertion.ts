/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  GetDataEnumKind,
  GetDataEnumKindContent,
  combineCodec,
  getDataEnumDecoder,
  getDataEnumEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs';
import {
  EquatableOperator,
  EquatableOperatorArgs,
  IntegerOperator,
  IntegerOperatorArgs,
  getEquatableOperatorDecoder,
  getEquatableOperatorEncoder,
  getIntegerOperatorDecoder,
  getIntegerOperatorEncoder,
} from '.';

export type StakeAssertion =
  | {
      __kind: 'DelegationVoterPubkey';
      value: Address;
      operator: EquatableOperator;
    }
  | { __kind: 'DelegationStake'; value: bigint; operator: IntegerOperator }
  | {
      __kind: 'DelegationActivationEpoch';
      value: bigint;
      operator: IntegerOperator;
    }
  | {
      __kind: 'DelegationDeactivationEpoch';
      value: bigint;
      operator: IntegerOperator;
    }
  | { __kind: 'CreditsObserved'; value: bigint; operator: IntegerOperator };

export type StakeAssertionArgs =
  | {
      __kind: 'DelegationVoterPubkey';
      value: Address;
      operator: EquatableOperatorArgs;
    }
  | {
      __kind: 'DelegationStake';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | {
      __kind: 'DelegationActivationEpoch';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | {
      __kind: 'DelegationDeactivationEpoch';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | {
      __kind: 'CreditsObserved';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    };

export function getStakeAssertionEncoder(): Encoder<StakeAssertionArgs> {
  return getDataEnumEncoder([
    [
      'DelegationVoterPubkey',
      getStructEncoder([
        ['value', getAddressEncoder()],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    [
      'DelegationStake',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'DelegationActivationEpoch',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'DelegationDeactivationEpoch',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'CreditsObserved',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
  ]);
}

export function getStakeAssertionDecoder(): Decoder<StakeAssertion> {
  return getDataEnumDecoder([
    [
      'DelegationVoterPubkey',
      getStructDecoder([
        ['value', getAddressDecoder()],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    [
      'DelegationStake',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'DelegationActivationEpoch',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'DelegationDeactivationEpoch',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'CreditsObserved',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
  ]);
}

export function getStakeAssertionCodec(): Codec<
  StakeAssertionArgs,
  StakeAssertion
> {
  return combineCodec(getStakeAssertionEncoder(), getStakeAssertionDecoder());
}

// Data Enum Helpers.
export function stakeAssertion(
  kind: 'DelegationVoterPubkey',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'DelegationVoterPubkey'>
): GetDataEnumKind<StakeAssertionArgs, 'DelegationVoterPubkey'>;
export function stakeAssertion(
  kind: 'DelegationStake',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'DelegationStake'>
): GetDataEnumKind<StakeAssertionArgs, 'DelegationStake'>;
export function stakeAssertion(
  kind: 'DelegationActivationEpoch',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'DelegationActivationEpoch'>
): GetDataEnumKind<StakeAssertionArgs, 'DelegationActivationEpoch'>;
export function stakeAssertion(
  kind: 'DelegationDeactivationEpoch',
  data: GetDataEnumKindContent<
    StakeAssertionArgs,
    'DelegationDeactivationEpoch'
  >
): GetDataEnumKind<StakeAssertionArgs, 'DelegationDeactivationEpoch'>;
export function stakeAssertion(
  kind: 'CreditsObserved',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'CreditsObserved'>
): GetDataEnumKind<StakeAssertionArgs, 'CreditsObserved'>;
export function stakeAssertion<K extends StakeAssertionArgs['__kind']>(
  kind: K,
  data?: any
): Extract<StakeAssertionArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isStakeAssertion<K extends StakeAssertion['__kind']>(
  kind: K,
  value: StakeAssertion
): value is StakeAssertion & { __kind: K } {
  return value.__kind === kind;
}
