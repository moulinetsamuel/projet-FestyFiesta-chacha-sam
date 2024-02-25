-- SQLBook: Code
BEGIN;

INSERT INTO "users" ("firstname", "lastname", "email", "created_at", "updated_at")
VALUES
('samuel', 'moulinet', 'admin.admin@admin.com', now(), now()),
('charlize', 'theron', 'user.user@user.com', now(), now()),
('charlène', 'gallice', 'admin1.admin1@admin1.com', now(), now());

INSERT INTO "events" ("name", "place", "date", "description", "author_id", "created_at", "updated_at")
VALUES
('teuf', 'nantes', '2022-05-01', 'teuf de samuel', 1, now(), now()),
('messe', 'paris', '2022-05-01', 'messe pour charlize', 2, now(), now()),
('salseras', 'chamonix', '2022-05-01', 'SBK pour charlène', 3, now(), now());

INSERT INTO "articles" ("name", "created_at", "updated_at")
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

INSERT INTO "participations" ("user_id", "event_id", "article_id", "created_at", "updated_at")
VALUES
(1, 1, 1, now(), now()),
(1, 1, 2, now(), now()),
(1, 1, 3, now(), now()),
(2, 1, 4, now(), now()),
(2, 1, 5, now(), now()),
(2, 1, 6, now(), now()),

(2, 2, 4, now(), now()),
(2, 2, 5, now(), now()),
(2, 2, 6, now(), now()),
(3, 2, 7, now(), now()),
(3, 2, 8, now(), now()),

(3, 3, 9, now(), now()),
(3, 3, 10, now(), now()),
(1, 3, 7, now(), now()),
(1, 3, 8, now(), now());

COMMIT;