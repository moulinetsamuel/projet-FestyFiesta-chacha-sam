-- SQLBook: Code
BEGIN;

INSERT INTO "user" ("firstname", "lastname", "email")
VALUES
('samuel', 'moulinet', 'admin.admin@admin.com'),
('charlize', 'theron', 'user.user@user.com'),
('charlène', 'gallice', 'admin1.admin1@admin1.com');

INSERT INTO "event" ("name", "place", "date", "description", "author_id")
VALUES
('teuf', 'nantes', '2022-05-01', 'teuf de samuel', 1),
('messe', 'paris', '2022-05-01', 'messe pour charlize', 2),
('salseras', 'chamonix', '2022-05-01', 'SBK pour charlène', 3);

INSERT INTO "list" ("name", "list_envent_id")
VALUES
('liste teuf', 1),
('liste samuel', 1),
('liste charlize', 1),
('liste messe', 2),
('liste charlize', 2),
('liste charlène', 2),
('liste salseras', 3),
('liste charlène', 3);

INSERT INTO "user_has_event" ("user_id", "event_id")
VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 2),
(3, 3);

INSERT INTO "article" ("name")
VALUES
('article 1'),
('article 2'),
('article 3'),
('article 4'),
('article 5'),
('article 6'),
('article 7'),
('article 8'),
('article 9'),
('article 10');

INSERT INTO "list_has_article" ("list_id", "article_id")
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(7, 10),
(7, 6),
(7, 8),
(7, 2);

ROLLBACK;