import { Auth } from "aws-amplify";

interface returnData {
  success: boolean;
  data: any | null;
}

export async function login(
  email: string,
  password: string
): Promise<returnData> {
  // return { success: true, data: "sukses" } as returnData;
  try {
    await Auth.signIn(email, password);
    const currentUser = await Auth.currentAuthenticatedUser();
    return { success: true, data: currentUser } as returnData;
  } catch (err: any) {
    return { success: false, data: err } as returnData;
  }
}

export async function signup(
  fullname: string,
  email: string,
  password: string
): Promise<returnData> {
  console.log("username utils: ", email);
  console.log("fullname utils: ", fullname);
  console.log("pwd utils: ", password);
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email: email, // optional
        name: fullname, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: false,
      },
    });
    return { success: true, data: user } as returnData;
  } catch (error) {
    console.log("error signing up:", error);
    return { success: false, data: error } as returnData;
  }
}
