import { Box, Button, Text } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import useFetchUserProfile from "../components/hooks/apiHooks/useFetchUserProfile";
import { logOut } from "../redux";

const UserScreen = () => {
  const { userProfile } = useFetchUserProfile();

  const dispatch = useDispatch();

  return (
    <Box pt="24" width="94%" mx="auto">
      <Text textAlign="center" fontWeight="bold">
        {userProfile?.fullName}
      </Text>
      <Box pt="6">
        <Text color="gray.500">Email</Text>
        <Text>{userProfile?.email}</Text>
      </Box>
      {/*     <Button onPress={() => dispatch(logOut())}>log out</Button> */}
    </Box>
  );
};

export default UserScreen;
