"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; //used to create a Supabase client.
import { SessionContextProvider } from "@supabase/auth-helpers-react"; //used to provide a session context for authentication.

import { Database } from "@/types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;

// sets up a Supabase client and provides a session context for authentication using the SessionContextProvider component.
// Other components can import and use this SupabaseProvider component to access the Supabase client and
// authentication functionality.
