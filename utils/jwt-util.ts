import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";

const key = "8IeRDkxATtdQI2YHvAnYF6B74Zd3Gtqk";
const exp = setExpiration(new Date().getTime() + 600000) // 1 hour
const header: Jose = {
    alg: "HS256",
    typ: "JWT",
};

const generateToken = (issuer: string) : string => {
    return makeJwt({
        header,
        payload: { iss: issuer, exp: exp },
        key
    })
}

const verifyToken = async (jwt: string) : Promise<boolean> => {
    const jwtValidation =  await validateJwt(jwt, key)
    return jwtValidation.isValid
}

export { generateToken, verifyToken }