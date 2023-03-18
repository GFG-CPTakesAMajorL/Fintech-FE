import axios from "axios";
import { URL_PREFIX } from "../../constants";

class PostgresResource {
    constructor() {
        if (process.env.NODE_ENV === "production") {
            this.host = URL_PREFIX;
        } else {
            this.host = "http://localhost:3000";
        }
        this.mock = process.env.NODE_ENV !== "production";
    }

    process(token, filename, bankname, height, width, isRotationRequired) {
        const body = {
            filename,
            bankname,
            height,
            width,
            isRotationRequired
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "data": [
                            [
                                {
                                    "bankname": "Julius Baer Singapore",
                                    "Portfolio Number": "SG06446368 - 01",
                                    "Portfolio Name": "Halifax Consulting Ltd",
                                    "Account No.": "SG06446368 - 01 - USD01 Designation USD CURRENT ACCOUNT",
                                    "Currency": "USD",
                                    "Telephone": "+65 6827 8345",
                                    "Initial Balance": "903, 275.69",
                                    "Final Balance": "900, 378.52"
                                }
                            ],
                            [
                                {
                                    "Booking Date ": "01.01.2022 ",
                                    "Txn Date ": "NULL",
                                    "Booking Text ": "Initial Balance ",
                                    "Value Date ": "NULL",
                                    "Debit ": "NULL",
                                    "Credit ": "NULL",
                                    "Balance ": "903, 275.69 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "03.01.2022 ",
                                    "Txn Date ": "03.01.2022 ",
                                    "Booking Text ": "CUSTODY FEE ",
                                    "Value Date ": "21.01.2022 ",
                                    "Debit ": "879.87 ",
                                    "Credit ": "NULL",
                                    "Balance ": "902, 395.82 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "03.01.2022 ",
                                    "Txn Date ": "31.12.2021 ",
                                    "Booking Text ": "DIVIDEND PAYMENT SHARES Security No: 748628 I BANK OF AMERICA RG I Quantity: 728.00 ",
                                    "Value Date ": "31.12.2021 ",
                                    "Debit ": "NULL",
                                    "Credit ": 152.88,
                                    "Balance ": "902, 548.70 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "03.01.2022 ",
                                    "Txn Date ": "31.12.2021 ",
                                    "Booking Text ": "DIVIDEND PAYMENT SHARES Security No: 748628 I BANK OF AMERICA RG I Quantity: 728.00 ",
                                    "Value Date ": "31.12.2021 ",
                                    "Debit ": "45.86 ",
                                    "Credit ": "NULL",
                                    "Balance ": "902, 502.84 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "13.01.2022 ",
                                    "Txn Date ": "13.01.2022 ",
                                    "Booking Text ": "PAYMENT Beneficiary: 0489069244 SAIML PTE LIMITED I Orderer: HALIFAX CONSULTING LTD ADD.TORTOLA PIER PARK, BUILDING 1, SECOND FLOO R, WICKHAMS CAY 1, ROAD TOWN, TOR TOLA VIRGIN ISLANDS(BRITISH) I Exchange Rate: USD / USD ",
                                    "Value Date ": "13.01.2022 ",
                                    "Debit ": "47.72 ",
                                    "Credit ": "NULL",
                                    "Balance ": "902, 455.12 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "13.01.2022 ",
                                    "Txn Date ": "13.01.2022 ",
                                    "Booking Text ": "PAYMENT Beneficiary: 0489069244 SAIML PTE LIMITED I Orderer: HALIFAX CONSULTING LTD ADD.TORTOLA PIER PARK, BUILDING 1. SECOND FLOO R, WICKHAMS CAY 1. ROAD TOWN, TOR TOLA VIRGIN ISLANDS(BRITISH) I Exchange Rate: USD / USD ",
                                    "Value Date ": "13.01.2022 ",
                                    "Debit ": "2, 169.00 ",
                                    "Credit ": "NULL",
                                    "Balance ": "900, 286.12 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "17.01.2022 ",
                                    "Txn Date ": "14.01.2022 ",
                                    "Booking Text ": "DIVIDEND PAYMENT INVESTMENT FUNDS Security No: 22816036 I JUP DYNAMIC LMHD I Quantity: 2, 800.00 ",
                                    "Value Date ": "14.01.2022 ",
                                    "Debit ": "NULL",
                                    "Credit ": 92.4,
                                    "Balance ": "900, 378.52 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "NULL",
                                    "Txn Date ": "NULL",
                                    "Booking Text ": "Account Balance as on 31.01.2022 ",
                                    "Value Date ": "NULL",
                                    "Debit ": "NULL",
                                    "Credit ": "NULL",
                                    "Balance ": "900, 378.52 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "NULL",
                                    "Txn Date ": "NULL",
                                    "Booking Text ": "Available Balance as on 31.01.2022 ",
                                    "Value Date ": "NULL",
                                    "Debit ": "NULL",
                                    "Credit ": "NULL",
                                    "Balance ": "900, 378.52 ",
                                    "Unnamed: 7": "NULL"
                                }
                            ],
                            [
                                {
                                    "Booking Date ": "01.01.2022 ",
                                    "Txn Date ": "NULL",
                                    "Booking Text ": "Initial Balance ",
                                    "Value Date ": "NULL",
                                    "Debit ": "NULL",
                                    "Credit ": "NULL",
                                    "Balance ": "903, 275.69 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "03.01.2022 ",
                                    "Txn Date ": "03.01.2022 ",
                                    "Booking Text ": "CUSTODY FEE ",
                                    "Value Date ": "21.01.2022 ",
                                    "Debit ": "879.87 ",
                                    "Credit ": "NULL",
                                    "Balance ": "902, 395.82 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "03.01.2022 ",
                                    "Txn Date ": "31.12.2021 ",
                                    "Booking Text ": "DIVIDEND PAYMENT SHARES Security No: 748628 I BANK OF AMERICA RG I Quantity: 728.00 ",
                                    "Value Date ": "31.12.2021 ",
                                    "Debit ": "NULL",
                                    "Credit ": 152.88,
                                    "Balance ": "902, 548.70 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "03.01.2022 ",
                                    "Txn Date ": "31.12.2021 ",
                                    "Booking Text ": "DIVIDEND PAYMENT SHARES Security No: 748628 I BANK OF AMERICA RG I Quantity: 728.00 ",
                                    "Value Date ": "31.12.2021 ",
                                    "Debit ": "45.86 ",
                                    "Credit ": "NULL",
                                    "Balance ": "902, 502.84 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "13.01.2022 ",
                                    "Txn Date ": "13.01.2022 ",
                                    "Booking Text ": "PAYMENT Beneficiary: 0489069244 SAIML PTE LIMITED I Orderer: HALIFAX CONSULTING LTD ADD.TORTOLA PIER PARK, BUILDING 1, SECOND FLOO R, WICKHAMS CAY 1, ROAD TOWN, TOR TOLA VIRGIN ISLANDS(BRITISH) I Exchange Rate: USD / USD ",
                                    "Value Date ": "13.01.2022 ",
                                    "Debit ": "47.72 ",
                                    "Credit ": "NULL",
                                    "Balance ": "902, 455.12 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "13.01.2022 ",
                                    "Txn Date ": "13.01.2022 ",
                                    "Booking Text ": "PAYMENT Beneficiary: 0489069244 SAIML PTE LIMITED I Orderer: HALIFAX CONSULTING LTD ADD.TORTOLA PIER PARK, BUILDING 1. SECOND FLOO R, WICKHAMS CAY 1. ROAD TOWN, TOR TOLA VIRGIN ISLANDS(BRITISH) I Exchange Rate: USD / USD ",
                                    "Value Date ": "13.01.2022 ",
                                    "Debit ": "2, 169.00 ",
                                    "Credit ": "NULL",
                                    "Balance ": "900, 286.12 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "17.01.2022 ",
                                    "Txn Date ": "14.01.2022 ",
                                    "Booking Text ": "DIVIDEND PAYMENT INVESTMENT FUNDS Security No: 22816036 I JUP DYNAMIC LMHD I Quantity: 2, 800.00 ",
                                    "Value Date ": "14.01.2022 ",
                                    "Debit ": "NULL",
                                    "Credit ": 92.4,
                                    "Balance ": "900, 378.52 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "NULL",
                                    "Txn Date ": "NULL",
                                    "Booking Text ": "Account Balance as on 31.01.2022 ",
                                    "Value Date ": "NULL",
                                    "Debit ": "NULL",
                                    "Credit ": "NULL",
                                    "Balance ": "900, 378.52 ",
                                    "Unnamed: 7": "NULL"
                                },
                                {
                                    "Booking Date ": "NULL",
                                    "Txn Date ": "NULL",
                                    "Booking Text ": "Available Balance as on 31.01.2022 ",
                                    "Value Date ": "NULL",
                                    "Debit ": "NULL",
                                    "Credit ": "NULL",
                                    "Balance ": "900, 378.52 ",
                                    "Unnamed: 7": "NULL"
                                }
                            ]
                        ]
                    }
                });
            });
        }
        return axios.post(this.host + "/postgres/", body, config);
    }
}

export default PostgresResource;