function createPiketSchedule() {
  // Mendapatkan kalender default
  var calendar = CalendarApp.getDefaultCalendar();
  
  // Daftar penghuni kontrakan
  var penghuni = [
    { email: "khoirul@gmail.com", name: "Khoirul" },
    { email: "agunghystam@gmail.com", name: "Agung" },
    { email: "abdulmajidr708@gmail.com", name: "Majid" },
    { email: "aanvinanta5@gmail.com", name: "Aan" }
  ];
  
  // Tanggal mulai
  var startDate = new Date("2025-01-11T00:00:00"); // Hari ini (Sabtu, 11 Jan 2025)
  
  // Mengatur jumlah hari untuk dijadwalkan
  var totalDays = 30; // Misalnya, kita ingin menjadwalkan selama 30 hari ke depan
  
  // Membuat jadwal piket
  for (var i = 0; i < totalDays; i++) {
    var currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    // Menentukan siapa yang piket berdasarkan urutan
    var piketIndex = i % penghuni.length;
    var piketPerson = penghuni[piketIndex];
    
    // Membuat acara di kalender
    calendar.createEvent('Piket: ' + piketPerson.name,
      currentDate,
      new Date(currentDate.getTime() + 24 * 60 * 60 * 1000), // Durasi 1 hari
      { guests: piketPerson.email, sendInvites: true });
  }
}
