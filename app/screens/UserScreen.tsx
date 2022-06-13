import { Text } from "native-base";
import React from "react";
import useFetchUserProfile from "../components/hooks/apiHooks/useFetchUserProfile";

const UserScreen = () => {
  const { userProfile } = useFetchUserProfile();
  return <Text>{userProfile?.fullName}</Text>;
};

export default UserScreen;
