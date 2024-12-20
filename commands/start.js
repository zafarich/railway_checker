// import bot
const {bot} = require("../services/bot.js");

const axios = require("axios");

const bot_name = process.env.BOT_NAME;

bot.command("start", async (ctx) => {
  const chat_id = ctx.message.chat.id;

  let has_error = false;

  setInterval(async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "https://eticket.railway.uz/api/v3/trains/availability/space/between/stations",
        data: {
          direction: [
            {
              depDate: "31.12.2024",
              fullday: true,
              type: "Forward",
            },
          ],
          stationFrom: "2900000",
          stationTo: "2900885",
          detailNumPlaces: 1,
          showWithoutPlaces: 0,
        },

        headers: {
          "X-Xsrf-Token": "1eebe68f-c362-4f97-8c1e-3fe5fe12dfce",
          Cookie:
            "_ga=GA1.1.518240125.1709534066; __stripe_mid=8e26af5c-80ba-473c-a359-3395f017140340230d; G_ENABLED_IDPS=google; __stripe_sid=bbbc1f8a-7815-437d-af39-639ef7046058150520; XSRF-TOKEN=1eebe68f-c362-4f97-8c1e-3fe5fe12dfce; G_AUTHUSER_H=0; _ga_K4H2SZ7MWK=GS1.1.1712641623.9.1.1712643365.0.0.0",
          "Device-Type": "BROWSER",
          "Accept-Language": "uz",
        },
      });

      const trains = result?.data?.express?.direction?.[0]?.trains?.[0]?.train;
      trains.forEach((train) => {
        const cars = train?.places?.cars || [];

        const cars_pk = cars.filter((item) => item.typeShow === "Plaskartli");
        const cars_length = cars_pk?.length;

        if (cars_length) {
          ctx.reply("Bilet chiqdiiiiiiiiiii !!!!!");
        }
      });

      // const result = await axios({
      //   method: "GET",
      //   url: "https://api.iticket.uz/uz/v5/events/search?client=web&q=uzbekistan%20vs",
      // });

      // const events = result.data?.response?.events;

      // if (events?.length > 0) {
      //   ctx.reply("Bilet chiqdiiiiiiiiiii !!!!!");
      // }
    } catch (error) {}
  }, 30000);
});
