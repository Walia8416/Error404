rimport AsyncStorage from '@react-native-async-storage/async-storage';
import {deactivateAllAccounts} from './deactivateAllAccounts';

export interface AccountProps {
  username: string;
  name: string;
  auth_code: string;
  expiry: string;
  token: string;
  active: boolean;
}

export const alreadyLogin = async (email: string) => {
  const accountsString = await AsyncStorage.getItem('@accounts');
  if (accountsString) {
    const accounts = JSON.parse(accountsString);
    const present = accounts.findIndex(
      (account: AccountProps) => account.username === email,
    );
    const allAccounts = await deactivateAllAccounts(accountsString);
    if (present === -1) return false;
    else allAccounts[present].active = true;
    return true;
  } else return false;
};
