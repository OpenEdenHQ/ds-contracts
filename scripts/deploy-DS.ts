import { deployContract } from "./utils"

import * as dotenv from "dotenv";
dotenv.config();

async function main() {

    const dsProxyFactoryContract = await deployContract("DSProxyFactory");
    const dsGuardFactoryContract = await deployContract("DSGuardFactory");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});