import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aonfgnyzehlfmrdhfwip.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbmZnbnl6ZWhsZm1yZGhmd2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NDc1MTMsImV4cCI6MjA0MDMyMzUxM30._uGkM81b9PuIE9WuzfIehpL2QV_KhzsixtI0BmiOZ3c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
