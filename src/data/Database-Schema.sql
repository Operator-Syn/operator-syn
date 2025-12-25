-- =====================================================
-- 1. GLOBAL & PROFILE SETTINGS
-- =====================================================

-- Singular global values (e.g., Site Title, Footer Text, Resume Link)
CREATE TABLE IF NOT EXISTS site_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);

-- Simple Label-Value pairs for the profile card (e.g., Location, Email, Role)
CREATE TABLE IF NOT EXISTS profile_info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    display_order INTEGER DEFAULT 0
);

-- =====================================================
-- 2. DYNAMIC SECTIONS (Skills, Socials, Pitch)
-- =====================================================

-- Categories for grouped content (Loadouts/Skills, Social Links, Elevator Pitch)
CREATE TABLE IF NOT EXISTS sections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    section_type TEXT NOT NULL, -- 'loadout', 'social', 'pitch'
    display_order INTEGER DEFAULT 0
);

-- The actual items inside those sections (Badges, Links, Paragraphs)
CREATE TABLE IF NOT EXISTS section_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    section_id INTEGER NOT NULL,
    label TEXT,              -- 'alt' text for badges or label for links
    content TEXT,            -- Paragraph text (used for 'pitch' type)
    image_url TEXT,          -- Shields.io badge URL or Icon URL
    target_url TEXT,         -- href link (for socials or loadout docs)
    display_order INTEGER DEFAULT 0,
    FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE
);

-- =====================================================
-- 3. PROJECTS & GALLERY (The Portfolio)
-- =====================================================

-- Main Projects table (The Cards on your Projects Page)
CREATE TABLE IF NOT EXISTS Projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    type TEXT CHECK(type IN ('video', 'image')) NOT NULL, -- 'video' or 'image'
    url TEXT NOT NULL,       -- Main thumbnail or preview URL
    short_description TEXT NOT NULL,
    long_description TEXT NOT NULL,
    project_link TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Gallery Items (The 'Many' side: multiple images/videos per project)
CREATE TABLE IF NOT EXISTS GalleryItems (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    type TEXT CHECK(type IN ('video', 'image')) NOT NULL,
    url TEXT NOT NULL,       -- URL to the media file
    display_order INTEGER DEFAULT 0, -- To keep your gallery items ordered
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE
);

-- =====================================================
-- 4. PERFORMANCE INDEXES
-- =====================================================

-- Create indexes to ensure joins are fast when loading pages
CREATE INDEX IF NOT EXISTS idx_gallery_project_id ON GalleryItems(project_id);
CREATE INDEX IF NOT EXISTS idx_section_items_section_id ON section_items(section_id);

-- =====================================================
-- 5. SCHEMA UPDATES
-- =====================================================

-- Add a display_order column to Projects for custom sorting
-- We set a DEFAULT of 0 so existing rows get a value automatically.
ALTER TABLE Projects ADD COLUMN display_order INTEGER DEFAULT 0;