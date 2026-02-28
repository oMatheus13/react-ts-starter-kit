import type { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js";

import { supabase } from "@/services/supabaseClient";

export function signInWithEmail(credentials: SignInWithPasswordCredentials) {
  return supabase.auth.signInWithPassword(credentials);
}

export function signUpWithEmail(credentials: SignUpWithPasswordCredentials) {
  return supabase.auth.signUp(credentials);
}

export function signOut() {
  return supabase.auth.signOut();
}
