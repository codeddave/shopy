import { Box, Button, Text } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import useFetchUserProfile from "../components/hooks/apiHooks/useFetchUserProfile";
import { logOut } from "../redux";

const UserScreen = () => {
  const { userProfile } = useFetchUserProfile();

  const dispatch = useDispatch();

  return (
    <Box width="94%" mx="auto">
      <Box mb="16" mt="3" display="flex" alignItems="flex-end">
        <Button background="red.500" onPress={() => dispatch(logOut())}>
          log out
        </Button>
      </Box>
      <Text textAlign="center" fontWeight="bold">
        {userProfile?.fullName}
      </Text>
      <Box pt="6">
        <Text color="gray.500">Email</Text>
        <Text>{userProfile?.email}</Text>
      </Box>
    </Box>
  );
};

export default UserScreen;
