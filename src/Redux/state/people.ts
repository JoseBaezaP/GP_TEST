import { localStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(localStorageTypes.PERSON) ? JSON.parse(getLocalStorage(localStorageTypes.PERSON) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(localStorageTypes.PERSON, state);
            return action.payload;
        },
    }
});

export const { addPeople } = peopleSlice.actions;