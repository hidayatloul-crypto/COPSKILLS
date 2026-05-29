// ============================================================
//  SUPABASE CONFIG — COP'SKILLS
//  Allez sur : https://supabase.com/dashboard/project/VOTRE_PROJET/settings/api
//  Copiez les 2 valeurs ci-dessous
// ============================================================

const SUPABASE_URL  = "https://ptiopuibgmttbmggbdne.supabase.co/rest/v1/";   // ← Project URL
const SUPABASE_ANON = "sb_publishable_ysjLRP7e1lgEKGkMzYk-9Q_ciub0Nme"; // ← anon public key

// ── Initialisation (ne pas modifier) ────────────────────────
const _supa = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
const db    = _supa;   // alias court utilisé dans toute l'appli
