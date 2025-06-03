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
              depDate: "04.06.2025",
              fullday: true,
              type: "Forward",
            },
          ],
          stationFrom: "2900103",
          stationTo: "2900790",
          detailNumPlaces: 1,
          showWithoutPlaces: 0,
        },

        headers: {
          "X-Xsrf-Token": "64f763e3-c5eb-44e0-a3fe-a75883aad2cc",
          Cookie:
            "_ga=GA1.1.1452817594.1733381651; __stripe_mid=450fa355-8e90-46de-b0d1-da3e109c1b8fbf5719; G_ENABLED_IDPS=google; __stripe_sid=22bc924f-9dcb-414e-ab30-d88428a96268fc071a; XSRF-TOKEN=64f763e3-c5eb-44e0-a3fe-a75883aad2cc; _ga_K4H2SZ7MWK=GS1.1.1735271997.23.1.1735272499.0.0.0",
          "Device-Type": "BROWSER",
          "Accept-Language": "uz",
        },
      });

      const trains = result?.data?.express?.direction?.[0]?.trains?.[0]?.train;
      let hasAvailableTickets = false;

      trains.forEach((train) => {
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
