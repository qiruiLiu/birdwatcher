const BIRDS = [
  {id:1,nameCn:"白头鹎",nameLatin:"Pycnonotus sinensis",protect:"国家三有保护动物",
   color:[120,140,80],diet:"杂食，喜食浆果、嫩叶与昆虫",habit:"常结小群活动于低山丘陵及平原疏林、公园",breeding:"3—8月繁殖，营巢于灌木或低树，每窝3—5卵",
   habitats:[{lat:30.57,lng:104.07,name:"成都浣花溪公园"},{lat:31.23,lng:121.47,name:"上海世纪公园"},{lat:23.13,lng:113.26,name:"广州越秀公园"}]},
  {id:2,nameCn:"麻雀",nameLatin:"Passer montanus",protect:"国家三有保护动物",
   color:[150,110,70],diet:"杂食，以谷物、草籽和昆虫为主",habit:"伴人而居，常见于村落、城镇与农田",breeding:"3—7月繁殖，营巢于屋檐、墙缝或树洞",
   habitats:[{lat:39.90,lng:116.40,name:"北京天坛公园"},{lat:34.27,lng:108.95,name:"西安城墙下"},{lat:45.75,lng:126.63,name:"哈尔滨中央大街"}]},
  {id:3,nameCn:"喜鹊",nameLatin:"Pica pica",protect:"国家三有保护动物",
   color:[60,60,70],diet:"杂食性广，食昆虫、小型动物、果实与垃圾",habit:"广泛分布于城乡开阔地带，营巢于高大乔木",breeding:"1—4月早春繁殖，巢为大型球状树枝巢",
   habitats:[{lat:39.90,lng:116.40,name:"北京奥森公园"},{lat:36.06,lng:120.38,name:"青岛海边"},{lat:30.27,lng:120.15,name:"杭州西溪湿地"}]},
  {id:4,nameCn:"普通翠鸟",nameLatin:"Alcedo atthis",protect:"国家三有保护动物",
   color:[40,120,160],diet:"以小鱼、水生昆虫及虾为食",habit:"栖息于溪流、池塘、湖泊等静水或缓流水域",breeding:"4—7月繁殖，在岸边土崖掘洞营巢",
   habitats:[{lat:30.27,lng:120.15,name:"杭州西溪湿地"},{lat:28.68,lng:115.89,name:"鄱阳湖湿地"},{lat:24.48,lng:118.09,name:"厦门筼筜湖"}]},
  {id:5,nameCn:"白鹭",nameLatin:"Egretta garzetta",protect:"国家三有保护动物",
   color:[230,230,220],diet:"以鱼、虾、蛙、水生昆虫为食",habit:"栖息于湿地、水田、河湖浅滩，常成群觅食",breeding:"4—9月繁殖，与其它鹭类混群营巢于树林或芦苇丛",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"},{lat:29.05,lng:111.47,name:"洞庭湖"},{lat:22.54,lng:113.93,name:"珠海淇澳岛"}]},
  {id:6,nameCn:"戴胜",nameLatin:"Upupa epops",protect:"国家三有保护动物",
   color:[200,140,70],diet:"以地面昆虫、蠕虫及幼虫为主",habit:"栖息于开阔林地、果园、农田及草地",breeding:"5—7月繁殖，营巢于树洞或墙缝，巢常具异味",
   habitats:[{lat:34.27,lng:108.95,name:"西安郊外"},{lat:40.08,lng:116.60,name:"北京怀柔"},{lat:36.67,lng:117.00,name:"济南南部山区"}]},
  {id:7,nameCn:"珠颈斑鸠",nameLatin:"Spilopelia chinensis",protect:"国家三有保护动物",
   color:[140,120,100],diet:"以种子、果实、谷物为食",habit:"常见于平原、村落及城市公园，常地面觅食",breeding:"全年可繁殖，营巢于树上或灌丛，巢简陋",
   habitats:[{lat:23.13,lng:113.26,name:"广州白云山"},{lat:22.27,lng:113.58,name:"深圳莲花山"},{lat:31.23,lng:121.47,name:"上海世纪公园"}]},
  {id:8,nameCn:"红嘴蓝鹊",nameLatin:"Urocissa erythroryncha",protect:"国家三有保护动物",
   color:[70,90,150],diet:"杂食，食昆虫、果实、小型脊椎动物",habit:"栖息于山地阔叶林、针阔混交林，常成小群",breeding:"4—7月繁殖，营巢于乔木侧枝",
   habitats:[{lat:30.57,lng:103.93,name:"成都青城山"},{lat:27.72,lng:101.71,name:"四川稻城"},{lat:25.04,lng:102.72,name:"云南昆明西山"}]},
  {id:9,nameCn:"黑枕黄鹂",nameLatin:"Oriolus chinensis",protect:"国家三有保护动物",
   color:[220,180,40],diet:"以昆虫、果实为食",habit:"栖息于阔叶林、公园及果园，鸣声清亮婉转",breeding:"5—7月繁殖，营巢于高大乔木水平枝",
   habitats:[{lat:30.27,lng:120.15,name:"杭州灵隐寺周边"},{lat:28.01,lng:120.65,name:"温州楠溪江"},{lat:26.08,lng:119.30,name:"福州森林公园"}]},
  {id:10,nameCn:"棕背伯劳",nameLatin:"Lanius schach",protect:"国家三有保护动物",
   color:[160,90,60],diet:"以昆虫、小型鸟类、蜥蜴为食，有挂食习性",habit:"栖息于开阔灌丛、农田及草地，喜停栖于高处",breeding:"4—7月繁殖，营巢于灌丛或矮树",
    habitats:[{lat:22.27,lng:113.58,name:"深圳湾沿岸"},{lat:23.13,lng:113.26,name:"广州大学城"},{lat:20.05,lng:110.32,name:"海口东寨港"}]},
  {id:11,nameCn:"白颊噪鹛",nameLatin:"Garrulax sannio",protect:"国家三有保护动物",
   color:[130,100,75],diet:"杂食，以昆虫、果实和种子为食",habit:"栖息于灌丛、竹林和林缘地带，常成小群在地面活动",breeding:"4—7月繁殖，营巢于灌丛或低树",
   habitats:[{lat:30.57,lng:103.93,name:"成都青城山"},{lat:25.04,lng:102.72,name:"云南昆明西山"},{lat:22.82,lng:108.37,name:"广西南宁"}]},
  {id:12,nameCn:"乌鸫",nameLatin:"Turdus mandarinus",protect:"国家三有保护动物",
   color:[55,45,40],diet:"杂食，喜食蚯蚓、昆虫和果实",habit:"常见于草地、公园和林地，地面觅食，鸣声婉转",breeding:"3—7月繁殖，营巢于乔木或建筑",
   habitats:[{lat:39.90,lng:116.40,name:"北京天坛公园"},{lat:31.23,lng:121.47,name:"上海世纪公园"},{lat:30.57,lng:104.07,name:"成都浣花溪公园"}]},
  {id:13,nameCn:"鸽子",nameLatin:"Columba livia",protect:"非保护（家鸽）",
   color:[120,130,140],diet:"以谷物、种子为食",habit:"伴人而居，常见于城市广场、农田和岩壁",breeding:"全年可繁殖，营巢于建筑缝隙或岩洞",
   habitats:[{lat:39.90,lng:116.40,name:"北京广场"},{lat:31.23,lng:121.47,name:"上海外滩"},{lat:23.13,lng:113.26,name:"广州越秀公园"}]},
  {id:14,nameCn:"夜鹭",nameLatin:"Nycticorax nycticorax",protect:"国家三有保护动物",
   color:[100,110,115],diet:"以鱼、虾、蛙和水生昆虫为食",habit:"栖息于湿地、河流和湖泊，夜行性，白天常缩颈停栖",breeding:"4—8月繁殖，与其它鹭类混群营巢",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"},{lat:29.05,lng:111.47,name:"洞庭湖"},{lat:22.54,lng:113.93,name:"珠海淇澳岛"}]},
  {id:15,nameCn:"四声杜鹃",nameLatin:"Cuculus micropterus",protect:"国家三有保护动物",
   color:[110,100,90],diet:"以昆虫为主，尤喜毛虫",habit:"栖息于林地和灌丛，鸣声四声一度，巢寄生",breeding:"5—7月繁殖，寄生喜鹊、黑卷尾等鸟巢",
   habitats:[{lat:30.27,lng:120.15,name:"杭州西溪湿地"},{lat:30.57,lng:104.07,name:"成都浣花溪公园"},{lat:39.90,lng:116.40,name:"北京奥森公园"}]},
  {id:16,nameCn:"绿头鸭",nameLatin:"Anas platyrhynchos",protect:"国家三有保护动物",
   color:[40,120,60],diet:"杂食，以水草、昆虫和谷物为食",habit:"栖息于湖泊、河流和湿地，常见于城市水域",breeding:"3—6月繁殖，营巢于水边草丛",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"},{lat:29.05,lng:111.47,name:"洞庭湖"},{lat:39.99,lng:116.30,name:"北京颐和园"}]},
  {id:17,nameCn:"斑嘴鸭",nameLatin:"Anas zonorhyncha",protect:"国家三有保护动物",
   color:[140,120,90],diet:"杂食，以水草、种子和昆虫为食",habit:"栖息于湖泊、池塘和湿地，常成群活动",breeding:"4—7月繁殖，营巢于水边草丛或地面",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"},{lat:29.05,lng:111.47,name:"洞庭湖"},{lat:30.27,lng:120.15,name:"杭州西溪湿地"}]},
  {id:18,nameCn:"凤头麦鸡",nameLatin:"Vanellus vanellus",protect:"国家三有保护动物",
   color:[80,90,120],diet:"以昆虫、蠕虫和种子为食",habit:"栖息于农田、湿地和河滩，常成小群活动",breeding:"4—6月繁殖，营巢于地面浅坑",
   habitats:[{lat:39.9,lng:116.4,name:"北京野鸭湖"}, {lat:34.27,lng:108.95,name:"西安渭河滩"}, {lat:45.75,lng:126.63,name:"哈尔滨松花江"}]},
  {id:19,nameCn:"普通鸬鹚",nameLatin:"Phalacrocorax carbo",protect:"国家三有保护动物",
   color:[50,50,55],diet:"以鱼为主食，潜水捕鱼",habit:"栖息于湖泊、河流和水库，常成群停栖于岩石或树枝",breeding:"4—6月繁殖，营巢于悬崖或树上",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"}, {lat:30.27,lng:120.15,name:"杭州千岛湖"}, {lat:39.99,lng:116.3,name:"北京颐和园"}]},
  {id:20,nameCn:"池鹭",nameLatin:"Ardeola bacchus",protect:"国家三有保护动物",
   color:[180,160,90],diet:"以鱼、虾、蛙和昆虫为食",habit:"栖息于稻田、池塘和沼泽，常单独涉水觅食",breeding:"5—7月繁殖，与其它鹭类混群营巢于树上",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"}, {lat:30.57,lng:104.07,name:"成都浣花溪公园"}, {lat:23.13,lng:113.26,name:"广州南沙湿地"}]},
  {id:21,nameCn:"灰头麦鸡",nameLatin:"Vanellus cinereus",protect:"国家三有保护动物",
   color:[90,95,100],diet:"以昆虫、螺和种子为食",habit:"栖息于河滩、农田和草地，常成对或小群活动",breeding:"4—6月繁殖，营巢于地面",
   habitats:[{lat:29.05,lng:111.47,name:"洞庭湖"}, {lat:34.27,lng:108.95,name:"西安渭河滩"}, {lat:36.06,lng:120.38,name:"青岛大沽河"}]},
  {id:22,nameCn:"白腰草鹬",nameLatin:"Tringa ochropus",protect:"国家三有保护动物",
   color:[120,115,100],diet:"以昆虫、甲壳类和蠕虫为食",habit:"栖息于溪流、沼泽和稻田，常单独或成对活动",breeding:"5—7月繁殖，营巢于树上旧巢或地面",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"}, {lat:30.27,lng:120.15,name:"杭州西溪湿地"}, {lat:22.54,lng:113.93,name:"珠海淇澳岛"}]},
  {id:23,nameCn:"红嘴鸥",nameLatin:"Chroicocephalus ridibundus",protect:"国家三有保护动物",
   color:[200,200,210],diet:"杂食，以鱼、昆虫和废弃物为食",habit:"栖息于湖泊、河流和城市水域，冬候鸟，常成大群",breeding:"4—6月繁殖，营巢于湿地地面",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"}, {lat:24.88,lng:102.83,name:"昆明滇池"}, {lat:29.05,lng:111.47,name:"洞庭湖"}]},
  {id:24,nameCn:"苍鹭",nameLatin:"Ardea cinerea",protect:"国家三有保护动物",
   color:[130,135,140],diet:"以鱼、虾、蛙和水生昆虫为食",habit:"栖息于湖泊、河流和湿地，常长时间静立水中伺机捕食",breeding:"4—6月繁殖，群巢于高大乔木或芦苇丛",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"}, {lat:39.99,lng:116.3,name:"北京颐和园"}, {lat:30.27,lng:120.15,name:"杭州西溪湿地"}]},
  {id:25,nameCn:"赤麻鸭",nameLatin:"Tadorna ferruginea",protect:"国家三有保护动物",
   color:[220,150,60],diet:"以水草、种子和昆虫为食",habit:"栖息于湖泊、河流和湿地，冬季常见",breeding:"4—6月繁殖，营巢于地面或土洞",
   habitats:[{lat:39.9,lng:116.4,name:"北京野鸭湖"}, {lat:36.67,lng:117.0,name:"济南黄河"}, {lat:28.68,lng:115.89,name:"鄱阳湖湿地"}]},
  {id:26,nameCn:"鸳鸯",nameLatin:"Aix galericulata",protect:"国家二级保护动物",
   color:[200,80,60],diet:"杂食，以坚果、昆虫和水草为食",habit:"栖息于山地溪流和湖泊，营巢于树洞",breeding:"4—6月繁殖，营巢于水边树洞",
   habitats:[{lat:45.75,lng:126.63,name:"哈尔滨鸳鸯湖"}, {lat:30.27,lng:120.15,name:"杭州西溪湿地"}, {lat:27.72,lng:101.71,name:"四川稻城"}]},
  {id:27,nameCn:"红隼",nameLatin:"Falco tinnunculus",protect:"国家二级保护动物",
   color:[170,120,80],diet:"以小型鼠类、昆虫和蜥蜴为食",habit:"栖息于开阔地带，常悬停空中伺机捕食",breeding:"4—6月繁殖，营巢于岩缝或占他鸟旧巢",
   habitats:[{lat:39.9,lng:116.4,name:"北京百望山"}, {lat:34.27,lng:108.95,name:"西安秦岭"}, {lat:36.67,lng:117.0,name:"济南南部山区"}]},
  {id:28,nameCn:"黑鸢",nameLatin:"Milvus migrans",protect:"国家二级保护动物",
   color:[80,75,70],diet:"以鱼、小型动物和腐肉为食",habit:"栖息于河流、湖泊和海岸附近，常高空盘旋",breeding:"3—5月繁殖，营巢于高大乔木",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"}, {lat:39.9,lng:116.4,name:"北京百望山"}, {lat:22.54,lng:113.93,name:"珠海淇澳岛"}]},
  {id:29,nameCn:"大斑啄木鸟",nameLatin:"Dendrocopos major",protect:"国家三有保护动物",
   color:[80,80,70],diet:"以树干昆虫和幼虫为食",habit:"栖息于阔叶林和针阔混交林，常攀树干敲击觅食",breeding:"4—6月繁殖，凿树洞营巢",
   habitats:[{lat:40.08,lng:116.6,name:"北京怀柔"}, {lat:30.57,lng:103.93,name:"成都青城山"}, {lat:36.67,lng:117.0,name:"济南南部山区"}]},
  {id:30,nameCn:"大杜鹃",nameLatin:"Cuculus canorus",protect:"国家三有保护动物",
   color:[110,105,95],diet:"以昆虫为主，尤喜毛虫",habit:"栖息于林地和灌丛，巢寄生，鸣声两声一度",breeding:"5—7月繁殖，寄生多种小型雀鸟巢",
   habitats:[{lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:30.57,lng:104.07,name:"成都浣花溪公园"}, {lat:27.72,lng:101.71,name:"四川稻城"}]},
  {id:31,nameCn:"山斑鸠",nameLatin:"Streptopelia orientalis",protect:"国家三有保护动物",
   color:[130,110,90],diet:"以种子、果实和谷物为食",habit:"栖息于山地林地、农田和公园，常成对活动",breeding:"4—9月繁殖，营巢于树上，巢简陋",
   habitats:[{lat:40.08,lng:116.6,name:"北京怀柔"}, {lat:30.57,lng:103.93,name:"成都青城山"}, {lat:36.67,lng:117.0,name:"济南南部山区"}]},
  {id:32,nameCn:"灰喜鹊",nameLatin:"Cyanopica cyanus",protect:"国家三有保护动物",
   color:[90,110,150],diet:"杂食，以昆虫、果实和种子为食",habit:"栖息于林地、公园和农田，常成小群活动",breeding:"4—6月繁殖，营巢于乔木侧枝",
   habitats:[{lat:34.27,lng:108.95,name:"西安城墙下"}, {lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:36.67,lng:117.0,name:"济南大明湖"}]},
  {id:33,nameCn:"灰头绿啄木鸟",nameLatin:"Picus canus",protect:"国家三有保护动物",
   color:[100,120,70],diet:"以蚂蚁和树干昆虫为食",habit:"栖息于阔叶林和竹林，常地面觅食蚂蚁",breeding:"4—6月繁殖，凿树洞营巢",
   habitats:[{lat:30.57,lng:103.93,name:"成都青城山"}, {lat:40.08,lng:116.6,name:"北京怀柔"}, {lat:25.04,lng:102.72,name:"云南昆明西山"}]},
  {id:34,nameCn:"蓝翡翠",nameLatin:"Halcyon pileata",protect:"国家三有保护动物",
   color:[40,80,160],diet:"以鱼、虾和水生昆虫为食",habit:"栖息于溪流、河流和山塘，常停栖于枝头俯冲捕鱼",breeding:"5—7月繁殖，营巢于岸边土崖掘洞",
   habitats:[{lat:24.48,lng:118.09,name:"厦门筼筜湖"}, {lat:23.13,lng:113.26,name:"广州从化溪流"}, {lat:28.01,lng:120.65,name:"温州楠溪江"}]},
  {id:35,nameCn:"三道眉草鹀",nameLatin:"Emberiza tristrami",protect:"国家三有保护动物",
   color:[120,100,70],diet:"以种子和昆虫为食",habit:"栖息于山地灌丛和草坡，常地面觅食",breeding:"5—7月繁殖，营巢于灌丛地面",
   habitats:[{lat:40.08,lng:116.6,name:"北京怀柔"}, {lat:30.57,lng:103.93,name:"成都青城山"}, {lat:36.67,lng:117.0,name:"济南南部山区"}]},
  {id:36,nameCn:"北红尾鸲",nameLatin:"Phoenicurus auroreus",protect:"国家三有保护动物",
   color:[170,80,60],diet:"以昆虫和少量果实为食",habit:"栖息于林地边缘、灌丛和村庄，常停栖于低处",breeding:"5—7月繁殖，营巢于墙缝、树洞或石隙",
   habitats:[{lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:30.57,lng:104.07,name:"成都浣花溪公园"}, {lat:34.27,lng:108.95,name:"西安秦岭"}]},
  {id:37,nameCn:"大山雀",nameLatin:"Parus minor",protect:"国家三有保护动物",
   color:[60,70,50],diet:"以昆虫和种子为食",habit:"栖息于林地、果园和公园，常成小群活动",breeding:"3—8月繁殖，营巢于树洞或人工巢箱",
   habitats:[{lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:31.23,lng:121.47,name:"上海世纪公园"}, {lat:30.57,lng:104.07,name:"成都浣花溪公园"}]},
  {id:38,nameCn:"暗绿绣眼鸟",nameLatin:"Zosterops japonicus",protect:"国家三有保护动物",
   color:[130,150,90],diet:"以昆虫、花蜜和浆果为食",habit:"栖息于阔叶林、果园和公园，常成群活动",breeding:"3—8月繁殖，营巢于枝杈，巢精巧悬碗状",
   habitats:[{lat:23.13,lng:113.26,name:"广州白云山"}, {lat:22.27,lng:113.58,name:"深圳莲花山"}, {lat:31.23,lng:121.47,name:"上海世纪公园"}]},
  {id:39,nameCn:"树鹨",nameLatin:"Anthus trivialis",protect:"国家三有保护动物",
   color:[110,115,90],diet:"以昆虫和种子为食",habit:"栖息于开阔林地、草地和农田，常地面行走觅食",breeding:"5—7月繁殖，营巢于地面草丛",
   habitats:[{lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:45.75,lng:126.63,name:"哈尔滨松花江"}, {lat:34.27,lng:108.95,name:"西安秦岭"}]},
  {id:40,nameCn:"灰椋鸟",nameLatin:"Spodiopsar cineraceus",protect:"国家三有保护动物",
   color:[100,100,105],diet:"杂食，以昆虫和果实为食",habit:"栖息于林地、农田和城市，常成大群活动",breeding:"4—6月繁殖，营巢于树洞或岩缝",
   habitats:[{lat:39.9,lng:116.4,name:"北京天坛公园"}, {lat:31.23,lng:121.47,name:"上海世纪公园"}, {lat:36.06,lng:120.38,name:"青岛海边"}]},
  {id:41,nameCn:"画眉",nameLatin:"Garrulax canorus",protect:"国家二级保护动物",
   color:[130,100,70],diet:"杂食，以昆虫和果实为食",habit:"栖息于灌丛和竹林，鸣声婉转动听，常藏匿于密灌",breeding:"3—7月繁殖，营巢于灌丛或低树",
   habitats:[{lat:30.57,lng:103.93,name:"成都青城山"}, {lat:25.04,lng:102.72,name:"云南昆明西山"}, {lat:30.57,lng:104.07,name:"成都浣花溪公园"}]},
  {id:42,nameCn:"白鹡鸰",nameLatin:"Motacilla alba",protect:"国家三有保护动物",
   color:[90,90,95],diet:"以昆虫为主食",habit:"栖息于水边、农田和城市，常地面行走，尾上下摆动",breeding:"3—8月繁殖，营巢于石缝或建筑缝隙",
   habitats:[{lat:39.9,lng:116.4,name:"北京颐和园"}, {lat:31.23,lng:121.47,name:"上海外滩"}, {lat:23.13,lng:113.26,name:"广州白云山"}]},
  {id:43,nameCn:"红头长尾山雀",nameLatin:"Aegithalos concinnus",protect:"国家三有保护动物",
   color:[170,60,60],diet:"以昆虫和花蜜为食",habit:"栖息于山地阔叶林和灌丛，常成小群在枝间跳跃",breeding:"3—5月繁殖，营巢于枝杈，巢卵形侧开口",
   habitats:[{lat:30.57,lng:103.93,name:"成都青城山"}, {lat:25.04,lng:102.72,name:"云南昆明西山"}, {lat:27.72,lng:101.71,name:"四川稻城"}]},
  {id:44,nameCn:"红胁蓝尾鸲",nameLatin:"Tarsiger cyanurus",protect:"国家三有保护动物",
   color:[60,80,150],diet:"以昆虫和少量果实为食",habit:"栖息于针阔混交林和灌丛，冬候鸟，常地面觅食",breeding:"5—7月繁殖，营巢于地面或灌丛",
   habitats:[{lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:45.75,lng:126.63,name:"哈尔滨松花江"}, {lat:40.08,lng:116.6,name:"北京怀柔"}]},
  {id:45,nameCn:"金翅雀",nameLatin:"Chloris sinica",protect:"国家三有保护动物",
   color:[200,170,60],diet:"以种子和昆虫为食",habit:"栖息于林地、果园和公园，常成小群活动",breeding:"3—8月繁殖，营巢于乔木侧枝",
   habitats:[{lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:31.23,lng:121.47,name:"上海世纪公园"}, {lat:30.57,lng:104.07,name:"成都浣花溪公园"}]},
  {id:46,nameCn:"领雀嘴鹎",nameLatin:"Spizixos semitorques",protect:"国家三有保护动物",
   color:[100,130,70],diet:"杂食，以果实、花和昆虫为食",habit:"栖息于山地阔叶林和灌丛，常成小群活动",breeding:"4—7月繁殖，营巢于灌丛或矮树",
   habitats:[{lat:30.57,lng:103.93,name:"成都青城山"}, {lat:25.04,lng:102.72,name:"云南昆明西山"}, {lat:30.57,lng:104.07,name:"成都浣花溪公园"}]},
  {id:47,nameCn:"鹊鸲",nameLatin:"Copsychus saularis",protect:"国家三有保护动物",
   color:[80,80,80],diet:"以昆虫为主，兼食果实",habit:"栖息于村落、果园和公园，鸣声多变动听",breeding:"3—8月繁殖，营巢于树洞、墙缝或枝杈",
   habitats:[{lat:23.13,lng:113.26,name:"广州白云山"}, {lat:22.27,lng:113.58,name:"深圳莲花山"}, {lat:20.05,lng:110.32,name:"海口东寨港"}]},
  {id:48,nameCn:"黑尾蜡嘴雀",nameLatin:"Eophona migratoria",protect:"国家三有保护动物",
   color:[80,75,65],diet:"以种子、果实和昆虫为食",habit:"栖息于阔叶林和公园，常成小群活动",breeding:"5—7月繁殖，营巢于乔木侧枝",
   habitats:[{lat:39.9,lng:116.4,name:"北京奥森公园"}, {lat:40.08,lng:116.6,name:"北京怀柔"}, {lat:36.67,lng:117.0,name:"济南南部山区"}]},
  {id:49,nameCn:"黑脸噪鹛",nameLatin:"Garrulax perspicillatus",protect:"国家三有保护动物",
   color:[90,85,75],diet:"杂食，以昆虫和果实为食",habit:"栖息于灌丛、竹林和林缘，常成小群在地面活动",breeding:"3—8月繁殖，营巢于灌丛或低树",
   habitats:[{lat:23.13,lng:113.26,name:"广州白云山"}, {lat:22.27,lng:113.58,name:"深圳莲花山"}, {lat:25.04,lng:102.72,name:"云南昆明西山"}]},
  {id:50,nameCn:"黑水鸡",nameLatin:"Gallinula chloropus",protect:"国家三有保护动物",
   color:[60,60,60],diet:"以水草、昆虫和螺为食",habit:"栖息于池塘、沼泽和稻田，常在水面浮游觅食",breeding:"4—9月繁殖，营巢于水边草丛",
   habitats:[{lat:28.68,lng:115.89,name:"鄱阳湖湿地"}, {lat:30.27,lng:120.15,name:"杭州西溪湿地"}, {lat:23.13,lng:113.26,name:"广州南沙湿地"}]},
  {id:0,nameCn:"非鸟类",nameLatin:"—",protect:"—",
   color:[128,128,128],diet:"—",habit:"—",breeding:"—",
   habitats:[]}
];

const birdById = new Map(BIRDS.map(b=>[b.id,b]));

const BIRD_GROUPS = {
  "水鸟湿地": [18,19,5,14,20,21,22,23,24,25,26,16,17,50],
  "猛禽": [27,28],
  "攀禽": [4,33,6,29,30,34,15],
  "鸦鸠": [3,31,8,7,32,13],
  "鸣禽": [1,35,9,11,36,37,12,38,39,40,10,41,42,43,44,45,2,46,47,48,49],
};
const birdToGroup = {};
Object.entries(BIRD_GROUPS).forEach(([g,ids])=>ids.forEach(id=>birdToGroup[id]=g));

const ALL_PROV = ["北京","天津","上海","重庆","河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","四川","贵州","云南","西藏","陕西","甘肃","青海","内蒙古","宁夏","新疆","香港","澳门","台湾"];
const PROV_FULL = {"北京":"北京市","天津":"天津市","上海":"上海市","重庆":"重庆市","河北":"河北省","山西":"山西省","辽宁":"辽宁省","吉林":"吉林省","黑龙江":"黑龙江省","江苏":"江苏省","浙江":"浙江省","安徽":"安徽省","福建":"福建省","江西":"江西省","山东":"山东省","河南":"河南省","湖北":"湖北省","湖南":"湖南省","广东":"广东省","广西":"广西壮族自治区","海南":"海南省","四川":"四川省","贵州":"贵州省","云南":"云南省","西藏":"西藏自治区","陕西":"陕西省","甘肃":"甘肃省","青海":"青海省","内蒙古":"内蒙古自治区","宁夏":"宁夏回族自治区","新疆":"新疆维吾尔自治区","香港":"香港特别行政区","澳门":"澳门特别行政区","台湾":"台湾省"};
const SOUTH = ["广东","广西","福建","江西","湖南","浙江","江苏","上海","安徽","湖北","海南","香港","澳门","台湾"];
const SW = ["四川","重庆","云南","贵州","西藏","广西","湖南","湖北"];
const EAST = ["北京","天津","河北","山东","江苏","上海","浙江","安徽","河南","湖北","辽宁"];
const BIRD_PROVINCES = {
  1: ["上海", "江苏", "北京", "浙江", "四川", "山东", "广东", "福建", "海南", "湖南", "江西", "安徽", "重庆", "河北", "陕西", "河南", "湖北", "广西", "辽宁", "山西", "黑龙江", "香港", "天津", "云南", "贵州"],
  2: ["北京", "江苏", "上海", "山东", "浙江", "广东", "云南", "辽宁", "黑龙江", "河北", "陕西", "四川", "青海", "新疆", "江西", "福建", "西藏", "甘肃", "湖北", "河南", "湖南", "内蒙古", "山西", "安徽", "贵州", "天津", "宁夏", "吉林", "重庆", "广西", "海南", "香港"],
  3: ["北京", "江苏", "上海", "山东", "云南", "四川", "浙江", "安徽", "河北", "广东", "福建", "黑龙江", "新疆", "辽宁", "青海", "吉林", "山西", "陕西", "河南", "湖北", "西藏", "江西", "内蒙古", "贵州", "甘肃", "宁夏", "湖南", "天津", "海南", "重庆", "广西"],
  4: ["广东", "北京", "浙江", "上海", "福建", "江苏", "山东", "四川", "湖北", "云南", "安徽", "广西", "江西", "湖南", "河南", "陕西", "贵州", "海南", "河北", "山西", "西藏", "重庆", "辽宁", "吉林", "新疆", "黑龙江", "甘肃", "天津"],
  5: ["江苏", "广东", "上海", "浙江", "山东", "福建", "四川", "北京", "云南", "江西", "河北", "河南", "辽宁", "安徽", "湖北", "贵州", "陕西", "湖南", "广西", "海南", "重庆", "天津", "宁夏", "香港"],
  6: ["江苏", "上海", "北京", "云南", "山东", "海南", "四川", "河南", "浙江", "西藏", "新疆", "湖北", "甘肃", "福建", "河北", "山西", "青海", "广东", "安徽", "天津", "内蒙古", "辽宁", "贵州", "陕西", "吉林", "黑龙江", "湖南", "江西", "宁夏", "广西"],
  7: ["上海", "江苏", "北京", "广东", "四川", "浙江", "福建", "山东", "安徽", "江西", "云南", "陕西", "湖北", "天津", "湖南", "重庆", "河南", "甘肃", "河北", "山西", "海南", "贵州", "辽宁", "青海", "吉林", "广西"],
  8: ["浙江", "北京", "广东", "四川", "江苏", "福建", "湖南", "陕西", "安徽", "湖北", "江西", "广西", "重庆", "云南", "山西", "河南", "贵州", "河北", "辽宁", "海南", "甘肃", "天津", "宁夏"],
  9: ["浙江", "广东", "北京", "江苏", "上海", "山东", "河南", "四川", "贵州", "海南", "湖北", "福建", "陕西", "云南", "辽宁", "河北", "广西", "甘肃", "安徽", "湖南", "山西", "吉林", "重庆", "江西", "黑龙江", "内蒙古", "天津"],
  10: ["上海", "江苏", "广东", "浙江", "云南", "福建", "江西", "海南", "四川", "安徽", "湖北", "山东", "湖南", "北京", "贵州", "河南", "陕西", "广西", "重庆", "山西", "香港"],
  11: ["甘肃", "陕西", "四川", "重庆", "云南", "贵州", "湖北", "湖南", "广西", "广东", "福建", "浙江", "江西", "海南"],
  12: ["上海", "江苏", "北京", "广东", "浙江", "四川", "山东", "安徽", "福建", "湖北", "江西", "湖南", "重庆", "河南", "陕西", "广西", "贵州", "甘肃", "云南", "新疆", "海南", "辽宁"],
  13: ["江苏", "北京", "广东", "新疆", "上海", "山东", "浙江", "福建", "云南", "四川", "黑龙江", "甘肃", "河北", "山西", "辽宁", "青海", "内蒙古", "海南", "河南", "天津", "西藏", "江西", "湖北", "安徽", "重庆", "陕西", "贵州", "湖南", "广西", "吉林"],
  14: ["上海", "江苏", "北京", "浙江", "广东", "四川", "山东", "福建", "云南", "湖北", "河南", "安徽", "江西", "辽宁", "广西", "天津", "海南", "重庆", "西藏", "陕西", "山西", "新疆", "河北", "湖南", "吉林", "贵州"],
  15: ["北京", "天津", "上海", "重庆", "河北", "山西", "辽宁", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "陕西", "青海", "宁夏", "香港", "澳门", "台湾"],
  16: ["北京", "江苏", "广东", "浙江", "上海", "四川", "新疆", "云南", "山东", "湖北", "安徽", "河南", "广西", "河北", "青海", "内蒙古", "黑龙江", "山西", "甘肃", "贵州", "天津", "辽宁", "西藏", "陕西", "吉林", "湖南", "福建", "重庆", "江西", "宁夏", "海南"],
  17: ["浙江", "山东", "江苏", "上海", "北京", "广东", "安徽", "福建", "河北", "河南", "江西", "四川", "陕西", "山西", "湖北", "天津", "辽宁", "黑龙江", "云南", "甘肃", "内蒙古", "广西", "湖南", "贵州", "重庆", "青海", "吉林", "海南"],
  18: ["黑龙江", "吉林", "辽宁", "内蒙古", "新疆", "北京", "河北", "天津", "山东", "江苏", "青海", "甘肃", "宁夏", "河南", "山西", "陕西", "四川", "云南", "湖北", "湖南", "江西", "浙江", "广东", "广西", "海南"],
  19: ["北京", "天津", "河北", "辽宁", "山东", "江苏", "浙江", "上海", "湖北", "湖南", "江西", "广东", "福建", "四川", "云南", "贵州", "广西", "海南", "安徽", "河南", "重庆", "陕西", "山西", "黑龙江", "吉林", "新疆", "西藏"],
  20: ["江苏", "浙江", "上海", "安徽", "湖北", "湖南", "江西", "广东", "福建", "四川", "重庆", "广西", "海南", "河南", "山东", "云南", "贵州", "河北", "辽宁", "陕西", "天津", "香港"],
  21: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "四川", "云南", "贵州", "广西", "广东", "福建", "陕西", "山西", "甘肃", "青海"],
  22: ["黑龙江", "吉林", "辽宁", "河北", "北京", "天津", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "福建", "四川", "云南", "广西", "海南", "重庆", "贵州", "陕西", "山西", "内蒙古", "新疆", "甘肃", "青海"],
  23: ["云南", "贵州", "四川", "重庆", "湖北", "湖南", "江西", "浙江", "江苏", "上海", "安徽", "广东", "广西", "福建", "海南", "山东", "河南", "河北", "北京", "天津", "辽宁", "西藏", "陕西", "山西", "香港", "澳门"],
  24: ["北京", "天津", "河北", "辽宁", "吉林", "黑龙江", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "陕西", "山西", "甘肃", "青海", "内蒙古", "新疆", "宁夏", "香港"],
  25: ["黑龙江", "吉林", "辽宁", "内蒙古", "新疆", "青海", "甘肃", "宁夏", "西藏", "四川", "云南", "贵州", "河北", "北京", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "广东", "广西", "海南", "重庆"],
  26: ["黑龙江", "吉林", "辽宁", "河北", "北京", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "四川", "云南", "贵州", "重庆", "广西", "广东", "福建", "甘肃", "青海", "内蒙古", "新疆", "天津", "海南"],
  27: ["北京", "天津", "河北", "山西", "辽宁", "吉林", "黑龙江", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "陕西", "甘肃", "青海", "内蒙古", "新疆", "宁夏", "西藏"],
  28: ["北京", "天津", "河北", "山西", "辽宁", "吉林", "黑龙江", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "陕西", "甘肃", "青海", "内蒙古", "新疆", "宁夏", "西藏", "香港", "澳门", "台湾"],
  29: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "陕西", "山西", "甘肃", "青海", "新疆", "宁夏", "西藏"],
  30: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "陕西", "山西", "甘肃", "青海", "新疆", "宁夏", "西藏"],
  31: ["黑龙江", "吉林", "辽宁", "内蒙古", "新疆", "青海", "甘肃", "宁夏", "西藏", "河北", "北京", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "四川", "云南", "贵州", "重庆", "广东", "广西", "福建", "海南"],
  32: ["北京", "天津", "河北", "山西", "辽宁", "吉林", "黑龙江", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "四川", "陕西", "甘肃", "青海", "内蒙古", "新疆", "宁夏", "广东", "广西", "福建", "海南", "云南", "贵州", "重庆"],
  33: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山东", "江苏", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "四川", "云南", "贵州", "重庆", "陕西", "山西", "甘肃", "青海", "新疆", "海南"],
  34: ["广东", "广西", "福建", "海南", "浙江", "江苏", "上海", "安徽", "江西", "湖南", "湖北", "四川", "云南", "贵州", "河南", "山东", "河北", "辽宁", "陕西", "重庆", "香港", "澳门", "天津"],
  35: ["黑龙江", "吉林", "辽宁", "内蒙古", "河北", "北京", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "四川", "云南", "贵州", "重庆", "甘肃", "青海", "新疆", "宁夏", "福建", "广东", "广西", "海南"],
  36: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "甘肃", "青海", "新疆", "宁夏", "西藏"],
  37: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "甘肃", "青海", "新疆", "宁夏", "西藏", "香港", "澳门", "台湾"],
  38: ["广东", "广西", "福建", "海南", "浙江", "江苏", "上海", "安徽", "江西", "湖南", "湖北", "四川", "云南", "贵州", "重庆", "河南", "山东", "河北", "辽宁", "陕西", "北京", "天津", "香港", "澳门", "台湾"],
  39: ["黑龙江", "吉林", "辽宁", "内蒙古", "新疆", "青海", "甘肃", "宁夏", "西藏", "河北", "北京", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "四川", "云南", "贵州", "重庆", "广东", "广西", "福建", "海南"],
  40: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "甘肃", "青海", "新疆", "宁夏"],
  41: ["四川", "重庆", "云南", "贵州", "湖北", "湖南", "广西", "广东", "福建", "海南", "江西", "浙江", "江苏", "上海", "安徽", "陕西", "甘肃", "河南", "西藏"],
  42: ["北京", "天津", "河北", "山西", "辽宁", "吉林", "黑龙江", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "陕西", "甘肃", "青海", "内蒙古", "新疆", "宁夏", "西藏", "香港", "澳门", "台湾"],
  43: ["四川", "云南", "贵州", "重庆", "湖北", "湖南", "广西", "广东", "福建", "江西", "浙江", "西藏", "甘肃", "陕西", "河南", "安徽", "海南"],
  44: ["黑龙江", "吉林", "辽宁", "内蒙古", "新疆", "青海", "甘肃", "宁夏", "西藏", "河北", "北京", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "四川", "云南", "贵州", "重庆", "广东", "广西", "福建", "海南"],
  45: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "甘肃", "青海", "新疆", "宁夏", "西藏", "香港", "澳门", "台湾"],
  46: ["四川", "重庆", "云南", "贵州", "湖北", "湖南", "广西", "广东", "福建", "海南", "江西", "浙江", "陕西", "甘肃", "河南", "安徽", "西藏"],
  47: ["广东", "广西", "福建", "海南", "浙江", "江苏", "上海", "安徽", "江西", "湖南", "湖北", "河南", "四川", "云南", "贵州", "重庆", "陕西", "山东", "河北", "辽宁", "北京", "天津", "香港", "澳门", "台湾"],
  48: ["黑龙江", "吉林", "辽宁", "内蒙古", "北京", "河北", "天津", "山西", "陕西", "山东", "河南", "湖北", "湖南", "江苏", "浙江", "上海", "安徽", "江西", "广东", "广西", "福建", "四川", "云南", "贵州", "重庆", "甘肃", "青海", "新疆", "宁夏", "海南"],
  49: ["广东", "广西", "福建", "海南", "浙江", "江苏", "上海", "安徽", "江西", "湖南", "湖北", "河南", "四川", "云南", "贵州", "重庆", "陕西", "山东", "河北", "辽宁", "北京", "天津", "香港", "澳门", "台湾"],
  50: ["北京", "天津", "河北", "辽宁", "吉林", "黑龙江", "山东", "江苏", "上海", "浙江", "安徽", "河南", "湖北", "湖南", "江西", "广东", "广西", "福建", "海南", "四川", "云南", "贵州", "重庆", "陕西", "山西", "甘肃", "青海", "内蒙古", "新疆", "宁夏", "香港", "澳门", "台湾"]
};

function showToast(msg, type){
  const toast = document.createElement("div");
  toast.className = "toast" + (type==="error" ? " toast-error" : "");
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(()=>toast.classList.add("toast-show"));
  setTimeout(()=>{
    toast.classList.remove("toast-show");
    setTimeout(()=>toast.remove(),300);
  },2500);
}

function showConfirm(msg, onConfirm){
  const modal = document.getElementById("confirmModal");
  document.getElementById("confirmMsg").textContent = msg;
  modal.hidden = false;
  const yes = document.getElementById("confirmYes"), no = document.getElementById("confirmNo");
  const cleanup = ()=>{ modal.hidden=true; yes.onclick=null; no.onclick=null; modal.onclick=null; };
  yes.onclick = ()=>{ cleanup(); onConfirm(); };
  no.onclick = cleanup;
  modal.onclick = e=>{ if(e.target===modal) cleanup(); };
}

function openDB(){
  return new Promise((res,rej)=>{
    const req = indexedDB.open("birdwatcher",1);
    req.onupgradeneeded = e=>{
      const db = e.target.result;
      if(!db.objectStoreNames.contains("records"))
        db.createObjectStore("records",{keyPath:"id",autoIncrement:true});
    };
    req.onsuccess = e=>res(e.target.result);
    req.onerror = e=>rej(e.target.error);
  });
}
async function dbAdd(rec){const db=await openDB();return new Promise((res,rej)=>{const t=db.transaction("records","readwrite");const r=t.objectStore("records").add(rec);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
async function dbAll(){const db=await openDB();return new Promise((res,rej)=>{const t=db.transaction("records","readonly");const r=t.objectStore("records").getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
async function dbDel(id){const db=await openDB();return new Promise((res,rej)=>{const t=db.transaction("records","readwrite");const r=t.objectStore("records").delete(id);r.onsuccess=()=>res();r.onerror=()=>rej(r.error);});}
async function dbUpdate(rec){const db=await openDB();return new Promise((res,rej)=>{const t=db.transaction("records","readwrite");const r=t.objectStore("records").put(rec);r.onsuccess=()=>res();r.onerror=()=>rej(r.error);});}

const routes = ["home","identify","map","history","collection","guide"];
function router(){
  const hash = location.hash.replace("#/","") || "home";
  const page = routes.includes(hash)?hash:"home";
  routes.forEach(r=>document.getElementById("page-"+r).classList.toggle("active",r===page));
  document.querySelectorAll(".nav a").forEach(a=>{
    a.classList.toggle("active",a.getAttribute("href")==="#/"+page);
  });
  document.querySelector(".nav").classList.remove("open");
  if(page==="home") renderDaily();
  if(page==="map") initDistribution();
  if(page==="history") renderHistory();
  if(page==="collection") renderCollection();
  if(page==="guide") renderGuide("gear");
  window.scrollTo(0,0);
}

let sampleImages = null;
async function loadSampleImages(){
  if(sampleImages) return sampleImages;
  try{
    const resp = await fetch("sample_images.json?v=v52");
    sampleImages = await resp.json();
  }catch(e){ sampleImages = {}; }
  return sampleImages;
}

function renderDaily(){
  const realBirds = BIRDS.filter(b => b.nameCn !== "非鸟类");
  const idx = new Date().getDate() % realBirds.length;
  const b = realBirds[idx];
  const card = document.getElementById("dailyCard");
  card.innerHTML = `
    <div class="dc-emoji"></div>
    <div class="dc-info">
      <h3>${b.nameCn} <span style="font-weight:400;color:var(--muted);font-size:13px">${b.protect}</span></h3>
      <p class="latin">${b.nameLatin}</p>
      <p class="desc">${b.habit}</p>
    </div>`;
  loadSampleImages().then(si=>{
    const files = si[b.nameCn] || [];
    if(files.length){
      const img = files[new Date().getDate() % files.length];
      const emojiEl = card.querySelector(".dc-emoji");
      emojiEl.innerHTML = `<img src="data/sample/${encodeURIComponent(b.nameCn)}/${img}" alt="${b.nameCn}" style="width:88px;height:88px;border-radius:12px;object-fit:cover">`;
    }
  });
  card.style.cursor = "pointer";
  card.onclick = ()=>{ location.hash = "#/collection"; pendingAiBirdBox = b.id; };
}

function compressImage(file, max=1024){
  return new Promise((res,rej)=>{
    const reader = new FileReader();
    reader.onload = e=>{
      const img = new Image();
      img.onload = ()=>{
        let {width:w,height:h} = img;
        if(w>h && w>max){h=h*max/w;w=max;}
        else if(h>=w && h>max){w=w*max/h;h=max;}
        const c = document.createElement("canvas");
        c.width=w; c.height=h;
        c.getContext("2d").drawImage(img,0,0,w,h);
        c.toBlob(b=>b?res(b):rej("压缩失败"),"image/jpeg",0.85);
      };
      img.onerror=()=>rej("图片加载失败");
      img.src = e.target.result;
    };
    reader.onerror=()=>rej("读取失败");
    reader.readAsDataURL(file);
  });
}

function avgColor(blob){
  return new Promise((res,rej)=>{
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = ()=>{
      const c = document.createElement("canvas");
      const w = c.width = 64, h = c.height = 64;
      const ctx = c.getContext("2d");
      ctx.drawImage(img,0,0,w,h);
      const d = ctx.getImageData(0,0,w,h).data;
      let r=0,g=0,b=0,n=0;
      for(let i=0;i<d.length;i+=4){r+=d[i];g+=d[i+1];b+=d[i+2];n++;}
      URL.revokeObjectURL(url);
      res([Math.round(r/n),Math.round(g/n),Math.round(b/n)]);
    };
    img.onerror=()=>{URL.revokeObjectURL(url);rej("色分析失败");};
    img.src = url;
  });
}

function mockRecognize(rgb){
  const realBirds = BIRDS.filter(b => b.nameCn !== "非鸟类");
  const scored = realBirds.map(b=>{
    const [r,g,bb]=rgb,[cr,cg,cb]=b.color;
    const dist = Math.sqrt((r-cr)**2+(g-cg)**2+(bb-cb)**2);
    return {bird:b, dist};
  }).sort((a,b)=>a.dist-b.dist);
  const max = scored[0].dist;
  return scored.slice(0,3).map(s=>({
    bird:s.bird,
    prob: Math.max(0.4, 1 - s.dist/442)
  })).map((x,i,arr)=>({...x, prob: i===0?Math.min(0.95,x.prob+0.1):x.prob}));
}

let ortSession = null, ortReady = false, ortLabelMap = null;
async function realRecognize(blob){
  if(!ortReady){
    const badge = document.getElementById("resultBadge");
    if(badge) badge.textContent = "正在加载AI模型…";
    ort.env.wasm.wasmPaths = "./";
    const modelResp = await fetch("bird_model.onnx?v=v52");
    const total = +modelResp.headers.get("Content-Length") || 22409028;
    const reader = modelResp.body.getReader();
    let loaded = 0;
    const chunks = [];
    while(true){
      const {done, value} = await reader.read();
      if(done) break;
      chunks.push(value);
      loaded += value.length;
      const pct = Math.min(99, Math.round(loaded/total*100));
      if(badge) badge.textContent = `正在加载AI模型…${pct}%`;
    }
    const buffer = new Uint8Array(loaded);
    let offset = 0;
    for(const c of chunks){ buffer.set(c, offset); offset += c.length; }
    if(badge) badge.textContent = "正在初始化模型…";
    ortSession = await ort.InferenceSession.create(buffer);
    const resp = await fetch('classes.json?v=v52');
    const cls = await resp.json();
    ortLabelMap = cls.map(name => BIRDS.findIndex(b => b.nameCn === name));
    ortReady = true;
  }
  const bmp = await createImageBitmap(blob);
  const c = document.createElement("canvas"); c.width=224; c.height=224;
  const ctx = c.getContext("2d");
  const scale = 256 / Math.min(bmp.width, bmp.height);
  const cropSize = 224 / scale;
  const sx = (bmp.width - cropSize) / 2, sy = (bmp.height - cropSize) / 2;
  ctx.drawImage(bmp, sx, sy, cropSize, cropSize, 0, 0, 224, 224);
  const d = ctx.getImageData(0,0,224,224).data;
  const arr = new Float32Array(3*224*224);
  const mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225];
  for(let i=0;i<224*224;i++){
    arr[i]             = (d[i*4]/255-mean[0])/std[0];
    arr[i+224*224]     = (d[i*4+1]/255-mean[1])/std[1];
    arr[i+2*224*224]   = (d[i*4+2]/255-mean[2])/std[2];
  }
  const tensor = new ort.Tensor("float32", arr, [1,3,224,224]);
  const out = await ortSession.run({ [ortSession.inputNames[0]]: tensor });
  const logits = out[ortSession.outputNames[0]].data;
  const maxLogit = Math.max(...logits);
  const expLogits = [...logits].map(v=>Math.exp(v-maxLogit));
  const sumExp = expLogits.reduce((a,b)=>a+b,0);
  const probs = expLogits.map(e=>e/sumExp);
  const entropy = -probs.reduce((h,p)=>h + (p>0 ? p*Math.log(p) : 0), 0) / Math.log(probs.length);
  const idx = probs.map((p,i)=>[p,i]).sort((a,b)=>b[0]-a[0]).slice(0,3);
  return { cands: idx.map(([p,i])=>({ bird: BIRDS[ortLabelMap[i]], prob: p })), entropy };
}

let currentRecognition = null;
async function handleFile(file){
  if(!file || !file.type.startsWith("image/")){showToast("请选择图片文件");return;}
  const result = document.getElementById("identifyResult");
  result.hidden = false;
  document.getElementById("resultBadge").textContent = "识别中…";
  try{
    const blob = await compressImage(file);
    const url = URL.createObjectURL(blob);
    document.getElementById("resultImg").src = url;
    let cands, entropy = 0;
    try{
      const result = await realRecognize(blob);
      cands = result.cands; entropy = result.entropy;
    }catch(e){
      console.warn("ONNX 模型不可用，降级模拟识别:", e);
      document.getElementById("resultBadge").textContent = "⚠️ AI模型加载失败，使用模拟识别";
      const rgb = await avgColor(blob);
      cands = mockRecognize(rgb);
    }
    showResult(cands, blob, entropy);
  }catch(err){
    document.getElementById("resultBadge").textContent = "识别失败";
    showToast(err);
  }
}

function showResult(cands, blob, entropy){
  const birdCands = cands.filter(c => c.bird && c.bird.nameCn !== "非鸟类");
  const top = cands[0];
  const b = birdCands.length > 0 ? birdCands[0].bird : null;
  const topProb = birdCands.length > 0 ? birdCands[0].prob : 0;
  const pct = (topProb*100).toFixed(0);
  const badge = document.getElementById("resultBadge");
  const isNonBirdClass = top.bird && top.bird.nameCn === "非鸟类";
  const isNonBird = isNonBirdClass || topProb < 0.20 || entropy > 0.75;
  const isUncertain = !isNonBird && (topProb < 0.35 || entropy > 0.55);
  if(isNonBird){
    if(isNonBirdClass){
      badge.textContent = `⚠️ 模型判定为非鸟类（${(top.prob*100).toFixed(0)}%）`;
    }else{
      badge.textContent = `⚠️ 未能识别为鸟类（${pct}%）`;
    }
    badge.style.background = "#fdecea";
    badge.style.color = "#c0392b";
    document.getElementById("resultName").textContent = "非鸟类图片";
    document.getElementById("resultLatin").textContent = "";
    document.getElementById("resultProtect").textContent = "";
    document.getElementById("resultDiet").textContent = "—";
    document.getElementById("resultHabit").textContent = "—";
    document.getElementById("resultBreeding").textContent = "—";
    document.getElementById("resultCandidates").innerHTML = "模型未识别到鸟类特征，请上传鸟类图片";
    currentRecognition = null;
    return;
  }else if(isUncertain){
    badge.textContent = `⚠️ 不太确定 ${pct}%，建议人工核对`;
    badge.style.background = "#fff4e6";
    badge.style.color = "#e67e22";
  }else{
    badge.textContent = `置信度 ${pct}%`;
    badge.style.background = "";
    badge.style.color = "";
  }
  currentRecognition = {bird:b, blob};
  document.getElementById("resultName").textContent = b.nameCn;
  document.getElementById("resultLatin").textContent = b.nameLatin;
  document.getElementById("resultProtect").textContent = b.protect;
  document.getElementById("resultDiet").textContent = b.diet;
  document.getElementById("resultHabit").textContent = b.habit;
  document.getElementById("resultBreeding").textContent = b.breeding;
  const candHtml = birdCands.slice(0,3).map(c=>`<span class="cand" data-id="${c.bird.id}">${c.bird.nameCn} ${(c.prob*100).toFixed(0)}%</span>`).join("");
  document.getElementById("resultCandidates").innerHTML = "候选："+candHtml;
  const setMapJump = (bird)=>{
    document.getElementById("viewDistribution").onclick = ()=>{
      location.hash="#/map";
      setTimeout(()=>{const s=document.getElementById("distBirdSelect");if(s)s.value=bird.id;initDistribution(bird.id);},100);
    };
  };
  setMapJump(b);
  document.querySelectorAll("#resultCandidates .cand").forEach(el=>{
    el.onclick = ()=>{
      const bid = +el.dataset.id;
      const bird = birdById.get(bid);
      currentRecognition = {bird, blob};
      document.getElementById("resultName").textContent = bird.nameCn;
      document.getElementById("resultLatin").textContent = bird.nameLatin;
      document.getElementById("resultProtect").textContent = bird.protect;
      document.getElementById("resultDiet").textContent = bird.diet;
      document.getElementById("resultHabit").textContent = bird.habit;
      document.getElementById("resultBreeding").textContent = bird.breeding;
      setMapJump(bird);
    };
  });
  dbAdd({birdId:b.id,nameCn:b.nameCn,imgBlob:blob,observeDate:new Date().toISOString().slice(0,10),location:"AI 识别",note:"自动记录",auto:true});
}


let echartsChart = null, chinaMapLoaded = false;
async function initDistribution(birdId){
  const sel = document.getElementById("distBirdSelect");
  if(!sel.options.length){
    BIRDS.filter(b=>b.nameCn!=="非鸟类").forEach(b=>{const o=document.createElement("option");o.value=b.id;o.textContent=b.nameCn;sel.appendChild(o);});
    sel.onchange = ()=>initDistribution(+sel.value);
  }
  if(!birdId) birdId = +sel.value || 1;
  sel.value = birdId;
  const b = birdById.get(birdId);
  if(!echartsChart){
    echartsChart = echarts.init(document.getElementById("echartsMap"));
  }
  if(!chinaMapLoaded){
    document.getElementById("distHint").textContent = "加载中国地图数据…";
    try{
      const resp = await fetch("china_geo.json");
      const geo = await resp.json();
      echarts.registerMap("china", geo);
      chinaMapLoaded = true;
    }catch(e){
      document.getElementById("distHint").textContent = "地图数据加载失败，请检查网络";
      return;
    }
  }
  const provs = BIRD_PROVINCES[birdId] || [];
  const maxVal = provs.length || 1;
  const data = ALL_PROV.map(p=>{
    const idx = provs.indexOf(p);
    return { name: PROV_FULL[p] || p, value: idx>=0 ? (maxVal - idx) : 0 };
  });
  echartsChart.setOption({
    tooltip:{trigger:"item", formatter:p=>{
      if(p.value===0) return `${p.name}<br/>— 无分布记录`;
      const level = p.value>=maxVal*0.7?"高":p.value>=maxVal*0.4?"中":"低";
      return `${p.name}<br/>分布密度：${level}（${p.value}/${maxVal}）`;
    }},
    visualMap:{show:true, min:0, max:maxVal, left:20, bottom:20, text:['高密度','无'], inRange:{color:["#e8f5e3","#a5d6a7","#66bb6a","#388e3c","#1b5e20"]}, calculable:false, itemWidth:18, itemHeight:80, textStyle:{fontSize:12}},
    series:[{
      type:"map", map:"china", roam:true, data,
      emphasis:{label:{show:true, color:"#2c4b2b", fontWeight:600}, itemStyle:{areaColor:"#7cc36a", shadowBlur:10, shadowColor:"rgba(90,157,78,0.4)"}},
      itemStyle:{borderColor:"#d4e6c8", borderWidth:0.8},
      animationDuration:800, animationDurationUpdate:600, animationEasing:"cubicOut"
    }]
  }, true);
  document.getElementById("distHint").textContent = `${b.nameCn} · 分布于 ${provs.length} 个省/区/市（颜色深浅=密度）`;
  const info = document.getElementById("distInfo");
  info.innerHTML = `<div class="dist-summary">
    <strong>${b.nameCn}</strong> <em>${b.nameLatin}</em><br/>
    <span class="dist-provs">${provs.join(" · ")}</span></div>`;
}

async function renderHistory(){
  const records = await dbAll();
  const auto = records.filter(r=>r.auto);
  const grid = document.getElementById("historyGrid");
  if(!auto.length){
    grid.innerHTML = `<div class="empty-tip">还没有识别记录，去 <a href="#/identify" style="color:var(--green);font-weight:600">AI 识别</a> 试试吧～</div>`;
    return;
  }
  const searchTerm = (document.getElementById("historySearch").value||"").trim().toLowerCase();
  const sortMode = document.getElementById("historySort").value;
  let filtered = auto.filter(r=>{
    if(!searchTerm) return true;
    const b = birdById.get(r.birdId) || {nameCn:r.nameCn||""};
    return (b.nameCn||"").toLowerCase().includes(searchTerm) || (r.nameCn||"").toLowerCase().includes(searchTerm);
  });
  if(sortMode==="date-desc") filtered.sort((a,b)=>(b.id||0)-(a.id||0));
  else if(sortMode==="date-asc") filtered.sort((a,b)=>(a.id||0)-(b.id||0));
  else if(sortMode==="bird") filtered.sort((a,b)=>{
    const an=(birdById.get(a.birdId)?.nameCn||a.nameCn||"");
    const bn=(birdById.get(b.birdId)?.nameCn||b.nameCn||"");
    return an.localeCompare(bn,"zh");
  });
  if(!filtered.length){
    grid.innerHTML = `<div class="empty-tip">未找到匹配"${searchTerm}"的记录</div>`;
    return;
  }
  grid.innerHTML = filtered.map(r=>{
    const b = birdById.get(r.birdId) || {nameCn:r.nameCn};
    const url = r.imgBlob ? URL.createObjectURL(r.imgBlob) : "";
    return `<div class="hist-card">
      ${url?`<img src="${url}" alt="${b.nameCn}">`:`<div class="hist-emoji">🐦</div>`}
      <div class="hist-body">
        <h4>${r.nameCn||b.nameCn}</h4>
        <div class="hist-meta">${r.observeDate||"日期未知"}</div>
        <button class="hist-add" data-id="${r.id}">加入图鉴</button>
      </div></div>`;
  }).join("");
  grid.querySelectorAll(".hist-add").forEach(btn=>{
    btn.onclick = async ()=>{
      const id = +btn.dataset.id;
      const rec = records.find(r=>r.id===id);
      if(!rec) return;
      await dbAdd({birdId:rec.birdId,nameCn:rec.nameCn,imgBlob:rec.imgBlob,observeDate:rec.observeDate,location:"AI 识别",note:"从历史记录加入"});
      btn.textContent = "已加入 ✓";
      btn.disabled = true;
    };
  });
}

let pendingAiBirdBox = null;
let allRecords = [];
async function renderCollection(){
  allRecords = await dbAll();
  renderAchievements(allRecords);
  renderAiBirdGuide();
  if(pendingAiBirdBox){
    const bid = pendingAiBirdBox;
    pendingAiBirdBox = null;
    setTimeout(()=>openAiBirdBox(bid),200);
  }
  const grid = document.getElementById("collectionGrid");
  const collected = allRecords.filter(r=>!r.auto && !r.type);
  if(!collected.length){
    grid.innerHTML = `<div class="empty-tip">还没有收集记录，去 <a href="#/identify" style="color:var(--green);font-weight:600">AI 识别</a> 后点"加入图鉴"，或手动添加你的第一条观测记录吧～</div>`;
    return;
  }
  const searchTerm = (document.getElementById("collSearch").value||"").trim().toLowerCase();
  const groupFilter = document.getElementById("collGroup").value;
  const groups = {};
  collected.forEach(r=>{
    const key = r.birdId || ("_"+r.nameCn);
    if(!groups[key]) groups[key] = [];
    groups[key].push(r);
  });
  const filteredEntries = Object.entries(groups).filter(([key,recs])=>{
    const b = birdById.get(+key) || {nameCn:recs[0].nameCn||""};
    if(groupFilter && birdToGroup[+key] !== groupFilter) return false;
    if(searchTerm && !(b.nameCn||"").toLowerCase().includes(searchTerm)) return false;
    return true;
  });
  if(!filteredEntries.length){
    grid.innerHTML = `<div class="empty-tip">未找到匹配"${searchTerm}"的图鉴</div>`;
    return;
  }
  grid.innerHTML = filteredEntries.map(([key,recs])=>{
    const b = birdById.get(+key) || {nameCn:recs[0].nameCn||"未知鸟种",id:null};
    const firstUrl = recs[0].imgBlob ? URL.createObjectURL(recs[0].imgBlob) : "";
    return `<div class="card-box" data-bird="${b.id||''}" data-key="${key}">
      <div class="box-cover">
        ${firstUrl?`<img src="${firstUrl}" alt="${b.nameCn}">`:`<div class="box-cover-emoji">🐦</div>`}
        <span class="box-badge">${recs.length}</span>
      </div>
      <div class="box-info">
        <h4>${b.nameCn}</h4>
        <span class="box-latin">${b.nameLatin||""}</span>
      </div>
    </div>`;
  }).join("");
  grid.querySelectorAll(".card-box").forEach(box=>{
    box.onclick = ()=>openCollectionBox(box.dataset.key);
  });
}

let boxModalRecords = null, boxModalIndex = 0, boxModalKey = null;
function openCollectionBox(key){
  boxModalKey = key;
  const collected = allRecords.filter(r=>!r.auto && !r.type);
  boxModalRecords = collected.filter(r=>{
    const k = r.birdId || ("_"+r.nameCn);
    return k == key;
  });
  if(!boxModalRecords.length) return;
  boxModalIndex = 0;
  const b = birdById.get(+key) || {nameCn:boxModalRecords[0].nameCn,id:null};
  document.getElementById("boxTitle").textContent = b.nameCn;
  document.getElementById("boxModal").hidden = false;
  renderBoxCard();
}
let boxCardPrevUrl = null;
function renderBoxCard(){
  const r = boxModalRecords[boxModalIndex];
  const b = birdById.get(r.birdId) || {nameCn:r.nameCn};
  const url = r.imgBlob ? URL.createObjectURL(r.imgBlob) : "";
  const area = document.getElementById("boxCardArea");
  const card = area.querySelector(".box-card");
  if(card){
    card.style.opacity = "0";
    setTimeout(()=>{
      if(boxCardPrevUrl){ URL.revokeObjectURL(boxCardPrevUrl); boxCardPrevUrl = null; }
      boxCardPrevUrl = url || null;
      area.innerHTML = `
        <div class="box-card" style="opacity:0">
          ${url?`<img src="${url}" alt="${b.nameCn}">`:`<div class="box-card-emoji">🐦</div>`}
          <div class="box-card-info">
            <div class="box-card-date">📅 ${r.observeDate||"日期未填"}</div>
            <div class="box-card-loc">📍 ${r.location||"地点未填"}</div>
            ${r.note?`<div class="box-card-note">📝 ${r.note}</div>`:""}
          </div>
        </div>`;
      requestAnimationFrame(()=>{
        const c = area.querySelector(".box-card");
        if(c) c.style.opacity = "1";
      });
    },150);
  } else {
    boxCardPrevUrl = url || null;
    area.innerHTML = `
      <div class="box-card">
        ${url?`<img src="${url}" alt="${b.nameCn}">`:`<div class="box-card-emoji">🐦</div>`}
        <div class="box-card-info">
          <div class="box-card-date">📅 ${r.observeDate||"日期未填"}</div>
          <div class="box-card-loc">📍 ${r.location||"地点未填"}</div>
          ${r.note?`<div class="box-card-note">📝 ${r.note}</div>`:""}
        </div>
      </div>`;
  }
  document.getElementById("boxCounter").textContent = `${boxModalIndex+1} / ${boxModalRecords.length}`;
  document.getElementById("boxPrev").style.visibility = boxModalIndex>0 ? "visible" : "hidden";
  document.getElementById("boxNext").style.visibility = boxModalIndex<boxModalRecords.length-1 ? "visible" : "hidden";
}

async function renderAiBirdGuide(){
  const grid = document.getElementById("aiBirdGrid");
  const si = await loadSampleImages();
  const searchTerm = (document.getElementById("aiBirdSearch").value||"").trim().toLowerCase();
  const groupFilter = document.getElementById("aiBirdGroup").value;
  const filtered = BIRDS.filter(b=>{
    if(b.nameCn === "非鸟类") return false;
    if(groupFilter && birdToGroup[b.id] !== groupFilter) return false;
    if(searchTerm && !b.nameCn.toLowerCase().includes(searchTerm) && !b.nameLatin.toLowerCase().includes(searchTerm)) return false;
    return true;
  });
  if(!filtered.length){
    grid.innerHTML = `<div class="empty-tip">未找到匹配的鸟种</div>`;
    return;
  }
  grid.innerHTML = filtered.map(b=>{
    const files = si[b.nameCn] || [];
    const img = files[0] ? `data/sample/${encodeURIComponent(b.nameCn)}/${files[0]}` : null;
    return `<div class="ai-bird-card" data-id="${b.id}">
      ${img?`<img src="${img}" alt="${b.nameCn}" loading="lazy">`:`<div class="ai-bird-emoji">🐦</div>`}
      <div class="ai-bird-body">
        <h4>${b.nameCn}</h4>
        <p class="ai-bird-latin">${b.nameLatin}</p>
        <span class="ai-bird-protect">${b.protect}</span>
      </div>
    </div>`;
  }).join("");
  grid.querySelectorAll(".ai-bird-card").forEach(card=>{
    card.onclick = ()=>openAiBirdBox(+card.dataset.id);
  });
}

async function openAiBirdBox(birdId){
  const b = birdById.get(birdId);
  if(!b) return;
  const si = await loadSampleImages();
  const files = si[b.nameCn] || [];
  document.getElementById("aiBoxTitle").textContent = b.nameCn;
  const photoHtml = files.length ? `<div class="ai-box-photos">${
    files.map(f=>`<img src="data/sample/${encodeURIComponent(b.nameCn)}/${f}" alt="${b.nameCn}" loading="lazy">`).join("")
  }</div>` : "";
  document.getElementById("aiBoxContent").innerHTML = `
    <p class="ai-box-latin">${b.nameLatin}</p>
    <span class="ai-box-protect">${b.protect}</span>
    <div class="ai-box-desc">
      <div class="ai-box-row"><span class="ai-box-k">食性</span><span>${b.diet}</span></div>
      <div class="ai-box-row"><span class="ai-box-k">习性</span><span>${b.habit}</span></div>
      <div class="ai-box-row"><span class="ai-box-k">繁殖</span><span>${b.breeding}</span></div>
    </div>
    <h4 class="ai-box-photo-title">📷 训练图库照片（${files.length} 张）</h4>
    ${photoHtml}`;
  document.getElementById("aiBoxDist").onclick = ()=>{
    document.getElementById("aiBirdBoxModal").hidden = true;
    location.hash = "#/map";
    setTimeout(()=>{const s=document.getElementById("distBirdSelect");if(s)s.value=b.id;initDistribution(b.id);},100);
  };
  document.getElementById("aiBirdBoxModal").hidden = false;
}

function renderAchievements(records){
  const species = new Set(records.map(r=>r.birdId)).size;
  const total = records.length;
  const defs = [
    {id:"first",icon:"🎯",name:"首次观测",got:species>=1},
    {id:"s5",icon:"🌿",name:"识得 5 种",got:species>=5},
    {id:"s10",icon:"🏆",name:"集齐 10 种",got:species>=10},
    {id:"r10",icon:"📝",name:"记录 10 条",got:total>=10}
  ];
  document.getElementById("achievements").innerHTML =
    defs.map(d=>`<span class="badge ${d.got?"":"locked"}">${d.icon} ${d.name}</span>`).join("")
    + `<span class="badge" style="background:var(--green-soft);color:var(--green-dark)">已识 ${species} 种 · ${total} 条</span>`;
}

const GUIDE = {
  gear:`<h3>🔭 望远镜选择</h3><ul>
    <li>入门推荐 8×42 双筒望远镜：倍率适中、视野广、进光量大，适合林间观鸟。</li>
    <li>8× 倍率手持稳定，42mm 口径在清晨黄昏仍清晰；避免盲目追求高倍率。</li>
    <li>单筒望远镜（如 20—60×）适合观水鸟，需配三脚架，进阶再购。</li></ul>
    <h3>📷 相机与镜头</h3><ul>
    <li>鸟类摄影常用 300mm 以上长焦，入门可用 55—250mm 套机练手。</li>
    <li>设置快门优先（1/1000s 以上）、连续对焦、高速连拍。</li>
    <li>穿低饱和度大地色衣物，便于接近且不惊扰鸟类。</li></ul>`,
  etiquette:`<h3>🤝 野外观鸟礼仪</h3><ul>
    <li><strong>不惊扰</strong>：保持距离，不追逐、不驱赶、不使用诱饵或回放鸟鸣。</li>
    <li><strong>不破坏</strong>：不踏入巢区，不攀折植被，不留垃圾。</li>
    <li><strong>不投喂</strong>：人工投喂改变鸟类觅食习性，危害其生存。</li>
    <li><strong>不公开敏感地点</strong>：珍稀鸟种繁殖地不公开坐标，防盗猎。</li>
    <li><strong>尊重他人</strong>：观鸟时低声交流，分享发现时照顾后来者。</li></ul>`,
  hotspot:`<h3>📍 国内热门观鸟点</h3><p style="color:var(--muted);margin-bottom:16px">点击地图上的标记查看观鸟点详情</p>
    <div class="hotspot-wrap"><div id="hotspotMap" class="hotspot-map"></div><div id="hotspotInfo" class="hotspot-info"></div></div>`,
  mistake:`<h3>❌ 常见识别误区</h3><ul>
    <li><strong>只看颜色</strong>：颜色受光线影响大，需结合体型、嘴形、行为综合判断。</li>
    <li><strong>忽略生境</strong>：同色系鸟种生境差异大，水边白鹭与林中白鸽不会混淆。</li>
    <li><strong>忽视鸣声</strong>：很多鸟种外形相近但鸣声迥异，听声是进阶关键技能。</li>
    <li><strong>过度依赖 AI</strong>：AI 识别有误判，尤其相似种，需人工复核确认。</li>
    <li><strong>雌雄不分</strong>：许多鸟种雌雄异色，图鉴要区分性别羽色。</li></ul>`
};
function renderGuide(tab){
  document.querySelectorAll(".guide-tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===tab));
  document.getElementById("guideContent").innerHTML = GUIDE[tab];
  if(tab === "hotspot") initHotspotMap();
}

const HOTSPOTS = [
  {name:"鄱阳湖湿地",region:"江西",coord:[115.89,28.68],bird:"白鹭",bestTime:"11月—次年3月",species:"白鹤、东方白鹳、白鹭",desc:"中国最大淡水湖，冬季候鸟天堂，数十万只水鸟越冬"},
  {name:"西溪湿地",region:"杭州",coord:[120.15,30.27],bird:"普通翠鸟",bestTime:"4—5月、9—10月",species:"普通翠鸟、白鹭、黑水鸡",desc:"城市湿地典范，四季可观，春秋迁徙季鸟种最丰富"},
  {name:"成都浣花溪公园",region:"四川",coord:[104.07,30.57],bird:"白头鹎",bestTime:"全年",species:"白头鹎、红嘴蓝鹊、珠颈斑鸠",desc:"市区公园观鸟首选，常见留鸟丰富，适合入门练习"},
  {name:"深圳湾公园",region:"广东",coord:[113.58,22.27],bird:"棕背伯劳",bestTime:"10月—次年4月",species:"黑脸琵鹭、棕背伯劳、鸻鹬类",desc:"候鸟迁徙通道，冬季可见大量水鸟和珍稀黑脸琵鹭"},
  {name:"北京奥森公园",region:"北京",coord:[116.40,39.90],bird:"喜鹊",bestTime:"春秋迁徙季",species:"喜鹊、灰喜鹊、红喉歌鸲",desc:"城市绿肺，春秋迁徙过境鸟种多，冬季可见留鸟"},
  {name:"昆明滇池",region:"云南",coord:[102.83,24.88],bird:"红嘴鸥",bestTime:"11月—次年3月",species:"红嘴鸥、白鹭、苍鹭",desc:"红嘴鸥越冬胜地，数万只红嘴鸥冬季聚集"},
  {name:"广州白云山",region:"广东",coord:[113.26,23.13],bird:"珠颈斑鸠",bestTime:"全年",species:"珠颈斑鸠、白头鹎、暗绿绣眼鸟",desc:"亚热带山林，留鸟种类丰富，全年适宜观鸟"},
  {name:"上海世纪公园",region:"上海",coord:[121.47,31.23],bird:"白头鹎",bestTime:"春秋迁徙季",species:"白头鹎、乌鸫、大山雀",desc:"城市绿地观鸟点，迁徙季有过境鸟，冬季留鸟活跃"},
  {name:"哈尔滨松花江",region:"黑龙江",coord:[126.63,45.75],bird:"凤头麦鸡",bestTime:"5—9月",species:"凤头麦鸡、苍鹭、鸳鸯",desc:"北方水域观鸟，夏季繁殖鸟丰富，可见特色寒温带鸟种"},
  {name:"青岛海边",region:"山东",coord:[120.38,36.06],bird:"灰喜鹊",bestTime:"春秋迁徙季",species:"灰喜鹊、红嘴鸥、白鹭",desc:"海滨观鸟好去处，迁徙季海鸟和过境鸟种多"},
];

let hotspotChart = null;
let hotspotMapLoaded = false;
async function initHotspotMap(){
  const container = document.getElementById("hotspotMap");
  if(!container) return;
  if(hotspotChart){ hotspotChart.dispose(); }
  hotspotChart = echarts.init(container);
  if(!hotspotMapLoaded){
    try{
      const resp = await fetch("china_geo.json");
      const geo = await resp.json();
      echarts.registerMap("china", geo);
      hotspotMapLoaded = true;
    }catch(e){ return; }
  }
  const si = await loadSampleImages();
  const scatterData = HOTSPOTS.map((h,i)=>({
    name:h.name, value:[...h.coord, i],
    itemStyle:{color:i===0?'#e8794a':'#4a7c59'}
  }));
  hotspotChart.setOption({
    geo:{
      map:"china", roam:true, zoom:1.2,
      center:[108,34],
      itemStyle:{areaColor:"#f0f7ed", borderColor:"#d4e6c8", borderWidth:0.8},
      emphasis:{itemStyle:{areaColor:"#e0eede"}, label:{show:false}},
      label:{show:false}
    },
    tooltip:{
      trigger:"item",
      formatter:p=>`<b>${p.name}</b><br/>${HOTSPOTS[p.value[2]].region} · ${HOTSPOTS[p.value[2]].bird}`,
      backgroundColor:"rgba(255,255,255,0.95)",
      borderColor:"#d4e6c8", textStyle:{color:"#2c4b2b",fontSize:13}
    },
    series:[{
      type:"scatter", coordinateSystem:"geo", data:scatterData,
      symbolSize:14, z:10,
      label:{show:true, formatter:p=>p.name, position:"top", fontSize:11, color:"#2c4b2b", fontWeight:600, distance:8},
      emphasis:{itemStyle:{shadowBlur:12, shadowColor:"rgba(74,124,89,0.5)", borderColor:"#fff", borderWidth:2}},
      itemStyle:{color:"#4a7c59", borderColor:"#fff", borderWidth:1.5, shadowBlur:6, shadowColor:"rgba(0,0,0,0.2)"}
    },{
      type:"effectScatter", coordinateSystem:"geo",
      data:scatterData, symbolSize:8, z:9,
      rippleEffect:{scale:3, brushType:"stroke", period:4},
      itemStyle:{color:"#7cc36a", opacity:0.6}
    }]
  });
  hotspotChart.off("click");
  hotspotChart.on("click", p=>{
    if(p.seriesType === "scatter" || p.seriesType === "effectScatter"){
      showHotspotInfo(p.value[2], si);
    }
  });
  showHotspotInfo(0, si);
}

function showHotspotInfo(idx, si){
  const h = HOTSPOTS[idx];
  const info = document.getElementById("hotspotInfo");
  if(!info) return;
  const files = si[h.bird] || [];
  const img = files[0] ? `data/sample/${encodeURIComponent(h.bird)}/${encodeURIComponent(files[0])}` : null;
  info.innerHTML = `
    <div class="hotspot-card">
      ${img ? `<img src="${img}" alt="${h.bird}" class="hotspot-img" />` : '<div class="hotspot-img-placeholder">🐦</div>'}
      <div class="hotspot-detail">
        <h4>${h.name}<span class="hotspot-region">${h.region}</span></h4>
        <p class="hotspot-desc">${h.desc}</p>
        <div class="hotspot-field"><span class="hf-label">🕐 最佳观测</span><span class="hf-value">${h.bestTime}</span></div>
        <div class="hotspot-field"><span class="hf-label">🐦 代表鸟种</span><span class="hf-value">${h.species}</span></div>
      </div>
    </div>`;
}

function downloadBlob(content, filename, type){
  const blob = new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportRecords(format){
  const collected = allRecords.filter(r=>!r.auto && !r.type);
  if(!collected.length){showToast("还没有可导出的记录");return;}
  const rows = collected.map(r=>{
    const b = birdById.get(r.birdId) || {nameCn:r.nameCn||"未知",nameLatin:""};
    return {
      birdCn: b.nameCn||r.nameCn||"",
      birdLatin: b.nameLatin||"",
      date: r.observeDate||"",
      location: r.location||"",
      note: r.note||""
    };
  });
  const ts = new Date().toISOString().slice(0,10);
  if(format==="csv"){
    const header = "鸟种,学名,观测日期,观测地点,观测描述\n";
    const body = rows.map(r=>`"${r.birdCn}","${r.birdLatin}","${r.date}","${r.location}","${r.note}"`).join("\n");
    downloadBlob("\uFEFF"+header+body, `观鸟图鉴_${ts}.csv`, "text/csv;charset=utf-8");
  }else{
    downloadBlob(JSON.stringify(rows,null,2), `观鸟图鉴_${ts}.json`, "application/json");
  }
}

function bindEvents(){
  const navToggle = document.getElementById("navToggle");
  navToggle.onclick = ()=>document.querySelector(".nav").classList.toggle("open");

  const groupSel = document.querySelectorAll("#aiBirdGroup, #collGroup");
  groupSel.forEach(sel=>{
    Object.keys(BIRD_GROUPS).forEach(g=>{
      const o=document.createElement("option");o.value=g;o.textContent=g;sel.appendChild(o);
    });
  });

  document.getElementById("collSearch").addEventListener("input",()=>renderCollection());
  document.getElementById("collGroup").addEventListener("change",()=>renderCollection());
  document.getElementById("aiBirdSearch").addEventListener("input",()=>renderAiBirdGuide());
  document.getElementById("aiBirdGroup").addEventListener("change",()=>renderAiBirdGuide());
  document.getElementById("historySearch").addEventListener("input",()=>renderHistory());
  document.getElementById("historySort").addEventListener("change",()=>renderHistory());

  const distSearch = document.getElementById("distBirdSearch");
  const distSelect = document.getElementById("distBirdSelect");
  distSearch.addEventListener("input",()=>{
    const term = distSearch.value.trim().toLowerCase();
    const cur = distSelect.value;
    distSelect.innerHTML = "";
    BIRDS.filter(b=>b.nameCn!=="非鸟类" && (!term || b.nameCn.toLowerCase().includes(term) || b.nameLatin.toLowerCase().includes(term))).forEach(b=>{
      const o=document.createElement("option");o.value=b.id;o.textContent=b.nameCn;distSelect.appendChild(o);
    });
    if([...distSelect.options].some(o=>o.value===cur)) distSelect.value=cur;
  });

  document.querySelectorAll(".feature-card").forEach(card=>{
    const labelEl = card.querySelector(".feature-label");
    const original = labelEl.textContent;
    card.addEventListener("mouseenter",()=>{
      labelEl.textContent = card.dataset.hover || original;
      labelEl.classList.add("hover-text");
    });
    card.addEventListener("mouseleave",()=>{
      labelEl.textContent = original;
      labelEl.classList.remove("hover-text");
    });
  });

  document.querySelectorAll(".coll-tab").forEach(tab=>{
    tab.onclick = ()=>{
      document.querySelectorAll(".coll-tab").forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.tab;
      document.getElementById("collTabAi").hidden = target !== "ai";
      document.getElementById("collTabCollected").hidden = target !== "collected";
    };
  });

  const uploadArea = document.getElementById("uploadArea");
  const fileInput = document.getElementById("fileInput");
  uploadArea.onclick = ()=>fileInput.click();
  fileInput.onchange = ()=>fileInput.files[0]&&showCropModal(fileInput.files[0]);
  uploadArea.ondragover = e=>{e.preventDefault();uploadArea.classList.add("dragover");};
  uploadArea.ondragleave = ()=>uploadArea.classList.remove("dragover");
  uploadArea.ondrop = e=>{e.preventDefault();uploadArea.classList.remove("dragover");e.dataTransfer.files[0]&&showCropModal(e.dataTransfer.files[0]);};

  const cropModal = document.getElementById("cropModal");
  const cropCanvas = document.getElementById("cropCanvas");
  const cropBox = document.getElementById("cropBox");
  const cropContainer = document.getElementById("cropContainer");
  let cropImg = null, cropScale = 1, cropDragging = false, cropResizing = false, cropOffsetX = 0, cropOffsetY = 0;
  function showCropModal(file){
    if(!file || !file.type.startsWith("image/")){handleFile(file);return;}
    const reader = new FileReader();
    reader.onload = e=>{
      cropImg = new Image();
      cropImg.onload = ()=>{
        const maxW = 460, maxH = 340;
        cropScale = Math.min(maxW/cropImg.width, maxH/cropImg.height, 1);
        const dw = cropImg.width*cropScale, dh = cropImg.height*cropScale;
        cropCanvas.width = dw; cropCanvas.height = dh;
        cropCanvas.getContext("2d").drawImage(cropImg, 0, 0, dw, dh);
        cropContainer.style.width = dw+"px";
        cropContainer.style.height = dh+"px";
        const bw = dw*0.6, bh = dh*0.6;
        cropBox.style.left = (dw-bw)/2+"px";
        cropBox.style.top = (dh-bh)/2+"px";
        cropBox.style.width = bw+"px";
        cropBox.style.height = bh+"px";
        cropModal.hidden = false;
      };
      cropImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
    cropModal._file = file;
  }
  function getCropPoint(e){
    if(e.touches && e.touches.length) return {x:e.touches[0].clientX, y:e.touches[0].clientY};
    return {x:e.clientX, y:e.clientY};
  }
  function onCropStart(e){
    e.preventDefault();
    const p = getCropPoint(e);
    const rect = cropBox.getBoundingClientRect();
    const cornerX = rect.left+rect.width, cornerY = rect.top+rect.height;
    if(Math.abs(p.x-cornerX)<16 && Math.abs(p.y-cornerY)<16){
      cropResizing = true;
    }else{
      cropDragging = true;
      cropOffsetX = p.x-rect.left;
      cropOffsetY = p.y-rect.top;
    }
  }
  function onCropMove(e){
    if(!cropDragging && !cropResizing) return;
    e.preventDefault();
    const p = getCropPoint(e);
    const containerRect = cropContainer.getBoundingClientRect();
    if(cropDragging){
      let x = p.x-containerRect.left-cropOffsetX;
      let y = p.y-containerRect.top-cropOffsetY;
      x = Math.max(0, Math.min(x, containerRect.width-cropBox.offsetWidth));
      y = Math.max(0, Math.min(y, containerRect.height-cropBox.offsetHeight));
      cropBox.style.left = x+"px";
      cropBox.style.top = y+"px";
    }else if(cropResizing){
      let w = p.x-cropBox.getBoundingClientRect().left;
      let h = p.y-cropBox.getBoundingClientRect().top;
      w = Math.max(50, Math.min(w, containerRect.right-cropBox.getBoundingClientRect().left));
      h = Math.max(50, Math.min(h, containerRect.bottom-cropBox.getBoundingClientRect().top));
      cropBox.style.width = w+"px";
      cropBox.style.height = h+"px";
    }
  }
  function onCropEnd(){cropDragging=false;cropResizing=false;}
  cropBox.addEventListener("mousedown",onCropStart);
  cropBox.addEventListener("touchstart",onCropStart,{passive:false});
  document.addEventListener("mousemove",onCropMove);
  document.addEventListener("touchmove",onCropMove,{passive:false});
  document.addEventListener("mouseup",onCropEnd);
  document.addEventListener("touchend",onCropEnd);
  document.getElementById("cropSkip").onclick = ()=>{cropModal.hidden=true;handleFile(cropModal._file);};
  cropModal.onclick = e=>{if(e.target===cropModal)cropModal.hidden=true;};
  document.getElementById("cropConfirm").onclick = ()=>{
    const bx = parseFloat(cropBox.style.left)/cropScale;
    const by = parseFloat(cropBox.style.top)/cropScale;
    const bw = parseFloat(cropBox.style.width)/cropScale;
    const bh = parseFloat(cropBox.style.height)/cropScale;
    const c = document.createElement("canvas");
    c.width = bw; c.height = bh;
    c.getContext("2d").drawImage(cropImg, bx, by, bw, bh, 0, 0, bw, bh);
    c.toBlob(blob=>{cropModal.hidden=true;handleFile(blob);}, "image/jpeg", 0.9);
  };

  document.getElementById("saveToCollection").onclick = ()=>{
    if(!currentRecognition){showToast("请先识别一只鸟");return;}
    const b = currentRecognition.bird;
    document.getElementById("saveCollBird").value = b.nameCn;
    document.getElementById("saveCollDate").value = new Date().toISOString().slice(0,10);
    document.getElementById("saveCollLocation").value = "";
    document.getElementById("saveCollNote").value = "";
    document.getElementById("saveCollModal").hidden = false;
  };
  const saveCollModal = document.getElementById("saveCollModal");
  document.getElementById("saveCollCancel").onclick = ()=>saveCollModal.hidden=true;
  saveCollModal.onclick = e=>{if(e.target===saveCollModal)saveCollModal.hidden=true;};
  document.getElementById("saveCollConfirm").onclick = async ()=>{
    if(!currentRecognition){showToast("请先识别一只鸟");return;}
    await dbAdd({
      birdId:currentRecognition.bird.id,
      nameCn:currentRecognition.bird.nameCn,
      imgBlob:currentRecognition.blob,
      observeDate:document.getElementById("saveCollDate").value,
      location:document.getElementById("saveCollLocation").value.trim()||"未填",
      note:document.getElementById("saveCollNote").value.trim()
    });
    saveCollModal.hidden = true;
    showToast("已加入图鉴 🎉");
  };

  const editDescModal = document.getElementById("editDescModal");
  let editingRecordId = null, editingFromBox = false;
  document.getElementById("editCancel").onclick = ()=>{
    editDescModal.hidden = true;
    if(editingFromBox){ editingFromBox = false; document.getElementById("boxModal").hidden = false; }
  };
  editDescModal.onclick = e=>{if(e.target===editDescModal){editDescModal.hidden=true;if(editingFromBox){editingFromBox=false;document.getElementById("boxModal").hidden=false;}}};
  document.getElementById("editSave").onclick = async ()=>{
    const rec = allRecords.find(r=>r.id===editingRecordId);
    if(!rec) return;
    rec.observeDate = document.getElementById("editDate").value;
    rec.location = document.getElementById("editLocation").value.trim()||"未填";
    rec.note = document.getElementById("editNote").value.trim();
    await dbUpdate(rec);
    editDescModal.hidden = true;
    await renderCollection();
    if(editingFromBox){ editingFromBox = false; if(boxModalKey) openCollectionBox(boxModalKey); }
  };

  const boxModal = document.getElementById("boxModal");
  document.getElementById("boxClose").onclick = ()=>{ if(boxCardPrevUrl){URL.revokeObjectURL(boxCardPrevUrl);boxCardPrevUrl=null;} boxModal.hidden=true; };
  boxModal.onclick = e=>{if(e.target===boxModal){ if(boxCardPrevUrl){URL.revokeObjectURL(boxCardPrevUrl);boxCardPrevUrl=null;} boxModal.hidden=true;}};
  document.getElementById("boxPrev").onclick = ()=>{ if(boxModalIndex>0){boxModalIndex--;renderBoxCard();} };
  document.getElementById("boxNext").onclick = ()=>{ if(boxModalIndex<boxModalRecords.length-1){boxModalIndex++;renderBoxCard();} };
  document.getElementById("boxEdit").onclick = ()=>{
    const r = boxModalRecords[boxModalIndex];
    if(!r) return;
    editingRecordId = r.id;
    editingFromBox = true;
    document.getElementById("editDate").value = r.observeDate||"";
    document.getElementById("editLocation").value = r.location&&r.location!=="未填"?r.location:"";
    document.getElementById("editNote").value = r.note||"";
    boxModal.hidden = true;
    editDescModal.hidden = false;
  };
  document.getElementById("boxDelete").onclick = ()=>{
    const r = boxModalRecords[boxModalIndex];
    if(!r) return;
    showConfirm("确定要删除这条图鉴记录吗？", async ()=>{
      await dbDel(r.id);
      boxModalRecords.splice(boxModalIndex,1);
      if(!boxModalRecords.length){
        boxModal.hidden = true;
        await renderCollection();
        return;
      }
      if(boxModalIndex>=boxModalRecords.length) boxModalIndex = boxModalRecords.length-1;
      renderBoxCard();
      await renderCollection();
      showToast("已删除");
    });
  };
  document.getElementById("boxDist").onclick = ()=>{
    const r = boxModalRecords[boxModalIndex];
    if(!r) return;
    const b = birdById.get(r.birdId);
    boxModal.hidden = true;
    location.hash = "#/map";
    setTimeout(()=>{const s=document.getElementById("distBirdSelect");if(s)s.value=b.id;initDistribution(b.id);},100);
  };

  const aiBirdBoxModal = document.getElementById("aiBirdBoxModal");
  document.getElementById("aiBoxClose").onclick = ()=>aiBirdBoxModal.hidden=true;
  aiBirdBoxModal.onclick = e=>{if(e.target===aiBirdBoxModal)aiBirdBoxModal.hidden=true;};

  document.getElementById("exportCsvBtn").onclick = ()=>exportRecords("csv");
  document.getElementById("exportJsonBtn").onclick = ()=>exportRecords("json");

  const errorModal = document.getElementById("errorModal");
  document.getElementById("reportError").onclick = ()=>{ errorModal.hidden = false; };
  document.getElementById("errCancel").onclick = ()=>{ errorModal.hidden = true; };
  errorModal.onclick = e=>{ if(e.target===errorModal) errorModal.hidden = true; };
  document.getElementById("errSubmit").onclick = async ()=>{
    const correct = document.getElementById("errCorrectBird").value.trim();
    const desc = document.getElementById("errDesc").value.trim();
    if(!desc){showToast("请描述识别错误的情况");return;}
    await dbAdd({
      type:"errorReport",
      birdId: currentRecognition?.bird?.id || null,
      nameCn: currentRecognition?.bird?.nameCn || "未知",
      correctBird: correct,
      description: desc,
      observeDate: new Date().toISOString().slice(0,10),
      note:"识别有误报告"
    });
    errorModal.hidden = true;
    document.getElementById("errCorrectBird").value = "";
    document.getElementById("errDesc").value = "";
    showToast("感谢反馈！报告已记录 ✅");
  };

  document.querySelectorAll(".guide-tab").forEach(t=>t.onclick=()=>renderGuide(t.dataset.tab));

  const modal = document.getElementById("recordModal");
  const recBird = document.getElementById("recBird");
  document.getElementById("addRecordBtn").onclick = ()=>{
    if(!recBird.options.length) BIRDS.filter(b=>b.nameCn!=="非鸟类").forEach(b=>{const o=document.createElement("option");o.value=b.id;o.textContent=b.nameCn;recBird.appendChild(o);});
    document.getElementById("recDate").value = new Date().toISOString().slice(0,10);
    modal.hidden = false;
  };
  document.getElementById("recCancel").onclick = ()=>modal.hidden=true;
  modal.onclick = e=>{if(e.target===modal)modal.hidden=true;};
  document.getElementById("recSave").onclick = async ()=>{
    const birdId = +recBird.value;
    const b = birdById.get(birdId);
    const file = document.getElementById("recFile").files[0];
    let blob = null;
    if(file){try{blob=await compressImage(file);}catch(e){}}
    await dbAdd({birdId,nameCn:b.nameCn,imgBlob:blob,observeDate:document.getElementById("recDate").value,location:document.getElementById("recLocation").value,note:document.getElementById("recNote").value});
    modal.hidden=true;
    renderCollection();
  };

  window.addEventListener("hashchange",router);
}

bindEvents();
router();