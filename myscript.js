import fs from 'fs';
import  axios from 'axios';

async function fetchData(apiUrl, items) {
    const results = [];

    for (const item of items) {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU`);
            results.push(response.data);
        } catch (error) {
            console.error(`Error fetching data for item ${item}:`, error.message);
           
        }
    }

    return results;
}

async function saveToFile(data, filename) {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
        console.log(`Data saved to ${filename}`);
    } catch (error) {
        console.error('Error saving file:', error.message);
    }
}

(async () => {

   let earth = {
    "kind": "youtube#searchListResponse",
    "etag": "DFlBbbM5B7GCN2FZhWIRTbPheu8",
    "nextPageToken": "CBkQAA",
    "regionCode": "SA",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 25
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "_Q-L3IKPv8nPFsbnuWUbRN7BpMY",
        "id": {
          "kind": "youtube#video",
          "videoId": "YXFPy91B-kA"
        },
        "snippet": {
          "publishedAt": "2024-10-03T16:00:23Z",
          "channelId": "UCZlw23gmMYCnM6wdDP0KLsQ",
          "title": "EARTH - Benzin (Official Video)",
          "description": "Po více než 5 letech jsem rozpracoval projekt s názvem SPACE II a tohle je první ochutnávka z něj. Na trackách pracuju ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YXFPy91B-kA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YXFPy91B-kA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YXFPy91B-kA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "EARTH",
          "liveBroadcastContent": "none",
          "publishTime": "2024-10-03T16:00:23Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YY-xnKpUIVFv8zPNYTVfAg-Y7Vo",
        "id": {
          "kind": "youtube#video",
          "videoId": "pvuN_WvF1to"
        },
        "snippet": {
          "publishedAt": "2019-04-19T03:57:44Z",
          "channelId": "UC8rVJyj4zE0S9-sccMLifIA",
          "title": "Lil Dicky - Earth (Official Music Video)",
          "description": "PENITH is here!!! Listen: https://LilDicky.lnk.to/PenithID For more information on how to save the Earth go to ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pvuN_WvF1to/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pvuN_WvF1to/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pvuN_WvF1to/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Lil Dicky",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-19T03:57:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "I5LY9VtQwwBJfwbw4M_xI9VgOjc",
        "id": {
          "kind": "youtube#video",
          "videoId": "LinWJsangs4"
        },
        "snippet": {
          "publishedAt": "2023-07-09T16:42:31Z",
          "channelId": "UCphTF9wHwhCt-BzIq-s4V-g",
          "title": "Earth&#39;s Evolution in 10 Minutes",
          "description": "Let's get personal on Whatsapp: https://whatsapp.com/channel/0029Va8VC502ER6r1yk1yP2Y In the past few billion years, Earth ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LinWJsangs4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LinWJsangs4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LinWJsangs4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "What If",
          "liveBroadcastContent": "none",
          "publishTime": "2023-07-09T16:42:31Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "evibkT_R_lubjbdUhlJDJaUmGDM",
        "id": {
          "kind": "youtube#video",
          "videoId": "VD6xJq8NguY"
        },
        "snippet": {
          "publishedAt": "2024-10-03T13:59:15Z",
          "channelId": "UCsXVk37bltHxD1rDPwtNM8Q",
          "title": "There Is Something Hiding Inside Earth",
          "description": "Get 50% off your first month of a monthly club with code KURZGESAGT at https://www.kiwico.com/kurzgesagt This video was ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VD6xJq8NguY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VD6xJq8NguY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VD6xJq8NguY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Kurzgesagt – In a Nutshell",
          "liveBroadcastContent": "none",
          "publishTime": "2024-10-03T13:59:15Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "PUBa6kPqIfkc5wfLhp_ViLxUEuk",
        "id": {
          "kind": "youtube#video",
          "videoId": "QTJ5W8P-ZpY"
        },
        "snippet": {
          "publishedAt": "2019-04-28T13:08:44Z",
          "channelId": "UCYMEqEU0Px0y_SfN3X_Gbcw",
          "title": "Lil Dicky - EARTH (Lyrics Video)",
          "description": "official music video https://youtu.be/pvuN_WvF1to.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/QTJ5W8P-ZpY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/QTJ5W8P-ZpY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/QTJ5W8P-ZpY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Pinky Aries",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-28T13:08:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "o-svzYZ-epEcXnMKumAjqSYyVXE",
        "id": {
          "kind": "youtube#video",
          "videoId": "HCDVN7DCzYE"
        },
        "snippet": {
          "publishedAt": "2018-11-22T13:00:02Z",
          "channelId": "UCpVm7bg6pXKo1Pr6k5kxG9A",
          "title": "Earth 101 | National Geographic",
          "description": "Earth is the only planet known to maintain life. Find out the origins of our home planet and some of the key ingredients that help ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HCDVN7DCzYE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HCDVN7DCzYE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HCDVN7DCzYE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "National Geographic",
          "liveBroadcastContent": "none",
          "publishTime": "2018-11-22T13:00:02Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "BmxA74EptQSlafEy17WizS-03N8",
        "id": {
          "kind": "youtube#video",
          "videoId": "wm4mcNEFWBk"
        },
        "snippet": {
          "publishedAt": "2024-02-29T13:00:49Z",
          "channelId": "UC_pjSU6cYSWipJkyKRRmoUw",
          "title": "Everything Has Become Earth #planetballs",
          "description": "shorts #earth #cartoon.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wm4mcNEFWBk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wm4mcNEFWBk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wm4mcNEFWBk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SpaceBalls",
          "liveBroadcastContent": "none",
          "publishTime": "2024-02-29T13:00:49Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "RzcMnDSFkgIKbfABlL-undrxBIQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "n4IhCSMkADc"
        },
        "snippet": {
          "publishedAt": "2015-06-27T17:37:27Z",
          "channelId": "UC_sXrcURB-Dh4az_FveeQ0Q",
          "title": "EARTH FROM SPACE: Like You&#39;ve Never Seen Before",
          "description": "Showing cities all over the world from orbit from North America to India with a dramatic Beethoven soundtrack.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/n4IhCSMkADc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/n4IhCSMkADc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/n4IhCSMkADc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DOCUMENTARY TUBE",
          "liveBroadcastContent": "none",
          "publishTime": "2015-06-27T17:37:27Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "gdksxbnrNB77LdQ9xwYosHhAERU",
        "id": {
          "kind": "youtube#video",
          "videoId": "gKdxPw9HDUs"
        },
        "snippet": {
          "publishedAt": "2015-08-08T20:04:19Z",
          "channelId": "UC7EFWpvc1wYuUwrtZ_BLi9A",
          "title": "The Planet Earth | Space Explained by KLT!",
          "description": "Subscribe to KLT: https://www.youtube.com/channel/UC7EFWpvc1wYuUwrtZ_BLi9A?sub_confirmation=1 Listen to KLT Music on ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gKdxPw9HDUs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gKdxPw9HDUs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gKdxPw9HDUs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "KLT",
          "liveBroadcastContent": "none",
          "publishTime": "2015-08-08T20:04:19Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "jXvPN7GRWrrUzZzH2SoW2DKqFhc",
        "id": {
          "kind": "youtube#video",
          "videoId": "8hLgk1-Box8"
        },
        "snippet": {
          "publishedAt": "2022-11-20T04:33:39Z",
          "channelId": "UCbM6RLw-V21m-fkV24v7kHg",
          "title": "Earth Vs Mars | Which Will Win? #shorts",
          "description": "viralshorts #viral #ytshorts #short #shortvideo #trending.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/8hLgk1-Box8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/8hLgk1-Box8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/8hLgk1-Box8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "EDITS ENGINE 🇵🇰",
          "liveBroadcastContent": "none",
          "publishTime": "2022-11-20T04:33:39Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "UDtHegODQMBrSqUkERLHx9-0e30",
        "id": {
          "kind": "youtube#video",
          "videoId": "gJntKcGKsB4"
        },
        "snippet": {
          "publishedAt": "2024-02-23T12:45:02Z",
          "channelId": "UCcyOI2xMEfK940Tgwzb2VHg",
          "title": "UNREAL PLACES - The Most Unbelievable Wonders of Planet Earth",
          "description": "Let's explore the most amazing man-made and natural wonders of our Planet Earth. In this thrilling documentary we will take you ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gJntKcGKsB4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gJntKcGKsB4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gJntKcGKsB4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Travpedia",
          "liveBroadcastContent": "none",
          "publishTime": "2024-02-23T12:45:02Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "JqBbDxgl4-WXW0u8EC7tdRuk_dI",
        "id": {
          "kind": "youtube#video",
          "videoId": "bj2t7yGA_0M"
        },
        "snippet": {
          "publishedAt": "2024-07-15T15:00:38Z",
          "channelId": "UCwmZiChSryoWQCZMIQezgTg",
          "title": "A Journey Across Our Planet | 4K UHD | Planet Earth II | BBC Earth",
          "description": "Across every continent of our magnificent planet, there is wondrous wildlife to be found. From animal parents defending their ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bj2t7yGA_0M/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bj2t7yGA_0M/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bj2t7yGA_0M/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "BBC Earth",
          "liveBroadcastContent": "none",
          "publishTime": "2024-07-15T15:00:38Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "zuKh7elQMx1C2kVxiBlUM-wlNjo",
        "id": {
          "kind": "youtube#video",
          "videoId": "AxS4GnRzZ2E"
        },
        "snippet": {
          "publishedAt": "2024-06-14T17:54:33Z",
          "channelId": "UC1znqKFL3jeR0eoA0pHpzvw",
          "title": "Birth of Planet Earth || 4k",
          "description": "In the fiery beginnings of our young solar system, worlds are born and obliterated. Gas giants stir chaos. And a young sun vents its ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AxS4GnRzZ2E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AxS4GnRzZ2E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AxS4GnRzZ2E/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SpaceRip",
          "liveBroadcastContent": "none",
          "publishTime": "2024-06-14T17:54:33Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "CFnmxn6ZqkVMb8XIOGcEsqUrUzw",
        "id": {
          "kind": "youtube#video",
          "videoId": "9jjTGpWmc5U"
        },
        "snippet": {
          "publishedAt": "2022-02-03T04:08:57Z",
          "channelId": "UCd4iew3AeLPRSCWwu2OitEw",
          "title": "What if the Moon Crashed into the Earth?",
          "description": "Watch Part 2- https://youtu.be/S1Nh36r9f5Y Scientific Version What would happen if the Moon collided with the Earth? #Moonfall ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9jjTGpWmc5U/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9jjTGpWmc5U/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9jjTGpWmc5U/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Shutter Authority",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-03T04:08:57Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Oi6sjXynK-ho8laifcTet9O4VzA",
        "id": {
          "kind": "youtube#video",
          "videoId": "P0Yrfg_GUiU"
        },
        "snippet": {
          "publishedAt": "2021-06-20T09:43:51Z",
          "channelId": "UCD4sfotdkb1hX96FfGbhquQ",
          "title": "Destruction of Earth ☄",
          "description": "Instagram - https://www.instagram.com/aleksey__n TikTok - https://www.tiktok.com/@aleksey__nz #moon #space #earth #apollo ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/P0Yrfg_GUiU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/P0Yrfg_GUiU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/P0Yrfg_GUiU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Aleksey__n",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-20T09:43:51Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "wISV9YcgFTT-EbPSAl5HDzUmo0A",
        "id": {
          "kind": "youtube#video",
          "videoId": "g6hPYqnoQxo"
        },
        "snippet": {
          "publishedAt": "2019-08-10T18:35:44Z",
          "channelId": "UCarFH2x0-9WAFb2WHS9rzYQ",
          "title": "RICE | Lil Dicky - Earth (Asian Parody)",
          "description": "Lil Dicky - Earth (Asian Parody) Now available on Soundcloud and coming soon to Spotify & iTunes! Become a sponsor: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/g6hPYqnoQxo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/g6hPYqnoQxo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/g6hPYqnoQxo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Aznromeo",
          "liveBroadcastContent": "none",
          "publishTime": "2019-08-10T18:35:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "kGC2VZOYW_Ljf1iLkKXzIlYwtqQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "ws52nWqY36k"
        },
        "snippet": {
          "publishedAt": "2023-02-11T12:02:22Z",
          "channelId": "UCW2sHXqEvUbzfMKMM7E_Rkw",
          "title": "Evolution of Earth",
          "description": "Don't forget to like the video, share with friends and subscribe for more! I need your support. This is the original video, you can ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ws52nWqY36k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ws52nWqY36k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ws52nWqY36k/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Calfis Art",
          "liveBroadcastContent": "none",
          "publishTime": "2023-02-11T12:02:22Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "O2RDc3LvqibvOF7NupmwW_Kg-9Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "Yn_U8JqFsa4"
        },
        "snippet": {
          "publishedAt": "2023-03-22T13:00:32Z",
          "channelId": "UC_pjSU6cYSWipJkyKRRmoUw",
          "title": "Earth vs Black Hole #planetballs",
          "description": "shorts #earth #cartoon.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Yn_U8JqFsa4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Yn_U8JqFsa4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Yn_U8JqFsa4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SpaceBalls",
          "liveBroadcastContent": "none",
          "publishTime": "2023-03-22T13:00:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "kzQDamsvyToExlhyukURzBXGXf0",
        "id": {
          "kind": "youtube#video",
          "videoId": "bOSUO2o64mw"
        },
        "snippet": {
          "publishedAt": "2024-04-15T20:30:05Z",
          "channelId": "UCsAfEB3EGo07QRJsQVX_XLw",
          "title": "Earth vs planets #earth #shorts",
          "description": "Earth vs planets #earth #shorts.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/bOSUO2o64mw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/bOSUO2o64mw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/bOSUO2o64mw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "OHN Editz",
          "liveBroadcastContent": "none",
          "publishTime": "2024-04-15T20:30:05Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Mp2C3HwtqihCYNgDhT3x6znrzNU",
        "id": {
          "kind": "youtube#video",
          "videoId": "LdnpbDsYGJQ"
        },
        "snippet": {
          "publishedAt": "2023-10-14T20:07:25Z",
          "channelId": "UC89HymlHT22hr0Ao6oTDYsw",
          "title": "Venus: 😠 #earth #solarballs #shots #space #venus #cute #edit #planet #animation @sollarballs4174",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LdnpbDsYGJQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LdnpbDsYGJQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LdnpbDsYGJQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SpaceLun",
          "liveBroadcastContent": "none",
          "publishTime": "2023-10-14T20:07:25Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "7fM2uWaR043ZHcnNJ31hOsN5rv4",
        "id": {
          "kind": "youtube#video",
          "videoId": "9fv6p_9aX9c"
        },
        "snippet": {
          "publishedAt": "2024-09-18T23:06:32Z",
          "channelId": "UCxB7jMnHekMzHsOl9iZpXrA",
          "title": "Earth Has 2 Moons Now 😭",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9fv6p_9aX9c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9fv6p_9aX9c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9fv6p_9aX9c/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Danny Rayes",
          "liveBroadcastContent": "none",
          "publishTime": "2024-09-18T23:06:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "5h9N0rl26mOy7MPs4pQbiuCCRuk",
        "id": {
          "kind": "youtube#video",
          "videoId": "veE1QyvXpyQ"
        },
        "snippet": {
          "publishedAt": "2019-04-19T05:22:44Z",
          "channelId": "UCi0LydWaEUy3Vx8flL29ebQ",
          "title": "Lil Dicky - Earth (Lyrics)",
          "description": "Download Lil Dicky - Earth (Lyrics): https://LilDicky.lnk.to/Earth Spotify Playlist: https://lnk.to/syrevibesS ⚡ Instagram: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/veE1QyvXpyQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/veE1QyvXpyQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/veE1QyvXpyQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SyrebralVibes",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-19T05:22:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "o8BvO8QcNaXMdaKUkkXkbYUJdVI",
        "id": {
          "kind": "youtube#video",
          "videoId": "w76joN5-7r0"
        },
        "snippet": {
          "publishedAt": "2023-12-29T11:30:20Z",
          "channelId": "UCsAfEB3EGo07QRJsQVX_XLw",
          "title": "Earth hitting by the moon 🥺 #earth #moon #shorts",
          "description": "Earth hitting by the Moon #earth #moon #solarsystem.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/w76joN5-7r0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/w76joN5-7r0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/w76joN5-7r0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "OHN Editz",
          "liveBroadcastContent": "none",
          "publishTime": "2023-12-29T11:30:20Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "fZbqhyOHYNyaoMnyR6C-bSmhHvk",
        "id": {
          "kind": "youtube#video",
          "videoId": "rHRksPZIXQU"
        },
        "snippet": {
          "publishedAt": "2023-05-07T13:00:41Z",
          "channelId": "UC_pjSU6cYSWipJkyKRRmoUw",
          "title": "View Of The Earth During.. #planetballs",
          "description": "shorts #earth #cartoon.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rHRksPZIXQU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rHRksPZIXQU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rHRksPZIXQU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SpaceBalls",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-07T13:00:41Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "stYCVW2qhtgg9KZTEKrcP6nl79s",
        "id": {
          "kind": "youtube#video",
          "videoId": "d5jSiRfba4I"
        },
        "snippet": {
          "publishedAt": "2023-12-29T03:16:10Z",
          "channelId": "UCwWagk-uF5o488wS4udUoxg",
          "title": "We&#39;re killing the Earth 🌎 💔 😢 #savetheearth #art #drawing",
          "description": "Dear 2045, I don't think we're gonna survive. If you end up hearing this story, I just wanna say......I'm sorry.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/d5jSiRfba4I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/d5jSiRfba4I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/d5jSiRfba4I/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "A's Art",
          "liveBroadcastContent": "none",
          "publishTime": "2023-12-29T03:16:10Z"
        }
      }
    ]
  }
  
    // Fill in your API URL and list of items
    const apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=JWtOFF0iSbo&key=AIzaSyBHG8vgwhEl_iQ5dOeZEDduu4ASo14vIkU'; // e.g., 'https://api.example.com/data'
    const items = earth.items; // e.g., ['item1', 'item2', 'item3']

    const results = await fetchData(apiUrl, items);
    await saveToFile(results, 'results.json');
})();