import { createApi } from "@reduxjs/toolkit/query/react";
import { db } from "../../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Custom baseQuery to use Firebase
const firebaseBaseQuery = async ({ method, data }) => {
  try {
    switch (method) {
      case "fetchGroup":
        const groupDoc = doc(db, "groups", data.id);
        const docSnap = await getDoc(groupDoc);
        return docSnap.exists()
          ? { data: docSnap.data() }
          : { error: "Group not found" };

      case "createGroup":
        const groupRef = doc(db, "groups", data.name);
        await setDoc(groupRef, data);
        return { data: { id: groupRef.id, ...data } };

      default:
        return { error: "Method not found" };
    }
  } catch (error) {
    return { error: error.message || "An error occurred" };
  }
};

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: firebaseBaseQuery,
  endpoints: (builder) => ({
    fetchGroup: builder.query({
      query: (id) => ({ method: "fetchGroup", data: { id } }),
    }),
    createGroup: builder.mutation({
      query: (group) => ({ method: "createGroup", data: group }),
    }),
  }),
});

export const { useFetchGroupQuery, useCreateGroupMutation } = groupsApi;
