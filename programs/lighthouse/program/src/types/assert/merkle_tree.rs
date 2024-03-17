use super::{Assert, LogLevel};
use crate::{error::LighthouseError, processor::AssertMerkleTreeAccountContext, utils::Result};
use anchor_lang::context::CpiContext;
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::msg;
use std::fmt::Debug;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub enum MerkleTreeAssertion {
    VerifyLeaf {
        leaf_index: u32,
        leaf_hash: [u8; 32],
    },
}

impl<'a, 'info> Assert<&AssertMerkleTreeAccountContext<'a, 'info>> for MerkleTreeAssertion {
    fn evaluate(
        &self,
        context: &AssertMerkleTreeAccountContext<'a, 'info>,
        _log_level: LogLevel,
    ) -> Result<()> {
        let accounts = spl_account_compression::cpi::accounts::VerifyLeaf {
            merkle_tree: context.merkle_tree.clone(),
        };

        match self {
            &MerkleTreeAssertion::VerifyLeaf {
                leaf_index,
                leaf_hash,
            } => {
                let cpi_context =
                    CpiContext::new(context.spl_account_compression.info.clone(), accounts)
                        .with_remaining_accounts(context.proof_path.to_vec());

                spl_account_compression::cpi::verify_leaf(
                    cpi_context,
                    context.root.key.to_bytes(),
                    leaf_hash,
                    leaf_index,
                )
                .map_err(|e| {
                    msg!("Failed to verify leaf: {:?}", e);
                    LighthouseError::AssertionFailed
                })?;

                Ok(())
            }
        }
    }
}
