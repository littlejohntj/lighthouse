use super::context::TestContext;
use crate::utils;
use lighthouse::error::ProgramError;
use solana_banks_interface::BanksTransactionResultWithMetadata;
use solana_program::instruction::InstructionError;
use solana_sdk::transaction::{Transaction, TransactionError};
use std::io::Error;

pub async fn process_transaction(
    context: &TestContext,
    tx: &Transaction,
) -> Result<BanksTransactionResultWithMetadata, Error> {
    let result: solana_banks_interface::BanksTransactionResultWithMetadata = context
        .client()
        .process_transaction_with_metadata(tx.clone())
        .await
        .unwrap();

    Ok(result)
}

pub async fn process_transaction_assert_success(
    context: &TestContext,
    tx: Result<Transaction, Box<utils::Error>>,
) {
    let tx = tx.expect("Should have been processed");

    let tx_metadata = process_transaction(context, &tx).await;

    if let Err(err) = tx_metadata {
        panic!("Transaction failed to process: {:?}", err);
    }

    let tx_metadata = tx_metadata.unwrap();

    if tx_metadata.result.is_err() {
        println!("Tx Result {:?}", tx_metadata.result.clone().err());
    }

    let logs = tx_metadata.metadata.unwrap().log_messages;
    for log in logs {
        println!("{:?}", log);
    }

    if tx_metadata.result.is_err() {
        panic!("Transaction failed");
    }
}

pub async fn process_transaction_assert_failure(
    context: &TestContext,
    tx: Result<Transaction, Box<utils::Error>>,
    expected_error_code: TransactionError,
    log_match_regex: Option<&[String]>,
) {
    let tx = tx.expect("Should have been processed");

    let tx_metadata = process_transaction(context, &tx).await.unwrap();

    let logs = tx_metadata.metadata.clone().unwrap().log_messages;
    for log in logs {
        println!("{:?}", log);
    }

    if tx_metadata.result.is_ok() {
        panic!("Transaction should have failed");
    }

    let err = tx_metadata.result.unwrap_err();

    if err != expected_error_code {
        panic!("Transaction failed with unexpected error code");
    }

    if let Some(log_regex) = log_match_regex {
        let regexes = log_regex
            .iter()
            .map(|s| regex::Regex::new(s).unwrap())
            .collect::<Vec<regex::Regex>>();

        let logs = tx_metadata.metadata.unwrap().log_messages;
        for log in &logs {
            println!("{:?}", log);
        }

        // find one log that matches each regex
        for regex in regexes {
            let mut found = false;
            for log in &logs {
                if regex.is_match(log) {
                    found = true;
                    break;
                }
            }

            if !found {
                panic!("Log not found: {}", regex);
            }
        }
    }
}

pub fn to_transaction_error(ix_index: u8, program_error: ProgramError) -> TransactionError {
    TransactionError::InstructionError(ix_index, InstructionError::Custom(program_error.into()))
}
