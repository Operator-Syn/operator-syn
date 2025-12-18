-- 1. Singular global values
CREATE TABLE IF NOT EXISTS site_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);

-- 2. Simple Label-Value pairs for the profile card
CREATE TABLE IF NOT EXISTS profile_info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    display_order INTEGER DEFAULT 0
);

-- 3. Categories for grouped content (Loadouts, Socials, Pitch)
CREATE TABLE IF NOT EXISTS sections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    section_type TEXT NOT NULL, -- 'loadout', 'social', 'pitch'
    display_order INTEGER DEFAULT 0
);

-- 4. The actual items (Badges, Links, Paragraphs)
CREATE TABLE IF NOT EXISTS section_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    section_id INTEGER NOT NULL,
    label TEXT,              -- 'alt' text for badges
    content TEXT,            -- Paragraph text for pitch
    image_url TEXT,          -- Shields.io badge URL
    target_url TEXT,         -- href link
    display_order INTEGER DEFAULT 0,
    FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE
);