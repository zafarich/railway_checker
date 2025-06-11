// import bot
const {bot} = require("../services/bot.js");

const axios = require("axios");

const bot_name = process.env.BOT_NAME;

bot.command("start", async (ctx) => {
  const chat_id = ctx.message.chat.id;

  let has_error = false;

  setInterval(async () => {
    await check_bilet();
  }, 70000);

  async function check_bilet() {
    try {
      const result = await axios({
        method: "POST",
        url: "https://eticket.railway.uz/api/v3/trains/availability/space/between/stations",
        data: {
          direction: [
            {
              depDate: "14.06.2025",
              fullday: true,
              type: "Forward",
            },
          ],
          stationFrom: "2900000",
          stationTo: "2900103",
          detailNumPlaces: 1,
          showWithoutPlaces: 0,
        },

        headers: {
          "X-Xsrf-Token": "c64a2c69-1fb7-4828-b09e-555bf006952b",
          Cookie:
            "__stripe_mid=4f8ee9bb-6d60-4b01-87af-4e4186fd098f5022b0; _ga=GA1.1.975987013.1743228735; G_ENABLED_IDPS=google; XSRF-TOKEN=c64a2c69-1fb7-4828-b09e-555bf006952b; _ga_K4H2SZ7MWK=GS2.1.s1749627334$o10$g0$t1749627334$j60$l0$h0; __stripe_sid=020bf773-cbed-4177-b02c-76ac0abbbaf4688e9a",
          "Device-Type": "BROWSER",
          "Accept-Language": "uz",
        },
      });

      const trains = result?.data?.express?.direction?.[0]?.trains?.[0]?.train;
      const filteredTrains =
        trains?.filter((train) => train.number === "054Ф") || [];
      let hasAvailableTickets = false;

      filteredTrains.forEach((train) => {
        const cars = train?.places?.cars || [];

        const cars_pk = cars.filter(
          (item) => item.typeShow === "Plaskartli" || item.typeShow === "Kupe"
        );
        const cars_length = cars_pk?.length;

        if (cars_length && !hasAvailableTickets) {
          hasAvailableTickets = true;
          ctx.reply("Bilet chiqdiiiiiiiiiii !!!!!");
        }
      });
    } catch (error) {}
  }
});
