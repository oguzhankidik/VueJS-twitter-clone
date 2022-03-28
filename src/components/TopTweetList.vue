<template>
  <div class="mt-1 main-container pl-6">
    <div class="search-bar flex gap-0 flex-row-reverse">
      <input
        type="text"
        class="outline-none rounded-r-full search-bar-color w-full placeholder- p-2 text-sm focus:bg-black"
        placeholder="Twitter'da Ara"
      />
      <div
        class="search-bar-color py-2 pl-4 pr-2 rounded-l-full text-search-bar-placeholder search-bar-icon float-left"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>

    <div class="tt-section bg-tt-background h-screen rounded-xl mt-3 py-3 px-4">
      <div class="header text-white font-semibold">
        İlgini çekebilecek gündemler
      </div>
      <ul v-for="items in TTList" :key="items">
        <li>
          {{ items.hashtag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const TTList = ref([]);

TTList.value = [{}];

const data = ref([]);

data.value = {
  created_at: "Mon Mar 14 12:30:00 +0000 2022",
  id_str: "1503347714263638024",
  full_text:
    "Kariyerinizde ilerlemenizi sağlayacak ücretsiz online kurslar. Bir ders seçin ya da hemen başlayıp kursun tamamını alın.",
  display_text_range: [0, 120],
  entities: {},
  source:
    '<a href="https://twitter.com" rel="nofollow">Twitter for Advertisers</a>',
  user_id_str: "3308277802",
  retweet_count: 63,
  favorite_count: 733,
  reply_count: 9,
  quote_count: 4,
  conversation_id_str: "1503347714263638024",
  possibly_sensitive_editable: true,
  scopes: {},
  card: {
    name: "unified_card",
    url: "card://1503277770562244611",
    card_type_url: "http://card-type-url-is-deprecated.invalid",
    binding_values: {
      unified_card: {
        type: "STRING",
        string_value:
          '{"type":"image_website","component_objects":{"details_1":{"type":"details","data":{"title":{"content":"Google\'dan e\\u011Fitim al\\u0131n","is_rtl":false},"subtitle":{"content":"learndigital.withgoogle.com","is_rtl":false},"destination":"browser_1"}},"media_1":{"type":"media","data":{"id":"3_1503270662747865090","destination":"browser_1"}}},"destination_objects":{"browser_1":{"type":"browser","data":{"url_data":{"url":"https://ad.doubleclick.net/ddm/trackclk/N5295.130910.TWITTER.COM/B27280052.329301601;dc_trk_aid=521192448;dc_trk_cid=166740067;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=","vanity":"learndigital.withgoogle.com"}}}},"components":["media_1","details_1"],"media_entities":{"3_1503270662747865090":{"id":1503270662747865090,"id_str":"1503270662747865090","indices":[0,0],"media_url":"","media_url_https":"https://pbs.twimg.com/media/FNyws_5aQAI5hMA.jpg","url":"","display_url":"","expanded_url":"","type":"photo","original_info":{"width":800,"height":800,"focus_rects":[{"x":0,"y":352,"h":448,"w":800},{"x":0,"y":0,"h":800,"w":800},{"x":49,"y":0,"h":800,"w":702},{"x":200,"y":0,"h":800,"w":400},{"x":0,"y":0,"h":800,"w":800}]},"sizes":{"small":{"w":680,"h":680,"resize":"fit"},"large":{"w":800,"h":800,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":800,"h":800,"resize":"fit"}},"source_user_id":3308277802,"source_user_id_str":"3308277802","media_key":"3_1503270662747865090","ext":{"mediaColor":{"r":{"ok":{"palette":[{"rgb":{"red":255,"green":255,"blue":255},"percentage":95.18},{"rgb":{"red":152,"green":188,"blue":247},"percentage":1.4},{"rgb":{"red":44,"green":25,"blue":24},"percentage":0.78},{"rgb":{"red":13,"green":60,"blue":123},"percentage":0.54},{"rgb":{"red":245,"green":202,"blue":37},"percentage":0.3}]}},"ttl":-1}}}}}',
      },
      card_url: {
        type: "STRING",
        string_value: "https://twitter.com",
        scribe_key: "card_url",
      },
    },
    card_platform: {
      platform: {
        device: {
          name: "Swift",
          version: "12",
        },
        audience: {
          name: "production",
        },
      },
    },
  },
  lang: "tr",
  ext: {
    superFollowMetadata: {
      r: {
        ok: {},
      },
      ttl: -1,
    },
    enrichments: {
      r: {
        ok: {},
      },
      ttl: -1,
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar:focus-within {
  @apply outline outline-amber-600 outline-1 rounded-full;
}

input:focus + div {
  @apply bg-black;

  & > i {
    @apply text-amber-600;
  }
}
.main-container {
  width: 58%;
}
</style>
