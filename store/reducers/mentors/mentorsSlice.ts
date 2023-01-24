import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import MentorService from "../../../api/mentorService";
import { IMentor } from "./types";
import { RootState } from "../../index";

export const fetchMentors = createAsyncThunk<IMentor[]>(
  "mentors/fetchMentors",
  async () => {
    const response = await MentorService.getMentors();
    return response.data;
  }
);

const mentorsAdapter = createEntityAdapter<IMentor>();

const initialState = mentorsAdapter.getInitialState({
  loading: "idle",
});

const mentorsSlice = createSlice({
  name: "mentors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMentors.fulfilled, (state, { payload }) => {
      mentorsAdapter.setAll(state, payload);
      state.loading = "succeeded";
    });
  },
});

export const { selectById: selectMentorById, selectIds: selectMentorsIds } =
  mentorsAdapter.getSelectors((state: RootState) => state.mentors);


export default mentorsSlice.reducer;
