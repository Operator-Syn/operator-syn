-- --- Table 1: site_settings ---
INSERT INTO site_settings (key, value) VALUES 
('headerPhrase', 'Calm Interfaces, Seamless Experiences — Welcome Visitors!'),
('mobileHeaderPhrase', ''),
('profileImage', '/assets/profile-encircle.png');

-- --- Table 2: profile_info ---
INSERT INTO profile_info (label, value, display_order) VALUES 
('Name', 'John-Ronan Beira', 1),
('Program', 'BS Computer Science', 2),
('Year Level', 'Third Year', 3);

-- --- Table 3: sections ---
-- We define IDs manually to link them correctly in Table 4
INSERT INTO sections (id, title, section_type, display_order) VALUES 
(1, 'Know ''lil more about me', 'pitch', 1),
(2, 'Operating Systems', 'loadout', 2),
(3, 'Programming Languages', 'loadout', 3),
(4, 'Frameworks', 'loadout', 4),
(5, 'Database', 'loadout', 5),
(6, 'Virtualization & Containerization', 'loadout', 6),
(7, 'Networking and Security', 'loadout', 7),
(8, 'Social Links', 'social', 8);

-- --- Table 4: section_items ---

-- Elevator Pitch (Section 1)
INSERT INTO section_items (section_id, content, display_order) VALUES 
(1, 'Hello Everyone! I''m a Third Year Computer Science Student with hands-on experience in Java, C++, Python, and MySQL. I am also comfortable working in Linux environments and using tools like Docker and Apache for development and deployment. Excited to work on real-world software challenges and grow through hands-on experience and team collaboration. Let''s connect and explore opportunities to innovate together!', 1);

-- Operating Systems (Section 2)
INSERT INTO section_items (section_id, image_url, display_order) VALUES 
(2, 'https://img.shields.io/badge/Windows_11-0078d4?style=for-the-badge&logo=windows-11&logoColor=white', 1),
(2, 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black', 2),
(2, 'https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white', 3),
(2, 'https://img.shields.io/badge/Pop!_OS-48B9C7?style=for-the-badge&logo=Pop!_OS&logoColor=white', 4),
(2, 'https://img.shields.io/badge/Zorin%20OS-0CC1F3?style=for-the-badge&logo=zorin&logoColor=white', 5),
(2, 'https://img.shields.io/badge/Red%20Hat-EE0000?style=for-the-badge&logo=redhat&logoColor=white', 6);

-- Programming Languages (Section 3)
INSERT INTO section_items (section_id, image_url, display_order) VALUES 
(3, 'https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white', 1),
(3, 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white', 2),
(3, 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white', 3),
(3, 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue', 4);

-- Frameworks (Section 4)
INSERT INTO section_items (section_id, image_url, display_order) VALUES 
(4, 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white', 1),
(4, 'https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=Apache&logoColor=white', 2),
(4, 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', 3),
(4, 'https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white', 4);

-- Database (Section 5)
INSERT INTO section_items (section_id, image_url, display_order) VALUES 
(5, 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white', 1),
(5, 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white', 2);

-- Virtualization (Section 6)
INSERT INTO section_items (section_id, image_url, display_order) VALUES 
(6, 'https://img.shields.io/badge/Portainer-13BEF9?style=for-the-badge&logo=portainer&logoColor=white', 1),
(6, 'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white', 2);

-- Networking (Section 7)
INSERT INTO section_items (section_id, image_url, display_order) VALUES 
(7, 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white', 1);

-- Social Links (Section 8)
INSERT INTO section_items (section_id, label, image_url, target_url, display_order) VALUES 
(8, 'Facebook', 'https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white', 'https://www.facebook.com/one.young.blue.existing.entity', 1),
(8, 'GitHub', 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white', 'https://github.com/Operator-Syn', 2),
(8, 'Instagram', 'https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white', 'https://www.instagram.com/rohn_rohnann', 3),
(8, 'LinkedIn', 'https://img.shields.io/badge/LinkedIn-00777B5?style=for-the-badge&logo=linkedin&logoColor=white', 'https://www.linkedin.com/in/one-young-blue-existing-entity/', 4),
(8, 'Discord', 'https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white', 'https://discord.com/users/565151069655662622', 5),
(8, 'Steam', 'https://img.shields.io/badge/Steam-000000?style=for-the-badge&logo=steam&logoColor=white', 'https://steamcommunity.com/id/one-young-blue-entity/', 6),
(8, 'Xbox', 'https://img.shields.io/badge/Xbox-107C10?style=for-the-badge&logo=xbox&logoColor=white', 'https://www.xbox.com/en-PH/play/user/Kashiede', 7),
(8, 'PayPal', 'https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white', 'https://paypal.me/youngexistingentity?country.x=PH&locale.x=en_US', 8);