import { createHash } from "https://deno.land/std/hash/mod.ts";

const makeHash256 = (rawString: string) : string => {
    const hash = createHash("sha256");
    hash.update(rawString)
    return hash.toString()
}

export { makeHash256 }