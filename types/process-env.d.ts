declare module 'process' {
    global {
        namespace NodeJS {
            interface ProcessEnv {
                NEXT_PUBLIC_APPWRITE_ENDPOINT: string;
                NEXT_PUBLIC_APPWRITE_PROJECT: string;
                APPWRITE_DATABASE_ID: string;
                APPWRITE_USER_COLLECTION_ID: string;
                APPWRITE_BANK_COLLECTION_ID: string;
                APPWRITE_TRANSACTION_COLLECTION_ID: string;
                NEXT_APPWRITE_SECRET: string;
                PLAID_CLIENT_ID: string;
                PLAID_SECRET: string;
                PLAID_ENV: string;
                PLAID_PRODUCTS: string;
                PLAID_COUNTRY_CODES: string;
                DWOLLA_KEY: string;
                DWOLLA_SECRET: string;
                DWOLLA_BASE_URL: string;
                DWOLLA_ENV: string;
            }
        }
    }
}