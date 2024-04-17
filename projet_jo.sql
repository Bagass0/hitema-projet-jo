SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `epreuves`;
CREATE TABLE `epreuves` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `id_sport` varchar(100) DEFAULT NULL,
  `name_epreuve` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `epreuves` (`id`, `id_sport`, `name_epreuve`) VALUES
(1,	'1',	'100m'),
(2,	'1',	'200m'),
(3,	'1',	'400m'),
(4,	'1',	'800m'),
(5,	'1',	'1500m'),
(6,	'1',	'5000m'),
(7,	'1',	'10000m'),
(8,	'1',	'Marathon'),
(9,	'1',	'110m haies'),
(10,	'1',	'400m haies'),
(11,	'1',	'3000m haies'),
(12,	'1',	'4 x 100m haies'),
(13,	'1',	'10km marche'),
(14,	'1',	'Saut en hauteur'),
(15,	'1',	'Saut à la perche'),
(16,	'1',	'Saut en longueur'),
(17,	'1',	'Triple saut'),
(18,	'1',	'Lancer du poids '),
(19,	'1',	'Lancer du disque'),
(20,	'1',	'Lancer du marteau'),
(21,	'1',	'Lancer du javelot'),
(22,	'1',	'Décathlon'),
(23,	'2',	'Skiff'),
(24,	'2',	'Deux de couple'),
(25,	'2',	'Deux de couple poids léger'),
(26,	'2',	'Quatre de couple'),
(27,	'2',	'Deux sans barreur'),
(28,	'2',	'Quatre sans barreur'),
(29,	'2',	'Huit'),
(30,	'3',	'Simple'),
(31,	'3',	'Double'),
(32,	'4',	'Tournoi masculin'),
(33,	'4',	'Tournoi féminin'),
(34,	'5',	'Tournoi masculin'),
(35,	'5',	'Tournoi féminin'),
(36,	'6',	'Poids mouches'),
(37,	'6',	'Poids plumes'),
(38,	'6',	'Poids légers'),
(39,	'6',	'Poids welters	'),
(40,	'6',	'Poids moyens	'),
(41,	'6',	'Poids mi-lourds'),
(42,	'6',	'Poids lourds'),
(43,	'6',	'Poids super-lourds	'),
(44,	'42',	'Compétitions femmes'),
(45,	'42',	'Compétitions Hommes'),
(46,	'8',	'C1'),
(47,	'8',	'K1'),
(48,	'8',	'KX1'),
(49,	'7',	'C1'),
(50,	'7',	'C2'),
(51,	'7',	'K1'),
(52,	'7',	'K2'),
(53,	'7',	'K4'),
(54,	'10',	'Course en ligne'),
(55,	'10',	'Contre-la-montre'),
(56,	'9',	'Keirin'),
(57,	'9',	'Vitesse individuelle'),
(58,	'9',	'Vitesse par équipes'),
(59,	'9',	'Poursuite par équipes'),
(60,	'9',	'Course à l américaine'),
(61,	'9',	'Omnium'),
(62,	'11',	'Freestyle'),
(63,	'12',	'Racing'),
(64,	'13',	'Cross-country'),
(65,	'32',	'Dressage'),
(66,	'32',	'Saut d obstacle'),
(67,	'32',	'Concours complet'),
(68,	'43',	'Combiné'),
(69,	'43',	'Vitesse'),
(70,	'14',	'Épée'),
(71,	'14',	'Fleuret'),
(72,	'14',	'Sabre'),
(73,	'15',	'Tournoi'),
(74,	'16',	'Compétition masculine'),
(75,	'16',	'Compétition féminine')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `id_sport` = VALUES(`id_sport`), `name_epreuve` = VALUES(`name_epreuve`);

DROP TABLE IF EXISTS `sports`;
CREATE TABLE `sports` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name_sport` varchar(100) DEFAULT NULL,
  `site_olympique` TEXT,
  `img_sport` TEXT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `sports` (`id`, `name_sport`, `site_olympique`, `img_sport`) VALUES
(1,	'Athlétisme',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4255836630928!2d2.2697880754095903!3d48.831020402633676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67075c29534bd%3A0xd0c21c72198a29f4!2sStade%20Suzanne%20Lenglen!5e0!3m2!1sfr!2sfr!4v1709717263249!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://suaps.univ-grenoble-alpes.fr/medias/photo/activite-athletisme-03_1657198355110-jpg'),
(2,	'Aviron',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4255836630928!2d2.2697880754095903!3d48.831020402633676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67075c29534bd%3A0xd0c21c72198a29f4!2sStade%20Suzanne%20Lenglen!5e0!3m2!1sfr!2sfr!4v1709717263249!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://www.airzen.fr/wp-content/uploads/2022/03/dmitrydesigner_AVIRON-scaled.jpeg'),
(3,	'Badminton',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4255836630928!2d2.2697880754095903!3d48.831020402633676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67075c29534bd%3A0xd0c21c72198a29f4!2sStade%20Suzanne%20Lenglen!5e0!3m2!1sfr!2sfr!4v1709717263249!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://cdn-s-www.estrepublicain.fr/images/1D6E37A4-8226-4796-BAF5-06240331A1EA/NW_raw/toma-junior-popov-1635785326.jpg'),
(4,	'Basketball',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4255836630928!2d2.2697880754095903!3d48.831020402633676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67075c29534bd%3A0xd0c21c72198a29f4!2sStade%20Suzanne%20Lenglen!5e0!3m2!1sfr!2sfr!4v1709717263249!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://imageio.forbes.com/specials-images/imageserve/650da7418bf6b2920bd5a9cc/City-Of-Palms-Classic/960x0.jpg?format=jpg&width=960'),
(5,	'Basketball 3×3',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4255836630928!2d2.2697880754095903!3d48.831020402633676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67075c29534bd%3A0xd0c21c72198a29f4!2sStade%20Suzanne%20Lenglen!5e0!3m2!1sfr!2sfr!4v1709717263249!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_16-9_640/f_auto/v1668613158/primary/oo36twekciqogi7th0eq'),
(6,	'Boxe',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.freepik.com/photos-gratuite/deux-boxeurs-professionnels-smoky-noir_155003-14259.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=ais'),
(7,	'Canoë sprint',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/lcexnrdj6bkgcg2ilexk'),
(8,	'Canoë-kayak slalom',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ytnd5je7ak288tq3rxup'),
(9,	'Cyclisme sur piste',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/v1668679688/primary/uyynza5tmypufqqve330'),
(10,	'Cyclisme sur route',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://www.lequipe.fr/_medias/img-photo-jpg/bruno-armirail-benjamin-thomas-et-alexis-gougeard-en-2021-aux-championnats-d-europe-de-cyclisme-sur-/1500000001801753/0:0,1998:1332-828-552-75/e770b.jpg'),
(11,	'BMX freestyle',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.20mn.fr/GpblGFu-RiiCWFfRTW-K2Ck/960x614_acrobates-bmx-freestyle-retrouvent-souvent-tete-envers'),
(12,	'BMX racing',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/bgzkchcwlgthx5akrgbf'),
(13,	'Mountain bike (VTT)',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.hardloop.com/image/upload/v1662542815/medium_article_710_les_6_meilleures_chaussures_de_vtt_3a47de390f.jpg'),
(14,	'Escrime',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2022/07/19/12/escrime-comment-les-francais-apprivoisent-leurs-armes.jpg?VersionId=Mw31AogdDUwVLuCaVdxMozm9kito7TTP'),
(15,	'Football',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.lamontagne.fr/USmPhFYCCGpBwc_b8e9cGsmWpgn14oos_FWTNudcq2Y/fit/657/438/sm/0/bG9jYWw6Ly8vMDAvMDAvMDYvNjQvOTgvMjAwMDAwNjY0OTg1Nw.jpg'),
(16,	'Golf',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://d34oo5x54o72bd.cloudfront.net/app/uploads/2022/03/22.TPCToronto-RoadTo-1646245503.jpg'),
(17,	'Gymnastique artistique',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5230517627524!2d2.3575748754163577!3d48.92447859605481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e0!3m2!1sfr!2sfr!4v1709717012708!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.freepik.com/photos-gratuite/gymnaste-feminine-faisant-tour-complique-poutre-equilibre-gymnastique-dans-arene-professionnelle_654080-2012.jpg'),
(18,	'Gymnastique rythmique',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/GettyImages-592331254-Gymnastique-rythmique-scaled-1.jpg?x-oss-process=image/resize,w_2560,h_1533,m_lfit/format,jpeg'),
(19,	'Trampoline',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://france-trampoline.com/img/cms/trampoline-judges-sydney-olympics.jpg'),
(20,	'Haltérophilie',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/gdwgvjhw5qffboe6rj3x'),
(21,	'Handball',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/v1672777039/primary/xdtv9pihfbllmtnilbgo'),
(22,	'Hockey',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://t3.ftcdn.net/jpg/04/48/82/16/360_F_448821641_1XhPlbKPzmclT7aUOXUdrsSQSfBoOw7c.jpg'),
(23,	'Judo',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.freepik.com/photos-gratuite/deux-judokas-combattant-hommes_155003-10219.jpg'),
(24,	'Lutte',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://media.istockphoto.com/id/493736078/fr/photo/freestyle-lutteur-jeter.jpg?s=612x612&w=0&k=20&c=LJlRH0peB6QD2OAv9cOZG73XKAz29oZIKrfzNlOEjlA='),
(25,	'Pentathlon moderne',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/kdkzhjk6mximsecalspa'),
(26,	'Rugby',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_16-9_760/f_auto/v1538355600/primary/evncyirnkbpvrtkjlhtt'),
(27,	'Natation',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.lequipe.fr/img-photo-jpg/les-epreuves-de-natation-debuteront-le-24-juillet-p-lahalle-l-equipe/1500000001518505/0:0,1994:1329-1200-800-75/0e259.jpg'),
(28,	'Natation artistique',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://mobile-img.lpcdn.ca/lpca/924x/r3996/f22f72fdcf96397e89887a3d6aaf3f1d.jpeg'),
(29,	'Natation marathon',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5246318404293!2d2.5011163754163785!3d48.92444849605689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613abbd043abd%3A0x58079046d869e446!2sMaison%20de%20Hugo!5e0!3m2!1sfr!2sfr!4v1709717147823!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://www.guide-piscine.fr/medias/image/marathon-de-natation-17982-1200-800.jpg'),
(30,	'Plongeon',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5246318404293!2d2.5011163754163785!3d48.92444849605689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613abbd043abd%3A0x58079046d869e446!2sMaison%20de%20Hugo!5e0!3m2!1sfr!2sfr!4v1709717147823!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/GettyImages-82403119-Plongeon.jpg?x-oss-process=image/resize,w_2560,h_1707,m_lfit/format,jpeg'),
(31,	'Waterpolo',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5246318404293!2d2.5011163754163785!3d48.92444849605689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613abbd043abd%3A0x58079046d869e446!2sMaison%20de%20Hugo!5e0!3m2!1sfr!2sfr!4v1709717147823!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://olympique.ca/wp-content/uploads/sites/2/2011/08/water-polo13.jpg?quality=100'),
(32,	'Sports équestres',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5246318404293!2d2.5011163754163785!3d48.92444849605689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613abbd043abd%3A0x58079046d869e446!2sMaison%20de%20Hugo!5e0!3m2!1sfr!2sfr!4v1709717147823!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_16-9_640/f_auto/v1668617609/primary/lkpwxvxdpgu0vtcmmnrm'),
(33,	'Taekwondo',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5246318404293!2d2.5011163754163785!3d48.92444849605689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613abbd043abd%3A0x58079046d869e446!2sMaison%20de%20Hugo!5e0!3m2!1sfr!2sfr!4v1709717147823!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/GettyImages-150142201-Taekwondo-scaled.jpg?x-oss-process=image/resize,w_2560,h_1853,m_lfit/format,jpeg'),
(34,	'Tennis',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4255836630928!2d2.2697880754095903!3d48.831020402633676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67075c29534bd%3A0xd0c21c72198a29f4!2sStade%20Suzanne%20Lenglen!5e0!3m2!1sfr!2sfr!4v1709717263249!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/g8gainosyzqpn9xalpkj'),
(35,	'Tennis de table',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_w860/t_s_16_9_g_auto/f_auto/primary/hqdxr9ftodtueweu2rkh'),
(36,	'Tir',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/GettyImages-149434998-Tir-scaled.jpg?x-oss-process=image/resize,w_2560,h_1642,m_lfit/format,jpeg'),
(37,	'Tir à l’arc',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/GettyImages-588663946-Tir-a-larc.jpg?x-oss-process=image/resize,w_2560,h_1623,m_lfit/format,jpeg'),
(38,	'Triathlon',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025259!2d2.2919063755159947!3d48.858373600708894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709646612902!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/GettyImages-82455054-Triathlon-scaled.jpg?x-oss-process=image/resize,w_2560,h_1615,m_lfit/format,jpeg'),
(39,	'Voile',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1977238950967!2d2.2532526754099425!3d48.83536710232787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9680284d43%3A0xb48e2cb10a362d5a!2sStade%20Pierre%20de%20Coubertin!5e0!3m2!1sfr!2sfr!4v1709716947346!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/Jeux-Olympiques-de-Tokyo-2020-_-voile-scaled-1.jpg?x-oss-process=image/resize,w_2560,h_1329,m_lfit/format,jpeg'),
(40,	'Volleyball',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1977238950967!2d2.2532526754099425!3d48.83536710232787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9680284d43%3A0xb48e2cb10a362d5a!2sStade%20Pierre%20de%20Coubertin!5e0!3m2!1sfr!2sfr!4v1709716947346!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/xujb7vin6mjo7rmzzibf'),
(41,	'Volleyball de plage',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1977238950967!2d2.2532526754099425!3d48.83536710232787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9680284d43%3A0xb48e2cb10a362d5a!2sStade%20Pierre%20de%20Coubertin!5e0!3m2!1sfr!2sfr!4v1709716947346!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/Beach-volley.jpeg?x-oss-process=image/resize,w_2521,h_1663,m_lfit/format,jpeg'),
(42,	'Breaking',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1977238950967!2d2.2532526754099425!3d48.83536710232787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9680284d43%3A0xb48e2cb10a362d5a!2sStade%20Pierre%20de%20Coubertin!5e0!3m2!1sfr!2sfr!4v1709716947346!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl/f_auto/v1683373144/primary/govp7qcb8aqmipnnm73i'),
(43,	'Escalade sportive',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1977238950967!2d2.2532526754099425!3d48.83536710232787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9680284d43%3A0xb48e2cb10a362d5a!2sStade%20Pierre%20de%20Coubertin!5e0!3m2!1sfr!2sfr!4v1709716947346!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/1332284020-scaled.jpeg?x-oss-process=image/resize,w_1000,h_1000,m_lfit/format,jpeg'),
(44,	'Skateboard',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1977238950967!2d2.2532526754099425!3d48.83536710232787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9680284d43%3A0xb48e2cb10a362d5a!2sStade%20Pierre%20de%20Coubertin!5e0!3m2!1sfr!2sfr!4v1709716947346!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2022/05/Jeux-olympiques-de-Tokyo-2020-_-Skateboard-Park-scaled.jpg'),
(45,	'Surf',	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1977238950967!2d2.2532526754099425!3d48.83536710232787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a9680284d43%3A0xb48e2cb10a362d5a!2sStade%20Pierre%20de%20Coubertin!5e0!3m2!1sfr!2sfr!4v1709716947346!5m2!1sfr!2sfr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade',	'https://medias.paris2024.org/uploads/2020/11/GettyImages-473651012-scaled-1.jpg?x-oss-process=image/resize,w_2560,h_1244,m_lfit/format,jpeg')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name_sport` = VALUES(`name_sport`);

DROP TABLE IF EXISTS `athletes`;
CREATE TABLE `athletes` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `id_epreuve` tinyint(3) unsigned,
  `country` VARCHAR(3),
  `name_athlete` VARCHAR(100),
  `medaille` VARCHAR(50),
  `best_result` VARCHAR(100),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_epreuve`) REFERENCES `epreuves`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `athletes` (`id`, `id_epreuve`, `country`,`name_athlete`, `medaille`, `best_result`) VALUES
    (1, 7, 'NED', 'Sifan Hassan', 'Or', '29:55.32'),
    (2, 7, 'BRN', 'Kalkidan Gezaegnhe', 'Argent', '29:56.18'),
    (3, 7, 'ETH', 'Letesenbet Gidey', 'Bronze', '29:56.18'),
    (4, 1, 'ITA', 'Lamont Marcell Jacobs', 'Or', '9.80'),
    (5, 1, 'USA', 'Fred Kerley', 'Argent', '9.84'),
    (6, 1, 'CAN', 'Andre De Grasse', 'Bronze', '9.89'),
    (7, 9, 'JAM', 'Hansle Parchment', 'Or', '13.04'),
    (8, 9, 'USA', 'Grant Holloway', 'Argent', '13.09'),
    (9, 9, 'JAM', 'Ronald Levy', 'Bronze', '13.10')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name_athlete` = VALUES(`name_athlete`);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifiant` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `identifiant`, `password`) VALUES
(1,	'admin',	'$2a$12$96NJW0zoD56e1rqQxMIyQO2xw.3Dd26wRiAkPSQEFWrF4nzMu1I.S')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `identifiant` = VALUES(`identifiant`), `password` = VALUES(`password`);

-- 2024-03-05 14:48:23
