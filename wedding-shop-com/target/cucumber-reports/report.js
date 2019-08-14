$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/weddingshop/resources/featurefile/filter.feature");
formatter.feature({
  "line": 3,
  "name": "personalised gift list",
  "description": "As a customer with an upcoming wedding I want to be able to find products to my taste",
  "id": "personalised-gift-list",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Filter"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should search product candles and filter by price",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Products",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send text in search bar \"Candles\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select candle \u0026 Diffusers",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I want candles in the \"\u003cfilters\u003e\" price range",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see candles as per filter price",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;",
  "rows": [
    {
      "cells": [
        "filters"
      ],
      "line": 16,
      "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;1"
    },
    {
      "cells": [
        "\u003c£20"
      ],
      "line": 17,
      "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;2"
    },
    {
      "cells": [
        "£20-£39"
      ],
      "line": 18,
      "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;3"
    },
    {
      "cells": [
        "£40-£49"
      ],
      "line": 19,
      "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;4"
    },
    {
      "cells": [
        "£50-£74"
      ],
      "line": 20,
      "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;5"
    },
    {
      "cells": [
        "£75-149"
      ],
      "line": 21,
      "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;6"
    },
    {
      "cells": [
        "£150+"
      ],
      "line": 22,
      "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13327088975,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should search product candles and filter by price",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Products",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send text in search bar \"Candles\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select candle \u0026 Diffusers",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I want candles in the \"\u003c£20\" price range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see candles as per filter price",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 353567061,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnProducts()"
});
formatter.result({
  "duration": 454661016,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSearch()"
});
formatter.result({
  "duration": 314740780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candles",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iSendTextInSearchBar(String)"
});
formatter.result({
  "duration": 202520580,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCandleDiffusers()"
});
formatter.result({
  "duration": 1482762817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c£20",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iWantCandlesInThePriceRange(String)"
});
formatter.result({
  "duration": 152755,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeCandlesAsPerFilterPrice()"
});
formatter.result({
  "duration": 48993,
  "status": "passed"
});
formatter.after({
  "duration": 254191560,
  "status": "passed"
});
formatter.before({
  "duration": 9614909471,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should search product candles and filter by price",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Products",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send text in search bar \"Candles\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select candle \u0026 Diffusers",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I want candles in the \"£20-£39\" price range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see candles as per filter price",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 98284,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnProducts()"
});
formatter.result({
  "duration": 282458067,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSearch()"
});
formatter.result({
  "duration": 387311078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candles",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iSendTextInSearchBar(String)"
});
formatter.result({
  "duration": 268995050,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCandleDiffusers()"
});
formatter.result({
  "duration": 1408126896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£20-£39",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iWantCandlesInThePriceRange(String)"
});
formatter.result({
  "duration": 7422427404,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeCandlesAsPerFilterPrice()"
});
formatter.result({
  "duration": 61240,
  "status": "passed"
});
formatter.after({
  "duration": 220702327,
  "status": "passed"
});
formatter.before({
  "duration": 8162725528,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should search product candles and filter by price",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Products",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send text in search bar \"Candles\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select candle \u0026 Diffusers",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I want candles in the \"£40-£49\" price range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see candles as per filter price",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 155658,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnProducts()"
});
formatter.result({
  "duration": 469669414,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSearch()"
});
formatter.result({
  "duration": 476311368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candles",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iSendTextInSearchBar(String)"
});
formatter.result({
  "duration": 266687361,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCandleDiffusers()"
});
formatter.result({
  "duration": 1685232801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£40-£49",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iWantCandlesInThePriceRange(String)"
});
formatter.result({
  "duration": 102654,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeCandlesAsPerFilterPrice()"
});
formatter.result({
  "duration": 32708,
  "status": "passed"
});
formatter.after({
  "duration": 269469916,
  "status": "passed"
});
formatter.before({
  "duration": 8752677757,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should search product candles and filter by price",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Products",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send text in search bar \"Candles\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select candle \u0026 Diffusers",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I want candles in the \"£50-£74\" price range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see candles as per filter price",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 67606,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnProducts()"
});
formatter.result({
  "duration": 241094832,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSearch()"
});
formatter.result({
  "duration": 282245215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candles",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iSendTextInSearchBar(String)"
});
formatter.result({
  "duration": 307759492,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCandleDiffusers()"
});
formatter.result({
  "duration": 1654603275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£50-£74",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iWantCandlesInThePriceRange(String)"
});
formatter.result({
  "duration": 2639255848,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeCandlesAsPerFilterPrice()"
});
formatter.result({
  "duration": 39875,
  "status": "passed"
});
formatter.after({
  "duration": 210470263,
  "status": "passed"
});
formatter.before({
  "duration": 7340337685,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should search product candles and filter by price",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Products",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send text in search bar \"Candles\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select candle \u0026 Diffusers",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I want candles in the \"£75-149\" price range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see candles as per filter price",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 62157,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnProducts()"
});
formatter.result({
  "duration": 517415952,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSearch()"
});
formatter.result({
  "duration": 302480694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candles",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iSendTextInSearchBar(String)"
});
formatter.result({
  "duration": 246770753,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCandleDiffusers()"
});
formatter.result({
  "duration": 1409186043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£75-149",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iWantCandlesInThePriceRange(String)"
});
formatter.result({
  "duration": 75311,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeCandlesAsPerFilterPrice()"
});
formatter.result({
  "duration": 21341,
  "status": "passed"
});
formatter.after({
  "duration": 201688468,
  "status": "passed"
});
formatter.before({
  "duration": 8449238087,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should search product candles and filter by price",
  "description": "",
  "id": "personalised-gift-list;user-should-search-product-candles-and-filter-by-price;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Filter"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Products",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I send text in search bar \"Candles\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select candle \u0026 Diffusers",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I want candles in the \"£150+\" price range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see candles as per filter price",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 58745,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnProducts()"
});
formatter.result({
  "duration": 301563887,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSearch()"
});
formatter.result({
  "duration": 311201224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candles",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iSendTextInSearchBar(String)"
});
formatter.result({
  "duration": 277066596,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCandleDiffusers()"
});
formatter.result({
  "duration": 1467810119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£150+",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iWantCandlesInThePriceRange(String)"
});
formatter.result({
  "duration": 103915,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeCandlesAsPerFilterPrice()"
});
formatter.result({
  "duration": 36916,
  "status": "passed"
});
formatter.after({
  "duration": 203401791,
  "status": "passed"
});
formatter.uri("src/test/java/com/weddingshop/resources/featurefile/home.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page functionality",
  "description": "As a customer I can explore The Wedding Shop Homepage",
  "id": "home-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"\u003cOptions\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;",
  "rows": [
    {
      "cells": [
        "Options"
      ],
      "line": 11,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;1"
    },
    {
      "cells": [
        "Brands"
      ],
      "line": 12,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;2"
    },
    {
      "cells": [
        "Products"
      ],
      "line": 13,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;3"
    },
    {
      "cells": [
        "Funds"
      ],
      "line": 14,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;4"
    },
    {
      "cells": [
        "Travel \u0026 Experience"
      ],
      "line": 15,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;5"
    },
    {
      "cells": [
        "Showrooms"
      ],
      "line": 16,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;6"
    },
    {
      "cells": [
        "Inspiration"
      ],
      "line": 17,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;7"
    },
    {
      "cells": [
        "About"
      ],
      "line": 18,
      "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7983638915,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"Brands\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 115519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brands",
      "offset": 12
    }
  ],
  "location": "LoginStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 240288539,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyNavigateHomePage()"
});
formatter.result({
  "duration": 88249,
  "status": "passed"
});
formatter.after({
  "duration": 183603373,
  "status": "passed"
});
formatter.before({
  "duration": 11096475469,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"Products\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 59225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 12
    }
  ],
  "location": "LoginStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 157498,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyNavigateHomePage()"
});
formatter.result({
  "duration": 31994,
  "status": "passed"
});
formatter.after({
  "duration": 239353491,
  "status": "passed"
});
formatter.before({
  "duration": 8408154205,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"Funds\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 110178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funds",
      "offset": 12
    }
  ],
  "location": "LoginStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 331211,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyNavigateHomePage()"
});
formatter.result({
  "duration": 353532,
  "status": "passed"
});
formatter.after({
  "duration": 176196712,
  "status": "passed"
});
formatter.before({
  "duration": 7284004623,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"Travel \u0026 Experience\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 57186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Travel \u0026 Experience",
      "offset": 12
    }
  ],
  "location": "LoginStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 266922535,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyNavigateHomePage()"
});
formatter.result({
  "duration": 46260,
  "status": "passed"
});
formatter.after({
  "duration": 207014066,
  "status": "passed"
});
formatter.before({
  "duration": 8194093872,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"Showrooms\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 71063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Showrooms",
      "offset": 12
    }
  ],
  "location": "LoginStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 124890,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyNavigateHomePage()"
});
formatter.result({
  "duration": 39344,
  "status": "passed"
});
formatter.after({
  "duration": 229502004,
  "status": "passed"
});
formatter.before({
  "duration": 11769987384,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"Inspiration\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 72564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inspiration",
      "offset": 12
    }
  ],
  "location": "LoginStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 119003,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyNavigateHomePage()"
});
formatter.result({
  "duration": 61834,
  "status": "passed"
});
formatter.after({
  "duration": 276753656,
  "status": "passed"
});
formatter.before({
  "duration": 11372734924,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a customer I can Navigate to Home Page",
  "description": "",
  "id": "home-page-functionality;as-a-customer-i-can-navigate-to-home-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On \"About\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can successfully navigate HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 140125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About",
      "offset": 12
    }
  ],
  "location": "LoginStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 182959,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyNavigateHomePage()"
});
formatter.result({
  "duration": 39752,
  "status": "passed"
});
formatter.after({
  "duration": 207415071,
  "status": "passed"
});
formatter.uri("src/test/java/com/weddingshop/resources/featurefile/register.feature");
formatter.feature({
  "line": 2,
  "name": "Registration functionality",
  "description": "As a customer with an upcoming wedding I want create a list",
  "id": "registration-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 8762540881,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a customer I can Navigate to registration page",
  "description": "",
  "id": "registration-functionality;as-a-customer-i-can-navigate-to-registration-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Create a List tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Title \"Ms\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter First Name \"Trupti\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Last Name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on referral",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"Google or Other Search\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Partner Title \"Mr\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Partner First Name \"Jagdish\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Partner Last Name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select country name \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Postcode \"HA1 1RY\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on my Address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Contact Number\"07727629390\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on date field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Forward Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter number of Guests \"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"tp\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"wedding1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter confirm password \"wedding1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can Succesfully Register",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 2877340,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnCreateAListTab()"
});
formatter.result({
  "duration": 1151815105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ms",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterTitle(String)"
});
formatter.result({
  "duration": 522316003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trupti",
      "offset": 20
    }
  ],
  "location": "RegistrationStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 442369982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegistrationStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 293598517,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnReferral()"
});
formatter.result({
  "duration": 223870768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google or Other Search",
      "offset": 10
    }
  ],
  "location": "RegistrationStepdefs.iSelect(String)"
});
formatter.result({
  "duration": 549207073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 23
    }
  ],
  "location": "RegistrationStepdefs.iEnterPartnerTitle(String)"
});
formatter.result({
  "duration": 185626383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jagdish",
      "offset": 28
    }
  ],
  "location": "RegistrationStepdefs.iEnterPartnerFirstName(String)"
});
formatter.result({
  "duration": 337834747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 27
    }
  ],
  "location": "RegistrationStepdefs.iEnterPartnerLastName(String)"
});
formatter.result({
  "duration": 290499288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 23
    }
  ],
  "location": "RegistrationStepdefs.iSelectCountryName(String)"
});
formatter.result({
  "duration": 184747012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA1 1RY",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPostcode(String)"
});
formatter.result({
  "duration": 231018609,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnMyAddress()"
});
formatter.result({
  "duration": 1231339854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07727629390",
      "offset": 23
    }
  ],
  "location": "RegistrationStepdefs.iEnterContactNumber(String)"
});
formatter.result({
  "duration": 672692487,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnDateField()"
});
formatter.result({
  "duration": 400006538,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnForwardButton()"
});
formatter.result({
  "duration": 218775957,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnDate()"
});
formatter.result({
  "duration": 386823702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 26
    }
  ],
  "location": "RegistrationStepdefs.iEnterNumberOfGuests(String)"
});
formatter.result({
  "duration": 184302016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tp",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 746139214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wedding1234",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 662548167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wedding1234",
      "offset": 26
    }
  ],
  "location": "RegistrationStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 597150231,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 565567425,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iCanSuccesfullyRegister()"
});
formatter.result({
  "duration": 61115,
  "status": "passed"
});
formatter.after({
  "duration": 176701041,
  "status": "passed"
});
formatter.before({
  "duration": 8296722765,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "As a customer I can Navigate to LogIn page",
  "description": "",
  "id": "registration-functionality;as-a-customer-i-can-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I am at Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click On Login Bar",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter Email Address \"tp\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter password to login \"wedding1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can successfully Login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmAtHomepage()"
});
formatter.result({
  "duration": 1212726,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginBar()"
});
formatter.result({
  "duration": 411071594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tp",
      "offset": 23
    }
  ],
  "location": "LoginStepdefs.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 512270869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wedding1234",
      "offset": 27
    }
  ],
  "location": "LoginStepdefs.iEnterPasswordToLogin(String)"
});
formatter.result({
  "duration": 236883995,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 108466,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iCanSuccessfullyLogin()"
});
formatter.result({
  "duration": 58761,
  "status": "passed"
});
formatter.after({
  "duration": 181431115,
  "status": "passed"
});
});