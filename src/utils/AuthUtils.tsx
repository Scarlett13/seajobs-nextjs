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
