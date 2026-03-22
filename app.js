const i18n = {
    en: {
        title: "STRIDE LAB Niseko <br> <span class=\"brand-text\">ALTRA Matchmaker</span>",
        subtitle: "Supporting your 'Lifelong Sports' journey in Niseko's rich nature. Answer a few questions to find your perfect Altra shoes for natural running and injury prevention.",
        startBtn: "Start Matchmaker",
        backBtn: "Back",
        resultTitle: "Your Top Match",
        retakeBtn: "Retake Quiz",
        specStack: "Stack Height",
        specSupport: "Support Type",
        specWaterproof: "Waterproof",
        specColors: "Available Colors",
        officialLink: "View on Official Shop ↗",
        wpYes: "Yes",
        wpNo: "No",
        staffBtn: "📋 Staff View",
        customerBtn: "🏃 Customer Mode",
        staffTitle: "Staff Shoe Database",
        thName: "Model",
        thCategory: "Category",
        thSole: "Midsole / Outsole",
        thSpecs: "Specs",
        thEndorsed: "Endorsed By",
        optGenderAll: "All Genders",
        optGenderM: "Men's",
        optGenderW: "Women's",
        optCatAll: "All Categories",
        optCatTrail: "🏔️ Trail Running",
        optCatRoad: "🛣️ Road Running",
        optCatSnow: "🏕️ Outdoor Adventure",
        optCatWalking: "🚶 Walking",
        optCatLifestyle: "🏙️ Lifestyle",
        optCatGym: "🏋️ Gym Training",
        optCatWaterproof: "☔ Waterproof",
        optSortDef: "Sort: Default",
        optSortName: "Name (A-Z)",
        optSortStack: "Stack (Low-High)",
        optSortStackHigh: "Stack (High-Low)",
        searchPlaceholder: "Search models..."
    },
    ja: {
        title: "STRIDE LAB ニセコ <br> <span class=\"brand-text\">ALTRA セレクター</span>",
        subtitle: "ニセコの豊かな自然の中で「生涯スポーツ」を楽しむために。ケガの予防と自然な走りをサポートする、あなたに最適なアルトラのシューズをご提案します。",
        startBtn: "診断を始める",
        backBtn: "戻る",
        resultTitle: "おすすめのシューズ",
        retakeBtn: "もう一度診断する",
        specStack: "スタックハイト (厚さ)",
        specSupport: "サポートタイプ",
        specWaterproof: "防水仕様",
        specColors: "カラーバリエーション",
        officialLink: "公式ショップで見る ↗",
        wpYes: "あり",
        wpNo: "なし (通気性重視)",
        staffBtn: "📋 店員用一覧",
        customerBtn: "🏃 接客モード",
        staffTitle: "店員用 搭載機能データベース",
        thName: "モデル名",
        thCategory: "カテゴリー",
        thSole: "ミッドソール / アウトソール",
        thSpecs: "スタック / 特殊素材",
        thEndorsed: "愛用者・おすすめ層",
        optGenderAll: "すべての性別",
        optGenderM: "メンズ",
        optGenderW: "ウィメンズ",
        optCatAll: "すべてのカテゴリー",
        optCatTrail: "🏔️ トレイルランニング",
        optCatRoad: "🛣️ ロードランニング",
        optCatSnow: "🏕️ アウトドアアドベンチャー",
        optCatWalking: "🚶 ウォーキング",
        optCatLifestyle: "🏙️ ライフスタイル",
        optCatGym: "🏋️ ジムトレーニング",
        optCatWaterproof: "☔ 防水シューズ",
        optSortDef: "並び順: デフォルト",
        optSortName: "名前順 (A-Z)",
        optSortStack: "スタックハイト (低い順)",
        optSortStackHigh: "スタックハイト (高い順)",
        searchPlaceholder: "モデル名で検索..."
    }
};

const shoes = [
    {
        id: 'timp6gtxm26ss',
        name: "TIMP 6 GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/timp6gtxm26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85SP_001-HERO_LEFT_4ffdcf9e-bc08-419f-bae5-c3cf796801a8.jpg?v=1765416363',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 6 GTX is built for natural movement.', ja: 'TIMP 6 GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK, TAN", ja: "BLACK/BLACK, TAN" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp6midgtxw26ss',
        name: "TIMP 6 MID GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/timp6midgtxw26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85U3_001-HERO_LEFT.jpg?v=1765350336',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 6 MID GTX is built for natural movement.', ja: 'TIMP 6 MID GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK", ja: "BLACK/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp6gtxw26ss',
        name: "TIMP 6 GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/timp6gtxw26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85SP_001-HERO_LEFT.jpg?v=1765350609',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 6 GTX is built for natural movement.', ja: 'TIMP 6 GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK", ja: "BLACK/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp6midgtxm26ss',
        name: "TIMP 6 MID GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/timp6midgtxm26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85UR_001-HERO_LEFT.jpg?v=1765416695',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 6 MID GTX is built for natural movement.', ja: 'TIMP 6 MID GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK", ja: "BLACK/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'kingmt2w25fw',
        name: "KING MT 2 (Women\'s)",
        url: 'https://altrafootwear.jp/products/kingmt2w25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85S4_000_L_HERO.jpg?v=1752755418',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'KING MT 2 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたKING MT 2。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK", ja: "BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'kingmt2mm25fw',
        name: "KING MT 2 M (Men\'s)",
        url: 'https://altrafootwear.jp/products/kingmt2mm25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/kingmt2black1.jpg?v=1741060313',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'KING MT 2 M is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたKING MT 2 M。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK", ja: "BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'altrasolsticext3w25fw',
        name: "SOLSTICE XT 3 (Women\'s)",
        url: 'https://altrafootwear.jp/products/altrasolsticext3w25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85Q6_000_L_HERO.jpg?v=1754447421',
        gender: 'W',
        category: [
            { en: 'Gym Training', ja: 'ジムトレーニング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'SOLSTICE XT 3 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたSOLSTICE XT 3。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "WHITE, BLACK", ja: "WHITE, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'altrasolsticext3m25fw',
        name: "SOLSTICE XT 3 (Men\'s)",
        url: 'https://altrafootwear.jp/products/altrasolsticext3m25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85Q5_000_L_HERO.jpg?v=1754447172',
        gender: 'M',
        category: [
            { en: 'Gym Training', ja: 'ジムトレーニング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'SOLSTICE XT 3 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたSOLSTICE XT 3。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "WHITE, BLACK", ja: "WHITE, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'experiencewild3-w26ss',
        name: "EXPERIENCE WILD 3+ (Women\'s)",
        url: 'https://altrafootwear.jp/products/experiencewild3-w26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85UZ_001-HERO_LEFT.jpg?v=1765352548',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'EXPERIENCE WILD 3+ is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたEXPERIENCE WILD 3+。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/BLACK, SAND", ja: "BLACK/BLACK, SAND" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'experienceflowstw26ss',
        name: "EXPERIENCE FLOW ST (Women\'s)",
        url: 'https://altrafootwear.jp/products/experienceflowstw26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RK_161-HERO_LEFT.jpg?v=1765354692',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'EXPERIENCE FLOW ST is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたEXPERIENCE FLOW ST。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "WHITE/CORAL, BLACK/WHITE", ja: "WHITE/CORAL, BLACK/WHITE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'experienceflow3w26ss',
        name: "EXPERIENCE FLOW 3 (Women\'s)",
        url: 'https://altrafootwear.jp/products/experienceflow3w26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85U7_161-HERO_LEFT.jpg?v=1765355301',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'EXPERIENCE FLOW 3 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたEXPERIENCE FLOW 3。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "WHITE/CORAL, BLACK/WHITE", ja: "WHITE/CORAL, BLACK/WHITE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'torin8gtxw25ss',
        name: "TORIN 8 GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/torin8gtxw25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85QH001-HERO_LEFT.jpg?v=1741261495',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TORIN 8 GTX is built for natural movement.', ja: 'TORIN 8 GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road", "snow", "mixed"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK", ja: "BLACK/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'torin8widew25ss',
        name: "TORIN 8 WIDE (Women\'s)",
        url: 'https://altrafootwear.jp/products/torin8widew25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85QK_010-HERO_LEFT.jpg?v=1741261413',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TORIN 8 WIDE is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTORIN 8 WIDE。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/WHITE", ja: "BLACK/WHITE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'torin8w25ss',
        name: "TORIN 8 (Women\'s)",
        url: 'https://altrafootwear.jp/products/torin8w25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85QF_141-HERO_LEFT_71041600-253e-45d0-ad26-9206cf561428.jpg?v=1771838300',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TORIN 8 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTORIN 8。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/BLACK, BLACK/WHITE, TAN, NAVY, DARK BLUE, WHITE/LIGHT BLUE, WHITE/GREEN", ja: "BLACK/BLACK, BLACK/WHITE, TAN, NAVY, DARK BLUE, WHITE/LIGHT BLUE, WHITE/GREEN" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'experiencewild3-m26ss',
        name: "EXPERIENCE WILD 3+ (Men\'s)",
        url: 'https://altrafootwear.jp/products/experiencewild3-m26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85V0_001-HERO_LEFT.jpg?v=1765421635',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'EXPERIENCE WILD 3+ is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたEXPERIENCE WILD 3+。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/BLACK, BROWN, WHITE/LIME", ja: "BLACK/BLACK, BROWN, WHITE/LIME" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'experienceflowstm26ss',
        name: "EXPERIENCE FLOW ST (Men\'s)",
        url: 'https://altrafootwear.jp/products/experienceflowstm26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RJ_420-HERO_LEFT.jpg?v=1765422622',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'EXPERIENCE FLOW ST is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたEXPERIENCE FLOW ST。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLUE/GRAY, BLACK/WHITE", ja: "BLUE/GRAY, BLACK/WHITE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'experienceflow3m26ss',
        name: "EXPERIENCE FLOW 3 (Men\'s)",
        url: 'https://altrafootwear.jp/products/experienceflow3m26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85SS_161-HERO_LEFT.jpg?v=1765423329',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'EXPERIENCE FLOW 3 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたEXPERIENCE FLOW 3。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "LIGHT GRAY, BLACK/BLACK, WHITE/CORAL", ja: "LIGHT GRAY, BLACK/BLACK, WHITE/CORAL" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'torin8gtxm25ss',
        name: "TORIN 8 GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/torin8gtxm25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85QG001-HERO_LEFT.jpg?v=1768283136',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TORIN 8 GTX is built for natural movement.', ja: 'TORIN 8 GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road", "snow", "mixed"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK, DUSTY OLIVE", ja: "BLACK/BLACK, DUSTY OLIVE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'torin8widem25ss',
        name: "TORIN 8 WIDE (Men\'s)",
        url: 'https://altrafootwear.jp/products/torin8widem25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85QJ_010-HERO_LEFT.jpg?v=1741261190',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TORIN 8 WIDE is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTORIN 8 WIDE。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/WHITE", ja: "BLACK/WHITE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'torin8m25ss',
        name: "TORIN 8 (Men\'s)",
        url: 'https://altrafootwear.jp/products/torin8m25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85QE_102-HERO_LEFT_036f07f5-afea-4066-b93f-02c3dce3605b.jpg?v=1771838254',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TORIN 8 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTORIN 8。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "LIGHT GRAY, BLACK/BLACK, WHITE/BLUE, BLACK/WHITE, BLACK/ORANGE, DARK SHADOW, DUSTY OLIVE, WHITE/LIME", ja: "LIGHT GRAY, BLACK/BLACK, WHITE/BLUE, BLACK/WHITE, BLACK/ORANGE, DARK SHADOW, DUSTY OLIVE, WHITE/LIME" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9wpmidw25ss',
        name: "LONE PEAK 9 WP MID (Women\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9wpmidw25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85PU_315-HERO_LEFT_39a28753-d5c8-4a52-a497-114c547c39a8.jpg?v=1770009523',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK 9 WP MID is built for natural movement.', ja: 'LONE PEAK 9 WP MIDは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "DUSTY OLIVE, BLACK", ja: "DUSTY OLIVE, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9wpmidm25ss',
        name: "LONE PEAK 9 WP MID (Men\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9wpmidm25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85PK_992-HERO_LEFT_486857ea-47f9-4115-9ace-2da65b692d8e.jpg?v=1770009640',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK 9 WP MID is built for natural movement.', ja: 'LONE PEAK 9 WP MIDは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "NAVY, BLACK, BROWN/TAUPE", ja: "NAVY, BLACK, BROWN/TAUPE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9-widew25ss',
        name: "LONE PEAK 9+ WIDE (Women\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9-widew25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85S2_000-HERO_LEFT_63ccc44d-d584-407b-8f10-fca394328578.jpg?v=1738024080',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: '万能のレジェンド' },
        desc: { en: 'LONE PEAK 9+ WIDE is built for natural movement.', ja: 'トレイルシューズの原点。ちょっとしたダート走行からスルーハイクまであらゆる用途に最適。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK", ja: "BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9-w25ss',
        name: "LONE PEAK 9+ (Women\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9-w25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RH_223-HERO_LEFT_0d1014f6-e523-4594-be79-e37dad79b39d.jpg?v=1770009727',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: '万能のレジェンド' },
        desc: { en: 'LONE PEAK 9+ is built for natural movement.', ja: 'トレイルシューズの原点。ちょっとしたダート走行からスルーハイクまであらゆる用途に最適。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "MAROON, TEAL/BLACK, TAUPE, TEAL, GLACIER, BROWN/TAN, PURPLE/ORANGE, GRAY/ORANGE, GRAY, BLACK", ja: "MAROON, TEAL/BLACK, TAUPE, TEAL, GLACIER, BROWN/TAN, PURPLE/ORANGE, GRAY/ORANGE, GRAY, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9-widem25ss',
        name: "LONE PEAK 9+ WIDE (Men\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9-widem25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85S2_000-HERO_LEFT_babb7309-4800-4aee-b2db-abd2ff6b4cec.jpg?v=1738023965',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: '万能のレジェンド' },
        desc: { en: 'LONE PEAK 9+ WIDE is built for natural movement.', ja: 'トレイルシューズの原点。ちょっとしたダート走行からスルーハイクまであらゆる用途に最適。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK", ja: "BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9-m25ss',
        name: "LONE PEAK 9+ (Men\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9-m25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RG_280-HERO_LEFT_95629764-dcdb-469b-b4ec-14ce6f448b89.jpg?v=1770009806',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: '万能のレジェンド' },
        desc: { en: 'LONE PEAK 9+ is built for natural movement.', ja: 'トレイルシューズの原点。ちょっとしたダート走行からスルーハイクまであらゆる用途に最適。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "LIME, RED, BASALT, TAN, BLUE, NAVY, BLACK/ORANGE, GREEN, DARK BLUE, DUSTY OLIVE, GRAY, BLACK", ja: "LIME, RED, BASALT, TAN, BLUE, NAVY, BLACK/ORANGE, GREEN, DARK BLUE, DUSTY OLIVE, GRAY, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9-gtxw26ss',
        name: "LONE PEAK 9+ GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9-gtxw26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85SN_001-HERO_LEFT.jpg?v=1765350084',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK 9+ GTX is built for natural movement.', ja: 'LONE PEAK 9+ GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK", ja: "BLACK/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9-gtxm26ss',
        name: "LONE PEAK 9+ GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9-gtxm26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85UT_315-HERO_LEFT.jpg?v=1765417626',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK 9+ GTX is built for natural movement.', ja: 'LONE PEAK 9+ GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "DUSTY OLIVE, BLACK/BLACK", ja: "DUSTY OLIVE, BLACK/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9wploww25ss',
        name: "LONE PEAK 9 WP LOW (Women\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9wploww25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/lonepeak9wplow_w_Black_1.jpg?v=1768282861',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK 9 WP LOW is built for natural movement.', ja: 'LONE PEAK 9 WP LOWは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "MAROON, BLACK", ja: "MAROON, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lonepeak9wplowm25ss',
        name: "LONE PEAK 9 WP LOW (Men\'s)",
        url: 'https://altrafootwear.jp/products/lonepeak9wplowm25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/lonepeak9wplow_m_DustyOlive_1.jpg?v=1768282909',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK 9 WP LOW is built for natural movement.', ja: 'LONE PEAK 9 WP LOWは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "DUSTY OLIVE, TAUPE", ja: "DUSTY OLIVE, TAUPE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lone-peak-all-weather-mid-2-m',
        name: "LONE PEAK ALL-WTHR MID 2 (Men\'s)",
        url: 'https://altrafootwear.jp/products/lone-peak-all-weather-mid-2-m',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/products/AL0A7R6U_000_L_HERO.jpg?v=1714458599',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK ALL-WTHR MID 2 is built for natural movement.', ja: 'LONE PEAK ALL-WTHR MID 2は防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "DARK CLAY, BLACK", ja: "DARK CLAY, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp5m24ss',
        name: "TIMP 5 (Men\'s)",
        url: 'https://altrafootwear.jp/products/timp5m24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/Mdustyolive.jpg?v=1767940320',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP 5 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP 5。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "LIME, BLACK/BLACK, BLACK/GREEN, GRAY/BLUE, DUSTY OLIVE, GREEN, ORANGE/TEAL, BROWN/TAN, BLUE/ORANGE, GREEN/GRAY, SAND, BLACK", ja: "LIME, BLACK/BLACK, BLACK/GREEN, GRAY/BLUE, DUSTY OLIVE, GREEN, ORANGE/TEAL, BROWN/TAN, BLUE/ORANGE, GREEN/GRAY, SAND, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lone-peak-7-w',
        name: "LONE PEAK 7 (Women\'s)",
        url: 'https://altrafootwear.jp/products/lone-peak-7-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A7R7G_330_L_HERO.jpg?v=1724289120',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'LONE PEAK 7 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたLONE PEAK 7。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "ORANGE, DARK RED, TAN, DARK PURPLE, PURPLE/ORANGE, GREEN, BLUE/ORANGE", ja: "ORANGE, DARK RED, TAN, DARK PURPLE, PURPLE/ORANGE, GREEN, BLUE/ORANGE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'lone-peak-all-weather-mid-2-w',
        name: "LONE PEAK ALL-WTHR MID 2 (Women\'s)",
        url: 'https://altrafootwear.jp/products/lone-peak-all-weather-mid-2-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/products/AL0A7R7J_000_L_HERO.jpg?v=1678633366',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'LONE PEAK ALL-WTHR MID 2 is built for natural movement.', ja: 'LONE PEAK ALL-WTHR MID 2は防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "LIGHT BLUE, BLACK", ja: "LIGHT BLUE, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'solstice-xt-2-w',
        name: "SOLSTICE XT 2 (Women\'s)",
        url: 'https://altrafootwear.jp/products/solstice-xt-2-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/SOLSTICEWBLACK1.png?v=1685338539',
        gender: 'W',
        category: [
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'SOLSTICE XT 2 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたSOLSTICE XT 2。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK", ja: "BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp6m26ss',
        name: "TIMP 6 (Men\'s)",
        url: 'https://altrafootwear.jp/products/timp6m26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85T6_315-HERO_LEFT.jpg?v=1767956378',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP 6 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP 6。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "DUSTY OLIVE, TAUPE, GRAY, BLACK/BLACK", ja: "DUSTY OLIVE, TAUPE, GRAY, BLACK/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp6w26ss',
        name: "TIMP 6 (Women\'s)",
        url: 'https://altrafootwear.jp/products/timp6w26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85US_342-HERO_LEFT.jpg?v=1765353398',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP 6 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP 6。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK/BLACK, MINT, DARK BLUE", ja: "BLACK/BLACK, MINT, DARK BLUE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympus6ww24fw',
        name: "OLYMPUS 6 (Women\'s)",
        url: 'https://altrafootwear.jp/products/olympus6ww24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85NK_223-HERO_LEFT_b740ad3d-13e6-457d-a0e0-87a059b55f0c.jpg?v=1767838112',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'OLYMPUS 6 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたOLYMPUS 6。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "GRAY SHADOW, BLACK/BLACK, BLACK/GREEN, TAUPE, WHITE/WHITE, GRAY/BLUE, TEAL, GRAY, RED/ORANGE, SAND, BLACK", ja: "GRAY SHADOW, BLACK/BLACK, BLACK/GREEN, TAUPE, WHITE/WHITE, GRAY/BLUE, TEAL, GRAY, RED/ORANGE, SAND, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympus6m24fw',
        name: "OLYMPUS 6 (Men\'s)",
        url: 'https://altrafootwear.jp/products/olympus6m24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85NJ_831-HERO_LEFT_2ec3e75f-dc24-40db-b61d-694090262b88.jpg?v=1767837991',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'OLYMPUS 6 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたOLYMPUS 6。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK/BLACK, RED, BLACK/GREEN, TAUPE, WHITE/WHITE, ORANGE/CLAY, BLACK/ORANGE, DUSTY OLIVE, GREEN, DARK BLUE, SAND", ja: "BLACK/BLACK, RED, BLACK/GREEN, TAUPE, WHITE/WHITE, ORANGE/CLAY, BLACK/ORANGE, DUSTY OLIVE, GREEN, DARK BLUE, SAND" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'experiencewildww24fw',
        name: "EXPERIENCE WILD (Women\'s)",
        url: 'https://altrafootwear.jp/products/experiencewildww24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/EXWILD_W_redorange.jpg?v=1715657000',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'EXPERIENCE WILD is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたEXPERIENCE WILD。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "RED/ORANGE, PURPLE, BLACK", ja: "RED/ORANGE, PURPLE, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympus-5-hike-low-gtx-w',
        name: "OLYMPUS 5 HIKE LOW GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/olympus-5-hike-low-gtx-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/products/OLYMPUS5HIKELOWGTXWGRAYBLACK1.webp?v=1767928122',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'OLYMPUS 5 HIKE LOW GTX is built for natural movement.', ja: 'OLYMPUS 5 HIKE LOW GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "GRAY/BLACK, MINERAL BLUE", ja: "GRAY/BLACK, MINERAL BLUE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympus-5-hike-mid-gtx-w',
        name: "OLYMPUS 5 HIKE MID GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/olympus-5-hike-mid-gtx-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/products/OLYMPUS5HIKEMIDGTXWSAND1.webp?v=1767928519',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'OLYMPUS 5 HIKE MID GTX is built for natural movement.', ja: 'OLYMPUS 5 HIKE MID GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/GRAY, SAND", ja: "BLACK/GRAY, SAND" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'torin7w23fw',
        name: "TORIN 7 (Women\'s)",
        url: 'https://altrafootwear.jp/products/torin7w23fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A82CZ_770_L_HERO.jpg?v=1768283640',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TORIN 7 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTORIN 7。' },
        stackHeight: '28mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["moderate"], support: ["neutral"], goal: ["everyday"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "PINK, DARK GRAY, WHITE/BLUE, MINT, WHITE/BLACK, YELLOW, BLACK", ja: "PINK, DARK GRAY, WHITE/BLUE, MINT, WHITE/BLACK, YELLOW, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'fwdvia2w26ss',
        name: "FWD VIA 2 (Women\'s)",
        url: 'https://altrafootwear.jp/products/fwdvia2w26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85TW_161-HERO_LEFT.jpg?v=1760527340',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'FWD VIA 2 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたFWD VIA 2。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "WHITE, WHITE/CORAL, BLACK/WHITE", ja: "WHITE, WHITE/CORAL, BLACK/WHITE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'fwdvia2m26ss',
        name: "FWD VIA 2 (Men\'s)",
        url: 'https://altrafootwear.jp/products/fwdvia2m26ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85SR_161-HERO_LEFT.jpg?v=1768286231',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'FWD VIA 2 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたFWD VIA 2。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "LIGHT GRAY, BLACK/BLACK, WHITE/CORAL", ja: "LIGHT GRAY, BLACK/BLACK, WHITE/CORAL" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympus275w25fw',
        name: "OLYMPUS 275 (Women\'s)",
        url: 'https://altrafootwear.jp/products/olympus275w25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RU_161-HERO_LEFT_b489bf2c-7a3d-4ff1-ba97-09d67d9c715b.jpg?v=1766107781',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'OLYMPUS 275 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたOLYMPUS 275。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "WHITE/CORAL, BLACK/GRAY, CORAL/BLACK", ja: "WHITE/CORAL, BLACK/GRAY, CORAL/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympus275m25fw',
        name: "OLYMPUS 275 (Men\'s)",
        url: 'https://altrafootwear.jp/products/olympus275m25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RT_923-HERO_LEFT.jpg?v=1767924750',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'OLYMPUS 275 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたOLYMPUS 275。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK/YELLOW, GRAY/ORANGE, TAUPE", ja: "BLACK/YELLOW, GRAY/ORANGE, TAUPE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'montblanccarbonxsoarw25fw',
        name: "MONT BLANC CARBON x SOAR (Women\'s)",
        url: 'https://altrafootwear.jp/products/montblanccarbonxsoarw25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85V1_99L-HERO_LEFT.jpg?v=1751862143',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC CARBON x SOAR is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC CARBON x SOAR。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "SOAR", ja: "SOAR" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'montblanccarbonxsoarm25fw',
        name: "MONT BLANC CARBON x SOAR (Men\'s)",
        url: 'https://altrafootwear.jp/products/montblanccarbonxsoarm25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85TS_99L-HERO_LEFT.jpg?v=1751862122',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC CARBON x SOAR is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC CARBON x SOAR。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "SOAR", ja: "SOAR" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'paradigm8m25fw',
        name: "PARADIGM 8 (Men\'s)",
        url: 'https://altrafootwear.jp/products/paradigm8m25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RM_102-HERO_LEFT_bb17822e-5495-4cce-beda-2076bd2801af.jpg?v=1769050878',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'PARADIGM 8 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたPARADIGM 8。' },
        stackHeight: '30mm+',
        support: { en: 'Support', ja: 'サポートあり' },
        attributes: { terrain: ["road"], cushion: ["max"], support: ["support"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "NAVY/BLACK, TAUPE, WHITE/LIME, BLACK/WHITE", ja: "NAVY/BLACK, TAUPE, WHITE/LIME, BLACK/WHITE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'paradigm8w25fw',
        name: "PARADIGM 8 (Women\'s)",
        url: 'https://altrafootwear.jp/products/paradigm8w25fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RN_922-HERO_LEFT_b94a68ae-676b-48d4-b4e1-e782314af571.jpg?v=1769050983',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'PARADIGM 8 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたPARADIGM 8。' },
        stackHeight: '30mm+',
        support: { en: 'Support', ja: 'サポートあり' },
        attributes: { terrain: ["road"], cushion: ["max"], support: ["support"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "LIGHT GRAY, TAN, NAVY", ja: "LIGHT GRAY, TAN, NAVY" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'montblancspeedw25ss',
        name: "MONT BLANC SPEED (Women\'s)",
        url: 'https://altrafootwear.jp/products/montblancspeedw25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85S0_161-HERO_LEFT.jpg?v=1754382962',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC SPEED is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC SPEED。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "WHITE/CORAL, BLACK/LIME", ja: "WHITE/CORAL, BLACK/LIME" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'montblancspeedm25ss',
        name: "MONT BLANC SPEED (Men\'s)",
        url: 'https://altrafootwear.jp/products/montblancspeedm25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85RZ_161-HERO_LEFT.jpg?v=1754378402',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC SPEED is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC SPEED。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "WHITE/CORAL, BLACK/LIME", ja: "WHITE/CORAL, BLACK/LIME" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'superior7w25ss',
        name: "SUPERIOR 7 (Women\'s)",
        url: 'https://altrafootwear.jp/products/superior7w25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85Q8_923-HERO_LEFT.jpg?v=1768286783',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'SUPERIOR 7 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたSUPERIOR 7。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "TAUPE, GRAY, BLACK", ja: "TAUPE, GRAY, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'superior7m25ss',
        name: "SUPERIOR 7 (Men\'s)",
        url: 'https://altrafootwear.jp/products/superior7m25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85Q7_923-HERO_LEFT.jpg?v=1768286825',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'SUPERIOR 7 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたSUPERIOR 7。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK/GRAY, TAUPE, DARK GRAY", ja: "BLACK/GRAY, TAUPE, DARK GRAY" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp5boaw25ss',
        name: "TIMP 5 BOA (Women\'s)",
        url: 'https://altrafootwear.jp/products/timp5boaw25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85QA_262-HERO_LEFT.jpg?v=1768286951',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP 5 BOA is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP 5 BOA。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK/BLACK, WHITE/CORAL, GRAY/PINK", ja: "BLACK/BLACK, WHITE/CORAL, GRAY/PINK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp5boam25ss',
        name: "TIMP 5 BOA (Men\'s)",
        url: 'https://altrafootwear.jp/products/timp5boam25ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85Q9_280-HERO_LEFT.jpg?v=1754377099',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP 5 BOA is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP 5 BOA。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "BLACK/BLACK, WHITE/CORAL, GRAY/ORANGE", ja: "BLACK/BLACK, WHITE/CORAL, GRAY/ORANGE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },

    {
        id: 'olympushikemidgtx2m24fw',
        name: "OLYMPUS 6 HIKE MID GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/olympushikemidgtx2m24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/OLYMPUS6HIKEMIDGTXMBlack_1.jpg?v=1721286962',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'OLYMPUS 6 HIKE MID GTX is built for natural movement.', ja: 'OLYMPUS 6 HIKE MID GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "TAN, BLACK", ja: "TAN, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympushikemidgtx2ww24fw',
        name: "OLYMPUS 6 HIKE MID GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/olympushikemidgtx2ww24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/OLYMPUS6HIKEMIDGTXWBlack_1.jpg?v=1719972419',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'OLYMPUS 6 HIKE MID GTX is built for natural movement.', ja: 'OLYMPUS 6 HIKE MID GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK", ja: "BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympushikelowgtx2m24fw',
        name: "OLYMPUS 6 HIKE LOW GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/olympushikelowgtx2m24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85NM_992-HERO_LEFT_f839c817-d370-45b6-944a-ea917977a4b1.jpg?v=1769051430',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'OLYMPUS 6 HIKE LOW GTX is built for natural movement.', ja: 'OLYMPUS 6 HIKE LOW GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK, BROWN/TAUPE", ja: "BLACK, BROWN/TAUPE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'olympushikelowgtx2ww24fw',
        name: "OLYMPUS 6 HIKE LOW GTX W (Women\'s)",
        url: 'https://altrafootwear.jp/products/olympushikelowgtx2ww24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/OLYMPUS6HIKELOWGTXWBLACK_1.jpg?v=1721286379',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'OLYMPUS 6 HIKE LOW GTX W is built for natural movement.', ja: 'OLYMPUS 6 HIKE LOW GTX Wは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK", ja: "BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp5gtxww24fw',
        name: "TIMP 5 GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/timp5gtxww24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85Q2_001HERO_LEFT.jpg?v=1768287093',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 5 GTX is built for natural movement.', ja: 'TIMP 5 GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK, GRAY, BLACK", ja: "BLACK/BLACK, GRAY, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp5gtxm24fw',
        name: "TIMP 5 GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/timp5gtxm24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85Q1_001-HERO_LEFT.jpg?v=1754379054',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 5 GTX is built for natural movement.', ja: 'TIMP 5 GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "BLACK/BLACK, DUSTY OLIVE, BLACK", ja: "BLACK/BLACK, DUSTY OLIVE, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'vanishcarbon2m24ss',
        name: "VANISH CARBON 2 (Men\'s)",
        url: 'https://altrafootwear.jp/products/vanishcarbon2m24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85PC_431-HERO_LEFT.jpg?v=1758291157',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'VANISH CARBON 2 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたVANISH CARBON 2。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "GRAY/LIME, WHITE/CORAL, WHITE/LIME, BLUE/LIME", ja: "GRAY/LIME, WHITE/CORAL, WHITE/LIME, BLUE/LIME" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'vanishcarbon2w24ss',
        name: "VANISH CARBON 2 (Women\'s)",
        url: 'https://altrafootwear.jp/products/vanishcarbon2w24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85PD_108-HERO_LEFT.jpg?v=1758291305',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'VANISH CARBON 2 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたVANISH CARBON 2。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "WHITE/ORANGE, GRAY/BLUE, WHITE/LIME, WHITE/CORAL", ja: "WHITE/ORANGE, GRAY/BLUE, WHITE/LIME, WHITE/CORAL" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'escalante4m24fw',
        name: "ESCALANTE 4 (Men\'s)",
        url: 'https://altrafootwear.jp/products/escalante4m24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85NE_232-HERO_LEFT_7b96a8a2-7aa0-4013-bff7-8acfc2598d95.jpg?v=1769049778',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'ESCALANTE 4 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたESCALANTE 4。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/BLACK, BLACK/WHITE, GRAY/LIME, DARK SHADOW, DUSTY OLIVE, GRAY, WHITE, WHITE/BLACK", ja: "BLACK/BLACK, BLACK/WHITE, GRAY/LIME, DARK SHADOW, DUSTY OLIVE, GRAY, WHITE, WHITE/BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'escalante4w24fw',
        name: "ESCALANTE 4 (Women\'s)",
        url: 'https://altrafootwear.jp/products/escalante4w24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85NF_442-HERO_LEFT_d52369b6-4bbc-4124-8cf5-23b90d563387.jpg?v=1769049715',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'ESCALANTE 4 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたESCALANTE 4。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/BLACK, WHITE/WHITE, PURPLE, DARK BLUE, MINT, WHITE, WHITE/GREEN, BLACK", ja: "BLACK/BLACK, WHITE/WHITE, PURPLE, DARK BLUE, MINT, WHITE, WHITE/GREEN, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'escalanteracer2w24fw',
        name: "ESCALANTE RACER 2 (Women\'s)",
        url: 'https://altrafootwear.jp/products/escalanteracer2w24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85NH_108-HERO_LEFT_aaa7fe63-e0cf-4ec3-bb4a-eaa12675ff8f.jpg?v=1769050194',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: '深浦店長のおすすめ' },
        desc: { en: 'ESCALANTE RACER 2 is built for natural movement.', ja: '自然な足裏感覚を最大限に引き出す、深浦店長愛用のスピードモデル。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/BLACK, WHITE/ORANGE, TEAL, TOKYO, WHITE, WHITE/CORAL, BLACK", ja: "BLACK/BLACK, WHITE/ORANGE, TEAL, TOKYO, WHITE, WHITE/CORAL, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'escalanteracer2m24fw',
        name: "ESCALANTE RACER 2 (Men\'s)",
        url: 'https://altrafootwear.jp/products/escalanteracer2m24fw',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85NG_280-HERO_LEFT_e06cd020-672b-4811-9490-1e722602e728.jpg?v=1769050258',
        gender: 'M',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: '深浦店長のおすすめ' },
        desc: { en: 'ESCALANTE RACER 2 is built for natural movement.', ja: '自然な足裏感覚を最大限に引き出す、深浦店長愛用のスピードモデル。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/BLACK, GRAY/BLUE, GRAY/ORANGE, TOKYO, WHITE/BLACK, WHITE/LIME, BLACK", ja: "BLACK/BLACK, GRAY/BLUE, GRAY/ORANGE, TOKYO, WHITE/BLACK, WHITE/LIME, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'montblanccarbonw24ss',
        name: "MONT BLANC CARBON (Women\'s)",
        url: 'https://altrafootwear.jp/products/montblanccarbonw24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A82PF_108-HERO_LEFT.jpg?v=1754382636',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC CARBON is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC CARBON。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "WHITE/ORANGE, GRAY/BLUE, WHITE/LIME, WHITE/CORAL", ja: "WHITE/ORANGE, GRAY/BLUE, WHITE/LIME, WHITE/CORAL" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'montblanccarbonm24ss',
        name: "MONT BLANC CARBON (Men\'s)",
        url: 'https://altrafootwear.jp/products/montblanccarbonm24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A82CA_108-HERO_LEFT.jpg?v=1754378049',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC CARBON is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC CARBON。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "WHITE/ORANGE, GRAY/LIME, WHITE/CORAL, WHITE/LIME", ja: "WHITE/ORANGE, GRAY/LIME, WHITE/CORAL, WHITE/LIME" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timphikerm24ss',
        name: "TIMP HIKER (Men\'s)",
        url: 'https://altrafootwear.jp/products/timphikerm24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/TIMPHIKERM1.jpg?v=1706839041',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP HIKER is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP HIKER。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "SAND", ja: "SAND" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timphikerw24ss',
        name: "TIMP HIKER (Women\'s)",
        url: 'https://altrafootwear.jp/products/timphikerw24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/TIMPHIKERW1.jpg?v=1706838970',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP HIKER is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP HIKER。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "GRAY/GREEN", ja: "GRAY/GREEN" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timphikergtxm24ss',
        name: "TIMP 5 HIKER GTX (Men\'s)",
        url: 'https://altrafootwear.jp/products/timphikergtxm24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/timp5hikergtxMtaupe1_90257d11-fc82-400a-8246-1baa4efd629a.jpg?v=1748954075',
        gender: 'M',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 5 HIKER GTX is built for natural movement.', ja: 'TIMP 5 HIKER GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "DUSTY OLIVE, TAUPE, BLACK", ja: "DUSTY OLIVE, TAUPE, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timphikergtxw24ss',
        name: "TIMP 5 HIKER GTX (Women\'s)",
        url: 'https://altrafootwear.jp/products/timphikergtxw24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/TIMPHIKERGTXWblack.jpg?v=1706151873',
        gender: 'W',
        category: [
            { en: 'Outdoor Adventure', ja: 'アウトドアアドベンチャー' },
            { en: 'Waterproof', ja: '防水シューズ' }
        ],
        tag: { en: 'All-Weather Protection', ja: '全天候対応' },
        desc: { en: 'TIMP 5 HIKER GTX is built for natural movement.', ja: 'TIMP 5 HIKER GTXは防水仕様。ニセコの雪道や雨天のアクティビティに対応。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed", "snow"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: 'GORE-TEX / WP',
            colors: { en: "NAVY, BLACK", ja: "NAVY, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'timp5w24ss',
        name: "TIMP 5 (Women\'s)",
        url: 'https://altrafootwear.jp/products/timp5w24ss',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/AL0A85P6_921-HERO_LEFT.jpg?v=1756018939',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'TIMP 5 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたTIMP 5。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "LIME, TAUPE, RASPBERRY, NEON/CORAL, TAN, BLACK/GRAY, GREEN/FOPREST, DARK PURPLE, DUSTY OLIVE, SAND, BLACK", ja: "LIME, TAUPE, RASPBERRY, NEON/CORAL, TAN, BLACK/GRAY, GREEN/FOPREST, DARK PURPLE, DUSTY OLIVE, SAND, BLACK" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'vanish-tempo-w',
        name: "VANISH TEMPO (Women\'s)",
        url: 'https://altrafootwear.jp/products/vanish-tempo-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/products/VANISHTENPOWOMENSGRAYYELLOW1.webp?v=1714529365',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'VANISH TEMPO is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたVANISH TEMPO。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "WHITE/CORAL, GRAY, DARK PURPLE, GRAY/YELLOW", ja: "WHITE/CORAL, GRAY, DARK PURPLE, GRAY/YELLOW" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },

    {
        id: 'olympus-5-w',
        name: "OLYMPUS 5 (Women\'s)",
        url: 'https://altrafootwear.jp/products/olympus-5-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/98_5.jpg?v=1720143670',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'OLYMPUS 5 is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたOLYMPUS 5。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "ORANGE, BLACK/BLACK, WHITE/BLUE, RASPBERRY, BROWN/RED, BLACK/GRAY, SILVER/BLUE, PURPLE/ORANGE, WHITE/LIGHT BLUE", ja: "ORANGE, BLACK/BLACK, WHITE/BLUE, RASPBERRY, BROWN/RED, BLACK/GRAY, SILVER/BLUE, PURPLE/ORANGE, WHITE/LIGHT BLUE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },

    {
        id: 'mont-blanc-boa-w',
        name: "MONT BLANC BOA (Women\'s)",
        url: 'https://altrafootwear.jp/products/mont-blanc-boa-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/files/MONTBLANCBOAw_d83f4678-7c5b-47e8-a07e-c28445f11c3b.jpg?v=1721698348',
        gender: 'W',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC BOA is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC BOA。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "MAROON BELLS, BLUE/GREEN, GOLDEN HOUR", ja: "MAROON BELLS, BLUE/GREEN, GOLDEN HOUR" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'mont-blanc-boa-m',
        name: "MONT BLANC BOA (Men\'s)",
        url: 'https://altrafootwear.jp/products/mont-blanc-boa-m',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/products/AL0A7R6E_456_L_HERO.jpg?v=1767927677',
        gender: 'M',
        category: [
            { en: 'Trail Running', ja: 'トレイルランニング' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'MONT BLANC BOA is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたMONT BLANC BOA。' },
        stackHeight: '30mm+',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["trail", "mixed"], cushion: ["max"], support: ["neutral"], goal: ["everyday", "distance"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'MaxTrac™ / Vibram®',
            waterproof: false,
            colors: { en: "MAROON BELLS, BLUE/GREEN, GOLDEN HOUR", ja: "MAROON BELLS, BLUE/GREEN, GOLDEN HOUR" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    },
    {
        id: 'vanish-carbon-w',
        name: "VANISH CARBON (Women\'s)",
        url: 'https://altrafootwear.jp/products/vanish-carbon-w',
        image: 'https://cdn.shopify.com/s/files/1/0560/0283/8685/products/AL0A548F_070_R_HERO.jpg?v=1714462095',
        gender: 'W',
        category: [
            { en: 'Road Running', ja: 'ロードランニング' },
            { en: 'Walking', ja: 'ウォーキング' },
            { en: 'Lifestyle', ja: 'ライフスタイル' }
        ],
        tag: { en: 'Altra Performance', ja: 'アルトラ・ランニング' },
        desc: { en: 'VANISH CARBON is built for natural movement.', ja: 'アルトラのゼロドロップと広々としたトゥボックスを備えたVANISH CARBON。' },
        stackHeight: '22mm~24mm',
        support: { en: 'Neutral', ja: 'ニュートラル' },
        attributes: { terrain: ["road"], cushion: ["minimal"], support: ["neutral"], goal: ["everyday", "speed"] },
        features: {
            midsole: 'Altra EGO™',
            outsole: 'FootPod™',
            waterproof: false,
            colors: { en: "BLACK/YELLOW, WHITE/GRAY, CORAL/BLACK, DARK PURPLE", ja: "BLACK/YELLOW, WHITE/GRAY, CORAL/BLACK, DARK PURPLE" },
            endorsedBy: { en: 'Altra Runner', ja: 'アルトラランナー' }
        }
    }
];

const questions = [
    {
        id: 'gender',
        question: { en: 'Which fit are you looking for?', ja: 'どちらのモデルをお探しですか？' },
        options: [
            { value: 'M', icon: '👨', title: { en: "Men\'s", ja: 'メンズ' }, desc: { en: "Standard men\'s fit", ja: 'メンズモデル' } },
            { value: 'W', icon: '👩', title: { en: "Women\'s", ja: 'ウィメンズ' }, desc: { en: "Standard women\'s fit", ja: 'ウィメンズモデル' } },
            { value: 'U', icon: '👟', title: { en: "No Preference", ja: 'どちらでもOK' }, desc: { en: 'Show me all options', ja: 'すべてのモデルを見たい' } }
        ]
    },
    {
        id: 'terrain',
        question: { en: 'How will you mainly use these shoes?', ja: '主にどんなシーンで使いますか？' },
        options: [
            { value: 'road', icon: '🛣️', title: { en: 'Road Running', ja: 'ロードランニング' }, desc: { en: 'Town running, tarmac and paved roads.', ja: 'アスファルト・コンクリートの道をランニング。' } },
            { value: 'trail', icon: '🏔️', title: { en: 'Trail Running', ja: 'トレイルランニング' }, desc: { en: 'Mt. Yotei, Annupuri, dirt trails and mountains.', ja: '羊蹄山やアンヌプリなどの未舗装路・山道。' } },
            { value: 'snow', icon: '🏕️', title: { en: 'Outdoor / Hiking', ja: 'アウトドアアドベンチャー' }, desc: { en: 'Snow, rain, hiking — waterproof protection needed.', ja: '雪道・雨天・ハイキング。防水機能が欲しい方に。' } },
            { value: 'walking', icon: '🚶', title: { en: 'Walking / Daily', ja: 'ウォーキング・日常生活' }, desc: { en: 'Everyday walking, light exercise, commuting.', ja: '散歩・買い物・最初のアルトラに。足に優しい日常調。' } },
            { value: 'lifestyle', icon: '🏙️', title: { en: 'Lifestyle / Casual', ja: 'ライフスタイル・お活気に' }, desc: { en: 'Casual wear, travel, town use — stylish yet functional.', ja: 'カジュアル・旅行・良い塗履など、オン・オフきれいに使えるシューズ。' } },
            { value: 'gym', icon: '🏋️', title: { en: 'Gym / Training', ja: 'ジムトレーニング' }, desc: { en: 'Strength training, HIIT, gym workouts.', ja: '筋トレ・HIIT・フィットネスジムでのトレーニング向け。' } }
        ]
    },
    {
        id: 'cushion',
        question: { en: 'How much cushioning do you prefer?', ja: '好みのクッション性 (靴底の厚さ) は？' },
        options: [
            { value: 'minimal', icon: '⚡', title: { en: 'Minimal / Low', ja: '薄め / ミニマル' }, desc: { en: 'I like to feel the ground and want a natural, faster shoe.', ja: '足裏の感覚を重視し、軽くて自然な動きができる靴が好きです。' } },
            { value: 'moderate', icon: '⚖️', title: { en: 'Moderate / Balanced', ja: '普通 / バランス重視' }, desc: { en: 'A nice balance of protection without losing ground feel.', ja: '足裏の感覚を残しつつ、適度な保護があるバランス型。' } },
            { value: 'max', icon: '☁️', title: { en: 'Maximum / Plush', ja: '厚め / マックス' }, desc: { en: 'I want top-tier comfort and joint protection for lifelong sports.', ja: '生涯スポーツとして関節への負担を減らすため、最高レベルのクッションが欲しいです。' } }
        ]
    },
    {
        id: 'support',
        question: { en: 'Do you need stability support?', ja: 'ケガ予防などのサポート機能は必要ですか？' },
        options: [
            { value: 'neutral', icon: '🏃', title: { en: 'Neutral (No)', ja: '不要 (ニュートラル)' }, desc: { en: 'I prefer a free, unguided feel for natural running.', ja: 'ナチュラルランニングのために、足の自然な動きを邪魔しない靴を好みます。' } },
            { value: 'support', icon: '🛡️', title: { en: 'Support (Yes)', ja: '必要 (サポートあり)' }, desc: { en: 'I overpronate or like arch support to prevent injuries.', ja: '足首の倒れ込み(過回内)があり、ケガ予防のためにアーチサポートが欲しいです。' } }
        ]
    },
    {
        id: 'goal',
        question: { en: 'What is your primary goal?', ja: '走る主な目的は何ですか？' },
        options: [
            { value: 'everyday', icon: '🌿', title: { en: 'Lifelong Sports & Health', ja: '生涯スポーツ・健康維持' }, desc: { en: 'Enjoying outdoor activities safely and preventing injuries.', ja: 'ケガを予防し、生涯にわたって安全にランニングやアウトドアを楽しみたい。' } },
            { value: 'speed', icon: '⏱️', title: { en: 'Speed & Racing', ja: 'スピード練習・レース' }, desc: { en: 'Setting new PRs and intense workouts.', ja: '自己ベスト更新や本格的なトレーニング。' } },
            { value: 'distance', icon: '🗺️', title: { en: 'Long Distance & Hiking', ja: 'ロングディスタンス・ハイク' }, desc: { en: 'Ultra-marathons or long hikes in Niseko.', ja: 'ウルトラマラソンや、ニセコの大自然でのロングハイク。' } }
        ]
    }
];

let currentLang = 'ja';
let currentQuestionIndex = 0;
let userAnswers = {};
let isStaffView = false;

const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const resultContainer = document.getElementById('result-container');
const langEnBtn = document.getElementById('lang-en');
const langJaBtn = document.getElementById('lang-ja');
const viewToggleBtn = document.getElementById('view-toggle-btn');
const staffTable = document.getElementById('staff-table');

function init() {
    startBtn.addEventListener('click', () => switchScreen(1));
    backBtn.addEventListener('click', () => navigateQuiz(-1));
    restartBtn.addEventListener('click', restartQuiz);

    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langJaBtn.addEventListener('click', () => setLanguage('ja'));

    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', toggleView);
    }

    document.getElementById('staff-filter-apply')?.addEventListener('click', renderStaffList);

    setLanguage(currentLang);
    renderQuestion(0, false);
}

function toggleView() {
    isStaffView = !isStaffView;

    let appContainer = document.getElementById('app-container');

    if (isStaffView) {
        screens.forEach((s) => {
            s.classList.remove('active');
            s.style.display = 'none';
        });

        let staffScreen = document.getElementById('staff-screen');
        if (staffScreen) {
            staffScreen.style.display = 'flex';
            setTimeout(() => staffScreen.classList.add('active'), 50);
        }

        if (appContainer) appContainer.classList.add('staff-mode');
    } else {
        if (appContainer) appContainer.classList.remove('staff-mode');
        restartQuiz();
    }
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;

    if (lang === 'en') {
        langEnBtn.classList.add('active');
        langJaBtn.classList.remove('active');
    } else {
        langJaBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    }

    if (viewToggleBtn) {
        viewToggleBtn.textContent = isStaffView ? i18n[lang].customerBtn : i18n[lang].staffBtn;
    }

    document.querySelector('.title').innerHTML = i18n[lang].title;
    document.querySelector('.subtitle').textContent = i18n[lang].subtitle;
    startBtn.textContent = i18n[lang].startBtn;
    backBtn.textContent = i18n[lang].backBtn;
    document.querySelector('.result-title').textContent = i18n[lang].resultTitle;
    restartBtn.textContent = i18n[lang].retakeBtn;

    const staffTitleEl = document.getElementById('staff-title');
    if (staffTitleEl) {
        staffTitleEl.textContent = i18n[lang].staffTitle;
    }

    const setI18n = (id, key) => { let el = document.getElementById(id); if (el) el.textContent = i18n[lang][key]; };
    setI18n('opt-gender-all', 'optGenderAll');
    setI18n('opt-gender-m', 'optGenderM');
    setI18n('opt-gender-w', 'optGenderW');
    setI18n('opt-cat-all', 'optCatAll');
    setI18n('opt-cat-trail', 'optCatTrail');
    setI18n('opt-cat-road', 'optCatRoad');
    setI18n('opt-cat-snow', 'optCatSnow');
    setI18n('opt-cat-walking', 'optCatWalking');
    setI18n('opt-cat-lifestyle', 'optCatLifestyle');
    setI18n('opt-cat-gym', 'optCatGym');
    setI18n('opt-cat-waterproof', 'optCatWaterproof');
    setI18n('opt-sort-def', 'optSortDef');
    setI18n('opt-sort-name', 'optSortName');
    setI18n('opt-sort-stack', 'optSortStack');
    setI18n('opt-sort-stack-high', 'optSortStackHigh');
    let searchEl = document.getElementById('staff-search');
    if (searchEl) searchEl.placeholder = i18n[lang].searchPlaceholder;


    if (isStaffView) {
        renderStaffList();
    } else {
        if (screens[1].classList.contains('active')) {
            renderQuestion(currentQuestionIndex, false);
        } else if (screens[2].classList.contains('active')) {
            calculateResults();
        }
    }
}

function getCatEmoji(enCat) {
    if (enCat.includes('Trail')) return '🏔️ ';
    if (enCat.includes('Road')) return '🛣️ ';
    if (enCat.includes('Outdoor')) return '🏕️ ';
    if (enCat.includes('Walking')) return '🚶 ';
    if (enCat.includes('Lifestyle')) return '🏙️ ';
    if (enCat.includes('Gym')) return '🏋️ ';
    if (enCat.includes('Waterproof')) return '☔ ';
    return '🚶 ';
}

function renderStaffList() {
    if (!staffTable) return;

    let searchTxt = (document.getElementById('staff-search')?.value || '').toLowerCase();
    let genderVal = document.getElementById('staff-gender-filter')?.value || 'ALL';
    let catVal = document.getElementById('staff-category-filter')?.value || 'ALL';
    let sortVal = document.getElementById('staff-sort')?.value || 'default';

    let filteredShoes = shoes.filter(shoe => {
        let matchSearch = shoe.name.toLowerCase().includes(searchTxt) || shoe.category.some(c => c[currentLang].toLowerCase().includes(searchTxt));
        let matchGender = genderVal === 'ALL' || shoe.gender === genderVal || shoe.gender === 'U';

        let matchCat = true;
        if (catVal !== 'ALL') {
            matchCat = shoe.category.some(c => c.en === catVal);
        }

        return matchSearch && matchGender && matchCat;
    });

    // Sort copy
    if (sortVal === 'name_asc') {
        filteredShoes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortVal === 'stack_asc') {
        filteredShoes.sort((a, b) => parseFloat(a.stackHeight) - parseFloat(b.stackHeight));
    } else if (sortVal === 'stack_desc') {
        filteredShoes.sort((a, b) => parseFloat(b.stackHeight) - parseFloat(a.stackHeight));
    }

    let html = `
        <thead>
            <tr>
                <th>${i18n[currentLang].thName}</th>
                <th>${i18n[currentLang].thCategory}</th>
                <th>${i18n[currentLang].thSole}</th>
                <th>${i18n[currentLang].thSpecs}</th>
                <th>${i18n[currentLang].thEndorsed}</th>
            </tr>
        </thead>
        <tbody>
    `;

    if (filteredShoes.length === 0) {
        html += `<tr><td colspan="5" style="text-align:center; padding: 2rem;">No matching shoes found.</td></tr>`;
    }

    filteredShoes.forEach(shoe => {
        let wpBadge = shoe.features.waterproof ? `<span class="tag-badge wp" style="margin-left:4px;display:inline-block;padding:2px 4px;font-size:0.7rem;">☔ ${shoe.features.waterproof}</span>` : '';
        let imgTag = shoe.image ? `<img src="${shoe.image}" style="width:30px; height:30px; object-fit:cover; border-radius:4px; vertical-align:middle; margin-right:8px;" alt="${shoe.name}">` : '';

        html += `
            <tr style="line-height: 1.3;">
                <td>
                    <div style="display:flex; align-items:center;">
                        ${imgTag}
                        <div>
                            <strong><a href="${shoe.url}" target="_blank" style="color:#ffffff; text-decoration:none;">${shoe.name}</a></strong>
                            <span style="color:var(--text-secondary);font-size:0.75rem;margin-left:6px;">${shoe.support[currentLang]}</span>
                        </div>
                    </div>
                </td>
                <td><span style="font-size:0.85rem;">${shoe.category.map(c => getCatEmoji(c.en) + c[currentLang]).join(' / ')}</span></td>
                <td><span style="font-size:0.8rem; color:var(--text-secondary);">Mid:</span> <span style="font-size:0.85rem;">${shoe.features.midsole}</span><br><span style="font-size:0.8rem; color:var(--text-secondary);">Out:</span> <span style="font-size:0.85rem;">${shoe.features.outsole}</span></td>
                <td><span style="font-size:0.8rem; color:var(--text-secondary);">Stack:</span> <span style="font-size:0.85rem;">${shoe.stackHeight}</span> ${wpBadge}<br><span style="font-size:0.75rem;color:var(--text-secondary);">🎨 ${shoe.features.colors[currentLang]}</span></td>
                <td style="font-size:0.85rem; color: #d1d5db;">${shoe.features.endorsedBy[currentLang]}</td>
            </tr>
        `;
    });

    html += `</tbody>`;
    staffTable.innerHTML = html;
}

function switchScreen(index) {
    if (isStaffView) return;

    screens.forEach((screen, i) => {
        if (i === index) {
            screen.style.display = 'flex';
            setTimeout(() => {
                screen.classList.add('active');
            }, 50);
        } else {
            screen.classList.remove('active');
            setTimeout(() => {
                screen.style.display = 'none';
            }, 500);
        }
    });
}

function navigateQuiz(direction) {
    if (isStaffView) return;

    currentQuestionIndex += direction;

    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
        switchScreen(0);
        return;
    }

    if (currentQuestionIndex >= questions.length) {
        calculateResults();
        switchScreen(2);
        return;
    }

    renderQuestion(currentQuestionIndex, true);
}

function renderQuestion(index, animate = true) {
    const q = questions[index];
    questionText.textContent = q.question.ja_alt && currentLang === 'ja' ? q.question.ja_alt : q.question[currentLang];

    const progress = ((index) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    if (index === 0) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }

    const renderOpts = () => {
        optionsContainer.innerHTML = '';

        q.options.forEach(opt => {
            const card = document.createElement('div');
            card.className = 'option-card';

            if (userAnswers[q.id] === opt.value) {
                card.style.borderColor = 'var(--accent)';
                card.style.background = 'rgba(59, 130, 246, 0.1)';
            }

            let titleText = opt.title.ja_alt && currentLang === 'ja' ? opt.title.ja_alt : opt.title[currentLang];

            card.innerHTML = `
                <span class="option-icon">${opt.icon}</span>
                <h3 class="option-title">${titleText}</h3>
                <p class="option-desc">${opt.desc[currentLang]}</p>
            `;

            card.addEventListener('click', () => handleOptionSelect(q.id, opt.value));

            optionsContainer.appendChild(card);
        });

        if (animate) optionsContainer.style.opacity = 1;
    };

    if (animate) {
        optionsContainer.style.opacity = 0;
        setTimeout(renderOpts, 200);
    } else {
        renderOpts();
        optionsContainer.style.opacity = 1;
    }
}

function handleOptionSelect(questionId, value) {
    userAnswers[questionId] = value;

    const cards = optionsContainer.querySelectorAll('.option-card');
    cards.forEach(card => {
        card.style.borderColor = 'var(--card-border)';
        card.style.background = 'var(--card-bg)';
    });

    const q = questions[currentQuestionIndex];
    let selectedTitle = q.options.find(o => o.value === value).title[currentLang];
    if (q.options.find(o => o.value === value).title.ja_alt && currentLang === 'ja') {
        selectedTitle = q.options.find(o => o.value === value).title.ja_alt;
    }

    const selectedCard = Array.from(cards).find(card => card.querySelector('.option-title').textContent === selectedTitle);
    if (selectedCard) {
        selectedCard.style.borderColor = 'var(--accent)';
        selectedCard.style.background = 'rgba(59, 130, 246, 0.1)';
    }

    setTimeout(() => {
        navigateQuiz(1);
    }, 400);
}

function calculateResults() {
    let bestMatch = null;

    const scores = shoes.map(shoe => {
        let score = 0;

        if (shoe.gender && userAnswers.gender && userAnswers.gender !== 'U') {
            if (shoe.gender === userAnswers.gender) {
                score += 50;
            } else if (shoe.gender !== 'U') {
                score -= 1000;
            }
        }

        if (shoe.attributes.terrain.includes(userAnswers.terrain)) {
            score += (userAnswers.terrain === 'snow' && shoe.attributes.terrain.includes('snow')) ? 5 : 3;
        }

        // Extra scoring for Walking / Lifestyle / Gym based on category
        if (userAnswers.terrain === 'walking') {
            if (shoe.category.some(c => c.en === 'Walking')) score += 10;
            else if (shoe.category.some(c => c.en === 'Road Running')) score += 3;
        }
        if (userAnswers.terrain === 'lifestyle') {
            if (shoe.category.some(c => c.en === 'Lifestyle')) score += 10;
            else if (shoe.category.some(c => c.en === 'Road Running')) score += 2;
        }
        if (userAnswers.terrain === 'gym') {
            if (shoe.category.some(c => c.en === 'Gym Training')) score += 10;
        }

        if (shoe.attributes.support.includes(userAnswers.support)) {
            score += 3;
        } else if (userAnswers.support === 'support' && shoe.support.en === 'Neutral') {
            score -= 2;
        }

        if (shoe.attributes.cushion.includes(userAnswers.cushion)) score += 2;
        if (shoe.attributes.goal.includes(userAnswers.goal)) score += 2;

        return { shoe, score };
    });

    scores.sort((a, b) => b.score - a.score);
    bestMatch = scores[0].shoe;
    renderResult(bestMatch);
}

function renderResult(shoe) {
    let catEmoji = getCatEmoji(shoe.category[0].en);
    let wpText = shoe.features.waterproof ? `<span style="color:#93c5fd; font-weight:bold;">${shoe.features.waterproof}</span>` : i18n[currentLang].wpNo;

    let imageHtml = shoe.image
        ? `<img src="${shoe.image}" alt="${shoe.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">`
        : `<div class="shoe-placeholder">🏃</div>`;

    resultContainer.innerHTML = `
        <div class="result-img-container" style="background:none; padding:0; height:200px; display:flex; justify-content:center; align-items:center;">
            ${imageHtml}
        </div>
        <div class="result-info">
            <div class="shoe-tag">${shoe.category.map(c => getCatEmoji(c.en) + c[currentLang]).join(' • ')} • ${shoe.tag[currentLang]}</div>
            <h2 class="shoe-name">${shoe.name} <a href="${shoe.url}" target="_blank" style="font-size:1.5rem; text-decoration:none;" title="${i18n[currentLang].officialLink}">🛒</a></h2>
            <p class="shoe-desc">${shoe.desc[currentLang]}</p>
            <div class="specs-grid" style="margin-bottom: 2rem;">
                <div class="spec-item">
                    <div class="spec-label">${i18n[currentLang].specStack}</div>
                    <div class="spec-value">${shoe.stackHeight}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">${i18n[currentLang].specSupport}</div>
                    <div class="spec-value">${shoe.support[currentLang]}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">${i18n[currentLang].specWaterproof}</div>
                    <div class="spec-value">${wpText}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">${i18n[currentLang].specColors}</div>
                    <div class="spec-value" style="font-size:0.85rem; line-height:1.4;">${shoe.features.colors[currentLang]}</div>
                </div>
            </div>
            
            <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">
                <a href="${shoe.url}" target="_blank" class="primary-btn" style="text-decoration:none;">${i18n[currentLang].officialLink}</a>
            </div>
        </div>
    `;
}

function restartQuiz() {
    isStaffView = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    progressBar.style.width = '0%';

    let appContainer = document.getElementById('app-container');
    if (appContainer) appContainer.classList.remove('staff-mode');

    let staffScreen = document.getElementById('staff-screen');
    if (staffScreen) {
        staffScreen.classList.remove('active');
        staffScreen.style.display = 'none';
    }

    renderQuestion(0, false);

    screens.forEach((screen, i) => {
        if (i === 0) {
            screen.style.display = 'flex';
            setTimeout(() => {
                screen.classList.add('active');
            }, 50);
        } else {
            screen.classList.remove('active');
            screen.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
