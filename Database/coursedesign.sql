/*
 Navicat MySQL Data Transfer

 Source Server         : chen
 Source Server Type    : MySQL
 Source Server Version : 50637
 Source Host           : localhost:3306
 Source Schema         : coursedesign

 Target Server Type    : MySQL
 Target Server Version : 50637
 File Encoding         : 65001

 Date: 24/09/2017 22:50:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for attention
-- ----------------------------
DROP TABLE IF EXISTS `attention`;
CREATE TABLE `attention`  (
  `userid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户数据库ID',
  `newsid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '新闻数据库ID',
  PRIMARY KEY (`userid`, `newsid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of attention
-- ----------------------------
INSERT INTO `attention` VALUES ('1', '170922162456191');
INSERT INTO `attention` VALUES ('1', '170922170343108');
INSERT INTO `attention` VALUES ('1', '170922172707700');
INSERT INTO `attention` VALUES ('1', '170924155325201');
INSERT INTO `attention` VALUES ('1', '170924220917291');
INSERT INTO `attention` VALUES ('2', '170924152531042');
INSERT INTO `attention` VALUES ('2', '170924152706767');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `newsid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `thumbnail_pic_s` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `thumbnail_pic_s02` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `thumbnail_pic_s03` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`newsid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('170922162456191', '等她长大也许她就是下一个杨幂和赵丽颖', '遇见的都是幸运', '2017-09-22 16:24', 'https://00.imgmini.eastday.com/mobile/20170922/20170922162456_d41d8cd98f00b204e9800998ecf8427e_1.jpeg', 'https://00.imgmini.eastday.com/mobile/20170922/20170922162456_d41d8cd98f00b204e9800998ecf8427e_2.jpeg', 'https://00.imgmini.eastday.com/mobile/20170922/20170922162456_d41d8cd98f00b204e9800998ecf8427e_3.jpeg');
INSERT INTO `news` VALUES ('170922170343108', '印尼日惹民众庆祝新年 民众抬羊入海祭祀', '环球网', '2017-09-22 17:03', 'https://06.imgmini.eastday.com/mobile/20170922/20170922170343_09a0cfd53ad7e927040fc223ec193f19_1.jpeg', 'https://06.imgmini.eastday.com/mobile/20170922/20170922170343_09a0cfd53ad7e927040fc223ec193f19_2.jpeg', 'https://06.imgmini.eastday.com/mobile/20170922/20170922170343_09a0cfd53ad7e927040fc223ec193f19_3.jpeg');
INSERT INTO `news` VALUES ('170922172707700', '法国抗议劳动法活动愈演愈烈 巴黎街头一片“混战”', '环球网', '2017-09-22 17:27', 'https://03.imgmini.eastday.com/mobile/20170922/20170922172707_59130ec4c84bc3c618fd89f7339691c5_1.jpeg', 'https://03.imgmini.eastday.com/mobile/20170922/20170922172707_59130ec4c84bc3c618fd89f7339691c5_2.jpeg', 'https://03.imgmini.eastday.com/mobile/20170922/20170922172707_59130ec4c84bc3c618fd89f7339691c5_3.jpeg');
INSERT INTO `news` VALUES ('170924152531042', '大鹏要揍影评人，明天回北京寻人启事，见面扇大嘴巴？！', '巴塞电影', '2017-09-24 15:25', 'https://07.imgmini.eastday.com/mobile/20170924/20170924152531_0ec3d18d06de2323352458551b2f4052_1.jpeg', 'https://07.imgmini.eastday.com/mobile/20170924/20170924152531_0ec3d18d06de2323352458551b2f4052_2.jpeg', 'https://07.imgmini.eastday.com/mobile/20170924/20170924152531_0ec3d18d06de2323352458551b2f4052_3.jpeg');
INSERT INTO `news` VALUES ('170924152706767', '时装周出发前迪丽热巴，抵达后迪丽懵巴，网友：鹿晗将抵达', '博乐之声', '2017-09-24 15:27', 'https://08.imgmini.eastday.com/mobile/20170924/2040984a83a24a2e62c6d99a2b29542f.jpeg', 'https://08.imgmini.eastday.com/mobile/20170924/f4d43ae5cd0ad317c722b07081109e71.jpeg', 'https://08.imgmini.eastday.com/mobile/20170924/62587b77fe930d2f44586efd6b952811.jpeg');
INSERT INTO `news` VALUES ('170924155325201', '中巴军演被忽略的细节，主力装备只对巴铁开放，俄都没这待遇', '核子猎潜艇', '2017-09-24 15:53', 'https://07.imgmini.eastday.com/mobile/20170924/c86e82d72438c4e36618f4deba014ef9.jpeg', 'https://07.imgmini.eastday.com/mobile/20170924/8fa77861e9578ff278529d2396e3ba0b.jpeg', 'https://07.imgmini.eastday.com/mobile/20170924/c0c63610318a6a4bad41092759f758a3.jpeg');
INSERT INTO `news` VALUES ('170924220917291', '盘点今年豆瓣评分前五和后五的国产电视剧，第一名实至名归！', '小资源大分享', '2017-09-24 22:09', 'https://03.imgmini.eastday.com/mobile/20170924/20170924220917_e03581b486531a03b538931c7f714d1f_1.jpeg', 'https://03.imgmini.eastday.com/mobile/20170924/20170924220917_e03581b486531a03b538931c7f714d1f_2.jpeg', 'https://03.imgmini.eastday.com/mobile/20170924/20170924220917_e03581b486531a03b538931c7f714d1f_3.jpeg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户数据库ID',
  `acc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户登录账号',
  `psw` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户登录密码',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户网站昵称',
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户性别',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户邮箱',
  `msg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户个人简介',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'chen', 'chen', 'chen', 'm', 'chen08210011@gmail.com', '巴拉巴拉');

SET FOREIGN_KEY_CHECKS = 1;
