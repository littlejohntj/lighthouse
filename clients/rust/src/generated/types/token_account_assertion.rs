//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::EquatableOperator;
use crate::generated::types::IntegerOperator;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum TokenAccountAssertion {
    Mint {
        #[cfg_attr(
            feature = "serde",
            serde(with = "serde_with::As::<serde_with::DisplayFromStr>")
        )]
        value: Pubkey,
        operator: EquatableOperator,
    },
    Owner {
        #[cfg_attr(
            feature = "serde",
            serde(with = "serde_with::As::<serde_with::DisplayFromStr>")
        )]
        value: Pubkey,
        operator: EquatableOperator,
    },
    Amount {
        value: u64,
        operator: IntegerOperator,
    },
    Delegate {
        value: Option<Pubkey>,
        operator: EquatableOperator,
    },
    State {
        value: u8,
        operator: IntegerOperator,
    },
    IsNative {
        value: Option<u64>,
        operator: EquatableOperator,
    },
    DelegatedAmount {
        value: u64,
        operator: IntegerOperator,
    },
    CloseAuthority {
        value: Option<Pubkey>,
        operator: EquatableOperator,
    },
    TokenAccountOwnerIsDerived,
}
