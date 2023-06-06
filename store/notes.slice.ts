import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase"; // Assuming you have a SupaClient instance
import { RootState } from "./store";

interface Note {
  id: string;
  title: string;
  unit_no: string;
  unit_name: string;
  uploaded_date: string;
  file_pdf: string;
  Sub_code: string;
  studentId: string;
  staffId: string;
  checked_notesId: string;
  Branch_name: string;
}

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}  

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async (_, { rejectWithValue }) => {
  try {
    const response = await SupaClient.from("notes").select("*").eq("Sub_code", "p8ady");
    return response.data as Note[];
  } catch (error) {
    return rejectWithValue("Failed to fetch notes");
  }
});

export const addNote = createAsyncThunk("notes/addNote", async (note: Note, { rejectWithValue }) => {
  try {
    const response = await SupaClient.from("notes").insert([note]);
    return response.data as Note[];
  } catch (error) {
    return rejectWithValue("Failed to add note");
  }
});

export const deleteNote = createAsyncThunk("notes/deleteNote", async (noteId: string) => {
  try {
    await SupaClient.from("notes").delete().eq("id", noteId);
    return noteId;
  } catch (error) {
    throw new Error("Failed to delete note");
  }
});

export const uploadNote = createAsyncThunk("notes/uploadNote", async (file: File, { rejectWithValue }) => {
  try {
    // Implement the logic to upload the note file
    // Example:
    const response = await uploadFileToServer(file);
    const note: Note = {
      id: response.id,
      title: response.title,
      unit_no: response.unit_no,
      unit_name: response.unit_name,
      uploaded_date: response.uploaded_date,
      file_pdf: response.file_pdf,
      Sub_code: response.Sub_code,
      studentId: response.studentId,
      staffId: response.staffId,
      checked_notesId: response.checked_notesId,
      Branch_name: response.Branch_name,
    };
    return note;
  } catch (error) {
    return rejectWithValue("Failed to upload note");
  }
});

export const downloadNote = createAsyncThunk("notes/downloadNote", async (noteId: string, { rejectWithValue }) => {
  try {
    // Implement the logic to download the note file
    // Example:
    const response = await SupaClient.from("notes").select("file_pdf").eq("id", noteId);
    const fileUrl = response.data.file_pdf;
    downloadFileFromServer(fileUrl);
  } catch (error) {
    return rejectWithValue("Failed to download note");
  }
});

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch notes";
      })
      .addCase(addNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes.push(action.payload);
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to add note";
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to delete note";
      })
      .addCase(uploadNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes.push(action.payload);
      })
      .addCase(uploadNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to upload note";
      })
      .addCase(downloadNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(downloadNote.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(downloadNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to download note";
      });
  },
});

export default notesSlice.reducer;

// Helper functions for uploading and downloading files
function uploadFileToServer(file: File): Promise<Note> {
  // Implement the logic to upload the file to the server and return the uploaded note
  // Example:
  const uploadedNote: Note = {
    id: "123",
    title: file.name,
    unit_no: "1",
    unit_name: "Example Unit",
    uploaded_date: new Date().toISOString(),
    file_pdf: "https://example.com/file.pdf",
    Sub_code: "p8ady",
    studentId: "student123",
    staffId: "staff456",
    checked_notesId: "checked_notes123",
    Branch_name: "Example Branch",
  };
  return Promise.resolve(uploadedNote);
}

function downloadFileFromServer(fileUrl: string): void {
  // Implement the logic to download the file from the server
  // Example:
  window.open(fileUrl, "_blank");
}
