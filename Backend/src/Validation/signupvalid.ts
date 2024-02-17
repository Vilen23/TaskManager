import zod from "zod";

const signupvalid = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
});

export default signupvalid;