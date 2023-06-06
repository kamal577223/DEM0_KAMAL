
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase"; // Assuming you have a Supabase client instance

interface Note {
  id: string;
  title: string;
  content: string;
}

interface CheckNotesState {
  id: string;
  notes: Note[];
  adminId: string;
  loading: boolean;
  error: string | null;
}

const initialState: CheckNotesState = {
  id: "",
  notes: [],
  adminId: "",
  loading: false,
  error: null,
};

export const fetchCheckNotes = createAsyncThunk(
  "checkNotes/fetchCheckNotes",
  async (adminId: string) => {
    try {
      const { data, error } = await SupaClient
        .from<CheckNotesState>("check_notes")
        .select("*")
        .eq("adminId", adminId);
      if (error) {
        throw new Error(error.message);
      }
      return data?.[0] ?? initialState;
    } catch (error) {
      throw new Error("Failed to fetch check notes");
    }
  }
);

export const updateCheckNotes = createAsyncThunk(
  "checkNotes/updateCheckNotes",
  async (checkNotes: CheckNotesState) => {
    try {
      const { data, error } = await SupaClient
        .from<CheckNotesState>("check_notes")
        .upsert(checkNotes, { returning: "minimal" });
      if (error) {
        throw new Error(error.message);
      }
      return data?.[0] ?? initialState;
    } catch (error) {
      throw new Error("Failed to update check notes");
    }
  }
);

export const checkNotesSlice = createSlice({
  name: "checkNotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCheckNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.notes = action.payload.notes;
        state.adminId = action.payload.adminId;
      })
      .addCase(fetchCheckNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch check notes";
      })
      .addCase(updateCheckNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCheckNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.notes = action.payload.notes;
        state.adminId = action.payload.adminId;
      })
      .addCase(updateCheckNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to update check notes";
      });
  },
});

export default checkNotesSlice.reducer;