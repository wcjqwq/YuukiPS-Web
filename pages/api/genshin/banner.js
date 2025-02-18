export default function handler(req, res) {
    // TODO: use news later
    res.status(200).json([
        /*
          Standard banner default
        */
        {
            important: true,
            comment: "Standard",
            gachaType: 200,
            scheduleId: 1,
            bannerType: "STANDARD",
            prefabPath: "GachaShowPanel_A022",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A022",
            titlePath: "UI_GACHA_SHOW_PANEL_A022_TITLE",
            costItemId: 224,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 1000,
            fallbackItems4Pool1: [
                1006, 1014, 1015, 1020, 1021, 1023, 1024, 1025, 1027, 1031, 1032, 1034, 1036, 1039, 1043, 1044, 1045,
                1048, 1053, 1055, 1056, 1064,
            ],
            weights5: [
                [1, 75],
                [73, 150],
                [90, 10000],
            ],
        },
        /*
          Beginner banner default (Normal)
        */
        {
            important: true,
            comment: "Beginner's Banner. Do not change for no reason.",
            comment4: "4 stars: Noelle",
            gachaType: 100,
            scheduleId: 2,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A016",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A016",
            titlePath: "UI_GACHA_SHOW_PANEL_A016_TITLE",
            costItemId: 224,
            costItemAmount10: 8,
            gachaTimesLimit: 20,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9999,
            rateUpItems5: [],
            rateUpItems4: [1034],
        },
        /*
          Previous events
        */
        {
            gachaType: 400,
            scheduleId: 101,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A018",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A018",
            titlePath: "UI_GACHA_SHOW_PANEL_A018_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1029],
            rateUpItems2: [1025, 1034, 1043],
        },
        {
            gachaType: 401,
            scheduleId: 102,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A023",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A023",
            titlePath: "UI_GACHA_SHOW_PANEL_A023_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1033],
            rateUpItems2: [1027, 1024, 1039],
        },
        {
            gachaType: 402,
            scheduleId: 103,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A024",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A024",
            titlePath: "UI_GACHA_SHOW_PANEL_A024_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1030],
            rateUpItems2: [1044, 1020, 1036],
        },
        {
            gachaType: 403,
            scheduleId: 104,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A027",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A027",
            titlePath: "UI_GACHA_SHOW_PANEL_A027_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1038],
            rateUpItems2: [1031, 1043, 1032],
        },
        {
            gachaType: 404,
            scheduleId: 105,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A028",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A028",
            titlePath: "UI_GACHA_SHOW_PANEL_A028_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1037],
            rateUpItems2: [1023, 1025, 1034],
        },
        {
            gachaType: 405,
            scheduleId: 106,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A031",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A031",
            titlePath: "UI_GACHA_SHOW_PANEL_A031_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1026],
            rateUpItems2: [1039, 1024, 1044],
        },
        {
            gachaType: 409,
            scheduleId: 107,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A040",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A040",
            titlePath: "UI_GACHA_SHOW_PANEL_A038_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1030],
            rateUpItems2: [1048, 1034, 1039],
        },
        {
            gachaType: 410,
            scheduleId: 108,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A041",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A041",
            titlePath: "UI_GACHA_SHOW_PANEL_A038_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1051],
            rateUpItems2: [1044, 1025, 1024],
        },
        {
            gachaType: 411,
            scheduleId: 109,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A044",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A044",
            titlePath: "UI_GACHA_SHOW_PANEL_A044_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1029],
            rateUpItems2: [1014, 1043, 1031],
        },
        {
            gachaType: 412,
            scheduleId: 110,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A045",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A045",
            titlePath: "UI_GACHA_SHOW_PANEL_A045_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1047],
            rateUpItems2: [1045, 1032, 1020],
        },
        {
            gachaType: 413,
            scheduleId: 111,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A048",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A048",
            titlePath: "UI_GACHA_SHOW_PANEL_A048_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1002],
            rateUpItems2: [1027, 1036, 1048],
        },
        {
            gachaType: 414,
            scheduleId: 112,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A049",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A049",
            titlePath: "UI_GACHA_SHOW_PANEL_A049_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1049],
            rateUpItems2: [1053, 1039, 1044],
        },
        {
            gachaType: 415,
            scheduleId: 113,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A052",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A052",
            titlePath: "UI_GACHA_SHOW_PANEL_A052_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1052],
            rateUpItems2: [1056, 1023, 1043],
        },
        /*
        {
            gachaType: 416,
            scheduleId: 114,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A053",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A053",
            titlePath: "UI_GACHA_SHOW_PANEL_A053_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1054],
            rateUpItems2: [1045, 1024, 1025],
        },
        */
        {
            gachaType: 417,
            scheduleId: 115,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A056",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A056",
            titlePath: "UI_GACHA_SHOW_PANEL_A056_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1033],
            rateUpItems2: [1027, 1036, 1048],
        },
        {
            gachaType: 418,
            scheduleId: 116,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A057",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A057",
            titlePath: "UI_GACHA_SHOW_PANEL_A057_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1046],
            rateUpItems2: [1050, 1039, 1053],
        },
        {
            gachaType: 419,
            scheduleId: 117,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A060",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A060",
            titlePath: "UI_GACHA_SHOW_PANEL_A025_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1038],
            rateUpItems2: [1032, 1034, 1045, 11415],
        },
        {
            gachaType: 420,
            scheduleId: 118,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A062",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A062",
            titlePath: "UI_GACHA_SHOW_PANEL_A062_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1051],
            rateUpItems2: [1032, 1034, 1045],
        },
        {
            gachaType: 421,
            scheduleId: 119,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A061",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A061",
            titlePath: "UI_GACHA_SHOW_PANEL_A061_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1057],
            rateUpItems2: [1055, 1014, 1023],
        },
        {
            gachaType: 422,
            scheduleId: 120,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A065",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A065",
            titlePath: "UI_GACHA_SHOW_PANEL_A065_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1063],
            rateUpItems2: [1027, 1036, 1064],
        },
        {
            gachaType: 423,
            scheduleId: 121,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A069",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A069",
            titlePath: "UI_GACHA_SHOW_PANEL_A028_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1037],
            rateUpItems2: [1024, 1048, 1025],
        },
        {
            gachaType: 424,
            scheduleId: 122,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A071",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A071",
            titlePath: "UI_GACHA_SHOW_PANEL_A071_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1058],
            rateUpItems2: [1031, 1039, 1050],
        },
        {
            gachaType: 425,
            scheduleId: 123,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A076",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A076",
            titlePath: "UI_GACHA_SHOW_PANEL_A076_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            rateUpItems1: [1066],
            rateUpItems2: [1043, 1023, 1064],
        },
        {
            gachaType: 426,
            scheduleId: 124,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A038",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A038",
            titlePath: "UI_GACHA_SHOW_PANEL_A038_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [15503, 11502],
            rateUpItems2: [11410, 14410, 12401, 15401, 13401],
        },
        {
            gachaType: 427,
            scheduleId: 125,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A064",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A064",
            titlePath: "UI_GACHA_SHOW_PANEL_A064_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [15501, 12510],
            rateUpItems2: [11410, 15412, 12402, 13407, 14403],
        },
        {
            gachaType: 428,
            scheduleId: 126,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A035",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A035",
            titlePath: "UI_GACHA_SHOW_PANEL_A035_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [13501, 12502],
            rateUpItems2: [12410, 13406, 14405, 15403, 14402],
        },
        {
            gachaType: 429,
            scheduleId: 127,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A070",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A070",
            titlePath: "UI_GACHA_SHOW_PANEL_A070_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [15502, 13504],
            rateUpItems2: [12410, 11401, 13401, 14401, 15403],
        },
        {
            gachaType: 430,
            scheduleId: 128,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A067",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A067",
            titlePath: "UI_GACHA_SHOW_PANEL_A067_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [13507, 13505],
            rateUpItems2: [13406, 11402, 12401, 14402, 15401],
        },
        {
            gachaType: 431,
            scheduleId: 129,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A075",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A075",
            titlePath: "UI_GACHA_SHOW_PANEL_A075_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [13509, 14506],
            rateUpItems2: [12416, 15416, 11405, 13407, 14403],
        },
        {
            gachaType: 432,
            scheduleId: 130,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A050",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A050",
            titlePath: "UI_GACHA_SHOW_PANEL_A050_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [11509, 13502],
            rateUpItems2: [12306, 13407, 14401, 11401, 15402],
        },
        {
            gachaType: 433,
            scheduleId: 131,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A078",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A078",
            titlePath: "UI_GACHA_SHOW_PANEL_A078_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 50,
            softPity: 50,
            hardPity: 50,
            rateUpItems1: [11510, 15503],
            rateUpItems2: [11402, 12403, 13401, 14402, 15405],
        },
        {
            gachaType: 301,
            scheduleId: 132,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A079",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A079",
            titlePath: "UI_GACHA_SHOW_PANEL_A048_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            maxItemType: 1,
            softPity: 1,
            hardPity: 1,
            rateUpItems1: [1002],
            rateUpItems2: [1002, 1002, 1002],
        },
        /*
        {
            gachaType: 302,
            scheduleId: 133,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A080",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A080",
            titlePath: "UI_GACHA_SHOW_PANEL_A021_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            minItemType: 2,
            eventChance: 75,
            softPity: 1,
            hardPity: 1,
            rateUpItems1: [11509, 12504],
            rateUpItems2: [11401, 12402, 13407, 14401, 15401],
        },
        */
        {
            gachaType: 301,
            scheduleId: 134,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A081",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A081",
            titlePath: "UI_GACHA_SHOW_PANEL_A081_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1034, 1014, 1048],
            rateUpItems5: [1060],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            gachaType: 400,
            scheduleId: 135,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A082",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A082",
            titlePath: "UI_GACHA_SHOW_PANEL_A031_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1034, 1014, 1048],
            rateUpItems5: [1026],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        /*
        {
            gachaType: 302,
            scheduleId: 136,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A083",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A083",
            titlePath: "UI_GACHA_SHOW_PANEL_A021_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            eventChance: 75,
            softPity: 80,
            hardPity: 80,
            rateUpItems4: [11403, 12401, 13406, 14409, 15403],
            rateUpItems5: [15508, 13505],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
        },
        */
        // Banner 2.7 #2
        {
            gachaType: 301,
            scheduleId: 137,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A084",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A084",
            titlePath: "UI_GACHA_SHOW_PANEL_A061_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9999,
            rateUpItems4: [1065, 1036, 1055],
            rateUpItems5: [1057],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            gachaType: 302,
            scheduleId: 138,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A085",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A085",
            titlePath: "UI_GACHA_SHOW_PANEL_A013_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [12410, 11405, 13401, 14403, 15402],
            rateUpItems5: [12510, 14504],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
            eventChance4: 75,
            eventChance5: 75,
        },
        // Banner 2.8
        {
            comment: "Character Event Banner 1",
            comment5: "5 stars: Kaedehara Kazuha",
            comment4: "4 stars: Thoma, Ningguang and Shinakonin Heizou",
            gachaType: 301,
            scheduleId: 139,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A086",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A086",
            titlePath: "UI_GACHA_SHOW_PANEL_A045_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1059, 1050, 1027],
            rateUpItems5: [1047],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            comment: "Character Event Banner 2",
            comment5: "5 stars: Klee",
            comment4: "4 stars: Thoma, Ningguang and Shinakonin Heizou",
            gachaType: 400,
            scheduleId: 140,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A087",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A087",
            titlePath: "UI_GACHA_SHOW_PANEL_A018_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1059, 1050, 1027],
            rateUpItems5: [1029],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            comment: "Weapon Event Banner",
            comment5: "5 stars: Freedom-Sworn, Lost Prayer to the Sacred Winds",
            comment4: "4 stars: The Alley Flash, Rainslasher, Favonius Lance, The Widsith, Mitternachts Waltz",
            gachaType: 302,
            scheduleId: 141,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A088",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A088",
            titlePath: "UI_GACHA_SHOW_PANEL_A013_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            rateUpItems4: [11410, 12405, 13407, 14402, 15412],
            rateUpItems5: [11503, 14502],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
            eventChance4: 75,
            eventChance5: 75,
        },
        // Banner 2.8 #2
        {
            gachaType: 400,
            scheduleId: 142,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A089",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A089",
            titlePath: "UI_GACHA_SHOW_PANEL_A049_TITLE",
            costItem: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 1000,
            rateUpItems4: [1032, 1044, 1064],
            rateUpItems5: [1049, 1041, 1016],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
            eventChance4: 75,
            eventChance5: 75,
        },
        // Banner 3.0
        {
            comment: "Character Event Banner 1",
            comment5: "5 stars: Tighnari",
            comment4: "4 stars: Collei, Diona and Fischl",
            gachaType: 301,
            scheduleId: 143,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A091",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A091",
            titlePath: "UI_GACHA_SHOW_PANEL_A045_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1067, 1039, 1031],
            rateUpItems5: [1069],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            comment: "Character Event Banner 2",
            comment5: "5 stars: Zhongli",
            comment4: "4 stars: Collei, Diona and Fischl",
            gachaType: 400,
            scheduleId: 144,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A092",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A092",
            titlePath: "UI_GACHA_SHOW_PANEL_A018_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1067, 1039, 1031],
            rateUpItems5: [1030],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            comment: "Weapon Event Banner",
            comment5: "5 stars: Hunter's Path, Vortex Vanquisher",
            comment4: "4 stars: The Stringless, Favonius Sword, Favonius Lance, Favonius Codex, The Bell",
            gachaType: 302,
            scheduleId: 145,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A093",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A093",
            titlePath: "UI_GACHA_SHOW_PANEL_A013_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            rateUpItems4: [15402, 11401, 13407, 14401, 12402],
            rateUpItems5: [15511, 13504],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
            eventChance4: 75,
            eventChance5: 75,
        },
        // Banner 3.0 #2
        {
            comment: "Character Event Banner 1",
            comment5: "5 stars: Ganyu",
            comment4: "4 stars: Dori,Xingqiu and Sucrose",
            gachaType: 301,
            scheduleId: 146,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A094",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A094",
            titlePath: "UI_GACHA_SHOW_PANEL_A094_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1068, 1025, 1043],
            rateUpItems5: [1037],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            comment: "Character Event Banner 2",
            comment5: "5 stars: Sangonomiya Kokomi",
            comment4: "4 stars: Dori,Xingqiu and Sucrose",
            gachaType: 400,
            scheduleId: 147,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A095",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A095",
            titlePath: "UI_GACHA_SHOW_PANEL_A053_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1068, 1025, 1043],
            rateUpItems5: [1054],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            comment: "Weapon Event Banner",
            comment5: "5 stars: Amos' Bow,Everlasting Moonglow",
            comment4: "4 stars: Rust,Sacrificial,Dragon's Bane,Favonius Greatsword,Eye of Perception",
            gachaType: 302,
            scheduleId: 148,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A096",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A096",
            titlePath: "UI_GACHA_SHOW_PANEL_A021_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            rateUpItems4: [15405, 11403, 13401, 12401, 14409],
            rateUpItems5: [15502, 14506],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
            eventChance4: 75,
            eventChance5: 75,
        },
        // 3.1 #1
        {
            important: false,
            comment: "Character Event Banner 1",
            gachaType: 301,
            scheduleId: 149,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A097",
            titlePath: "UI_GACHA_SHOW_PANEL_A097_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1072, 1065, 1053],
            rateUpItems5: [1071],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            important: false,
            comment: "Character Event Banner 2",
            gachaType: 400,
            scheduleId: 150,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A098",
            titlePath: "UI_GACHA_SHOW_PANEL_A036_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9998,
            rateUpItems4: [1072, 1065, 1053],
            rateUpItems5: [1022],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            important: false,
            comment: "Weapon Event Banner",
            gachaType: 302,
            scheduleId: 151,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A099",
            titlePath: "UI_GACHA_SHOW_PANEL_A021_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1924992000,
            sortId: 9997,
            rateUpItems4: [12415, 11405, 13407, 14403, 15401],
            rateUpItems5: [13511, 15503],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
            eventChance4: 75,
            eventChance5: 75,
        },
        // 3.1 #2
        {
            important: true,
            comment: "Character Event Banner 1",
            comment5: "5 stars: Nilou",
            comment4: "4 stars: Barbara, Xiangling, Beidou",
            gachaType: 301,
            scheduleId: 152,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A100",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A100",
            titlePath: "UI_GACHA_SHOW_PANEL_A100_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1667285940,
            sortId: 9998,
            rateUpItems4: [1014, 1023, 1024],
            rateUpItems5: [1070],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            important: true,
            comment: "Character Event Banner 2",
            comment5: "5 stars: Albedo",
            comment4: "4 stars: Barbara, Xiangling, Beidou",
            gachaType: 400,
            scheduleId: 153,
            bannerType: "EVENT",
            prefabPath: "GachaShowPanel_A101",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A101",
            titlePath: "UI_GACHA_SHOW_PANEL_A101_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1667285940,
            sortId: 9998,
            rateUpItems4: [1014, 1023, 1024],
            rateUpItems5: [1038],
            fallbackItems5Pool2: [],
            weights5: [
                [1, 80],
                [73, 80],
                [90, 10000],
            ],
        },
        {
            important: true,
            comment: "Weapon Event Banner",
            comment5: "5 stars: Key of Khaj-Nisut, Primordial Jade Cutter",
            comment4: "4 stars: Favonius Sword, The Stringless, Favonius Lance, Favonius Codex, The Bell",
            gachaType: 302,
            scheduleId: 154,
            bannerType: "WEAPON",
            prefabPath: "GachaShowPanel_A102",
            previewPrefabPath: "UI_Tab_GachaShowPanel_A102",
            titlePath: "UI_GACHA_SHOW_PANEL_A102_TITLE",
            costItemId: 223,
            beginTime: 0,
            endTime: 1665741540,
            sortId: 9997,
            rateUpItems4: [15403, 11418, 13401, 14416, 12405],
            rateUpItems5: [11511, 11505],
            fallbackItems5Pool1: [],
            weights4: [
                [1, 600],
                [7, 600],
                [8, 6600],
                [10, 12600],
            ],
            weights5: [
                [1, 100],
                [62, 100],
                [73, 7800],
                [80, 10000],
            ],
            eventChance4: 75,
            eventChance5: 75,
        },
    ]);
}
