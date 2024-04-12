import { createApi } from "@reduxjs/toolkit/query/react";
import { db } from "../../../firebaseConfig";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

// custom baseQuery to use Firebase

const firebaseBaseQuery = async ({ method, data }) => {
  try {
    switch (method) {
      case "fetchGroup":
        const groupDoc = doc(db, "groups", data.id);
        const docSnap = await getDoc(groupDoc);

        if (docSnap.exists()) {
          return { data: docSnap.data() };
        } else {
          return { error: "Group not found" };
        }
      case "createGroup":
        const groupRef = doc(db, "groups", data.name);
        await setDoc(groupRef, data);
        if (groupRef.id) {
          return { data: { id: groupRef.id, ...data } };
        } else {
          return { error: "Group not created" };
        }

      default:
        return { error: "Method not found" };
    }
  } catch (error) {
    return { error };
  }
};

export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: firebaseBaseQuery,
  endpoints: (builder) => ({
    fetchGroup: builder.query({
      query: (id) => ({ method: "fetchGroup", data: { id } }),
    }),
    createGroup: builder.mutation({
      query: (data) => ({ method: "createGroup", data }),
    }),
  }),
});

export const { useGetUserByIdQuery, useCreateUserMutation } = firebaseApi;
