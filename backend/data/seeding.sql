-- SQLBook: Code
BEGIN;

INSERT INTO "user" ("firstname", "lastname", "email", "created_at", "updated_at")
VALUES
('samuel', 'moulinet', 'admin.admin@admin.com', now(), now()),
('charlize', 'theron', 'user.user@user.com', now(), now()),
('charlène', 'gallice', 'admin1.admin1@admin1.com', now(), now());

INSERT INTO "event" ("name", "place", "date", "description", "author_id", "created_at", "updated_at")
VALUES
('teuf', 'nantes', '2022-05-01', 'teuf de samuel', 1, now(), now()),
('messe', 'paris', '2022-05-01', 'messe pour charlize', 2, now(), now()),
('salseras', 'chamonix', '2022-05-01', 'SBK pour charlène', 3, now(), now());

INSERT INTO "article" ("name", "created_at", "updated_at")
VALUES
('article 1', now(), now()),
('article 2', now(), now()),
('article 3', now(), now()),
('article 4', now(), now()),
('article 5', now(), now()),
('article 6', now(), now()),
('article 7', now(), now()),
('article 8', now(), now()),
('article 9', now(), now()),
('article 10', now(), now());

ROLLBACK;