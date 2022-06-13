import { Box, Button, Text } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import useFetchUserProfile from "../components/hooks/apiHooks/useFetchUserProfile";
import { logOut } from "../redux";

const UserScreen = () => {
  const { userProfile } = useFetchUserProfile();

  const dispatch = useDispatch();

  return (
    <Box>
      <Text>{userProfile?.fullName}</Text>;
      <Button onPress={() => dispatch(logOut())}>log out</Button>
    </Box>
  );
};

export default UserScreen;
