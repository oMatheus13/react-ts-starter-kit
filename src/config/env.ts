const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

if (import.meta.env.DEV && (!supabaseUrl || !supabaseAnonKey)) {
  console.warn("Missing Supabase environment variables.");
}

export const env = {
  supabaseUrl,
  supabaseAnonKey,
};
