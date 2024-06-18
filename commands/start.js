// import bot
const {bot} = require("../services/bot.js");

const axios = require("axios");

bot.command("start", async (ctx) => {
  const chat_id = ctx.message.chat.id;

  let has_error = false;

  setInterval(async () => {
    try {
      const result = {
        express: {
          hasError: false,
          type: "Places",
          direction: [
            {
              type: "Forward",
              notAllTrains: null,
              trains: [
                {
                  date: "27.06.2024",
                  train: [
                    {
                      length: "423",
                      type: "ск",
                      number: "061Ф",
                      number2: "061Ф",
                      departure: {
                        time: "06:21",
                        localTime: "06:21",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      arrival: {
                        time: "12:22",
                        localTime: "12:22",
                        date: "27.06.2024",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      timeInWay: "06:01",
                      departureTrain: {
                        date: "27.06.2024",
                      },
                      elRegPossible: "",
                      parom: null,
                      bus: null,
                      firmName: null,
                      comments: null,
                      places: {
                        cars: [
                          {
                            type: "Сидячий",
                            seats: {
                              seatsUndef: "140",
                              seatsDn: null,
                              seatsUp: null,
                              seatsLateralDn: null,
                              seatsLateralUp: null,
                              freeComp: null,
                            },
                            indexType: "2",
                            freeSeats: "140",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "165160",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: null,
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: "8",
                                    seatsDn: null,
                                    seatsUp: null,
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: null,
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "1С",
                                  },
                                  station: null,
                                },
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "333930",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: null,
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: "8",
                                    seatsDn: null,
                                    seatsUp: null,
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: null,
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "1В",
                                  },
                                  station: null,
                                },
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "102270",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: null,
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: "124",
                                    seatsDn: null,
                                    seatsUp: null,
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: null,
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "2В",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "O'rindiqli",
                          },
                        ],
                      },
                      route: {
                        station: ["Andijon", "Toshkent"],
                      },
                      brand: "Andijan",
                    },
                    {
                      length: "421",
                      type: "ск",
                      number: "125Ф",
                      number2: "125Ф",
                      departure: {
                        time: "11:26",
                        localTime: "11:26",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      arrival: {
                        time: "17:35",
                        localTime: "17:35",
                        date: "27.06.2024",
                        stop: "00:40",
                        localDate: "27.06.2024",
                      },
                      timeInWay: "06:09",
                      departureTrain: {
                        date: "27.06.2024",
                      },
                      elRegPossible: "",
                      parom: null,
                      bus: null,
                      firmName: null,
                      comments: null,
                      places: {
                        cars: [
                          {
                            type: "Плацкартный",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "38",
                              seatsUp: "75",
                              seatsLateralDn: "26",
                              seatsLateralUp: "42",
                              freeComp: "9",
                            },
                            indexType: "3",
                            freeSeats: "181",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "106850",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900002",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "38",
                                    seatsUp: "75",
                                    seatsLateralDn: "26",
                                    seatsLateralUp: "42",
                                    freeComp: "9",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "3П",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Plaskartli",
                          },
                          {
                            type: "Купе",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "19",
                              seatsUp: "30",
                              seatsLateralDn: null,
                              seatsLateralUp: null,
                              freeComp: "7",
                            },
                            indexType: "4",
                            freeSeats: "49",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "155330",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900002",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "19",
                                    seatsUp: "30",
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: "7",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "2У",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Kupe",
                          },
                        ],
                      },
                      route: {
                        station: ["Andijon", "Xiva"],
                      },
                      brand: "Пассажирский",
                    },
                    {
                      length: "423",
                      type: "ск",
                      number: "059Ф",
                      number2: "059Ф",
                      departure: {
                        time: "15:53",
                        localTime: "15:53",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      arrival: {
                        time: "21:48",
                        localTime: "21:48",
                        date: "27.06.2024",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      timeInWay: "05:55",
                      departureTrain: {
                        date: "27.06.2024",
                      },
                      elRegPossible: "",
                      parom: null,
                      bus: null,
                      firmName: null,
                      comments: null,
                      places: {
                        cars: [
                          {
                            type: "Сидячий",
                            seats: {
                              seatsUndef: "194",
                              seatsDn: null,
                              seatsUp: null,
                              seatsLateralDn: null,
                              seatsLateralUp: null,
                              freeComp: null,
                            },
                            indexType: "2",
                            freeSeats: "194",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "165160",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: null,
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: "9",
                                    seatsDn: null,
                                    seatsUp: null,
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: null,
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "1С",
                                  },
                                  station: null,
                                },
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "333930",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: null,
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: "4",
                                    seatsDn: null,
                                    seatsUp: null,
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: null,
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "1В",
                                  },
                                  station: null,
                                },
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "102270",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: null,
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: "181",
                                    seatsDn: null,
                                    seatsUp: null,
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: null,
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "2В",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "O'rindiqli",
                          },
                        ],
                      },
                      route: {
                        station: ["Andijon", "Toshkent"],
                      },
                      brand: "O`zbekiston",
                    },
                    {
                      length: "421",
                      type: "ск",
                      number: "129Ф",
                      number2: "129Ф",
                      departure: {
                        time: "16:24",
                        localTime: "16:24",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      arrival: {
                        time: "22:56",
                        localTime: "22:56",
                        date: "27.06.2024",
                        stop: "00:35",
                        localDate: "27.06.2024",
                      },
                      timeInWay: "06:32",
                      departureTrain: {
                        date: "27.06.2024",
                      },
                      elRegPossible: "",
                      parom: null,
                      bus: null,
                      firmName: null,
                      comments: null,
                      places: {
                        cars: [
                          {
                            type: "Плацкартный",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "2",
                              seatsUp: "53",
                              seatsLateralDn: "34",
                              seatsLateralUp: "36",
                              freeComp: "0",
                            },
                            indexType: "3",
                            freeSeats: "125",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "106850",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900002",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "2",
                                    seatsUp: "53",
                                    seatsLateralDn: "34",
                                    seatsLateralUp: "36",
                                    freeComp: "0",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "3П",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Plaskartli",
                          },
                          {
                            type: "Купе",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "12",
                              seatsUp: "28",
                              seatsLateralDn: null,
                              seatsLateralUp: null,
                              freeComp: "5",
                            },
                            indexType: "4",
                            freeSeats: "40",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "155330",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900002",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "12",
                                    seatsUp: "28",
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: "5",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "2У",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Kupe",
                          },
                        ],
                      },
                      route: {
                        station: ["Andijon", "Termez"],
                      },
                      brand: "Пассажирский",
                    },
                    {
                      length: "388",
                      type: "СК",
                      number: "095Ф",
                      number2: "095Ф",
                      departure: {
                        time: "16:51",
                        localTime: "16:51",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      arrival: {
                        time: "23:49",
                        localTime: "23:49",
                        date: "27.06.2024",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      timeInWay: "06:58",
                      departureTrain: {
                        date: "27.06.2024",
                      },
                      elRegPossible: "",
                      parom: null,
                      bus: null,
                      firmName: null,
                      comments: null,
                      places: {
                        cars: [
                          {
                            type: "Плацкартный",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "70",
                              seatsUp: "72",
                              seatsLateralDn: "36",
                              seatsLateralUp: "36",
                              freeComp: "35",
                            },
                            indexType: "3",
                            freeSeats: "214",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "100510",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "70",
                                    seatsUp: "72",
                                    seatsLateralDn: "36",
                                    seatsLateralUp: "36",
                                    freeComp: "35",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "3П",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Plaskartli",
                          },
                          {
                            type: "Купе",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "29",
                              seatsUp: "30",
                              seatsLateralDn: null,
                              seatsLateralUp: null,
                              freeComp: "14",
                            },
                            indexType: "4",
                            freeSeats: "59",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "136530",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900001",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "29",
                                    seatsUp: "30",
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: "14",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "2Л",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Kupe",
                          },
                        ],
                      },
                      route: {
                        station: ["ANDIJON 1", "TOSHKENT"],
                      },
                      brand: "Пассажирский",
                    },
                    {
                      length: "386",
                      type: "СК",
                      number: "127Ф",
                      number2: "127Ф",
                      departure: {
                        time: "22:03",
                        localTime: "22:03",
                        stop: null,
                        localDate: "27.06.2024",
                      },
                      arrival: {
                        time: "05:14",
                        localTime: "05:14",
                        date: "28.06.2024",
                        stop: "00:30",
                        localDate: "28.06.2024",
                      },
                      timeInWay: "07:11",
                      departureTrain: {
                        date: "27.06.2024",
                      },
                      elRegPossible: "",
                      parom: null,
                      bus: null,
                      firmName: null,
                      comments: null,
                      places: {
                        cars: [
                          {
                            type: "Плацкартный",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "5",
                              seatsUp: "55",
                              seatsLateralDn: "18",
                              seatsLateralUp: "34",
                              freeComp: "1",
                            },
                            indexType: "3",
                            freeSeats: "112",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "100510",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900002",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "5",
                                    seatsUp: "55",
                                    seatsLateralDn: "18",
                                    seatsLateralUp: "34",
                                    freeComp: "1",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "3П",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Plaskartli",
                          },
                          {
                            type: "Купе",
                            seats: {
                              seatsUndef: null,
                              seatsDn: "3",
                              seatsUp: "19",
                              seatsLateralDn: null,
                              seatsLateralUp: null,
                              freeComp: "0",
                            },
                            indexType: "4",
                            freeSeats: "22",
                            tariffs: {
                              tariff: [
                                {
                                  owner: {
                                    type: "УТИ/УТИ",
                                    country: {
                                      name: "УЗБЕКИСТАН",
                                      code: "29",
                                    },
                                    railway: {
                                      name: "УЗБЕКСКИЕ",
                                      code: "73",
                                    },
                                  },
                                  tariff: "145460",
                                  elRegPossible: {
                                    uk: null,
                                    akp: null,
                                  },
                                  classServiceInt: null,
                                  addSigns: null,
                                  tariff2: null,
                                  tariffService: "28000",
                                  ud: null,
                                  sellingInternetForbidden: null,
                                  saleOnTwo: null,
                                  saleOnFour: null,
                                  modificators: null,
                                  passVok: {
                                    stationTo: {
                                      code: "2900002",
                                    },
                                    stationFrom: null,
                                  },
                                  comissionFee: "40000",
                                  swim: null,
                                  selBedding: null,
                                  payFood: null,
                                  selFood: null,
                                  addFood: null,
                                  designCar: null,
                                  seatsSex: null,
                                  seats: {
                                    seatsUndef: null,
                                    seatsDn: "3",
                                    seatsUp: "19",
                                    seatsLateralDn: null,
                                    seatsLateralUp: null,
                                    freeComp: "0",
                                  },
                                  carrier: {
                                    name: "УТИ",
                                  },
                                  classService: {
                                    content: "",
                                    service: {},
                                    type: "2У",
                                  },
                                  station: null,
                                },
                              ],
                            },
                            typeShow: "Kupe",
                          },
                        ],
                      },
                      route: {
                        station: ["Andijan1", "Qung`irot"],
                      },
                      brand: "Пассажирский",
                    },
                  ],
                },
              ],
              passRoute: {
                from: "ANDIJON",
                codeFrom: "2900680",
                codeTo: "2900000",
                to: "TOSHKENT",
              },
            },
          ],
          reqLocalSend: "18.06.2024 17:43:45",
          reqLocalRecv: "18.06.2024 17:43:46",
          reqAddress: "UZB:4823",
          reqExpressDateTime: "18.06.2024 17:42",
          reqExpressZK: "1377901",
          showWithoutPlaces: null,
          content: "\n",
          code: null,
        },
        discount: null,
      };

      const trains = result?.express?.direction?.[0]?.trains?.[0]?.train;

      // trains.forEach((train) => {
      //   const cars = train?.places?.cars || [];

      //   const cars_pk = cars;
      //   const cars_length = cars_pk?.length;

      //   if (cars_length) {
      //     ctx.reply("Bilet chiqdiiiiiiiiiii !!!!!");
      //   }
      // });

      const specific_durbek_aka = trains.find((item) => item.number == "059Ф");

      if (specific_durbek_aka) {
        const cars = specific_durbek_aka?.places?.cars;
        const cars_length = cars?.length;

        if (cars_length) {
          ctx.reply("Bilet chiqdiiiiiiiiiii !!!!!");
        }
      }
    } catch (error) {}
  }, 10000);
});
