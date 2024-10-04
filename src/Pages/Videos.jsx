import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Videos() {
    let [videos,setVideos] = React.useState([])
    let [searchValue, setSearchValue] = React.useState("")

    function handleSearchChange(event){
      setSearchValue(event.target.value)
    }

    function handleSearch(){
 

      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchValue}&type=video&key=`+"AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU")
      .then(res=>{
       // console.log(res)
        const maps = res.data.items.map((item, index) => {
          //fetch by ID . in this case, it should return one item 
         
          return axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU`)
              .then(res => res.data)

      })

      Promise.all(maps)
          .then(res => setVideos([ ...res]))
      // //cons



      } 
      
      
        //  setVideos(res.data)
      
      )
     
    }
    useEffect(()=>{
       
         let mockData ={
            "kind": "youtube#searchListResponse",
            "etag": "RDigjyz7XNxAocofRWxQjL-OSQ8",
            "nextPageToken": "CBkQAA",
            "regionCode": "SA",
            "pageInfo": {
              "totalResults": 1000000,
              "resultsPerPage": 25
            },
            "items": [
              {
                "kind": "youtube#searchResult",
                "etag": "wdQlMN55roj0hxjseZynfyCWKh0",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "zkn615VelyQ"
                },
                "snippet": {
                  "publishedAt": "2022-06-08T18:52:21Z",
                  "channelId": "UCfvw_8vh2qTq5XRIVw9C5SA",
                  "title": "Dinner in ONE POT and in under 30 MINUTES Peri Peri Chicken and Rice Recipe!",
                  "description": "Recipe: https://moribyan.com/recipe-view/peri-peri-style-chicken-and-rice/ Join the family and cook with me! TikTok: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/zkn615VelyQ/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/zkn615VelyQ/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/zkn615VelyQ/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Moribyan",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-06-08T18:52:21Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "-UfZ63YiT4g-S3IOU8jKMPiOe3s",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "VeI6vGL8bM0"
                },
                "snippet": {
                  "publishedAt": "2021-08-31T16:00:25Z",
                  "channelId": "UC8gsK3wvFdusTPpWkHcTFlQ",
                  "title": "don&#39;t spill the water challenge on TikTok 🍷 #shorts",
                  "description": "أشترك بقناة مروى عبدالعزيز على اليوتيوب وفعّل زر التنبيهات ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/VeI6vGL8bM0/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/VeI6vGL8bM0/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/VeI6vGL8bM0/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "مروى عبدالعزيز",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-08-31T16:00:25Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "TCOiQ54seQFzpzQGH8PN7FDrl-0",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "kawk6dVPSb8"
                },
                "snippet": {
                  "publishedAt": "2021-04-14T00:00:05Z",
                  "channelId": "UC00VfxvU5rWV48QshqnbDVQ",
                  "title": "My Ultimate Ramen Hack #Shorts",
                  "description": "Thought I'd share one of my favorite ramen hacks with you all here via #shorts. Is it the only way I eat instant ramen now?",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/kawk6dVPSb8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/kawk6dVPSb8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/kawk6dVPSb8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Inga Lam",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-04-14T00:00:05Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "OrD3va9u5FwQ5Jqy4NlIdRGIhVo",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "hX5FzsRV8Ok"
                },
                "snippet": {
                  "publishedAt": "2021-02-08T22:44:25Z",
                  "channelId": "UCTvYEid8tmg0jqGPDkehc_Q",
                  "title": "Hot chocolate #Shorts",
                  "description": "How to make the most incredible, rich, smooth, and creamy Hot Chocolate from scratch. This recipe is made with real chocolate, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/hX5FzsRV8Ok/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/hX5FzsRV8Ok/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/hX5FzsRV8Ok/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Preppy Kitchen",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-08T22:44:25Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "IUWfSD_y4KINLQTYtcSvc7JKN5U",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "r9yz_Oi6P_o"
                },
                "snippet": {
                  "publishedAt": "2021-08-01T18:51:31Z",
                  "channelId": "UCM4mUayOV-yfqPNzePbHKsw",
                  "title": "3-Ingredient Biscoff Cookies! Recipe tutorial #Shorts",
                  "description": "How to make simple 3-Ingredient Lotus Biscoff Cookies! Hey guys, I'm Eloise! I make simple recipe tutorials across my social ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/r9yz_Oi6P_o/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/r9yz_Oi6P_o/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/r9yz_Oi6P_o/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Fitwaffle Kitchen",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-08-01T18:51:31Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "ASukV2WNDRWgUhDTkoYj-4SZdXM",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "ERB8YiMHoLE"
                },
                "snippet": {
                  "publishedAt": "2024-09-24T21:09:39Z",
                  "channelId": "UCBJeMCIeLQos7wacox4hmLQ",
                  "title": "ATALANTA 2-3 COMO | HIGHLIGHTS | Como Comeback! | Serie A 2024/25",
                  "description": "A stunning upset unfolded at the Gewiss Stadium in Bergamo as Cesc Fàbregas's Como side staged a remarkable second-half ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/ERB8YiMHoLE/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/ERB8YiMHoLE/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/ERB8YiMHoLE/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Serie A",
                  "liveBroadcastContent": "none",
                  "publishTime": "2024-09-24T21:09:39Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "LvPWET6b3PNBRFPmnnliyewlquU",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "Otrh_1Zowkw"
                },
                "snippet": {
                  "publishedAt": "2020-11-04T12:00:05Z",
                  "channelId": "UC03yZ--r_5izJkPvkCmzNbQ",
                  "title": "Poach many Eggs at Once - Easy and Perfect Every Time #Shorts",
                  "description": "For Subtitles, please turn on Closed Captions (CC) and choose your preferred language! Poaching is a healthy way to cook eggs ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/Otrh_1Zowkw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/Otrh_1Zowkw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/Otrh_1Zowkw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Fine Art of Cooking",
                  "liveBroadcastContent": "none",
                  "publishTime": "2020-11-04T12:00:05Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "gCp_KwbfV_HKB829xLDqF5o4E_g",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "ZTra6oTJ70w"
                },
                "snippet": {
                  "publishedAt": "2021-06-08T14:24:25Z",
                  "channelId": "UCM4mUayOV-yfqPNzePbHKsw",
                  "title": "Rolo Fudgy Brownies! tutorial #Shorts",
                  "description": "How to make a Fudgy Rolo Brownie! I'm Eloise from Fitwaffle Kitchen! I make simple recipe tutorials across my social media My ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/ZTra6oTJ70w/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/ZTra6oTJ70w/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/ZTra6oTJ70w/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Fitwaffle Kitchen",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-06-08T14:24:25Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "PYHyhzQTRbTJqEQiAZSUJCy3FqU",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "g-hPtKGb8yo"
                },
                "snippet": {
                  "publishedAt": "2022-04-19T23:15:01Z",
                  "channelId": "UC_pT_Iz6XjuM-eMTlXghdfw",
                  "title": "A hen in her nest 🐓",
                  "description": "A hen in her nest The first time I tried a cornish hen was when I was 12 years old at sleep away camp. The counselors ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/g-hPtKGb8yo/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/g-hPtKGb8yo/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/g-hPtKGb8yo/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Max the Meat Guy",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-04-19T23:15:01Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "hm1BnSWe6bp8IMobBU0AExQKC3o",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "Y9BdTnjK2Rs"
                },
                "snippet": {
                  "publishedAt": "2024-10-03T19:12:14Z",
                  "channelId": "UC2aRC_0FSLOCd2NdXfThz8g",
                  "title": "تغطية مستمرّة للعدوان الإسرائيلي على لبنان",
                  "description": "تغطية مستمرّة للعدوان الإسرائيلي على لبنان.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/Y9BdTnjK2Rs/default_live.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/Y9BdTnjK2Rs/mqdefault_live.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/Y9BdTnjK2Rs/hqdefault_live.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "AL Jadeed Special Content",
                  "liveBroadcastContent": "live",
                  "publishTime": "2024-10-03T19:12:14Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "SDK_pinJZFth24V1dUpkPfLaG7Y",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "E-89nKygWY8"
                },
                "snippet": {
                  "publishedAt": "2017-11-21T08:46:13Z",
                  "channelId": "UCe6lOyqMumXQyCBMujFYmUA",
                  "title": "ELTRA - Elemental Analyzers",
                  "description": "ELTRA is one of the world's leading manufacturers of elemental analyzers for rapid and accurate analysis of solid materials.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/E-89nKygWY8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/E-89nKygWY8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/E-89nKygWY8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "ELTRA - Elemental Analyzers",
                  "liveBroadcastContent": "none",
                  "publishTime": "2017-11-21T08:46:13Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "MzEsHhs_Un2SLUZwyClWKyNKSfA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "OiyAzP9PotM"
                },
                "snippet": {
                  "publishedAt": "2022-03-03T13:13:49Z",
                  "channelId": "UCl0eCJPupCsTrobb_0bprhw",
                  "title": "This is TROJENA - The Mountains of NEOM",
                  "description": "Wake up to breathtaking views of nature, unleash your adventurous side on the ski slopes, wind down at the world-class wellness ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/OiyAzP9PotM/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/OiyAzP9PotM/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/OiyAzP9PotM/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "NEOM",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-03-03T13:13:49Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "7Zh-fwfh9VoNjKqxtWfQNgMA_i4",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "84HOPZKj6eU"
                },
                "snippet": {
                  "publishedAt": "2022-04-22T15:12:07Z",
                  "channelId": "UCUJjGd8fKVtaZ10YGRB36uw",
                  "title": "Big surprise 🤩🎈 #booshramamad",
                  "description": "",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/84HOPZKj6eU/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/84HOPZKj6eU/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/84HOPZKj6eU/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Booshra & Mamad",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-04-22T15:12:07Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "ihfO7LUNKh5DkwlDGTFRESPjU1c",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "FWujY0xauDM"
                },
                "snippet": {
                  "publishedAt": "2011-11-03T09:47:06Z",
                  "channelId": "UCy2CIDKYZqqbeJ0NHNcJ9sQ",
                  "title": "Platinum Records - بنيتي الحبوبة",
                  "description": "شاهد الحلقات الكاملة على http://www.shahid.net.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/FWujY0xauDM/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/FWujY0xauDM/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/FWujY0xauDM/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "MBC GROUP",
                  "liveBroadcastContent": "none",
                  "publishTime": "2011-11-03T09:47:06Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "QPqC9vruL0kMQZb2io2ASnCncug",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "CMIktKCkBLI"
                },
                "snippet": {
                  "publishedAt": "2021-03-13T15:00:10Z",
                  "channelId": "UCsEmkNdR_HQ_INJd_M9lULQ",
                  "title": "BEST OVERNIGHT OATS | THE GOLDEN BALANCE",
                  "description": "HealthiER Over Night Oats These are not necessarily low calorie, and this is NOT health/fitness advice. 1 cup oats 3/4 cup milk ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/CMIktKCkBLI/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/CMIktKCkBLI/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/CMIktKCkBLI/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "The Golden Balance",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-03-13T15:00:10Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "Pz13Z2ETS0i9rmuN2Tx4BzwMuc0",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "XJE8M_IJVHw"
                },
                "snippet": {
                  "publishedAt": "2022-05-17T21:00:22Z",
                  "channelId": "UC-pC1xsFPzcrL09DaW4jlBA",
                  "title": "You haven&#39;t seen a Tuna Salad like THIS! #shorts",
                  "description": "PRINT RECIPE HERE: https://natashaskitchen.com/avocado-tuna-salad-recipe/ FOLLOW ME: ▻INSTAGRAM: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/XJE8M_IJVHw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/XJE8M_IJVHw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/XJE8M_IJVHw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Natashas Kitchen",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-05-17T21:00:22Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "ykvSbfOy2TRKXXKYTocji6HX7Kk",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "4HvLTNy_uyw"
                },
                "snippet": {
                  "publishedAt": "2021-02-19T12:10:28Z",
                  "channelId": "UC4PWgTIkkv5p2shhjiXNiGg",
                  "title": "Secret Hack - Wiring a UK 13A plug - BS1363",
                  "description": "There was a time when electrical appliances in the UK were supplied without a 13A plug fitted. So if you purchased a new light, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/4HvLTNy_uyw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/4HvLTNy_uyw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/4HvLTNy_uyw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "eFIXX",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-02-19T12:10:28Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "LfZlq5JoFOADu0vh1J6cSLQ-Qmc",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "JS6nXa5K2so"
                },
                "snippet": {
                  "publishedAt": "2018-11-12T13:00:55Z",
                  "channelId": "UCgtQ-oP9ulDNf2Ja0-fNB7w",
                  "title": "Salimmik - A Love Letter to Sudan | Creators for Change",
                  "description": "This project was made possible by the YouTube Creators for Change Program. For more info go to: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/JS6nXa5K2so/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/JS6nXa5K2so/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/JS6nXa5K2so/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Maha AJ",
                  "liveBroadcastContent": "none",
                  "publishTime": "2018-11-12T13:00:55Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "cAx9YvruZc_LE09Vw2Pr0qrI_b4",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "SB2XaJWfwgc"
                },
                "snippet": {
                  "publishedAt": "2021-01-02T23:01:37Z",
                  "channelId": "UCuYZByF1E-jO6iYEL1ClJvA",
                  "title": "🏃\u200d♂️ أغنية تمرين الأطفال | قناة كرزة 🎶",
                  "description": "ها قد عادت إلينا كرزة بحلة جديدة مع \u200d♂️ أغنية تمرين الأطفال | قناة كرزة حضروا ملابس الرياضة وقنينة الماء البارد فهناك كثير من ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/SB2XaJWfwgc/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/SB2XaJWfwgc/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/SB2XaJWfwgc/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "قناة كرزة - Karazah Channel",
                  "liveBroadcastContent": "none",
                  "publishTime": "2021-01-02T23:01:37Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "nwb6d5CkEEHhNSwfJ40aOgDadj4",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "Vp6q5QmFmuE"
                },
                "snippet": {
                  "publishedAt": "2022-07-01T22:10:35Z",
                  "channelId": "UCmVnZW_qWXqmyiSikxVojXw",
                  "title": "Snack Ideas | Frozen Yogurt Granola Cups",
                  "description": "",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/Vp6q5QmFmuE/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/Vp6q5QmFmuE/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/Vp6q5QmFmuE/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Winny Hayes",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-07-01T22:10:35Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "8l9xc5v7OTGv0EtRoj9IK4jDxtA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "Uame3ds8nc8"
                },
                "snippet": {
                  "publishedAt": "2020-10-23T20:21:19Z",
                  "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
                  "title": "3 things to know before tonight’s Friday Night SmackDown: WWE Now, Oct. 16, 2020",
                  "description": "Roman Reigns will reveal the consequences for his WWE Hell in a Cell showdown with Jey Uso, Law & Otis comes to ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/Uame3ds8nc8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/Uame3ds8nc8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/Uame3ds8nc8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WWE",
                  "liveBroadcastContent": "none",
                  "publishTime": "2020-10-23T20:21:19Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "eI6wfJr8C3FvzMlv3RusYnIcgWU",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "rHZOKT6XYRM"
                },
                "snippet": {
                  "publishedAt": "2022-12-06T18:45:15Z",
                  "channelId": "UChDk1SYEDyC4s74mKwfBUKQ",
                  "title": "هالصيصان كيوت | كتاكيت بيبي",
                  "description": "short الاغنية كاملة full song https://youtu.be/VizadOimY84?si=zgBzJUnSLTiWaD-u اغنية الاطفال انا الفرخة واحنا الكتاكيت لصابرين ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/rHZOKT6XYRM/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/rHZOKT6XYRM/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/rHZOKT6XYRM/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Katakit Baby TV",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-12-06T18:45:15Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "koIuaZKD_gY1fPZIx85uQcTFfLg",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "VrxPdclpw5s"
                },
                "snippet": {
                  "publishedAt": "2024-10-03T19:53:59Z",
                  "channelId": "UCcEmrJznBWliiWfkNyGx50g",
                  "title": "FORCE HABLA POR PRIMERA VEZ DESPUÉS DE RED BULL + EL MENOR VS STIGMA BARRABASE",
                  "description": "COMPRA MI LIBRO AQUÍ: https://www.dashbook.es/book/freestyle-como-forma-de-vida HAZTE CON MI MARCA DE ROPA: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/VrxPdclpw5s/default_live.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/VrxPdclpw5s/mqdefault_live.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/VrxPdclpw5s/hqdefault_live.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Rodrigo Quesada",
                  "liveBroadcastContent": "live",
                  "publishTime": "2024-10-03T19:53:59Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "Ad6qHgNgzrlVZ7vxqz-sNHec8Xc",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "lrPrCR4_whY"
                },
                "snippet": {
                  "publishedAt": "2022-03-05T00:00:13Z",
                  "channelId": "UCFUWcce_D9zTeRx6L0rasvw",
                  "title": "Lori Gets Passionate | Shark Tank CNBC Premiere Episodes Tuesdays 9 &amp; 10p ET",
                  "description": "Nightcap is a drink covering product designed to keep young women safe from getting drugged at parties. Lori loves the product, ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/lrPrCR4_whY/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/lrPrCR4_whY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/lrPrCR4_whY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "CNBC Ambition",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-03-05T00:00:13Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "1CEXt7N5zdvkBDwp3IR9dX4r0bg",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "yhR4Oxi9EDI"
                },
                "snippet": {
                  "publishedAt": "2022-10-07T23:45:04Z",
                  "channelId": "UCeY0bbntWzzVIaj2z3QigXg",
                  "title": "Hallie Jackson NOW - Oct. 7 | NBC News NOW",
                  "description": "U.S. markets drop after September jobs data point to more Fed interest rate hikes, Vladimir Putin faces new challenges as Kremlin ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/yhR4Oxi9EDI/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/yhR4Oxi9EDI/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/yhR4Oxi9EDI/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "NBC News",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-10-07T23:45:04Z"
                }
              }
            ]
          }

          // example of search https://youtube.googleapis.com/youtube/v3/search?part=snippet&RegionCode=US&q=arthistory&maxResults=25&type=video&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU
        //   let mockData_artHist ={
        //     "kind": "youtube#searchListResponse",
        //     "etag": "tJwgcsd5Ergup12Jw1TsqlhhRDY",
        //     "nextPageToken": "CBkQAA",
        //     "regionCode": "SA",
        //     "pageInfo": {
        //       "totalResults": 1000000,
        //       "resultsPerPage": 25
        //     },
        //     "items": [
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "byVb8ZDPF01Q-8BsrAX8gD3WZLk",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "JWtOFF0iSbo"
        //         },
        //         "snippet": {
        //           "publishedAt": "2022-08-02T16:43:48Z",
        //           "channelId": "UCl3tRSkISghtUQrGLzz-vBg",
        //           "title": "A Brief History of Art Movements | Behind the Masterpiece",
        //           "description": "Each video takes me about 2-3 months, so please consider supporting this channel through one of the ways below! Patreon ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/JWtOFF0iSbo/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/JWtOFF0iSbo/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/JWtOFF0iSbo/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "Behind the Masterpiece",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2022-08-02T16:43:48Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "W3P-uqIelLc5OCTUME3i8LKj6lU",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "RowBusYuSn8"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-10-02T19:11:16Z",
        //           "channelId": "UCns_q-Rz_toVUszWHnwkeBA",
        //           "title": "What was Yoko going to do with the hair? #salvadordali #arthistory",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/RowBusYuSn8/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/RowBusYuSn8/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/RowBusYuSn8/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "TheArtRevival",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-10-02T19:11:16Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "8eYuKprSNSnOh14gJz-Pl9MY-rs",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "8IlEOz-OtVc"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-09-30T22:04:31Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "The world’s oldest color is…. NEON PINK?! 🫥 #art #history #arthistory #archaeology #paint #facts",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/8IlEOz-OtVc/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/8IlEOz-OtVc/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/8IlEOz-OtVc/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-09-30T22:04:31Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "Cx1_DdM7kC3XXwG36c7f9wbpy6s",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "rT6QV0dWJG4"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-05-09T16:00:47Z",
        //           "channelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        //           "title": "What Makes an Artist “Great”? : Crash Course Art History #4",
        //           "description": "Michelangelo. Vincent Van Gogh. Pablo Picasso. The story of art history is told through the biographies of individual celebrity ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/rT6QV0dWJG4/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/rT6QV0dWJG4/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/rT6QV0dWJG4/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "CrashCourse",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-05-09T16:00:47Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "IJrOXQccGLi2sVT03vkqUQ1nZ1I",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "tnSYLSK8tM0"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-04-19T20:49:17Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "THE COLOR LOST TO HISTORY👁️#paint #painting #art #arthistory #interesting #artist #history #mystery",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/tnSYLSK8tM0/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/tnSYLSK8tM0/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/tnSYLSK8tM0/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-04-19T20:49:17Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "p9t0Q0HVL0Rb73GUZtgoDuuQOFU",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "YHcX_nuyQPc"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-04-18T16:00:33Z",
        //           "channelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        //           "title": "How to Look at Art: Crash Course Art History #2",
        //           "description": "How long do you typically look at an artwork, and what can you learn in that time? In this episode of Crash Course Art History, ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/YHcX_nuyQPc/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/YHcX_nuyQPc/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/YHcX_nuyQPc/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "CrashCourse",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-04-18T16:00:33Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "09l333pqjlvF3svmpwnVpNQefjg",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "2jUNyRtSiPU"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-09-25T22:10:28Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "The incredible color invented ✨BY ACCIDENT✨ #art #arthistory #history #interesting #purple #facts",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/2jUNyRtSiPU/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/2jUNyRtSiPU/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/2jUNyRtSiPU/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-09-25T22:10:28Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "_33xVyNy9Lbm8y7f3IY-r9FeMw0",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "hfKymoH9XTc"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-05-02T16:00:37Z",
        //           "channelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        //           "title": "The History of Museums: Crash Course Art History #3",
        //           "description": "In this episode of Crash Course Art History, we'll learn why museums are so much more than just collections of interesting and ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/hfKymoH9XTc/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/hfKymoH9XTc/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/hfKymoH9XTc/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "CrashCourse",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-05-02T16:00:37Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "kUiLHXKgTwkMo38jYinxg-TKBXk",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "5GF2MA6WGNo"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-10-01T14:25:40Z",
        //           "channelId": "UCYdBSjM0TRKSIieIHXmofDg",
        //           "title": "Willem de Kooning early life #artist #arthistory",
        //           "description": "Dive into the fascinating world of Willem de Kooning, a trailblazer in Abstract Expressionism. Discover his journey from Rotterdam ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/5GF2MA6WGNo/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/5GF2MA6WGNo/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/5GF2MA6WGNo/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "Frank Baker",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-10-01T14:25:40Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "DNDp5D4alXhX7icxG9iai28CEtA",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "j9Yd12IXpDo"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-09-28T15:12:00Z",
        //           "channelId": "UCGn7dlcAmH44GqycKa_3ssA",
        //           "title": "Frida Kahlo had a wardrobe as iconic as her art 👗#ArtHistory #GoogleArtsandCulture",
        //           "description": "Subscribe: http://bit.ly/2Vo55DL Discover the inspirational moments, iconic people, and artistic wonders that are available at the ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/j9Yd12IXpDo/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/j9Yd12IXpDo/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/j9Yd12IXpDo/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "Google Arts & Culture",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-09-28T15:12:00Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "iaeyzAD7xGBLhUimC0jFf4TKCcM",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "HCWzzZFCwag"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-06-13T16:00:12Z",
        //           "channelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        //           "title": "How Do Religions Use Art?: Crash Course Art History #8",
        //           "description": "From the Egyptian Book of the Dead to Tibetan Buddhist sand mandalas, humans have always reached for art to express religious ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/HCWzzZFCwag/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/HCWzzZFCwag/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/HCWzzZFCwag/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "CrashCourse",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-06-13T16:00:12Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "pVMiQif5j-ztb9Z6VoY3FOSJvjo",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "PFEFBY-cQhE"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-05-30T16:00:17Z",
        //           "channelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        //           "title": "What Is Good Art? : Crash Course Art History #6",
        //           "description": "What makes some art valuable enough to hang in museums? In this episode of Crash Course Art History, we'll look at different ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/PFEFBY-cQhE/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/PFEFBY-cQhE/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/PFEFBY-cQhE/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "CrashCourse",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-05-30T16:00:17Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "7fYU3NhJ8fA432_3U9y_S6sjKt0",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "PiNw0uJVOwI"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-07-11T22:29:37Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "The world’s most HEAVENLY color 👁️🌌 #art #history #arthistory #oilpainting #painting #paint",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/PiNw0uJVOwI/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/PiNw0uJVOwI/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/PiNw0uJVOwI/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-07-11T22:29:37Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "rptJG2olIYx7GJWeuZAxUMiuw2M",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "t7SJpMZQS8Q"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-06-17T22:36:45Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "THE DEADLIEST GREEN IN HISTORY. ⚠️🍏#arthistory #art #history #oilpainting #poison #painting #green",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/t7SJpMZQS8Q/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/t7SJpMZQS8Q/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/t7SJpMZQS8Q/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-06-17T22:36:45Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "Eu3CAM2xnMz72CDYzudq7_f21zA",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "oESBVt5uCi0"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-05-16T21:29:29Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "100 year old MYSTERY paint…👁️🔵 #art #arthistory #painting #history #artist #paint #interesting",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/oESBVt5uCi0/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/oESBVt5uCi0/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/oESBVt5uCi0/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-05-16T21:29:29Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "Jmc4RaSpJ3Dgh8OFML44QCyGF-Q",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "sM2MOyonDsY"
        //         },
        //         "snippet": {
        //           "publishedAt": "2017-09-18T15:18:01Z",
        //           "channelId": "UC3R-xanNgtoa8b7gpVexVlA",
        //           "title": "How to do visual (formal) analysis in art history",
        //           "description": "Giovanni Bellini, Madonna of the Meadow, c. 1500, oil and egg on synthetic panel, transferred from wood, 67.3 x 86.4 cm (The ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/sM2MOyonDsY/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/sM2MOyonDsY/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/sM2MOyonDsY/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "Smarthistory",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2017-09-18T15:18:01Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "_7HUKqs6tI7BEPIxAtLt4sbx4VM",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "qw3rakBadmo"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-10-02T16:01:01Z",
        //           "channelId": "UCFicBM8Tx2PBr07ImCbrPFg",
        //           "title": "Gassed by John Singer Sargent  #history #art #historicalart #arthistory",
        //           "description": "Gassed is a large oil painting created by John Singer Sargent in 1919, depicting the grim aftermath of a mustard gas attack during ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/qw3rakBadmo/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/qw3rakBadmo/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/qw3rakBadmo/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "Lyra's Letters",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-10-02T16:01:01Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "irMw-BaADi_GG_1xkGndYxwb3LI",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "fQFcGhbqRq8"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-04-06T02:14:31Z",
        //           "channelId": "UCSWdtggn4s1uG92diBbtZng",
        //           "title": "The Fanart That Caused A Furry War | Bad Art History",
        //           "description": "The fanart so divisive that it caused a political furry civil war. This is the incredible saga of the fatfur drawing that tore a Facebook ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/fQFcGhbqRq8/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/fQFcGhbqRq8/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/fQFcGhbqRq8/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "skumbagovich",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-04-06T02:14:31Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "vgROomx_OBw3hkIryBKpaL068xk",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "5mNfb-Ym-Dc"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-09-23T19:44:27Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "This rare paint takes “Beetlejuice” LITERALLY.👁️🪲 #art #painting #arthistory #interesting #history",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/5mNfb-Ym-Dc/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/5mNfb-Ym-Dc/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/5mNfb-Ym-Dc/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-09-23T19:44:27Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "Jc0uXHMEgrCvWpZplj6U0xrAtiM",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "E_h-sxkPQzY"
        //         },
        //         "snippet": {
        //           "publishedAt": "2023-01-23T02:29:41Z",
        //           "channelId": "UCZNStI0lZrdJtQed7h8Ha5Q",
        //           "title": "(S1 E1) Dawn of the High Renaissance, 1475-1520 | A Narrative Art History of the Renaissance",
        //           "description": "Featured in this video: Leonardo, Michelangelo, Raphael, and their contemporaries 0:00 Recap and intro 2:51 Leonardo da Vinci, ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/E_h-sxkPQzY/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/E_h-sxkPQzY/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/E_h-sxkPQzY/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "Narrative Art History",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2023-01-23T02:29:41Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "gsDPoFY1g0tGncWsBERYMxlieiM",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "T6RJUzuVq4w"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-04-04T16:00:21Z",
        //           "channelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        //           "title": "Crash Course Art History Preview",
        //           "description": "Welcome to Crash Course Art History! Over the next 22 episodes, Sarah Urist Green will explore the hidden stories behind ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/T6RJUzuVq4w/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/T6RJUzuVq4w/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/T6RJUzuVq4w/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "CrashCourse",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-04-04T16:00:21Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "zSk22G_N4H093xALDX6qLv_L7K8",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "R6IAQ61nUQk"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-09-30T21:47:20Z",
        //           "channelId": "UCm1Bg9sukZSa2JA8rP4du4g",
        //           "title": "ART HISTORY FUN FACT: IMPRESSIONISM part ii #arthistory #arthistory101 #art #painting #arte #artists",
        //           "description": "Subscribe for more art history content like this!",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/R6IAQ61nUQk/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/R6IAQ61nUQk/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/R6IAQ61nUQk/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "DotART",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-09-30T21:47:20Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "ATOgdOLT2FTVsRLwsWJIIa052I0",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "6PYKx-z9KDI"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-04-23T20:54:34Z",
        //           "channelId": "UCIl5POJSql5EWQcd5NZYnsA",
        //           "title": "100 year old RARE paints🕵🏻\u200d♀️👴🏼 #art #arthistory #painting #history #interesting #facts #paint",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/6PYKx-z9KDI/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/6PYKx-z9KDI/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/6PYKx-z9KDI/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "A Brush with Bekah ",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-04-23T20:54:34Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "7OVJSFWNjWVLYI0QRurWru0qeD0",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "-AKudjxdbQw"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-07-11T16:00:00Z",
        //           "channelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        //           "title": "Bodies in Art: Crash Course Art History #11",
        //           "description": "In this episode of Crash Course Art History, we'll hold a mirror to our bodies…in art, anyway. We'll learn what portraits and ...",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/-AKudjxdbQw/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/-AKudjxdbQw/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/-AKudjxdbQw/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "CrashCourse",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-07-11T16:00:00Z"
        //         }
        //       },
        //       {
        //         "kind": "youtube#searchResult",
        //         "etag": "JlvOGokAA1b773L7IWEiIiaQRJY",
        //         "id": {
        //           "kind": "youtube#video",
        //           "videoId": "4OU1TTar8g4"
        //         },
        //         "snippet": {
        //           "publishedAt": "2024-10-01T14:30:50Z",
        //           "channelId": "UCANp2YejdjMHJ4rIuce93oA",
        //           "title": "Which type of history are you into? #history #art #painting",
        //           "description": "",
        //           "thumbnails": {
        //             "default": {
        //               "url": "https://i.ytimg.com/vi/4OU1TTar8g4/default.jpg",
        //               "width": 120,
        //               "height": 90
        //             },
        //             "medium": {
        //               "url": "https://i.ytimg.com/vi/4OU1TTar8g4/mqdefault.jpg",
        //               "width": 320,
        //               "height": 180
        //             },
        //             "high": {
        //               "url": "https://i.ytimg.com/vi/4OU1TTar8g4/hqdefault.jpg",
        //               "width": 480,
        //               "height": 360
        //             }
        //           },
        //           "channelTitle": "History by Mae",
        //           "liveBroadcastContent": "none",
        //           "publishTime": "2024-10-01T14:30:50Z"
        //         }
        //       }
        //     ]
        //   }
          


        let word ="Sea"

          
        
        

        //Videos By Most Viewd // video ID is string

        let lat = "37.090240"
        let long ="-95.712891"
        // axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&&chart=mostPopular&maxResults=25&regionCode=US&key="+"AIzaSyBGl1c4tHsf-DrPoINTbdVEfeoK5yXTkP4")
        // .then(data=>{
        //    let info = data.data.items[0].snippet
        // //    console.log(data.data.items[0])
        // //    console.log("title : " + info.title)
        // //    console.log("description : " + info.description)
        // //    console.log("channelTitle : " + info.channelTitle)
        // //    console.log("thumbnails: ",info.thumbnails)
        // setVideos( data.data.items)

        // })

        // Videos by ID
        // axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=surfing&type=video&key=`+"AIzaSyBGl1c4tHsf-DrPoINTbdVEfeoK5yXTkP4")
        // .then(data=>{
        //     let info = data.data.items[0].snippet
        //         console.log(data.data.items[0])
        //         console.log("title : " + info.title)
        //         console.log("description : " + info.description)
        //         console.log("channelTitle : " + info.channelTitle)
        //         console.log("thumbnails: ",info.thumbnails)

        //         setVideos(data.data.items)

        // })


//  let key = "AIzaSyAmEU2sa8U9YuQr3TsD1cF9OzxWBhSNl4I"
        // // Videos Search and location
        // axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&q=green&maxResults=5&type=video&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU")
        // .then(data=>{
        //    let info = data.data.items[0].snippet
        //    console.log(data)

        //    setVideos()

        // })


        // by location  -    Riyadh // video ID is Oject
        
        // axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&RegionCode=US&locationRadius=1km&maxResults=25&type=video&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU`)
        // .then(data=>{
        //    let info = data.data.items[0].snippet
        //    console.log(data)
        //    setVideos(data.data.items)

        // })
        // .catch(err=>{
        //     console.log(err)
        // })
       
        // axios.get("/HistById.json")
        // .then(res=>{
         
        
        // })
        // .then(res=>console.log(res))
        
    },[])
    
  return (
    <div>
       
       <div >
     
        {/* <input className='text-black' onChange={handleSearchChange} type="text" />
        <button onClick={handleSearch}>Search</button> */}
        <Navbar  />
       </div>
    
    </div>
  )
}

export default Videos
