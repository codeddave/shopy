import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getUserById, selectUser, selectUserProfile } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { CurrentUser } from "../../../interfaces";

const useFetchUserProfile = (): {
  userProfile: CurrentUser | null;
} => {
  const user = useSelector(selectUser);

  const userProfile = useSelector(selectUserProfile);
  const dispatch: AppDispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      if (user?.id) {
        dispatch(getUserById(user.id));
      }
    }, [])
  );

  return {
    userProfile,
  };
};

export default useFetchUserProfile;
