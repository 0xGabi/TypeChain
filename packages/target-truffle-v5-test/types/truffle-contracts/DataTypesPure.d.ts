/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DataTypesPureContract
  extends Truffle.Contract<DataTypesPureInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DataTypesPureInstance>;
}

type AllEvents = never;

export interface DataTypesPureInstance extends Truffle.ContractInstance {
  pure_uint8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  pure_uint256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  pure_int8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  pure_int256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  pure_bool(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  pure_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_bytes1(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_bytes(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_string(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pure_stat_array(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;

  pure_tuple(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

  pure_named(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

  pure_struct(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ uint256_0: BN; uint256_1: BN }>;

  pure_enum(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    pure_uint8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    pure_uint256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    pure_int8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    pure_int256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    pure_bool(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    pure_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

    pure_bytes1(txDetails?: Truffle.TransactionDetails): Promise<string>;

    pure_bytes(txDetails?: Truffle.TransactionDetails): Promise<string>;

    pure_string(txDetails?: Truffle.TransactionDetails): Promise<string>;

    pure_stat_array(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;

    pure_tuple(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

    pure_named(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

    pure_struct(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ uint256_0: BN; uint256_1: BN }>;

    pure_enum(txDetails?: Truffle.TransactionDetails): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
