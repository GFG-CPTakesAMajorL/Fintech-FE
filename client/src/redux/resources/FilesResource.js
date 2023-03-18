import axios from "axios";
import { URL_PREFIX } from "../../constants";

class FilesResource {
    constructor() {
        if (process.env.NODE_ENV === "production") {
            this.host = URL_PREFIX;
        } else {
            this.host = "http://localhost:3000";
        }
        this.mock = process.env.NODE_ENV !== "production";
    }

    loadBankNames() {
        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "banknames": [
                            "Julius Baer Singapore",
                            "Standard Chartered Singapore",
                            "LGT Bank(Singapore) Ltd",
                            "LGT SG"
                        ]
                    }
                })
            })
        }
        return axios.get(this.host + '/banknames/');
    }

    loadFiles(token) {
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
                            "position_statements/nvyqcnesiv/Vanguard9_21.pdf",
                            "termsheets/9_Juen_2020_2M_USD_BEN_HDBIBN_23cpn_888907743.pdf",
                            "termsheets/Accu_TS_Sample.pdf",
                            "termsheets/Accumulator__KODA_on_CAPL_07.08.2020.pdf",
                            "termsheets/Acuumulator_Term_sheet.pdf",
                            "termsheets/DXTRA2016100408_Equity_Option_-_New_Confirmation.pdf",
                            "termsheets/Performance_1.pdf",
                            "termsheets/Portfolio_1.pdf",
                            "termsheets/Sample_FCN__termsheet-CH0590644040-en.pdf",
                            "transaction_statements/9_Juen_2020_2M_USD_BEN_HDBIBN_23cpn_888907743.pdf",
                            "transaction_statements/Anchelle_DB_portfolio_n_transaction.pdf",
                            "transaction_statements/Anchelle_July_Page_14.pdf",
                            "transaction_statements/Andaman_BJB_CHF.pdf",
                            "transaction_statements/Andaman_BJB_EUR.pdf",
                            "transaction_statements/Andaman_BJB_GBP.pdf",
                            "transaction_statements/Andaman_BJB_HKD.pdf",
                            "transaction_statements/Andaman_BJB_JPY.pdf",
                            "transaction_statements/Andaman_BJB_SGD.pdf",
                            "transaction_statements/Andaman_BJB_USD.pdf",
                            "transaction_statements/Andaman_BJB_XAU.pdf",
                            "transaction_statements/Andaman_BJB_portfolio.pdf",
                            "transaction_statements/Andaman_Bendura_Portfolio.pdf",
                            "transaction_statements/Andaman_Bendura_Portfolio1.pdf",
                            "transaction_statements/Andaman_Bendura_transaction.pdf",
                            "transaction_statements/Andaman_Bendura_transaction_1.pdf",
                            "transaction_statements/Asheesh_LGT_EUR_transaction.pdf",
                            "transaction_statements/Asheesh_LGT_GBP_transaction.pdf",
                            "transaction_statements/Asheesh_LGT_HKD_transaction.pdf",
                            "transaction_statements/Asheesh_LGT_SGD_transaction.pdf",
                            "transaction_statements/Asheesh_LGT_USD_transaction.pdf",
                            "transaction_statements/Asheesh_LGT_portfolio.pdf",
                            "transaction_statements/Dapsang_BJB_Portfolio_n_transaction.pdf",
                            "transaction_statements/Dapsang_BJB_portfolio_n_transaction.pdf",
                            "transaction_statements/Dapsang_CAI_portfolio.pdf",
                            "transaction_statements/Dapsang_CAI_transaction.pdf",
                            "transaction_statements/Halifax_BJB_portfolio_n_transaction.pdf",
                            "transaction_statements/Hanoi_BJB_Transaction1.pdf",
                            "transaction_statements/Hanoi_BJB_Transaction2.pdf",
                            "transaction_statements/Hanoi_BJB_Transaction3.pdf",
                            "transaction_statements/Hanoi_BJB_Transaction4.pdf",
                            "transaction_statements/Hanoi_BJB_portfolio.pdf",
                            "transaction_statements/Hanoi_SC_portfolio_n_transaction.pdf",
                            "transaction_statements/Hanoi_UBP_portfolio.pdf",
                            "transaction_statements/Hanoi_UBP_transaction1.pdf",
                            "transaction_statements/Hanoi_UBP_transaction10.pdf",
                            "transaction_statements/Hanoi_UBP_transaction11.pdf",
                            "transaction_statements/Hanoi_UBP_transaction12.pdf",
                            "transaction_statements/Hanoi_UBP_transaction13.pdf",
                            "transaction_statements/Hanoi_UBP_transaction14.pdf",
                            "transaction_statements/Hanoi_UBP_transaction2.pdf",
                            "transaction_statements/Hanoi_UBP_transaction4.pdf",
                            "transaction_statements/Hanoi_UBP_transaction5.pdf",
                            "transaction_statements/Hanoi_UBP_transaction6.pdf",
                            "transaction_statements/Hanoi_UBP_transaction7.pdf",
                            "transaction_statements/Hanoi_UBP_transaction8.pdf",
                            "transaction_statements/Hanoi_UBP_transaction9.pdf",
                            "transaction_statements/Rajaram_BJB_portfolio.pdf",
                            "transaction_statements/Rajaram_BJB_transaction.pdf",
                            "transaction_statements/Rajaram_CAI_Portfolio.pdf",
                            "transaction_statements/Rajaram_CAI_transaction.pdf",
                            "transaction_statements/Rajaram_EFG_portfolio.pdf",
                            "transaction_statements/Rajaram_EFG_transaction.pdf",
                            "transaction_statements/Saransh_-_EFG_-_Portfolio_-_Aug.pdf",
                            "transaction_statements/Saransh_CAI_portfolio.pdf",
                            "transaction_statements/Saransh_CAI_transaction.pdf",
                            "transaction_statements/Saransh_EFG_transaction_n_portfolio.pdf",
                            "transaction_statements/Submarine_LGT_Portfolio.pdf",
                            "transaction_statements/Submarine_LGT_transaction_AUD.pdf",
                            "transaction_statements/Submarine_LGT_transaction_EUR.pdf",
                            "transaction_statements/Submarine_LGT_transaction_JPY.pdf",
                            "transaction_statements/Submarine_LGT_transaction_SGD.pdf",
                            "transaction_statements/Submarine_LGT_transaction_USD.pdf",
                            "transaction_statements/Tamira_BOS_transaction_n_portfolio.pdf",
                            "transaction_statements/Thailand_-_BNP_-_Consolidated_Statement_8800529_USD.pdf",
                            "transaction_statements/Thailand_BNP1_USD_transaction.pdf",
                            "transaction_statements/Thailand_BNP2_USD_transaction.pdf",
                            "transaction_statements/Thailand_BNP_USD_transaction.pdf",
                            "transaction_statements/Thailand_BNP_portfolio.pdf",
                            "transaction_statements/Thailand_HSBC_portfolio_n_transaction.pdf",
                            "transaction_statements/Thailand_Pictet_portfolio_n_transaction.pdf",
                            "transaction_statements/Ullaas_SC_portfolio_n_transaction.pdf",
                            "transaction_statements/dnmfgdhttw/Andaman_BJB_Transaction.pdf",
                            "transaction_statements/dnmfgdhttw/Hanoi_BJB_GBP.pdf",
                            "transaction_statements/hiqmgvawox/Thailand_HSBC_portfolio_n_transaction.pdf",
                            "transaction_statements/jkmyufkycb/Kampala_Reyl_Portfolio.pdf",
                            "transaction_statements/jkmyufkycb/Kampala_Reyl_Transaction.pdf",
                            "transaction_statements/kvcxkgixwz/Kampala_Reyl_Transaction_and_Portfolio.pdf",
                            "transaction_statements/ndleweafmp/Kampala_Reyl_Portfolio.pdf",
                            "transaction_statements/ndleweafmp/Kampala_Reyl_Transaction.pdf",
                            "transaction_statements/ndleweafmp/Rajaram_BJB_Portfolio.pdf",
                            "transaction_statements/ndleweafmp/Rajaram_BJB_Transaction.pdf",
                            "transaction_statements/pbdggxuubf/Dapsang_BJB_Transaction.pdf",
                            "transaction_statements/sgsqlruipk/Hanoi_BJB_USD.pdf",
                            "transaction_statements/sgsqlruipk/Saransh_CAI_transaction.pdf",
                            "transaction_statements/srxvbxmtha/Tamira_BOS_Portfolio_and_Transaction.pdf",
                            "transaction_statements/vzpmnthcst/2.pdf",
                            "transaction_statements/vzpmnthcst/Hanoi_UBP_portfolio.pdf",
                            "transaction_statements/zdiauuwxbi/Thailand_HSBC_portfolio_n_transaction.pdf",
                            "ts/saiml/Thailand_-_BNP_-_Consolidated_Statement_8800529_USD.pdf"
                        ]
                    }
                });
            });
        }
        return axios.get(this.host + "/list_s3/", config);
    }

    retriveBankJson(token, bankname, isRotationRequired) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        };

        const body = {
            bank: bankname,
            isRotationRequired
        }
        console.log(body);
        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "data": "stencil is available for this bank"
                    }
                });
            });
        }

        return axios.post(this.host + "/retrieve_json/", body, config);
    }

    loadFileInfo(token, filename) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        };

        const body = {
            filename
        }

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "size": 698802,
                        "last_modified": "2021-10-06T09:36:01Z"
                    },
                });
            });
        }
        return axios.post(this.host + "/info_s3/", body, config);
    }

    readFile(token, filename) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        };
        const body = {
            filename
        }
        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "data": "b'JVBERi0xLjcNCiWhs8XXDQoxIDAgb2JqDQo8PC9QYWdlcyAyIDAgUiAvVHlwZS9DYXRhbG9nPj4NCmVuZG9iag0KMiAwIG9iag0KPDwvQ291bnQgMi9LaWRzWyA0IDAgUiAgMTUgMCBSIF0vVHlwZS9QYWdlcz4+DQplbmRvYmoNCjMgMCBvYmoNCjw8L0NyZWF0aW9uRGF0ZShEOjIwMjEwOTAyMTAxMTAzKS9DcmVhdG9yKFBERml1bSkvUHJvZHVjZXIoUERGaXVtKT4+DQplbmRvYmoNCjQgMCBvYmoNCjw8L0NvbnRlbnRzIDUgMCBSIC9Dcm9wQm94WyAwIDAgODQxLjg5IDU5NS4yNzZdL01lZGlhQm94WyAwIDAgODQxLjg5IDU5NS4yNzZdL1BhcmVudCAyIDAgUiAvUmVzb3VyY2VzPDwvRm9udDw8L0YgNiAwIFIgL0YwIDkgMCBSID4+L1Byb2NTZXQgMTIgMCBSIC9YT2JqZWN0PDwvUiAxMyAwIFIgL1IwIDE0IDAgUiA+Pj4+L1JvdGF0ZSAwL1R5cGUvUGFnZT4+DQplbmRvYmoNCjUgMCBvYmoNCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggNTA0Pj5zdHJlYW0NCniclVRNb5tAEL3zK+aYHNjs7Pf2lmJH7SVpXHLLBeG1Q4TBAVw1/767YDukdpBsJGu0zD7ee/NBCdWGGymtBepjYamSXIbYUMq51AjNOvqeRjd3gAbSVYSoiWXIFEhmCGptNaTL6Oo2z+td1cHvLuvcxvkoa6FeAUdiCKMMr9PXaJ5GbxEC9Q8CIiWGCyUhRlSEMSo05JvoZgGzOnqM6AXkPJ4/Dj81kAzfFJqBUIZwYzj2JBduWzcdzFyXFWUbGFGIGScKUXLbpyRl4cmHV0HyGFRRohQK1J4Bsv7c7FHLrCvqqn0ptlDVBMJty4kUnFOf3ScZoxQJfwP0f4RjlGLPOPZeCCGFwLGv04RiRjQKJaT6VAvPZZIK+DoGQCS0L0/8kRmj8MXljA0SZ64t1lWv8hxi8uMOkqfFYn6fwm2SPDzdpyd4PgylHFQlu6ZxVf7+Bdg0mYO87n3rzgKcMpk03DcA18cGeOheXAM/q1XdbI6CT9pk6KSL2uRXUy93uVvCeQ9DFWw/KX4yvlEz7UFS1m1Rrb/0YP5327i2HY3jtqn/FK3Xk5UAz1eUPV8fR9LL81/t55KGEXwMZ8SgRKaN1yG1ZQZDo43iUcLh1iUjC/bzOmGSWG202JuVrZ1n5BcIm2R5WCYjez6ifpnQYZucu/4PtCQnPA0KZW5kc3RyZWFtDQplbmRvYmoNCjYgMCBvYmoNCjw8L0Jhc2VGb250L0NvcnBvcmF0ZVMtTGlnaHQvRmlyc3RDaGFyIDMyL0ZvbnREZXNjcmlwdG9yIDcgMCBSIC9MYXN0Q2hhciAxMjEvU3VidHlwZS9UeXBlMS9UeXBlL0ZvbnQvV2lkdGhzWyAyNTAgMCAwIDAgMCAwIDAgMCAyNzIgMjcyIDAgMCAyMzQgMCAyNTcgMCA1MjAgNTIwIDUyMCA1MjAgMCAwIDUyMCAwIDUyMCA1MjAgMjU3IDAgMCAwIDAgMCAwIDU1NCA1MzcgNjAyIDYyMCA0OTAgNDc3IDAgNjE5IDAgMCAwIDAgMCA2MjcgNjM3IDUxMyAwIDU1MiA1NDEgNDUwIDYwOCA1NDUgNzQ2IDAgMCAwIDAgMCAwIDAgMCAwIDQ2MyA0OTQgNDY3IDQ5NCA0NzYgMjY5IDQ2OCA0ODUgMjA3IDI0NSA0NjMgMjA3IDc0MSA0OTEgNDkzIDQ5NCAwIDMxMCA0MjMgMjk5IDQ3OCA0MDggNjMxIDQyMSA0MTddPj4NCmVuZG9iag0KNyAwIG9iag0KPDwvQXNjZW50IDAvQ2FwSGVpZ2h0IDAvQ2hhclNldCgvc3BhY2UvcGFyZW5sZWZ0L3BhcmVucmlnaHQvY29tbWEvcGVyaW9kL3plcm8vb25lL3R3by90aHJlZS9zaXgvZWlnaHQvbmluZS9jb2xvbi9BL0IvQy9EL0UvRi9IL04vTy9QL1IvUy9UL1UvVi9XL2EvYi9jL2QvZS9mL2cvaC9pL2ovay9sL20vbi9vL3Avci9zL3QvdS92L3cveC95KS9EZXNjZW50IDAvRmxhZ3MgMzIvRm9udEJCb3hbIC0yMyAtMjA1IDcyNyA2NzhdL0ZvbnRGaWxlMyA4IDAgUiAvRm9udE5hbWUvQ29ycG9yYXRlUy1MaWdodC9JdGFsaWNBbmdsZSAwL1N0ZW1WIDUwL1R5cGUvRm9udERlc2NyaXB0b3I+Pg0KZW5kb2JqDQo4IDAgb2JqDQo8PC9GaWx0ZXIvRmxh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'"
                    }

                });
            });
        }
        return axios.post(this.host + "/read_s3/", body, config);
    }
}

export default FilesResource;
