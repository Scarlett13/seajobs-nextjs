import { Auth } from 'aws-amplify';
import { atom } from 'jotai';

export async function checkIsLoggedIn() {
  const userInfo = await Auth.currentUserInfo();

  if (!userInfo){
		console.log(userInfo);
		return false;
	} 
	
	console.log(userInfo);
  return true;
}

export const authorizationAtom = atom(checkIsLoggedIn());