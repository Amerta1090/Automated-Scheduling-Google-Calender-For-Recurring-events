function createRecurringPiketSchedule() {
  // Email penghuni kontrakan
  const penghuni = [
    { email: "khoirul@gmail.com", name: "Khoirul" },
    { email: "agunghystam@gmail.com", name: "Agung" },
    { email: "abdulmajidr708@gmail.com", name: "Majid" },
    { email: "aanvinanta5@gmail.com", name: "Aan" }
  ];

  // Urutan piket
  const piketOrder = ["Khoirul", "Agung", "Majid", "Aan"];

  // Tanggal mulai (hari ini)
  const startDate = new Date("2025-01-08");

  // Buat event untuk 30 hari ke depan
  const daysToSchedule = 30;

  // Dapatkan kalender default pengguna
  const calendar = CalendarApp.getDefaultCalendar();

  for (let i = 0; i < daysToSchedule; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Tentukan penghuni yang piket berdasarkan urutan
    const piketIndex = i % piketOrder.length;
    const penghuniPiket = penghuni.find(person => person.name === piketOrder[piketIndex]);

    // Format waktu event
    const title = `Piket Harian: ${penghuniPiket.name}`;
    const description = `Penghuni yang piket hari ini adalah ${penghuniPiket.name}.`; 

    // Set jam event (misalnya, mulai pukul 08:00 hingga 20:00)
    const startTime = new Date(currentDate.setHours(8, 0));
    const endTime = new Date(currentDate.setHours(20, 0));

    // Tambahkan event ke kalender
    calendar.createEvent(title, startTime, endTime, {
      description: description,
      guests: penghuniPiket.email,
      sendInvites: true
    });
  }

  Logger.log("Penjadwalan piket berhasil dibuat untuk 30 hari ke depan.");
}
