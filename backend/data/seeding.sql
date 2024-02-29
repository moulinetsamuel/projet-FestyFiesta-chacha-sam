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

INSERT INTO "objects" ("name", "created_at", "updated_at")
VALUES
('object 1', now(), now()),
('object 2', now(), now()),
('object 3', now(), now()),
('object 4', now(), now()),
('object 5', now(), now()),
('object 6', now(), now()),
('object 7', now(), now()),
('object 8', now(), now()),
('object 9', now(), now()),
('object 10', now(), now());

COMMIT;